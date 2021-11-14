import {Component, h, RenderableProps} from 'preact';
import Background from "../background";
import Banner from "../banner";
import ProjectList from "../project-list";
import PROJECTS, {Project} from "../../data/projects";
import ProjectModal from "../project-modal";
import style from "./style.css";

type ProjectsProps = {
    isShown: boolean;
    onBannerClicked: () => void;
};

type ProjectsState = {
    selectedProject?: Project;
};

class Projects extends Component<ProjectsProps, ProjectsState> {

    // eslint-disable-next-line no-useless-constructor
    constructor(props: ProjectsProps) {
        super(props);
    }

    onProjectSelected = (project: Project): void => {
        this.setState({ selectedProject: project });
    }

    onProjectModalClosed = (): void => {
        this.setState({ selectedProject: undefined });
    }

    onBannerClicked = (): void => {
        this.props.onBannerClicked();
    }

    projectsContainerStyles = (isShown: boolean): string => {
        const styles: string[] = isShown ? [ style.projectsContainer, style.isShown ] : [ style.projectsContainer ];
        return styles.join(' ');
    };

    render(props: RenderableProps<ProjectsProps>): JSX.Element {
        return (
          <div className={this.projectsContainerStyles(props.isShown)}>
              <Background isShown={props.isShown} />
              { !this.state.selectedProject ?
                (
                  <div>
                      <Banner onBannerClicked={this.onBannerClicked} />
                      <ProjectList projects={PROJECTS} onProjectSelected={this.onProjectSelected} />
                  </div>
                ) : ''
              }
              <ProjectModal project={this.state.selectedProject} onClosed={this.onProjectModalClosed} />
          </div>
        );
    }
}

export default Projects;