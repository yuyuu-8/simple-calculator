/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/utils/button/button.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/utils/button/button.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button-container {
  cursor: pointer;

  display: flex;

  padding: 15px;
  border: none;
  border-radius: 5px;

  font-size: 18px;

  background-color: #e0e0e0;

  transition: all 0.2s;
}

.button-container:hover {
  opacity: 0.7;
}

button {
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-size: 1.5em;

  background-color: #e0e0e0;
}
`, "",{"version":3,"sources":["webpack://./src/app/utils/button/button.css"],"names":[],"mappings":"AAAA;EACE,eAAe;;EAEf,aAAa;;EAEb,aAAa;EACb,YAAY;EACZ,kBAAkB;;EAElB,eAAe;;EAEf,yBAAyB;;EAEzB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;;EAEnB,gBAAgB;;EAEhB,yBAAyB;AAC3B","sourcesContent":[".button-container {\r\n  cursor: pointer;\r\n\r\n  display: flex;\r\n\r\n  padding: 15px;\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-size: 18px;\r\n\r\n  background-color: #e0e0e0;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.button-container:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  width: 100%;\r\n  height: 50px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n\r\n  font-size: 1.5em;\r\n\r\n  background-color: #e0e0e0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/view/dark-theme.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/view/dark-theme.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body.dark-theme {
  color: #e0e0e0;
  background-color: #121212;
}

body.dark-theme .calculator-container {
  background-color: #1e1e1e;
}

body.dark-theme .calculator-display {
  color: #e0e0e0;
  background-color: #2a2a2a;
}

body.dark-theme button {
  border: none;
  color: #333;
  background-color: #e0e0e0;
}

body.dark-theme .control-button {
  background-color: #e0e0e0;
  
  color: #333;
}
`, "",{"version":3,"sources":["webpack://./src/app/view/dark-theme.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;;EAEzB,WAAW;AACb","sourcesContent":["body.dark-theme {\r\n  color: #e0e0e0;\r\n  background-color: #121212;\r\n}\r\n\r\nbody.dark-theme .calculator-container {\r\n  background-color: #1e1e1e;\r\n}\r\n\r\nbody.dark-theme .calculator-display {\r\n  color: #e0e0e0;\r\n  background-color: #2a2a2a;\r\n}\r\n\r\nbody.dark-theme button {\r\n  border: none;\r\n  color: #333;\r\n  background-color: #e0e0e0;\r\n}\r\n\r\nbody.dark-theme .control-button {\r\n  background-color: #e0e0e0;\r\n  \r\n  color: #333;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/view/view.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/view/view.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin: 0;

  background-color: antiquewhite;
}

.app-container {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sound-button,
.theme-button {
  cursor: pointer;
  padding: 0.5rem;
  font-size: 24px;
}

.calculator-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  width: 500px;
  padding: 20px;
  border-radius: 10px;

  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0 0 0 / 20%);
}

.calculator-display {
  grid-column: span 4;

  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;

  font-size: 24px;
  text-align: right;

  background-color: #e0e0e0;
  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);
}`, "",{"version":3,"sources":["webpack://./src/app/view/view.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,SAAS;;EAET,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;;EAET,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,yBAAyB;EACzB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;;EAEnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;;EAElB,eAAe;EACf,iBAAiB;;EAEjB,yBAAyB;EACzB,6CAA6C;AAC/C","sourcesContent":["body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  height: 100vh;\r\n  margin: 0;\r\n\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.sound-button,\r\n.theme-button {\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  font-size: 24px;\r\n}\r\n\r\n.calculator-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n\r\n  width: 500px;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n\r\n  background-color: #f0f0f0;\r\n  box-shadow: 0 4px 8px rgba(0 0 0 / 20%);\r\n}\r\n\r\n.calculator-display {\r\n  grid-column: span 4;\r\n\r\n  margin-bottom: 10px;\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n\r\n  font-size: 24px;\r\n  text-align: right;\r\n\r\n  background-color: #e0e0e0;\r\n  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/utils/button/button-creator.js":
/*!************************************************!*\
  !*** ./src/app/utils/button/button-creator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonCreator)
/* harmony export */ });
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./src/app/utils/button/button.css");
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-creator */ "./src/app/utils/element-creator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var ButtonCreator = /*#__PURE__*/function (_ElementCreator) {
  function ButtonCreator() {
    _classCallCheck(this, ButtonCreator);
    return _callSuper(this, ButtonCreator, arguments);
  }
  _inherits(ButtonCreator, _ElementCreator);
  return _createClass(ButtonCreator, [{
    key: "createElement",
    value: function createElement(params) {
      var _this = this;
      this.element = document.createElement('div');
      this.element.classList.add('button-container');
      if (params.classNames) {
        params.classNames.forEach(function (name) {
          _this.element.classList.add(name);
        });
      }
      this.buttonElement = document.createElement('button');
      this.setTextContent(params.textContent);
      this.element.append(this.buttonElement);
      this.setCallback(params.callback);
      return this.element;
    }
  }, {
    key: "setTextContent",
    value: function setTextContent(textContent) {
      this.buttonElement.textContent = textContent;
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this.buttonElement.addEventListener('click', function (e) {
        return callback(e);
      });
    }
  }]);
}(_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/app/utils/button/button.css":
/*!*****************************************!*\
  !*** ./src/app/utils/button/button.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/utils/button/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/utils/calculator.js":
/*!*************************************!*\
  !*** ./src/app/utils/calculator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate),
/* harmony export */   validateInput: () => (/* binding */ validateInput)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function validateInput(event) {
  var allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Enter', '+', '-', '*', '/', ',', '(', ')'];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}
function calculate(expression) {
  try {
    var tokens = tokenize(expression);
    var rpn = toRPN(tokens);
    return evaluateRPN(rpn);
  } catch (e) {
    return 'Error';
  }
}
function tokenize(expression) {
  expression = expression.replace(/\s+/g, '');
  expression = expression.replace(/\(\s*-\s*(\d+(\.\d+)?)\s*\)/g, '(0-$1)');
  var regex = /√|\d+(\.\d+)?|[+\-*/()%]/g;
  var tokens = expression.match(regex);
  if (!tokens) throw new Error('Invalid expression');
  return tokens;
}
function toRPN(tokens) {
  var output = [];
  var operators = [];
  var precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '√': 3
  };
  var _iterator = _createForOfIteratorHelper(tokens),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var token = _step.value;
      if (!isNaN(token)) {
        output.push(token);
      } else if (token === '√') {
        operators.push(token);
      } else if ('+-*/%√'.includes(token)) {
        while (operators.length && precedence[operators.at(-1)] >= precedence[token] && operators.at(-1) !== '(') {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators.at(-1) !== '(') {
          output.push(operators.pop());
        }
        if (operators.at(-1) === '(') operators.pop();
        if (operators.at(-1) === '√') {
          output.push(operators.pop());
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return output.concat(operators.reverse());
}
function evaluateRPN(rpn) {
  var stack = [];
  var _iterator2 = _createForOfIteratorHelper(rpn),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var token = _step2.value;
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (token === '√') {
        var a = stack.pop();
        if (a < 0) throw new Error('Square root of negative number');
        stack.push(Math.sqrt(a));
      } else {
        var b = stack.pop();
        var _a = stack.pop();
        switch (token) {
          case '+':
            stack.push(_a + b);
            break;
          case '-':
            stack.push(_a - b);
            break;
          case '*':
            stack.push(_a * b);
            break;
          case '/':
            stack.push(_a / b);
            break;
          default:
            throw new Error('Unknown operator');
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return stack[0];
}

/***/ }),

/***/ "./src/app/utils/element-creator.js":
/*!******************************************!*\
  !*** ./src/app/utils/element-creator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementParams: () => (/* binding */ ElementParams),
/* harmony export */   "default": () => (/* binding */ ElementCreator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ElementParams = {
  tag: String,
  classNames: Array,
  textContent: String,
  callback: Function
};
var ElementCreator = /*#__PURE__*/function () {
  function ElementCreator(params) {
    _classCallCheck(this, ElementCreator);
    this.element = null;
    this.createElement(params);
  }
  return _createClass(ElementCreator, [{
    key: "createElement",
    value: function createElement(params) {
      this.element = document.createElement(params.tag);
      this.setCssClasses(params.classNames);
      this.setTextContent(params.textContent);
      this.setCallback(params.callback);
    }
  }, {
    key: "setCssClasses",
    value: function setCssClasses(classNames) {
      var _this = this;
      classNames.forEach(function (className) {
        _this.element.classList.add(className);
      });
    }
  }, {
    key: "setTextContent",
    value: function setTextContent(textContent) {
      this.element.textContent = textContent;
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      if (typeof callback === 'function') {
        this.element.addEventListener('click', function (e) {
          return callback(e);
        });
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
  }, {
    key: "addInnerElement",
    value: function addInnerElement(element) {
      if (element instanceof ElementCreator) {
        this.element.append(element.getElement());
      } else {
        this.element.append(element);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/app/view/dark-theme.css":
/*!*************************************!*\
  !*** ./src/app/view/dark-theme.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dark_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./dark-theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/view/dark-theme.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dark_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dark_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dark_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dark_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/view/view.css":
/*!*******************************!*\
  !*** ./src/app/view/view.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./view.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/view/view.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/view/view.js":
/*!******************************!*\
  !*** ./src/app/view/view.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalculatorUI: () => (/* binding */ createCalculatorUI)
/* harmony export */ });
/* harmony import */ var _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/button/button-creator.js */ "./src/app/utils/button/button-creator.js");
/* harmony import */ var _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/element-creator.js */ "./src/app/utils/element-creator.js");
/* harmony import */ var _utils_calculator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calculator.js */ "./src/app/utils/calculator.js");
/* harmony import */ var _assets_click_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/click.mp3 */ "./src/assets/click.mp3");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.css */ "./src/app/view/view.css");
/* harmony import */ var _dark_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dark-theme.css */ "./src/app/view/dark-theme.css");








function createCalculatorUI() {
  var appContainer = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    tag: 'div',
    classNames: ['app-container'],
    textContent: '',
    callback: null
  });
  var sidebar = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    tag: 'div',
    classNames: ['sidebar'],
    textContent: '',
    callback: null
  });
  var buttonSound = new Audio(_assets_click_mp3__WEBPACK_IMPORTED_MODULE_3__);
  buttonSound.volume = 1;
  var soundOn = true;
  var soundButton = new _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    tag: 'button',
    classNames: ['sound-button'],
    textContent: '🔊',
    callback: function callback() {
      soundOn = !soundOn;
      soundButton.setTextContent(soundOn ? '🔊' : '🔇');
      playSound(soundOn, buttonSound);
    }
  });
  var darkTheme = false;
  var themeButton = new _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    tag: 'button',
    classNames: ['theme-button'],
    textContent: '🌞',
    callback: function callback() {
      darkTheme = !darkTheme;
      document.body.classList.toggle('dark-theme', darkTheme);
      themeButton.setTextContent(darkTheme ? '🌙' : '🌞');
      playSound(soundOn, buttonSound);
    }
  });
  sidebar.addInnerElement(soundButton.getElement());
  sidebar.addInnerElement(themeButton.getElement());
  var elementParams = {
    tag: 'section',
    classNames: ['calculator-container'],
    textContent: '',
    callback: null
  };
  var displayParams = {
    tag: 'input',
    classNames: ['calculator-display'],
    textContent: '',
    callback: null
  };
  var display = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"](displayParams);
  var displayElement = display.getElement();
  displayElement.type = 'text';
  displayElement.value = '0';
  displayElement.addEventListener('keydown', function (e) {
    (0,_utils_calculator_js__WEBPACK_IMPORTED_MODULE_2__.validateInput)(e);
    playSound(soundOn, buttonSound);
  });
  var calculatorElement = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"](elementParams);
  calculatorElement.addInnerElement(display);
  var buttonLayout = [['AC', '(', ')', '×'], ['√', '%', '+/-', '÷'], ['7', '8', '9', '−'], ['4', '5', '6', '+'], ['1', '2', '3', '='], ['0', '.', '⌫']];
  buttonLayout.forEach(function (row) {
    row.forEach(function (text) {
      var className = isNaN(text) && text !== '·' ? 'op' : 'num';
      var callback;
      switch (text) {
        case 'AC':
          callback = function callback() {
            displayElement.value = '0';
            playSound(soundOn, buttonSound);
          };
          break;
        case '⌫':
          callback = function callback() {
            displayElement.value = displayElement.value.slice(0, -1) || '0';
            playSound(soundOn, buttonSound);
          };
          break;
        case '+/-':
          callback = function callback() {
            var current = displayElement.value;
            var match = current.match(/(\(-?\d+(\.\d+)?\)|-?\d+(\.\d+)?)$/);
            if (match) {
              var number = match[0];
              var replacement;
              if (number.startsWith('(-')) {
                replacement = number.slice(2, -1);
              } else if (number.startsWith('-')) {
                replacement = "($number.slice(1)}";
              } else {
                replacement = "(-".concat(number, ")");
              }
              displayElement.value = current.slice(0, -number.length) + replacement;
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '%':
          callback = function callback() {
            var expr = displayElement.value;
            var match = expr.match(/(.+?)([+\-*/])(\(?-?\d+(\.\d+)?\)?)$/);
            if (match) {
              var baseExpr = match[1]; // expression w/o last num
              var operator = match[2]; // operator before num
              var number = match[3];
              var percentageExpr = "(".concat(baseExpr).concat(operator, "(").concat(baseExpr, "*").concat(number, "/100))");
              displayElement.value = percentageExpr;
            } else {
              var simpleMatch = expr.match(/(-?\d+(\.\d+)?)(?!.*\d)/);
              if (simpleMatch) {
                var _number = simpleMatch[0];
                displayElement.value = expr.slice(0, -_number.length) + "(".concat(_number, "*0.01)");
              }
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '√':
          callback = function callback() {
            if (displayElement.value === '0') {
              displayElement.value = '√(';
            } else {
              displayElement.value += '√(';
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '=':
          callback = function callback() {
            var input = displayElement.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/·/g, '.').replace(/,/g, '.');
            var result = (0,_utils_calculator_js__WEBPACK_IMPORTED_MODULE_2__.calculate)(input);
            displayElement.value = result;
            playSound(soundOn, buttonSound);
          };
          break;
        default:
          callback = function callback() {
            if (displayElement.value === '0') {
              displayElement.value = text;
            } else {
              displayElement.value += text;
            }
            playSound(soundOn, buttonSound);
          };
      }
      var button = new _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        tag: 'button',
        classNames: [className],
        textContent: text,
        callback: callback
      });
      calculatorElement.addInnerElement(button.getElement());
    });
  });
  appContainer.addInnerElement(sidebar);
  appContainer.addInnerElement(calculatorElement);
  return appContainer.getElement();
}
function playSound(soundOn, buttonSound) {
  if (soundOn) {
    buttonSound.play()["catch"](function (e) {
      return console.log('Audio play error:', e);
    });
  }
}

/***/ }),

/***/ "./src/assets/click.mp3":
/*!******************************!*\
  !*** ./src/assets/click.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/click.mp3";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/view */ "./src/app/view/view.js");

document.addEventListener('DOMContentLoaded', function () {
  var calculator = (0,_app_view_view__WEBPACK_IMPORTED_MODULE_0__.createCalculatorUI)();
  document.body.appendChild(calculator);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/app/view/view.js");
/******/ 	__webpack_require__("./src/app/utils/element-creator.js");
/******/ 	__webpack_require__("./src/app/utils/calculator.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/utils/button/button-creator.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNGEwNTNlZmY0NzkwZTM4ZDJkZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtHQUFrRyxXQUFXLFdBQVcsVUFBVSxVQUFVLGFBQWEsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsVUFBVSxhQUFhLGNBQWMsYUFBYSw2Q0FBNkMsc0JBQXNCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsb0NBQW9DLCtCQUErQixLQUFLLGlDQUFpQyxtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHdCQUF3QiwwQkFBMEIsOEJBQThCLHNCQUFzQixtQkFBbUIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsMkJBQTJCLG9DQUFvQyxLQUFLLHVCQUF1QjtBQUM1OUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4RkFBOEYsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsMENBQTBDLHFCQUFxQixnQ0FBZ0MsS0FBSywrQ0FBK0MsZ0NBQWdDLEtBQUssNkNBQTZDLHFCQUFxQixnQ0FBZ0MsS0FBSyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsS0FBSyx5Q0FBeUMsZ0NBQWdDLHdCQUF3QixLQUFLLHVCQUF1QjtBQUMzd0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixVQUFVLFlBQVksY0FBYyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsOEJBQThCLHdCQUF3QixnQkFBZ0IseUNBQXlDLEtBQUssd0JBQXdCLG9CQUFvQixnQkFBZ0IsOEJBQThCLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEtBQUsseUNBQXlDLHNCQUFzQixzQkFBc0Isc0JBQXNCLEtBQUssK0JBQStCLG9CQUFvQiw0Q0FBNEMsZ0JBQWdCLHVCQUF1QixvQkFBb0IsMEJBQTBCLG9DQUFvQyw4Q0FBOEMsS0FBSyw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0IseUJBQXlCLDBCQUEwQix3QkFBd0Isb0NBQW9DLG9EQUFvRCxLQUFLLG1CQUFtQjtBQUM1aEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM5RDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNCO0FBQzBCO0FBQUEsSUFFM0JDLGFBQWEsMEJBQUFDLGVBQUE7RUFBQSxTQUFBRCxjQUFBO0lBQUFFLGVBQUEsT0FBQUYsYUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsYUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxhQUFBLEVBQUFDLGVBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLGFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBQ2hDLFNBQUFDLGFBQWFBLENBQUNDLE1BQU0sRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM1QyxJQUFJLENBQUNHLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFFOUMsSUFBSUwsTUFBTSxDQUFDTSxVQUFVLEVBQUU7UUFDckJOLE1BQU0sQ0FBQ00sVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQ2xDUCxLQUFJLENBQUNDLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQztRQUNsQyxDQUFDLENBQUM7TUFDSjtNQUVBLElBQUksQ0FBQ0MsYUFBYSxHQUFHTixRQUFRLENBQUNKLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDckQsSUFBSSxDQUFDVyxjQUFjLENBQUNWLE1BQU0sQ0FBQ1csV0FBVyxDQUFDO01BQ3ZDLElBQUksQ0FBQ1QsT0FBTyxDQUFDVSxNQUFNLENBQUMsSUFBSSxDQUFDSCxhQUFhLENBQUM7TUFDdkMsSUFBSSxDQUFDSSxXQUFXLENBQUNiLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDO01BRWpDLE9BQU8sSUFBSSxDQUFDWixPQUFPO0lBQ3JCO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksY0FBY0EsQ0FBQ0MsV0FBVyxFQUFFO01BQzFCLElBQUksQ0FBQ0YsYUFBYSxDQUFDRSxXQUFXLEdBQUdBLFdBQVc7SUFDOUM7RUFBQztJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZSxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7TUFDcEIsSUFBSSxDQUFDTCxhQUFhLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDO1FBQUEsT0FBS0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQ2xFO0VBQUM7QUFBQSxFQXpCd0MzQix3REFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGekQsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEUsU0FBUzZCLGFBQWFBLENBQUNDLEtBQUssRUFBRTtFQUNuQyxJQUFNQyxXQUFXLEdBQUcsQ0FDbEIsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixPQUFPLEVBQ1AsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxDQUNKO0VBRUQsSUFBSSxDQUFDQSxXQUFXLENBQUNDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDdEIsR0FBRyxDQUFDLEVBQUU7SUFDcENzQixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0VBQ3hCO0FBQ0Y7QUFFTyxTQUFTQyxTQUFTQSxDQUFDQyxVQUFVLEVBQUU7RUFDcEMsSUFBSTtJQUNGLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDRixVQUFVLENBQUM7SUFDbkMsSUFBTUcsR0FBRyxHQUFHQyxLQUFLLENBQUNILE1BQU0sQ0FBQztJQUN6QixPQUFPSSxXQUFXLENBQUNGLEdBQUcsQ0FBQztFQUN6QixDQUFDLENBQUMsT0FBT1gsQ0FBQyxFQUFFO0lBQ1YsT0FBTyxPQUFPO0VBQ2hCO0FBQ0Y7QUFFQSxTQUFTVSxRQUFRQSxDQUFDRixVQUFVLEVBQUU7RUFDNUJBLFVBQVUsR0FBR0EsVUFBVSxDQUFDTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztFQUMzQ04sVUFBVSxHQUFHQSxVQUFVLENBQUNNLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxRQUFRLENBQUM7RUFFekUsSUFBTUMsS0FBSyxHQUFHLDJCQUEyQjtFQUN6QyxJQUFNTixNQUFNLEdBQUdELFVBQVUsQ0FBQ1EsS0FBSyxDQUFDRCxLQUFLLENBQUM7RUFFdEMsSUFBSSxDQUFDTixNQUFNLEVBQUUsTUFBTSxJQUFJUSxLQUFLLENBQUMsb0JBQW9CLENBQUM7RUFDbEQsT0FBT1IsTUFBTTtBQUNmO0FBRUEsU0FBU0csS0FBS0EsQ0FBQ0gsTUFBTSxFQUFFO0VBQ3JCLElBQU1TLE1BQU0sR0FBRyxFQUFFO0VBQ2pCLElBQU1DLFNBQVMsR0FBRyxFQUFFO0VBQ3BCLElBQU1DLFVBQVUsR0FBRztJQUFFLEdBQUcsRUFBRSxDQUFDO0lBQUUsR0FBRyxFQUFFLENBQUM7SUFBRSxHQUFHLEVBQUUsQ0FBQztJQUFFLEdBQUcsRUFBRSxDQUFDO0lBQUUsR0FBRyxFQUFFO0VBQUUsQ0FBQztFQUFDLElBQUFDLFNBQUEsR0FBQUMsMEJBQUEsQ0FFMUNiLE1BQU07SUFBQWMsS0FBQTtFQUFBO0lBQTFCLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQTRCO01BQUEsSUFBakJDLEtBQUssR0FBQUosS0FBQSxDQUFBekMsS0FBQTtNQUNkLElBQUksQ0FBQzhDLEtBQUssQ0FBQ0QsS0FBSyxDQUFDLEVBQUU7UUFDakJULE1BQU0sQ0FBQ1csSUFBSSxDQUFDRixLQUFLLENBQUM7TUFDcEIsQ0FBQyxNQUFNLElBQUlBLEtBQUssS0FBSyxHQUFHLEVBQUU7UUFDeEJSLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDRixLQUFLLENBQUM7TUFDdkIsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDdEIsUUFBUSxDQUFDc0IsS0FBSyxDQUFDLEVBQUU7UUFDbkMsT0FDRVIsU0FBUyxDQUFDVyxNQUFNLElBQ2hCVixVQUFVLENBQUNELFNBQVMsQ0FBQ1ksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSVgsVUFBVSxDQUFDTyxLQUFLLENBQUMsSUFDakRSLFNBQVMsQ0FBQ1ksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUN4QjtVQUNBYixNQUFNLENBQUNXLElBQUksQ0FBQ1YsU0FBUyxDQUFDYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCO1FBQ0FiLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDRixLQUFLLENBQUM7TUFDdkIsQ0FBQyxNQUFNLElBQUlBLEtBQUssS0FBSyxHQUFHLEVBQUU7UUFDeEJSLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDRixLQUFLLENBQUM7TUFDdkIsQ0FBQyxNQUFNLElBQUlBLEtBQUssS0FBSyxHQUFHLEVBQUU7UUFDeEIsT0FBT1IsU0FBUyxDQUFDVyxNQUFNLElBQUlYLFNBQVMsQ0FBQ1ksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1VBQ25EYixNQUFNLENBQUNXLElBQUksQ0FBQ1YsU0FBUyxDQUFDYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCO1FBQ0EsSUFBSWIsU0FBUyxDQUFDWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUVaLFNBQVMsQ0FBQ2EsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSWIsU0FBUyxDQUFDWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7VUFDNUJiLE1BQU0sQ0FBQ1csSUFBSSxDQUFDVixTQUFTLENBQUNhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7TUFDRjtJQUNGO0VBQUMsU0FBQUMsR0FBQTtJQUFBWixTQUFBLENBQUFyQixDQUFBLENBQUFpQyxHQUFBO0VBQUE7SUFBQVosU0FBQSxDQUFBYSxDQUFBO0VBQUE7RUFFRCxPQUFPaEIsTUFBTSxDQUFDaUIsTUFBTSxDQUFDaEIsU0FBUyxDQUFDaUIsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzQztBQUVBLFNBQVN2QixXQUFXQSxDQUFDRixHQUFHLEVBQUU7RUFDeEIsSUFBTTBCLEtBQUssR0FBRyxFQUFFO0VBQUMsSUFBQUMsVUFBQSxHQUFBaEIsMEJBQUEsQ0FDR1gsR0FBRztJQUFBNEIsTUFBQTtFQUFBO0lBQXZCLEtBQUFELFVBQUEsQ0FBQWQsQ0FBQSxNQUFBZSxNQUFBLEdBQUFELFVBQUEsQ0FBQWIsQ0FBQSxJQUFBQyxJQUFBLEdBQXlCO01BQUEsSUFBZEMsS0FBSyxHQUFBWSxNQUFBLENBQUF6RCxLQUFBO01BQ2QsSUFBSSxDQUFDOEMsS0FBSyxDQUFDRCxLQUFLLENBQUMsRUFBRTtRQUNqQlUsS0FBSyxDQUFDUixJQUFJLENBQUNXLFVBQVUsQ0FBQ2IsS0FBSyxDQUFDLENBQUM7TUFDL0IsQ0FBQyxNQUFNLElBQUlBLEtBQUssS0FBSyxHQUFHLEVBQUU7UUFDeEIsSUFBTWMsQ0FBQyxHQUFHSixLQUFLLENBQUNMLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUlTLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJeEIsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO1FBQzVEb0IsS0FBSyxDQUFDUixJQUFJLENBQUNhLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixDQUFDLENBQUMsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDTCxJQUFNRyxDQUFDLEdBQUdQLEtBQUssQ0FBQ0wsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBTVMsRUFBQyxHQUFHSixLQUFLLENBQUNMLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFFBQVFMLEtBQUs7VUFDWCxLQUFLLEdBQUc7WUFDTlUsS0FBSyxDQUFDUixJQUFJLENBQUNZLEVBQUMsR0FBR0csQ0FBQyxDQUFDO1lBQ2pCO1VBQ0YsS0FBSyxHQUFHO1lBQ05QLEtBQUssQ0FBQ1IsSUFBSSxDQUFDWSxFQUFDLEdBQUdHLENBQUMsQ0FBQztZQUNqQjtVQUNGLEtBQUssR0FBRztZQUNOUCxLQUFLLENBQUNSLElBQUksQ0FBQ1ksRUFBQyxHQUFHRyxDQUFDLENBQUM7WUFDakI7VUFDRixLQUFLLEdBQUc7WUFDTlAsS0FBSyxDQUFDUixJQUFJLENBQUNZLEVBQUMsR0FBR0csQ0FBQyxDQUFDO1lBQ2pCO1VBQ0Y7WUFDRSxNQUFNLElBQUkzQixLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDdkM7TUFDRjtJQUNGO0VBQUMsU0FBQWdCLEdBQUE7SUFBQUssVUFBQSxDQUFBdEMsQ0FBQSxDQUFBaUMsR0FBQTtFQUFBO0lBQUFLLFVBQUEsQ0FBQUosQ0FBQTtFQUFBO0VBRUQsT0FBT0csS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhPLElBQU1RLGFBQWEsR0FBRztFQUMzQkMsR0FBRyxFQUFFQyxNQUFNO0VBQ1h6RCxVQUFVLEVBQUUwRCxLQUFLO0VBQ2pCckQsV0FBVyxFQUFFb0QsTUFBTTtFQUNuQmpELFFBQVEsRUFBRW1EO0FBQ1osQ0FBQztBQUFDLElBRW1CNUUsY0FBYztFQUNqQyxTQUFBQSxlQUFZVyxNQUFNLEVBQUU7SUFBQVIsZUFBQSxPQUFBSCxjQUFBO0lBQ2xCLElBQUksQ0FBQ2EsT0FBTyxHQUFHLElBQUk7SUFDbkIsSUFBSSxDQUFDSCxhQUFhLENBQUNDLE1BQU0sQ0FBQztFQUM1QjtFQUFDLE9BQUFKLFlBQUEsQ0FBQVAsY0FBQTtJQUFBUSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7TUFDcEIsSUFBSSxDQUFDRSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDQyxNQUFNLENBQUM4RCxHQUFHLENBQUM7TUFDakQsSUFBSSxDQUFDSSxhQUFhLENBQUNsRSxNQUFNLENBQUNNLFVBQVUsQ0FBQztNQUNyQyxJQUFJLENBQUNJLGNBQWMsQ0FBQ1YsTUFBTSxDQUFDVyxXQUFXLENBQUM7TUFDdkMsSUFBSSxDQUFDRSxXQUFXLENBQUNiLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDO0lBQ25DO0VBQUM7SUFBQWpCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvRSxhQUFhQSxDQUFDNUQsVUFBVSxFQUFFO01BQUEsSUFBQUwsS0FBQTtNQUN4QkssVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQzRELFNBQVMsRUFBSztRQUNoQ2xFLEtBQUksQ0FBQ0MsT0FBTyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQzhELFNBQVMsQ0FBQztNQUN2QyxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUF0RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBWSxjQUFjQSxDQUFDQyxXQUFXLEVBQUU7TUFDMUIsSUFBSSxDQUFDVCxPQUFPLENBQUNTLFdBQVcsR0FBR0EsV0FBVztJQUN4QztFQUFDO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFlLFdBQVdBLENBQUNDLFFBQVEsRUFBRTtNQUNwQixJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDbEMsSUFBSSxDQUFDWixPQUFPLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDO1VBQUEsT0FBS0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7UUFBQSxFQUFDO01BQzVEO0lBQ0Y7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNFLFVBQVVBLENBQUEsRUFBRztNQUNYLE9BQU8sSUFBSSxDQUFDbEUsT0FBTztJQUNyQjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RSxlQUFlQSxDQUFDbkUsT0FBTyxFQUFFO01BQ3ZCLElBQUlBLE9BQU8sWUFBWWIsY0FBYyxFQUFFO1FBQ3JDLElBQUksQ0FBQ2EsT0FBTyxDQUFDVSxNQUFNLENBQUNWLE9BQU8sQ0FBQ2tFLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDM0MsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDbEUsT0FBTyxDQUFDVSxNQUFNLENBQUNWLE9BQU8sQ0FBQztNQUM5QjtJQUNGO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0gsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUl3RDtBQUNoRixPQUFPLGlFQUFlLDJGQUFPLElBQUksMkZBQU8sVUFBVSwyRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBQ2lEO0FBQ0w7QUFDUztBQUNsQjtBQUM1QjtBQUNNO0FBRW5CLFNBQVNxRSxrQkFBa0JBLENBQUEsRUFBRztFQUNuQyxJQUFNQyxZQUFZLEdBQUcsSUFBSW5GLGlFQUFjLENBQUM7SUFDdEN5RSxHQUFHLEVBQUUsS0FBSztJQUNWeEQsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDO0lBQzdCSyxXQUFXLEVBQUUsRUFBRTtJQUNmRyxRQUFRLEVBQUU7RUFDWixDQUFDLENBQUM7RUFFRixJQUFNMkQsT0FBTyxHQUFHLElBQUlwRixpRUFBYyxDQUFDO0lBQ2pDeUUsR0FBRyxFQUFFLEtBQUs7SUFDVnhELFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUN2QkssV0FBVyxFQUFFLEVBQUU7SUFDZkcsUUFBUSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0VBRUYsSUFBTTRELFdBQVcsR0FBRyxJQUFJQyxLQUFLLENBQUNMLDhDQUFVLENBQUM7RUFDekNJLFdBQVcsQ0FBQ0UsTUFBTSxHQUFHLENBQUM7RUFFdEIsSUFBSUMsT0FBTyxHQUFHLElBQUk7RUFDbEIsSUFBTUMsV0FBVyxHQUFHLElBQUl4Rix1RUFBYSxDQUFDO0lBQ3BDd0UsR0FBRyxFQUFFLFFBQVE7SUFDYnhELFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUM1QkssV0FBVyxFQUFFLElBQUk7SUFDakJHLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBLEVBQVE7TUFDZCtELE9BQU8sR0FBRyxDQUFDQSxPQUFPO01BQ2xCQyxXQUFXLENBQUNwRSxjQUFjLENBQUNtRSxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztNQUNqREUsU0FBUyxDQUFDRixPQUFPLEVBQUVILFdBQVcsQ0FBQztJQUNqQztFQUNGLENBQUMsQ0FBQztFQUVGLElBQUlNLFNBQVMsR0FBRyxLQUFLO0VBQ3JCLElBQU1DLFdBQVcsR0FBRyxJQUFJM0YsdUVBQWEsQ0FBQztJQUNwQ3dFLEdBQUcsRUFBRSxRQUFRO0lBQ2J4RCxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDNUJLLFdBQVcsRUFBRSxJQUFJO0lBQ2pCRyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQSxFQUFRO01BQ2RrRSxTQUFTLEdBQUcsQ0FBQ0EsU0FBUztNQUN0QjdFLFFBQVEsQ0FBQytFLElBQUksQ0FBQzlFLFNBQVMsQ0FBQytFLE1BQU0sQ0FBQyxZQUFZLEVBQUVILFNBQVMsQ0FBQztNQUN2REMsV0FBVyxDQUFDdkUsY0FBYyxDQUFDc0UsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7TUFDbkRELFNBQVMsQ0FBQ0YsT0FBTyxFQUFFSCxXQUFXLENBQUM7SUFDakM7RUFDRixDQUFDLENBQUM7RUFFRkQsT0FBTyxDQUFDSixlQUFlLENBQUNTLFdBQVcsQ0FBQ1YsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUNqREssT0FBTyxDQUFDSixlQUFlLENBQUNZLFdBQVcsQ0FBQ2IsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUVqRCxJQUFNZ0IsYUFBYSxHQUFHO0lBQ3BCdEIsR0FBRyxFQUFFLFNBQVM7SUFDZHhELFVBQVUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BDSyxXQUFXLEVBQUUsRUFBRTtJQUNmRyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBRUQsSUFBTXVFLGFBQWEsR0FBRztJQUNwQnZCLEdBQUcsRUFBRSxPQUFPO0lBQ1p4RCxVQUFVLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztJQUNsQ0ssV0FBVyxFQUFFLEVBQUU7SUFDZkcsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNELElBQU13RSxPQUFPLEdBQUcsSUFBSWpHLGlFQUFjLENBQUNnRyxhQUFhLENBQUM7RUFDakQsSUFBTUUsY0FBYyxHQUFHRCxPQUFPLENBQUNsQixVQUFVLENBQUMsQ0FBQztFQUMzQ21CLGNBQWMsQ0FBQ0MsSUFBSSxHQUFHLE1BQU07RUFDNUJELGNBQWMsQ0FBQ3pGLEtBQUssR0FBRyxHQUFHO0VBQzFCeUYsY0FBYyxDQUFDeEUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNDLENBQUMsRUFBSztJQUNoREUsbUVBQWEsQ0FBQ0YsQ0FBQyxDQUFDO0lBQ2hCK0QsU0FBUyxDQUFDRixPQUFPLEVBQUVILFdBQVcsQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFFRixJQUFNZSxpQkFBaUIsR0FBRyxJQUFJcEcsaUVBQWMsQ0FBQytGLGFBQWEsQ0FBQztFQUMzREssaUJBQWlCLENBQUNwQixlQUFlLENBQUNpQixPQUFPLENBQUM7RUFFMUMsSUFBTUksWUFBWSxHQUFHLENBQ25CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDaEI7RUFFREEsWUFBWSxDQUFDbkYsT0FBTyxDQUFDLFVBQUNvRixHQUFHLEVBQUs7SUFDNUJBLEdBQUcsQ0FBQ3BGLE9BQU8sQ0FBQyxVQUFDcUYsSUFBSSxFQUFLO01BQ3BCLElBQU16QixTQUFTLEdBQUd2QixLQUFLLENBQUNnRCxJQUFJLENBQUMsSUFBSUEsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSztNQUM1RCxJQUFJOUUsUUFBUTtNQUVaLFFBQVE4RSxJQUFJO1FBQ1YsS0FBSyxJQUFJO1VBQ1A5RSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1lBQ2Z5RSxjQUFjLENBQUN6RixLQUFLLEdBQUcsR0FBRztZQUMxQmlGLFNBQVMsQ0FBQ0YsT0FBTyxFQUFFSCxXQUFXLENBQUM7VUFDakMsQ0FBQztVQUNEO1FBQ0YsS0FBSyxHQUFHO1VBQ041RCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1lBQ2Z5RSxjQUFjLENBQUN6RixLQUFLLEdBQUd5RixjQUFjLENBQUN6RixLQUFLLENBQUMrRixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUMvRGQsU0FBUyxDQUFDRixPQUFPLEVBQUVILFdBQVcsQ0FBQztVQUNqQyxDQUFDO1VBQ0Q7UUFDRixLQUFLLEtBQUs7VUFDUjVELFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7WUFDZixJQUFNZ0YsT0FBTyxHQUFHUCxjQUFjLENBQUN6RixLQUFLO1lBQ3BDLElBQU1rQyxLQUFLLEdBQUc4RCxPQUFPLENBQUM5RCxLQUFLLENBQUMsb0NBQW9DLENBQUM7WUFFakUsSUFBSUEsS0FBSyxFQUFFO2NBQ1QsSUFBTStELE1BQU0sR0FBRy9ELEtBQUssQ0FBQyxDQUFDLENBQUM7Y0FDdkIsSUFBSWdFLFdBQVc7Y0FDZixJQUFJRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0JELFdBQVcsR0FBR0QsTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ25DLENBQUMsTUFBTSxJQUFJRSxNQUFNLENBQUNFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakNELFdBQVcsdUJBQXVCO2NBQ3BDLENBQUMsTUFBTTtnQkFDTEEsV0FBVyxRQUFBN0MsTUFBQSxDQUFRNEMsTUFBTSxNQUFHO2NBQzlCO2NBRUFSLGNBQWMsQ0FBQ3pGLEtBQUssR0FDbEJnRyxPQUFPLENBQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDakQsTUFBTSxDQUFDLEdBQUdrRCxXQUFXO1lBQ2xEO1lBQ0FqQixTQUFTLENBQUNGLE9BQU8sRUFBRUgsV0FBVyxDQUFDO1VBQ2pDLENBQUM7VUFDRDtRQUNGLEtBQUssR0FBRztVQUNONUQsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztZQUNmLElBQU1vRixJQUFJLEdBQUdYLGNBQWMsQ0FBQ3pGLEtBQUs7WUFDakMsSUFBTWtDLEtBQUssR0FBR2tFLElBQUksQ0FBQ2xFLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztZQUVoRSxJQUFJQSxLQUFLLEVBQUU7Y0FDVCxJQUFNbUUsUUFBUSxHQUFHbkUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDM0IsSUFBTW9FLFFBQVEsR0FBR3BFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzNCLElBQU0rRCxNQUFNLEdBQUcvRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBRXZCLElBQU1xRSxjQUFjLE9BQUFsRCxNQUFBLENBQU9nRCxRQUFRLEVBQUFoRCxNQUFBLENBQUdpRCxRQUFRLE9BQUFqRCxNQUFBLENBQUlnRCxRQUFRLE9BQUFoRCxNQUFBLENBQUk0QyxNQUFNLFdBQVE7Y0FDNUVSLGNBQWMsQ0FBQ3pGLEtBQUssR0FBR3VHLGNBQWM7WUFDdkMsQ0FBQyxNQUFNO2NBQ0wsSUFBTUMsV0FBVyxHQUFHSixJQUFJLENBQUNsRSxLQUFLLENBQUMseUJBQXlCLENBQUM7Y0FDekQsSUFBSXNFLFdBQVcsRUFBRTtnQkFDZixJQUFNUCxPQUFNLEdBQUdPLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCZixjQUFjLENBQUN6RixLQUFLLEdBQ2xCb0csSUFBSSxDQUFDTCxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUNFLE9BQU0sQ0FBQ2pELE1BQU0sQ0FBQyxPQUFBSyxNQUFBLENBQU80QyxPQUFNLFdBQVE7Y0FDdEQ7WUFDRjtZQUNBaEIsU0FBUyxDQUFDRixPQUFPLEVBQUVILFdBQVcsQ0FBQztVQUNqQyxDQUFDO1VBQ0Q7UUFDRixLQUFLLEdBQUc7VUFDTjVELFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7WUFDZixJQUFJeUUsY0FBYyxDQUFDekYsS0FBSyxLQUFLLEdBQUcsRUFBRTtjQUNoQ3lGLGNBQWMsQ0FBQ3pGLEtBQUssR0FBRyxJQUFJO1lBQzdCLENBQUMsTUFBTTtjQUNMeUYsY0FBYyxDQUFDekYsS0FBSyxJQUFJLElBQUk7WUFDOUI7WUFDQWlGLFNBQVMsQ0FBQ0YsT0FBTyxFQUFFSCxXQUFXLENBQUM7VUFDakMsQ0FBQztVQUNEO1FBQ0YsS0FBSyxHQUFHO1VBQ041RCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1lBQ2YsSUFBTXlGLEtBQUssR0FBR2hCLGNBQWMsQ0FBQ3pGLEtBQUssQ0FDL0JnQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNsQkEsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDbEJBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQ2xCQSxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNsQkEsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFFckIsSUFBTTBFLE1BQU0sR0FBR2pGLCtEQUFTLENBQUNnRixLQUFLLENBQUM7WUFDL0JoQixjQUFjLENBQUN6RixLQUFLLEdBQUcwRyxNQUFNO1lBQzdCekIsU0FBUyxDQUFDRixPQUFPLEVBQUVILFdBQVcsQ0FBQztVQUNqQyxDQUFDO1VBQ0Q7UUFDRjtVQUNFNUQsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztZQUNmLElBQUl5RSxjQUFjLENBQUN6RixLQUFLLEtBQUssR0FBRyxFQUFFO2NBQ2hDeUYsY0FBYyxDQUFDekYsS0FBSyxHQUFHOEYsSUFBSTtZQUM3QixDQUFDLE1BQU07Y0FDTEwsY0FBYyxDQUFDekYsS0FBSyxJQUFJOEYsSUFBSTtZQUM5QjtZQUNBYixTQUFTLENBQUNGLE9BQU8sRUFBRUgsV0FBVyxDQUFDO1VBQ2pDLENBQUM7TUFDTDtNQUVBLElBQU0rQixNQUFNLEdBQUcsSUFBSW5ILHVFQUFhLENBQUM7UUFDL0J3RSxHQUFHLEVBQUUsUUFBUTtRQUNieEQsVUFBVSxFQUFFLENBQUM2RCxTQUFTLENBQUM7UUFDdkJ4RCxXQUFXLEVBQUVpRixJQUFJO1FBQ2pCOUUsUUFBUSxFQUFSQTtNQUNGLENBQUMsQ0FBQztNQUVGMkUsaUJBQWlCLENBQUNwQixlQUFlLENBQUNvQyxNQUFNLENBQUNyQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGSSxZQUFZLENBQUNILGVBQWUsQ0FBQ0ksT0FBTyxDQUFDO0VBQ3JDRCxZQUFZLENBQUNILGVBQWUsQ0FBQ29CLGlCQUFpQixDQUFDO0VBRS9DLE9BQU9qQixZQUFZLENBQUNKLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU1csU0FBU0EsQ0FBQ0YsT0FBTyxFQUFFSCxXQUFXLEVBQUU7RUFDdkMsSUFBSUcsT0FBTyxFQUFFO0lBQ1hILFdBQVcsQ0FBQ2dDLElBQUksQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFDMUYsQ0FBQztNQUFBLE9BQUsyRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTVGLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFDdEU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9NcUQ7QUFFckRiLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRCxJQUFNOEYsVUFBVSxHQUFHdEMsa0VBQWtCLENBQUMsQ0FBQztFQUN2Q3BFLFFBQVEsQ0FBQytFLElBQUksQ0FBQzRCLFdBQVcsQ0FBQ0QsVUFBVSxDQUFDO0FBQ3pDLENBQUMsQ0FBQzs7Ozs7O1VDTEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvZGFyay10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvdmlldy5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi1jcmVhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLmNzcz9kMWNlIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9lbGVtZW50LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvZGFyay10aGVtZS5jc3M/Njg2MSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdmlldy92aWV3LmNzcz8xMzMyIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3V0aWxzL2J1dHRvbi9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTs7RUFFZixhQUFhOztFQUViLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixlQUFlOztFQUVmLHlCQUF5Qjs7RUFFekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsZ0JBQWdCOztFQUVoQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keS5kYXJrLXRoZW1lIHtcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG59XHJcblxyXG5ib2R5LmRhcmstdGhlbWUgLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG59XHJcblxyXG5ib2R5LmRhcmstdGhlbWUgLmNhbGN1bGF0b3ItZGlzcGxheSB7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEyYTtcclxufVxyXG5cclxuYm9keS5kYXJrLXRoZW1lIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbmJvZHkuZGFyay10aGVtZSAuY29udHJvbC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgXHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXcvZGFyay10aGVtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCOztFQUV6QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keS5kYXJrLXRoZW1lIHtcXHJcXG4gIGNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLXRoZW1lIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstdGhlbWUgLmNhbGN1bGF0b3ItZGlzcGxheSB7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay10aGVtZSBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstdGhlbWUgLmNvbnRyb2wtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc291bmQtYnV0dG9uLFxyXG4udGhlbWUtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAgMCAwIC8gMjAlKTtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAgMCAwIC8gMTAlKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC92aWV3L3ZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLGFBQWE7RUFDYixTQUFTOztFQUVULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTOztFQUVULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQix5QkFBeUI7RUFDekIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIseUJBQXlCO0VBQ3pCLDZDQUE2QztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zb3VuZC1idXR0b24sXFxyXFxuLnRoZW1lLWJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAgMCAwIC8gMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwIDAgMCAvIDEwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYnV0dG9uLmNzcyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi9lbGVtZW50LWNyZWF0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uQ3JlYXRvciBleHRlbmRzIEVsZW1lbnRDcmVhdG9yIHtcclxuICBjcmVhdGVFbGVtZW50KHBhcmFtcykge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmIChwYXJhbXMuY2xhc3NOYW1lcykge1xyXG4gICAgICBwYXJhbXMuY2xhc3NOYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5zZXRUZXh0Q29udGVudChwYXJhbXMudGV4dENvbnRlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5zZXRDYWxsYmFjayhwYXJhbXMuY2FsbGJhY2spO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNhbGxiYWNrKGUpKTtcclxuICB9XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChldmVudCkge1xyXG4gIGNvbnN0IGFsbG93ZWRLZXlzID0gW1xyXG4gICAgJzAnLFxyXG4gICAgJzEnLFxyXG4gICAgJzInLFxyXG4gICAgJzMnLFxyXG4gICAgJzQnLFxyXG4gICAgJzUnLFxyXG4gICAgJzYnLFxyXG4gICAgJzcnLFxyXG4gICAgJzgnLFxyXG4gICAgJzknLFxyXG4gICAgJ0JhY2tzcGFjZScsXHJcbiAgICAnRGVsZXRlJyxcclxuICAgICdBcnJvd0xlZnQnLFxyXG4gICAgJ0Fycm93UmlnaHQnLFxyXG4gICAgJ0VudGVyJyxcclxuICAgICcrJyxcclxuICAgICctJyxcclxuICAgICcqJyxcclxuICAgICcvJyxcclxuICAgICcsJyxcclxuICAgICcoJyxcclxuICAgICcpJyxcclxuICBdO1xyXG5cclxuICBpZiAoIWFsbG93ZWRLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlKGV4cHJlc3Npb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemUoZXhwcmVzc2lvbik7XHJcbiAgICBjb25zdCBycG4gPSB0b1JQTih0b2tlbnMpO1xyXG4gICAgcmV0dXJuIGV2YWx1YXRlUlBOKHJwbik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuICdFcnJvcic7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2tlbml6ZShleHByZXNzaW9uKSB7XHJcbiAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZSgvXFwoXFxzKi1cXHMqKFxcZCsoXFwuXFxkKyk/KVxccypcXCkvZywgJygwLSQxKScpO1xyXG5cclxuICBjb25zdCByZWdleCA9IC/iiJp8XFxkKyhcXC5cXGQrKT98WytcXC0qLygpJV0vZztcclxuICBjb25zdCB0b2tlbnMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ2V4KTtcclxuXHJcbiAgaWYgKCF0b2tlbnMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBleHByZXNzaW9uJyk7XHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9SUE4odG9rZW5zKSB7XHJcbiAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgY29uc3Qgb3BlcmF0b3JzID0gW107XHJcbiAgY29uc3QgcHJlY2VkZW5jZSA9IHsgJysnOiAxLCAnLSc6IDEsICcqJzogMiwgJy8nOiAyLCAn4oiaJzogMyB9O1xyXG5cclxuICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xyXG4gICAgaWYgKCFpc05hTih0b2tlbikpIHtcclxuICAgICAgb3V0cHV0LnB1c2godG9rZW4pO1xyXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ+KImicpIHtcclxuICAgICAgb3BlcmF0b3JzLnB1c2godG9rZW4pO1xyXG4gICAgfSBlbHNlIGlmICgnKy0qLyXiiJonLmluY2x1ZGVzKHRva2VuKSkge1xyXG4gICAgICB3aGlsZSAoXHJcbiAgICAgICAgb3BlcmF0b3JzLmxlbmd0aCAmJlxyXG4gICAgICAgIHByZWNlZGVuY2Vbb3BlcmF0b3JzLmF0KC0xKV0gPj0gcHJlY2VkZW5jZVt0b2tlbl0gJiZcclxuICAgICAgICBvcGVyYXRvcnMuYXQoLTEpICE9PSAnKCdcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3V0cHV0LnB1c2gob3BlcmF0b3JzLnBvcCgpKTtcclxuICAgICAgfVxyXG4gICAgICBvcGVyYXRvcnMucHVzaCh0b2tlbik7XHJcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKCcpIHtcclxuICAgICAgb3BlcmF0b3JzLnB1c2godG9rZW4pO1xyXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJyknKSB7XHJcbiAgICAgIHdoaWxlIChvcGVyYXRvcnMubGVuZ3RoICYmIG9wZXJhdG9ycy5hdCgtMSkgIT09ICcoJykge1xyXG4gICAgICAgIG91dHB1dC5wdXNoKG9wZXJhdG9ycy5wb3AoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wZXJhdG9ycy5hdCgtMSkgPT09ICcoJykgb3BlcmF0b3JzLnBvcCgpO1xyXG5cclxuICAgICAgaWYgKG9wZXJhdG9ycy5hdCgtMSkgPT09ICfiiJonKSB7XHJcbiAgICAgICAgb3V0cHV0LnB1c2gob3BlcmF0b3JzLnBvcCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dC5jb25jYXQob3BlcmF0b3JzLnJldmVyc2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2YWx1YXRlUlBOKHJwbikge1xyXG4gIGNvbnN0IHN0YWNrID0gW107XHJcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBycG4pIHtcclxuICAgIGlmICghaXNOYU4odG9rZW4pKSB7XHJcbiAgICAgIHN0YWNrLnB1c2gocGFyc2VGbG9hdCh0b2tlbikpO1xyXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ+KImicpIHtcclxuICAgICAgY29uc3QgYSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBpZiAoYSA8IDApIHRocm93IG5ldyBFcnJvcignU3F1YXJlIHJvb3Qgb2YgbmVnYXRpdmUgbnVtYmVyJyk7XHJcbiAgICAgIHN0YWNrLnB1c2goTWF0aC5zcXJ0KGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgY29uc3QgYSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGEgKyBiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgc3RhY2sucHVzaChhIC0gYik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgIHN0YWNrLnB1c2goYSAqIGIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGEgLyBiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gb3BlcmF0b3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YWNrWzBdO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFbGVtZW50UGFyYW1zID0ge1xyXG4gIHRhZzogU3RyaW5nLFxyXG4gIGNsYXNzTmFtZXM6IEFycmF5LFxyXG4gIHRleHRDb250ZW50OiBTdHJpbmcsXHJcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY3JlYXRlRWxlbWVudChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudChwYXJhbXMpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XHJcbiAgICB0aGlzLnNldENzc0NsYXNzZXMocGFyYW1zLmNsYXNzTmFtZXMpO1xyXG4gICAgdGhpcy5zZXRUZXh0Q29udGVudChwYXJhbXMudGV4dENvbnRlbnQpO1xyXG4gICAgdGhpcy5zZXRDYWxsYmFjayhwYXJhbXMuY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3NzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XHJcbiAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FsbGJhY2soZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBhZGRJbm5lckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50Q3JlYXRvcikge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQuZ2V0RWxlbWVudCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLXRoZW1lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay10aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZpZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQnV0dG9uQ3JlYXRvciBmcm9tICcuLi91dGlscy9idXR0b24vYnV0dG9uLWNyZWF0b3IuanMnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vdXRpbHMvZWxlbWVudC1jcmVhdG9yLmpzJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCwgY2FsY3VsYXRlIH0gZnJvbSAnLi4vdXRpbHMvY2FsY3VsYXRvci5qcyc7XHJcbmltcG9ydCBjbGlja1NvdW5kIGZyb20gJy4uLy4uL2Fzc2V0cy9jbGljay5tcDMnO1xyXG5pbXBvcnQgJy4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4vZGFyay10aGVtZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGN1bGF0b3JVSSgpIHtcclxuICBjb25zdCBhcHBDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnYXBwLWNvbnRhaW5lciddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNpZGViYXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnc2lkZWJhciddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvblNvdW5kID0gbmV3IEF1ZGlvKGNsaWNrU291bmQpO1xyXG4gIGJ1dHRvblNvdW5kLnZvbHVtZSA9IDE7XHJcblxyXG4gIGxldCBzb3VuZE9uID0gdHJ1ZTtcclxuICBjb25zdCBzb3VuZEJ1dHRvbiA9IG5ldyBCdXR0b25DcmVhdG9yKHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICBjbGFzc05hbWVzOiBbJ3NvdW5kLWJ1dHRvbiddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICfwn5SKJyxcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIHNvdW5kT24gPSAhc291bmRPbjtcclxuICAgICAgc291bmRCdXR0b24uc2V0VGV4dENvbnRlbnQoc291bmRPbiA/ICfwn5SKJyA6ICfwn5SHJyk7XHJcbiAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBsZXQgZGFya1RoZW1lID0gZmFsc2U7XHJcbiAgY29uc3QgdGhlbWVCdXR0b24gPSBuZXcgQnV0dG9uQ3JlYXRvcih7XHJcbiAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgY2xhc3NOYW1lczogWyd0aGVtZS1idXR0b24nXSxcclxuICAgIHRleHRDb250ZW50OiAn8J+MnicsXHJcbiAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICBkYXJrVGhlbWUgPSAhZGFya1RoZW1lO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstdGhlbWUnLCBkYXJrVGhlbWUpO1xyXG4gICAgICB0aGVtZUJ1dHRvbi5zZXRUZXh0Q29udGVudChkYXJrVGhlbWUgPyAn8J+MmScgOiAn8J+MnicpO1xyXG4gICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgc2lkZWJhci5hZGRJbm5lckVsZW1lbnQoc291bmRCdXR0b24uZ2V0RWxlbWVudCgpKTtcclxuICBzaWRlYmFyLmFkZElubmVyRWxlbWVudCh0aGVtZUJ1dHRvbi5nZXRFbGVtZW50KCkpO1xyXG5cclxuICBjb25zdCBlbGVtZW50UGFyYW1zID0ge1xyXG4gICAgdGFnOiAnc2VjdGlvbicsXHJcbiAgICBjbGFzc05hbWVzOiBbJ2NhbGN1bGF0b3ItY29udGFpbmVyJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICBjYWxsYmFjazogbnVsbCxcclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwbGF5UGFyYW1zID0ge1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgY2xhc3NOYW1lczogWydjYWxjdWxhdG9yLWRpc3BsYXknXSxcclxuICAgIHRleHRDb250ZW50OiAnJyxcclxuICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gIH07XHJcbiAgY29uc3QgZGlzcGxheSA9IG5ldyBFbGVtZW50Q3JlYXRvcihkaXNwbGF5UGFyYW1zKTtcclxuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGRpc3BsYXkuZ2V0RWxlbWVudCgpO1xyXG4gIGRpc3BsYXlFbGVtZW50LnR5cGUgPSAndGV4dCc7XHJcbiAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSAnMCc7XHJcbiAgZGlzcGxheUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICB2YWxpZGF0ZUlucHV0KGUpO1xyXG4gICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRvckVsZW1lbnQgPSBuZXcgRWxlbWVudENyZWF0b3IoZWxlbWVudFBhcmFtcyk7XHJcbiAgY2FsY3VsYXRvckVsZW1lbnQuYWRkSW5uZXJFbGVtZW50KGRpc3BsYXkpO1xyXG5cclxuICBjb25zdCBidXR0b25MYXlvdXQgPSBbXHJcbiAgICBbJ0FDJywgJygnLCAnKScsICfDlyddLFxyXG4gICAgWyfiiJonLCAnJScsICcrLy0nLCAnw7cnXSxcclxuICAgIFsnNycsICc4JywgJzknLCAn4oiSJ10sXHJcbiAgICBbJzQnLCAnNScsICc2JywgJysnXSxcclxuICAgIFsnMScsICcyJywgJzMnLCAnPSddLFxyXG4gICAgWycwJywgJy4nLCAn4oyrJ10sXHJcbiAgXTtcclxuXHJcbiAgYnV0dG9uTGF5b3V0LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgcm93LmZvckVhY2goKHRleHQpID0+IHtcclxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gaXNOYU4odGV4dCkgJiYgdGV4dCAhPT0gJ8K3JyA/ICdvcCcgOiAnbnVtJztcclxuICAgICAgbGV0IGNhbGxiYWNrO1xyXG5cclxuICAgICAgc3dpdGNoICh0ZXh0KSB7XHJcbiAgICAgICAgY2FzZSAnQUMnOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gJzAnO1xyXG4gICAgICAgICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ+KMqyc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSBkaXNwbGF5RWxlbWVudC52YWx1ZS5zbGljZSgwLCAtMSkgfHwgJzAnO1xyXG4gICAgICAgICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJysvLSc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRpc3BsYXlFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGN1cnJlbnQubWF0Y2goLyhcXCgtP1xcZCsoXFwuXFxkKyk/XFwpfC0/XFxkKyhcXC5cXGQrKT8pJC8pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgICAgbGV0IHJlcGxhY2VtZW50O1xyXG4gICAgICAgICAgICAgIGlmIChudW1iZXIuc3RhcnRzV2l0aCgnKC0nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBudW1iZXIuc2xpY2UoMiwgLTEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyLnN0YXJ0c1dpdGgoJy0nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBgKCRudW1iZXIuc2xpY2UoMSl9YDtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBgKC0ke251bWJlcn0pYDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuc2xpY2UoMCwgLW51bWJlci5sZW5ndGgpICsgcmVwbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gZGlzcGxheUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gZXhwci5tYXRjaCgvKC4rPykoWytcXC0qL10pKFxcKD8tP1xcZCsoXFwuXFxkKyk/XFwpPykkLyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCBiYXNlRXhwciA9IG1hdGNoWzFdOyAvLyBleHByZXNzaW9uIHcvbyBsYXN0IG51bVxyXG4gICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gbWF0Y2hbMl07IC8vIG9wZXJhdG9yIGJlZm9yZSBudW1cclxuICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSBtYXRjaFszXTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUV4cHIgPSBgKCR7YmFzZUV4cHJ9JHtvcGVyYXRvcn0oJHtiYXNlRXhwcn0qJHtudW1iZXJ9LzEwMCkpYDtcclxuICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9IHBlcmNlbnRhZ2VFeHByO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNpbXBsZU1hdGNoID0gZXhwci5tYXRjaCgvKC0/XFxkKyhcXC5cXGQrKT8pKD8hLipcXGQpLyk7XHJcbiAgICAgICAgICAgICAgaWYgKHNpbXBsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSBzaW1wbGVNYXRjaFswXTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgZXhwci5zbGljZSgwLCAtbnVtYmVyLmxlbmd0aCkgKyBgKCR7bnVtYmVyfSowLjAxKWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn4oiaJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheUVsZW1lbnQudmFsdWUgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gJ+KImignO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlICs9ICfiiJooJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz0nOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZGlzcGxheUVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvw5cvZywgJyonKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC/Dty9nLCAnLycpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL+KIki9nLCAnLScpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL8K3L2csICcuJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAnLicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlKGlucHV0KTtcclxuICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheUVsZW1lbnQudmFsdWUgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSArPSB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uQ3JlYXRvcih7XHJcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcclxuICAgICAgICBjbGFzc05hbWVzOiBbY2xhc3NOYW1lXSxcclxuICAgICAgICB0ZXh0Q29udGVudDogdGV4dCxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjYWxjdWxhdG9yRWxlbWVudC5hZGRJbm5lckVsZW1lbnQoYnV0dG9uLmdldEVsZW1lbnQoKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgYXBwQ29udGFpbmVyLmFkZElubmVyRWxlbWVudChzaWRlYmFyKTtcclxuICBhcHBDb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGNhbGN1bGF0b3JFbGVtZW50KTtcclxuXHJcbiAgcmV0dXJuIGFwcENvbnRhaW5lci5nZXRFbGVtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCkge1xyXG4gIGlmIChzb3VuZE9uKSB7XHJcbiAgICBidXR0b25Tb3VuZC5wbGF5KCkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCdBdWRpbyBwbGF5IGVycm9yOicsIGUpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ2FsY3VsYXRvclVJIH0gZnJvbSBcIi4vYXBwL3ZpZXcvdmlld1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbGN1bGF0b3IgPSBjcmVhdGVDYWxjdWxhdG9yVUkoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvdmlldy92aWV3LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC91dGlscy9lbGVtZW50LWNyZWF0b3IuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3V0aWxzL2NhbGN1bGF0b3IuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi1jcmVhdG9yLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkVsZW1lbnRDcmVhdG9yIiwiQnV0dG9uQ3JlYXRvciIsIl9FbGVtZW50Q3JlYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJhbXMiLCJfdGhpcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsImJ1dHRvbkVsZW1lbnQiLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwic2V0Q2FsbGJhY2siLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVmYXVsdCIsInZhbGlkYXRlSW5wdXQiLCJldmVudCIsImFsbG93ZWRLZXlzIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsImNhbGN1bGF0ZSIsImV4cHJlc3Npb24iLCJ0b2tlbnMiLCJ0b2tlbml6ZSIsInJwbiIsInRvUlBOIiwiZXZhbHVhdGVSUE4iLCJyZXBsYWNlIiwicmVnZXgiLCJtYXRjaCIsIkVycm9yIiwib3V0cHV0Iiwib3BlcmF0b3JzIiwicHJlY2VkZW5jZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ0b2tlbiIsImlzTmFOIiwicHVzaCIsImxlbmd0aCIsImF0IiwicG9wIiwiZXJyIiwiZiIsImNvbmNhdCIsInJldmVyc2UiLCJzdGFjayIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJwYXJzZUZsb2F0IiwiYSIsIk1hdGgiLCJzcXJ0IiwiYiIsIkVsZW1lbnRQYXJhbXMiLCJ0YWciLCJTdHJpbmciLCJBcnJheSIsIkZ1bmN0aW9uIiwic2V0Q3NzQ2xhc3NlcyIsImNsYXNzTmFtZSIsImdldEVsZW1lbnQiLCJhZGRJbm5lckVsZW1lbnQiLCJjbGlja1NvdW5kIiwiY3JlYXRlQ2FsY3VsYXRvclVJIiwiYXBwQ29udGFpbmVyIiwic2lkZWJhciIsImJ1dHRvblNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJzb3VuZE9uIiwic291bmRCdXR0b24iLCJwbGF5U291bmQiLCJkYXJrVGhlbWUiLCJ0aGVtZUJ1dHRvbiIsImJvZHkiLCJ0b2dnbGUiLCJlbGVtZW50UGFyYW1zIiwiZGlzcGxheVBhcmFtcyIsImRpc3BsYXkiLCJkaXNwbGF5RWxlbWVudCIsInR5cGUiLCJjYWxjdWxhdG9yRWxlbWVudCIsImJ1dHRvbkxheW91dCIsInJvdyIsInRleHQiLCJzbGljZSIsImN1cnJlbnQiLCJudW1iZXIiLCJyZXBsYWNlbWVudCIsInN0YXJ0c1dpdGgiLCJleHByIiwiYmFzZUV4cHIiLCJvcGVyYXRvciIsInBlcmNlbnRhZ2VFeHByIiwic2ltcGxlTWF0Y2giLCJpbnB1dCIsInJlc3VsdCIsImJ1dHRvbiIsInBsYXkiLCJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRvciIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==