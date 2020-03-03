/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js__);




let previousBackgroundClass = 'background-1';

const handleStepEnter = (index, next_el) => {
  let newBackgroundClass = `background-${index}`;

  const backgroundContainer = document.querySelector('.background-container');
  backgroundContainer.classList.remove(previousBackgroundClass);
  backgroundContainer.classList.add(newBackgroundClass);
  previousBackgroundClass = newBackgroundClass;
};

Object(__WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js__["onePageScroll"])(".main", {
  sectionContainer: ".scroll-step",// sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 600,              // AnimationTime let you define how long each section takes to animate
  pagination: false,               // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  // beforeMove: handleStepExit,      // This option accepts a callback function. The function will be called before the page moves.
  afterMove: handleStepEnter,      // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
});

// Hide loader
const loader = document.querySelector('.loader');
loader.style.display = 'none';

// Show main
const main = document.querySelector('.main');
main.style.display = 'block';




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* ===========================================================
 * onepagescroll.js v1.2.2
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/purejs-onepage-scroll
 * 
 * License: GPL v3
 *
 * ========================================================== */
	
function onePageScroll(element, options) {
  
  var defaults = {
	    	sectionContainer: "section",
	    	easing: "ease",
	    	animationTime: 1000,
	    	pagination: true,
	    	updateURL: false,
	    	keyboard: true,
	    	beforeMove: null,
	    	afterMove: null,
	    	loop: false,
	    	responsiveFallback: false
	    },
	    _root = this,
	    settings = Object.extend({}, defaults, options),
	    el = document.querySelector(element),
	    sections = document.querySelectorAll(settings.sectionContainer),
	    total = sections.length,
	    status = "off",
	    topPos = 0,
	    lastAnimation = 0,
	    quietPeriod = 500,
	    paginationList = "",
	    body = document.querySelector("body");
  
  this.init = function() { 
    /*-------------------------------------------*/
    /*  Prepare Everything                       */
    /*-------------------------------------------*/
    
  	_addClass(el, "onepage-wrapper")
  	el.style.position = "relative";
    
  	for( var i = 0; i < sections.length; i++){
  	  _addClass(sections[i], "ops-section")
  	  sections[i].dataset.index = i + 1;
  	  topPos = topPos + 100;
    
  	  if(settings.pagination == true) {
  			paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>";
  		}
    }
    
  	_swipeEvents(el);
  	document.addEventListener("swipeDown",  function(event){
  	  if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
  		moveUp(el);
  	});
  	document.addEventListener("swipeUp", function(event){
  		if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
  		moveDown(el);
  	});
    
  	// Create Pagination and Display Them
    
  	if(settings.pagination == true) {
  	  var pagination = document.createElement("ul");
  	  pagination.setAttribute("class", "onepage-pagination");
    
  	  body.appendChild(pagination)
  		pagination.innerHTML = paginationList;
  		var posTop = (document.querySelector(".onepage-pagination").offsetHeight / 2) * -1;
  		document.querySelector(".onepage-pagination").style.marginTop = posTop;
  	}
    
  	if(window.location.hash != "" && window.location.hash != "#1") {
  		var init_index =  window.location.hash.replace("#", ""),
  		    next = document.querySelector(settings.sectionContainer + "[data-index='" + (init_index) + "']"),
  		    next_index = next.dataset.index;
    
  		_addClass( document.querySelector(settings.sectionContainer + "[data-index='" + init_index + "']") ,"active")
  		_addClass(body, "viewing-page-"+ init_index)
  		if(settings.pagination == true) _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + init_index + "']"), "active");
    
  		if(next) {
  			_addClass(next, "active")
  			if(settings.pagination == true) _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + init_index + "']"), "active");
    
  			body.className = body.className.replace(/\bviewing-page-\d.*?\b/g, '');
  			_addClass(body, "viewing-page-" + next_index)
  			if (history.replaceState && settings.updateURL == true) {
  				var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (init_index);
  				history.pushState( {}, document.title, href );
  			}
  		}
  		var pos = ((init_index - 1) * 100) * -1;
  		_transformPage(el, settings, pos, init_index);
    
  	}else{
  	  _addClass(document.querySelector(settings.sectionContainer + "[data-index='1']"), "active");
  	  _addClass(body, "viewing-page-1");
  		if(settings.pagination == true) _addClass(document.querySelector(".onepage-pagination li a[data-index='1']"), "active");
  	}
    
  	_paginationHandler = function() {
      var page_index = this.dataset.index;
  		moveTo(el, page_index);
  	}
    
    
  	if(settings.pagination == true)  {
  	  var pagination_links = document.querySelectorAll(".onepage-pagination li a");
    
  	  for( var i = 0; i < pagination_links.length; i++){
    	  pagination_links[i].addEventListener('click', _paginationHandler);
      }
  	}
    
  	_mouseWheelHandler = function(event) {
  		event.preventDefault();
  		var delta = event.wheelDelta || -event.detail;
  		if (!_hasClass(body, "disabled-onepage-scroll")) _init_scroll(event, delta);
  	}
    
  	document.addEventListener('mousewheel', _mouseWheelHandler);
  	document.addEventListener('DOMMouseScroll', _mouseWheelHandler);
    
    
  	if(settings.responsiveFallback != false) {
  	  window.onresize = function(){
  			_responsive();
  		}
    
  		_responsive();
  	}
    
    _keydownHandler = function(e) {
  		var tag = e.target.tagName.toLowerCase();
    
  		if (!_hasClass(body, "disabled-onepage-scroll")) {
  			switch(e.which) {
  				case 38:
  					if (tag != 'input' && tag != 'textarea') moveUp(el)
  					break;
  				case 40:
  					if (tag != 'input' && tag != 'textarea') moveDown(el)
  					break;
  				default: return;
  			}
  		}
  		return false;
  	}
    
  	if(settings.keyboard == true) {
  		document.onkeydown = _keydownHandler;
  	}
  	return false;
  }
  
  /*-------------------------------------------------------*/
  /*  Private Functions                                    */
  /*-------------------------------------------------------*/
  /*------------------------------------------------*/
  /*  Credit: Eike Send for the awesome swipe event */
  /*------------------------------------------------*/
  _swipeEvents = function(el){
  	var startX,
  		startY;
  
    document.addEventListener("touchstart", touchstart);  
  
  	function touchstart(event) {
  		var touches = event.touches;
  		if (touches && touches.length) {
  			startX = touches[0].pageX;
  			startY = touches[0].pageY;
  			document.addEventListener("touchmove", touchmove);
  		}
  	}
  
  	function touchmove(event) {
  		var touches = event.touches;
  		if (touches && touches.length) {
  		  event.preventDefault();
  			var deltaX = startX - touches[0].pageX;
  			var deltaY = startY - touches[0].pageY;
  
  			if (deltaX >= 50) {
  			  var event = new Event('swipeLeft');
  			  document.dispatchEvent(event);
  			}
  			if (deltaX <= -50) {
  			  var event = new Event('swipeRight');
  			  document.dispatchEvent(event);
  			}
  			if (deltaY >= 50) {
  			  var event = new Event('swipeUp');
  			  document.dispatchEvent(event);
  			}
  			if (deltaY <= -50) {
  			  var event = new Event('swipeDown');
  			  document.dispatchEvent(event);
  			}
  
  			if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
  				document.removeEventListener('touchmove', touchmove);
  			}
  		}
  	}
  
  };
  /*-----------------------------------------------------------*/
	/*  Utility to add/remove class easily with javascript       */
	/*-----------------------------------------------------------*/

  _trim = function(str) {
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  _hasClass = function(ele,cls) {
    if (ele.className) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    } else {
      return ele.className = cls;
    }
  }

  _addClass = function(ele,cls) {
    if (!_hasClass(ele,cls)) ele.className += " "+cls;
    ele.className = _trim(ele.className)
  }

  _removeClass = function(ele,cls) {
    if (_hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
    ele.className = _trim(ele.className)
  }

  /*-----------------------------------------------------------*/
	/*  Transtionend Normalizer by Modernizr                     */
	/*-----------------------------------------------------------*/

  _whichTransitionEvent = function(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
  }

  /*-----------------------------------------------------------*/
	/*  Function to perform scroll to top animation              */
	/*-----------------------------------------------------------*/

  _scrollTo = function(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        _scrollTo(element, to, duration - 10);
    }, 10);
  }
  
  
     
  /*---------------------------------*/
  /*  Function to transform the page */
  /*---------------------------------*/
  
  _transformPage = function(el2, settings, pos, index, next_el) {
    if (typeof settings.beforeMove == 'function') settings.beforeMove(index, next_el);
    
    var transformCSS = "-webkit-transform: translate3d(0, " + pos + "%, 0); -webkit-transition: -webkit-transform " + settings.animationTime + "ms " + settings.easing + "; -moz-transform: translate3d(0, " + pos + "%, 0); -moz-transition: -moz-transform " + settings.animationTime + "ms " + settings.easing + "; -ms-transform: translate3d(0, " + pos + "%, 0); -ms-transition: -ms-transform " + settings.animationTime + "ms " + settings.easing + "; transform: translate3d(0, " + pos + "%, 0); transition: transform " + settings.animationTime + "ms " + settings.easing + ";";
    
    el2.style.cssText = transformCSS;
    
    var transitionEnd = _whichTransitionEvent();
     el2.addEventListener(transitionEnd, endAnimation, false);
    
    function endAnimation() {
      if (typeof settings.afterMove == 'function') settings.afterMove(index, next_el);
      el2.removeEventListener(transitionEnd, endAnimation)
    }
  }
  
  /*-------------------------------------------*/
  /*  Responsive Fallback trigger              */
  /*-------------------------------------------*/
  
  _responsive = function() {

		if (document.body.clientWidth < settings.responsiveFallback) {
			
			_addClass(body, "disabled-onepage-scroll");
			document.removeEventListener('mousewheel', _mouseWheelHandler);
			document.removeEventListener('DOMMouseScroll', _mouseWheelHandler);
			_swipeEvents(el);
			document.removeEventListener("swipeDown");
			document.removeEventListener("swipeUp");
			
		} else {
		  
		  if (_hasClass(body, "disabled-onepage-scroll")) {
		    _removeClass(body, "disabled-onepage-scroll");
		    _scrollTo(document.documentElement, 0, 2000);
	    }
      
      

			_swipeEvents(el);
			document.addEventListener("swipeDown",  function(event){
			  if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
				moveUp(el);
			});
			document.addEventListener("swipeUp", function(event){
				if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
				moveDown(el);
			});
      
      document.addEventListener('mousewheel', _mouseWheelHandler);
  		document.addEventListener('DOMMouseScroll', _mouseWheelHandler);
			
		}
	}
	
	/*-------------------------------------------*/
  /*  Initialize scroll detection              */
  /*-------------------------------------------*/
  
  _init_scroll = function(event, delta) {
		var deltaOfInterest = delta,
			timeNow = new Date().getTime();
			
		// Cancel scroll if currently animating or within quiet period
		if(timeNow - lastAnimation < quietPeriod + settings.animationTime) {
			event.preventDefault();
			return;
		}

		if (deltaOfInterest < 0) {
			moveDown(el)
		} else {
			moveUp(el)
		}
		
		lastAnimation = timeNow;
	}
   
  
  /*-------------------------------------------------------*/
  /*  Public Functions                                     */
  /*-------------------------------------------------------*/
  
  /*---------------------------------*/
  /*  Function to move down section  */
  /*---------------------------------*/
  
   this.moveDown = function(el3) {
    
    if (typeof el3 == "string") el3 = document.querySelector(el3);
    
    var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
		    current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
		    next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) + 1) + "']");
		    
		    
		if(!next) {
			if (settings.loop == true) {
				pos = 0;
				next = document.querySelector(settings.sectionContainer + "[data-index='1']");
			} else {
				return
			}

		}else {
			pos = (index * 100) * -1;
		}
		var next_index = next.dataset.index;
		_removeClass(current, "active");
		_addClass(next, "active");
		
		if(settings.pagination == true) {
		  _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
		  _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");
		}

		body.className = body.className.replace(/\bviewing-page-\d.*?\b/g, '');
		_addClass(body, "viewing-page-"+ next_index);

		if (history.replaceState && settings.updateURL == true) {
			var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (parseInt(index) + 1);
			history.pushState( {}, document.title, href );
		}
		_transformPage(el3, settings, pos, next_index, next);
	}
	
	/*---------------------------------*/
  /*  Function to move up section    */
  /*---------------------------------*/
	
	this.moveUp = function(el4) {
	  
	  if (typeof el4 == "string") el4 = document.querySelector(el4);
	  
	  var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
		    current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
		    next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) - 1) + "']");

		if(!next) {
			if (settings.loop == true) {
				pos = ((total - 1) * 100) * -1;
				next = document.querySelector(settings.sectionContainer + "[data-index='" + total + "']");
			} else {
				return
			}
		}else {
			pos = ((next.dataset.index - 1) * 100) * -1;
		}
		var next_index = next.dataset.index;
		_removeClass(current, "active")
		_addClass(next, "active")
		
		if(settings.pagination == true) {
		  _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
		  _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");
		}
		body.className = body.className.replace(/\bviewing-page-\d.*?\b/g, '');
		_addClass(body, "viewing-page-"+ next_index);

		if (history.replaceState && settings.updateURL == true) {
			var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (parseInt(index) - 1);
			history.pushState( {}, document.title, href );
		}
		_transformPage(el4, settings, pos, next_index, next);
	}
  
  /*-------------------------------------------*/
  /*  Function to move to specified section    */
  /*-------------------------------------------*/
  
  this.moveTo = function(el5, page_index) {
    
    if (typeof el5 == "string") el5 = document.querySelector(el5);
    
		var current = document.querySelector(settings.sectionContainer + ".active"),
		    next = document.querySelector(settings.sectionContainer + "[data-index='" + (page_index) + "']");
		    
		if(next) {
		  var next_index = next.dataset.index;
			_removeClass(current, "active");
			_addClass(next, "active");
			_removeClass(document.querySelector(".onepage-pagination li a" + ".active"), "active");
			_addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + (page_index) + "']"), "active");

			body.className = body.className.replace(/\bviewing-page-\d.*?\b/g, '');
			_addClass(body, "viewing-page-"+ next_index);

			pos = ((page_index - 1) * 100) * -1;

			if (history.replaceState && settings.updateURL == true) {
				var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (parseInt(page_index) - 1);
				history.pushState( {}, document.title, href );
			}
			_transformPage(el5, settings, pos, page_index, next);
		}
	}
	
  this.init();
}

