import {Component, h, RenderableProps} from 'preact';
import style from './style.css';
import webProjectPointsJSON from '../../data/web-project-points.json';

type HomeProps = {
    isShown: boolean;
    onEnterClicked: () => void;
};

type HomeState = {};

type Mouse = { x: number; y: number; lastUpdatedMSecs: number; isIdle: boolean; radius: number; radiusDiff: number; maxRadius: number };

const PARTICLES: Particle[] = [];
const MAX_MOUSE_IDLE_TIME_MSECS = 2000;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
const mouse: Mouse = { x: 0, y: 0, lastUpdatedMSecs: 0, isIdle: false, radius: 1, radiusDiff: 0.25, maxRadius: 1 };
let lastAnimationTimestamp: DOMHighResTimeStamp = 1;
let particleOpacity = 0.5;
let particleSize = 1;

let webOffset: Point = { x: 0, y: 0 };
let projectsOffset: Point = { x: 0, y: 0 };
let webWidth = 0;
let webHeight = 0;
let projectsHeight = 0;
let projectsWidth = 0;
let verticalSpace = 0;

let craftedByTextHeight = 36;
let craftedByTextPosition = { x: 50, y: 50 };
let craftedByTextWidth = 300;
const craftedByText = 'Crafted by Neil Marsden';

type Point = { x: number; y: number };
type Bounds = { min: Point; max: Point };

class Particle {
    x: number;
    y: number;
    size: number;
    density: number;
    baseX: number;
    baseY: number;

    constructor(point: Point) {
        this.x = point.x;
        this.y = point.y;
        this.baseX = point.x;
        this.baseY = point.y;
        this.size = particleSize;
        this.density = Math.random() * 250 + 50;
    }

    draw(): void {
        // ctx.fillStyle = `rgba(0, 0, 0, ${particleOpacity})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(deltaTime: number): void {
        const timeFactor = 0.01;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirX = dx / distance;
        const forceDirY = dy / distance;

        const maxDistance = mouse.radius;
        // const maxDistance = 130;

        const force = (maxDistance - distance) / maxDistance;
        const dirX = forceDirX * force * this.density;
        const dirY = forceDirY * force * this.density;

        if (distance < maxDistance) {
            this.x -= dirX * deltaTime * timeFactor;
            this.y -= dirY * deltaTime * timeFactor;

            // this.x -= dirX;
            // this.y -= dirY;
        } else {
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx/10 * deltaTime * timeFactor;
                // this.x -= dx/10;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy/10 * deltaTime * timeFactor;
                // this.y -= dy/10;
            }
        }

        // adjust particle size
        const baseDx = this.baseX - this.x;
        const baseDy = this.baseY - this.y;
        const baseDistance = Math.sqrt(baseDx * baseDx + baseDy * baseDy);
        this.size = particleSize + (baseDistance * 0.01);
    }
}

class Home extends Component<HomeProps, HomeState> {
    rafId = 0;

    // eslint-disable-next-line no-useless-constructor
    constructor(props: HomeProps) {
        super(props);
    }

    componentDidMount(): void {
        canvas = document.getElementById('homeCanvas') as HTMLCanvasElement;
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    componentDidUpdate(prevProps: Readonly<HomeProps>): void {
        if (this.props.isShown !== prevProps.isShown) {
            (this.props.isShown) ? this.show() : this.hide();
        }
    }

    show = (): void => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', this.resize);
        window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('touchmove', this.touchmove);

        this.initParticles();

        this.rafId = window.requestAnimationFrame(this.animate);
    };

    hide = (): void => {
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('mousemove', this.mousemove);
        window.removeEventListener('touchmove', this.touchmove);

        window.cancelAnimationFrame(this.rafId);
        this.rafId = 0;
    };

