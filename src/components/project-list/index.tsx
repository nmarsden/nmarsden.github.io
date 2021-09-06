import { Component, Fragment, h } from 'preact';
import { Project } from "../../data/projects";
import style from './style.css';

export type ProjectListProps = {
  projects: Project[];
  onProjectSelected: (project: Project) => void;
};

type ProjectListState = {
};

class ProjectList extends Component<ProjectListProps, ProjectListState> {

  constructor(props: ProjectListProps) {
    super(props);

    this.state = {};
  }

  projectCardClickHandler = (project: Project): () => void => {
    return (): void => {
      this.props.onProjectSelected(project);
    };
  };

  render(): JSX.Element {
    return (
      <Fragment>
        <div className={style.projectList}>
          {this.props.projects.map( (project, index) =>
            <div
              key={index}
              className={style.projectCard}
              style={`background-image: url('${project.screenshot}')`}
              onClick={this.projectCardClickHandler(project)}>{project.name}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default ProjectList;