/*------------------------------------------------*/
 /*  Ulitilities Method                            */
 /*------------------------------------------------*/
 
 /*-----------------------------------------------------------*/
 /*  Function by John Resig to replicate extend functionality */
 /*-----------------------------------------------------------*/
 
 Object.extend = function(orig){
   if ( orig == null )
     return orig;
 
   for ( var i = 1; i < arguments.length; i++ ) {
     var obj = arguments[i];
     if ( obj != null ) {
       for ( var prop in obj ) {
         var getter = obj.__lookupGetter__( prop ),
             setter = obj.__lookupSetter__( prop );
 
         if ( getter || setter ) {
           if ( getter )
             orig.__defineGetter__( prop, getter );
           if ( setter )
             orig.__defineSetter__( prop, setter );
         } else {
           orig[ prop ] = obj[ prop ];
         }
       }
     }
   }
 
   return orig;
 };
	



/*** EXPORTS FROM exports-loader ***/
exports["onePageScroll"] = (onePageScroll);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGJhMzQzNGNhZTYwOTc5ZjBlY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2VzY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUN3Qjs7QUFFeEI7O0FBRUE7QUFDQSx5Q0FBeUMsTUFBTTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0EseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkVBQTJFLGdHQUFnRyxpREFBaUQsMEZBQTBGLGdEQUFnRCx3RkFBd0YsNENBQTRDLGdGQUFnRjs7QUFFMWpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQSwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYmEzNDM0Y2FlNjA5NzlmMGVjZCIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3MnO1xuaW1wb3J0IHsgb25lUGFnZVNjcm9sbCB9IGZyb20gJy4vbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZXNjcm9sbC5qcyc7XG5cbmxldCBwcmV2aW91c0JhY2tncm91bmRDbGFzcyA9ICdiYWNrZ3JvdW5kLTEnO1xuXG5jb25zdCBoYW5kbGVTdGVwRW50ZXIgPSAoaW5kZXgsIG5leHRfZWwpID0+IHtcbiAgbGV0IG5ld0JhY2tncm91bmRDbGFzcyA9IGBiYWNrZ3JvdW5kLSR7aW5kZXh9YDtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtY29udGFpbmVyJyk7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShwcmV2aW91c0JhY2tncm91bmRDbGFzcyk7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChuZXdCYWNrZ3JvdW5kQ2xhc3MpO1xuICBwcmV2aW91c0JhY2tncm91bmRDbGFzcyA9IG5ld0JhY2tncm91bmRDbGFzcztcbn07XG5cbm9uZVBhZ2VTY3JvbGwoXCIubWFpblwiLCB7XG4gIHNlY3Rpb25Db250YWluZXI6IFwiLnNjcm9sbC1zdGVwXCIsLy8gc2VjdGlvbkNvbnRhaW5lciBhY2NlcHRzIGFueSBraW5kIG9mIHNlbGVjdG9yIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gdXNlIHNlY3Rpb25cbiAgZWFzaW5nOiBcImVhc2VcIiwgICAgICAgICAgICAgICAgICAvLyBFYXNpbmcgb3B0aW9ucyBhY2NlcHRzIHRoZSBDU1MzIGVhc2luZyBhbmltYXRpb24gc3VjaCBcImVhc2VcIiwgXCJsaW5lYXJcIiwgXCJlYXNlLWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiZWFzZS1vdXRcIiwgXCJlYXNlLWluLW91dFwiLCBvciBldmVuIGN1YmljIGJlemllciB2YWx1ZSBzdWNoIGFzIFwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC40MjAsIDEuMzEwKVwiXG4gIGFuaW1hdGlvblRpbWU6IDYwMCwgICAgICAgICAgICAgIC8vIEFuaW1hdGlvblRpbWUgbGV0IHlvdSBkZWZpbmUgaG93IGxvbmcgZWFjaCBzZWN0aW9uIHRha2VzIHRvIGFuaW1hdGVcbiAgcGFnaW5hdGlvbjogZmFsc2UsICAgICAgICAgICAgICAgLy8gWW91IGNhbiBlaXRoZXIgc2hvdyBvciBoaWRlIHRoZSBwYWdpbmF0aW9uLiBUb2dnbGUgdHJ1ZSBmb3Igc2hvdywgZmFsc2UgZm9yIGhpZGUuXG4gIHVwZGF0ZVVSTDogZmFsc2UsICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGlzIHRydWUgaWYgeW91IHdhbnQgdGhlIFVSTCB0byBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBzY3JvbGwgdG8gZWFjaCBwYWdlLlxuICAvLyBiZWZvcmVNb3ZlOiBoYW5kbGVTdGVwRXhpdCwgICAgICAvLyBUaGlzIG9wdGlvbiBhY2NlcHRzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHBhZ2UgbW92ZXMuXG4gIGFmdGVyTW92ZTogaGFuZGxlU3RlcEVudGVyLCAgICAgIC8vIFRoaXMgb3B0aW9uIGFjY2VwdHMgYSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoZSBwYWdlIG1vdmVzLlxuICBsb29wOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGhhdmUgdGhlIHBhZ2UgbG9vcCBiYWNrIHRvIHRoZSB0b3AvYm90dG9tIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF0IHVwL2Rvd24gb24gdGhlIGZpcnN0L2xhc3QgcGFnZS5cbiAga2V5Ym9hcmQ6IHRydWUsICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhY3RpdmF0ZSB0aGUga2V5Ym9hcmQgY29udHJvbHNcbiAgcmVzcG9uc2l2ZUZhbGxiYWNrOiBmYWxzZSAgICAgICAgLy8gWW91IGNhbiBmYWxsYmFjayB0byBub3JtYWwgcGFnZSBzY3JvbGwgYnkgZGVmaW5pbmcgdGhlIHdpZHRoIG9mIHRoZSBicm93c2VyIGluIHdoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHlvdSB3YW50IHRoZSByZXNwb25zaXZlIGZhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZC4gRm9yIGV4YW1wbGUsIHNldCB0aGlzIHRvIDYwMCBhbmQgd2hlbmV2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJyb3dzZXIncyB3aWR0aCBpcyBsZXNzIHRoYW4gNjAwLCB0aGUgZmFsbGJhY2sgd2lsbCBraWNrIGluLlxufSk7XG5cbi8vIEhpZGUgbG9hZGVyXG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuLy8gU2hvdyBtYWluXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbm1haW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBvbmVwYWdlc2Nyb2xsLmpzIHYxLjIuMlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDE0IFBldGUgUm9qd29uZ3N1cml5YS5cbiAqIGh0dHA6Ly93d3cudGhlcGV0ZWRlc2lnbi5jb21cbiAqXG4gKiBDcmVhdGUgYW4gQXBwbGUtbGlrZSB3ZWJzaXRlIHRoYXQgbGV0IHVzZXIgc2Nyb2xsXG4gKiBvbmUgcGFnZSBhdCBhIHRpbWVcbiAqXG4gKiBDcmVkaXQ6IEVpa2UgU2VuZCBmb3IgdGhlIGF3ZXNvbWUgc3dpcGUgZXZlbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wZWFjaGFuYW5yL3B1cmVqcy1vbmVwYWdlLXNjcm9sbFxuICogXG4gKiBMaWNlbnNlOiBHUEwgdjNcbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cdFxuZnVuY3Rpb24gb25lUGFnZVNjcm9sbChlbGVtZW50LCBvcHRpb25zKSB7XG4gIFxuICB2YXIgZGVmYXVsdHMgPSB7XG5cdCAgICBcdHNlY3Rpb25Db250YWluZXI6IFwic2VjdGlvblwiLFxuXHQgICAgXHRlYXNpbmc6IFwiZWFzZVwiLFxuXHQgICAgXHRhbmltYXRpb25UaW1lOiAxMDAwLFxuXHQgICAgXHRwYWdpbmF0aW9uOiB0cnVlLFxuXHQgICAgXHR1cGRhdGVVUkw6IGZhbHNlLFxuXHQgICAgXHRrZXlib2FyZDogdHJ1ZSxcblx0ICAgIFx0YmVmb3JlTW92ZTogbnVsbCxcblx0ICAgIFx0YWZ0ZXJNb3ZlOiBudWxsLFxuXHQgICAgXHRsb29wOiBmYWxzZSxcblx0ICAgIFx0cmVzcG9uc2l2ZUZhbGxiYWNrOiBmYWxzZVxuXHQgICAgfSxcblx0ICAgIF9yb290ID0gdGhpcyxcblx0ICAgIHNldHRpbmdzID0gT2JqZWN0LmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpLFxuXHQgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLFxuXHQgICAgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIpLFxuXHQgICAgdG90YWwgPSBzZWN0aW9ucy5sZW5ndGgsXG5cdCAgICBzdGF0dXMgPSBcIm9mZlwiLFxuXHQgICAgdG9wUG9zID0gMCxcblx0ICAgIGxhc3RBbmltYXRpb24gPSAwLFxuXHQgICAgcXVpZXRQZXJpb2QgPSA1MDAsXG5cdCAgICBwYWdpbmF0aW9uTGlzdCA9IFwiXCIsXG5cdCAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIFxuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHsgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAvKiAgUHJlcGFyZSBFdmVyeXRoaW5nICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgXG4gIFx0X2FkZENsYXNzKGVsLCBcIm9uZXBhZ2Utd3JhcHBlclwiKVxuICBcdGVsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIFxuICBcdGZvciggdmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspe1xuICBcdCAgX2FkZENsYXNzKHNlY3Rpb25zW2ldLCBcIm9wcy1zZWN0aW9uXCIpXG4gIFx0ICBzZWN0aW9uc1tpXS5kYXRhc2V0LmluZGV4ID0gaSArIDE7XG4gIFx0ICB0b3BQb3MgPSB0b3BQb3MgKyAxMDA7XG4gICAgXG4gIFx0ICBpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIHtcbiAgXHRcdFx0cGFnaW5hdGlvbkxpc3QgKz0gXCI8bGk+PGEgZGF0YS1pbmRleD0nXCIgKyAoaSArIDEpICsgXCInIGhyZWY9JyNcIiArIChpICsgMSkgKyBcIic+PC9hPjwvbGk+XCI7XG4gIFx0XHR9XG4gICAgfVxuICAgIFxuICBcdF9zd2lwZUV2ZW50cyhlbCk7XG4gIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlRG93blwiLCAgZnVuY3Rpb24oZXZlbnQpe1xuICBcdCAgaWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdG1vdmVVcChlbCk7XG4gIFx0fSk7XG4gIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlVXBcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICBcdFx0aWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdG1vdmVEb3duKGVsKTtcbiAgXHR9KTtcbiAgICBcbiAgXHQvLyBDcmVhdGUgUGFnaW5hdGlvbiBhbmQgRGlzcGxheSBUaGVtXG4gICAgXG4gIFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSB7XG4gIFx0ICB2YXIgcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgXHQgIHBhZ2luYXRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbmVwYWdlLXBhZ2luYXRpb25cIik7XG4gICAgXG4gIFx0ICBib2R5LmFwcGVuZENoaWxkKHBhZ2luYXRpb24pXG4gIFx0XHRwYWdpbmF0aW9uLmlubmVySFRNTCA9IHBhZ2luYXRpb25MaXN0O1xuICBcdFx0dmFyIHBvc1RvcCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvblwiKS5vZmZzZXRIZWlnaHQgLyAyKSAqIC0xO1xuICBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb25cIikuc3R5bGUubWFyZ2luVG9wID0gcG9zVG9wO1xuICBcdH1cbiAgICBcbiAgXHRpZih3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiIzFcIikge1xuICBcdFx0dmFyIGluaXRfaW5kZXggPSAgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIiksXG4gIFx0XHQgICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgKGluaXRfaW5kZXgpICsgXCInXVwiKSxcbiAgXHRcdCAgICBuZXh0X2luZGV4ID0gbmV4dC5kYXRhc2V0LmluZGV4O1xuICAgIFxuICBcdFx0X2FkZENsYXNzKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluaXRfaW5kZXggKyBcIiddXCIpICxcImFjdGl2ZVwiKVxuICBcdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBpbml0X2luZGV4KVxuICBcdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbml0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG4gICAgXG4gIFx0XHRpZihuZXh0KSB7XG4gIFx0XHRcdF9hZGRDbGFzcyhuZXh0LCBcImFjdGl2ZVwiKVxuICBcdFx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluaXRfaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcbiAgICBcbiAgXHRcdFx0Ym9keS5jbGFzc05hbWUgPSBib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJ2aWV3aW5nLXBhZ2UtXFxkLio/XFxiL2csICcnKTtcbiAgXHRcdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiICsgbmV4dF9pbmRleClcbiAgXHRcdFx0aWYgKGhpc3RvcnkucmVwbGFjZVN0YXRlICYmIHNldHRpbmdzLnVwZGF0ZVVSTCA9PSB0cnVlKSB7XG4gIFx0XHRcdFx0dmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJykpICsgXCIjXCIgKyAoaW5pdF9pbmRleCk7XG4gIFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZiApO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHR2YXIgcG9zID0gKChpbml0X2luZGV4IC0gMSkgKiAxMDApICogLTE7XG4gIFx0XHRfdHJhbnNmb3JtUGFnZShlbCwgc2V0dGluZ3MsIHBvcywgaW5pdF9pbmRleCk7XG4gICAgXG4gIFx0fWVsc2V7XG4gIFx0ICBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nMSddXCIpLCBcImFjdGl2ZVwiKTtcbiAgXHQgIF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS0xXCIpO1xuICBcdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVtkYXRhLWluZGV4PScxJ11cIiksIFwiYWN0aXZlXCIpO1xuICBcdH1cbiAgICBcbiAgXHRfcGFnaW5hdGlvbkhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYWdlX2luZGV4ID0gdGhpcy5kYXRhc2V0LmluZGV4O1xuICBcdFx0bW92ZVRvKGVsLCBwYWdlX2luZGV4KTtcbiAgXHR9XG4gICAgXG4gICAgXG4gIFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSAge1xuICBcdCAgdmFyIHBhZ2luYXRpb25fbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIpO1xuICAgIFxuICBcdCAgZm9yKCB2YXIgaSA9IDA7IGkgPCBwYWdpbmF0aW9uX2xpbmtzLmxlbmd0aDsgaSsrKXtcbiAgICBcdCAgcGFnaW5hdGlvbl9saW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9wYWdpbmF0aW9uSGFuZGxlcik7XG4gICAgICB9XG4gIFx0fVxuICAgIFxuICBcdF9tb3VzZVdoZWVsSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdFx0dmFyIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsO1xuICBcdFx0aWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkgX2luaXRfc2Nyb2xsKGV2ZW50LCBkZWx0YSk7XG4gIFx0fVxuICAgIFxuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcbiAgICBcbiAgICBcbiAgXHRpZihzZXR0aW5ncy5yZXNwb25zaXZlRmFsbGJhY2sgIT0gZmFsc2UpIHtcbiAgXHQgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gIFx0XHRcdF9yZXNwb25zaXZlKCk7XG4gIFx0XHR9XG4gICAgXG4gIFx0XHRfcmVzcG9uc2l2ZSgpO1xuICBcdH1cbiAgICBcbiAgICBfa2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gIFx0XHR2YXIgdGFnID0gZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIFxuICBcdFx0aWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkge1xuICBcdFx0XHRzd2l0Y2goZS53aGljaCkge1xuICBcdFx0XHRcdGNhc2UgMzg6XG4gIFx0XHRcdFx0XHRpZiAodGFnICE9ICdpbnB1dCcgJiYgdGFnICE9ICd0ZXh0YXJlYScpIG1vdmVVcChlbClcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgNDA6XG4gIFx0XHRcdFx0XHRpZiAodGFnICE9ICdpbnB1dCcgJiYgdGFnICE9ICd0ZXh0YXJlYScpIG1vdmVEb3duKGVsKVxuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0fVxuICAgIFxuICBcdGlmKHNldHRpbmdzLmtleWJvYXJkID09IHRydWUpIHtcbiAgXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IF9rZXlkb3duSGFuZGxlcjtcbiAgXHR9XG4gIFx0cmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgUHJpdmF0ZSBGdW5jdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBDcmVkaXQ6IEVpa2UgU2VuZCBmb3IgdGhlIGF3ZXNvbWUgc3dpcGUgZXZlbnQgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBfc3dpcGVFdmVudHMgPSBmdW5jdGlvbihlbCl7XG4gIFx0dmFyIHN0YXJ0WCxcbiAgXHRcdHN0YXJ0WTtcbiAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hzdGFydCk7ICBcbiAgXG4gIFx0ZnVuY3Rpb24gdG91Y2hzdGFydChldmVudCkge1xuICBcdFx0dmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xuICBcdFx0aWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgXHRcdFx0c3RhcnRYID0gdG91Y2hlc1swXS5wYWdlWDtcbiAgXHRcdFx0c3RhcnRZID0gdG91Y2hlc1swXS5wYWdlWTtcbiAgXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaG1vdmUpO1xuICBcdFx0fVxuICBcdH1cbiAgXG4gIFx0ZnVuY3Rpb24gdG91Y2htb3ZlKGV2ZW50KSB7XG4gIFx0XHR2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG4gIFx0XHRpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICBcdFx0ICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdFx0XHR2YXIgZGVsdGFYID0gc3RhcnRYIC0gdG91Y2hlc1swXS5wYWdlWDtcbiAgXHRcdFx0dmFyIGRlbHRhWSA9IHN0YXJ0WSAtIHRvdWNoZXNbMF0ucGFnZVk7XG4gIFxuICBcdFx0XHRpZiAoZGVsdGFYID49IDUwKSB7XG4gIFx0XHRcdCAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzd2lwZUxlZnQnKTtcbiAgXHRcdFx0ICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoZGVsdGFYIDw9IC01MCkge1xuICBcdFx0XHQgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc3dpcGVSaWdodCcpO1xuICBcdFx0XHQgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGlmIChkZWx0YVkgPj0gNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlVXAnKTtcbiAgXHRcdFx0ICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoZGVsdGFZIDw9IC01MCkge1xuICBcdFx0XHQgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc3dpcGVEb3duJyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXG4gIFx0XHRcdGlmIChNYXRoLmFicyhkZWx0YVgpID49IDUwIHx8IE1hdGguYWJzKGRlbHRhWSkgPj0gNTApIHtcbiAgXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmUpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcbiAgfTtcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdC8qICBVdGlsaXR5IHRvIGFkZC9yZW1vdmUgY2xhc3MgZWFzaWx5IHdpdGggamF2YXNjcmlwdCAgICAgICAqL1xuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBfdHJpbSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKS5yZXBsYWNlKC9cXHNcXHMqJC8sICcnKTtcbiAgfVxuXG4gIF9oYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZSxjbHMpIHtcbiAgICBpZiAoZWxlLmNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGVsZS5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZS5jbGFzc05hbWUgPSBjbHM7XG4gICAgfVxuICB9XG5cbiAgX2FkZENsYXNzID0gZnVuY3Rpb24oZWxlLGNscykge1xuICAgIGlmICghX2hhc0NsYXNzKGVsZSxjbHMpKSBlbGUuY2xhc3NOYW1lICs9IFwiIFwiK2NscztcbiAgICBlbGUuY2xhc3NOYW1lID0gX3RyaW0oZWxlLmNsYXNzTmFtZSlcbiAgfVxuXG4gIF9yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSxjbHMpIHtcbiAgICBpZiAoX2hhc0NsYXNzKGVsZSxjbHMpKSB7XG4gICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJyk7XG4gICAgICAgIGVsZS5jbGFzc05hbWU9ZWxlLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywnICcpO1xuICAgIH1cbiAgICBlbGUuY2xhc3NOYW1lID0gX3RyaW0oZWxlLmNsYXNzTmFtZSlcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHQvKiAgVHJhbnN0aW9uZW5kIE5vcm1hbGl6ZXIgYnkgTW9kZXJuaXpyICAgICAgICAgICAgICAgICAgICAgKi9cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgX3doaWNoVHJhbnNpdGlvbkV2ZW50ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH1cblxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKXtcbiAgICAgICAgaWYoIGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHQvKiAgRnVuY3Rpb24gdG8gcGVyZm9ybSBzY3JvbGwgdG8gdG9wIGFuaW1hdGlvbiAgICAgICAgICAgICAgKi9cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgX3Njcm9sbFRvID0gZnVuY3Rpb24oZWxlbWVudCwgdG8sIGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uIDwgMCkgcmV0dXJuO1xuICAgIHZhciBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgcGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XG4gICAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PSB0bykgcmV0dXJuO1xuICAgICAgICBfc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xuICAgIH0sIDEwKTtcbiAgfVxuICBcbiAgXG4gICAgIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byB0cmFuc2Zvcm0gdGhlIHBhZ2UgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgX3RyYW5zZm9ybVBhZ2UgPSBmdW5jdGlvbihlbDIsIHNldHRpbmdzLCBwb3MsIGluZGV4LCBuZXh0X2VsKSB7XG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5iZWZvcmVNb3ZlID09ICdmdW5jdGlvbicpIHNldHRpbmdzLmJlZm9yZU1vdmUoaW5kZXgsIG5leHRfZWwpO1xuICAgIFxuICAgIHZhciB0cmFuc2Zvcm1DU1MgPSBcIi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBcIiArIHBvcyArIFwiJSwgMCk7IC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gXCIgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lICsgXCJtcyBcIiArIHNldHRpbmdzLmVhc2luZyArIFwiOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIgKyBwb3MgKyBcIiUsIDApOyAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIgKyBwb3MgKyBcIiUsIDApOyAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSBcIiArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUgKyBcIm1zIFwiICsgc2V0dGluZ3MuZWFzaW5nICsgXCI7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIgKyBwb3MgKyBcIiUsIDApOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gXCIgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lICsgXCJtcyBcIiArIHNldHRpbmdzLmVhc2luZyArIFwiO1wiO1xuICAgIFxuICAgIGVsMi5zdHlsZS5jc3NUZXh0ID0gdHJhbnNmb3JtQ1NTO1xuICAgIFxuICAgIHZhciB0cmFuc2l0aW9uRW5kID0gX3doaWNoVHJhbnNpdGlvbkV2ZW50KCk7XG4gICAgIGVsMi5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIGVuZEFuaW1hdGlvbiwgZmFsc2UpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGVuZEFuaW1hdGlvbigpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWZ0ZXJNb3ZlID09ICdmdW5jdGlvbicpIHNldHRpbmdzLmFmdGVyTW92ZShpbmRleCwgbmV4dF9lbCk7XG4gICAgICBlbDIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCBlbmRBbmltYXRpb24pXG4gICAgfVxuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgUmVzcG9uc2l2ZSBGYWxsYmFjayB0cmlnZ2VyICAgICAgICAgICAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgX3Jlc3BvbnNpdmUgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgc2V0dGluZ3MucmVzcG9uc2l2ZUZhbGxiYWNrKSB7XG5cdFx0XHRcblx0XHRcdF9hZGRDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG5cdFx0XHRfc3dpcGVFdmVudHMoZWwpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN3aXBlRG93blwiKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzd2lwZVVwXCIpO1xuXHRcdFx0XG5cdFx0fSBlbHNlIHtcblx0XHQgIFxuXHRcdCAgaWYgKF9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSB7XG5cdFx0ICAgIF9yZW1vdmVDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpO1xuXHRcdCAgICBfc2Nyb2xsVG8oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAwLCAyMDAwKTtcblx0ICAgIH1cbiAgICAgIFxuICAgICAgXG5cblx0XHRcdF9zd2lwZUV2ZW50cyhlbCk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3dpcGVEb3duXCIsICBmdW5jdGlvbihldmVudCl7XG5cdFx0XHQgIGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG1vdmVVcChlbCk7XG5cdFx0XHR9KTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZVVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0aWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bW92ZURvd24oZWwpO1xuXHRcdFx0fSk7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuICBcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdFxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgSW5pdGlhbGl6ZSBzY3JvbGwgZGV0ZWN0aW9uICAgICAgICAgICAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgX2luaXRfc2Nyb2xsID0gZnVuY3Rpb24oZXZlbnQsIGRlbHRhKSB7XG5cdFx0dmFyIGRlbHRhT2ZJbnRlcmVzdCA9IGRlbHRhLFxuXHRcdFx0dGltZU5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XG5cdFx0Ly8gQ2FuY2VsIHNjcm9sbCBpZiBjdXJyZW50bHkgYW5pbWF0aW5nIG9yIHdpdGhpbiBxdWlldCBwZXJpb2Rcblx0XHRpZih0aW1lTm93IC0gbGFzdEFuaW1hdGlvbiA8IHF1aWV0UGVyaW9kICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZGVsdGFPZkludGVyZXN0IDwgMCkge1xuXHRcdFx0bW92ZURvd24oZWwpXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1vdmVVcChlbClcblx0XHR9XG5cdFx0XG5cdFx0bGFzdEFuaW1hdGlvbiA9IHRpbWVOb3c7XG5cdH1cbiAgIFxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFB1YmxpYyBGdW5jdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEZ1bmN0aW9uIHRvIG1vdmUgZG93biBzZWN0aW9uICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAgdGhpcy5tb3ZlRG93biA9IGZ1bmN0aW9uKGVsMykge1xuICAgIFxuICAgIGlmICh0eXBlb2YgZWwzID09IFwic3RyaW5nXCIpIGVsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwzKTtcbiAgICBcbiAgICB2YXIgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgK1wiLmFjdGl2ZVwiKS5kYXRhc2V0LmluZGV4LFxuXHRcdCAgICBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbmRleCArIFwiJ11cIiksXG5cdFx0ICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIChwYXJzZUludChpbmRleCkgKyAxKSArIFwiJ11cIik7XG5cdFx0ICAgIFxuXHRcdCAgICBcblx0XHRpZighbmV4dCkge1xuXHRcdFx0aWYgKHNldHRpbmdzLmxvb3AgPT0gdHJ1ZSkge1xuXHRcdFx0XHRwb3MgPSAwO1xuXHRcdFx0XHRuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nMSddXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cblx0XHR9ZWxzZSB7XG5cdFx0XHRwb3MgPSAoaW5kZXggKiAxMDApICogLTE7XG5cdFx0fVxuXHRcdHZhciBuZXh0X2luZGV4ID0gbmV4dC5kYXRhc2V0LmluZGV4O1xuXHRcdF9yZW1vdmVDbGFzcyhjdXJyZW50LCBcImFjdGl2ZVwiKTtcblx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIik7XG5cdFx0XG5cdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSB7XG5cdFx0ICBfcmVtb3ZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXHRcdCAgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgbmV4dF9pbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXHRcdH1cblxuXHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG5cdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBuZXh0X2luZGV4KTtcblxuXHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJykpICsgXCIjXCIgKyAocGFyc2VJbnQoaW5kZXgpICsgMSk7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG5cdFx0fVxuXHRcdF90cmFuc2Zvcm1QYWdlKGVsMywgc2V0dGluZ3MsIHBvcywgbmV4dF9pbmRleCwgbmV4dCk7XG5cdH1cblx0XG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEZ1bmN0aW9uIHRvIG1vdmUgdXAgc2VjdGlvbiAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdFxuXHR0aGlzLm1vdmVVcCA9IGZ1bmN0aW9uKGVsNCkge1xuXHQgIFxuXHQgIGlmICh0eXBlb2YgZWw0ID09IFwic3RyaW5nXCIpIGVsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWw0KTtcblx0ICBcblx0ICB2YXIgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgK1wiLmFjdGl2ZVwiKS5kYXRhc2V0LmluZGV4LFxuXHRcdCAgICBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbmRleCArIFwiJ11cIiksXG5cdFx0ICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIChwYXJzZUludChpbmRleCkgLSAxKSArIFwiJ11cIik7XG5cblx0XHRpZighbmV4dCkge1xuXHRcdFx0aWYgKHNldHRpbmdzLmxvb3AgPT0gdHJ1ZSkge1xuXHRcdFx0XHRwb3MgPSAoKHRvdGFsIC0gMSkgKiAxMDApICogLTE7XG5cdFx0XHRcdG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIHRvdGFsICsgXCInXVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdH1lbHNlIHtcblx0XHRcdHBvcyA9ICgobmV4dC5kYXRhc2V0LmluZGV4IC0gMSkgKiAxMDApICogLTE7XG5cdFx0fVxuXHRcdHZhciBuZXh0X2luZGV4ID0gbmV4dC5kYXRhc2V0LmluZGV4O1xuXHRcdF9yZW1vdmVDbGFzcyhjdXJyZW50LCBcImFjdGl2ZVwiKVxuXHRcdF9hZGRDbGFzcyhuZXh0LCBcImFjdGl2ZVwiKVxuXHRcdFxuXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuXHRcdCAgX3JlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHQgIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIG5leHRfaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHR9XG5cdFx0Ym9keS5jbGFzc05hbWUgPSBib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJ2aWV3aW5nLXBhZ2UtXFxkLio/XFxiL2csICcnKTtcblx0XHRfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtXCIrIG5leHRfaW5kZXgpO1xuXG5cdFx0aWYgKGhpc3RvcnkucmVwbGFjZVN0YXRlICYmIHNldHRpbmdzLnVwZGF0ZVVSTCA9PSB0cnVlKSB7XG5cdFx0XHR2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKSkgKyBcIiNcIiArIChwYXJzZUludChpbmRleCkgLSAxKTtcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCB7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYgKTtcblx0XHR9XG5cdFx0X3RyYW5zZm9ybVBhZ2UoZWw0LCBzZXR0aW5ncywgcG9zLCBuZXh0X2luZGV4LCBuZXh0KTtcblx0fVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEZ1bmN0aW9uIHRvIG1vdmUgdG8gc3BlY2lmaWVkIHNlY3Rpb24gICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIHRoaXMubW92ZVRvID0gZnVuY3Rpb24oZWw1LCBwYWdlX2luZGV4KSB7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBlbDUgPT0gXCJzdHJpbmdcIikgZWw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbDUpO1xuICAgIFxuXHRcdHZhciBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCIuYWN0aXZlXCIpLFxuXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFnZV9pbmRleCkgKyBcIiddXCIpO1xuXHRcdCAgICBcblx0XHRpZihuZXh0KSB7XG5cdFx0ICB2YXIgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcblx0XHRcdF9yZW1vdmVDbGFzcyhjdXJyZW50LCBcImFjdGl2ZVwiKTtcblx0XHRcdF9hZGRDbGFzcyhuZXh0LCBcImFjdGl2ZVwiKTtcblx0XHRcdF9yZW1vdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIi5hY3RpdmVcIiksIFwiYWN0aXZlXCIpO1xuXHRcdFx0X2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgKHBhZ2VfaW5kZXgpICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cblx0XHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG5cdFx0XHRfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtXCIrIG5leHRfaW5kZXgpO1xuXG5cdFx0XHRwb3MgPSAoKHBhZ2VfaW5kZXggLSAxKSAqIDEwMCkgKiAtMTtcblxuXHRcdFx0aWYgKGhpc3RvcnkucmVwbGFjZVN0YXRlICYmIHNldHRpbmdzLnVwZGF0ZVVSTCA9PSB0cnVlKSB7XG5cdFx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKHBhcnNlSW50KHBhZ2VfaW5kZXgpIC0gMSk7XG5cdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCB7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYgKTtcblx0XHRcdH1cblx0XHRcdF90cmFuc2Zvcm1QYWdlKGVsNSwgc2V0dGluZ3MsIHBvcywgcGFnZV9pbmRleCwgbmV4dCk7XG5cdFx0fVxuXHR9XG5cdFxuICB0aGlzLmluaXQoKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIC8qICBVbGl0aWxpdGllcyBNZXRob2QgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gLyogIEZ1bmN0aW9uIGJ5IEpvaG4gUmVzaWcgdG8gcmVwbGljYXRlIGV4dGVuZCBmdW5jdGlvbmFsaXR5ICovXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gXG4gT2JqZWN0LmV4dGVuZCA9IGZ1bmN0aW9uKG9yaWcpe1xuICAgaWYgKCBvcmlnID09IG51bGwgKVxuICAgICByZXR1cm4gb3JpZztcbiBcbiAgIGZvciAoIHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgaWYgKCBvYmogIT0gbnVsbCApIHtcbiAgICAgICBmb3IgKCB2YXIgcHJvcCBpbiBvYmogKSB7XG4gICAgICAgICB2YXIgZ2V0dGVyID0gb2JqLl9fbG9va3VwR2V0dGVyX18oIHByb3AgKSxcbiAgICAgICAgICAgICBzZXR0ZXIgPSBvYmouX19sb29rdXBTZXR0ZXJfXyggcHJvcCApO1xuIFxuICAgICAgICAgaWYgKCBnZXR0ZXIgfHwgc2V0dGVyICkge1xuICAgICAgICAgICBpZiAoIGdldHRlciApXG4gICAgICAgICAgICAgb3JpZy5fX2RlZmluZUdldHRlcl9fKCBwcm9wLCBnZXR0ZXIgKTtcbiAgICAgICAgICAgaWYgKCBzZXR0ZXIgKVxuICAgICAgICAgICAgIG9yaWcuX19kZWZpbmVTZXR0ZXJfXyggcHJvcCwgc2V0dGVyICk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBvcmlnWyBwcm9wIF0gPSBvYmpbIHByb3AgXTtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiBcbiAgIHJldHVybiBvcmlnO1xuIH07XG5cdFxuXG5cblxuLyoqKiBFWFBPUlRTIEZST00gZXhwb3J0cy1sb2FkZXIgKioqL1xuZXhwb3J0c1tcIm9uZVBhZ2VTY3JvbGxcIl0gPSAob25lUGFnZVNjcm9sbCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZXNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9