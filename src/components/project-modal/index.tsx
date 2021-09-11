import { Component, h } from 'preact';
import { Project } from "../../data/projects";
import style from './style.css';

export type ProjectModalProps = {
  project?: Project;
  onClosed: () => void;
};

type ProjectModalState = {};

class ProjectModal extends Component<ProjectModalProps, ProjectModalState> {

  // eslint-disable-next-line no-useless-constructor
  constructor(props: ProjectModalProps) {
    super(props);
  }

  closeButtonClicked = (): void => {
    this.props.onClosed();
  };

  modalStyles = (): string => {
    const styles = (this.props.project) ? [style.modal, style.isOpen] : [style.modal];
    return styles.join(' ');
  }

  render(): JSX.Element {
    const project = this.props.project;
    if (typeof project === 'undefined') {
      return (
        <div className={this.modalStyles()} />
      );
    }
    return (
      <div className={this.modalStyles()}>
        <div className={style.header}>
          <div>{project.displayName}</div>
        </div>
        <div className={style.bodyContainer}>
          <div className={style.body}>
            <div className={style.screenshot} style={`background-image: url('../../assets/screenshots/${project.name}.jpg')`} />
            {project.mobileSupport ? '' : <div className={style.warning}>Works in desktop browsers only!</div>}
            <div className={style.subHeading}>Last Updated</div>
            <div>{project.lastUpdated}</div>
            <div className={style.subHeading}>Description</div>
            <div>{project.description}</div>
            <div className={style.subHeading}>Tech</div>
            <div>{project.tech}</div>
          </div>
        </div>
        <div className={style.footer}>
          <div>Launch</div>
          <a className={style.projectLink} href={`https://nmarsden.com/${project.name}`} target="_blank" rel="noreferrer" />
        </div>
        <button className={style.closeButton} onClick={this.closeButtonClicked} />
      </div>
    );
  }
}

export default ProjectModal;