import { h } from "preact";

export type Project = {
  name: string;
  displayName: string;
  numScreenshots: number;
  lastUpdated: string;
  mobileSupport: boolean;
  description: JSX.Element;
  tech: JSX.Element;
};

const PROJECTS: Project[] = [
  {
    name: 'tetris',
    displayName: 'Tetris',
    numScreenshots: 0,
    lastUpdated: 'Mar 2024',
    mobileSupport: true,
    description: <div>A Tetris clone built using <a href="https://github.com/pmndrs/react-three-fiber">React Three Fiber (R3F)</a>.</div>,
    tech: <div><a
      href="https://github.com/pmndrs/react-three-fiber">@react-three/fiber</a>, <a
      href="https://github.com/pmndrs/drei">@react-three/drei</a>, <a
      href="https://github.com/mrdoob/three.js">three.js</a>, <a
      href="https://www.react-spring.dev/docs/guides/react-three-fiber">@react-spring/three</a>, <a
      href="https://github.com/goldfire/howler.js">howler</a>, <a
      href="https://github.com/pmndrs/use-gesture">@use-gesture/react</a>, and <a
      href="https://vitejs.dev/">Vite</a>.</div>
  },
  {
    name: 'r3f-demos',
    displayName: 'R3F Demos',
    numScreenshots: 0,
    lastUpdated: 'Jan 2024',
    mobileSupport: true,
    description: <div>A bunch of demos built using <a href="https://github.com/pmndrs/react-three-fiber">React Three Fiber (R3F)</a>.</div>,
    tech: <div><a
      href="https://github.com/pmndrs/react-three-fiber">@react-three/fiber</a>, <a
      href="https://github.com/pmndrs/drei">@react-three/drei</a>, <a
      href="https://github.com/mrdoob/three.js">three.js</a>, <a
      href="https://github.com/pmndrs/react-three-rapier">@react-three/rapier</a>, <a
      href="https://www.react-spring.dev/docs/guides/react-three-fiber">@react-spring/three</a>, and <a
      href="https://vitejs.dev/">Vite</a>.</div>
  },
  {
    name: 'wordle-helper',
    displayName: 'Wordle Helper',
    numScreenshots: 0,
    lastUpdated: 'Feb 2022',
    mobileSupport: true,
    description: <div>A tool to help play the <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a> game.</div>,
    tech: <div><a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>, <a
      href="https://www.typescriptlang.org/">Typescript</a>, <a
      href="https://fontawesome.com/">Font-Awesome icons</a>, and <a
      href="https://parceljs.org/">Parcel</a>.</div>
  },
  {
    name: 'conway',
    displayName: 'Conway',
    numScreenshots: 12,
    lastUpdated: 'July 2021',
    mobileSupport: true,
    description: <div>The <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Game of Life</a> is not a game
      in the conventional sense.  Select a pattern and watch it evolve each generation according to the four simple
      rules: 1. Loneliness, 2. Statis, 3. Overcrowding, and 4. Reproduction.  Or simply do nothing and let the AUTO mode
      switch between patterns every 100 generations. Try adjusting the speed and colours to your liking. Be amazed at
      how complex behaviours can evolve.</div>,
    tech: <div><a
      href="https://preactjs.com/">Preact</a>, <a
      href="https://www.typescriptlang.org/">Typescript</a>, <a
      href="https://pixijs.com/">PixiJS</a>, <a
      href="https://github.com/naver/egjs-flicking/tree/master/packages/preact-flicking">preact-flicking</a>, <a
      href="https://omgovich.github.io/react-colorful/">react-colorful</a>, <a
      href="https://github.com/JedWatson/classnames">Classnames</a>, <a
      href="https://storybook.js.org/">Storybook</a>.</div>
  },
  {
    name: 'crafty-racer',
    displayName: 'Crafty Racer',
    numScreenshots: 1,
    lastUpdated: 'October 2020',
    mobileSupport: true,
    description: <div>An isometric car racer where the goal is to reach the 10
      waypoints within the time limit. Features include 4 levels of increasing difficulty with a sound track to get your
      blood pumping. Press ESC to activate 'demo' mode from the main menu.</div>,
    tech: <div><a
      href="https://craftyjs.com/">CraftyJS</a>, <a
      href="https://github.com/Kibo/TiledMapBuilder">TiledMapBuilder</a>, <a
      href="https://github.com/jaredwilli/qlass">Qlass</a>, <a
      href="https://opengameart.org/">OpenGameArt</a>, and <a
      href="https://www.freesound.org">Freesound</a>.</div>
  },
  {
    name: 'bf-viz',
    displayName: 'BF Viz',
    numScreenshots: 1,
    lastUpdated: 'September 2020',
    mobileSupport: true,
    description: <div>This is a 3D environment which visualizes a <a
      href="https://en.wikipedia.org/wiki/Brainfuck">brainf**k</a> program as it executes. Choose to run one of the
      preset programs at speeds of 1 to 11, or step through one command at a time. Attempt to wrap your brain around
      this unusual programming language consisting of merely 8 commands.</div>,
    tech: <div><a
      href="https://threejs.org/">ThreeJS</a>, <a
      href="https://github.com/tweenjs/tween.js">tween.js</a>, <a
      href="https://hammerjs.github.io/">hammer.js</a>, <a
      href="https://codemirror.net/">CodeMirror</a>, and <a
      href="https://github.com/dataarts/dat.gui">dat.GUI</a>.</div>
  },
  {
    name: 'purr-plex',
    displayName: 'Purr Plex',
    numScreenshots: 1,
    lastUpdated: 'February 2020',
    mobileSupport: true,
    description: <div>A <a
      href="https://en.wikipedia.org/wiki/Tetris">Tetris</a> like game, but you place each new piece anywhere on the
      board with the goal of completing a row, column, or 3x3 region. Make a COMBO by completing multiple regions with a
      single move. The game ends when there is nowhere to place the next piece.</div>,
    tech: <div><a
      href="https://create-react-app.dev/">Create React App</a>, <a
      href="https://www.typescriptlang.org/">Typescript</a>, <a
      href="https://github.com/css-modules/css-modules">CSS Modules</a>, <a
      href="https://sass-lang.com/">SCSS</a>, <a
      href="https://github.com/JedWatson/classnames">Classnames</a>, <a
      href="https://github.com/STRML/react-draggable">React Draggable</a>, and <a
      href="https://storybook.js.org/">Storybook</a>.</div>
  },
  {
    name: 'fireworks',
    displayName: 'Fireworks',
    numScreenshots: 1,
    lastUpdated: 'January 2020',
    mobileSupport: true,
    description: <div>A 'pass and play' version of the cooperative card game
      Fireworks (aka. <a href="https://en.wikipedia.org/wiki/Hanabi_(card_game)">Hanabi</a>) This variation of Fireworks
      includes the 'Rainbow' suit. Built mobile first with a responsive design, works in portrait or landscape. Press
      and hold the rockets for a surprise!</div>,
    tech: <div><a
      href="https://angular.io/">Angular</a>, <a
      href="https://www.typescriptlang.org/">Typescript</a>, <a
      href="https://lesscss.org/">{'{less}'}</a>, <a
      href="https://hammerjs.github.io/">Hammer</a>, and <a
      href="https://storybook.js.org/">Storybook</a>.</div>
  },
  {
    name: 'crawly',
    displayName: 'Crawly',
    numScreenshots: 1,
    lastUpdated: 'February 2019',
    mobileSupport: false,
    description: <div>A 'snake' like game with a twist. Complete a level by
      making all the floor tiles green. Collect green cubes to grow and try to avoid the red cuboids. Make yourself
      dizzy by pressing 'v' to change the camera view.</div>,
    tech: <div><a
      href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a> and <a
      href="https://unity.com/">Unity</a>.</div>
  },
  {
    name: 'togglefish',
    displayName: 'Togglefish',
    numScreenshots: 1,
    lastUpdated: 'June 2017',
    mobileSupport: true,
    description: <div>Togglefish is an experiment in building an animated scene
      in simply HTML &amp; CSS. No use of JavaScript, SVG, or images. Features include a fish which toggles (naturally),
      a surfing cat and MANY toggles. Explore how the scene was built by toggling CSS styles including border radius,
      box shadow, and transforms. See how togglefish has evolved over time using the togglefish time machine.</div>,
    tech: <div><a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> and <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>.</div>
  },
  {
    name: 'make-em-green',
    displayName: 'Make \'em Green',
    numScreenshots: 1,
    lastUpdated: 'January 2017',
    mobileSupport: true,
    description: <div>A <a
      href="https://en.wikipedia.org/wiki/Lights_Out_(game)">lights out</a> clone which contains 100 levels to solve.
      Features include sound effects, animations, multiple themes to choose from and a tutorial. The puzzles can be
      quite difficult, so it's too bad there is no cheat-sheet... or is there?</div>,
    tech: <div><a href="https://angular.io/">Angular</a>, <a
      href="https://www.typescriptlang.org/">Typescript</a>, <a
      href="https://lesscss.org/">{'{less}'}</a>, <a
      href="https://howlerjs.com/">HowlerJS</a>, <a
      href="https://github.com/encharm/Font-Awesome-SVG-PNG">Font-Awesome
      SVGs</a>, and <a
      href="https://www.freesound.org">Freesound</a>.</div>
  }
];

export default PROJECTS;