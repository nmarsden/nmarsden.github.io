import {Component, h} from 'preact';
import style from './style.css';
import * as Vector2D from "./vector2D";

type BackgroundProps = {};
type BackgroundState = {};

const MIN_NUMBER_OF_PARTICLES = 100;
const MAX_NUMBER_OF_PARTICLES = 140;
const MAX_CONNECTION_DISTANCE = 200;
const CONNECTION_LINE_WIDTH = 2;
const PARTICLE_MAX_OPACITY = 0.3;
const PARTICLE_OPACITY_RATE = 0.0003;
const PARTICLE_HUE_RATE = 0.06;
const PARTICLE_SHRINK_RATE = 0.003;
const PARTICLE_MAX_SPEED = 0.18;
const PARTICLE_MAX_SIZE = 40;
const PARTICLES: Particle[] = [];
const MAX_ENEMY_DISTANCE = 150;
const MAX_MOUSE_IDLE_TIME_MSECS = 2000;
const MAX_TARGET_SPEED = 0.125;
const MAX_ENEMY_SPEED = 0.18;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
const mouse: { x: number; y: number; lastUpdatedMSecs: number; isIdle: boolean } = { x: 0, y: 0, lastUpdatedMSecs: 0, isIdle: true };
let target: Target;
let enemy: Enemy;
let lastAnimationTimestamp: DOMHighResTimeStamp = 1;
let maxEnemyDistance: number = MAX_ENEMY_DISTANCE;
let maxTargetSpeed: number = MAX_TARGET_SPEED;
let maxEnemySpeed: number = MAX_ENEMY_SPEED;

class Target {
    x: number;
    y: number;
    size: number;
    halfSize: number;
    speedX: number;
    speedY: number;

    constructor() {
        this.size = 20;
        this.halfSize = this.size / 2;
        this.x = this.size + (Math.random() * (canvas.width - this.size * 2));
        this.y = this.size + (Math.random() * (canvas.height - this.size * 2));
        this.speedX = Math.random() > 0.5 ? maxTargetSpeed : -maxTargetSpeed;
        this.speedY = Math.random() > 0.5 ? maxTargetSpeed : -maxTargetSpeed;
    }