    resize = (): void => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.initParticles();
    };

    mousemove = (ev: MouseEvent): void => {
        mouse.x = ev.pageX;
        mouse.y = ev.pageY;
        mouse.isIdle = false;
        mouse.lastUpdatedMSecs = Date.now();
    };

    touchmove = (ev: TouchEvent): void => {
        mouse.x = ev.touches[0].pageX;
        mouse.y = ev.touches[0].pageY;
        mouse.isIdle = false;
        mouse.lastUpdatedMSecs = Date.now();
    };

    initParticles = (): void => {
        PARTICLES.length = 0;

        particleOpacity = 1;

        particleSize = 0.5 * Math.max(1, Math.min(2, canvas.width / 600));

        const unscaledProjectsBounds = this.calcBounds(webProjectPointsJSON['PROJECTS']);
        const unscaledProjectsWidth = unscaledProjectsBounds.max.x - unscaledProjectsBounds.min.x;
        const scaleFactor = 0.9 * Math.min(canvas.width, 900) / unscaledProjectsWidth;

        verticalSpace = 10 * scaleFactor;

        const webPoints = this.normalizeAndScalePoints(webProjectPointsJSON['WEB'], scaleFactor);
        const webBounds = this.calcBounds(webPoints);
        webWidth = webBounds.max.x;
        webHeight = webBounds.max.y;

        const projectsPoints = this.normalizeAndScalePoints(webProjectPointsJSON['PROJECTS'], scaleFactor);
        const projectsBounds = this.calcBounds(projectsPoints);
        projectsWidth = projectsBounds.max.x;
        projectsHeight = projectsBounds.max.y;

        craftedByTextHeight = projectsHeight * 0.5;

        ctx.font = `${craftedByTextHeight}px "Crafty Girls"`;
        const textMetrics = ctx.measureText(craftedByText);
        craftedByTextWidth = textMetrics.width;

        const totalHeight = webHeight + verticalSpace + projectsHeight + verticalSpace + craftedByTextHeight;

        // console.log('webHeight=           ', webHeight);
        // console.log('verticalSpace=       ', verticalSpace);
        // console.log('projectsHeight=      ', projectsHeight);
        // console.log('verticalSpace=       ', verticalSpace);
        // console.log('craftedByTextHeight= ', craftedByTextHeight);
        // console.log('-------------------------------');
        // console.log('totalHeight=         ', totalHeight);

        webOffset = {
            x: ((canvas.width - webWidth) / 2),
            y: (((canvas.height / 2) - totalHeight) / 2),
        };

        projectsOffset = {
            x: ((canvas.width - projectsWidth) / 2),
            y: webOffset.y + webHeight + verticalSpace,
        };

        for (let i=0; i<webPoints.length; i++) {
            const point = webPoints[i];
            PARTICLES.push(new Particle({ x: webOffset.x + point.x, y: webOffset.y + point.y }));
        }
        for (let i=0; i<projectsPoints.length; i++) {
            const point = projectsPoints[i];
            PARTICLES.push(new Particle({ x: projectsOffset.x + point.x, y: projectsOffset.y + point.y }));
        }

        craftedByTextPosition = {
            x: (canvas.width - craftedByTextWidth) / 2,
            y: projectsOffset.y + projectsHeight + verticalSpace,
        }
    }

    normalizeAndScalePoints = (points: Point[], scaleFactor: number): Point[] => {
        const bounds = this.calcBounds(points);

        return points.map(point => ({ x: (point.x - bounds.min.x) * scaleFactor, y: (point.y - bounds.min.y) * scaleFactor }));
    }

    calcBounds = (points: Point[]): Bounds => {
        const bounds = {
            min: { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER},
            max: { x: 0, y: 0 }
        };
        points.forEach(point => {
            if (point.x < bounds.min.x) bounds.min.x = point.x;
            if (point.x > bounds.max.x) bounds.max.x = point.x;
            if (point.y < bounds.min.y) bounds.min.y = point.y;
            if (point.y > bounds.max.y) bounds.max.y = point.y;
        })
        return bounds;
    }

    animate = (timestamp: DOMHighResTimeStamp): void => {
        this.rafId = window.requestAnimationFrame(this.animate);
        const deltaTime = Math.min(timestamp - lastAnimationTimestamp, 60);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // WEB text
        ctx.font = `${webHeight * 1.3}px "Permanent Marker"`;
        ctx.textBaseline = "top";
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fillText('WEB', (webOffset.x + (webHeight * 0.02)), webOffset.y - (webHeight * 0.25));
        // ctx.lineWidth = 10;
        // ctx.strokeText('WEB', (webOffset.x + (webHeight * 0.02)), webOffset.y - (webHeight * 0.25));

        // PROJECTS text
        ctx.font = `${projectsHeight * 1.3}px "Permanent Marker"`;
        ctx.textBaseline = "top";
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fillText('PROJECTS', (projectsOffset.x - (projectsHeight * 0.1)), projectsOffset.y - (projectsHeight * 0.25));
        // ctx.lineWidth = 10;
        // ctx.strokeText('PROJECTS', (projectsOffset.x - (projectsHeight * 0.1)), projectsOffset.y - (projectsHeight * 0.25));

        // particles
        for (let i = 0; i < PARTICLES.length; i++) {
            PARTICLES[i].update(deltaTime);
            PARTICLES[i].draw();
        }

        // connections
        // this.connections();

        // crafted by text
        ctx.font = `${craftedByTextHeight}px "Crafty Girls"`;
        ctx.textBaseline = "top";
        ctx.fillStyle = "white";
        ctx.fillText(craftedByText, craftedByTextPosition.x, craftedByTextPosition.y, craftedByTextWidth);

        // detect mouse becoming idle
        if (!mouse.isIdle && (Date.now() - mouse.lastUpdatedMSecs) > MAX_MOUSE_IDLE_TIME_MSECS) {
            mouse.isIdle = true;
            mouse.radius = projectsWidth / 8;
            // mouse.radius = 1;
            mouse.maxRadius = projectsWidth * 2;
            // position below PROJECTS text
            mouse.x = canvas.width / 2;
            mouse.y = projectsOffset.y;
        }

        // update mouse radius
        if (mouse.isIdle) {
            // TODO auto-switch between multiple mouse idle behaviours, eg.  figure-eight, left-to-right, up-to-down, down-to-up
            // move mouse in figure eight
            mouse.x = (canvas.width / 2) + ((projectsWidth / 2) * Math.sin(timestamp * 0.0005));
            mouse.y = projectsOffset.y - (verticalSpace/2) + (projectsHeight * Math.sin(timestamp * 0.0005 * 2));

            // grow/shrink radius
            // const speedFactor = Math.min(4, 0.01 + 4 * (mouse.radius / mouse.maxRadius));
            // mouse.radius = mouse.radius + mouse.radiusDiff * deltaTime * 0.5 * speedFactor;
            // if (mouse.radius < 1) {
            //     mouse.radius = 1;
            //     mouse.radiusDiff = -mouse.radiusDiff;
            // }
            // if (mouse.radius > mouse.maxRadius) {
            //     mouse.radius = mouse.maxRadius;
            //     mouse.radiusDiff = -mouse.radiusDiff;
            // }
        } else {
            mouse.radius = projectsWidth / 8;
        }

        // draw mouse position
        // ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
        // ctx.beginPath();
        // ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
        // ctx.fill();
        // draw mouse radius
        // ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
        // ctx.beginPath();
        // ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        // ctx.stroke();

        lastAnimationTimestamp = timestamp;
    }

    connections = (): void => {
        const opacityValue = 1;
        const connectionDistance = webWidth / 16;
        const connectionDistanceRange = 1.5;
        const lineWidth = 0.25 * Math.max(1, Math.min(2, canvas.width / 600));

        // console.log('------------------------------');
        // console.log('webWidth: ', webWidth);
        // console.log('projectsWidth: ', projectsWidth);
        // console.log('connectionDistance: ', connectionDistance);
        // console.log('connectionDistanceRange: ', connectionDistanceRange);
        // console.log('lineWidth: ', lineWidth);

        ctx.lineWidth = lineWidth;

        // const connectionDistance = Math.min(MAX_CONNECTION_DISTANCE, canvas.width / 4);
        for (let a = 0; a < PARTICLES.length; a++) {
            // other particle connection
            for (let b = a; b < PARTICLES.length; b++) {
                const distance = Math.sqrt(
                  ((PARTICLES[a].x - PARTICLES[b].x) * (PARTICLES[a].x - PARTICLES[b].x)) +
                  ((PARTICLES[a].y - PARTICLES[b].y) * (PARTICLES[a].y - PARTICLES[b].y))
                );
                if (distance > (connectionDistance - connectionDistanceRange) && distance < connectionDistance) {
                // if (distance < connectionDistance) {
                    // opacityValue = 0.1;
                    // opacityValue = (1 - (distance / connectionDistance)) * 0.7;
                    ctx.strokeStyle = `rgba(0,0,0,${opacityValue})`;
                    // ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
                    ctx.beginPath();
                    ctx.moveTo(PARTICLES[a].x, PARTICLES[a].y);
                    ctx.lineTo(PARTICLES[b].x, PARTICLES[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    enterButtonClicked = (): void => {
        this.props.onEnterClicked();
    };

    homeContainerStyles = (isShown: boolean): string => {
        const styles: string[] = isShown ? [ style.homeContainer, style.isShown ] : [ style.homeContainer ];
        return styles.join(' ');
    };

    render(props: RenderableProps<HomeProps>): JSX.Element {
        return (
          <div className={this.homeContainerStyles(props.isShown)}>
            <canvas id='homeCanvas' className={style.homeCanvas} />
            <div className={style.enterButton} onClick={this.enterButtonClicked}>ENTER</div>
          </div>
        );
    }
}

export default Home;