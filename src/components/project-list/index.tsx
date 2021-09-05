import { Component, Fragment, h } from 'preact';
import { Project } from "../../data/projects";
import style from './style.css';
import ProjectModal from "../project-modal";

export type ProjectListProps = {
  projects: Project[]
};

type ProjectListState = {
  selectedProject?: Project
};

class ProjectList extends Component<ProjectListProps, ProjectListState> {

  constructor(props: ProjectListProps) {
    super(props);

    this.state = {
      selectedProject: undefined
    }
  }

  projectCardClickHandler = (project: Project): () => void => {
    return (): void => {
      this.setState({ selectedProject: project });
    };
  };

  onProjectModalClosed = (): void => {
    this.setState({ selectedProject: undefined });
  }

  projectListStyles = (): string => {
    const styles = (this.state.selectedProject) ? [style.projectList, style.isHidden] : [style.projectList];
    return styles.join(' ');
  }

  render(): JSX.Element {
    return (
      <Fragment>
        <div className={this.projectListStyles()}>
          {this.props.projects.map( project =>
            <div
              className={style.projectCard}
              style={`background-image: url('${project.screenshot}')`}
              onClick={this.projectCardClickHandler(project)}>{project.name}
            </div>
          )}
        </div>
        <ProjectModal project={this.state.selectedProject} onClosed={this.onProjectModalClosed}/>
      </Fragment>
    );
  }
}

export default ProjectList;