    draw(): void {
        ctx.fillStyle = 'hsla(220, 100%, 50%, 1)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    update(deltaTime: number): void {
        const enemyDistance = Math.sqrt(
          ((this.x - enemy.pos.x) * (this.x - enemy.pos.x)) +
          ((this.y - enemy.pos.y) * (this.y - enemy.pos.y))
        );
        if (enemyDistance < this.size) {
            // re-spawn
            this.x = this.size + (Math.random() * (canvas.width - this.size * 2));
            this.y = this.size + (Math.random() * (canvas.height - this.size * 2));
            this.speedX = Math.random() > 0.5 ? maxTargetSpeed : -maxTargetSpeed;
            this.speedY = Math.random() > 0.5 ? maxTargetSpeed : -maxTargetSpeed;
        } else {
            // move
            if (mouse.isIdle) {
                this.x += this.speedX * deltaTime;
                this.y += this.speedY * deltaTime;
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
    maxForce: number;
    size: number;

    constructor() {
        this.pos = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.vel = { x: 0, y: 0 };
        this.acc = { x: 0, y: 0 };
        this.maxForce = 1;
        this.size = 10;
    }

    draw(): void {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    _seek(target: Vector2D.Vector2D, deltaTime: number): void {
        let force = Vector2D.subtract(target, this.pos);
        force = Vector2D.magnitude(maxEnemySpeed * deltaTime, force);
        force = Vector2D.subtract(force, this.vel);
        force = Vector2D.limit(this.maxForce, force);
        this._applyForce(force);
    }

    _applyForce(force: Vector2D.Vector2D): void {
        this.acc = Vector2D.add(this.acc, force);
    }

    update(deltaTime: number): void {
        this._seek({ x: target.x, y: target.y }, deltaTime);
        this.vel = Vector2D.add(this.vel, this.acc);
        this.vel = Vector2D.limit(maxEnemySpeed * deltaTime, this.vel);
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
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    update(deltaTime: number): void {
        this.x += this.speedX * deltaTime;
        this.y += this.speedY * deltaTime;
        if (this.size > 0.2) {
            this.size -= PARTICLE_SHRINK_RATE * deltaTime;
        }
        if (this.opacity < PARTICLE_MAX_OPACITY) {
            this.opacity += PARTICLE_OPACITY_RATE * deltaTime;
        }
        if (this.hue < 220) {
            this.hue += PARTICLE_HUE_RATE * deltaTime;
        }

        // update hue & strokeStyle near enemy
        const enemyDistance = Math.sqrt(
          ((this.x - enemy.pos.x) * (this.x - enemy.pos.x)) +
          ((this.y - enemy.pos.y) * (this.y - enemy.pos.y))
        );
        this.hue = (enemyDistance > maxEnemyDistance) ? this.hue : 160;
        this.strokeStyle = (enemyDistance > maxEnemyDistance) ? `rgba(255, 255, 255, 0.1)` : `rgba(255, 255, 255, 0.5)`;
    }
}

class Background extends Component<BackgroundProps, BackgroundState> {
    rafId: any;

    // eslint-disable-next-line no-useless-constructor
    constructor(props: BackgroundProps) {
        super(props);
    }

    componentDidMount(): void {
        canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.initParticles();
            this.initMaxEnemyDistance();
            this.initMaxTargetAndEnemySpeeds();
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
        this.initMaxEnemyDistance();
        this.initMaxTargetAndEnemySpeeds();

        target = new Target();

        enemy = new Enemy();

        this.rafId = window.requestAnimationFrame(this.animate);
    }

    componentWillUnmount(): void {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }

    initParticles = (): void => {
        const NUM_PARTICLES_PER_1000_PIXELS = 0.25;
        const area = canvas.width * canvas.height;
        const rawNumParticles = Math.floor((area / 1000) * NUM_PARTICLES_PER_1000_PIXELS);
        const numParticles = Math.max(Math.min(MAX_NUMBER_OF_PARTICLES, rawNumParticles), MIN_NUMBER_OF_PARTICLES);
        PARTICLES.length = 0;
        for (let i=0; i<numParticles; i++) {
            PARTICLES.push(new Particle());
        }
    }

    initMaxEnemyDistance = (): void => {
        const area = canvas.width * canvas.height;
        maxEnemyDistance = Math.min(MAX_ENEMY_DISTANCE, Math.floor(Math.sqrt(area * 0.05) / 2));
    }

    initMaxTargetAndEnemySpeeds = (): void => {
        const area = canvas.width * canvas.height;
        maxTargetSpeed = Math.min(MAX_TARGET_SPEED, Math.sqrt(area * 0.002) / 500);
        maxEnemySpeed = Math.min(MAX_ENEMY_SPEED, Math.sqrt(area * 0.005) / 500);
    }

    animate = (timestamp: DOMHighResTimeStamp): void => {
        const deltaTime = timestamp - lastAnimationTimestamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // particles
        for (let i=0; i<PARTICLES.length; i++) {
            PARTICLES[i].update(deltaTime);
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
        target.update(deltaTime);
        target.draw();

        // enemy
        enemy.update(deltaTime);
        enemy.draw();

        // detect mouse becoming idle
        if (!mouse.isIdle && (Date.now() - mouse.lastUpdatedMSecs) > MAX_MOUSE_IDLE_TIME_MSECS) {
            mouse.isIdle = true;
        }

        lastAnimationTimestamp = timestamp;
        this.rafId = window.requestAnimationFrame(this.animate);
    }

    connections = (): void => {
        let opacityValue = 1;
        const connectionDistance = Math.min(MAX_CONNECTION_DISTANCE, canvas.width / 4);
        for (let a = 0; a < PARTICLES.length; a++) {
            // enemy connection
            const enemyDistance = Math.sqrt(
              ((PARTICLES[a].x - enemy.pos.x) * (PARTICLES[a].x - enemy.pos.x)) +
              ((PARTICLES[a].y - enemy.pos.y) * (PARTICLES[a].y - enemy.pos.y))
            );
            if (enemyDistance < maxEnemyDistance) {
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