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

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

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

  width: 50px;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-size: 1.5em;

  background-color: #e0e0e0;
}
`, "",{"version":3,"sources":["webpack://./src/app/utils/button/button.css"],"names":[],"mappings":"AAAA;EACE,eAAe;;EAEf,aAAa;EACb,qCAAqC;EACrC,SAAS;;EAET,aAAa;EACb,YAAY;EACZ,kBAAkB;;EAElB,eAAe;;EAEf,yBAAyB;;EAEzB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;;EAEf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;;EAEnB,gBAAgB;;EAEhB,yBAAyB;AAC3B","sourcesContent":[".button-container {\r\n  cursor: pointer;\r\n\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n\r\n  padding: 15px;\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-size: 18px;\r\n\r\n  background-color: #e0e0e0;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.button-container:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n\r\n  font-size: 1.5em;\r\n\r\n  background-color: #e0e0e0;\r\n}\r\n"],"sourceRoot":""}]);
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

  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);
}

body.dark-theme {
  color: #eee;
  background-color: #121212;
}

body.dark-theme .calculator-container {
  background-color: #1e1e1e;
}

body.dark-theme .calculator-display {
  color: #fff;
  background-color: #2a2a2a;
}

body.dark-theme button {
  border: none;
  color: #fff;
  background-color: #333;
}
`, "",{"version":3,"sources":["webpack://./src/app/view/view.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,SAAS;;EAET,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;;EAET,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,yBAAyB;EACzB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;;EAEnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;;EAElB,eAAe;EACf,iBAAiB;;EAEjB,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB","sourcesContent":["body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  height: 100vh;\r\n  margin: 0;\r\n\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.sound-button,\r\n.theme-button {\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  font-size: 24px;\r\n}\r\n\r\n.calculator-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n\r\n  width: 500px;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n\r\n  background-color: #f0f0f0;\r\n  box-shadow: 0 4px 8px rgba(0 0 0 / 20%);\r\n}\r\n\r\n.calculator-display {\r\n  grid-column: span 4;\r\n\r\n  margin-bottom: 10px;\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n\r\n  font-size: 24px;\r\n  text-align: right;\r\n\r\n  background-color: #fff;\r\n  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);\r\n}\r\n\r\nbody.dark-theme {\r\n  color: #eee;\r\n  background-color: #121212;\r\n}\r\n\r\nbody.dark-theme .calculator-container {\r\n  background-color: #1e1e1e;\r\n}\r\n\r\nbody.dark-theme .calculator-display {\r\n  color: #fff;\r\n  background-color: #2a2a2a;\r\n}\r\n\r\nbody.dark-theme button {\r\n  border: none;\r\n  color: #fff;\r\n  background-color: #333;\r\n}\r\n"],"sourceRoot":""}]);
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
    classNames: [],
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
  var buttonLayout = [['AC', '(', ')', '×'], ['√', '%', '+/-', '÷'], ['7', '8', '9', '−'], ['4', '5', '6', '+'], ['1', '2', '3', '='], ['0', '·', '⌫']];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvdmlldy5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi1jcmVhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLmNzcz9kMWNlIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9lbGVtZW50LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvdmlldy5jc3M/MTMzMiIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdmlldy92aWV3LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlOztFQUVmLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUzs7RUFFVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsZUFBZTs7RUFFZix5QkFBeUI7O0VBRXpCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsZ0JBQWdCOztFQUVoQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zb3VuZC1idXR0b24sXHJcbi50aGVtZS1idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRvci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcblxyXG4gIHdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCAwIDAgLyAyMCUpO1xyXG59XHJcblxyXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG5ib2R5LmRhcmstdGhlbWUge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbn1cclxuXHJcbmJvZHkuZGFyay10aGVtZSAuY2FsY3VsYXRvci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbn1cclxuXHJcbmJvZHkuZGFyay10aGVtZSAuY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xyXG59XHJcblxyXG5ib2R5LmRhcmstdGhlbWUgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy92aWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixhQUFhO0VBQ2IsU0FBUzs7RUFFVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUzs7RUFFVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdW5kLWJ1dHRvbixcXHJcXG4udGhlbWUtYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCAwIDAgLyAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxyXFxuXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAgMCAwIC8gMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLXRoZW1lIHtcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLXRoZW1lIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstdGhlbWUgLmNhbGN1bGF0b3ItZGlzcGxheSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay10aGVtZSBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2J1dHRvbi5jc3MnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vZWxlbWVudC1jcmVhdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkNyZWF0b3IgZXh0ZW5kcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY3JlYXRlRWxlbWVudChwYXJhbXMpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmNsYXNzTmFtZXMpIHtcclxuICAgICAgcGFyYW1zLmNsYXNzTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuc2V0VGV4dENvbnRlbnQocGFyYW1zLnRleHRDb250ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuc2V0Q2FsbGJhY2socGFyYW1zLmNhbGxiYWNrKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dENvbnRlbnQodGV4dENvbnRlbnQpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjYWxsYmFjayhlKSk7XHJcbiAgfVxyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoZXZlbnQpIHtcclxuICBjb25zdCBhbGxvd2VkS2V5cyA9IFtcclxuICAgICcwJyxcclxuICAgICcxJyxcclxuICAgICcyJyxcclxuICAgICczJyxcclxuICAgICc0JyxcclxuICAgICc1JyxcclxuICAgICc2JyxcclxuICAgICc3JyxcclxuICAgICc4JyxcclxuICAgICc5JyxcclxuICAgICdCYWNrc3BhY2UnLFxyXG4gICAgJ0RlbGV0ZScsXHJcbiAgICAnQXJyb3dMZWZ0JyxcclxuICAgICdBcnJvd1JpZ2h0JyxcclxuICAgICdFbnRlcicsXHJcbiAgICAnKycsXHJcbiAgICAnLScsXHJcbiAgICAnKicsXHJcbiAgICAnLycsXHJcbiAgICAnLCcsXHJcbiAgICAnKCcsXHJcbiAgICAnKScsXHJcbiAgXTtcclxuXHJcbiAgaWYgKCFhbGxvd2VkS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZShleHByZXNzaW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplKGV4cHJlc3Npb24pO1xyXG4gICAgY29uc3QgcnBuID0gdG9SUE4odG9rZW5zKTtcclxuICAgIHJldHVybiBldmFsdWF0ZVJQTihycG4pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiAnRXJyb3InO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9rZW5pemUoZXhwcmVzc2lvbikge1xyXG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnJlcGxhY2UoL1xcKFxccyotXFxzKihcXGQrKFxcLlxcZCspPylcXHMqXFwpL2csICcoMC0kMSknKTtcclxuXHJcbiAgY29uc3QgcmVnZXggPSAv4oiafFxcZCsoXFwuXFxkKyk/fFsrXFwtKi8oKSVdL2c7XHJcbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5tYXRjaChyZWdleCk7XHJcblxyXG4gIGlmICghdG9rZW5zKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZXhwcmVzc2lvbicpO1xyXG4gIHJldHVybiB0b2tlbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvUlBOKHRva2Vucykge1xyXG4gIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gIGNvbnN0IG9wZXJhdG9ycyA9IFtdO1xyXG4gIGNvbnN0IHByZWNlZGVuY2UgPSB7ICcrJzogMSwgJy0nOiAxLCAnKic6IDIsICcvJzogMiwgJ+KImic6IDMgfTtcclxuXHJcbiAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcclxuICAgIGlmICghaXNOYU4odG9rZW4pKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcclxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICfiiJonKSB7XHJcbiAgICAgIG9wZXJhdG9ycy5wdXNoKHRva2VuKTtcclxuICAgIH0gZWxzZSBpZiAoJystKi8l4oiaJy5pbmNsdWRlcyh0b2tlbikpIHtcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgIG9wZXJhdG9ycy5sZW5ndGggJiZcclxuICAgICAgICBwcmVjZWRlbmNlW29wZXJhdG9ycy5hdCgtMSldID49IHByZWNlZGVuY2VbdG9rZW5dICYmXHJcbiAgICAgICAgb3BlcmF0b3JzLmF0KC0xKSAhPT0gJygnXHJcbiAgICAgICkge1xyXG4gICAgICAgIG91dHB1dC5wdXNoKG9wZXJhdG9ycy5wb3AoKSk7XHJcbiAgICAgIH1cclxuICAgICAgb3BlcmF0b3JzLnB1c2godG9rZW4pO1xyXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJygnKSB7XHJcbiAgICAgIG9wZXJhdG9ycy5wdXNoKHRva2VuKTtcclxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcpJykge1xyXG4gICAgICB3aGlsZSAob3BlcmF0b3JzLmxlbmd0aCAmJiBvcGVyYXRvcnMuYXQoLTEpICE9PSAnKCcpIHtcclxuICAgICAgICBvdXRwdXQucHVzaChvcGVyYXRvcnMucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcGVyYXRvcnMuYXQoLTEpID09PSAnKCcpIG9wZXJhdG9ycy5wb3AoKTtcclxuXHJcbiAgICAgIGlmIChvcGVyYXRvcnMuYXQoLTEpID09PSAn4oiaJykge1xyXG4gICAgICAgIG91dHB1dC5wdXNoKG9wZXJhdG9ycy5wb3AoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRwdXQuY29uY2F0KG9wZXJhdG9ycy5yZXZlcnNlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmFsdWF0ZVJQTihycG4pIHtcclxuICBjb25zdCBzdGFjayA9IFtdO1xyXG4gIGZvciAoY29uc3QgdG9rZW4gb2YgcnBuKSB7XHJcbiAgICBpZiAoIWlzTmFOKHRva2VuKSkge1xyXG4gICAgICBzdGFjay5wdXNoKHBhcnNlRmxvYXQodG9rZW4pKTtcclxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICfiiJonKSB7XHJcbiAgICAgIGNvbnN0IGEgPSBzdGFjay5wb3AoKTtcclxuICAgICAgaWYgKGEgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ1NxdWFyZSByb290IG9mIG5lZ2F0aXZlIG51bWJlcicpO1xyXG4gICAgICBzdGFjay5wdXNoKE1hdGguc3FydChhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBiID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGNvbnN0IGEgPSBzdGFjay5wb3AoKTtcclxuICAgICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgc3RhY2sucHVzaChhICsgYik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgIHN0YWNrLnB1c2goYSAtIGIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGEgKiBiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgc3RhY2sucHVzaChhIC8gYik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG9wZXJhdG9yJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdGFja1swXTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgRWxlbWVudFBhcmFtcyA9IHtcclxuICB0YWc6IFN0cmluZyxcclxuICBjbGFzc05hbWVzOiBBcnJheSxcclxuICB0ZXh0Q29udGVudDogU3RyaW5nLFxyXG4gIGNhbGxiYWNrOiBGdW5jdGlvbixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRDcmVhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQocGFyYW1zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy50YWcpO1xyXG4gICAgdGhpcy5zZXRDc3NDbGFzc2VzKHBhcmFtcy5jbGFzc05hbWVzKTtcclxuICAgIHRoaXMuc2V0VGV4dENvbnRlbnQocGFyYW1zLnRleHRDb250ZW50KTtcclxuICAgIHRoaXMuc2V0Q2FsbGJhY2socGFyYW1zLmNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIHNldENzc0NsYXNzZXMoY2xhc3NOYW1lcykge1xyXG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dENvbnRlbnQodGV4dENvbnRlbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNhbGxiYWNrKGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYWRkSW5uZXJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudENyZWF0b3IpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50LmdldEVsZW1lbnQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZpZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQnV0dG9uQ3JlYXRvciBmcm9tICcuLi91dGlscy9idXR0b24vYnV0dG9uLWNyZWF0b3IuanMnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vdXRpbHMvZWxlbWVudC1jcmVhdG9yLmpzJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCwgY2FsY3VsYXRlIH0gZnJvbSAnLi4vdXRpbHMvY2FsY3VsYXRvci5qcyc7XHJcbmltcG9ydCBjbGlja1NvdW5kIGZyb20gJy4uLy4uL2Fzc2V0cy9jbGljay5tcDMnO1xyXG5pbXBvcnQgJy4vdmlldy5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGN1bGF0b3JVSSgpIHtcclxuICBjb25zdCBhcHBDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnYXBwLWNvbnRhaW5lciddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNpZGViYXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnc2lkZWJhciddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvblNvdW5kID0gbmV3IEF1ZGlvKGNsaWNrU291bmQpO1xyXG4gIGJ1dHRvblNvdW5kLnZvbHVtZSA9IDE7XHJcblxyXG4gIGxldCBzb3VuZE9uID0gdHJ1ZTtcclxuICBjb25zdCBzb3VuZEJ1dHRvbiA9IG5ldyBCdXR0b25DcmVhdG9yKHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICBjbGFzc05hbWVzOiBbJ3NvdW5kLWJ1dHRvbiddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICfwn5SKJyxcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIHNvdW5kT24gPSAhc291bmRPbjtcclxuICAgICAgc291bmRCdXR0b24uc2V0VGV4dENvbnRlbnQoc291bmRPbiA/ICfwn5SKJyA6ICfwn5SHJyk7XHJcbiAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBsZXQgZGFya1RoZW1lID0gZmFsc2U7XHJcbiAgY29uc3QgdGhlbWVCdXR0b24gPSBuZXcgQnV0dG9uQ3JlYXRvcih7XHJcbiAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgY2xhc3NOYW1lczogW10sXHJcbiAgICB0ZXh0Q29udGVudDogJ/CfjJ4nLFxyXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgZGFya1RoZW1lID0gIWRhcmtUaGVtZTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLXRoZW1lJywgZGFya1RoZW1lKTtcclxuICAgICAgdGhlbWVCdXR0b24uc2V0VGV4dENvbnRlbnQoZGFya1RoZW1lID8gJ/CfjJknIDogJ/CfjJ4nKTtcclxuICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHNpZGViYXIuYWRkSW5uZXJFbGVtZW50KHNvdW5kQnV0dG9uLmdldEVsZW1lbnQoKSk7XHJcbiAgc2lkZWJhci5hZGRJbm5lckVsZW1lbnQodGhlbWVCdXR0b24uZ2V0RWxlbWVudCgpKTtcclxuXHJcbiAgY29uc3QgZWxlbWVudFBhcmFtcyA9IHtcclxuICAgIHRhZzogJ3NlY3Rpb24nLFxyXG4gICAgY2xhc3NOYW1lczogWydjYWxjdWxhdG9yLWNvbnRhaW5lciddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheVBhcmFtcyA9IHtcclxuICAgIHRhZzogJ2lucHV0JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnY2FsY3VsYXRvci1kaXNwbGF5J10sXHJcbiAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICBjYWxsYmFjazogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IGRpc3BsYXkgPSBuZXcgRWxlbWVudENyZWF0b3IoZGlzcGxheVBhcmFtcyk7XHJcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBkaXNwbGF5LmdldEVsZW1lbnQoKTtcclxuICBkaXNwbGF5RWxlbWVudC50eXBlID0gJ3RleHQnO1xyXG4gIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gJzAnO1xyXG4gIGRpc3BsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgdmFsaWRhdGVJbnB1dChlKTtcclxuICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0b3JFbGVtZW50ID0gbmV3IEVsZW1lbnRDcmVhdG9yKGVsZW1lbnRQYXJhbXMpO1xyXG4gIGNhbGN1bGF0b3JFbGVtZW50LmFkZElubmVyRWxlbWVudChkaXNwbGF5KTtcclxuXHJcbiAgY29uc3QgYnV0dG9uTGF5b3V0ID0gW1xyXG4gICAgWydBQycsICcoJywgJyknLCAnw5cnXSxcclxuICAgIFsn4oiaJywgJyUnLCAnKy8tJywgJ8O3J10sXHJcbiAgICBbJzcnLCAnOCcsICc5JywgJ+KIkiddLFxyXG4gICAgWyc0JywgJzUnLCAnNicsICcrJ10sXHJcbiAgICBbJzEnLCAnMicsICczJywgJz0nXSxcclxuICAgIFsnMCcsICfCtycsICfijKsnXSxcclxuICBdO1xyXG5cclxuICBidXR0b25MYXlvdXQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBpc05hTih0ZXh0KSAmJiB0ZXh0ICE9PSAnwrcnID8gJ29wJyA6ICdudW0nO1xyXG4gICAgICBsZXQgY2FsbGJhY2s7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRleHQpIHtcclxuICAgICAgICBjYXNlICdBQyc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSAnMCc7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn4oyrJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9IGRpc3BsYXlFbGVtZW50LnZhbHVlLnNsaWNlKDAsIC0xKSB8fCAnMCc7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKy8tJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGlzcGxheUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY3VycmVudC5tYXRjaCgvKFxcKC0/XFxkKyhcXC5cXGQrKT9cXCl8LT9cXGQrKFxcLlxcZCspPykkLyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgICAgaWYgKG51bWJlci5zdGFydHNXaXRoKCcoLScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IG51bWJlci5zbGljZSgyLCAtMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuc3RhcnRzV2l0aCgnLScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IGAoJG51bWJlci5zbGljZSgxKX1gO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IGAoLSR7bnVtYmVyfSlgO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudC5zbGljZSgwLCAtbnVtYmVyLmxlbmd0aCkgKyByZXBsYWNlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyUnOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSBkaXNwbGF5RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBleHByLm1hdGNoKC8oLis/KShbK1xcLSovXSkoXFwoPy0/XFxkKyhcXC5cXGQrKT9cXCk/KSQvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJhc2VFeHByID0gbWF0Y2hbMV07IC8vIGV4cHJlc3Npb24gdy9vIGxhc3QgbnVtXHJcbiAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSBtYXRjaFsyXTsgLy8gb3BlcmF0b3IgYmVmb3JlIG51bVxyXG4gICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IG1hdGNoWzNdO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlRXhwciA9IGAoJHtiYXNlRXhwcn0ke29wZXJhdG9yfSgke2Jhc2VFeHByfSoke251bWJlcn0vMTAwKSlgO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gcGVyY2VudGFnZUV4cHI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2ltcGxlTWF0Y2ggPSBleHByLm1hdGNoKC8oLT9cXGQrKFxcLlxcZCspPykoPyEuKlxcZCkvKTtcclxuICAgICAgICAgICAgICBpZiAoc2ltcGxlTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHNpbXBsZU1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICBleHByLnNsaWNlKDAsIC1udW1iZXIubGVuZ3RoKSArIGAoJHtudW1iZXJ9KjAuMDEpYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICfiiJonOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5RWxlbWVudC52YWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSAn4oiaKCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgKz0gJ+KImignO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkaXNwbGF5RWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC/Dly9nLCAnKicpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL8O3L2csICcvJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgv4oiSL2csICctJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvwrcvZywgJy4nKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8sL2csICcuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxjdWxhdGUoaW5wdXQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5RWxlbWVudC52YWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlICs9IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25DcmVhdG9yKHtcclxuICAgICAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgICAgIGNsYXNzTmFtZXM6IFtjbGFzc05hbWVdLFxyXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0LFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNhbGN1bGF0b3JFbGVtZW50LmFkZElubmVyRWxlbWVudChidXR0b24uZ2V0RWxlbWVudCgpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhcHBDb250YWluZXIuYWRkSW5uZXJFbGVtZW50KHNpZGViYXIpO1xyXG4gIGFwcENvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoY2FsY3VsYXRvckVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gYXBwQ29udGFpbmVyLmdldEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKSB7XHJcbiAgaWYgKHNvdW5kT24pIHtcclxuICAgIGJ1dHRvblNvdW5kLnBsYXkoKS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coJ0F1ZGlvIHBsYXkgZXJyb3I6JywgZSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxjdWxhdG9yVUkgfSBmcm9tIFwiLi9hcHAvdmlldy92aWV3XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FsY3VsYXRvciA9IGNyZWF0ZUNhbGN1bGF0b3JVSSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYWxjdWxhdG9yKTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC92aWV3L3ZpZXcuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3V0aWxzL2VsZW1lbnQtY3JlYXRvci5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvdXRpbHMvY2FsY3VsYXRvci5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLWNyZWF0b3IuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiRWxlbWVudENyZWF0b3IiLCJCdXR0b25DcmVhdG9yIiwiX0VsZW1lbnRDcmVhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInBhcmFtcyIsIl90aGlzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lcyIsImZvckVhY2giLCJuYW1lIiwiYnV0dG9uRWxlbWVudCIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJzZXRDYWxsYmFjayIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWZhdWx0IiwidmFsaWRhdGVJbnB1dCIsImV2ZW50IiwiYWxsb3dlZEtleXMiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0IiwiY2FsY3VsYXRlIiwiZXhwcmVzc2lvbiIsInRva2VucyIsInRva2VuaXplIiwicnBuIiwidG9SUE4iLCJldmFsdWF0ZVJQTiIsInJlcGxhY2UiLCJyZWdleCIsIm1hdGNoIiwiRXJyb3IiLCJvdXRwdXQiLCJvcGVyYXRvcnMiLCJwcmVjZWRlbmNlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRva2VuIiwiaXNOYU4iLCJwdXNoIiwibGVuZ3RoIiwiYXQiLCJwb3AiLCJlcnIiLCJmIiwiY29uY2F0IiwicmV2ZXJzZSIsInN0YWNrIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInBhcnNlRmxvYXQiLCJhIiwiTWF0aCIsInNxcnQiLCJiIiwiRWxlbWVudFBhcmFtcyIsInRhZyIsIlN0cmluZyIsIkFycmF5IiwiRnVuY3Rpb24iLCJzZXRDc3NDbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWxlbWVudCIsImFkZElubmVyRWxlbWVudCIsImNsaWNrU291bmQiLCJjcmVhdGVDYWxjdWxhdG9yVUkiLCJhcHBDb250YWluZXIiLCJzaWRlYmFyIiwiYnV0dG9uU291bmQiLCJBdWRpbyIsInZvbHVtZSIsInNvdW5kT24iLCJzb3VuZEJ1dHRvbiIsInBsYXlTb3VuZCIsImRhcmtUaGVtZSIsInRoZW1lQnV0dG9uIiwiYm9keSIsInRvZ2dsZSIsImVsZW1lbnRQYXJhbXMiLCJkaXNwbGF5UGFyYW1zIiwiZGlzcGxheSIsImRpc3BsYXlFbGVtZW50IiwidHlwZSIsImNhbGN1bGF0b3JFbGVtZW50IiwiYnV0dG9uTGF5b3V0Iiwicm93IiwidGV4dCIsInNsaWNlIiwiY3VycmVudCIsIm51bWJlciIsInJlcGxhY2VtZW50Iiwic3RhcnRzV2l0aCIsImV4cHIiLCJiYXNlRXhwciIsIm9wZXJhdG9yIiwicGVyY2VudGFnZUV4cHIiLCJzaW1wbGVNYXRjaCIsImlucHV0IiwicmVzdWx0IiwiYnV0dG9uIiwicGxheSIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdG9yIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9