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
exports.push([module.i, "\n:root {\n    --main-text-colour: white;\n    --heading-colour: #c7c7ff;\n    --link-colour: #00abff;\n}\n\nbody {\n    font-family: sans-serif;\n    font-size: 16px;\n    line-height: 22px;\n    color: var(--main-text-colour);\n    padding-top: 10px;\n}\n\na,\na:visited {\n    text-decoration: none;\n    color: var(--link-colour);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.background-container {\n    position: fixed;\n    left: -100%;\n    top: -100%;\n    right: -100%;\n    bottom: -100%;\n    display: flex;\n    z-index: -1;\n    perspective: 150px;\n    perspective-origin: 50% 50%;\n    transform-style: preserve-3d;\n}\n\n.background {\n    width: 100%;\n    background-color: #111111;\n    background-image: url(" + escape(__webpack_require__(10)) + ");\n    animation: 120s background-move linear infinite;\n}\n\n@keyframes background-move {\n    0%   { transform: scale(2) rotateZ(0); }\n    100% { transform: scale(2) rotateZ(360deg); }\n}\n\n.main-container {\n    overflow: hidden;\n    width: 320px;\n    height: 320px;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.main-container:before {\n    content: '';\n    position: absolute;\n    width: 320px;\n    height: 320px;\n    border-radius: 50%;\n    box-shadow: 0 0 140px 40px white;\n    animation: glow alternate infinite 8s ease-in-out;\n}\n\n@keyframes glow {\n    0%   { opacity: 0; }\n    70%  { opacity: 0.3; }\n    100% { opacity: 1;   }\n}\n\n.main-banner {\n    text-align: center;\n    background-color: rgba(128, 128, 128, 0.3);\n    padding: 20px 50px;\n}\n\n.heading {\n    font-size: 40px;\n    line-height: 40px;\n    color: var(--heading-colour);\n}\n\n.sub-heading {\n    margin-top: 10px;\n    font-size: 20px;\n    line-height: 20px;\n}\n\n.instructions-container {\n    font-size: 20px;\n    font-weight: 100;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.instructions {\n    margin-top: 20px;\n}\n\n.chevron {\n    margin: 0 auto;\n    display: block;\n    animation: pulse 2s infinite;\n    color: var(--heading-colour);\n}\n\n.chevron:before {\n    top: 0;\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 20px;\n    position: relative;\n    transform: rotate(135deg);\n    vertical-align: top;\n    width: 20px;\n}\n\n@keyframes pulse {\n    0%   { transform: translate(0, 0); }\n    50%  { transform: translate(0, 10px); }\n    100% { transform: translate(0, 0); }\n}\n\n.project-container {\n    display: flex;\n    padding: 20px;\n    background-color: rgba(128, 128, 128, 0.3);\n    max-width: 1000px;\n    opacity: 0.5;\n    transform: scale(0.8);\n    transition: all 1000ms;\n}\n\n@media(max-width: 800px) {\n    .project-container {\n        flex-direction: column-reverse;\n    }\n\n    .project-container .project-screenshot {\n        flex: 0 0 300px;\n    }\n}\n\n.scroll-step {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.scroll-step.active .project-container {\n    opacity: 1;\n    transform: scale(1);\n}\n\n.project-screenshot {\n    flex: 0 0 400px;\n    background-color: rgba(22, 22, 22, 0.1);\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 400px;\n    height: 300px;\n    margin-right: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 300ms ease;\n    opacity: 0.8;\n}\n\n.scroll-step.active .project-screenshot {\n    opacity: 1;\n}\n\n.screenshot--togglefish {\n    background-image: url(" + escape(__webpack_require__(11)) + ");\n}\n\n.scroll-step.active .screenshot--togglefish {\n    background-image: url(" + escape(__webpack_require__(1)) + ");\n}\n\n/* preload togglefish-screencast.gif used on hover*/\n.screenshot--togglefish:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(1)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--make-em-green {\n    background-image: url(" + escape(__webpack_require__(12)) + ");\n}\n\n.scroll-step.active .screenshot--make-em-green {\n    background-image: url(" + escape(__webpack_require__(2)) + ");\n}\n\n/* preload make-em-green-screencast.gif used on hover*/\n.screenshot--make-em-green:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(2)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--bf-viz {\n    background-image: url(" + escape(__webpack_require__(13)) + ");\n}\n\n.scroll-step.active .screenshot--bf-viz {\n    background-image: url(" + escape(__webpack_require__(3)) + ");\n}\n\n/* preload bf-viz-screencast.gif used on hover*/\n.screenshot--bf-viz:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(3)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.screenshot--crafty-racer {\n    background-image: url(" + escape(__webpack_require__(14)) + ");\n}\n\n.scroll-step.active .screenshot--crafty-racer {\n    background-image: url(" + escape(__webpack_require__(4)) + ");\n}\n\n/* preload crafty-racer-screencast.gif used on hover*/\n.screenshot--crafty-racer:before {\n    content: '';\n    background-image: url(" + escape(__webpack_require__(4)) + ");\n    width: 0;\n    height: 0;\n    visibility: hidden;\n}\n\n.project-details {\n    flex: 1;\n}\n\n.project-details-header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 16px;\n}\n\n.project-title {\n    display: inline-block;\n    font-size: 32px;\n    line-height: 32px;\n    color: var(--heading-colour);\n}\n\n.project-link {\n    width: 34px;\n    height: 34px;\n    background-image: url(" + escape(__webpack_require__(15)) + ");\n    background-repeat: no-repeat;\n    background-size: 50px 50px;\n    background-position-x: -8px;\n    background-position-y: -8px;\n}\n\n.project-details-item {\n    margin-bottom: 10px\n}\n\n.project-details-item-label {\n    display: inline-block;\n    font-weight: 800;\n}\n\n.project-details-item-content {\n    display: inline-block;\n    margin-top: 5px;\n}\n\n.warning-message {\n    color: var(--main-text-colour);\n    background: rgba(167, 15, 15, 0.8);\n    padding: 4px 6px;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNmM2JjZjJiNWU2ZjYzMmViMDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC5naWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz8yOTgzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaGV4YWdvbnMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LWZyYW1lLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC1mcmFtZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9leHRlcm5hbC1saW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3M/ZjVmZCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7O0FDM0VBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyRUFBMkUsZ0dBQWdHLGlEQUFpRCwwRkFBMEYsZ0RBQWdELHdGQUF3Riw0Q0FBNEMsZ0ZBQWdGOztBQUUxakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzZjNiY2YyYjVlNmY2MzJlYjA1IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2VjN2QzOGNhZWRlNDFhY2RhNmJkMmM3MTBlYjM5MjguZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3RvZ2dsZWZpc2gtc2NyZWVuY2FzdC5naWZcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTA5M2VlMzA5NGNmMjhhZGJlZDQwMDZkZjRmZDgwZWQuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWZcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmE2Y2Q2YThiNmQ1YWM2YTAzMjQ3ODlhM2I0MWE1ZWIuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2JmLXZpei1zY3JlZW5jYXN0LmdpZlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NmQ4ZTcwZmViNTM0ZmM5MmY2MWEzZWQ1MzAzZTMyZC5naWZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvY3JhZnR5LXJhY2VyLXNjcmVlbmNhc3QuZ2lmXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlLXNjcm9sbC5jc3MnO1xuaW1wb3J0IHsgb25lUGFnZVNjcm9sbCB9IGZyb20gJy4vbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZXNjcm9sbC5qcyc7XG5cblxub25lUGFnZVNjcm9sbChcIi5tYWluXCIsIHtcbiAgc2VjdGlvbkNvbnRhaW5lcjogXCIuc2Nyb2xsLXN0ZXBcIiwvLyBzZWN0aW9uQ29udGFpbmVyIGFjY2VwdHMgYW55IGtpbmQgb2Ygc2VsZWN0b3IgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byB1c2Ugc2VjdGlvblxuICBlYXNpbmc6IFwiZWFzZVwiLCAgICAgICAgICAgICAgICAgIC8vIEVhc2luZyBvcHRpb25zIGFjY2VwdHMgdGhlIENTUzMgZWFzaW5nIGFuaW1hdGlvbiBzdWNoIFwiZWFzZVwiLCBcImxpbmVhclwiLCBcImVhc2UtaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJlYXNlLW91dFwiLCBcImVhc2UtaW4tb3V0XCIsIG9yIGV2ZW4gY3ViaWMgYmV6aWVyIHZhbHVlIHN1Y2ggYXMgXCJjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjQyMCwgMS4zMTApXCJcbiAgYW5pbWF0aW9uVGltZTogNjAwLCAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uVGltZSBsZXQgeW91IGRlZmluZSBob3cgbG9uZyBlYWNoIHNlY3Rpb24gdGFrZXMgdG8gYW5pbWF0ZVxuICBwYWdpbmF0aW9uOiBmYWxzZSwgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGVpdGhlciBzaG93IG9yIGhpZGUgdGhlIHBhZ2luYXRpb24uIFRvZ2dsZSB0cnVlIGZvciBzaG93LCBmYWxzZSBmb3IgaGlkZS5cbiAgdXBkYXRlVVJMOiBmYWxzZSwgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoaXMgdHJ1ZSBpZiB5b3Ugd2FudCB0aGUgVVJMIHRvIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIHNjcm9sbCB0byBlYWNoIHBhZ2UuXG4gIC8vIGJlZm9yZU1vdmU6IGhhbmRsZVN0ZXBFeGl0LCAgICAgIC8vIFRoaXMgb3B0aW9uIGFjY2VwdHMgYSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgcGFnZSBtb3Zlcy5cbiAgLy8gYWZ0ZXJNb3ZlOiBoYW5kbGVTdGVwRW50ZXIsICAgICAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgbW92ZXMuXG4gIGxvb3A6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gaGF2ZSB0aGUgcGFnZSBsb29wIGJhY2sgdG8gdGhlIHRvcC9ib3R0b20gd2hlbiB0aGUgdXNlciBuYXZpZ2F0ZXMgYXQgdXAvZG93biBvbiB0aGUgZmlyc3QvbGFzdCBwYWdlLlxuICBrZXlib2FyZDogdHJ1ZSwgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGFjdGl2YXRlIHRoZSBrZXlib2FyZCBjb250cm9sc1xuICByZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlICAgICAgICAvLyBZb3UgY2FuIGZhbGxiYWNrIHRvIG5vcm1hbCBwYWdlIHNjcm9sbCBieSBkZWZpbmluZyB0aGUgd2lkdGggb2YgdGhlIGJyb3dzZXIgaW4gd2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geW91IHdhbnQgdGhlIHJlc3BvbnNpdmUgZmFsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkLiBGb3IgZXhhbXBsZSwgc2V0IHRoaXMgdG8gNjAwIGFuZCB3aGVuZXZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYnJvd3NlcidzIHdpZHRoIGlzIGxlc3MgdGhhbiA2MDAsIHRoZSBmYWxsYmFjayB3aWxsIGtpY2sgaW4uXG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG46cm9vdCB7XFxuICAgIC0tbWFpbi10ZXh0LWNvbG91cjogd2hpdGU7XFxuICAgIC0taGVhZGluZy1jb2xvdXI6ICNjN2M3ZmY7XFxuICAgIC0tbGluay1jb2xvdXI6ICMwMGFiZmY7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvdXIpO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG91cik7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbiAgICBib3R0b206IC0xMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcGVyc3BlY3RpdmU6IDE1MHB4O1xcbiAgICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvaGV4YWdvbnMuc3ZnXCIpKSArIFwiKTtcXG4gICAgYW5pbWF0aW9uOiAxMjBzIGJhY2tncm91bmQtbW92ZSBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmFja2dyb3VuZC1tb3ZlIHtcXG4gICAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlWigwKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGVaKDM2MGRlZyk7IH1cXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNDBweCA0MHB4IHdoaXRlO1xcbiAgICBhbmltYXRpb246IGdsb3cgYWx0ZXJuYXRlIGluZmluaXRlIDhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3cge1xcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxcbiAgICA3MCUgIHsgb3BhY2l0eTogMC4zOyB9XFxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyAgIH1cXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvdXIpO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmNoZXZyb24ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG91cik7XFxufVxcblxcbi5jaGV2cm9uOmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxuICAgIDUwJSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXM7XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LXNjcmVlbnNob3Qge1xcbiAgICAgICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICB9XFxufVxcblxcbi5zY3JvbGwtc3RlcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2Nyb2xsLXN0ZXAuYWN0aXZlIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcm9qZWN0LXNjcmVlbnNob3Qge1xcbiAgICBmbGV4OiAwIDAgNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyLCAyMiwgMC4xKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uc2Nyb2xsLXN0ZXAuYWN0aXZlIC5wcm9qZWN0LXNjcmVlbnNob3Qge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NyZWVuc2hvdC0tdG9nZ2xlZmlzaCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LWZyYW1lLmdpZlwiKSkgKyBcIik7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnNjcmVlbnNob3QtLXRvZ2dsZWZpc2gge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL3RvZ2dsZWZpc2gtc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbn1cXG5cXG4vKiBwcmVsb2FkIHRvZ2dsZWZpc2gtc2NyZWVuY2FzdC5naWYgdXNlZCBvbiBob3ZlciovXFxuLnNjcmVlbnNob3QtLXRvZ2dsZWZpc2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvdG9nZ2xlZmlzaC1zY3JlZW5jYXN0LmdpZlwiKSkgKyBcIik7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcmVlbnNob3QtLW1ha2UtZW0tZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC1mcmFtZS5naWZcIikpICsgXCIpO1xcbn1cXG5cXG4uc2Nyb2xsLXN0ZXAuYWN0aXZlIC5zY3JlZW5zaG90LS1tYWtlLWVtLWdyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9tYWtlLWVtLWdyZWVuLXNjcmVlbmNhc3QuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLyogcHJlbG9hZCBtYWtlLWVtLWdyZWVuLXNjcmVlbmNhc3QuZ2lmIHVzZWQgb24gaG92ZXIqL1xcbi5zY3JlZW5zaG90LS1tYWtlLWVtLWdyZWVuOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL21ha2UtZW0tZ3JlZW4tc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JlZW5zaG90LS1iZi12aXoge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2JmLXZpei1zY3JlZW5jYXN0LWZyYW1lLmdpZlwiKSkgKyBcIik7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnNjcmVlbnNob3QtLWJmLXZpeiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvYmYtdml6LXNjcmVlbmNhc3QuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLyogcHJlbG9hZCBiZi12aXotc2NyZWVuY2FzdC5naWYgdXNlZCBvbiBob3ZlciovXFxuLnNjcmVlbnNob3QtLWJmLXZpejpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9iZi12aXotc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JlZW5zaG90LS1jcmFmdHktcmFjZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2NyYWZ0eS1yYWNlci1zY3JlZW5jYXN0LWZyYW1lLmdpZlwiKSkgKyBcIik7XFxufVxcblxcbi5zY3JvbGwtc3RlcC5hY3RpdmUgLnNjcmVlbnNob3QtLWNyYWZ0eS1yYWNlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9hc3NldHMvY3JhZnR5LXJhY2VyLXNjcmVlbmNhc3QuZ2lmXCIpKSArIFwiKTtcXG59XFxuXFxuLyogcHJlbG9hZCBjcmFmdHktcmFjZXItc2NyZWVuY2FzdC5naWYgdXNlZCBvbiBob3ZlciovXFxuLnNjcmVlbnNob3QtLWNyYWZ0eS1yYWNlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9jcmFmdHktcmFjZXItc2NyZWVuY2FzdC5naWZcIikpICsgXCIpO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG91cik7XFxufVxcblxcbi5wcm9qZWN0LWxpbmsge1xcbiAgICB3aWR0aDogMzRweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2V4dGVybmFsLWxpbmsuc3ZnXCIpKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLThweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzLWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMtaXRlbS1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscy1pdGVtLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLndhcm5pbmctbWVzc2FnZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3VyKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDE1LCAxNSwgMC44KTtcXG4gICAgcGFkZGluZzogNHB4IDZweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1NTAxMjVlNjM1MDhjYmU1YmRmODY2MTg5ZWI0ZDY3LnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9oZXhhZ29ucy5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmNTdjYzM3MmRjODEzNGZkY2RhNDVmOTVjNGExNzlmLmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy90b2dnbGVmaXNoLXNjcmVlbmNhc3QtZnJhbWUuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMjk3ZjFmYTU3NDhjMmU3YjhlYWNkNmIxMzUzMzM2ZS5naWZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvbWFrZS1lbS1ncmVlbi1zY3JlZW5jYXN0LWZyYW1lLmdpZlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E4NGIzYjYxMGE1NmIzZWZjMjRlYmNmNzRlMGZlZWIuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2JmLXZpei1zY3JlZW5jYXN0LWZyYW1lLmdpZlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzQ1ZTM3NTkzYTkwOWM5Y2Q4OTk1YjVlYTUwYjRkYzkuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2NyYWZ0eS1yYWNlci1zY3JlZW5jYXN0LWZyYW1lLmdpZlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzk1MTZlNjMyZmQ2ZTU4OTQ0NGUwYWM4NWZlYTViZTkuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2V4dGVybmFsLWxpbmsuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb25lcGFnZS1zY3JvbGwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL29uZXBhZ2Utc2Nyb2xsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb25lcGFnZS1zY3JvbGwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGlicy9wdXJlanMtb25lcGFnZS1zY3JvbGwvb25lcGFnZS1zY3JvbGwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XFxufVxcblxcbmJvZHksIC5vbmVwYWdlLXdyYXBwZXIsIGh0bWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ub25lcGFnZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4ub25lcGFnZS13cmFwcGVyIC5vcHMtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9uZXBhZ2UtcGFnaW5hdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ub25lcGFnZS1wYWdpbmF0aW9uIGxpIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYXtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIFxcbn1cXG4ub25lcGFnZS1wYWdpbmF0aW9uIGxpIGE6YmVmb3Jle1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuODUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhLmFjdGl2ZTpiZWZvcmV7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxuICBsZWZ0OiA4cHg7XFxufVxcblxcbi5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCwgLmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsIC53cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwgLm9uZXBhZ2Utd3JhcHBlciAub3BzLXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuLmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsIC5vbmVwYWdlLXdyYXBwZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tcy10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAub25lcGFnZS1wYWdpbmF0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkuZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwsIC5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAub25lcGFnZS13cmFwcGVyLCBodG1sIHtcXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2xpYnMvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsL29uZXBhZ2Utc2Nyb2xsLmNzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIG9uZXBhZ2VzY3JvbGwuanMgdjEuMi4yXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTQgUGV0ZSBSb2p3b25nc3VyaXlhLlxuICogaHR0cDovL3d3dy50aGVwZXRlZGVzaWduLmNvbVxuICpcbiAqIENyZWF0ZSBhbiBBcHBsZS1saWtlIHdlYnNpdGUgdGhhdCBsZXQgdXNlciBzY3JvbGxcbiAqIG9uZSBwYWdlIGF0IGEgdGltZVxuICpcbiAqIENyZWRpdDogRWlrZSBTZW5kIGZvciB0aGUgYXdlc29tZSBzd2lwZSBldmVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL3BlYWNoYW5hbnIvcHVyZWpzLW9uZXBhZ2Utc2Nyb2xsXG4gKiBcbiAqIExpY2Vuc2U6IEdQTCB2M1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0XG5mdW5jdGlvbiBvbmVQYWdlU2Nyb2xsKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgXG4gIHZhciBkZWZhdWx0cyA9IHtcblx0ICAgIFx0c2VjdGlvbkNvbnRhaW5lcjogXCJzZWN0aW9uXCIsXG5cdCAgICBcdGVhc2luZzogXCJlYXNlXCIsXG5cdCAgICBcdGFuaW1hdGlvblRpbWU6IDEwMDAsXG5cdCAgICBcdHBhZ2luYXRpb246IHRydWUsXG5cdCAgICBcdHVwZGF0ZVVSTDogZmFsc2UsXG5cdCAgICBcdGtleWJvYXJkOiB0cnVlLFxuXHQgICAgXHRiZWZvcmVNb3ZlOiBudWxsLFxuXHQgICAgXHRhZnRlck1vdmU6IG51bGwsXG5cdCAgICBcdGxvb3A6IGZhbHNlLFxuXHQgICAgXHRyZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlXG5cdCAgICB9LFxuXHQgICAgX3Jvb3QgPSB0aGlzLFxuXHQgICAgc2V0dGluZ3MgPSBPYmplY3QuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyksXG5cdCAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCksXG5cdCAgICBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciksXG5cdCAgICB0b3RhbCA9IHNlY3Rpb25zLmxlbmd0aCxcblx0ICAgIHN0YXR1cyA9IFwib2ZmXCIsXG5cdCAgICB0b3BQb3MgPSAwLFxuXHQgICAgbGFzdEFuaW1hdGlvbiA9IDAsXG5cdCAgICBxdWlldFBlcmlvZCA9IDUwMCxcblx0ICAgIHBhZ2luYXRpb25MaXN0ID0gXCJcIixcblx0ICAgIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkgeyBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qICBQcmVwYXJlIEV2ZXJ5dGhpbmcgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBcbiAgXHRfYWRkQ2xhc3MoZWwsIFwib25lcGFnZS13cmFwcGVyXCIpXG4gIFx0ZWwuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgXG4gIFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gIFx0ICBfYWRkQ2xhc3Moc2VjdGlvbnNbaV0sIFwib3BzLXNlY3Rpb25cIilcbiAgXHQgIHNlY3Rpb25zW2ldLmRhdGFzZXQuaW5kZXggPSBpICsgMTtcbiAgXHQgIHRvcFBvcyA9IHRvcFBvcyArIDEwMDtcbiAgICBcbiAgXHQgIGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkge1xuICBcdFx0XHRwYWdpbmF0aW9uTGlzdCArPSBcIjxsaT48YSBkYXRhLWluZGV4PSdcIiArIChpICsgMSkgKyBcIicgaHJlZj0nI1wiICsgKGkgKyAxKSArIFwiJz48L2E+PC9saT5cIjtcbiAgXHRcdH1cbiAgICB9XG4gICAgXG4gIFx0X3N3aXBlRXZlbnRzKGVsKTtcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3dpcGVEb3duXCIsICBmdW5jdGlvbihldmVudCl7XG4gIFx0ICBpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdFx0bW92ZVVwKGVsKTtcbiAgXHR9KTtcbiAgXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3dpcGVVcFwiLCBmdW5jdGlvbihldmVudCl7XG4gIFx0XHRpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdFx0bW92ZURvd24oZWwpO1xuICBcdH0pO1xuICAgIFxuICBcdC8vIENyZWF0ZSBQYWdpbmF0aW9uIGFuZCBEaXNwbGF5IFRoZW1cbiAgICBcbiAgXHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIHtcbiAgXHQgIHZhciBwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBcdCAgcGFnaW5hdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9uZXBhZ2UtcGFnaW5hdGlvblwiKTtcbiAgICBcbiAgXHQgIGJvZHkuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbilcbiAgXHRcdHBhZ2luYXRpb24uaW5uZXJIVE1MID0gcGFnaW5hdGlvbkxpc3Q7XG4gIFx0XHR2YXIgcG9zVG9wID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uXCIpLm9mZnNldEhlaWdodCAvIDIpICogLTE7XG4gIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvblwiKS5zdHlsZS5tYXJnaW5Ub3AgPSBwb3NUb3A7XG4gIFx0fVxuICAgIFxuICBcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCIjMVwiKSB7XG4gIFx0XHR2YXIgaW5pdF9pbmRleCA9ICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSxcbiAgXHRcdCAgICBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zZWN0aW9uQ29udGFpbmVyICsgXCJbZGF0YS1pbmRleD0nXCIgKyAoaW5pdF9pbmRleCkgKyBcIiddXCIpLFxuICBcdFx0ICAgIG5leHRfaW5kZXggPSBuZXh0LmRhdGFzZXQuaW5kZXg7XG4gICAgXG4gIFx0XHRfYWRkQ2xhc3MoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5pdF9pbmRleCArIFwiJ11cIikgLFwiYWN0aXZlXCIpXG4gIFx0XHRfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtXCIrIGluaXRfaW5kZXgpXG4gIFx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluaXRfaW5kZXggKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcbiAgICBcbiAgXHRcdGlmKG5leHQpIHtcbiAgXHRcdFx0X2FkZENsYXNzKG5leHQsIFwiYWN0aXZlXCIpXG4gIFx0XHRcdGlmKHNldHRpbmdzLnBhZ2luYXRpb24gPT0gdHJ1ZSkgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgaW5pdF9pbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuICAgIFxuICBcdFx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuICBcdFx0XHRfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtXCIgKyBuZXh0X2luZGV4KVxuICBcdFx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgc2V0dGluZ3MudXBkYXRlVVJMID09IHRydWUpIHtcbiAgXHRcdFx0XHR2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKSkgKyBcIiNcIiArIChpbml0X2luZGV4KTtcbiAgXHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgge30sIGRvY3VtZW50LnRpdGxlLCBocmVmICk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdHZhciBwb3MgPSAoKGluaXRfaW5kZXggLSAxKSAqIDEwMCkgKiAtMTtcbiAgXHRcdF90cmFuc2Zvcm1QYWdlKGVsLCBzZXR0aW5ncywgcG9zLCBpbml0X2luZGV4KTtcbiAgICBcbiAgXHR9ZWxzZXtcbiAgXHQgIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PScxJ11cIiksIFwiYWN0aXZlXCIpO1xuICBcdCAgX2FkZENsYXNzKGJvZHksIFwidmlld2luZy1wYWdlLTFcIik7XG4gIFx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIF9hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhW2RhdGEtaW5kZXg9JzEnXVwiKSwgXCJhY3RpdmVcIik7XG4gIFx0fVxuICAgIFxuICBcdF9wYWdpbmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhZ2VfaW5kZXggPSB0aGlzLmRhdGFzZXQuaW5kZXg7XG4gIFx0XHRtb3ZlVG8oZWwsIHBhZ2VfaW5kZXgpO1xuICBcdH1cbiAgICBcbiAgICBcbiAgXHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpICB7XG4gIFx0ICB2YXIgcGFnaW5hdGlvbl9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIik7XG4gICAgXG4gIFx0ICBmb3IoIHZhciBpID0gMDsgaSA8IHBhZ2luYXRpb25fbGlua3MubGVuZ3RoOyBpKyspe1xuICAgIFx0ICBwYWdpbmF0aW9uX2xpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3BhZ2luYXRpb25IYW5kbGVyKTtcbiAgICAgIH1cbiAgXHR9XG4gICAgXG4gIFx0X21vdXNlV2hlZWxIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHR2YXIgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWw7XG4gIFx0XHRpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBfaW5pdF9zY3JvbGwoZXZlbnQsIGRlbHRhKTtcbiAgXHR9XG4gICAgXG4gIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG4gIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfbW91c2VXaGVlbEhhbmRsZXIpO1xuICAgIFxuICAgIFxuICBcdGlmKHNldHRpbmdzLnJlc3BvbnNpdmVGYWxsYmFjayAhPSBmYWxzZSkge1xuICBcdCAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKXtcbiAgXHRcdFx0X3Jlc3BvbnNpdmUoKTtcbiAgXHRcdH1cbiAgICBcbiAgXHRcdF9yZXNwb25zaXZlKCk7XG4gIFx0fVxuICAgIFxuICAgIF9rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgXHRcdHZhciB0YWcgPSBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gIFx0XHRpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSB7XG4gIFx0XHRcdHN3aXRjaChlLndoaWNoKSB7XG4gIFx0XHRcdFx0Y2FzZSAzODpcbiAgXHRcdFx0XHRcdGlmICh0YWcgIT0gJ2lucHV0JyAmJiB0YWcgIT0gJ3RleHRhcmVhJykgbW92ZVVwKGVsKVxuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSA0MDpcbiAgXHRcdFx0XHRcdGlmICh0YWcgIT0gJ2lucHV0JyAmJiB0YWcgIT0gJ3RleHRhcmVhJykgbW92ZURvd24oZWwpXG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRkZWZhdWx0OiByZXR1cm47XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdHJldHVybiBmYWxzZTtcbiAgXHR9XG4gICAgXG4gIFx0aWYoc2V0dGluZ3Mua2V5Ym9hcmQgPT0gdHJ1ZSkge1xuICBcdFx0ZG9jdW1lbnQub25rZXlkb3duID0gX2tleWRvd25IYW5kbGVyO1xuICBcdH1cbiAgXHRyZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBQcml2YXRlIEZ1bmN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIENyZWRpdDogRWlrZSBTZW5kIGZvciB0aGUgYXdlc29tZSBzd2lwZSBldmVudCAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIF9zd2lwZUV2ZW50cyA9IGZ1bmN0aW9uKGVsKXtcbiAgXHR2YXIgc3RhcnRYLFxuICBcdFx0c3RhcnRZO1xuICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaHN0YXJ0KTsgIFxuICBcbiAgXHRmdW5jdGlvbiB0b3VjaHN0YXJ0KGV2ZW50KSB7XG4gIFx0XHR2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG4gIFx0XHRpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICBcdFx0XHRzdGFydFggPSB0b3VjaGVzWzBdLnBhZ2VYO1xuICBcdFx0XHRzdGFydFkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xuICBcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNobW92ZSk7XG4gIFx0XHR9XG4gIFx0fVxuICBcbiAgXHRmdW5jdGlvbiB0b3VjaG1vdmUoZXZlbnQpIHtcbiAgXHRcdHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcbiAgXHRcdGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gIFx0XHQgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHRcdHZhciBkZWx0YVggPSBzdGFydFggLSB0b3VjaGVzWzBdLnBhZ2VYO1xuICBcdFx0XHR2YXIgZGVsdGFZID0gc3RhcnRZIC0gdG91Y2hlc1swXS5wYWdlWTtcbiAgXG4gIFx0XHRcdGlmIChkZWx0YVggPj0gNTApIHtcbiAgXHRcdFx0ICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3N3aXBlTGVmdCcpO1xuICBcdFx0XHQgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGlmIChkZWx0YVggPD0gLTUwKSB7XG4gIFx0XHRcdCAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzd2lwZVJpZ2h0Jyk7XG4gIFx0XHRcdCAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGRlbHRhWSA+PSA1MCkge1xuICBcdFx0XHQgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc3dpcGVVcCcpO1xuICBcdFx0XHQgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGlmIChkZWx0YVkgPD0gLTUwKSB7XG4gIFx0XHRcdCAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzd2lwZURvd24nKTtcbiAgXHRcdFx0ICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgXHRcdFx0fVxuICBcbiAgXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhWCkgPj0gNTAgfHwgTWF0aC5hYnMoZGVsdGFZKSA+PSA1MCkge1xuICBcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNobW92ZSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFxuICB9O1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0LyogIFV0aWxpdHkgdG8gYWRkL3JlbW92ZSBjbGFzcyBlYXNpbHkgd2l0aCBqYXZhc2NyaXB0ICAgICAgICovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIF90cmltID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHNcXHMqLywgJycpLnJlcGxhY2UoL1xcc1xccyokLywgJycpO1xuICB9XG5cbiAgX2hhc0NsYXNzID0gZnVuY3Rpb24oZWxlLGNscykge1xuICAgIGlmIChlbGUuY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWxlLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlLmNsYXNzTmFtZSA9IGNscztcbiAgICB9XG4gIH1cblxuICBfYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGUsY2xzKSB7XG4gICAgaWYgKCFfaGFzQ2xhc3MoZWxlLGNscykpIGVsZS5jbGFzc05hbWUgKz0gXCIgXCIrY2xzO1xuICAgIGVsZS5jbGFzc05hbWUgPSBfdHJpbShlbGUuY2xhc3NOYW1lKVxuICB9XG5cbiAgX3JlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlLGNscykge1xuICAgIGlmIChfaGFzQ2xhc3MoZWxlLGNscykpIHtcbiAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKTtcbiAgICAgICAgZWxlLmNsYXNzTmFtZT1lbGUuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCcgJyk7XG4gICAgfVxuICAgIGVsZS5jbGFzc05hbWUgPSBfdHJpbShlbGUuY2xhc3NOYW1lKVxuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdC8qICBUcmFuc3Rpb25lbmQgTm9ybWFsaXplciBieSBNb2Rlcm5penIgICAgICAgICAgICAgICAgICAgICAqL1xuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBfd2hpY2hUcmFuc2l0aW9uRXZlbnQgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0O1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbic6J3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfVxuXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgICAgICBpZiggZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdC8qICBGdW5jdGlvbiB0byBwZXJmb3JtIHNjcm9sbCB0byB0b3AgYW5pbWF0aW9uICAgICAgICAgICAgICAqL1xuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBfc2Nyb2xsVG8gPSBmdW5jdGlvbihlbGVtZW50LCB0bywgZHVyYXRpb24pIHtcbiAgICBpZiAoZHVyYXRpb24gPCAwKSByZXR1cm47XG4gICAgdmFyIGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHZhciBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09IHRvKSByZXR1cm47XG4gICAgICAgIF9zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gICAgfSwgMTApO1xuICB9XG4gIFxuICBcbiAgICAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEZ1bmN0aW9uIHRvIHRyYW5zZm9ybSB0aGUgcGFnZSAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICBfdHJhbnNmb3JtUGFnZSA9IGZ1bmN0aW9uKGVsMiwgc2V0dGluZ3MsIHBvcywgaW5kZXgsIG5leHRfZWwpIHtcbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLmJlZm9yZU1vdmUgPT0gJ2Z1bmN0aW9uJykgc2V0dGluZ3MuYmVmb3JlTW92ZShpbmRleCwgbmV4dF9lbCk7XG4gICAgXG4gICAgdmFyIHRyYW5zZm9ybUNTUyA9IFwiLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgcG9zICsgXCIlLCAwKTsgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBcIiArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUgKyBcIm1zIFwiICsgc2V0dGluZ3MuZWFzaW5nICsgXCI7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBcIiArIHBvcyArIFwiJSwgMCk7IC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gXCIgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lICsgXCJtcyBcIiArIHNldHRpbmdzLmVhc2luZyArIFwiOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBcIiArIHBvcyArIFwiJSwgMCk7IC1tcy10cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtIFwiICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltZSArIFwibXMgXCIgKyBzZXR0aW5ncy5lYXNpbmcgKyBcIjsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBcIiArIHBvcyArIFwiJSwgMCk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSBcIiArIHNldHRpbmdzLmFuaW1hdGlvblRpbWUgKyBcIm1zIFwiICsgc2V0dGluZ3MuZWFzaW5nICsgXCI7XCI7XG4gICAgXG4gICAgZWwyLnN0eWxlLmNzc1RleHQgPSB0cmFuc2Zvcm1DU1M7XG4gICAgXG4gICAgdmFyIHRyYW5zaXRpb25FbmQgPSBfd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbiAgICAgZWwyLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgZW5kQW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gZW5kQW5pbWF0aW9uKCkge1xuICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZnRlck1vdmUgPT0gJ2Z1bmN0aW9uJykgc2V0dGluZ3MuYWZ0ZXJNb3ZlKGluZGV4LCBuZXh0X2VsKTtcbiAgICAgIGVsMi5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIGVuZEFuaW1hdGlvbilcbiAgICB9XG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBSZXNwb25zaXZlIEZhbGxiYWNrIHRyaWdnZXIgICAgICAgICAgICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICBfcmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBzZXR0aW5ncy5yZXNwb25zaXZlRmFsbGJhY2spIHtcblx0XHRcdFxuXHRcdFx0X2FkZENsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIik7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgX21vdXNlV2hlZWxIYW5kbGVyKTtcblx0XHRcdF9zd2lwZUV2ZW50cyhlbCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3dpcGVEb3duXCIpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN3aXBlVXBcIik7XG5cdFx0XHRcblx0XHR9IGVsc2Uge1xuXHRcdCAgXG5cdFx0ICBpZiAoX2hhc0NsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIikpIHtcblx0XHQgICAgX3JlbW92ZUNsYXNzKGJvZHksIFwiZGlzYWJsZWQtb25lcGFnZS1zY3JvbGxcIik7XG5cdFx0ICAgIF9zY3JvbGxUbyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIDAsIDIwMDApO1xuXHQgICAgfVxuICAgICAgXG4gICAgICBcblxuXHRcdFx0X3N3aXBlRXZlbnRzKGVsKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZURvd25cIiwgIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdCAgaWYgKCFfaGFzQ2xhc3MoYm9keSwgXCJkaXNhYmxlZC1vbmVwYWdlLXNjcm9sbFwiKSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bW92ZVVwKGVsKTtcblx0XHRcdH0pO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlVXBcIiwgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRpZiAoIV9oYXNDbGFzcyhib2R5LCBcImRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsXCIpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRtb3ZlRG93bihlbCk7XG5cdFx0XHR9KTtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG4gIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIF9tb3VzZVdoZWVsSGFuZGxlcik7XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0XG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBJbml0aWFsaXplIHNjcm9sbCBkZXRlY3Rpb24gICAgICAgICAgICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICBfaW5pdF9zY3JvbGwgPSBmdW5jdGlvbihldmVudCwgZGVsdGEpIHtcblx0XHR2YXIgZGVsdGFPZkludGVyZXN0ID0gZGVsdGEsXG5cdFx0XHR0aW1lTm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcblx0XHQvLyBDYW5jZWwgc2Nyb2xsIGlmIGN1cnJlbnRseSBhbmltYXRpbmcgb3Igd2l0aGluIHF1aWV0IHBlcmlvZFxuXHRcdGlmKHRpbWVOb3cgLSBsYXN0QW5pbWF0aW9uIDwgcXVpZXRQZXJpb2QgKyBzZXR0aW5ncy5hbmltYXRpb25UaW1lKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChkZWx0YU9mSW50ZXJlc3QgPCAwKSB7XG5cdFx0XHRtb3ZlRG93bihlbClcblx0XHR9IGVsc2Uge1xuXHRcdFx0bW92ZVVwKGVsKVxuXHRcdH1cblx0XHRcblx0XHRsYXN0QW5pbWF0aW9uID0gdGltZU5vdztcblx0fVxuICAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgUHVibGljIEZ1bmN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRnVuY3Rpb24gdG8gbW92ZSBkb3duIHNlY3Rpb24gICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gICB0aGlzLm1vdmVEb3duID0gZnVuY3Rpb24oZWwzKSB7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBlbDMgPT0gXCJzdHJpbmdcIikgZWwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbDMpO1xuICAgIFxuICAgIHZhciBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArXCIuYWN0aXZlXCIpLmRhdGFzZXQuaW5kZXgsXG5cdFx0ICAgIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluZGV4ICsgXCInXVwiKSxcblx0XHQgICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgKHBhcnNlSW50KGluZGV4KSArIDEpICsgXCInXVwiKTtcblx0XHQgICAgXG5cdFx0ICAgIFxuXHRcdGlmKCFuZXh0KSB7XG5cdFx0XHRpZiAoc2V0dGluZ3MubG9vcCA9PSB0cnVlKSB7XG5cdFx0XHRcdHBvcyA9IDA7XG5cdFx0XHRcdG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PScxJ11cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblxuXHRcdH1lbHNlIHtcblx0XHRcdHBvcyA9IChpbmRleCAqIDEwMCkgKiAtMTtcblx0XHR9XG5cdFx0dmFyIG5leHRfaW5kZXggPSBuZXh0LmRhdGFzZXQuaW5kZXg7XG5cdFx0X3JlbW92ZUNsYXNzKGN1cnJlbnQsIFwiYWN0aXZlXCIpO1xuXHRcdF9hZGRDbGFzcyhuZXh0LCBcImFjdGl2ZVwiKTtcblx0XHRcblx0XHRpZihzZXR0aW5ncy5wYWdpbmF0aW9uID09IHRydWUpIHtcblx0XHQgIF9yZW1vdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhXCIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0ICBfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBuZXh0X2luZGV4ICsgXCInXVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0fVxuXG5cdFx0Ym9keS5jbGFzc05hbWUgPSBib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJ2aWV3aW5nLXBhZ2UtXFxkLio/XFxiL2csICcnKTtcblx0XHRfYWRkQ2xhc3MoYm9keSwgXCJ2aWV3aW5nLXBhZ2UtXCIrIG5leHRfaW5kZXgpO1xuXG5cdFx0aWYgKGhpc3RvcnkucmVwbGFjZVN0YXRlICYmIHNldHRpbmdzLnVwZGF0ZVVSTCA9PSB0cnVlKSB7XG5cdFx0XHR2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKSkgKyBcIiNcIiArIChwYXJzZUludChpbmRleCkgKyAxKTtcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCB7fSwgZG9jdW1lbnQudGl0bGUsIGhyZWYgKTtcblx0XHR9XG5cdFx0X3RyYW5zZm9ybVBhZ2UoZWwzLCBzZXR0aW5ncywgcG9zLCBuZXh0X2luZGV4LCBuZXh0KTtcblx0fVxuXHRcblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRnVuY3Rpb24gdG8gbW92ZSB1cCBzZWN0aW9uICAgICovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0XG5cdHRoaXMubW92ZVVwID0gZnVuY3Rpb24oZWw0KSB7XG5cdCAgXG5cdCAgaWYgKHR5cGVvZiBlbDQgPT0gXCJzdHJpbmdcIikgZWw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbDQpO1xuXHQgIFxuXHQgIHZhciBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArXCIuYWN0aXZlXCIpLmRhdGFzZXQuaW5kZXgsXG5cdFx0ICAgIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIGluZGV4ICsgXCInXVwiKSxcblx0XHQgICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgKHBhcnNlSW50KGluZGV4KSAtIDEpICsgXCInXVwiKTtcblxuXHRcdGlmKCFuZXh0KSB7XG5cdFx0XHRpZiAoc2V0dGluZ3MubG9vcCA9PSB0cnVlKSB7XG5cdFx0XHRcdHBvcyA9ICgodG90YWwgLSAxKSAqIDEwMCkgKiAtMTtcblx0XHRcdFx0bmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc2VjdGlvbkNvbnRhaW5lciArIFwiW2RhdGEtaW5kZXg9J1wiICsgdG90YWwgKyBcIiddXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0fWVsc2Uge1xuXHRcdFx0cG9zID0gKChuZXh0LmRhdGFzZXQuaW5kZXggLSAxKSAqIDEwMCkgKiAtMTtcblx0XHR9XG5cdFx0dmFyIG5leHRfaW5kZXggPSBuZXh0LmRhdGFzZXQuaW5kZXg7XG5cdFx0X3JlbW92ZUNsYXNzKGN1cnJlbnQsIFwiYWN0aXZlXCIpXG5cdFx0X2FkZENsYXNzKG5leHQsIFwiYWN0aXZlXCIpXG5cdFx0XG5cdFx0aWYoc2V0dGluZ3MucGFnaW5hdGlvbiA9PSB0cnVlKSB7XG5cdFx0ICBfcmVtb3ZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyBpbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXHRcdCAgX2FkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiW2RhdGEtaW5kZXg9J1wiICsgbmV4dF9pbmRleCArIFwiJ11cIiksIFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0XHRib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnZpZXdpbmctcGFnZS1cXGQuKj9cXGIvZywgJycpO1xuXHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgbmV4dF9pbmRleCk7XG5cblx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgc2V0dGluZ3MudXBkYXRlVVJMID09IHRydWUpIHtcblx0XHRcdHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpKSArIFwiI1wiICsgKHBhcnNlSW50KGluZGV4KSAtIDEpO1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZiApO1xuXHRcdH1cblx0XHRfdHJhbnNmb3JtUGFnZShlbDQsIHNldHRpbmdzLCBwb3MsIG5leHRfaW5kZXgsIG5leHQpO1xuXHR9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRnVuY3Rpb24gdG8gbW92ZSB0byBzcGVjaWZpZWQgc2VjdGlvbiAgICAqL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgdGhpcy5tb3ZlVG8gPSBmdW5jdGlvbihlbDUsIHBhZ2VfaW5kZXgpIHtcbiAgICBcbiAgICBpZiAodHlwZW9mIGVsNSA9PSBcInN0cmluZ1wiKSBlbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsNSk7XG4gICAgXG5cdFx0dmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIi5hY3RpdmVcIiksXG5cdFx0ICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnNlY3Rpb25Db250YWluZXIgKyBcIltkYXRhLWluZGV4PSdcIiArIChwYWdlX2luZGV4KSArIFwiJ11cIik7XG5cdFx0ICAgIFxuXHRcdGlmKG5leHQpIHtcblx0XHQgIHZhciBuZXh0X2luZGV4ID0gbmV4dC5kYXRhc2V0LmluZGV4O1xuXHRcdFx0X3JlbW92ZUNsYXNzKGN1cnJlbnQsIFwiYWN0aXZlXCIpO1xuXHRcdFx0X2FkZENsYXNzKG5leHQsIFwiYWN0aXZlXCIpO1xuXHRcdFx0X3JlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lcGFnZS1wYWdpbmF0aW9uIGxpIGFcIiArIFwiLmFjdGl2ZVwiKSwgXCJhY3RpdmVcIik7XG5cdFx0XHRfYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVwYWdlLXBhZ2luYXRpb24gbGkgYVwiICsgXCJbZGF0YS1pbmRleD0nXCIgKyAocGFnZV9pbmRleCkgKyBcIiddXCIpLCBcImFjdGl2ZVwiKTtcblxuXHRcdFx0Ym9keS5jbGFzc05hbWUgPSBib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJ2aWV3aW5nLXBhZ2UtXFxkLio/XFxiL2csICcnKTtcblx0XHRcdF9hZGRDbGFzcyhib2R5LCBcInZpZXdpbmctcGFnZS1cIisgbmV4dF9pbmRleCk7XG5cblx0XHRcdHBvcyA9ICgocGFnZV9pbmRleCAtIDEpICogMTAwKSAqIC0xO1xuXG5cdFx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgc2V0dGluZ3MudXBkYXRlVVJMID09IHRydWUpIHtcblx0XHRcdFx0dmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJykpICsgXCIjXCIgKyAocGFyc2VJbnQocGFnZV9pbmRleCkgLSAxKTtcblx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHt9LCBkb2N1bWVudC50aXRsZSwgaHJlZiApO1xuXHRcdFx0fVxuXHRcdFx0X3RyYW5zZm9ybVBhZ2UoZWw1LCBzZXR0aW5ncywgcG9zLCBwYWdlX2luZGV4LCBuZXh0KTtcblx0XHR9XG5cdH1cblx0XG4gIHRoaXMuaW5pdCgpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gLyogIFVsaXRpbGl0aWVzIE1ldGhvZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiBcbiAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAvKiAgRnVuY3Rpb24gYnkgSm9obiBSZXNpZyB0byByZXBsaWNhdGUgZXh0ZW5kIGZ1bmN0aW9uYWxpdHkgKi9cbiAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiBcbiBPYmplY3QuZXh0ZW5kID0gZnVuY3Rpb24ob3JpZyl7XG4gICBpZiAoIG9yaWcgPT0gbnVsbCApXG4gICAgIHJldHVybiBvcmlnO1xuIFxuICAgZm9yICggdmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrICkge1xuICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICBpZiAoIG9iaiAhPSBudWxsICkge1xuICAgICAgIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICAgICAgIHZhciBnZXR0ZXIgPSBvYmouX19sb29rdXBHZXR0ZXJfXyggcHJvcCApLFxuICAgICAgICAgICAgIHNldHRlciA9IG9iai5fX2xvb2t1cFNldHRlcl9fKCBwcm9wICk7XG4gXG4gICAgICAgICBpZiAoIGdldHRlciB8fCBzZXR0ZXIgKSB7XG4gICAgICAgICAgIGlmICggZ2V0dGVyIClcbiAgICAgICAgICAgICBvcmlnLl9fZGVmaW5lR2V0dGVyX18oIHByb3AsIGdldHRlciApO1xuICAgICAgICAgICBpZiAoIHNldHRlciApXG4gICAgICAgICAgICAgb3JpZy5fX2RlZmluZVNldHRlcl9fKCBwcm9wLCBzZXR0ZXIgKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIG9yaWdbIHByb3AgXSA9IG9ialsgcHJvcCBdO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIFxuICAgcmV0dXJuIG9yaWc7XG4gfTtcblx0XG5cblxuXG4vKioqIEVYUE9SVFMgRlJPTSBleHBvcnRzLWxvYWRlciAqKiovXG5leHBvcnRzW1wib25lUGFnZVNjcm9sbFwiXSA9IChvbmVQYWdlU2Nyb2xsKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWJzL3B1cmVqcy1vbmVwYWdlLXNjcm9sbC9vbmVwYWdlc2Nyb2xsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9