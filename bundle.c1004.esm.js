!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return s(e,l,r,o,null)}function s(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++I:o};return null!=U.vnode&&U.vnode(i),i}function l(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function u(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return u(e)}}function d(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!_.__r++||E!==U.debounceRendering)&&((E=U.debounceRendering)||D)(_)}function _(){for(var e;_.__r=F.length;)e=F.sort((function(e,t){return e.__v.__b-t.__v.__b})),F=[],e.some((function(e){var t,n,o,i,s,l;e.__d&&(s=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,w(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?h(i):s,i.__h),k(n,i),i.__e!=s&&u(i)))}))}function p(e,t,n,r,o,i,l,c,u,d){var _,p,m,y,g,v,j,k=r&&r.__k||H,O=k.length;for(n.__k=[],_=0;_<t.length;_++)if(null!=(y=n.__k[_]=null==(y=t[_])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?s(null,y,null,null,y):Array.isArray(y)?s(a,{children:y},null,null,null):y.__b>0?s(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=k[_])||m&&y.key==m.key&&y.type===m.type)k[_]=void 0;else for(p=0;p<O;p++){if((m=k[p])&&y.key==m.key&&y.type===m.type){k[p]=void 0;break}m=null}w(e,y,m=m||z,o,i,l,c,u,d),g=y.__e,(p=y.ref)&&m.ref!=p&&(j||(j=[]),m.ref&&j.push(m.ref,null,y),j.push(p,y.__c||g,y)),null!=g?(null==v&&(v=g),"function"==typeof y.type&&null!=y.__k&&y.__k===m.__k?y.__d=u=f(y,u,e):u=b(e,y,m,k,g,u),d||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&m.__e==u&&u.parentNode!=e&&(u=h(m))}for(n.__e=v,_=O;_--;)null!=k[_]&&("function"==typeof n.type&&null!=k[_].__e&&k[_].__e==n.__d&&(n.__d=h(r,_+1)),x(k[_],k[_]));if(j)for(_=0;_<j.length;_++)S(j[_],j[++_],j[++_])}function f(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?f(o,t,n):b(n,o,o,e.__k,o.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function b(e,t,n,r,o,i){var s,l,a;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),s=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==o)break e;e.insertBefore(o,i),s=i}return void 0!==s?s:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||R.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?j:v,i):e.removeEventListener(t,i?j:v,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function v(e){this.l[e.type+!1](U.event?U.event(e):e)}function j(e){this.l[e.type+!0](U.event?U.event(e):e)}function w(e,t,n,o,i,s,l,h,u){var d,_,f,m,b,y,g,v,j,w,k,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,h=t.__e=n.__e,t.__h=null,s=[h]),(d=U.__b)&&d(t);try{e:if("function"==typeof S){if(v=t.props,j=(d=S.contextType)&&o[d.__c],w=d?j?j.props.value:d.__:o,n.__c?g=(_=t.__c=n.__c).__=_.__E:("prototype"in S&&S.prototype.render?t.__c=_=new S(v,w):(t.__c=_=new c(v,w),_.constructor=S,_.render=C),j&&j.sub(_),_.props=v,_.state||(_.state={}),_.context=w,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=S.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,S.getDerivedStateFromProps(v,_.__s))),m=_.props,b=_.state,f)null==S.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==S.getDerivedStateFromProps&&v!==m&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(v,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(v,_.__s,w)||t.__v===n.__v){_.props=v,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),_.__h.length&&l.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(v,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(m,b,y)}))}_.context=w,_.props=v,_.state=_.__s,(d=U.__r)&&d(t),_.__d=!1,_.__v=t,_.__P=e,d=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(y=_.getSnapshotBeforeUpdate(m,b)),k=null!=d&&d.type===a&&null==d.key?d.props.children:d,p(e,Array.isArray(k)?k:[k],t,n,o,i,s,l,h,u),_.base=t.__e,t.__h=null,_.__h.length&&l.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,s,l,u);(d=U.diffed)&&d(t)}catch(e){t.__v=null,(u||null!=s)&&(t.__e=h,t.__h=!!u,s[s.indexOf(h)]=null),U.__e(e,t,n)}}function k(e,t){U.__c&&U.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){U.__e(e,t.__v)}}))}function O(e,t,n,r,i,s,l,a){var c,u,d,_=n.props,f=t.props,m=t.type,b=0;if("svg"===m&&(i=!0),null!=s)for(;b<s.length;b++)if((c=s[b])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,s[b]=null;break}if(null==e){if(null===m)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),s=null,a=!1}if(null===m)_===f||a&&e.data===f||(e.data=f);else{if(s=s&&A.call(e.childNodes),u=(_=n.props||z).dangerouslySetInnerHTML,d=f.dangerouslySetInnerHTML,!a){if(null!=s)for(_={},b=0;b<e.attributes.length;b++)_[e.attributes[b].name]=e.attributes[b].value;(d||u)&&(d&&(u&&d.__html==u.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)}(e,f,_,i,a),d)t.__k=[];else if(b=t.props.children,p(e,Array.isArray(b)?b:[b],t,n,r,i&&"foreignObject"!==m,s,l,s?s[0]:n.__k&&h(n,0),a),null!=s)for(b=s.length;b--;)null!=s[b]&&o(s[b]);a||("value"in f&&void 0!==(b=f.value)&&(b!==e.value||"progress"===m&&!b)&&g(e,"value",b,_.value,!1),"checked"in f&&void 0!==(b=f.checked)&&b!==e.checked&&g(e,"checked",b,_.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){U.__e(e,n)}}function x(e,t,n){var r,i;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){U.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function C(e,t,n){return this.constructor(e,n)}function P(e,t,n){var r,o,s;U.__&&U.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,s=[],w(t,e=(!r&&n||t).__k=i(a,null,[e]),o||z,z,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?A.call(t.childNodes):null,s,!r&&n?n:o?o.__e:t.firstChild,r),k(s,e)}function N(e,t){P(e,t,N)}function M(e,t,n){var o,i,l,a=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:a[l]=t[l];return arguments.length>2&&(a.children=arguments.length>3?A.call(arguments,2):n),s(e.type,a,o||e.key,i||e.ref,null)}function T(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(d)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return N})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return L})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return M})),n.d(t,"createContext",(function(){return T})),n.d(t,"toChildArray",(function(){return m})),n.d(t,"options",(function(){return U}));var A,U,I,L,F,D,E,W,z={},H=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;A=H.slice,U={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},I=0,L=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),d(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d(this))},c.prototype.render=a,F=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,W=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:s}=r,l=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("function"==typeof l(n("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const h={preRenderData:r},u=r.url?a(r.url):"",d=s&&u===a(location.pathname);e=(d?s:i)(o(t,{CLI_DATA:h}),document.body,e)})()}},qVkA:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o="backgroundCanvas__1-DUI";const i=[];let s,l;const a={x:0,y:0,lastUpdatedMSecs:0,isIdle:!0};class c{constructor(){this.x=void 0,this.y=void 0,this.size=void 0,this.speedX=void 0,this.speedY=void 0,this.opacity=void 0,this.strokeStyle=void 0,this.hue=void 0,this.x=Math.random()*s.width,this.y=Math.random()*s.height,this.size=39*Math.random()+1,this.speedX=3*Math.random()-1.5,this.speedY=3*Math.random()-1.5,this.opacity=.01,this.strokeStyle="rgba(255, 255, 255, 0.01)",this.hue=220}draw(){l.fillStyle=`hsla(${this.hue}, 100%, 50%, ${this.opacity})`,l.strokeStyle=this.strokeStyle,l.strokeWidth=5,l.beginPath(),l.arc(this.x,this.y,this.size,0,2*Math.PI),l.fill(),l.stroke()}update(){this.x+=this.speedX,this.y+=this.speedY,this.size>.2&&(this.size-=.05),this.opacity<.3&&(this.opacity+=.005),this.hue<220&&(this.hue+=1);const e=Math.sqrt((this.x-a.x)*(this.x-a.x)+(this.y-a.y)*(this.y-a.y));this.hue=e>150?this.hue:160,this.strokeStyle=e>150?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.5)"}}var h=class extends r.Component{constructor(e){super(e),this.rafId=void 0,this.initParticles=()=>{const e=Math.min(200,s.width*s.height/2e3);i.length=0;for(let t=0;t<e;t++)i.push(new c)},this.animate=()=>{l.clearRect(0,0,s.width,s.height);for(let e=0;e<i.length;e++)i[e].update(),i[e].draw(),(i[e].size<.3||i[e].x<-i[e].size||i[e].x>s.width+i[e].size||i[e].y<-i[e].size||i[e].y>s.height+i[e].size)&&(i.splice(e,1),e--,i.push(new c));this.connections(),l.fillStyle="rgba(255, 255, 255, 1)",l.beginPath(),l.arc(a.x,a.y,10,0,2*Math.PI),l.fill(),!a.isIdle&&Date.now()-a.lastUpdatedMSecs>2e3&&(a.isIdle=!0),a.isIdle&&(a.x=(a.x+.5)%s.width,a.y=(a.y+.5)%s.height),this.rafId=window.requestAnimationFrame(this.animate)},this.connections=()=>{let e=1;const t=Math.min(200,s.width/4);for(let n=0;n<i.length;n++){Math.sqrt((i[n].x-a.x)*(i[n].x-a.x)+(i[n].y-a.y)*(i[n].y-a.y))<150&&(l.strokeStyle="rgba(255,255,255,1)",l.beginPath(),l.lineWidth=2,l.moveTo(i[n].x,i[n].y),l.lineTo(a.x,a.y),l.stroke());for(let r=n;r<i.length;r++){const o=Math.sqrt((i[n].x-i[r].x)*(i[n].x-i[r].x)+(i[n].y-i[r].y)*(i[n].y-i[r].y));o<t&&(e=.7*(1-o/t),l.strokeStyle="rgba(255,255,255,"+e+")",l.beginPath(),l.lineWidth=2,l.moveTo(i[n].x,i[n].y),l.lineTo(i[r].x,i[r].y),l.stroke())}}}}componentDidMount(){s=document.getElementById("canvas1"),s.width=window.innerWidth,s.height=window.innerHeight,l=s.getContext("2d"),window.addEventListener("resize",(()=>{s.width=window.innerWidth,s.height=window.innerHeight,this.initParticles()})),window.addEventListener("mousemove",(e=>{a.x=e.pageX,a.y=e.pageY,a.isIdle=!1,a.lastUpdatedMSecs=Date.now()})),window.addEventListener("touchmove",(e=>{a.x=e.touches[0].pageX,a.y=e.touches[0].pageY,a.isIdle=!1,a.lastUpdatedMSecs=Date.now()})),this.initParticles(),this.rafId=window.requestAnimationFrame(this.animate)}componentWillUnmount(){window.cancelAnimationFrame(this.rafId),this.rafId=null}render(){return Object(r.h)("canvas",{id:"canvas1",className:o})}},u="bannerWrapper__AmhuC",d="banner__y9Xfn",_="heading__2rK2p",p="subHeading__e-Diq";var f=()=>Object(r.h)("div",{className:u},Object(r.h)("div",{className:d},Object(r.h)("div",{className:_},"Web Projects"),Object(r.h)("div",{className:p},"Crafted by Neil Marsden"))),m="projectList__3-bgY",b="projectCard__3P67s";var y=class extends r.Component{constructor(e){super(e),this.projectCardClickHandler=e=>()=>{this.props.onProjectSelected(e)},this.state={}}render(){return Object(r.h)(r.Fragment,null,Object(r.h)("div",{className:m},this.props.projects.map(((e,t)=>Object(r.h)("div",{key:t,className:b,style:`background-image: url('../../assets/screenshots/${e.name}-0-card.jpg')`,onClick:this.projectCardClickHandler(e)},e.displayName)))))}};var g=[{name:"conway",displayName:"Conway",numScreenshots:12,lastUpdated:"July 2021",mobileSupport:!0,description:Object(r.h)("div",null,"The ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Game of Life")," is not a game in the conventional sense.  Select a pattern and watch it evolve each generation according to the four simple rules: 1. Loneliness, 2. Statis, 3. Overcrowding, and 4. Reproduction.  Or simply do nothing and let the AUTO mode switch between patterns every 100 generations. Try adjusting the speed and colours to your liking. Be amazed at how complex behaviours can evolve."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://preactjs.com/"},"Preact"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://pixijs.com/"},"PixiJS"),", ",Object(r.h)("a",{href:"https://github.com/naver/egjs-flicking/tree/master/packages/preact-flicking"},"preact-flicking"),", ",Object(r.h)("a",{href:"https://omgovich.github.io/react-colorful/"},"react-colorful"),", ",Object(r.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crafty-racer",displayName:"Crafty Racer",numScreenshots:1,lastUpdated:"October 2020",mobileSupport:!0,description:Object(r.h)("div",null,"An isometric car racer where the goal is to reach the 10 waypoints within the time limit. Features include 4 levels of increasing difficulty with a sound track to get your blood pumping. Press ESC to activate 'demo' mode from the main menu."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://craftyjs.com/"},"CraftyJS"),", ",Object(r.h)("a",{href:"https://github.com/Kibo/TiledMapBuilder"},"TiledMapBuilder"),", ",Object(r.h)("a",{href:"https://github.com/jaredwilli/qlass"},"Qlass"),", ",Object(r.h)("a",{href:"https://opengameart.org/"},"OpenGameArt"),", and ",Object(r.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")},{name:"bf-viz",displayName:"BF Viz",numScreenshots:1,lastUpdated:"September 2020",mobileSupport:!0,description:Object(r.h)("div",null,"This is a 3D environment which visualizes a ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Brainfuck"},"brainf**k")," program as it executes. Choose to run one of the preset programs at speeds of 1 to 11, or step through one command at a time. Attempt to wrap your brain around this unusual programming language consisting of merely 8 commands."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://threejs.org/"},"ThreeJS"),", ",Object(r.h)("a",{href:"https://github.com/tweenjs/tween.js"},"tween.js"),", ",Object(r.h)("a",{href:"https://hammerjs.github.io/"},"hammer.js"),", ",Object(r.h)("a",{href:"https://codemirror.net/"},"CodeMirror"),", and ",Object(r.h)("a",{href:"https://github.com/dataarts/dat.gui"},"dat.GUI"),".")},{name:"purr-plex",displayName:"Purr Plex",numScreenshots:1,lastUpdated:"February 2020",mobileSupport:!0,description:Object(r.h)("div",null,"A ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Tetris"},"Tetris")," like game, but you place each new piece anywhere on the board with the goal of completing a row, column, or 3x3 region. Make a COMBO by completing multiple regions with a single move. The game ends when there is nowhere to place the next piece."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://create-react-app.dev/"},"Create React App"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", ",Object(r.h)("a",{href:"https://sass-lang.com/"},"SCSS"),", ",Object(r.h)("a",{href:"https://github.com/JedWatson/classnames"},"Classnames"),", ",Object(r.h)("a",{href:"https://github.com/STRML/react-draggable"},"React Draggable"),", and ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"fireworks",displayName:"Fireworks",numScreenshots:1,lastUpdated:"January 2020",mobileSupport:!0,description:Object(r.h)("div",null,"A 'pass and play' version of the cooperative card game Fireworks (aka. ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Hanabi_(card_game)"},"Hanabi"),") This variation of Fireworks includes the 'Rainbow' suit. Built mobile first with a responsive design, works in portrait or landscape. Press and hold the rockets for a surprise!"),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(r.h)("a",{href:"https://hammerjs.github.io/"},"Hammer"),", and ",Object(r.h)("a",{href:"https://storybook.js.org/"},"Storybook"),".")},{name:"crawly",displayName:"Crawly",numScreenshots:1,lastUpdated:"February 2019",mobileSupport:!1,description:Object(r.h)("div",null,"A 'snake' like game with a twist. Complete a level by making all the floor tiles green. Collect green cubes to grow and try to avoid the red cuboids. Make yourself dizzy by pressing 'v' to change the camera view."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},"C#")," and ",Object(r.h)("a",{href:"https://unity.com/"},"Unity"),".")},{name:"togglefish",displayName:"Togglefish",numScreenshots:1,lastUpdated:"June 2017",mobileSupport:!0,description:Object(r.h)("div",null,"Togglefish is an experiment in building an animated scene in simply HTML & CSS. No use of JavaScript, SVG, or images. Features include a fish which toggles (naturally), a surfing cat and MANY toggles. Explore how the scene was built by toggling CSS styles including border radius, box shadow, and transforms. See how togglefish has evolved over time using the togglefish time machine."),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"HTML")," and ",Object(r.h)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS"),".")},{name:"make-em-green",displayName:"Make 'em Green",numScreenshots:1,lastUpdated:"January 2017",mobileSupport:!0,description:Object(r.h)("div",null,"A ",Object(r.h)("a",{href:"https://en.wikipedia.org/wiki/Lights_Out_(game)"},"lights out")," clone which contains 100 levels to solve. Features include sound effects, animations, multiple themes to choose from and a tutorial. The puzzles can be quite difficult, so it's too bad there is no cheat-sheet... or is there?"),tech:Object(r.h)("div",null,Object(r.h)("a",{href:"https://angular.io/"},"Angular"),", ",Object(r.h)("a",{href:"https://www.typescriptlang.org/"},"Typescript"),", ",Object(r.h)("a",{href:"https://lesscss.org/"},"{less}"),", ",Object(r.h)("a",{href:"https://howlerjs.com/"},"HowlerJS"),", ",Object(r.h)("a",{href:"https://github.com/encharm/Font-Awesome-SVG-PNG"},"Font-Awesome SVGs"),", and ",Object(r.h)("a",{href:"https://www.freesound.org"},"Freesound"),".")}],v="modal__2WFem",j="isOpen__24vXj",w="closeButton__2qix0",k="header__2M7VJ",O="bodyContainer__8XCCK",S="body__lrdeI",x="warning__FZ-FN",C="subHeading__1f5aE",P="footer__3Qx-r",N="projectLink__1M6jd",M="container__2vxhF",T="screenshot__3hpmL",A="selected__1ufbF",U="navigation__3PKSn",I="navItem__3On2z";var L=class extends r.Component{constructor(e){super(e),this.state={selectedIndex:0}}screenshotStyles(e){return(this.state.selectedIndex===e?[T,A]:[T]).join(" ")}navItemStyles(e){return(this.state.selectedIndex===e?[I,A]:[I]).join(" ")}navItemClicked(e){return()=>{this.setState({selectedIndex:e})}}render(){const e=this.props.project,t=Array.from({length:e.numScreenshots},((t,n)=>`${e.name}-${n}`));return Object(r.h)(r.Fragment,null,Object(r.h)("div",{className:M},t.map(((e,t)=>Object(r.h)("div",{key:t,className:this.screenshotStyles(t),style:`background-image: url('../../assets/screenshots/${e}.jpg')`})))),t.length>1?Object(r.h)("div",{className:U},t.map(((e,t)=>Object(r.h)("div",{key:t,className:this.navItemStyles(t),onClick:this.navItemClicked(t)})))):"")}};var F=class extends r.Component{constructor(e){super(e),this.closeButtonClicked=()=>{this.props.onClosed()},this.modalStyles=()=>(this.props.project?[v,j]:[v]).join(" ")}render(){const e=this.props.project;return void 0===e?Object(r.h)("div",{className:this.modalStyles()}):Object(r.h)("div",{className:this.modalStyles()},Object(r.h)("div",{className:k},Object(r.h)("div",null,e.displayName)),Object(r.h)("div",{className:O},Object(r.h)("div",{className:S},Object(r.h)(L,{project:e}),e.mobileSupport?"":Object(r.h)("div",{className:x},"Works in desktop browsers only!"),Object(r.h)("div",{className:C},"Last Updated"),Object(r.h)("div",null,e.lastUpdated),Object(r.h)("div",{className:C},"Description"),Object(r.h)("div",null,e.description),Object(r.h)("div",{className:C},"Tech"),Object(r.h)("div",null,e.tech))),Object(r.h)("div",{className:P},Object(r.h)("div",null,"Launch"),Object(r.h)("a",{className:N,href:`https://nmarsden.com/${e.name}`,target:"_blank",rel:"noreferrer"})),Object(r.h)("button",{className:w,onClick:this.closeButtonClicked}))}};t.default=class extends r.Component{constructor(e){super(e),this.onProjectSelected=e=>{this.setState({selectedProject:e})},this.onProjectModalClosed=()=>{this.setState({selectedProject:void 0})},this.state={selectedProject:void 0}}render(){return Object(r.h)("div",{className:"main"},Object(r.h)(h,null),this.state.selectedProject?"":Object(r.h)("div",null,Object(r.h)(f,null),Object(r.h)(y,{projects:g,onProjectSelected:this.onProjectSelected})),Object(r.h)(F,{project:this.state.selectedProject,onClosed:this.onProjectModalClosed}))}}}});
//# sourceMappingURL=bundle.c1004.esm.js.map