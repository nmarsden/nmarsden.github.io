!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?M.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return s(e,l,r,o,null)}function s(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null!=U.vnode&&U.vnode(i),i}function l(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function u(e,t){if(null==t)return e.__?u(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?u(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function _(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!d.__r++||I!==U.debounceRendering)&&((I=U.debounceRendering)||D)(d)}function d(){for(var e;d.__r=E.length;)e=E.sort((function(e,t){return e.__v.__b-t.__v.__b})),E=[],e.some((function(e){var t,n,o,i,s,l;e.__d&&(s=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?u(i):s,i.__h),k(n,i),i.__e!=s&&h(i)))}))}function p(e,t,n,r,o,i,l,c,h,_){var d,p,m,v,g,y,j,k=r&&r.__k||R,w=k.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?s(null,v,null,null,v):Array.isArray(v)?s(a,{children:v},null,null,null):v.__b>0?s(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(m=k[d])||m&&v.key==m.key&&v.type===m.type)k[d]=void 0;else for(p=0;p<w;p++){if((m=k[p])&&v.key==m.key&&v.type===m.type){k[p]=void 0;break}m=null}O(e,v,m=m||H,o,i,l,c,h,_),g=v.__e,(p=v.ref)&&m.ref!=p&&(j||(j=[]),m.ref&&j.push(m.ref,null,v),j.push(p,v.__c||g,v)),null!=g?(null==y&&(y=g),"function"==typeof v.type&&null!=v.__k&&v.__k===m.__k?v.__d=h=f(v,h,e):h=b(e,v,m,k,g,h),_||"option"!==n.type?"function"==typeof n.type&&(n.__d=h):e.value=""):h&&m.__e==h&&h.parentNode!=e&&(h=u(m))}for(n.__e=y,d=w;d--;)null!=k[d]&&("function"==typeof n.type&&null!=k[d].__e&&k[d].__e==n.__d&&(n.__d=u(r,d+1)),C(k[d],k[d]));if(j)for(d=0;d<j.length;d++)S(j[d],j[++d],j[++d])}function f(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?f(o,t,n):b(n,o,o,e.__k,o.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function b(e,t,n,r,o,i){var s,l,a;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),s=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==o)break e;e.insertBefore(o,i),s=i}return void 0!==s?s:o.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||B.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||v(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||v(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?j:y,i):e.removeEventListener(t,i?j:y,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function y(e){this.l[e.type+!1](U.event?U.event(e):e)}function j(e){this.l[e.type+!0](U.event?U.event(e):e)}function O(e,t,n,o,i,s,l,u,h){var _,d,f,m,b,v,g,y,j,O,k,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(h=n.__h,u=t.__e=n.__e,t.__h=null,s=[u]),(_=U.__b)&&_(t);try{e:if("function"==typeof S){if(y=t.props,j=(_=S.contextType)&&o[_.__c],O=_?j?j.props.value:_.__:o,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?t.__c=d=new S(y,O):(t.__c=d=new c(y,O),d.constructor=S,d.render=N),j&&j.sub(d),d.props=y,d.state||(d.state={}),d.context=O,d.__n=o,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,S.getDerivedStateFromProps(y,d.__s))),m=d.props,b=d.state,f)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&y!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(y,O),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(y,d.__s,O)||t.__v===n.__v){d.props=y,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&l.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(y,d.__s,O),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,b,v)}))}d.context=O,d.props=y,d.state=d.__s,(_=U.__r)&&_(t),d.__d=!1,d.__v=t,d.__P=e,_=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(m,b)),k=null!=_&&_.type===a&&null==_.key?_.props.children:_,p(e,Array.isArray(k)?k:[k],t,n,o,i,s,l,u,h),d.base=t.__e,t.__h=null,d.__h.length&&l.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=w(n.__e,t,n,o,i,s,l,h);(_=U.diffed)&&_(t)}catch(e){t.__v=null,(h||null!=s)&&(t.__e=u,t.__h=!!h,s[s.indexOf(u)]=null),U.__e(e,t,n)}}function k(e,t){U.__c&&U.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){U.__e(e,t.__v)}}))}function w(e,t,n,r,i,s,l,a){var c,h,_,d=n.props,f=t.props,m=t.type,b=0;if("svg"===m&&(i=!0),null!=s)for(;b<s.length;b++)if((c=s[b])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,s[b]=null;break}if(null==e){if(null===m)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),s=null,a=!1}if(null===m)d===f||a&&e.data===f||(e.data=f);else{if(s=s&&M.call(e.childNodes),h=(d=n.props||H).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!a){if(null!=s)for(d={},b=0;b<e.attributes.length;b++)d[e.attributes[b].name]=e.attributes[b].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)}(e,f,d,i,a),_)t.__k=[];else if(b=t.props.children,p(e,Array.isArray(b)?b:[b],t,n,r,i&&"foreignObject"!==m,s,l,s?s[0]:n.__k&&u(n,0),a),null!=s)for(b=s.length;b--;)null!=s[b]&&o(s[b]);a||("value"in f&&void 0!==(b=f.value)&&(b!==e.value||"progress"===m&&!b)&&g(e,"value",b,d.value,!1),"checked"in f&&void 0!==(b=f.checked)&&b!==e.checked&&g(e,"checked",b,d.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){U.__e(e,n)}}function C(e,t,n){var r,i;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){U.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&C(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function N(e,t,n){return this.constructor(e,n)}function x(e,t,n){var r,o,s;U.__&&U.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,s=[],O(t,e=(!r&&n||t).__k=i(a,null,[e]),o||H,H,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?M.call(t.childNodes):null,s,!r&&n?n:o?o.__e:t.firstChild,r),k(s,e)}function P(e,t){x(e,t,P)}function T(e,t,n){var o,i,l,a=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:a[l]=t[l];return arguments.length>2&&(a.children=arguments.length>3?M.call(arguments,2):n),s(e.type,a,o||e.key,i||e.ref,null)}function A(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(_)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return x})),n.d(t,"hydrate",(function(){return P})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return F})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return m})),n.d(t,"options",(function(){return U}));var M,U,L,F,E,D,I,W,H={},R=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;M=R.slice,U={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},L=0,F=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),_(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_(this))},c.prototype.render=a,E=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d.__r=0,W=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:s}=r,l=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("function"==typeof l(n("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const u={preRenderData:r},h=r.url?a(r.url):"",_=s&&h===a(location.pathname);e=(_?s:i)(o(t,{CLI_DATA:u}),document.body,e)})()}},qVkA:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o="backgroundContainer__3dwaC",i="backgroundCircle__2PpWu",s="backgroundCircleMove__3ryaC",l="backgroundCircleMoveLarge__1tOgJ";const a=[{duration:10,type:"move"},{duration:17,type:"move-large"},{duration:7,type:"move"},{duration:9,type:"move"},{duration:11,type:"move"},{duration:15,type:"move-large"},{duration:10,type:"move"},{duration:16,type:"move-large"},{duration:8,type:"move"}];var c=()=>Object(r.h)("div",{className:o},a.map(((e,t)=>{const n="move"===e.type?s:l;return Object(r.h)("div",{key:t,className:i,style:`animation-delay: -${t}s; animation-duration: ${e.duration}s; animation-name: ${n}`})}))),u="bannerWrapper__AmhuC",h="banner__y9Xfn",_="heading__2rK2p",d="subHeading__e-Diq";var p=()=>Object(r.h)("div",{className:u},Object(r.h)("div",{className:h},Object(r.h)("div",{className:_},"Web Projects"),Object(r.h)("div",{className:d},"Crafted by Neil Marsden"))),f="projectList__3-bgY",m="projectCard__3P67s";var b=class extends r.Component{constructor(e){super(e),this.projectCardClickHandler=e=>()=>{this.props.onProjectSelected(e)},this.state={}}render(){return Object(r.h)(r.Fragment,null,Object(r.h)("div",{className:f},this.props.projects.map(((e,t)=>Object(r.h)("div",{key:t,className:m,style:`background-image: url('../../assets/screenshots/${e.name}-0-card.jpg')`,onClick:this.projectCardClickHandler(e)},e.displayName)))))}};var v=[{name:"conway",displayName:"Conway",numScreenshots:12,lastUpdated:"July 2021",mobileSupport:!0,description:Object(r.h)("div",null,"The ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is not a game in the conventional sense.  Select a pattern and watch it evolve each generation according to the four simple rules: 1. Loneliness, 2. Statis, 3. Overcrowding, and 4. Reproduction.  Or simply do nothing and let the AUTO mode switch between patterns every 100 generations. Try adjusting the speed and colours to your liking. Be amazed at how complex behaviours can evolve."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://preactjs.com/"},"Preact"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://pixijs.com/"},"PixiJS"),", ",Object(r.h)("a",{href:"https://github.com/naver/egjs-flicking/tree/master/packages/preact-flicking"},"preact-flicking"),", ",Object(r.h)("a",{href:"https://omgovich.github.io/react-colorful/"},"react-colorful"),", ",Object(r.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crafty-racer",displayName:"Crafty Racer",numScreenshots:1,lastUpdated:"October 2020",mobileSupport:!0,description:Object(r.h)("div",null,"An isometric car racer where the goal is to reach the 10 waypoints within the time limit. Features include 4 levels of increasing difficulty with a sound track to get your blood pumping. Press ESC to activate 'demo' mode from the main menu."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://craftyjs.com/"},"CraftyJS"),", ",Object(r.h)("a",{href:"https://github.com/Kibo/TiledMapBuilder"},"TiledMapBuilder"),", ",Object(r.h)("a",{href:"https://github.com/jaredwilli/qlass"},"Qlass"),", ",Object(r.h)("a",{href:"https://opengameart.org/"},"OpenGameArt"),", and ",Object(r.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")},{name:"bf-viz",displayName:"BF Viz",numScreenshots:1,lastUpdated:"September 2020",mobileSupport:!0,description:Object(r.h)("div",null,"This is a 3D environment which visualizes a ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Brainfuck"},"brainf**k")," program as it executes. Choose to run one of the preset programs at speeds of 1 to 11, or step through one command at a time. Attempt to wrap your brain around this unusual programming language consisting of merely 8 commands."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://threejs.org/"},"ThreeJS"),", ",Object(r.h)("a",{href:"https://github.com/tweenjs/tween.js"},"tween.js"),", ",Object(r.h)("a",{href:"https://hammerjs.github.io/"},"hammer.js"),", ",Object(r.h)("a",{href:"https://codemirror.net/"},"CodeMirror"),", and ",Object(r.h)("a",{href:"https://github.com/dataarts/dat.gui"},"dat.GUI"),".")},{name:"purr-plex",displayName:"Purr Plex",numScreenshots:1,lastUpdated:"February 2020",mobileSupport:!0,description:Object(r.h)("div",null,"A ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Tetris"},"Tetris")," like game, but you place each new piece anywhere on the board with the goal of completing a row, column, or 3x3 region. Make a COMBO by completing multiple regions with a single move. The game ends when there is nowhere to place the next piece."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://create-react-app.dev/"},"Create React App"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", ",Object(r.h)("a",{href:"https://sass-lang.com/"},"SCSS"),", ",Object(r.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(r.h)("a",{href:"https://github.com/STRML/react-draggable"},"React Draggable"),", and ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"fireworks",displayName:"Fireworks",numScreenshots:1,lastUpdated:"January 2020",mobileSupport:!0,description:Object(r.h)("div",null,"A 'pass and play' version of the cooperative card game Fireworks (aka. ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Hanabi_(card_game)"},"Hanabi"),") This variation of Fireworks includes the 'Rainbow' suit. Built mobile first with a responsive design, works in portrait or landscape. Press and hold the rockets for a surprise!"),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(r.h)("a",{href:"https://hammerjs.github.io/"},"Hammer"),", and ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crawly",displayName:"Crawly",numScreenshots:1,lastUpdated:"February 2019",mobileSupport:!1,description:Object(r.h)("div",null,"A 'snake' like game with a twist. Complete a level by making all the floor tiles green. Collect green cubes to grow and try to avoid the red cuboids. Make yourself dizzy by pressing 'v' to change the camera view."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},"C#")," and ",Object(r.h)("a",{href:"https://unity.com/"},"Unity"),".")},{name:"togglefish",displayName:"Togglefish",numScreenshots:1,lastUpdated:"June 2017",mobileSupport:!0,description:Object(r.h)("div",null,"Togglefish is an experiment in building an animated scene in simply HTML & CSS. No use of JavaScript, SVG, or images. Features include a fish which toggles (naturally), a surfing cat and MANY toggles. Explore how the scene was built by toggling CSS styles including border radius, box shadow, and transforms. See how togglefish has evolved over time using the togglefish time machine."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"HTML")," and ",Object(r.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS"),".")},{name:"make-em-green",displayName:"Make 'em Green",numScreenshots:1,lastUpdated:"January 2017",mobileSupport:!0,description:Object(r.h)("div",null,"A ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Lights_Out_(game)"},"lights out")," clone which contains 100 levels to solve. Features include sound effects, animations, multiple themes to choose from and a tutorial. The puzzles can be quite difficult, so it's too bad there is no cheat-sheet... or is there?"),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(r.h)("a",{href:"https://howlerjs.com/"},"HowlerJS"),", ",Object(r.h)("a",{href:"https://github.com/encharm/Font-Awesome-SVG-PNG"},"Font-Awesome SVGs"),", and ",Object(r.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")}],g="modal__2WFem",y="isOpen__24vXj",j="closeButton__2qix0",O="header__2M7VJ",k="bodyContainer__8XCCK",w="body__lrdeI",S="warning__FZ-FN",C="subHeading__1f5aE",N="footer__3Qx-r",x="projectLink__1M6jd",P="container__2vxhF",T="screenshot__3hpmL",A="selected__1ufbF",M="navigation__3PKSn",U="navItem__3On2z";var L=class extends r.Component{constructor(e){super(e),this.state={selectedIndex:0}}screenshotStyles(e){return(this.state.selectedIndex===e?[T,A]:[T]).join(" ")}navItemStyles(e){return(this.state.selectedIndex===e?[U,A]:[U]).join(" ")}navItemClicked(e){return()=>{this.setState({selectedIndex:e})}}render(){const e=this.props.project,t=Array.from({length:e.numScreenshots},((t,n)=>`${e.name}-${n}`));return Object(r.h)(r.Fragment,null,Object(r.h)("div",{className:P},t.map(((e,t)=>Object(r.h)("div",{key:t,className:this.screenshotStyles(t),style:`background-image: url('../../assets/screenshots/${e}.jpg')`})))),t.length>1?Object(r.h)("div",{className:M},t.map(((e,t)=>Object(r.h)("div",{key:t,className:this.navItemStyles(t),onClick:this.navItemClicked(t)})))):"")}};var F=class extends r.Component{constructor(e){super(e),this.closeButtonClicked=()=>{this.props.onClosed()},this.modalStyles=()=>(this.props.project?[g,y]:[g]).join(" ")}render(){const e=this.props.project;return void 0===e?Object(r.h)("div",{className:this.modalStyles()}):Object(r.h)("div",{className:this.modalStyles()},Object(r.h)("div",{className:O},Object(r.h)("div",null,e.displayName)),Object(r.h)("div",{className:k},Object(r.h)("div",{className:w},Object(r.h)(L,{project:e}),e.mobileSupport?"":Object(r.h)("div",{className:S},"Works in desktop browsers only!"),Object(r.h)("div",{className:C},"Last Updated"),Object(r.h)("div",null,e.lastUpdated),Object(r.h)("div",{className:C},"Description"),Object(r.h)("div",null,e.description),Object(r.h)("div",{className:C},"Tech"),Object(r.h)("div",null,e.tech))),Object(r.h)("div",{className:N},Object(r.h)("div",null,"Launch"),Object(r.h)("a",{className:x,href:`https://nmarsden.com/${e.name}`,target:"_blank",rel:"noreferrer"})),Object(r.h)("button",{className:j,onClick:this.closeButtonClicked}))}};t.default=class extends r.Component{constructor(e){super(e),this.onProjectSelected=e=>{this.setState({selectedProject:e})},this.onProjectModalClosed=()=>{this.setState({selectedProject:void 0})},this.state={selectedProject:void 0}}render(){return Object(r.h)("div",{className:"main"},Object(r.h)(c,null),this.state.selectedProject?"":Object(r.h)("div",null,Object(r.h)(p,null),Object(r.h)(b,{projects:v,onProjectSelected:this.onProjectSelected})),Object(r.h)(F,{project:this.state.selectedProject,onClosed:this.onProjectModalClosed}))}}}});
//# sourceMappingURL=bundle.6031c.esm.js.map