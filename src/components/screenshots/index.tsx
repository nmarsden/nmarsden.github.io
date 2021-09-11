import {Component, Fragment, h} from 'preact';
import { Project } from "../../data/projects";
import style from './style.css';

export type ScreenshotsProps = {
  project: Project;
};

type ScreenshotsState = {
  selectedIndex: number;
};

class Screenshots extends Component<ScreenshotsProps, ScreenshotsState> {

  constructor(props: ScreenshotsProps) {
    super(props);

    this.state = {
      selectedIndex: 0
    }
  }

  screenshotStyles(index: number): string {
    const styles = (this.state.selectedIndex === index) ? [style.screenshot, style.selected] : [style.screenshot];
    return styles.join(' ');
  }

  navItemStyles(index: number): string {
    const styles = (this.state.selectedIndex === index) ? [style.navItem, style.selected] : [style.navItem];
    return styles.join(' ');
  }

  navItemClicked(index: number): () => void {
    return (): void => {
      this.setState({ selectedIndex: index });
    };
  }

  render(): JSX.Element {
    const project = this.props.project;
    const IMAGE_FILENAMES: string[] = Array.from({length: project.numScreenshots}, (v, k) => `${project.name}-${k}`);
    return (
      <Fragment>
        <div className={style.container}>
          { IMAGE_FILENAMES.map( (name, index) => (
            <div key={index}
                 className={this.screenshotStyles(index)}
                 style={`background-image: url('../../assets/screenshots/${name}.jpg')`} />
          ))}
        </div>
        { IMAGE_FILENAMES.length > 1 ? (
          <div className={style.navigation}>
            { IMAGE_FILENAMES.map( (name, index) => (
              <div key={index}
                   className={this.navItemStyles(index)}
                   onClick={this.navItemClicked(index)}
              />
            ))}
          </div>
        ) : (
          ''
        ) }
      </Fragment>
    )
  }
}

export default Screenshots;