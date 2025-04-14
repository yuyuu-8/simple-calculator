/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/utils/button/button.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/utils/button/button.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.calculator-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  width: 300px;
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

.button-container {
  cursor: pointer;

  padding: 15px;
  border: none;
  border-radius: 5px;

  font-size: 18px;

  transition: all 0.2s;
}

.button-container.num {
  background-color: #e0e0e0;
}

.button-container.op {
  background-color: #e0e0e0;
}

.button-container:hover {
  opacity: 0.7;
}
`, "",{"version":3,"sources":["webpack://./src/app/utils/button/button.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;;EAET,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,yBAAyB;EACzB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;;EAEnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;;EAElB,eAAe;EACf,iBAAiB;;EAEjB,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,YAAY;EACZ,kBAAkB;;EAElB,eAAe;;EAEf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd","sourcesContent":[".calculator-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n\r\n  width: 300px;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n\r\n  background-color: #f0f0f0;\r\n  box-shadow: 0 4px 8px rgba(0 0 0 / 20%);\r\n}\r\n\r\n.calculator-display {\r\n  grid-column: span 4;\r\n\r\n  margin-bottom: 10px;\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n\r\n  font-size: 24px;\r\n  text-align: right;\r\n\r\n  background-color: #fff;\r\n  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);\r\n}\r\n\r\n.button-container {\r\n  cursor: pointer;\r\n\r\n  padding: 15px;\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-size: 18px;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.button-container.num {\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.button-container.op {\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.button-container:hover {\r\n  opacity: 0.7;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view */ "./src/app/view/view.js");

document.addEventListener('DOMContentLoaded', function () {
  var calculator = (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.createCalculatorUI)();
  document.body.appendChild(calculator);
});

/***/ }),

/***/ "./src/app/utils/button/button-creator.js":
/*!************************************************!*\
  !*** ./src/app/utils/button/button-creator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/***/ (() => {



/***/ }),

/***/ "./src/app/utils/element-creator.js":
/*!******************************************!*\
  !*** ./src/app/utils/element-creator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      this.element.addEventListener('click', function (e) {
        return callback(e);
      });
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

/***/ "./src/app/view/view.js":
/*!******************************!*\
  !*** ./src/app/view/view.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalculatorUI: () => (/* binding */ createCalculatorUI)
/* harmony export */ });
/* harmony import */ var _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/button/button-creator.js */ "./src/app/utils/button/button-creator.js");
/* harmony import */ var _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/element-creator.js */ "./src/app/utils/element-creator.js");




function createCalculatorUI() {
  var elementParams = {
    tag: 'section',
    classNames: ['calculator-container'],
    textContent: '',
    callback: null
  };
  var displayParams = {
    tag: 'div',
    classNames: ['calculator-display'],
    textContent: '0',
    callback: null
  };
  var display = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"](displayParams);
  var calculatorElement = new _utils_element_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"](elementParams);
  calculatorElement.addInnerElement(display);
  var buttons = [{
    "class": 'num',
    text: '0',
    callback: null
  }, {
    "class": 'num',
    text: '1',
    callback: null
  }, {
    "class": 'num',
    text: '2',
    callback: null
  }, {
    "class": 'num',
    text: '3',
    callback: null
  }, {
    "class": 'num',
    text: '4',
    callback: null
  }, {
    "class": 'num',
    text: '5',
    callback: null
  }, {
    "class": 'num',
    text: '6',
    callback: null
  }, {
    "class": 'num',
    text: '7',
    callback: null
  }, {
    "class": 'num',
    text: '8',
    callback: null
  }, {
    "class": 'num',
    text: '9',
    callback: null
  }, {
    "class": 'op',
    text: '+',
    callback: null
  }, {
    "class": 'op',
    text: '-',
    callback: null
  }, {
    "class": 'op',
    text: 'x',
    callback: null
  }, {
    "class": 'op',
    text: '=',
    callback: null
  }, {
    "class": 'op',
    text: '+/-',
    callback: null
  }, {
    "class": 'op',
    text: 'AC',
    callback: null
  }, {
    "class": 'op',
    text: '%',
    callback: null
  }, {
    "class": 'op',
    text: ',',
    callback: null
  }];
  buttons.forEach(function (_ref) {
    var className = _ref["class"],
      text = _ref.text,
      callback = _ref.callback;
    var button = new _utils_button_button_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      tag: 'button',
      classNames: [className],
      textContent: text,
      callback: callback
    });
    calculatorElement.addInnerElement(button.getElement());
  });
  return calculatorElement.getElement();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {



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
/******/ 	__webpack_require__("./src/app/app.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/app/view/view.js");
/******/ 	__webpack_require__("./src/app/utils/element-creator.js");
/******/ 	__webpack_require__("./src/app/utils/calculator.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/utils/button/button-creator.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZDlhYTRhZThiYTA1YWE3NzM0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0dBQWtHLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLFdBQVcsYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxnREFBZ0Qsb0JBQW9CLDRDQUE0QyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLDhDQUE4QyxLQUFLLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQix5QkFBeUIsMEJBQTBCLHdCQUF3QixpQ0FBaUMsb0RBQW9ELEtBQUssMkJBQTJCLHNCQUFzQix3QkFBd0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsK0JBQStCLEtBQUssK0JBQStCLGdDQUFnQyxLQUFLLDhCQUE4QixnQ0FBZ0MsS0FBSyxpQ0FBaUMsbUJBQW1CLEtBQUssdUJBQXVCO0FBQ2g0QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUN6RDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmlEO0FBRWpEQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTUMsVUFBVSxHQUFHSCw4REFBa0IsQ0FBQyxDQUFDO0VBQ3ZDQyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDRixVQUFVLENBQUM7QUFDekMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMb0I7QUFDMEI7QUFBQSxJQUUzQkksYUFBYSwwQkFBQUMsZUFBQTtFQUFBLFNBQUFELGNBQUE7SUFBQUUsZUFBQSxPQUFBRixhQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxhQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLGFBQUEsRUFBQUMsZUFBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sYUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFDaEMsU0FBQUMsYUFBYUEsQ0FBQ0MsTUFBTSxFQUFFO01BQUEsSUFBQUMsS0FBQTtNQUNwQixJQUFJLENBQUNDLE9BQU8sR0FBR2xCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM1QyxJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFFOUMsSUFBSUosTUFBTSxDQUFDSyxVQUFVLEVBQUU7UUFDckJMLE1BQU0sQ0FBQ0ssVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQ2xDTixLQUFJLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQztRQUNsQyxDQUFDLENBQUM7TUFDSjtNQUVBLElBQUksQ0FBQ0MsYUFBYSxHQUFHeEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsUUFBUSxDQUFDO01BQ3JELElBQUksQ0FBQ1UsY0FBYyxDQUFDVCxNQUFNLENBQUNVLFdBQVcsQ0FBQztNQUN2QyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDLElBQUksQ0FBQ0gsYUFBYSxDQUFDO01BQ3ZDLElBQUksQ0FBQ0ksV0FBVyxDQUFDWixNQUFNLENBQUNhLFFBQVEsQ0FBQztNQUVqQyxPQUFPLElBQUksQ0FBQ1gsT0FBTztJQUNyQjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFXLGNBQWNBLENBQUNDLFdBQVcsRUFBRTtNQUMxQixJQUFJLENBQUNGLGFBQWEsQ0FBQ0UsV0FBVyxHQUFHQSxXQUFXO0lBQzlDO0VBQUM7SUFBQWIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWMsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO01BQ3BCLElBQUksQ0FBQ0wsYUFBYSxDQUFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUM2QixDQUFDO1FBQUEsT0FBS0QsUUFBUSxDQUFDQyxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQ2xFO0VBQUM7QUFBQSxFQXpCd0N6Qix3REFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnpELE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQTZHO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJdUQ7QUFDL0UsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEUsSUFBTTJCLGFBQWEsR0FBRztFQUMzQkMsR0FBRyxFQUFFQyxNQUFNO0VBQ1hiLFVBQVUsRUFBRWMsS0FBSztFQUNqQlQsV0FBVyxFQUFFUSxNQUFNO0VBQ25CTCxRQUFRLEVBQUVPO0FBQ1osQ0FBQztBQUFDLElBRW1CL0IsY0FBYztFQUNqQyxTQUFBQSxlQUFZVyxNQUFNLEVBQUU7SUFBQVIsZUFBQSxPQUFBSCxjQUFBO0lBQ2xCLElBQUksQ0FBQ2EsT0FBTyxHQUFHLElBQUk7SUFDbkIsSUFBSSxDQUFDSCxhQUFhLENBQUNDLE1BQU0sQ0FBQztFQUM1QjtFQUFDLE9BQUFKLFlBQUEsQ0FBQVAsY0FBQTtJQUFBUSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7TUFDcEIsSUFBSSxDQUFDRSxPQUFPLEdBQUdsQixRQUFRLENBQUNlLGFBQWEsQ0FBQ0MsTUFBTSxDQUFDaUIsR0FBRyxDQUFDO01BQ2pELElBQUksQ0FBQ0ksYUFBYSxDQUFDckIsTUFBTSxDQUFDSyxVQUFVLENBQUM7TUFDckMsSUFBSSxDQUFDSSxjQUFjLENBQUNULE1BQU0sQ0FBQ1UsV0FBVyxDQUFDO01BQ3ZDLElBQUksQ0FBQ0UsV0FBVyxDQUFDWixNQUFNLENBQUNhLFFBQVEsQ0FBQztJQUNuQztFQUFDO0lBQUFoQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUIsYUFBYUEsQ0FBQ2hCLFVBQVUsRUFBRTtNQUFBLElBQUFKLEtBQUE7TUFDeEJJLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNnQixTQUFTLEVBQUs7UUFDaENyQixLQUFJLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNrQixTQUFTLENBQUM7TUFDdkMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBekIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVcsY0FBY0EsQ0FBQ0MsV0FBVyxFQUFFO01BQzFCLElBQUksQ0FBQ1IsT0FBTyxDQUFDUSxXQUFXLEdBQUdBLFdBQVc7SUFDeEM7RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYyxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7TUFDcEIsSUFBSSxDQUFDWCxPQUFPLENBQUNqQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQzZCLENBQUM7UUFBQSxPQUFLRCxRQUFRLENBQUNDLENBQUMsQ0FBQztNQUFBLEVBQUM7SUFDNUQ7RUFBQztJQUFBakIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlCLFVBQVVBLENBQUEsRUFBRztNQUNYLE9BQU8sSUFBSSxDQUFDckIsT0FBTztJQUNyQjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwQixlQUFlQSxDQUFDdEIsT0FBTyxFQUFFO01BQ3ZCLElBQUlBLE9BQU8sWUFBWWIsY0FBYyxFQUFFO1FBQ3JDLElBQUksQ0FBQ2EsT0FBTyxDQUFDUyxNQUFNLENBQUNULE9BQU8sQ0FBQ3FCLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDM0MsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDckIsT0FBTyxDQUFDUyxNQUFNLENBQUNULE9BQU8sQ0FBQztNQUM5QjtJQUNGO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNVOztBQUNpRDtBQUNMO0FBRWxELFNBQVNuQixrQkFBa0JBLENBQUEsRUFBRztFQUNuQyxJQUFNMEMsYUFBYSxHQUFHO0lBQ3BCUixHQUFHLEVBQUUsU0FBUztJQUNkWixVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNwQ0ssV0FBVyxFQUFFLEVBQUU7SUFDZkcsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUVELElBQU1hLGFBQWEsR0FBRztJQUNwQlQsR0FBRyxFQUFFLEtBQUs7SUFDVlosVUFBVSxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbENLLFdBQVcsRUFBRSxHQUFHO0lBQ2hCRyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBTWMsT0FBTyxHQUFHLElBQUl0QyxpRUFBYyxDQUFDcUMsYUFBYSxDQUFDO0VBRWpELElBQU1FLGlCQUFpQixHQUFHLElBQUl2QyxpRUFBYyxDQUFDb0MsYUFBYSxDQUFDO0VBQzNERyxpQkFBaUIsQ0FBQ0osZUFBZSxDQUFDRyxPQUFPLENBQUM7RUFFMUMsSUFBTUUsT0FBTyxHQUFHLENBQ2Q7SUFBRSxTQUFPLEtBQUs7SUFBRUMsSUFBSSxFQUFFLEdBQUc7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDM0M7SUFBRSxTQUFPLEtBQUs7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzNDO0lBQUUsU0FBTyxLQUFLO0lBQUVpQixJQUFJLEVBQUUsR0FBRztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUMzQztJQUFFLFNBQU8sS0FBSztJQUFFaUIsSUFBSSxFQUFFLEdBQUc7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDM0M7SUFBRSxTQUFPLEtBQUs7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzNDO0lBQUUsU0FBTyxLQUFLO0lBQUVpQixJQUFJLEVBQUUsR0FBRztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUMzQztJQUFFLFNBQU8sS0FBSztJQUFFaUIsSUFBSSxFQUFFLEdBQUc7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDM0M7SUFBRSxTQUFPLEtBQUs7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzNDO0lBQUUsU0FBTyxLQUFLO0lBQUVpQixJQUFJLEVBQUUsR0FBRztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUMzQztJQUFFLFNBQU8sS0FBSztJQUFFaUIsSUFBSSxFQUFFLEdBQUc7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDM0M7SUFBRSxTQUFPLElBQUk7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzFDO0lBQUUsU0FBTyxJQUFJO0lBQUVpQixJQUFJLEVBQUUsR0FBRztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUMxQztJQUFFLFNBQU8sSUFBSTtJQUFFaUIsSUFBSSxFQUFFLEdBQUc7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDMUM7SUFBRSxTQUFPLElBQUk7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzFDO0lBQUUsU0FBTyxJQUFJO0lBQUVpQixJQUFJLEVBQUUsS0FBSztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUM1QztJQUFFLFNBQU8sSUFBSTtJQUFFaUIsSUFBSSxFQUFFLElBQUk7SUFBRWpCLFFBQVEsRUFBRTtFQUFLLENBQUMsRUFDM0M7SUFBRSxTQUFPLElBQUk7SUFBRWlCLElBQUksRUFBRSxHQUFHO0lBQUVqQixRQUFRLEVBQUU7RUFBSyxDQUFDLEVBQzFDO0lBQUUsU0FBTyxJQUFJO0lBQUVpQixJQUFJLEVBQUUsR0FBRztJQUFFakIsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUMzQztFQUVEZ0IsT0FBTyxDQUFDdkIsT0FBTyxDQUFDLFVBQUF5QixJQUFBLEVBQTBDO0lBQUEsSUFBaENULFNBQVMsR0FBQVMsSUFBQTtNQUFFRCxJQUFJLEdBQUFDLElBQUEsQ0FBSkQsSUFBSTtNQUFFakIsUUFBUSxHQUFBa0IsSUFBQSxDQUFSbEIsUUFBUTtJQUNqRCxJQUFNbUIsTUFBTSxHQUFHLElBQUkxQyx1RUFBYSxDQUFDO01BQy9CMkIsR0FBRyxFQUFFLFFBQVE7TUFDYlosVUFBVSxFQUFFLENBQUNpQixTQUFTLENBQUM7TUFDdkJaLFdBQVcsRUFBRW9CLElBQUk7TUFDakJqQixRQUFRLEVBQVJBO0lBQ0YsQ0FBQyxDQUFDO0lBRUZlLGlCQUFpQixDQUFDSixlQUFlLENBQUNRLE1BQU0sQ0FBQ1QsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUN4RCxDQUFDLENBQUM7RUFFRixPQUFPSyxpQkFBaUIsQ0FBQ0wsVUFBVSxDQUFDLENBQUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3V0aWxzL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi1jcmVhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLmNzcz9kMWNlIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9lbGVtZW50LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvdmlldy5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwIDAgMCAvIDIwJSk7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWRpc3BsYXkge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwIDAgMCAvIDEwJSk7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIubnVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lci5vcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7O0VBRVQsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsZUFBZTs7RUFFZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCAwIDAgLyAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxyXFxuXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAgMCAwIC8gMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnRhaW5lci5udW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXIub3Age1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlQ2FsY3VsYXRvclVJIH0gZnJvbSBcIi4vdmlldy92aWV3XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FsY3VsYXRvciA9IGNyZWF0ZUNhbGN1bGF0b3JVSSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYWxjdWxhdG9yKTtcclxufSk7XHJcbiIsImltcG9ydCAnLi9idXR0b24uY3NzJztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uL2VsZW1lbnQtY3JlYXRvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25DcmVhdG9yIGV4dGVuZHMgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNyZWF0ZUVsZW1lbnQocGFyYW1zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5jbGFzc05hbWVzKSB7XHJcbiAgICAgIHBhcmFtcy5jbGFzc05hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLnNldFRleHRDb250ZW50KHBhcmFtcy50ZXh0Q29udGVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLnNldENhbGxiYWNrKHBhcmFtcy5jYWxsYmFjayk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHNldFRleHRDb250ZW50KHRleHRDb250ZW50KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FsbGJhY2soZSkpO1xyXG4gIH1cclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBjb25zdCBFbGVtZW50UGFyYW1zID0ge1xyXG4gIHRhZzogU3RyaW5nLFxyXG4gIGNsYXNzTmFtZXM6IEFycmF5LFxyXG4gIHRleHRDb250ZW50OiBTdHJpbmcsXHJcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY3JlYXRlRWxlbWVudChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudChwYXJhbXMpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XHJcbiAgICB0aGlzLnNldENzc0NsYXNzZXMocGFyYW1zLmNsYXNzTmFtZXMpO1xyXG4gICAgdGhpcy5zZXRUZXh0Q29udGVudChwYXJhbXMudGV4dENvbnRlbnQpO1xyXG4gICAgdGhpcy5zZXRDYWxsYmFjayhwYXJhbXMuY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3NzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XHJcbiAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNhbGxiYWNrKGUpKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYWRkSW5uZXJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudENyZWF0b3IpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50LmdldEVsZW1lbnQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBCdXR0b25DcmVhdG9yIGZyb20gJy4uL3V0aWxzL2J1dHRvbi9idXR0b24tY3JlYXRvci5qcyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi91dGlscy9lbGVtZW50LWNyZWF0b3IuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGN1bGF0b3JVSSgpIHtcclxuICBjb25zdCBlbGVtZW50UGFyYW1zID0ge1xyXG4gICAgdGFnOiAnc2VjdGlvbicsXHJcbiAgICBjbGFzc05hbWVzOiBbJ2NhbGN1bGF0b3ItY29udGFpbmVyJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICBjYWxsYmFjazogbnVsbCxcclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwbGF5UGFyYW1zID0ge1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZXM6IFsnY2FsY3VsYXRvci1kaXNwbGF5J10sXHJcbiAgICB0ZXh0Q29udGVudDogJzAnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfTtcclxuICBjb25zdCBkaXNwbGF5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKGRpc3BsYXlQYXJhbXMpO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdG9yRWxlbWVudCA9IG5ldyBFbGVtZW50Q3JlYXRvcihlbGVtZW50UGFyYW1zKTtcclxuICBjYWxjdWxhdG9yRWxlbWVudC5hZGRJbm5lckVsZW1lbnQoZGlzcGxheSk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgICB7IGNsYXNzOiAnbnVtJywgdGV4dDogJzAnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ251bScsIHRleHQ6ICcxJywgY2FsbGJhY2s6IG51bGwgfSxcclxuICAgIHsgY2xhc3M6ICdudW0nLCB0ZXh0OiAnMicsIGNhbGxiYWNrOiBudWxsIH0sXHJcbiAgICB7IGNsYXNzOiAnbnVtJywgdGV4dDogJzMnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ251bScsIHRleHQ6ICc0JywgY2FsbGJhY2s6IG51bGwgfSxcclxuICAgIHsgY2xhc3M6ICdudW0nLCB0ZXh0OiAnNScsIGNhbGxiYWNrOiBudWxsIH0sXHJcbiAgICB7IGNsYXNzOiAnbnVtJywgdGV4dDogJzYnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ251bScsIHRleHQ6ICc3JywgY2FsbGJhY2s6IG51bGwgfSxcclxuICAgIHsgY2xhc3M6ICdudW0nLCB0ZXh0OiAnOCcsIGNhbGxiYWNrOiBudWxsIH0sXHJcbiAgICB7IGNsYXNzOiAnbnVtJywgdGV4dDogJzknLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJysnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJy0nLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJ3gnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJz0nLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJysvLScsIGNhbGxiYWNrOiBudWxsIH0sXHJcbiAgICB7IGNsYXNzOiAnb3AnLCB0ZXh0OiAnQUMnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJyUnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gICAgeyBjbGFzczogJ29wJywgdGV4dDogJywnLCBjYWxsYmFjazogbnVsbCB9LFxyXG4gIF07XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoeyBjbGFzczogY2xhc3NOYW1lLCB0ZXh0LCBjYWxsYmFjayB9KSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uQ3JlYXRvcih7XHJcbiAgICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtjbGFzc05hbWVdLFxyXG4gICAgICB0ZXh0Q29udGVudDogdGV4dCxcclxuICAgICAgY2FsbGJhY2ssXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYWxjdWxhdG9yRWxlbWVudC5hZGRJbm5lckVsZW1lbnQoYnV0dG9uLmdldEVsZW1lbnQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYWxjdWxhdG9yRWxlbWVudC5nZXRFbGVtZW50KCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL2FwcC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3ZpZXcvdmlldy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvdXRpbHMvZWxlbWVudC1jcmVhdG9yLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC91dGlscy9jYWxjdWxhdG9yLmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3V0aWxzL2J1dHRvbi9idXR0b24tY3JlYXRvci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJjcmVhdGVDYWxjdWxhdG9yVUkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxjdWxhdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiRWxlbWVudENyZWF0b3IiLCJCdXR0b25DcmVhdG9yIiwiX0VsZW1lbnRDcmVhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInBhcmFtcyIsIl90aGlzIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsImJ1dHRvbkVsZW1lbnQiLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwic2V0Q2FsbGJhY2siLCJjYWxsYmFjayIsImUiLCJkZWZhdWx0IiwiRWxlbWVudFBhcmFtcyIsInRhZyIsIlN0cmluZyIsIkFycmF5IiwiRnVuY3Rpb24iLCJzZXRDc3NDbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWxlbWVudCIsImFkZElubmVyRWxlbWVudCIsImVsZW1lbnRQYXJhbXMiLCJkaXNwbGF5UGFyYW1zIiwiZGlzcGxheSIsImNhbGN1bGF0b3JFbGVtZW50IiwiYnV0dG9ucyIsInRleHQiLCJfcmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==