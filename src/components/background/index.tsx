import { Component, h } from 'preact';
import style from './style.css';

type BackgroundProps = {};
type BackgroundState = {};

const MAX_NUMBER_OF_PARTICLES = 200;
const MAX_CONNECTION_DISTANCE = 200;
const CONNECTION_LINE_WIDTH = 2;
const PARTICLE_MAX_OPACITY = 0.3;
const PARTICLE_OPACITY_RATE = 0.005;
const PARTICLE_SHRINK_RATE = 0.05;
const PARTICLE_MAX_SPEED = 3;
const PARTICLE_MAX_SIZE = 40;
const PARTICLES: Particle[] = [];
const MAX_MOUSE_DISTANCE = 150;

let canvas: any;
let ctx: any;
const mouse: {  x?: number; y?: number } = { x: undefined, y: undefined };

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    strokeStyle: string;
    hue: number;

    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (PARTICLE_MAX_SIZE - 1) + 1;
        this.speedX = Math.random() * PARTICLE_MAX_SPEED - PARTICLE_MAX_SPEED/2;
        this.speedY = Math.random() * PARTICLE_MAX_SPEED - PARTICLE_MAX_SPEED/2;
        this.opacity = 0.01;
        this.strokeStyle = `rgba(255, 255, 255, 0.01)`;
        this.hue = 220;
    }

    draw(): void {
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
        ctx.strokeStyle = this.strokeStyle;
        ctx.strokeWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    update(): void {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
            this.size -= PARTICLE_SHRINK_RATE;
        }
        if (this.opacity < PARTICLE_MAX_OPACITY) {
            this.opacity += PARTICLE_OPACITY_RATE;
        }
        if (this.hue < 220) {
            this.hue += 1;
        }

        // update hue & strokeStyle near mouse
        let mouseDistance = 5000;
        if (mouse.x && mouse.y) {
            mouseDistance = Math.sqrt(
              ((this.x - mouse.x) * (this.x - mouse.x)) +
              ((this.y - mouse.y) * (this.y - mouse.y))
            );
        }
        this.hue = (mouseDistance > MAX_MOUSE_DISTANCE) ? this.hue : 160;
        this.strokeStyle = (mouseDistance > MAX_MOUSE_DISTANCE) ? `rgba(255, 255, 255, 0.1)` : `rgba(255, 255, 255, 0.5)`;
    }
}

class Background extends Component<BackgroundProps, BackgroundState> {
    rafId: any;

    // eslint-disable-next-line no-useless-constructor
    constructor(props: BackgroundProps) {
        super(props);
    }

    componentDidMount(): void {
        canvas = document.getElementById('canvas1');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.initParticles();
        });
        window.addEventListener('mousemove', (ev: MouseEvent) => {
            mouse.x = ev.pageX;
            mouse.y = ev.pageY;
        });
        window.addEventListener('touchmove', (ev: TouchEvent) => {
            mouse.x = ev.touches[0].pageX;
            mouse.y = ev.touches[0].pageY;
        });

        this.initParticles();

        this.rafId = window.requestAnimationFrame(this.animate);
    }

    componentWillUnmount(): void {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }

    initParticles = (): void => {
        const numParticles = Math.min(MAX_NUMBER_OF_PARTICLES, (canvas.width * canvas.height) / 2000);
        PARTICLES.length = 0;
        for (let i=0; i<numParticles; i++) {
            PARTICLES.push(new Particle());
        }
    }

    animate = (): void => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // particles
        for (let i=0; i<PARTICLES.length; i++) {
            PARTICLES[i].update();
            PARTICLES[i].draw();
            if (
              PARTICLES[i].size < 0.3
              || PARTICLES[i].x < -PARTICLES[i].size
              || PARTICLES[i].x > canvas.width + PARTICLES[i].size
              || PARTICLES[i].y < -PARTICLES[i].size
              || PARTICLES[i].y > canvas.height + PARTICLES[i].size
            ) {
                PARTICLES.splice(i, 1);
                i--;
                PARTICLES.push(new Particle());
            }
        }
        // connections
        this.connections();

        // mouse circle
        if (mouse.x && mouse.y) {
            ctx.fillStyle = `rgba(255, 255, 255, 1)`;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
            ctx.fill();
        }

        this.rafId = window.requestAnimationFrame(this.animate);
    }

    connections = (): void => {
        let opacityValue = 1;
        const connectionDistance = Math.min(MAX_CONNECTION_DISTANCE, canvas.width / 4)
        for (let a = 0; a < PARTICLES.length; a++) {
            // mouse connection
            if (mouse.x && mouse.y) {
                const mouseDistance = Math.sqrt(
                  ((PARTICLES[a].x - mouse.x) * (PARTICLES[a].x - mouse.x)) +
                  ((PARTICLES[a].y - mouse.y) * (PARTICLES[a].y - mouse.y))
                );
                if (mouseDistance < MAX_MOUSE_DISTANCE) {
                    ctx.strokeStyle = 'rgba(255,255,255,1)';
                    ctx.beginPath();
                    ctx.lineWidth = CONNECTION_LINE_WIDTH;
                    ctx.moveTo(PARTICLES[a].x, PARTICLES[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
            // other particle connection
            if (PARTICLES[a].opacity < PARTICLE_MAX_OPACITY) {
                continue;
            }
            for (let b = a; b < PARTICLES.length; b++) {
                if (PARTICLES[b].opacity < PARTICLE_MAX_OPACITY) {
                    continue;
                }
                const distance = Math.sqrt(
                  ((PARTICLES[a].x - PARTICLES[b].x) * (PARTICLES[a].x - PARTICLES[b].x)) +
                  ((PARTICLES[a].y - PARTICLES[b].y) * (PARTICLES[a].y - PARTICLES[b].y))
                );
                if (distance < connectionDistance) {
                    opacityValue = (1 - (distance / connectionDistance)) * 0.7;
                    ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
                    ctx.beginPath();
                    ctx.lineWidth = CONNECTION_LINE_WIDTH;
                    ctx.moveTo(PARTICLES[a].x, PARTICLES[a].y);
                    ctx.lineTo(PARTICLES[b].x, PARTICLES[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    render(): JSX.Element {
        return (
            <canvas id='canvas1' className={style.backgroundCanvas} />
        );
    }
}

export default Background;