module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="qVkA")}({HteQ:function(e,t){e.exports=require("preact")},qVkA:function(e,t,r){"use strict";r.r(t);var o=r("HteQ"),a="backgroundContainer__3dwaC",n="backgroundCircle__2PpWu",i="backgroundCircleMove__3ryaC",s="backgroundCircleMoveLarge__1tOgJ",c=[{duration:10,type:"move"},{duration:17,type:"move-large"},{duration:7,type:"move"},{duration:9,type:"move"},{duration:11,type:"move"},{duration:15,type:"move-large"},{duration:10,type:"move"},{duration:16,type:"move-large"},{duration:8,type:"move"}],h=function(){return Object(o.h)("div",{className:a},c.map((function(e,t){var r="move"===e.type?i:s;return Object(o.h)("div",{key:t,className:n,style:"animation-delay: -"+t+"s; animation-duration: "+e.duration+"s; animation-name: "+r})})))},l="bannerWrapper__AmhuC",p="banner__y9Xfn",d="heading__2rK2p",u="subHeading__e-Diq",m=function(){return Object(o.h)("div",{className:l},Object(o.h)("div",{className:p},Object(o.h)("div",{className:d},"Web Projects"),Object(o.h)("div",{className:u},"Crafted by Neil Marsden")))},b="projectList__3-bgY",f="projectCard__3P67s";function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).projectCardClickHandler=function(e){return function(){r.props.onProjectSelected(e)}},r.state={},r}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,g(t,r),a.prototype.render=function(){var e=this;return Object(o.h)(o.Fragment,null,Object(o.h)("div",{className:b},this.props.projects.map((function(t,r){return Object(o.h)("div",{key:r,className:f,style:"background-image: url('../../assets/screenshots/"+t.name+"-card.jpg')",onClick:e.projectCardClickHandler(t)},t.displayName)}))))},a}(o.Component),O=[{name:"conway",displayName:"Conway",lastUpdated:"July 2021",mobileSupport:!0,description:Object(o.h)("div",null,"The ",Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is not a game in the conventional sense.  Select a pattern and watch it evolve each generation according to the four simple rules: 1. Loneliness, 2. Statis, 3. Overcrowding, and 4. Reproduction.  Or simply do nothing and let the AUTO mode switch between patterns every 100 generations. Try adjusting the speed and colours to your liking. Be amazed at how complex behaviours can evolve."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://preactjs.com/"},"Preact"),", ",Object(o.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(o.h)("a",{href:"https://pixijs.com/"},"PixiJS"),", ",Object(o.h)("a",{href:"https://github.com/naver/egjs-flicking/tree/master/packages/preact-flicking"},"preact-flicking"),", ",Object(o.h)("a",{href:"https://omgovich.github.io/react-colorful/"},"react-colorful"),", ",Object(o.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(o.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crafty-racer",displayName:"Crafty Racer",lastUpdated:"October 2020",mobileSupport:!0,description:Object(o.h)("div",null,"An isometric car racer where the goal is to reach the 10 waypoints within the time limit. Features include 4 levels of increasing difficulty with a sound track to get your blood pumping. Press ESC to activate 'demo' mode from the main menu."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://craftyjs.com/"},"CraftyJS"),", ",Object(o.h)("a",{href:"https://github.com/Kibo/TiledMapBuilder"},"TiledMapBuilder"),", ",Object(o.h)("a",{href:"https://github.com/jaredwilli/qlass"},"Qlass"),", ",Object(o.h)("a",{href:"https://opengameart.org/"},"OpenGameArt"),", and ",Object(o.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")},{name:"bf-viz",displayName:"BF Viz",lastUpdated:"September 2020",mobileSupport:!0,description:Object(o.h)("div",null,"This is a 3D environment which visualizes a ",Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/Brainfuck"},"brainf**k")," program as it executes. Choose to run one of the preset programs at speeds of 1 to 11, or step through one command at a time. Attempt to wrap your brain around this unusual programming language consisting of merely 8 commands."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://threejs.org/"},"ThreeJS"),", ",Object(o.h)("a",{href:"https://github.com/tweenjs/tween.js"},"tween.js"),", ",Object(o.h)("a",{href:"https://hammerjs.github.io/"},"hammer.js"),", ",Object(o.h)("a",{href:"https://codemirror.net/"},"CodeMirror"),", and ",Object(o.h)("a",{href:"https://github.com/dataarts/dat.gui"},"dat.GUI"),".")},{name:"purr-plex",displayName:"Purr Plex",lastUpdated:"February 2020",mobileSupport:!0,description:Object(o.h)("div",null,"A ",Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/Tetris"},"Tetris")," like game, but you place each new piece anywhere on the board with the goal of completing a row, column, or 3x3 region. Make a COMBO by completing multiple regions with a single move. The game ends when there is nowhere to place the next piece."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://create-react-app.dev/"},"Create React App"),", ",Object(o.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(o.h)("a",{href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", ",Object(o.h)("a",{href:"https://sass-lang.com/"},"SCSS"),", ",Object(o.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(o.h)("a",{href:"https://github.com/STRML/react-draggable"},"React Draggable"),", and ",Object(o.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"fireworks",displayName:"Fireworks",lastUpdated:"January 2020",mobileSupport:!0,description:Object(o.h)("div",null,"A 'pass and play' version of the cooperative card game Fireworks (aka. ",Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/Hanabi_(card_game)"},"Hanabi"),") This variation of Fireworks includes the 'Rainbow' suit. Built mobile first with a responsive design, works in portrait or landscape. Press and hold the rockets for a surprise!"),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(o.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(o.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(o.h)("a",{href:"https://hammerjs.github.io/"},"Hammer"),", and ",Object(o.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crawly",displayName:"Crawly",lastUpdated:"February 2019",mobileSupport:!1,description:Object(o.h)("div",null,"A 'snake' like game with a twist. Complete a level by making all the floor tiles green. Collect green cubes to grow and try to avoid the red cuboids. Make yourself dizzy by pressing 'v' to change the camera view."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},"C#")," and ",Object(o.h)("a",{href:"https://unity.com/"},"Unity"),".")},{name:"togglefish",displayName:"Togglefish",lastUpdated:"June 2017",mobileSupport:!0,description:Object(o.h)("div",null,"Togglefish is an experiment in building an animated scene in simply HTML & CSS. No use of JavaScript, SVG, or images. Features include a fish which toggles (naturally), a surfing cat and MANY toggles. Explore how the scene was built by toggling CSS styles including border radius, box shadow, and transforms. See how togglefish has evolved over time using the togglefish time machine."),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"HTML")," and ",Object(o.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS"),".")},{name:"make-em-green",displayName:"Make 'em Green",lastUpdated:"January 2017",mobileSupport:!0,description:Object(o.h)("div",null,"A ",Object(o.h)("a",{href:"https://en.wikipedia.org/wiki/Lights_Out_(game)"},"lights out")," clone which contains 100 levels to solve. Features include sound effects, animations, multiple themes to choose from and a tutorial. The puzzles can be quite difficult, so it's too bad there is no cheat-sheet... or is there?"),tech:Object(o.h)("div",null,Object(o.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(o.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(o.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(o.h)("a",{href:"https://howlerjs.com/"},"HowlerJS"),", ",Object(o.h)("a",{href:"https://github.com/encharm/Font-Awesome-SVG-PNG"},"Font-Awesome SVGs"),", and ",Object(o.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")}],y="modal__2WFem",v="isOpen__24vXj",w="closeButton__2qix0",_="header__2M7VJ",k="bodyContainer__8XCCK",S="body__lrdeI",C="screenshot__1078E",N="warning__FZ-FN",P="subHeading__1f5aE",T="footer__3Qx-r",M="projectLink__1M6jd";function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).closeButtonClicked=function(){r.props.onClosed()},r.modalStyles=function(){return(r.props.project?[y,v]:[y]).join(" ")},r}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,x(t,r),a.prototype.render=function(){var e=this.props.project;return void 0===e?Object(o.h)("div",{className:this.modalStyles()}):Object(o.h)("div",{className:this.modalStyles()},Object(o.h)("div",{className:_},Object(o.h)("div",null,e.displayName)),Object(o.h)("div",{className:k},Object(o.h)("div",{className:S},Object(o.h)("div",{className:C,style:"background-image: url('../../assets/screenshots/"+e.name+".jpg')"}),e.mobileSupport?"":Object(o.h)("div",{className:N},"Works in desktop browsers only!"),Object(o.h)("div",{className:P},"Last Updated"),Object(o.h)("div",null,e.lastUpdated),Object(o.h)("div",{className:P},"Description"),Object(o.h)("div",null,e.description),Object(o.h)("div",{className:P},"Tech"),Object(o.h)("div",null,e.tech))),Object(o.h)("div",{className:T},Object(o.h)("div",null,"Launch"),Object(o.h)("a",{className:M,href:"https://nmarsden.com/"+e.name,target:"_blank",rel:"noreferrer"})),Object(o.h)("button",{className:w,onClick:this.closeButtonClicked}))},a}(o.Component);function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).onProjectSelected=function(e){r.setState({selectedProject:e})},r.onProjectModalClosed=function(){r.setState({selectedProject:void 0})},r.state={selectedProject:void 0},r}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,F(t,r),a.prototype.render=function(){return Object(o.h)("div",{className:"main"},Object(o.h)(h,null),this.state.selectedProject?"":Object(o.h)("div",null,Object(o.h)(m,null),Object(o.h)(j,{projects:O,onProjectSelected:this.onProjectSelected})),Object(o.h)(A,{project:this.state.selectedProject,onClosed:this.onProjectModalClosed}))},a}(o.Component);t.default=U}});
//# sourceMappingURL=ssr-bundle.js.map