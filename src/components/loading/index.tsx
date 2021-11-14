import {Component, h} from 'preact';
import style from './style.css';

export type LoadingProps = {
  isShown: boolean;
};

type LoadingState = {
};

export class Loading extends Component<LoadingProps, LoadingState> {

  classNames = (...classNames: string[]): string => classNames.join(' ');

  render(): JSX.Element {
    const loadingStyles: string[] = [style['loading']];
    if (!this.props.isShown) {
      loadingStyles.push(style['loading--hide']);
    }
    return (
      <div className={this.classNames(...loadingStyles)}>
        <div className={style['loading-spinner']}>
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--1'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--2'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--3'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--4'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--5'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--6'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--7'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--8'])} />
          <div className={this.classNames(style['loading-spinner-cube'], style['loading-spinner-cube--9'])} />
        </div>
      </div>
    );
  }
}
