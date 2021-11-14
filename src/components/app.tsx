import { Component, h } from 'preact';
import Home from "./home";
import { Loading } from './loading';
import Projects from "./projects";

type AppProps = {};

type AppState = {
  isLoading: boolean;
  isShowHomePage: boolean;
};

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoading: true,
      isShowHomePage: true,
    }

    document.fonts.ready.then(() => {
      this.setState({ isLoading: false });
    });
  }

  onEnterClicked = (): void => {
    this.setState({ isShowHomePage: false });
  }

  onBannerClicked = (): void => {
    this.setState({ isShowHomePage: true });
  }

  render(): JSX.Element {
    return (
      <div className="main">
        <Loading isShown={this.state.isLoading} />
        <Home isShown={!this.state.isLoading && this.state.isShowHomePage} onEnterClicked={this.onEnterClicked} />
        <Projects isShown={!this.state.isLoading && !this.state.isShowHomePage} onBannerClicked={this.onBannerClicked} />
      </div>
    );
  }
}

export default App;
