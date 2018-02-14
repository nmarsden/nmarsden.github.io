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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3ec7d38caede41acda6bd2c710eb3928.gif";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9093ee3094cf28adbed4006df4fd80ed.gif";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba6cd6a8b6d5ac6a0324789a3b41a5eb.gif";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "46d8e70feb534fc92f61a3ed5303e32d.gif";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__libs_purejs_onepage_scroll_onepage_scroll_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_purejs_onepage_scroll_onepagescroll_js__ = __webpack_require__(19);
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



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(8);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(9);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n:root {\n    --main-text-colour: white;\n    --heading-colour: #c7c7ff;\n    --link-colour: #00abff;\n}\n\nbody {\n    font-family: sans-serif;\n    font-size: 16px;\n    line-height: 22px;\n    color: var(--main-text-colour);\n    padding-top: 10px;\n}\n\na,\na:visited {\n    text-decoration: none;\n    color: var(--link-colour);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.background-container {\n    position: fixed;\n    left: -100%;\n    top: -100%;\n    right: -100%;\n    bottom: -100%;\n    display: flex;\n    z-index: -1;\n    perspective: 150px;\n    perspective-origin: 50% 50%;\n    transform-style: preserve-3d;\n}\n\n.background {\n    width: 100%;\n    background-color: #111111;\n    background-image: url(" + escape(__webpack_require__(10)) + ");\n    animation: 120s background-move linear infinite;\n}\n\n@keyframes background-move {\n    0%   { transform: scale(2) rotateZ(0); }\n    100% { transform: scale(2) rotateZ(360deg); }\n}\n\n.main-banner {\n    margin: 0 auto;\n    max-width: 1000px;\n    text-align: center;\n    background-color: rgba(128, 128, 128, 0.3);\n    padding: 20px;\n}\n\n.heading {\n    font-size: 40px;\n    line-height: 40px;\n    color: var(--heading-colour);\n}\n\n.sub-heading {\n    margin-top: 10px;\n    font-size: 20px;\n    line-height: 20px;\n}\n\n.instructions {\n    font-size: 20px;\n    font-weight: 100;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.chevron {\n    margin-top: 20px;\n    display: block;\n    -webkit-animation: pulse 2s infinite;\n    animation: pulse 2s infinite;\n    color: var(--heading-colour);\n}\n\n.chevron:before {\n    top: 0;\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 20px;\n    position: relative;\n    transform: rotate(135deg);\n    vertical-align: top;\n    width: 20px;\n}\n\n@keyframes pulse {\n    0%   { transform: translate(0, 0); }\n    50%  { transform: translate(0, 10px); }\n    100% { transform: translate(0, 0); }\n}\n\n.project-container {\n    display: flex;\n    padding: 20px;\n    margin: 0 auto;\n    background-color: rgba(128, 128, 128, 0.3);\n    max-width: 1000px;\n    opacity: 0.5;\n    transform: scale(0.8);\n    transition: all 1000ms;\n}\n\n@media(max-width: 800px) {\n    .project-container {\n        flex-direction: column-reverse;\n    }\n\n    .project-container .project-screenshot {\n        flex: 0 0 300px;\n    }\n}\n\n.scroll-step {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.scroll-step.active .project-container {\n    opacity: 1;\n    transform: scale(1);\n}\n\n.project-screenshot {\n    flex: 0 0 400px;\n    background-color: rgba(22, 22, 22, 0.1);\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 400px;\n    height: 300px;\n    margin-right: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 300ms ease;\n    opacity: 0.8;\n}\n\n.scroll-step.active .project-screenshot {\n    opacity: 1;\n}\n\n.screenshot--togglefish {\n    background-image: url(" + escape(__webpack_require__(11)) + ");\n}\n\n.scroll-step.active .screenshot--togglefish {\n    background-image: url(" + escape(__webpack_require__(1)) + ");\n}\n\n/* preload togglefish-screencast.gif used on hover*/\n.screenshot--togglefish:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(1)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--make-em-green {\n    background-image: url(" + escape(__webpack_require__(12)) + ");\n}\n\n.scroll-step.active .screenshot--make-em-green {\n    background-image: url(" + escape(__webpack_require__(2)) + ");\n}\n\n/* preload make-em-green-screencast.gif used on hover*/\n.screenshot--make-em-green:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(2)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--bf-viz {\n    background-image: url(" + escape(__webpack_require__(13)) + ");\n}\n\n.scroll-step.active .screenshot--bf-viz {\n    background-image: url(" + escape(__webpack_require__(3)) + ");\n}\n\n/* preload bf-viz-screencast.gif used on hover*/\n.screenshot--bf-viz:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(3)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--crafty-racer {\n    background-image: url(" + escape(__webpack_require__(14)) + ");\n}\n\n.scroll-step.active .screenshot--crafty-racer {\n    background-image: url(" + escape(__webpack_require__(4)) + ");\n}\n\n/* preload crafty-racer-screencast.gif used on hover*/\n.screenshot--crafty-racer:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(4)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.project-details {\n    flex: 1;\n}\n\n.project-details-header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 16px;\n}\n\n.project-title {\n    display: inline-block;\n    font-size: 32px;\n    line-height: 32px;\n    color: var(--heading-colour);\n}\n\n.project-link {\n    width: 34px;\n    height: 34px;\n    background-image: url(" + escape(__webpack_require__(15)) + ");\n    background-repeat: no-repeat;\n    background-size: 50px 50px;\n    background-position-x: -8px;\n    background-position-y: -8px;\n}\n\n.project-details-item {\n    margin-bottom: 10px\n}\n\n.project-details-item-label {\n    display: inline-block;\n    font-weight: 800;\n}\n\n.project-details-item-content {\n    display: inline-block;\n    margin-top: 5px;\n}\n\n.warning-message {\n    color: var(--main-text-colour);\n    background: rgba(167, 15, 15, 0.8);\n    padding: 4px 6px;\n}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e550125e63508cbe5bdf866189eb4d67.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f57cc372dc8134fdcda45f95c4a179f.gif";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c297f1fa5748c2e7b8eacd6b1353336e.gif";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca84b3b610a56b3efc24ebcf74e0feeb.gif";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "345e37593a909c9cd8995b5ea50b4dc9.gif";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "39516e632fd6e589444e0ac85fea5be9.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./onepage-scroll.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./onepage-scroll.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "body, html {\n  margin: 0;\n  overflow: hidden;\n  -webkit-transition: opacity 400ms;\n  -moz-transition: opacity 400ms;\n  transition: opacity 400ms;\n}\n\nbody, .onepage-wrapper, html {\n  display: block;\n  position: static;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.onepage-wrapper {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n  padding: 0;\n  -webkit-transform-style: preserve-3d;\n}\n\n.onepage-wrapper .ops-section {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.onepage-pagination {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  z-index: 5;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.onepage-pagination li {\n  padding: 0;\n  text-align: center;\n}\n.onepage-pagination li a{\n  padding: 10px;\n  width: 4px;\n  height: 4px;\n  display: block;\n  \n}\n.onepage-pagination li a:before{\n  content: '';\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  background: rgba(0,0,0,0.85);\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n}\n\n.onepage-pagination li a.active:before{\n  width: 10px;\n  height: 10px;\n  background: none;\n  border: 1px solid black;\n  margin-top: -4px;\n  left: 8px;\n}\n\n.disabled-onepage-scroll, .disabled-onepage-scroll .wrapper {\n  overflow: auto;\n}\n\n.disabled-onepage-scroll .onepage-wrapper .ops-section {\n  position: relative !important;\n  top: auto !important;\n}\n.disabled-onepage-scroll .onepage-wrapper {\n  -webkit-transform: none !important;\n  -moz-transform: none !important;\n  transform: none !important;\n  -ms-transform: none !important;\n  min-height: 100%;\n}\n\n\n.disabled-onepage-scroll .onepage-pagination {\n  display: none;\n}\n\nbody.disabled-onepage-scroll, .disabled-onepage-scroll .onepage-wrapper, html {\n  position: inherit;\n}", ""]);

// exports


/***/ }),
/* 19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M5OWViYzAyMjc5NGFhNTU3NmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz8yOTgzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaGV4YWdvbnMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LWZyYW1lLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9leHRlcm5hbC1saW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3M/ZjVmZCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7O0FDM0VBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQSwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3Yzk5ZWJjMDIyNzk0YWE1NTc2YiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNlYzdkMzhjYWVkZTQxYWNkYTZiZDJjNzEwZWIzOTI4LmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy90b2dnbGVmaXNoLXNjcmVlbmNhc3QuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkwOTNlZTMwOTRjZjI4YWRiZWQ0MDA2ZGY0ZmQ4MGVkLmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9tYWtlLWVtLWdyZWVuLXNjcmVlbmNhc3QuZ2lmXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhNmNkNmE4YjZkNWFjNmEwMzI0Nzg5YTNiNDFhNWViLmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC5naWZcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDZkOGU3MGZlYjUzNGZjOTJmNjFhM2VkNTMwM2UzMmQuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2NyYWZ0eS1yYWNlci1zY3JlZW5jYXN0LmdpZlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzJztcbmltcG9ydCB7IG9uZVBhZ2VTY3JvbGwgfSBmcm9tICcuL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2VzY3JvbGwuanMnO1xuXG5cbm9uZVBhZ2VTY3JvbGwoXCIubWFpblwiLCB7XG4gIHNlY3Rpb25Db250YWluZXI6IFwiLnNjcm9sbC1zdGVwXCIsLy8gc2VjdGlvbkNvbnRhaW5lciBhY2NlcHRzIGFueSBraW5kIG9mIHNlbGVjdG9yIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gdXNlIHNlY3Rpb25cbiAgZWFzaW5nOiBcImVhc2VcIiwgICAgICAgICAgICAgICAgICAvLyBFYXNpbmcgb3B0aW9ucyBhY2NlcHRzIHRoZSBDU1MzIGVhc2luZyBhbmltYXRpb24gc3VjaCBcImVhc2VcIiwgXCJsaW5lYXJcIiwgXCJlYXNlLWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiZWFzZS1vdXRcIiwgXCJlYXNlLWluLW91dFwiLCBvciBldmVuIGN1YmljIGJlemllciB2YWx1ZSBzdWNoIGFzIFwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC40MjAsIDEuMzEwKVwiXG4gIGFuaW1hdGlvblRpbWU6IDYwMCwgICAgICAgICAgICAgIC8vIEFuaW1hdGlvblRpbWUgbGV0IHlvdSBkZWZpbmUgaG93IGxvbmcgZWFjaCBzZWN0aW9uIHRha2VzIHRvIGFuaW1hdGVcbiAgcGFnaW5hdGlvbjogZmFsc2UsICAgICAgICAgICAgICAgLy8gWW91IGNhbiBlaXRoZXIgc2hvdyBvciBoaWRlIHRoZSBwYWdpbmF0aW9uLiBUb2dnbGUgdHJ1ZSBmb3Igc2hvdywgZmFsc2UgZm9yIGhpZGUuXG4gIHVwZGF0ZVVSTDogZmFsc2UsICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGlzIHRydWUgaWYgeW91IHdhbnQgdGhlIFVSTCB0byBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBzY3JvbGwgdG8gZWFjaCBwYWdlLlxuICAvLyBiZWZvcmVNb3ZlOiBoYW5kbGVTdGVwRXhpdCwgICAgICAvLyBUaGlzIG9wdGlvbiBhY2NlcHRzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHBhZ2UgbW92ZXMuXG4gIC8vIGFmdGVyTW92ZTogaGFuZGxlU3RlcEVudGVyLCAgICAgIC8vIFRoaXMgb3B0aW9uIGFjY2VwdHMgYSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoZSBwYWdlIG1vdmVzLlxuICBsb29wOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGhhdmUgdGhlIHBhZ2UgbG9vcCBiYWNrIHRvIHRoZSB0b3AvYm90dG9tIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF0IHVwL2Rvd24gb24gdGhlIGZpcnN0L2xhc3QgcGFnZS5cbiAga2V5Ym9hcmQ6IHRydWUsICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhY3RpdmF0ZSB0aGUga2V5Ym9hcmQgY29udHJvbHNcbiAgcmVzcG9uc2l2ZUZhbGxiYWNrOiBmYWxzZSAgICAgICAgLy8gWW91IGNhbiBmYWxsYmFjayB0byBub3JtYWwgcGFnZSBzY3JvbGwgYnkgZGVmaW5pbmcgdGhlIHdpZHRoIG9mIHRoZSBicm93c2VyIGluIHdoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHlvdSB3YW50IHRoZSByZXNwb25zaXZlIGZhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZC4gRm9yIGV4YW1wbGUsIHNldCB0aGlzIHRvIDYwMCBhbmQgd2hlbmV2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJyb3dzZXIncyB3aWR0aCBpcyBsZXNzIHRoYW4gNjAwLCB0aGUgZmFsbGJhY2sgd2lsbCBraWNrIGluLlxufSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tdGV4dC1jb2xvdXI6IHdoaXRlO1xcbiAgICAtLWhlYWRpbmctY29sb3VyOiAjYzdjN2ZmO1xcbiAgICAtLWxpbmstY29sb3VyOiAjMDBhYmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3VyKTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvdXIpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIHRvcDogLTEwMCU7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgYm90dG9tOiAtMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHBlcnNwZWN0aXZlOiAxNTBweDtcXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2hleGFnb25zLnN2Z1wiKSkgKyBcIik7XFxuICAgIGFuaW1hdGlvbjogMTIwcyBiYWNrZ3JvdW5kLW1vdmUgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmQtbW92ZSB7XFxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZVooMCk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlWigzNjBkZWcpOyB9XFxufVxcblxcbi5tYWluLWJhbm5lciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3VyKTtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZXZyb24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvdXIpO1xcbn1cXG5cXG4uY2hldnJvbjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfVxcbiAgICA1MCUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcztcXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Qtc2NyZWVuc2hvdCB7XFxuICAgICAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIH1cXG59XFxuXFxuLnNjcm9sbC1zdGVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnByb2plY3Qtc2NyZWVuc2hvdCB7XFxuICAgIGZsZXg6IDAgMCA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnByb2plY3Qtc2NyZWVuc2hvdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY3JlZW5zaG90LS10b2dnbGVmaXNoIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy90b2dnbGVmaXNoLXNjcmVlbmNhc3QtZnJhbWUuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLnNjcm9sbC1zdGVwLmFjdGl2ZSAuc2NyZWVuc2hvdC0tdG9nZ2xlZmlzaCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LmdpZlwiKSkgKyBcIik7XFxufVxcblxcbi8qIHByZWxvYWQgdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LmdpZiB1c2VkIG9uIGhvdmVyKi9cXG4uc2NyZWVuc2hvdC0tdG9nZ2xlZmlzaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy90b2dnbGVmaXNoLXNjcmVlbmNhc3QuZ2lmXCIpKSArIFwiKTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2NyZWVuc2hvdC0tbWFrZS1lbS1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvbWFrZS1lbS1ncmVlbi1zY3JlZW5jYXN0LWZyYW1lLmdpZlwiKSkgKyBcIik7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnNjcmVlbnNob3QtLW1ha2UtZW0tZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbn1cXG5cXG4vKiBwcmVsb2FkIG1ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWYgdXNlZCBvbiBob3ZlciovXFxuLnNjcmVlbnNob3QtLW1ha2UtZW0tZ3JlZW46YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvbWFrZS1lbS1ncmVlbi1zY3JlZW5jYXN0LmdpZlwiKSkgKyBcIik7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcmVlbnNob3QtLWJmLXZpeiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvYmYtdml6LXNjcmVlbmNhc3QtZnJhbWUuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLnNjcm9sbC1zdGVwLmFjdGl2ZSAuc2NyZWVuc2hvdC0tYmYtdml6IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbn1cXG5cXG4vKiBwcmVsb2FkIGJmLXZpei1zY3JlZW5jYXN0LmdpZiB1c2VkIG9uIGhvdmVyKi9cXG4uc2NyZWVuc2hvdC0tYmYtdml6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2JmLXZpei1zY3JlZW5jYXN0LmdpZlwiKSkgKyBcIik7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcmVlbnNob3QtLWNyYWZ0eS1yYWNlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvY3JhZnR5LXJhY2VyLXNjcmVlbmNhc3QtZnJhbWUuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLnNjcm9sbC1zdGVwLmFjdGl2ZSAuc2NyZWVuc2hvdC0tY3JhZnR5LXJhY2VyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbn1cXG5cXG4vKiBwcmVsb2FkIGNyYWZ0eS1yYWNlci1zY3JlZW5jYXN0LmdpZiB1c2VkIG9uIGhvdmVyKi9cXG4uc2NyZWVuc2hvdC0tY3JhZnR5LXJhY2VyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2NyYWZ0eS1yYWNlci1zY3JlZW5jYXN0LmdpZlwiKSkgKyBcIik7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3VyKTtcXG59XFxuXFxuLnByb2plY3QtbGluayB7XFxuICAgIHdpZHRoOiAzNHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvZXh0ZXJuYWwtbGluay5zdmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtOHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC04cHg7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMtaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscy1pdGVtLWxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzLWl0ZW0tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ud2FybmluZy1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvdXIpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMTUsIDE1LCAwLjgpO1xcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTU1MDEyNWU2MzUwOGNiZTViZGY4NjYxODllYjRkNjcuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2hleGFnb25zLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Y1N2NjMzcyZGM4MTM0ZmRjZGE0NWY5NWM0YTE3OWYuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3RvZ2dsZWZpc2gtc2NyZWVuY2FzdC1mcmFtZS5naWZcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMyOTdmMWZhNTc0OGMyZTdiOGVhY2Q2YjEzNTMzMzZlLmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9tYWtlLWVtLWdyZWVuLXNjcmVlbmNhc3QtZnJhbWUuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTg0YjNiNjEwYTU2YjNlZmMyNGViY2Y3NGUwZmVlYi5naWZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvYmYtdml6LXNjcmVlbmNhc3QtZnJhbWUuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNDVlMzc1OTNhOTA5YzljZDg5OTViNWVhNTBiNGRjOS5naWZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvY3JhZnR5LXJhY2VyLXNjcmVlbmNhc3QtZnJhbWUuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzOTUxNmU2MzJmZDZlNTg5NDQ0ZTBhYzg1ZmVhNWJlOS5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvZXh0ZXJuYWwtbGluay5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9vbmVwYWdlLXNjcm9sbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb25lcGFnZS1zY3JvbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9vbmVwYWdlLXNjcm9sbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcXG59XFxuXFxuYm9keSwgLm9uZXBhZ2Utd3JhcHBlciwgaHRtbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vbmVwYWdlLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5vbmVwYWdlLXdyYXBwZXIgLm9wcy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub25lcGFnZS1wYWdpbmF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiA1O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5vbmVwYWdlLXBhZ2luYXRpb24gbGkge1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhe1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgXFxufVxcbi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYTpiZWZvcmV7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ub25lcGFnZS1wYWdpbmF0aW9uIGxpIGEuYWN0aXZlOmJlZm9yZXtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG4gIGxlZnQ6IDhweDtcXG59XFxuXFxuLmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsLCAuZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwgLndyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAub25lcGFnZS13cmFwcGVyIC5vcHMtc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG4uZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwgLm9uZXBhZ2Utd3JhcHBlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1vei10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuLmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsIC5vbmVwYWdlLXBhZ2luYXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keS5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCwgLmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsIC5vbmVwYWdlLXdyYXBwZXIsIGh0bWwge1xcbiAgcG9zaXRpb246IGluaGVyaXQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogb25lcGFnZXNjcm9sbC5qcyB2MS4yLjJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxNCBQZXRlIFJvandvbmdzdXJpeWEuXG4gKiBodHRwOi8vd3d3LnRoZXBldGVkZXNpZ24uY29tXG4gKlxuICogQ3JlYXRlIGFuIEFwcGxlLWxpa2Ugd2Vic2l0ZSB0aGF0IGxldCB1c2VyIHNjcm9sbFxuICogb25lIHBhZ2UgYXQgYSB0aW1lXG4gKlxuICogQ3JlZGl0OiBFaWtlIFNlbmQgZm9yIHRoZSBhd2Vzb21lIHN3aXBlIGV2ZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGVhY2hhbmFuci9wdXJlanMtb25lcGFnZS1zY3JvbGxcbiAqIFxuICogTGljZW5zZTogR1BMIHYzXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHRcbmZ1bmN0aW9uIG9uZVBhZ2VTY3JvbGwoZWxlbWVudCwgb3B0aW9ucykge1xuICBcbiAgdmFyIGRlZmF1bHRzID0ge1xuXHQgICAgXHRzZWN0aW9uQ29udGFpbmVyOiBcInNlY3Rpb25cIixcblx0ICAgIFx0ZWFzaW5nOiBcImVhc2VcIixcblx0ICAgIFx0YW5pbWF0aW9uVGltZTogMTAwMCxcblx0ICAgIFx0cGFnaW5hdGlvbjogdHJ1ZSxcblx0ICAgIFx0dXBkYXRlVVJMOiBmYWxzZSxcblx0ICAgIFx0a2V5Ym9hcmQ6IHRydWUsXG5cdCAgICBcdGJlZm9yZU1vdmU6IG51bGwsXG5cdCAgICBcdGFmdGVyTW92ZTogbnVsbCxcblx0ICAgIFx0bG9vcDogZmFsc2UsXG5cdCAgICBcdHJlc3BvbnNpdmVGYWxsYmFjazogZmFsc2Vcblx0ICAgIH0sXG5cdCAgICBfcm9vdCA9IHRoaXMsXG5cdCAgICBzZXR0aW5ncyA9IE9iamVjdC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKSxcblx0ICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSxcblx0ICAgIHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyKSxcblx0ICAgIHRvdGFsID0gc2VjdGlvbnMubGVuZ3RoLFxuXHQgICAgc3RhdHVzID0gXCJvZmZcIixcblx0ICAgIHRvcFBvcyA9IDAsXG5cdCAgICBsYXN0QW5pbWF0aW9uID0gMCxcblx0ICAgIHF1aWV0UGVyaW9kID0gNTAwLFxuXHQgICAgcGFnaW5hdGlvbkxpc3QgPSBcIlwiLFxuXHQgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7IFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyogIFByZXBhcmUgRXZlcnl0aGluZyAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIFxuICBcdF9hZGRDbGFzcyhlbCwgXCJvbmVwYWdlLXdyYXBwZXJcIilcbiAgXHRlbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBcbiAgXHRmb3IoIHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKXtcbiAgXHQgIF9hZGRDbGFzcyhzZWN0aW9uc1tpXSwgXCJvcHMtc2VjdGlvblwiKVxuICBcdCAgc2VjdGlvbnNbaV0uZGF0YXNldC5pbmRleCA9IGkgKyAxO1xuICBcdCAgdG9wUG9zID0gdG9wUG9zICsgMTAwO1xuICAgIFxuICBcdCAgaWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSB7XG4gIFx0XHRcdHBhZ2luYXRpb25MaXN0ICs9IFwiPGxpPjxhIGRhdGEtaW5kZXg9J1wiICsgKGkgKyAxKSArIFwiJyBocmVmPScjXCIgKyAoaSArIDEpICsgXCInPjwvYT48L2xpPlwiO1xuICBcdFx0fVxuICAgIH1cbiAgICBcbiAgXHRfc3dpcGVFdmVudHMoZWwpO1xuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZURvd25cIiwgIGZ1bmN0aW9uKGV2ZW50KXtcbiAgXHQgIGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHRtb3ZlVXAoZWwpO1xuICBcdH0pO1xuICBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZVVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHRtb3ZlRG93bihlbCk7XG4gIFx0fSk7XG4gICAgXG4gIFx0Ly8gQ3JlYXRlIFBhZ2luYXRpb24gYW5kIERpc3BsYXkgVGhlbVxuICAgIFxuICBcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuICBcdCAgdmFyIHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIFx0ICBwYWdpbmF0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib25lcGFnZS1wYWdpbmF0aW9uXCIpO1xuICAgIFxuICBcdCAgYm9keS5hcHBlbmRDaGlsZChwYWdpbmF0aW9uKVxuICBcdFx0cGFnaW5hdGlvbi5pbm5lckhUTUwgPSBwYWdpbmF0aW9uTGlzdDtcbiAgXHRcdHZhciBwb3NUb3AgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb25cIikub2Zmc2V0SGVpZ2h0IC8gMikgKiAtMTtcbiAgXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uXCIpLnN0eWxlLm1hcmdpblRvcCA9IHBvc1RvcDtcbiAgXHR9XG4gICAgXG4gIFx0aWYod2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCJcIiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIiMxXCIpIHtcbiAgXHRcdHZhciBpbml0X2luZGV4ID0gIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpLFxuICBcdFx0ICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIChpbml0X2luZGV4KSArIFwiJ11cIiksXG4gIFx0XHQgICAgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcbiAgICBcbiAgXHRcdF9hZGRDbGFzcyggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbml0X2luZGV4ICsgXCInXVwiKSAsXCJhY3RpdmVcIilcbiAgXHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgaW5pdF9pbmRleClcbiAgXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5pdF9pbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuICAgIFxuICBcdFx0aWYobmV4dCkge1xuICBcdFx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIilcbiAgXHRcdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbml0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG4gICAgXG4gIFx0XHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG4gIFx0XHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIiArIG5leHRfaW5kZXgpXG4gIFx0XHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuICBcdFx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKGluaXRfaW5kZXgpO1xuICBcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCB7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYgKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0dmFyIHBvcyA9ICgoaW5pdF9pbmRleCAtIDEpICogMTAwKSAqIC0xO1xuICBcdFx0X3RyYW5zZm9ybVBhZ2UoZWwsIHNldHRpbmdzLCBwb3MsIGluaXRfaW5kZXgpO1xuICAgIFxuICBcdH1lbHNle1xuICBcdCAgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9JzEnXVwiKSwgXCJhY3RpdmVcIik7XG4gIFx0ICBfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtMVwiKTtcbiAgXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFbZGF0YS1pbmRleD0nMSddXCIpLCBcImFjdGl2ZVwiKTtcbiAgXHR9XG4gICAgXG4gIFx0X3BhZ2luYXRpb25IYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFnZV9pbmRleCA9IHRoaXMuZGF0YXNldC5pbmRleDtcbiAgXHRcdG1vdmVUbyhlbCwgcGFnZV9pbmRleCk7XG4gIFx0fVxuICAgIFxuICAgIFxuICBcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgIHtcbiAgXHQgIHZhciBwYWdpbmF0aW9uX2xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiKTtcbiAgICBcbiAgXHQgIGZvciggdmFyIGkgPSAwOyBpIDwgcGFnaW5hdGlvbl9saW5rcy5sZW5ndGg7IGkrKyl7XG4gICAgXHQgIHBhZ2luYXRpb25fbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcGFnaW5hdGlvbkhhbmRsZXIpO1xuICAgICAgfVxuICBcdH1cbiAgICBcbiAgXHRfbW91c2VXaGVlbEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdHZhciBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbDtcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIF9pbml0X3Njcm9sbChldmVudCwgZGVsdGEpO1xuICBcdH1cbiAgICBcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG4gICAgXG4gICAgXG4gIFx0aWYoc2V0dGluZ3MucmVzcG9uc2l2ZUZhbGxiYWNrICE9IGZhbHNlKSB7XG4gIFx0ICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICBcdFx0XHRfcmVzcG9uc2l2ZSgpO1xuICBcdFx0fVxuICAgIFxuICBcdFx0X3Jlc3BvbnNpdmUoKTtcbiAgXHR9XG4gICAgXG4gICAgX2tleWRvd25IYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICBcdFx0dmFyIHRhZyA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgXHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIHtcbiAgXHRcdFx0c3dpdGNoKGUud2hpY2gpIHtcbiAgXHRcdFx0XHRjYXNlIDM4OlxuICBcdFx0XHRcdFx0aWYgKHRhZyAhPSAnaW5wdXQnICYmIHRhZyAhPSAndGV4dGFyZWEnKSBtb3ZlVXAoZWwpXG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIDQwOlxuICBcdFx0XHRcdFx0aWYgKHRhZyAhPSAnaW5wdXQnICYmIHRhZyAhPSAndGV4dGFyZWEnKSBtb3ZlRG93bihlbClcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGRlZmF1bHQ6IHJldHVybjtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cbiAgICBcbiAgXHRpZihzZXR0aW5ncy5rZXlib2FyZCA9PSB0cnVlKSB7XG4gIFx0XHRkb2N1bWVudC5vbmtleWRvd24gPSBfa2V5ZG93bkhhbmRsZXI7XG4gIFx0fVxuICBcdHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFByaXZhdGUgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgQ3JlZGl0OiBFaWtlIFNlbmQgZm9yIHRoZSBhd2Vzb21lIHN3aXBlIGV2ZW50ICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgX3N3aXBlRXZlbnRzID0gZnVuY3Rpb24oZWwpe1xuICBcdHZhciBzdGFydFgsXG4gIFx0XHRzdGFydFk7XG4gIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoc3RhcnQpOyAgXG4gIFxuICBcdGZ1bmN0aW9uIHRvdWNoc3RhcnQoZXZlbnQpIHtcbiAgXHRcdHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcbiAgXHRcdGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gIFx0XHRcdHN0YXJ0WCA9IHRvdWNoZXNbMF0ucGFnZVg7XG4gIFx0XHRcdHN0YXJ0WSA9IHRvdWNoZXNbMF0ucGFnZVk7XG4gIFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2htb3ZlKTtcbiAgXHRcdH1cbiAgXHR9XG4gIFxuICBcdGZ1bmN0aW9uIHRvdWNobW92ZShldmVudCkge1xuICBcdFx0dmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xuICBcdFx0aWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgXHRcdCAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdFx0dmFyIGRlbHRhWCA9IHN0YXJ0WCAtIHRvdWNoZXNbMF0ucGFnZVg7XG4gIFx0XHRcdHZhciBkZWx0YVkgPSBzdGFydFkgLSB0b3VjaGVzWzBdLnBhZ2VZO1xuICBcbiAgXHRcdFx0aWYgKGRlbHRhWCA+PSA1MCkge1xuICBcdFx0XHQgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc3dpcGVMZWZ0Jyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGRlbHRhWCA8PSAtNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlUmlnaHQnKTtcbiAgXHRcdFx0ICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoZGVsdGFZID49IDUwKSB7XG4gIFx0XHRcdCAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzd2lwZVVwJyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGRlbHRhWSA8PSAtNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlRG93bicpO1xuICBcdFx0XHQgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICBcdFx0XHR9XG4gIFxuICBcdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGFYKSA+PSA1MCB8fCBNYXRoLmFicyhkZWx0YVkpID49IDUwKSB7XG4gIFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgXG4gIH07XG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHQvKiAgVXRpbGl0eSB0byBhZGQvcmVtb3ZlIGNsYXNzIGVhc2lseSB3aXRoIGphdmFzY3JpcHQgICAgICAgKi9cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgX3RyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxcc1xccyovLCAnJykucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XG4gIH1cblxuICBfaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsY2xzKSB7XG4gICAgaWYgKGVsZS5jbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBlbGUuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGUuY2xhc3NOYW1lID0gY2xzO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSxjbHMpIHtcbiAgICBpZiAoIV9oYXNDbGFzcyhlbGUsY2xzKSkgZWxlLmNsYXNzTmFtZSArPSBcIiBcIitjbHM7XG4gICAgZWxlLmNsYXNzTmFtZSA9IF90cmltKGVsZS5jbGFzc05hbWUpXG4gIH1cblxuICBfcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsY2xzKSB7XG4gICAgaWYgKF9oYXNDbGFzcyhlbGUsY2xzKSkge1xuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuICAgICAgICBlbGUuY2xhc3NOYW1lPWVsZS5jbGFzc05hbWUucmVwbGFjZShyZWcsJyAnKTtcbiAgICB9XG4gICAgZWxlLmNsYXNzTmFtZSA9IF90cmltKGVsZS5jbGFzc05hbWUpXG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0LyogIFRyYW5zdGlvbmVuZCBOb3JtYWxpemVyIGJ5IE1vZGVybml6ciAgICAgICAgICAgICAgICAgICAgICovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIF93aGljaFRyYW5zaXRpb25FdmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ09UcmFuc2l0aW9uJzonb1RyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9XG5cbiAgICBmb3IodCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgICAgIGlmKCBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0LyogIEZ1bmN0aW9uIHRvIHBlcmZvcm0gc2Nyb2xsIHRvIHRvcCBhbmltYXRpb24gICAgICAgICAgICAgICovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIF9zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xuICAgIGlmIChkdXJhdGlvbiA8IDApIHJldHVybjtcbiAgICB2YXIgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdmFyIHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgICAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT0gdG8pIHJldHVybjtcbiAgICAgICAgX3Njcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgICB9LCAxMCk7XG4gIH1cbiAgXG4gIFxuICAgICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRnVuY3Rpb24gdG8gdHJhbnNmb3JtIHRoZSBwYWdlICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF90cmFuc2Zvcm1QYWdlID0gZnVuY3Rpb24oZWwyLCBzZXR0aW5ncywgcG9zLCBpbmRleCwgbmV4dF9lbCkge1xuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYmVmb3JlTW92ZSA9PSAnZnVuY3Rpb24nKSBzZXR0aW5ncy5iZWZvcmVNb3ZlKGluZGV4LCBuZXh0X2VsKTtcbiAgICBcbiAgICB2YXIgdHJhbnNmb3JtQ1NTID0gXCItd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIgKyBwb3MgKyBcIiUsIDApOyAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBcIiArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUgKyBcIm1zIFwiICsgc2V0dGluZ3MuZWFzaW5nICsgXCI7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gXCIgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lICsgXCJtcyBcIiArIHNldHRpbmdzLmVhc2luZyArIFwiOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjtcIjtcbiAgICBcbiAgICBlbDIuc3R5bGUuY3NzVGV4dCA9IHRyYW5zZm9ybUNTUztcbiAgICBcbiAgICB2YXIgdHJhbnNpdGlvbkVuZCA9IF93aGljaFRyYW5zaXRpb25FdmVudCgpO1xuICAgICBlbDIuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCBlbmRBbmltYXRpb24sIGZhbHNlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbmRBbmltYXRpb24oKSB7XG4gICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFmdGVyTW92ZSA9PSAnZnVuY3Rpb24nKSBzZXR0aW5ncy5hZnRlck1vdmUoaW5kZXgsIG5leHRfZWwpO1xuICAgICAgZWwyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgZW5kQW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFJlc3BvbnNpdmUgRmFsbGJhY2sgdHJpZ2dlciAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF9yZXNwb25zaXZlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHNldHRpbmdzLnJlc3BvbnNpdmVGYWxsYmFjaykge1xuXHRcdFx0XG5cdFx0XHRfYWRkQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuXHRcdFx0X3N3aXBlRXZlbnRzKGVsKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzd2lwZURvd25cIik7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3dpcGVVcFwiKTtcblx0XHRcdFxuXHRcdH0gZWxzZSB7XG5cdFx0ICBcblx0XHQgIGlmIChfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkge1xuXHRcdCAgICBfcmVtb3ZlQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKTtcblx0XHQgICAgX3Njcm9sbFRvKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgMCwgMjAwMCk7XG5cdCAgICB9XG4gICAgICBcbiAgICAgIFxuXG5cdFx0XHRfc3dpcGVFdmVudHMoZWwpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlRG93blwiLCAgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0ICBpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRtb3ZlVXAoZWwpO1xuXHRcdFx0fSk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3dpcGVVcFwiLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdGlmICghX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG1vdmVEb3duKGVsKTtcblx0XHRcdH0pO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcbiAgXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcblx0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEluaXRpYWxpemUgc2Nyb2xsIGRldGVjdGlvbiAgICAgICAgICAgICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIF9pbml0X3Njcm9sbCA9IGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSkge1xuXHRcdHZhciBkZWx0YU9mSW50ZXJlc3QgPSBkZWx0YSxcblx0XHRcdHRpbWVOb3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFxuXHRcdC8vIENhbmNlbCBzY3JvbGwgaWYgY3VycmVudGx5IGFuaW1hdGluZyBvciB3aXRoaW4gcXVpZXQgcGVyaW9kXG5cdFx0aWYodGltZU5vdyAtIGxhc3RBbmltYXRpb24gPCBxdWlldFBlcmlvZCArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGRlbHRhT2ZJbnRlcmVzdCA8IDApIHtcblx0XHRcdG1vdmVEb3duKGVsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtb3ZlVXAoZWwpXG5cdFx0fVxuXHRcdFxuXHRcdGxhc3RBbmltYXRpb24gPSB0aW1lTm93O1xuXHR9XG4gICBcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBQdWJsaWMgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIGRvd24gc2VjdGlvbiAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgIHRoaXMubW92ZURvd24gPSBmdW5jdGlvbihlbDMpIHtcbiAgICBcbiAgICBpZiAodHlwZW9mIGVsMyA9PSBcInN0cmluZ1wiKSBlbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsMyk7XG4gICAgXG4gICAgdmFyIGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICtcIi5hY3RpdmVcIikuZGF0YXNldC5pbmRleCxcblx0XHQgICAgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLFxuXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFyc2VJbnQoaW5kZXgpICsgMSkgKyBcIiddXCIpO1xuXHRcdCAgICBcblx0XHQgICAgXG5cdFx0aWYoIW5leHQpIHtcblx0XHRcdGlmIChzZXR0aW5ncy5sb29wID09IHRydWUpIHtcblx0XHRcdFx0cG9zID0gMDtcblx0XHRcdFx0bmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9JzEnXVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXG5cdFx0fWVsc2Uge1xuXHRcdFx0cG9zID0gKGluZGV4ICogMTAwKSAqIC0xO1xuXHRcdH1cblx0XHR2YXIgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcblx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIik7XG5cdFx0X2FkZENsYXNzKG5leHQsIFwiYWN0aXZlXCIpO1xuXHRcdFxuXHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuXHRcdCAgX3JlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHQgIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIG5leHRfaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblx0XHR9XG5cblx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuXHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgbmV4dF9pbmRleCk7XG5cblx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgc2V0dGluZ3MudXBkYXRlVVJMID09IHRydWUpIHtcblx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKHBhcnNlSW50KGluZGV4KSArIDEpO1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZiApO1xuXHRcdH1cblx0XHRfdHJhbnNmb3JtUGFnZShlbDMsIHNldHRpbmdzLCBwb3MsIG5leHRfaW5kZXgsIG5leHQpO1xuXHR9XG5cdFxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIHVwIHNlY3Rpb24gICAgKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHRcblx0dGhpcy5tb3ZlVXAgPSBmdW5jdGlvbihlbDQpIHtcblx0ICBcblx0ICBpZiAodHlwZW9mIGVsNCA9PSBcInN0cmluZ1wiKSBlbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsNCk7XG5cdCAgXG5cdCAgdmFyIGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICtcIi5hY3RpdmVcIikuZGF0YXNldC5pbmRleCxcblx0XHQgICAgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5kZXggKyBcIiddXCIpLFxuXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFyc2VJbnQoaW5kZXgpIC0gMSkgKyBcIiddXCIpO1xuXG5cdFx0aWYoIW5leHQpIHtcblx0XHRcdGlmIChzZXR0aW5ncy5sb29wID09IHRydWUpIHtcblx0XHRcdFx0cG9zID0gKCh0b3RhbCAtIDEpICogMTAwKSAqIC0xO1xuXHRcdFx0XHRuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyB0b3RhbCArIFwiJ11cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHR9ZWxzZSB7XG5cdFx0XHRwb3MgPSAoKG5leHQuZGF0YXNldC5pbmRleCAtIDEpICogMTAwKSAqIC0xO1xuXHRcdH1cblx0XHR2YXIgbmV4dF9pbmRleCA9IG5leHQuZGF0YXNldC5pbmRleDtcblx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIilcblx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIilcblx0XHRcblx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIHtcblx0XHQgIF9yZW1vdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0ICBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBuZXh0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0fVxuXHRcdGJvZHkuY2xhc3NOYW1lID0gYm9keS5jbGFzc05hbWUucmVwbGFjZSgvXFxidmlld2luZy1wYWdlLVxcZC4qP1xcYi9nLCAnJyk7XG5cdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBuZXh0X2luZGV4KTtcblxuXHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJykpICsgXCIjXCIgKyAocGFyc2VJbnQoaW5kZXgpIC0gMSk7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG5cdFx0fVxuXHRcdF90cmFuc2Zvcm1QYWdlKGVsNCwgc2V0dGluZ3MsIHBvcywgbmV4dF9pbmRleCwgbmV4dCk7XG5cdH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBGdW5jdGlvbiB0byBtb3ZlIHRvIHNwZWNpZmllZCBzZWN0aW9uICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICB0aGlzLm1vdmVUbyA9IGZ1bmN0aW9uKGVsNSwgcGFnZV9pbmRleCkge1xuICAgIFxuICAgIGlmICh0eXBlb2YgZWw1ID09IFwic3RyaW5nXCIpIGVsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWw1KTtcbiAgICBcblx0XHR2YXIgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiLmFjdGl2ZVwiKSxcblx0XHQgICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgKHBhZ2VfaW5kZXgpICsgXCInXVwiKTtcblx0XHQgICAgXG5cdFx0aWYobmV4dCkge1xuXHRcdCAgdmFyIG5leHRfaW5kZXggPSBuZXh0LmRhdGFzZXQuaW5kZXg7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoY3VycmVudCwgXCJhY3RpdmVcIik7XG5cdFx0XHRfYWRkQ2xhc3MobmV4dCwgXCJhY3RpdmVcIik7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCIuYWN0aXZlXCIpLCBcImFjdGl2ZVwiKTtcblx0XHRcdF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIChwYWdlX2luZGV4KSArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXG5cdFx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuXHRcdFx0X2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLVwiKyBuZXh0X2luZGV4KTtcblxuXHRcdFx0cG9zID0gKChwYWdlX2luZGV4IC0gMSkgKiAxMDApICogLTE7XG5cblx0XHRcdGlmIChoaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiBzZXR0aW5ncy51cGRhdGVVUkwgPT0gdHJ1ZSkge1xuXHRcdFx0XHR2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKSkgKyBcIiNcIiArIChwYXJzZUludChwYWdlX2luZGV4KSAtIDEpO1xuXHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG5cdFx0XHR9XG5cdFx0XHRfdHJhbnNmb3JtUGFnZShlbDUsIHNldHRpbmdzLCBwb3MsIHBhZ2VfaW5kZXgsIG5leHQpO1xuXHRcdH1cblx0fVxuXHRcbiAgdGhpcy5pbml0KCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAvKiAgVWxpdGlsaXRpZXMgTWV0aG9kICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIFxuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIC8qICBGdW5jdGlvbiBieSBKb2huIFJlc2lnIHRvIHJlcGxpY2F0ZSBleHRlbmQgZnVuY3Rpb25hbGl0eSAqL1xuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuIFxuIE9iamVjdC5leHRlbmQgPSBmdW5jdGlvbihvcmlnKXtcbiAgIGlmICggb3JpZyA9PSBudWxsIClcbiAgICAgcmV0dXJuIG9yaWc7XG4gXG4gICBmb3IgKCB2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgIGlmICggb2JqICE9IG51bGwgKSB7XG4gICAgICAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgICAgICAgdmFyIGdldHRlciA9IG9iai5fX2xvb2t1cEdldHRlcl9fKCBwcm9wICksXG4gICAgICAgICAgICAgc2V0dGVyID0gb2JqLl9fbG9va3VwU2V0dGVyX18oIHByb3AgKTtcbiBcbiAgICAgICAgIGlmICggZ2V0dGVyIHx8IHNldHRlciApIHtcbiAgICAgICAgICAgaWYgKCBnZXR0ZXIgKVxuICAgICAgICAgICAgIG9yaWcuX19kZWZpbmVHZXR0ZXJfXyggcHJvcCwgZ2V0dGVyICk7XG4gICAgICAgICAgIGlmICggc2V0dGVyIClcbiAgICAgICAgICAgICBvcmlnLl9fZGVmaW5lU2V0dGVyX18oIHByb3AsIHNldHRlciApO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgb3JpZ1sgcHJvcCBdID0gb2JqWyBwcm9wIF07XG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICB9XG4gICB9XG4gXG4gICByZXR1cm4gb3JpZztcbiB9O1xuXHRcblxuXG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbmV4cG9ydHNbXCJvbmVQYWdlU2Nyb2xsXCJdID0gKG9uZVBhZ2VTY3JvbGwpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2VzY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=