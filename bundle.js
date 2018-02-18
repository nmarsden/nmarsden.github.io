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





Object(__WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js__["onePageScroll"])(".main", {
  sectionContainer: ".scroll-step",// sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 600,              // AnimationTime let you define how long each section takes to animate
  pagination: false,               // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  // beforeMove: handleStepExit,      // This option accepts a callback function. The function will be called before the page moves.
  // afterMove: handleStepEnter,      // This option accepts a callback function. The function will be called after the page moves.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDFhNzdjMzU5M2EwZWYyNTJlMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2VzY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUN3Qjs7O0FBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNCQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxYTc3YzM1OTNhMGVmMjUyZTJiIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2Utc2Nyb2xsLmNzcyc7XG5pbXBvcnQgeyBvbmVQYWdlU2Nyb2xsIH0gZnJvbSAnLi9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlc2Nyb2xsLmpzJztcblxuXG5vbmVQYWdlU2Nyb2xsKFwiLm1haW5cIiwge1xuICBzZWN0aW9uQ29udGFpbmVyOiBcIi5zY3JvbGwtc3RlcFwiLC8vIHNlY3Rpb25Db250YWluZXIgYWNjZXB0cyBhbnkga2luZCBvZiBzZWxlY3RvciBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHVzZSBzZWN0aW9uXG4gIGVhc2luZzogXCJlYXNlXCIsICAgICAgICAgICAgICAgICAgLy8gRWFzaW5nIG9wdGlvbnMgYWNjZXB0cyB0aGUgQ1NTMyBlYXNpbmcgYW5pbWF0aW9uIHN1Y2ggXCJlYXNlXCIsIFwibGluZWFyXCIsIFwiZWFzZS1pblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImVhc2Utb3V0XCIsIFwiZWFzZS1pbi1vdXRcIiwgb3IgZXZlbiBjdWJpYyBiZXppZXIgdmFsdWUgc3VjaCBhcyBcImN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuNDIwLCAxLjMxMClcIlxuICBhbmltYXRpb25UaW1lOiA2MDAsICAgICAgICAgICAgICAvLyBBbmltYXRpb25UaW1lIGxldCB5b3UgZGVmaW5lIGhvdyBsb25nIGVhY2ggc2VjdGlvbiB0YWtlcyB0byBhbmltYXRlXG4gIHBhZ2luYXRpb246IGZhbHNlLCAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gZWl0aGVyIHNob3cgb3IgaGlkZSB0aGUgcGFnaW5hdGlvbi4gVG9nZ2xlIHRydWUgZm9yIHNob3csIGZhbHNlIGZvciBoaWRlLlxuICB1cGRhdGVVUkw6IGZhbHNlLCAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhpcyB0cnVlIGlmIHlvdSB3YW50IHRoZSBVUkwgdG8gYmUgdXBkYXRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgc2Nyb2xsIHRvIGVhY2ggcGFnZS5cbiAgLy8gYmVmb3JlTW92ZTogaGFuZGxlU3RlcEV4aXQsICAgICAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSBwYWdlIG1vdmVzLlxuICAvLyBhZnRlck1vdmU6IGhhbmRsZVN0ZXBFbnRlciwgICAgICAvLyBUaGlzIG9wdGlvbiBhY2NlcHRzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGUgcGFnZSBtb3Zlcy5cbiAgbG9vcDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBoYXZlIHRoZSBwYWdlIGxvb3AgYmFjayB0byB0aGUgdG9wL2JvdHRvbSB3aGVuIHRoZSB1c2VyIG5hdmlnYXRlcyBhdCB1cC9kb3duIG9uIHRoZSBmaXJzdC9sYXN0IHBhZ2UuXG4gIGtleWJvYXJkOiB0cnVlLCAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gYWN0aXZhdGUgdGhlIGtleWJvYXJkIGNvbnRyb2xzXG4gIHJlc3BvbnNpdmVGYWxsYmFjazogZmFsc2UgICAgICAgIC8vIFlvdSBjYW4gZmFsbGJhY2sgdG8gbm9ybWFsIHBhZ2Ugc2Nyb2xsIGJ5IGRlZmluaW5nIHRoZSB3aWR0aCBvZiB0aGUgYnJvd3NlciBpbiB3aGljaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB5b3Ugd2FudCB0aGUgcmVzcG9uc2l2ZSBmYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQuIEZvciBleGFtcGxlLCBzZXQgdGhpcyB0byA2MDAgYW5kIHdoZW5ldmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBicm93c2VyJ3Mgd2lkdGggaXMgbGVzcyB0aGFuIDYwMCwgdGhlIGZhbGxiYWNrIHdpbGwga2ljayBpbi5cbn0pO1xuXG4vLyBIaWRlIGxvYWRlclxuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbi8vIFNob3cgbWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5tYWluLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2Utc2Nyb2xsLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogb25lcGFnZXNjcm9sbC5qcyB2MS4yLjJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxNCBQZXRlIFJvandvbmdzdXJpeWEuXG4gKiBodHRwOi8vd3d3LnRoZXBldGVkZXNpZ24uY29tXG4gKlxuICogQ3JlYXRlIGFuIEFwcGxlLWxpa2Ugd2Vic2l0ZSB0aGF0IGxldCB1c2VyIHNjcm9sbFxuICogb25lIHBhZ2UgYXQgYSB0aW1lXG4gKlxuICogQ3JlZGl0OiBFaWtlIFNlbmQgZm9yIHRoZSBhd2Vzb21lIHN3aXBlIGV2ZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGVhY2hhbmFuci9wdXJlanMtb25lcGFnZS1zY3JvbGxcbiAqIFxuICogTGljZW5zZTogR1BMIHYzXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHRcbmZ1bmN0aW9uIG9uZVBhZ2VTY3JvbGwoZWxlbWVudCwgb3B0aW9ucykge1xuICBcbiAgdmFyIGRlZmF1bHRzID0ge1xuXHQgICAgXHRzZWN0aW9uQ29udGFpbmVyOiBcInNlY3Rpb25cIixcblx0ICAgIFx0ZWFzaW5nOiBcImVhc2VcIixcblx0ICAgIFx0YW5pbWF0aW9uVGltZTogMTAwMCxcblx0ICAgIFx0cGFnaW5hdGlvbjogdHJ1ZSxcblx0ICAgIFx0dXBkYXRlVVJMOiBmYWxzZSxcblx0ICAgIFx0a2V5Ym9hcmQ6IHRydWUsXG5cdCAgICBcdGJlZm9yZU1vdmU6IG51bGwsXG5cdCAgICBcdGFmdGVyTW92ZTogbnVsbCxcblx0ICAgIFx0bG9vcDogZmFsc2UsXG5cdCAgICBcdHJlc3BvbnNpdmVGYWxsYmFjazogZmFsc2Vcblx0ICAgIH0sXG5cdCAgICBfcm9vdCA9IHRoaXMsXG5cdCAgICBzZXR0aW5ncyA9IE9iamVjdC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcblx0ICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSxcblx0ICAgIHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyKSxcblx0ICAgIHRvdGFsID0gc2VjdGlvbnMubGVuZ3RoLFxuXHQgICAgc3RhdHVzID0gXCJvZmZcIixcblx0ICAgIHRvcFBvcyA9IDAsXG5cdCAgICBsYXN0QW5pbWF0aW9uID0gMCxcblx0ICAgIHF1aWV0UGVyaW9kID0gNTAwLFxuXHQgICAgcGFnaW5hdGlvbkxpc3QgPSBcIlwiLFxuXHQgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7IFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyogIFByZXBhcmUgRXZlcnl0aGluZyAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIFxuICBcdF9hZGRDbGFzcyhlbCwgXCJvbmVwYWdlLXdyYXBwZXJcIilcbiAgXHRlbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBcbiAgXHRmb3IoIHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKXtcbiAgXHQgIF9hZGRDbGFzcyhzZWN0aW9uc1tpXSwgXCJvcHMtc2VjdGlvblwiKVxuICBcdCAgc2VjdGlvbnNbaV0uZGF0YXNldC5pbmRleCA9IGkgKyAxO1xuICBcdCAgdG9wUG9zID0gdG9wUG9zICsgMTAwO1xuICAgIFxuICBcdCAgaWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSB7XG4gIFx0XHRcdHBhZ2luYXRpb25MaXN0ICs9IFwiPGxpPjxhIGRhdGEtaW5kZXg9J1wiICsgKGkgKyAxKSArIFwiJyBocmVmPScjXCIgKyAoaSArIDEpICsgXCInPjwvYT48L2xpPlwiO1xuICBcdFx0fVxuICAgIH1cbiAgICBcbiAgXHRfc3dpcGVFdmVudHMoZWwpO1xuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZURvd25cIiwgIGZ1bmN0aW9uKGV2ZW50KXtcbiAgXHQgIGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHRtb3ZlVXAoZWwpO1xuICBcdH0pO1xuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZVVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHRtb3ZlRG93bihlbCk7XG4gIFx0fSk7XG4gICAgXG4gIFx0Ly8gQ3JlYXRlIFBhZ2luYXRpb24gYW5kIERpc3BsYXkgVGhlbVxuICAgIFxuICBcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuICBcdCAgdmFyIHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIFx0ICBwYWdpbmF0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib25lcGFnZS1wYWdpbmF0aW9uXCIpO1xuICAgIFxuICBcdCAgYm9keS5hcHBlbmRDaGlsZChwYWdpbmF0aW9uKVxuICBcdFx0cGFnaW5hdGlvbi5pbm5lckhUTUwgPSBwYWdpbmF0aW9uTGlzdDtcbiAgXHRcdHZhciBwb3NUb3AgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb25cIikub2Zmc2V0SGVpZ2h0IC8gMikgKiAtMTtcbiAgXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uXCIpLnN0eWxlLm1hcmdpblRvcCA9IHBvc1RvcDtcbiAgXHR9XG4gICAgXG4gIFx0aWYod2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCJcIiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIiMxXCIpIHtcbiAgXHRcdHZhciBpbml0X2luZGV4ID0gIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpLFxuICBcdFx0ICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIChpbml0X2luZGV4KSArIFwiJ11cIiksXG4gIFx0XHQgICAgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcbiAgICBcbiAgXHRcdF9hZGRDbGFzcyggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbml0X2luZGV4ICsgXCInXVwiKSAsXCJhY3RpdmVcIilcbiAgXHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgaW5pdF9pbmRleClcbiAgXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5pdF9pbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuICAgIFxuICBcdFx0aWYobmV4dCkge1xuICBcdFx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIilcbiAgXHRcdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbml0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG4gICAgXG4gIFx0XHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG4gIFx0XHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIiArIG5leHRfaW5kZXgpXG4gIFx0XHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuICBcdFx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKGluaXRfaW5kZXgpO1xuICBcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCB7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYgKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0dmFyIHBvcyA9ICgoaW5pdF9pbmRleCAtIDEpICogMTAwKSAqIC0xO1xuICBcdFx0X3RyYW5zZm9ybVBhZ2UoZWwsIHNldHRpbmdzLCBwb3MsIGluaXRfaW5kZXgpO1xuICAgIFxuICBcdH1lbHNle1xuICBcdCAgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9JzEnXVwiKSwgXCJhY3RpdmVcIik7XG4gIFx0ICBfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtMVwiKTtcbiAgXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFbZGF0YS1pbmRleD0nMSddXCIpLCBcImFjdGl2ZVwiKTtcbiAgXHR9XG4gICAgXG4gIFx0X3BhZ2luYXRpb25IYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFnZV9pbmRleCA9IHRoaXMuZGF0YXNldC5pbmRleDtcbiAgXHRcdG1vdmVUbyhlbCwgcGFnZV9pbmRleCk7XG4gIFx0fVxuICAgIFxuICAgIFxuICBcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgIHtcbiAgXHQgIHZhciBwYWdpbmF0aW9uX2xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiKTtcbiAgICBcbiAgXHQgIGZvciggdmFyIGkgPSAwOyBpIDwgcGFnaW5hdGlvbl9saW5rcy5sZW5ndGg7IGkrKyl7XG4gICAgXHQgIHBhZ2luYXRpb25fbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcGFnaW5hdGlvbkhhbmRsZXIpO1xuICAgICAgfVxuICBcdH1cbiAgICBcbiAgXHRfbW91c2VXaGVlbEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdHZhciBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbDtcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIF9pbml0X3Njcm9sbChldmVudCwgZGVsdGEpO1xuICBcdH1cbiAgICBcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG4gICAgXG4gICAgXG4gIFx0aWYoc2V0dGluZ3MucmVzcG9uc2l2ZUZhbGxiYWNrICE9IGZhbHNlKSB7XG4gIFx0ICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICBcdFx0XHRfcmVzcG9uc2l2ZSgpO1xuICBcdFx0fVxuICAgIFxuICBcdFx0X3Jlc3BvbnNpdmUoKTtcbiAgXHR9XG4gICAgXG4gICAgX2tleWRvd25IYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICBcdFx0dmFyIHRhZyA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIHtcbiAgXHRcdFx0c3dpdGNoKGUud2hpY2gpIHtcbiAgXHRcdFx0XHRjYXNlIDM4OlxuICBcdFx0XHRcdFx0aWYgKHRhZyAhPSAnaW5wdXQnICYmIHRhZyAhPSAndGV4dGFyZWEnKSBtb3ZlVXAoZWwpXG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIDQwOlxuICBcdFx0XHRcdFx0aWYgKHRhZyAhPSAnaW5wdXQnICYmIHRhZyAhPSAndGV4dGFyZWEnKSBtb3ZlRG93bihlbClcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGRlZmF1bHQ6IHJldHVybjtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cbiAgICBcbiAgXHRpZihzZXR0aW5ncy5rZXlib2FyZCA9PSB0cnVlKSB7XG4gIFx0XHRkb2N1bWVudC5vbmtleWRvd24gPSBfa2V5ZG93bkhhbmRsZXI7XG4gIFx0fVxuICBcdHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFByaXZhdGUgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgQ3JlZGl0OiBFaWtlIFNlbmQgZm9yIHRoZSBhd2Vzb21lIHN3aXBlIGV2ZW50ICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgX3N3aXBlRXZlbnRzID0gZnVuY3Rpb24oZWwpe1xuICBcdHZhciBzdGFydFgsXG4gIFx0XHRzdGFydFk7XG4gIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoc3RhcnQpOyAgXG4gIFxuICBcdGZ1bmN0aW9uIHRvdWNoc3RhcnQoZXZlbnQpIHtcbiAgXHRcdHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcbiAgXHRcdGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gIFx0XHRcdHN0YXJ0WCA9IHRvdWNoZXNbMF0ucGFnZVg7XG4gIFx0XHRcdHN0YXJ0WSA9IHRvdWNoZXNbMF0ucGFnZVk7XG4gIFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2htb3ZlKTtcbiAgXHRcdH1cbiAgXHR9XG4gIFxuICBcdGZ1bmN0aW9uIHRvdWNobW92ZShldmVudCkge1xuICBcdFx0dmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xuICBcdFx0aWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgXHRcdCAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdFx0dmFyIGRlbHRhWCA9IHN0YXJ0WCAtIHRvdWNoZXNbMF0ucGFnZVg7XG4gIFx0XHRcdHZhciBkZWx0YVkgPSBzdGFydFkgLSB0b3VjaGVzWzBdLnBhZ2VZO1xuICBcbiAgXHRcdFx0aWYgKGRlbHRhWCA+PSA1MCkge1xuICBcdFx0XHQgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc3dpcGVMZWZ0Jyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGRlbHRhWCA8PSAtNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlUmlnaHQnKTtcbiAgXHRcdFx0ICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoZGVsdGFZID49IDUwKSB7XG4gIFx0XHRcdCAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzd2lwZVVwJyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGRlbHRhWSA8PSAtNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlRG93bicpO1xuICBcdFx0XHQgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICBcdFx0XHR9XG4gIFxuICBcdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGFYKSA+PSA1MCB8fCBNYXRoLmFicyhkZWx0YVkpID49IDUwKSB7XG4gIFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgXG4gIH07XG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHQvKiAgVXRpbGl0eSB0byBhZGQvcmVtb3ZlIGNsYXNzIGVhc2lseSB3aXRoIGphdmFzY3JpcHQgICAgICAgKi9cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgX3RyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxcc1xccyovLCAnJykucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XG4gIH1cblxuICBfaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsY2xzKSB7XG4gICAgaWYgKGVsZS5jbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBlbGUuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGUuY2xhc3NOYW1lID0gY2xzO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSxjbHMpIHtcbiAgICBpZiAoIV9oYXNDbGFzcyhlbGUsY2xzKSkgZWxlLmNsYXNzTmFtZSArPSBcIiBcIitjbHM7XG4gICAgZWxlLmNsYXNzTmFtZSA9IF90cmltKGVsZS5jbGFzc05hbWUpXG4gIH1cblxuICBfcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsY2xzKSB7XG4gICAgaWYgKF9oYXNDbGFzcyhlbGUsY2xzKSkge1xuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuICAgICAgICBlbGUuY2xhc3NOYW1lPWVsZS5jbGFzc05hbWUucmVwbGFjZShyZWcsJyAnKTtcbiAgICB9XG4gICAgZWxlLmNsYXNzTmFtZSA9IF90cmltKGVsZS5jbGFzc05hbWUpXG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0LyogIFRyYW5zdGlvbmVuZCBOb3JtYWxpemVyIGJ5IE1vZGVybml6ciAgICAgICAgICAgICAgICAgICAgICovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIF93aGljaFRyYW5zaXRpb25FdmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ09UcmFuc2l0aW9uJzonb1RyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9XG5cbiAgICBmb3IodCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgICAgIGlmKCBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0LyogIEZ1bmN0aW9uIHRvIHBlcmZvcm0gc2Nyb2xsIHRvIHRvcCBhbmltYXRpb24gICAgICAgICAgICAgICovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIF9zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xuICAgIGlmIChkdXJhdGlvbiA8IDApIHJldHVybjtcbiAgICB2YXIgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdmFyIHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgICAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT0gdG8pIHJldHVybjtcbiAgICAgICAgX3Njcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgICB9LCAxMCk7XG4gIH1cbiAgXG4gIFxuICAgICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRnVuY3Rpb24gdG8gdHJhbnNmb3JtIHRoZSBwYWdlICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF90cmFuc2Zvcm1QYWdlID0gZnVuY3Rpb24oZWwyLCBzZXR0aW5ncywgcG9zLCBpbmRleCwgbmV4dF9lbCkge1xuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYmVmb3JlTW92ZSA9PSAnZnVuY3Rpb24nKSBzZXR0aW5ncy5iZWZvcmVNb3ZlKGluZGV4LCBuZXh0X2VsKTtcbiAgICBcbiAgICB2YXIgdHJhbnNmb3JtQ1NTID0gXCItd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIgKyBwb3MgKyBcIiUsIDApOyAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBcIiArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUgKyBcIm1zIFwiICsgc2V0dGluZ3MuZWFzaW5nICsgXCI7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gXCIgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lICsgXCJtcyBcIiArIHNldHRpbmdzLmVhc2luZyArIFwiOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjtcIjtcbiAgICBcbiAgICBlbDIuc3R5bGUuY3NzVGV4dCA9IHRyYW5zZm9ybUNTUztcbiAgICBcbiAgICB2YXIgdHJhbnNpdGlvbkVuZCA9IF93aGljaFRyYW5zaXRpb25FdmVudCgpO1xuICAgICBlbDIuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCBlbmRBbmltYXRpb24sIGZhbHNlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbmRBbmltYXRpb24oKSB7XG4gICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFmdGVyTW92ZSA9PSAnZnVuY3Rpb24nKSBzZXR0aW5ncy5hZnRlck1vdmUoaW5kZXgsIG5leHRfZWwpO1xuICAgICAgZWwyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgZW5kQW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFJlc3BvbnNpdmUgRmFsbGJhY2sgdHJpZ2dlciAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF9yZXNwb25zaXZlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHNldHRpbmdzLnJlc3BvbnNpdmVGYWxsYmFjaykge1xuXHRcdFx0XG5cdFx0XHRfYWRkQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuXHRcdFx0X3N3aXBlRXZlbnRzKGVsKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzd2lwZURvd25cIik7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3dpcGVVcFwiKTtcblx0XHRcdFxuXHRcdH0gZWxzZSB7XG5cdFx0ICBcblx0XHQgIGlmIChfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkge1xuXHRcdCAgICBfcmVtb3ZlQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKTtcblx0XHQgICAgX3Njcm9sbFRvKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgMCwgMjAwMCk7XG5cdCAgICB9XG4gICAgICBcbiAgICAgIFxuXG5cdFx0XHRfc3dpcGVFdmVudHMoZWwpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlRG93blwiLCAgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0ICBpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRtb3ZlVXAoZWwpO1xuXHRcdFx0fSk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3dpcGVVcFwiLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG1vdmVEb3duKGVsKTtcblx0XHRcdH0pO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcbiAgXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEluaXRpYWxpemUgc2Nyb2xsIGRldGVjdGlvbiAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF9pbml0X3Njcm9sbCA9IGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSkge1xuXHRcdHZhciBkZWx0YU9mSW50ZXJlc3QgPSBkZWx0YSxcblx0XHRcdHRpbWVOb3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFxuXHRcdC8vIENhbmNlbCBzY3JvbGwgaWYgY3VycmVudGx5IGFuaW1hdGluZyBvciB3aXRoaW4gcXVpZXQgcGVyaW9kXG5cdFx0aWYodGltZU5vdyAtIGxhc3RBbmltYXRpb24gPCBxdWlldFBlcmlvZCArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGRlbHRhT2ZJbnRlcmVzdCA8IDApIHtcblx0XHRcdG1vdmVEb3duKGVsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtb3ZlVXAoZWwpXG5cdFx0fVxuXHRcdFxuXHRcdGxhc3RBbmltYXRpb24gPSB0aW1lTm93O1xuXHR9XG4gICBcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBQdWJsaWMgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIGRvd24gc2VjdGlvbiAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgIHRoaXMubW92ZURvd24gPSBmdW5jdGlvbihlbDMpIHtcbiAgICBcbiAgICBpZiAodHlwZW9mIGVsMyA9PSBcInN0cmluZ1wiKSBlbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsMyk7XG4gICAgXG4gICAgdmFyIGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICtcIi5hY3RpdmVcIikuZGF0YXNldC5pbmRleCxcblx0XHQgICAgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLFxuXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFyc2VJbnQoaW5kZXgpICsgMSkgKyBcIiddXCIpO1xuXHRcdCAgICBcblx0XHQgICAgXG5cdFx0aWYoIW5leHQpIHtcblx0XHRcdGlmIChzZXR0aW5ncy5sb29wID09IHRydWUpIHtcblx0XHRcdFx0cG9zID0gMDtcblx0XHRcdFx0bmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9JzEnXVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXG5cdFx0fWVsc2Uge1xuXHRcdFx0cG9zID0gKGluZGV4ICogMTAwKSAqIC0xO1xuXHRcdH1cblx0XHR2YXIgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcblx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIik7XG5cdFx0X2FkZENsYXNzKG5leHQsIFwiYWN0aXZlXCIpO1xuXHRcdFxuXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuXHRcdCAgX3JlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHQgIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIG5leHRfaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHR9XG5cblx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuXHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgbmV4dF9pbmRleCk7XG5cblx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgc2V0dGluZ3MudXBkYXRlVVJMID09IHRydWUpIHtcblx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKHBhcnNlSW50KGluZGV4KSArIDEpO1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZiApO1xuXHRcdH1cblx0XHRfdHJhbnNmb3JtUGFnZShlbDMsIHNldHRpbmdzLCBwb3MsIG5leHRfaW5kZXgsIG5leHQpO1xuXHR9XG5cdFxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIHVwIHNlY3Rpb24gICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHRcblx0dGhpcy5tb3ZlVXAgPSBmdW5jdGlvbihlbDQpIHtcblx0ICBcblx0ICBpZiAodHlwZW9mIGVsNCA9PSBcInN0cmluZ1wiKSBlbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsNCk7XG5cdCAgXG5cdCAgdmFyIGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICtcIi5hY3RpdmVcIikuZGF0YXNldC5pbmRleCxcblx0XHQgICAgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLFxuXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFyc2VJbnQoaW5kZXgpIC0gMSkgKyBcIiddXCIpO1xuXG5cdFx0aWYoIW5leHQpIHtcblx0XHRcdGlmIChzZXR0aW5ncy5sb29wID09IHRydWUpIHtcblx0XHRcdFx0cG9zID0gKCh0b3RhbCAtIDEpICogMTAwKSAqIC0xO1xuXHRcdFx0XHRuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyB0b3RhbCArIFwiJ11cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHR9ZWxzZSB7XG5cdFx0XHRwb3MgPSAoKG5leHQuZGF0YXNldC5pbmRleCAtIDEpICogMTAwKSAqIC0xO1xuXHRcdH1cblx0XHR2YXIgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcblx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIilcblx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIilcblx0XHRcblx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIHtcblx0XHQgIF9yZW1vdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0ICBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBuZXh0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0fVxuXHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG5cdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBuZXh0X2luZGV4KTtcblxuXHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJykpICsgXCIjXCIgKyAocGFyc2VJbnQoaW5kZXgpIC0gMSk7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG5cdFx0fVxuXHRcdF90cmFuc2Zvcm1QYWdlKGVsNCwgc2V0dGluZ3MsIHBvcywgbmV4dF9pbmRleCwgbmV4dCk7XG5cdH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIHRvIHNwZWNpZmllZCBzZWN0aW9uICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICB0aGlzLm1vdmVUbyA9IGZ1bmN0aW9uKGVsNSwgcGFnZV9pbmRleCkge1xuICAgIFxuICAgIGlmICh0eXBlb2YgZWw1ID09IFwic3RyaW5nXCIpIGVsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWw1KTtcbiAgICBcblx0XHR2YXIgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiLmFjdGl2ZVwiKSxcblx0XHQgICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgKHBhZ2VfaW5kZXgpICsgXCInXVwiKTtcblx0XHQgICAgXG5cdFx0aWYobmV4dCkge1xuXHRcdCAgdmFyIG5leHRfaW5kZXggPSBuZXh0LmRhdGFzZXQuaW5kZXg7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIik7XG5cdFx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIik7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCIuYWN0aXZlXCIpLCBcImFjdGl2ZVwiKTtcblx0XHRcdF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIChwYWdlX2luZGV4KSArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXG5cdFx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuXHRcdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBuZXh0X2luZGV4KTtcblxuXHRcdFx0cG9zID0gKChwYWdlX2luZGV4IC0gMSkgKiAxMDApICogLTE7XG5cblx0XHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuXHRcdFx0XHR2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKSkgKyBcIiNcIiArIChwYXJzZUludChwYWdlX2luZGV4KSAtIDEpO1xuXHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG5cdFx0XHR9XG5cdFx0XHRfdHJhbnNmb3JtUGFnZShlbDUsIHNldHRpbmdzLCBwb3MsIHBhZ2VfaW5kZXgsIG5leHQpO1xuXHRcdH1cblx0fVxuXHRcbiAgdGhpcy5pbml0KCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAvKiAgVWxpdGlsaXRpZXMgTWV0aG9kICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIFxuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIC8qICBGdW5jdGlvbiBieSBKb2huIFJlc2lnIHRvIHJlcGxpY2F0ZSBleHRlbmQgZnVuY3Rpb25hbGl0eSAqL1xuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIFxuIE9iamVjdC5leHRlbmQgPSBmdW5jdGlvbihvcmlnKXtcbiAgIGlmICggb3JpZyA9PSBudWxsIClcbiAgICAgcmV0dXJuIG9yaWc7XG4gXG4gICBmb3IgKCB2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgIGlmICggb2JqICE9IG51bGwgKSB7XG4gICAgICAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgICAgICAgdmFyIGdldHRlciA9IG9iai5fX2xvb2t1cEdldHRlcl9fKCBwcm9wICksXG4gICAgICAgICAgICAgc2V0dGVyID0gb2JqLl9fbG9va3VwU2V0dGVyX18oIHByb3AgKTtcbiBcbiAgICAgICAgIGlmICggZ2V0dGVyIHx8IHNldHRlciApIHtcbiAgICAgICAgICAgaWYgKCBnZXR0ZXIgKVxuICAgICAgICAgICAgIG9yaWcuX19kZWZpbmVHZXR0ZXJfXyggcHJvcCwgZ2V0dGVyICk7XG4gICAgICAgICAgIGlmICggc2V0dGVyIClcbiAgICAgICAgICAgICBvcmlnLl9fZGVmaW5lU2V0dGVyX18oIHByb3AsIHNldHRlciApO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgb3JpZ1sgcHJvcCBdID0gb2JqWyBwcm9wIF07XG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICB9XG4gICB9XG4gXG4gICByZXR1cm4gb3JpZztcbiB9O1xuXHRcblxuXG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbmV4cG9ydHNbXCJvbmVQYWdlU2Nyb2xsXCJdID0gKG9uZVBhZ2VTY3JvbGwpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2VzY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==