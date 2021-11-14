import {FunctionalComponent, h, RenderableProps} from 'preact';
import style from './style.css';

type BannerProps = {
    onBannerClicked: () => void;
}

const Banner: FunctionalComponent<BannerProps> = (props: RenderableProps<BannerProps>) => {
    return (
      <div className={style.bannerWrapper} onClick={props.onBannerClicked}>
        <div className={style.banner}>
            <div className={style.heading}>Web Projects</div>
            <div className={style.subHeading}>Crafted by Neil Marsden</div>
        </div>
      </div>
    );
};

export default Banner;
