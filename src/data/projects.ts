export type Project = {
  name: String;
  screenshot: String;
}

const PROJECTS: Project[] = [
  {
    name: 'Conway',
    screenshot: '../../assets/conway-screenshot.jpg'
  },
  {
    name: 'BF Viz',
    screenshot: '../../assets/bf-viz-screenshot.jpg'
  },
  {
    name: 'Purr Plex',
    screenshot: '../../assets/purr-plex-screenshot.jpg'
  },
  {
    name: 'Fireworks',
    screenshot: '../../assets/fireworks-screenshot.jpg'
  },
  {
    name: 'Crawly',
    screenshot: '../../assets/crawly-screenshot.jpg'
  },
  {
    name: 'Togglefish',
    screenshot: '../../assets/togglefish-screencast-frame.gif'
  },
  {
    name: 'Make \'em Green',
    screenshot: '../../assets/make-em-green-screencast-frame.gif'
  },
  {
    name: 'Crafty Racer',
    screenshot: '../../assets/crafty-racer-screencast-frame.gif'
  }
];

export default PROJECTS;