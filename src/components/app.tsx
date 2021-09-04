import { Component, h } from 'preact';
import Background from "./background";
import Banner from "./banner";
import ProjectList from "./project-list";
import PROJECTS from "../data/projects";

type AppProps = {};

type AppState = {};

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="main">
        <Background />
        <Banner />
        <ProjectList projects={PROJECTS}/>
      </div>
    );
  }
}

export default App;
