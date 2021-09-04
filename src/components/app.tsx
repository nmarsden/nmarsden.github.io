import { Component, h } from 'preact';
type AppProps = {};

type AppState = {};

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="background-container">
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
          <div className="background-circle"/>
        </div>
        <div className="main">
          <div className="main-banner">
            <div className="heading">Web Projects</div>
            <div className="sub-heading">Crafted by Neil Marsden</div>
          </div>
          <div className="project-list">
            <div className="project-card">Conway</div>
            <div className="project-card screenshot--bf-viz">BF Viz</div>
            <div className="project-card screenshot--purr-plex">Purr Plex</div>
            <div className="project-card screenshot--fireworks">Fireworks</div>
            <div className="project-card screenshot--crawly">Crawly</div>
            <div className="project-card screenshot--togglefish">Togglefish</div>
            <div className="project-card screenshot--make-em-green">Make 'em Green</div>
            <div className="project-card screenshot--crafty-racer">Crafty Racer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
