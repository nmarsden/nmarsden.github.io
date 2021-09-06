import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Background: FunctionalComponent = () => {
    return (
      <div className={style.backgroundContainer}>
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
        <div className={style.backgroundCircle} />
      </div>
    );
};

export default Background;
