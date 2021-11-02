module.exports=function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s="qVkA")}({HteQ:function(e,t){e.exports=require("preact")},qVkA:function(e,t,i){"use strict";i.r(t);var s=i("HteQ"),r="backgroundCanvas__1-DUI";function o(e,t){return{x:e*t.x,y:e*t.y}}function n(e,t){return{x:e.x+t.x,y:e.y+t.y}}function a(e,t){return{x:e.x-t.x,y:e.y-t.y}}function h(e){var t=e.x,i=e.y;return Math.sqrt(t*t+i*i)}function c(e){var t=h(e);return 0===t?e:o(1/t,e)}var l=c;function d(e,t){return o(e,l(t))}function p(e,t){return h(t)>e?d(e,t):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,f,b,y,g=[],v={x:0,y:0,lastUpdatedMSecs:0,isIdle:!0},j=1,O=150,w=.125,S=.18,x=function(){function e(){this.x=void 0,this.y=void 0,this.size=void 0,this.halfSize=void 0,this.speedX=void 0,this.speedY=void 0,this.size=20,this.halfSize=this.size/2,this.x=this.size+Math.random()*(m.width-2*this.size),this.y=this.size+Math.random()*(m.height-2*this.size),this.speedX=Math.random()>.5?w:-w,this.speedY=Math.random()>.5?w:-w}var t=e.prototype;return t.draw=function(){f.fillStyle="hsla(220, 100%, 50%, 1)",f.strokeStyle="rgba(255, 255, 255, 0.5)",f.lineWidth=5,f.beginPath(),f.arc(this.x,this.y,this.size,0,2*Math.PI),f.fill(),f.stroke()},t.update=function(e){Math.sqrt((this.x-y.pos.x)*(this.x-y.pos.x)+(this.y-y.pos.y)*(this.y-y.pos.y))<this.size?(this.x=this.size+Math.random()*(m.width-2*this.size),this.y=this.size+Math.random()*(m.height-2*this.size),this.speedX=Math.random()>.5?w:-w,this.speedY=Math.random()>.5?w:-w,v.isIdle=!0):(v.isIdle?(this.x+=this.speedX*e,this.y+=this.speedY*e):(this.x=v.x,this.y=v.y),(this.x>m.width-this.halfSize||this.x<this.halfSize)&&(this.speedX=-this.speedX),(this.y>m.height-this.halfSize||this.y<this.halfSize)&&(this.speedY=-this.speedY))},e}(),_=function(){function e(){this.pos=void 0,this.vel=void 0,this.acc=void 0,this.maxForce=void 0,this.size=void 0,this.pos={x:Math.random()*m.width,y:Math.random()*m.height},this.vel={x:0,y:0},this.acc={x:0,y:0},this.maxForce=1,this.size=10}var t=e.prototype;return t.draw=function(){f.fillStyle="rgba(255, 255, 255, 1)",f.beginPath(),f.arc(this.pos.x,this.pos.y,this.size,0,2*Math.PI),f.fill()},t._seek=function(e,t){var i=a(e,this.pos);i=a(i=d(S*t,i),this.vel),i=p(this.maxForce,i),this._applyForce(i)},t._applyForce=function(e){this.acc=n(this.acc,e)},t.update=function(e){this._seek({x:b.x,y:b.y},e),this.vel=n(this.vel,this.acc),this.vel=p(S*e,this.vel),this.pos=n(this.pos,this.vel),this.acc={x:0,y:0}},e}(),k=function(){function e(){this.x=void 0,this.y=void 0,this.size=void 0,this.speedX=void 0,this.speedY=void 0,this.opacity=void 0,this.strokeStyle=void 0,this.hue=void 0,this.x=Math.random()*m.width,this.y=Math.random()*m.height,this.size=39*Math.random()+1,this.speedX=.18*Math.random()-.09,this.speedY=.18*Math.random()-.09,this.opacity=.01,this.strokeStyle="rgba(255, 255, 255, 0.01)",this.hue=220}var t=e.prototype;return t.draw=function(){f.fillStyle="hsla("+this.hue+", 100%, 50%, "+this.opacity+")",f.strokeStyle=this.strokeStyle,f.lineWidth=2,f.beginPath(),f.arc(this.x,this.y,this.size,0,2*Math.PI),f.fill(),f.stroke()},t.update=function(e){this.x+=this.speedX*e,this.y+=this.speedY*e,this.size>.2&&(this.size-=.003*e,this.size=Math.max(this.size,.2)),this.opacity<.3&&(this.opacity+=3e-4*e,this.opacity=Math.min(this.opacity,40)),this.hue<220&&(this.hue+=.06*e,this.hue=Math.min(this.hue,220));var t=Math.sqrt((this.x-y.pos.x)*(this.x-y.pos.x)+(this.y-y.pos.y)*(this.y-y.pos.y));this.hue=t>O?this.hue:160,this.strokeStyle=t>O?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.5)"},e}(),M=function(e){var t,i;function o(t){var i;return(i=e.call(this,t)||this).rafId=void 0,i.initParticles=function(){var e=m.width*m.height,t=Math.floor(e/1e3*.25),i=Math.max(Math.min(140,t),100);g.length=0;for(var s=0;s<i;s++)g.push(new k)},i.initMaxEnemyDistance=function(){var e=m.width*m.height;O=Math.min(150,Math.floor(Math.sqrt(.05*e)/2))},i.initMaxTargetAndEnemySpeeds=function(){var e=m.width*m.height;w=Math.min(.125,Math.sqrt(.002*e)/500),S=Math.min(.18,Math.sqrt(.005*e)/500)},i.animate=function(e){var t=e-j;f.clearRect(0,0,m.width,m.height);for(var s=0;s<g.length;s++)g[s].update(t),g[s].draw(),(g[s].size<.3||g[s].x<-g[s].size||g[s].x>m.width+g[s].size||g[s].y<-g[s].size||g[s].y>m.height+g[s].size)&&(g.splice(s,1),s--,g.push(new k));i.connections(),b.update(t),b.draw(),y.update(t),y.draw(),!v.isIdle&&Date.now()-v.lastUpdatedMSecs>2e3&&(v.isIdle=!0),j=e,i.rafId=window.requestAnimationFrame(i.animate)},i.connections=function(){for(var e=1,t=Math.min(200,m.width/4),i=0;i<g.length;i++){Math.sqrt((g[i].x-y.pos.x)*(g[i].x-y.pos.x)+(g[i].y-y.pos.y)*(g[i].y-y.pos.y))<O&&(f.strokeStyle="rgba(255,255,255,1)",f.beginPath(),f.lineWidth=2,f.moveTo(g[i].x,g[i].y),f.lineTo(y.pos.x,y.pos.y),f.stroke());for(var s=i;s<g.length;s++){var r=Math.sqrt((g[i].x-g[s].x)*(g[i].x-g[s].x)+(g[i].y-g[s].y)*(g[i].y-g[s].y));r<t&&(e=.7*(1-r/t),f.strokeStyle="rgba(255,255,255,"+e+")",f.beginPath(),f.lineWidth=2,f.moveTo(g[i].x,g[i].y),f.lineTo(g[s].x,g[s].y),f.stroke())}}},i}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,u(t,i);var n=o.prototype;return n.componentDidMount=function(){var e=this;(m=document.getElementById("canvas1")).width=window.innerWidth,m.height=window.innerHeight,f=m.getContext("2d"),window.addEventListener("resize",(function(){m.width=window.innerWidth,m.height=window.innerHeight,e.initParticles(),e.initMaxEnemyDistance(),e.initMaxTargetAndEnemySpeeds()})),window.addEventListener("mousemove",(function(e){v.x=e.pageX,v.y=e.pageY,v.isIdle=!1,v.lastUpdatedMSecs=Date.now()})),window.addEventListener("touchmove",(function(e){v.x=e.touches[0].pageX,v.y=e.touches[0].pageY,v.isIdle=!1,v.lastUpdatedMSecs=Date.now()})),this.initParticles(),this.initMaxEnemyDistance(),this.initMaxTargetAndEnemySpeeds(),b=new x,y=new _,this.rafId=window.requestAnimationFrame(this.animate)},n.componentWillUnmount=function(){window.cancelAnimationFrame(this.rafId),this.rafId=null},n.render=function(){return Object(s.h)("canvas",{id:"canvas1",className:r})},o}(s.Component),C="bannerWrapper__AmhuC",z="banner__y9Xfn",P="heading__2rK2p",N="subHeading__e-Diq",T=function(){return Object(s.h)("div",{className:C},Object(s.h)("div",{className:z},Object(s.h)("div",{className:P},"Web Projects"),Object(s.h)("div",{className:N},"Crafted by Neil Marsden")))},F="projectList__3-bgY",I="projectCard__3P67s";function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).projectCardClickHandler=function(e){return function(){i.props.onProjectSelected(e)}},i.state={},i}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,A(t,i),r.prototype.render=function(){var e=this;return Object(s.h)(s.Fragment,null,Object(s.h)("div",{className:F},this.props.projects.map((function(t,i){return Object(s.h)("div",{key:i,className:I,style:"background-image: url('../../assets/screenshots/"+t.name+"-0-card.jpg')",onClick:e.projectCardClickHandler(t)},t.displayName)}))))},r}(s.Component),q=[{name:"conway",displayName:"Conway",numScreenshots:12,lastUpdated:"July 2021",mobileSupport:!0,description:Object(s.h)("div",null,"The ",Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is not a game in the conventional sense.  Select a pattern and watch it evolve each generation according to the four simple rules: 1. Loneliness, 2. Statis, 3. Overcrowding, and 4. Reproduction.  Or simply do nothing and let the AUTO mode switch between patterns every 100 generations. Try adjusting the speed and colours to your liking. Be amazed at how complex behaviours can evolve."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://preactjs.com/"},"Preact"),", ",Object(s.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(s.h)("a",{href:"https://pixijs.com/"},"PixiJS"),", ",Object(s.h)("a",{href:"https://github.com/naver/egjs-flicking/tree/master/packages/preact-flicking"},"preact-flicking"),", ",Object(s.h)("a",{href:"https://omgovich.github.io/react-colorful/"},"react-colorful"),", ",Object(s.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(s.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crafty-racer",displayName:"Crafty Racer",numScreenshots:1,lastUpdated:"October 2020",mobileSupport:!0,description:Object(s.h)("div",null,"An isometric car racer where the goal is to reach the 10 waypoints within the time limit. Features include 4 levels of increasing difficulty with a sound track to get your blood pumping. Press ESC to activate 'demo' mode from the main menu."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://craftyjs.com/"},"CraftyJS"),", ",Object(s.h)("a",{href:"https://github.com/Kibo/TiledMapBuilder"},"TiledMapBuilder"),", ",Object(s.h)("a",{href:"https://github.com/jaredwilli/qlass"},"Qlass"),", ",Object(s.h)("a",{href:"https://opengameart.org/"},"OpenGameArt"),", and ",Object(s.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")},{name:"bf-viz",displayName:"BF Viz",numScreenshots:1,lastUpdated:"September 2020",mobileSupport:!0,description:Object(s.h)("div",null,"This is a 3D environment which visualizes a ",Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/Brainfuck"},"brainf**k")," program as it executes. Choose to run one of the preset programs at speeds of 1 to 11, or step through one command at a time. Attempt to wrap your brain around this unusual programming language consisting of merely 8 commands."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://threejs.org/"},"ThreeJS"),", ",Object(s.h)("a",{href:"https://github.com/tweenjs/tween.js"},"tween.js"),", ",Object(s.h)("a",{href:"https://hammerjs.github.io/"},"hammer.js"),", ",Object(s.h)("a",{href:"https://codemirror.net/"},"CodeMirror"),", and ",Object(s.h)("a",{href:"https://github.com/dataarts/dat.gui"},"dat.GUI"),".")},{name:"purr-plex",displayName:"Purr Plex",numScreenshots:1,lastUpdated:"February 2020",mobileSupport:!0,description:Object(s.h)("div",null,"A ",Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/Tetris"},"Tetris")," like game, but you place each new piece anywhere on the board with the goal of completing a row, column, or 3x3 region. Make a COMBO by completing multiple regions with a single move. The game ends when there is nowhere to place the next piece."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://create-react-app.dev/"},"Create React App"),", ",Object(s.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(s.h)("a",{href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", ",Object(s.h)("a",{href:"https://sass-lang.com/"},"SCSS"),", ",Object(s.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(s.h)("a",{href:"https://github.com/STRML/react-draggable"},"React Draggable"),", and ",Object(s.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"fireworks",displayName:"Fireworks",numScreenshots:1,lastUpdated:"January 2020",mobileSupport:!0,description:Object(s.h)("div",null,"A 'pass and play' version of the cooperative card game Fireworks (aka. ",Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/Hanabi_(card_game)"},"Hanabi"),") This variation of Fireworks includes the 'Rainbow' suit. Built mobile first with a responsive design, works in portrait or landscape. Press and hold the rockets for a surprise!"),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(s.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(s.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(s.h)("a",{href:"https://hammerjs.github.io/"},"Hammer"),", and ",Object(s.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crawly",displayName:"Crawly",numScreenshots:1,lastUpdated:"February 2019",mobileSupport:!1,description:Object(s.h)("div",null,"A 'snake' like game with a twist. Complete a level by making all the floor tiles green. Collect green cubes to grow and try to avoid the red cuboids. Make yourself dizzy by pressing 'v' to change the camera view."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},"C#")," and ",Object(s.h)("a",{href:"https://unity.com/"},"Unity"),".")},{name:"togglefish",displayName:"Togglefish",numScreenshots:1,lastUpdated:"June 2017",mobileSupport:!0,description:Object(s.h)("div",null,"Togglefish is an experiment in building an animated scene in simply HTML & CSS. No use of JavaScript, SVG, or images. Features include a fish which toggles (naturally), a surfing cat and MANY toggles. Explore how the scene was built by toggling CSS styles including border radius, box shadow, and transforms. See how togglefish has evolved over time using the togglefish time machine."),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"HTML")," and ",Object(s.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS"),".")},{name:"make-em-green",displayName:"Make 'em Green",numScreenshots:1,lastUpdated:"January 2017",mobileSupport:!0,description:Object(s.h)("div",null,"A ",Object(s.h)("a",{href:"https://en.wikipedia.org/wiki/Lights_Out_(game)"},"lights out")," clone which contains 100 levels to solve. Features include sound effects, animations, multiple themes to choose from and a tutorial. The puzzles can be quite difficult, so it's too bad there is no cheat-sheet... or is there?"),tech:Object(s.h)("div",null,Object(s.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(s.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(s.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(s.h)("a",{href:"https://howlerjs.com/"},"HowlerJS"),", ",Object(s.h)("a",{href:"https://github.com/encharm/Font-Awesome-SVG-PNG"},"Font-Awesome SVGs"),", and ",Object(s.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")}],L="modal__2WFem",H="isOpen__24vXj",W="closeButton__2qix0",X="header__2M7VJ",E="bodyContainer__8XCCK",Y="body__lrdeI",D="warning__FZ-FN",J="subHeading__1f5aE",B="footer__3Qx-r",G="projectLink__1M6jd",R="container__2vxhF",V="screenshot__3hpmL",K="selected__1ufbF",Q="navigation__3PKSn",Z="navItem__3On2z";function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).state={selectedIndex:0},i}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,$(t,i);var o=r.prototype;return o.screenshotStyles=function(e){return(this.state.selectedIndex===e?[V,K]:[V]).join(" ")},o.navItemStyles=function(e){return(this.state.selectedIndex===e?[Z,K]:[Z]).join(" ")},o.navItemClicked=function(e){var t=this;return function(){t.setState({selectedIndex:e})}},o.render=function(){var e=this,t=this.props.project,i=Array.from({length:t.numScreenshots},(function(e,i){return t.name+"-"+i}));return Object(s.h)(s.Fragment,null,Object(s.h)("div",{className:R},i.map((function(t,i){return Object(s.h)("div",{key:i,className:e.screenshotStyles(i),style:"background-image: url('../../assets/screenshots/"+t+".jpg')"})}))),i.length>1?Object(s.h)("div",{className:Q},i.map((function(t,i){return Object(s.h)("div",{key:i,className:e.navItemStyles(i),onClick:e.navItemClicked(i)})}))):"")},r}(s.Component);function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).closeButtonClicked=function(){i.props.onClosed()},i.modalStyles=function(){return(i.props.project?[L,H]:[L]).join(" ")},i}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,te(t,i),r.prototype.render=function(){var e=this.props.project;return void 0===e?Object(s.h)("div",{className:this.modalStyles()}):Object(s.h)("div",{className:this.modalStyles()},Object(s.h)("div",{className:X},Object(s.h)("div",null,e.displayName)),Object(s.h)("div",{className:E},Object(s.h)("div",{className:Y},Object(s.h)(ee,{project:e}),e.mobileSupport?"":Object(s.h)("div",{className:D},"Works in desktop browsers only!"),Object(s.h)("div",{className:J},"Last Updated"),Object(s.h)("div",null,e.lastUpdated),Object(s.h)("div",{className:J},"Description"),Object(s.h)("div",null,e.description),Object(s.h)("div",{className:J},"Tech"),Object(s.h)("div",null,e.tech))),Object(s.h)("div",{className:B},Object(s.h)("div",null,"Launch"),Object(s.h)("a",{className:G,href:"https://nmarsden.com/"+e.name,target:"_blank",rel:"noreferrer"})),Object(s.h)("button",{className:W,onClick:this.closeButtonClicked}))},r}(s.Component);function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).onProjectSelected=function(e){i.setState({selectedProject:e})},i.onProjectModalClosed=function(){i.setState({selectedProject:void 0})},i.state={selectedProject:void 0},i}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,se(t,i),r.prototype.render=function(){return Object(s.h)("div",{className:"main"},Object(s.h)(M,null),this.state.selectedProject?"":Object(s.h)("div",null,Object(s.h)(T,null),Object(s.h)(U,{projects:q,onProjectSelected:this.onProjectSelected})),Object(s.h)(ie,{project:this.state.selectedProject,onClosed:this.onProjectModalClosed}))},r}(s.Component);t.default=re}});
//# sourceMappingURL=ssr-bundle.js.map