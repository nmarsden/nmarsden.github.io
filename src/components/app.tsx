import { Component, h } from 'preact';
import Background from "./background";
import Banner from "./banner";
import ProjectList from "./project-list";
import PROJECTS, {Project} from "../data/projects";
import ProjectModal from "./project-modal";

type AppProps = {};

type AppState = {
  selectedProject?: Project;
};

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      selectedProject: undefined
    }
  }

  onProjectSelected = (project: Project): void => {
    this.setState({ selectedProject: project });
  }

  onProjectModalClosed = (): void => {
    this.setState({ selectedProject: undefined });
  }

  render(): JSX.Element {
    return (
      <div className="main">
        <Background />
        { !this.state.selectedProject ?
          (
            <div>
              <Banner />
              <ProjectList projects={PROJECTS} onProjectSelected={this.onProjectSelected} />
            </div>
          ) : ''
        }
        <ProjectModal project={this.state.selectedProject} onClosed={this.onProjectModalClosed} />
      </div>
    );
  }
}

export default App;
