import { FunctionalComponent, h } from 'preact';
import style from './style.css';

type AnimationType = 'move' | 'move-large';
type Animation = {
    duration: number;
    type: AnimationType;
};

const CIRCLES: Animation[] = [
    { duration: 10, type: 'move' },
    { duration: 17, type: 'move-large' },
    { duration:  7, type: 'move' },
    { duration:  9, type: 'move' },
    { duration: 11, type: 'move' },
    { duration: 15, type: 'move-large' },
    { duration: 10, type: 'move' },
    { duration: 16, type: 'move-large' },
    { duration:  8, type: 'move' },
];

const Background: FunctionalComponent = () => {
    return (
      <div className={style.backgroundContainer}>
          { CIRCLES.map((circle, index) => {
            const animationName = circle.type === 'move' ? style.backgroundCircleMove : style.backgroundCircleMoveLarge;
            return <div key={index}
                   className={style.backgroundCircle}
                   style={`animation-delay: -${index}s; animation-duration: ${circle.duration}s; animation-name: ${animationName}`} />
          })}
      </div>
    );
};

export default Background;
