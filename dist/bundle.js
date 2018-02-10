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


// function component() {
//   var element = document.createElement('div');

//  // Lodash, currently included via a script, is required for this line to work
//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

let chatContainer = `
<div class="container-sur-chat" id="elementMoving">
<div class="first-bar-sur-chat">
  <button class="up-btn-sur-chat">up</button>
</div>
<div class="chat-area-sur-chat"></div>
<div class="input-bar-sur-chat">
    <input type="file" placeholder="Plik" style="right:1" class="file-manager input-sur-chat"></input>
    <textarea placeholder="wpisz tu i naciśnij enter" class="send-input-sur-chat textarea-sur-chat"></textarea>
</div>
</div>

`

let formContainer =
    `
    <div class="container-sur-chat" id="elementMoving">
      <div class="first-bar-sur-chat">
        <button class="">up</button>
      </div>
      <div class="chat-area-sur-chat">
        <p class="left-message-text-sur-chat">
          Wypełnij proszę poniższe pola, a my skontaktujemy się z Tobą tak szybko jak będzie to możliwe..
        </p>
        <input type="text" placeholder="nazwa" class="input-area__name input-sur-chat">
        <small id="input-validator-name" style="color: red"> To pole jest wymagane i  3 znaki  </small>
        <input type="text" placeholder="adres" class="input-area__address input-sur-chat">
        <small id="input-validator-address" style="color: red"> Proszę podać poprawny email </small>
        <input type="text" placeholder="wiadomość" class="input-area__message-sur-chat input-sur-chat">
        <small id="input-validator-message" style="color: red"> proszę podać wiadomosć </small>
        <div style="text-align: center; display: block;">
        <button placeholder="Wyślij" class="send-login-information-sur-chat">Wyślij</button>
        </div>
      </div> 
      <div class="input-bar-sur-chat">
      </div>
    </div>
  </div>
`


var content = document.createElement('div');
content.innerHTML = chatContainer;
document.body.appendChild(content);


console.log('a')

const setComponent = () => { }

const setValidate = (element, validatioFun, smallVallidation) => {
    element.addEventListener('input', (event) => {
        if (validatioFun(element)) {
            smallVallidation.style.display = 'none';
        } else {
            smallVallidation.style.display = 'block';
        }
    }, false)
    element.addEventListener('focusin', (event) => {
        smallVallidation.style.display = 'block';
    }, false)
}

const setFunctionsToForm = () => {
    this.nameVal = document.querySelector('#input-validator-name');
    this.addressVal = document.querySelector('#input-validator-address');
    this.messageVal = document.querySelector('#input-validator-message');

    this.nameVal.style.display = 'none';
    this.addressVal.style.display = 'none';
    this.messageVal.style.display = 'none';

    this.chatArea = document.querySelector('.chat-area-sur-chat');
    this.name = document.querySelector('.input-area__name');
    this.address = document.querySelector('.input-area__address');
    this.message = document.querySelector('.input-area__message-sur-chat');

    this.firstVal = false;
    this.nextVal = false;
    this.thirdVal = false;
    
    this.sendLoginInformation = document.querySelector('.send-login-information-sur-chat');

    setValidate(this.name, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            this.firstVal = true;
            return true;
        }
        this.firstVal = false;
        return false;
    }, this.nameVal);

    setValidate(this.address, (element) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(element.value).toLowerCase())) {
            return true;
            this.nextVal = true;
        } else {
            this.nextVal = false;
            return false;
        }
    }, this.addressVal);

    setValidate(this.message, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            this.thirdVal = true;
            return true;
        } else {
            this.thirdVal = false;
        }
        return false;
    }, this.messageVal);

    this.sendLoginInformation.addEventListener('click', () => {
        console.log(this.firstVal, this.nextVal, this.thirdVal)
        if (this.firstVal && this.nextVal && this.thirdVal) {
            console.log('Can Send')
        } else {
            console.log('uzupelnij poprawnie')
        }
    }, false)

}

// setFunctionsToForm();

const setFunctionsToChat = () => {
    this.typing = ''
    this.sendInput = document.querySelector('.send-input-sur-chat')
    this.fileManager = document.querySelector('.file-manager');
    
    console.log(this.sendInput)
    this.sendInput.addEventListener('keypress', (key) => {
        this.typing = this.sendInput.value;
        if (key.charCode == 13) {
            addMessages()
            this.sendInput.value = '';
        }
    }, false)


    this.fileManager.addEventListener('change', (event) => {
        console.log(this.fileManager.value, 'even');
    }, false)



    this.chatArea = document.querySelector('.chat-area-sur-chat');

    const addMessages = () => {
        let message = document.createElement('span');
        message.innerHTML = this.typing;
        message.classList = 'message-sur-chat';
        this.chatArea.appendChild(message);
        this.chatArea.scrollTop = this.chatArea.scrollHeight

    }
}

