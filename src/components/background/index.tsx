import { Component, h } from 'preact';
import style from './style.css';
import * as Vector2D from "./vector2D";

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
const MAX_ENEMY_DISTANCE = 150;
const MAX_MOUSE_IDLE_TIME_MSECS = 2000;

let canvas: any;
let ctx: any;
const mouse: { x: number; y: number; lastUpdatedMSecs: number; isIdle: boolean } = { x: 0, y: 0, lastUpdatedMSecs: 0, isIdle: true };
let target: Target;
let enemy: Enemy;

class Target {
    x: number;
    y: number;
    size: number;
    halfSize: number;
    maxSpeed: number;
    speedX: number;
    speedY: number;

    constructor() {
        this.size = 20;
        this.halfSize = this.size / 2;
        this.x = this.size + (Math.random() * (canvas.width - this.size * 2));
        this.y = this.size + (Math.random() * (canvas.height - this.size * 2));
        this.maxSpeed = 2;
        this.speedX = Math.random() > 0.5 ? this.maxSpeed : -this.maxSpeed;
        this.speedY = Math.random() > 0.5 ? this.maxSpeed : -this.maxSpeed;
    }

    draw(): void {
        ctx.fillStyle = 'hsla(220, 100%, 50%, 1)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.strokeWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    update(): void {
        const enemyDistance = Math.sqrt(
          ((this.x - enemy.pos.x) * (this.x - enemy.pos.x)) +
          ((this.y - enemy.pos.y) * (this.y - enemy.pos.y))
        );
        if (enemyDistance < this.size) {
            // re-spawn
            this.x = this.size + (Math.random() * (canvas.width - this.size * 2));
            this.y = this.size + (Math.random() * (canvas.height - this.size * 2));
            this.speedX = Math.random() > 0.5 ? this.maxSpeed : -this.maxSpeed;
            this.speedY = Math.random() > 0.5 ? this.maxSpeed : -this.maxSpeed;
        } else {
            // move
            if (mouse.isIdle) {
                this.x += this.speedX;
                this.y += this.speedY;
            } else {
                this.x = mouse.x;
                this.y = mouse.y;
            }
            if (this.x > (canvas.width - this.halfSize) || this.x < this.halfSize) {
                this.speedX = -this.speedX;
            }
            if (this.y > (canvas.height - this.halfSize) || this.y < this.halfSize) {
                this.speedY = -this.speedY;
            }
        }
    }
}

class Enemy {
    pos: Vector2D.Vector2D;
    vel: Vector2D.Vector2D;
    acc: Vector2D.Vector2D;
    maxSpeed: number;
    maxForce: number;
    size: number;

    constructor() {
        this.pos = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.vel = { x: 0, y: 0 };
        this.acc = { x: 0, y: 0 };
        this.maxSpeed = 4;
        this.maxForce = 0.25;
        this.size = 10;
    }

    draw(): void {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    _seek(target: Vector2D.Vector2D): void {
        let force = Vector2D.subtract(target, this.pos);
        force = Vector2D.magnitude(this.maxSpeed, force);
        force = Vector2D.subtract(force, this.vel);
        force = Vector2D.limit(this.maxForce, force);
        this._applyForce(force);
    }

    _applyForce(force: Vector2D.Vector2D): void {
        this.acc = Vector2D.add(this.acc, force);
    }

    update(): void {
        this._seek({ x: target.x, y: target.y });
        this.vel = Vector2D.add(this.vel, this.acc);
        this.vel = Vector2D.limit(this.maxSpeed, this.vel);
        this.pos = Vector2D.add(this.pos, this.vel);
        this.acc = { x: 0, y: 0 };
    }
}

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

        // update hue & strokeStyle near enemy
        const enemyDistance = Math.sqrt(
          ((this.x - enemy.pos.x) * (this.x - enemy.pos.x)) +
          ((this.y - enemy.pos.y) * (this.y - enemy.pos.y))
        );
        this.hue = (enemyDistance > MAX_ENEMY_DISTANCE) ? this.hue : 160;
        this.strokeStyle = (enemyDistance > MAX_ENEMY_DISTANCE) ? `rgba(255, 255, 255, 0.1)` : `rgba(255, 255, 255, 0.5)`;
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
            mouse.isIdle = false;
            mouse.lastUpdatedMSecs = Date.now();
        });
        window.addEventListener('touchmove', (ev: TouchEvent) => {
            mouse.x = ev.touches[0].pageX;
            mouse.y = ev.touches[0].pageY;
            mouse.isIdle = false;
            mouse.lastUpdatedMSecs = Date.now();
        });

        this.initParticles();

        target = new Target();

        enemy = new Enemy();

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

        // target
        target.update();
        target.draw();

        // enemy
        enemy.update();
        enemy.draw();

        // detect mouse becoming idle
        if (!mouse.isIdle && (Date.now() - mouse.lastUpdatedMSecs) > MAX_MOUSE_IDLE_TIME_MSECS) {
            mouse.isIdle = true;
        }

        this.rafId = window.requestAnimationFrame(this.animate);
    }

    connections = (): void => {
        let opacityValue = 1;
        const connectionDistance = Math.min(MAX_CONNECTION_DISTANCE, canvas.width / 4)
        for (let a = 0; a < PARTICLES.length; a++) {
            // enemy connection
            const enemyDistance = Math.sqrt(
              ((PARTICLES[a].x - enemy.pos.x) * (PARTICLES[a].x - enemy.pos.x)) +
              ((PARTICLES[a].y - enemy.pos.y) * (PARTICLES[a].y - enemy.pos.y))
            );
            if (enemyDistance < MAX_ENEMY_DISTANCE) {
                ctx.strokeStyle = 'rgba(255,255,255,1)';
                ctx.beginPath();
                ctx.lineWidth = CONNECTION_LINE_WIDTH;
                ctx.moveTo(PARTICLES[a].x, PARTICLES[a].y);
                ctx.lineTo(enemy.pos.x, enemy.pos.y);
                ctx.stroke();
            }
            // other particle connection
            for (let b = a; b < PARTICLES.length; b++) {
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