import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Banner: FunctionalComponent = () => {
    return (
      <div className={style.banner}>
          <div className={style.heading}>Web Projects</div>
          <div className={style.subHeading}>Crafted by Neil Marsden</div>
      </div>
    );
};

export default Banner;