setFunctionsToChat();





const upButton = document.querySelector('.up-btn-sur-chat')
upButton.addEventListener('click', () => {
    const container = document.querySelector('.container-sur-chat')
    if (container.classList.contains('animate-up-sur-chat')) {
        container.classList.remove('animate-up-sur-chat')
    } else {
        container.classList.add('animate-up-sur-chat')
    }
})

let style = getComputedStyle(document.body);
const setColorVariables = (variable, value) => { document.documentElement.style.setProperty(variable, value); }

setColorVariables('--bars-colors-sur--chat', '4CAF50we');
setColorVariables('--chat-area-bg-color-sur--chat', 'white');
setColorVariables('--chat-area-message-bg-color-sur--chat', 'CDDC39');
setColorVariables('--chat-area-font-color-sur--chat', '8BC34A');


var speed = 10; // the box will move by 10 pixels on every step
var direction = 1; // 1 = move right; -1 = move left
var mouseX, mouseY = 0;
const movingElement = document.querySelector('#elementMoving');

// addEventListener(movingElement, 'onmousedown', fu)
// document.addEventListener('mousemove', function (event) {
//     var cX = event.clientX;
//     var sX = event.screenX;
//     var cY = event.clientY;
//     var sY = event.screenY;
//     mouseX = cX;
//     mouseY = cY;
//     var coords1 = "client - X: " + cX + ", Y coords: " + cY;
//     var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
//     console.log(mouseX, mouseY)

//     console.log(event);

//     var boxLeftPos = movingElement.offsetLeft,
//         boxRightPos = boxLeftPos + movingElement.offsetWidth;
//     // When right side of the box goes too far - change direction:
//     if (boxRightPos > document.body.offsetWidth) {
//         direction = -1;
//     }
//     // When left side of the box goes too far - change direction:
//     if (boxLeftPos < 0) {
//         direction = 1;
//     }
//     // Recalculate position:
//     movingElement.style.left = mouseX;
//     movingElement.style.topwebpack = mouseY;
// }, false)





// movingElement.addEventListener('mousemove', function (event) {

// }, false)


// console.log(style.getPropertyValue('--bars-color'));
// console.log(style.getPropertyValue('--chat-area'));



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n:root {\r\n    --bars-color-sur--chat: purple;\r\n    --chat-area-bg-color-sur--chat: blue;\r\n    --chat-area-message-bg-color-sur--chat: green;\r\n    --chat-area-font-color-sur--chat: grey;\r\n}\r\n\r\n\r\n.container-sur-chat {\r\n    transition: 1s;\r\n    position: fixed;\r\n    bottom: -40px;\r\n    z-index: 10000;\r\n    right: 5px;\r\n    background-color: aqua;\r\n    width: 320px;\r\n    height: 100px;\r\n}\r\n\r\n.animate-up-sur-chat {\r\n    bottom: 242px\r\n}\r\n\r\n.chat-area-sur-chat input, .chat-area-sur-chat textarea {\r\n    margin-left: 25px;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid grey;\r\n    height: 25px;\r\n    padding-left: 12px; \r\n    width: 270px;\r\n}\r\n\r\n.left-message-text-sur-chat {\r\n    font-size: 14px;\r\n    color: gray;\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.input-sur-chat {\r\n    color: gray;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.textarea-sur-chat {\r\n    color: gray;\r\n    height: 55px;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.input-area__message-sur-chat {\r\n    min-height: 50px;\r\n}\r\n\r\n.first-bar-sur-chat {\r\n    height: 40px;\r\n    width: 320px;\r\n    background-color: var(--bars-color-sur--chat);\r\n    position: relative;\r\n}\r\n.send-input-sur-chat {\r\n    width: 320px !important;\r\n}\r\n\r\n.input-bar-sur-chat {\r\n    border-radius: 5px;\r\n    min-height: 45px;\r\n    background-color: #eee;\r\n    \r\n}\r\n\r\n.message-sur-chat {\r\n    margin-left: 10px;\r\n    margin-right: 50px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: var(--chat-area-message-bg-color-sur--chat);\r\n    display: block;\r\n    width: 300px !important;\r\n    word-wrap:break-word;\r\n    color: var(--chat-area-font-color)\r\n}\r\n\r\n.up-btn-sur-chat {\r\n    border-radius: 100%;\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 7px;\r\n}\r\n\r\n.chat-area-sur-chat {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background-color: var(--chat-area-bg-color-sur--chat);\r\n    height: 250px;\r\n    width: 320px !important;\r\n    border: 0.2px grey solid;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.send-login-information-sur-chat {\r\n    width:  100px;\r\n    height: 30px;\r\n    background-color: green;\r\n}", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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

var	fixUrls = __webpack_require__(5);

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
/* 5 */
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


/***/ })
/******/ ]);