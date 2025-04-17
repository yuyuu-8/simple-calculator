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
  height: 35px;
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-size: 1.5em;

  background-color: #e0e0e0;
}

.sidebar {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.sound-button,
.theme-button {
  cursor: pointer;
  padding: 0.5rem;
  font-size: 24px;
}

@media (width <= 600px) {
  button {
    height: 45px;
    padding: 8px;
    font-size: 1.2em;
  }

  .sound-button,
  .theme-button {
    padding: 0.4rem;
    font-size: 20px;
  }
}

@media (width <= 400px) {
  button {
    height: 40px;
    font-size: 1em;
  }

  .sound-button,
  .theme-button {
    font-size: 18px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/utils/button/button.css"],"names":[],"mappings":"AAAA;EACE,eAAe;;EAEf,aAAa;;EAEb,aAAa;EACb,YAAY;EACZ,kBAAkB;;EAElB,eAAe;;EAEf,yBAAyB;;EAEzB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;;EAEnB,gBAAgB;;EAEhB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE;IACE,YAAY;IACZ,YAAY;IACZ,gBAAgB;EAClB;;EAEA;;IAEE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,cAAc;EAChB;;EAEA;;IAEE,eAAe;EACjB;AACF","sourcesContent":[".button-container {\r\n  cursor: pointer;\r\n\r\n  display: flex;\r\n\r\n  padding: 15px;\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-size: 18px;\r\n\r\n  background-color: #e0e0e0;\r\n\r\n  transition: all 0.2s;\r\n}\r\n\r\n.button-container:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n\r\n  font-size: 1.5em;\r\n\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.sound-button,\r\n.theme-button {\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  font-size: 24px;\r\n}\r\n\r\n@media (width <= 600px) {\r\n  button {\r\n    height: 45px;\r\n    padding: 8px;\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .sound-button,\r\n  .theme-button {\r\n    padding: 0.4rem;\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media (width <= 400px) {\r\n  button {\r\n    height: 40px;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .sound-button,\r\n  .theme-button {\r\n    font-size: 18px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  padding: 1rem;

  background-color: antiquewhite;
}

.app-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
}

.calculator-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  width: 100%;
  max-width: 400px;
  height: auto;
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
}

@media (width <= 600px) {
  .calculator-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 15px;
  }

  .calculator-display {
    padding: 12px;
    font-size: 20px;
  }
}

@media (width <= 400px) {
  .calculator-container {
    gap: 6px;
    padding: 10px;
  }

  .calculator-display {
    padding: 10px;
    font-size: 18px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/view/view.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,SAAS;EACT,aAAa;;EAEb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;;EAET,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,yBAAyB;EACzB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;;EAEnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;;EAElB,eAAe;EACf,iBAAiB;;EAEjB,yBAAyB;EACzB,6CAA6C;AAC/C;;AAEA;EACE;IACE,qCAAqC;IACrC,QAAQ;IACR,aAAa;EACf;;EAEA;IACE,aAAa;IACb,eAAe;EACjB;AACF;;AAEA;EACE;IACE,QAAQ;IACR,aAAa;EACf;;EAEA;IACE,aAAa;IACb,eAAe;EACjB;AACF","sourcesContent":["body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 1rem;\r\n\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.calculator-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n\r\n  width: 100%;\r\n  max-width: 400px;\r\n  height: auto;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n\r\n  background-color: #f0f0f0;\r\n  box-shadow: 0 4px 8px rgba(0 0 0 / 20%);\r\n}\r\n\r\n.calculator-display {\r\n  grid-column: span 4;\r\n\r\n  margin-bottom: 10px;\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n\r\n  font-size: 24px;\r\n  text-align: right;\r\n\r\n  background-color: #e0e0e0;\r\n  box-shadow: inset 0 1px 3px rgba(0 0 0 / 10%);\r\n}\r\n\r\n@media (width <= 600px) {\r\n  .calculator-container {\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 8px;\r\n    padding: 15px;\r\n  }\r\n\r\n  .calculator-display {\r\n    padding: 12px;\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media (width <= 400px) {\r\n  .calculator-container {\r\n    gap: 6px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .calculator-display {\r\n    padding: 10px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7O1VDTEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvZGFyay10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvdmlldy5jc3MiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdXRpbHMvYnV0dG9uL2J1dHRvbi1jcmVhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLmNzcz9kMWNlIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC91dGlscy9lbGVtZW50LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvYXBwL3ZpZXcvZGFyay10aGVtZS5jc3M/Njg2MSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC8uL3NyYy9hcHAvdmlldy92aWV3LmNzcz8xMzMyIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sLy4vc3JjL2FwcC92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGVjaXNpb24tbWFraW5nLXRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RlY2lzaW9uLW1ha2luZy10b29sL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kZWNpc2lvbi1tYWtpbmctdG9vbC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zb3VuZC1idXR0b24sXHJcbi50aGVtZS1idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9IDYwMHB4KSB7XHJcbiAgYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxuICAuc291bmQtYnV0dG9uLFxyXG4gIC50aGVtZS1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhICh3aWR0aCA8PSA0MDBweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gIC5zb3VuZC1idXR0b24sXHJcbiAgLnRoZW1lLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTs7RUFFYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsZUFBZTs7RUFFZix5QkFBeUI7O0VBRXpCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLGdCQUFnQjs7RUFFaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zb3VuZC1idXR0b24sXFxyXFxuLnRoZW1lLWJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gNjAwcHgpIHtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvdW5kLWJ1dHRvbixcXHJcXG4gIC50aGVtZS1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSA0MDBweCkge1xcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zb3VuZC1idXR0b24sXFxyXFxuICAudGhlbWUtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkuZGFyay10aGVtZSB7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxufVxyXG5cclxuYm9keS5kYXJrLXRoZW1lIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxufVxyXG5cclxuYm9keS5kYXJrLXRoZW1lIC5jYWxjdWxhdG9yLWRpc3BsYXkge1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XHJcbn1cclxuXHJcbmJvZHkuZGFyay10aGVtZSBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5ib2R5LmRhcmstdGhlbWUgLmNvbnRyb2wtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gIFxyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC92aWV3L2RhcmstdGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkuZGFyay10aGVtZSB7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbmJvZHkuZGFyay10aGVtZSAuY2FsY3VsYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLXRoZW1lIC5jYWxjdWxhdG9yLWRpc3BsYXkge1xcclxcbiAgY29sb3I6ICNlMGUwZTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmRhcmstdGhlbWUgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5kYXJrLXRoZW1lIC5jb250cm9sLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgXFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCAwIDAgLyAyMCUpO1xyXG59XHJcblxyXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9IDYwMHB4KSB7XHJcbiAgLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9IDQwMHB4KSB7XHJcbiAgLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jYWxjdWxhdG9yLWRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXcvdmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhOztFQUViLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7O0VBRVQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwIDAgMCAvIDIwJSk7XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yLWRpc3BsYXkge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcXHJcXG5cXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCAwIDAgLyAxMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDYwMHB4KSB7XFxyXFxuICAuY2FsY3VsYXRvci1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYWxjdWxhdG9yLWRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gNDAwcHgpIHtcXHJcXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhbGN1bGF0b3ItZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9idXR0b24uY3NzJztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uL2VsZW1lbnQtY3JlYXRvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25DcmVhdG9yIGV4dGVuZHMgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNyZWF0ZUVsZW1lbnQocGFyYW1zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5jbGFzc05hbWVzKSB7XHJcbiAgICAgIHBhcmFtcy5jbGFzc05hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLnNldFRleHRDb250ZW50KHBhcmFtcy50ZXh0Q29udGVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLnNldENhbGxiYWNrKHBhcmFtcy5jYWxsYmFjayk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHNldFRleHRDb250ZW50KHRleHRDb250ZW50KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FsbGJhY2soZSkpO1xyXG4gIH1cclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGV2ZW50KSB7XHJcbiAgY29uc3QgYWxsb3dlZEtleXMgPSBbXHJcbiAgICAnMCcsXHJcbiAgICAnMScsXHJcbiAgICAnMicsXHJcbiAgICAnMycsXHJcbiAgICAnNCcsXHJcbiAgICAnNScsXHJcbiAgICAnNicsXHJcbiAgICAnNycsXHJcbiAgICAnOCcsXHJcbiAgICAnOScsXHJcbiAgICAnQmFja3NwYWNlJyxcclxuICAgICdEZWxldGUnLFxyXG4gICAgJ0Fycm93TGVmdCcsXHJcbiAgICAnQXJyb3dSaWdodCcsXHJcbiAgICAnRW50ZXInLFxyXG4gICAgJysnLFxyXG4gICAgJy0nLFxyXG4gICAgJyonLFxyXG4gICAgJy8nLFxyXG4gICAgJywnLFxyXG4gICAgJygnLFxyXG4gICAgJyknLFxyXG4gIF07XHJcblxyXG4gIGlmICghYWxsb3dlZEtleXMuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGUoZXhwcmVzc2lvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZShleHByZXNzaW9uKTtcclxuICAgIGNvbnN0IHJwbiA9IHRvUlBOKHRva2Vucyk7XHJcbiAgICByZXR1cm4gZXZhbHVhdGVSUE4ocnBuKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gJ0Vycm9yJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRva2VuaXplKGV4cHJlc3Npb24pIHtcclxuICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKC9cXHMrL2csICcnKTtcclxuICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKC9cXChcXHMqLVxccyooXFxkKyhcXC5cXGQrKT8pXFxzKlxcKS9nLCAnKDAtJDEpJyk7XHJcblxyXG4gIGNvbnN0IHJlZ2V4ID0gL+KImnxcXGQrKFxcLlxcZCspP3xbK1xcLSovKCklXS9nO1xyXG4gIGNvbnN0IHRva2VucyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAoIXRva2VucykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGV4cHJlc3Npb24nKTtcclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b1JQTih0b2tlbnMpIHtcclxuICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICBjb25zdCBvcGVyYXRvcnMgPSBbXTtcclxuICBjb25zdCBwcmVjZWRlbmNlID0geyAnKyc6IDEsICctJzogMSwgJyonOiAyLCAnLyc6IDIsICfiiJonOiAzIH07XHJcblxyXG4gIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XHJcbiAgICBpZiAoIWlzTmFOKHRva2VuKSkge1xyXG4gICAgICBvdXRwdXQucHVzaCh0b2tlbik7XHJcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAn4oiaJykge1xyXG4gICAgICBvcGVyYXRvcnMucHVzaCh0b2tlbik7XHJcbiAgICB9IGVsc2UgaWYgKCcrLSovJeKImicuaW5jbHVkZXModG9rZW4pKSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBvcGVyYXRvcnMubGVuZ3RoICYmXHJcbiAgICAgICAgcHJlY2VkZW5jZVtvcGVyYXRvcnMuYXQoLTEpXSA+PSBwcmVjZWRlbmNlW3Rva2VuXSAmJlxyXG4gICAgICAgIG9wZXJhdG9ycy5hdCgtMSkgIT09ICcoJ1xyXG4gICAgICApIHtcclxuICAgICAgICBvdXRwdXQucHVzaChvcGVyYXRvcnMucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG9wZXJhdG9ycy5wdXNoKHRva2VuKTtcclxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcoJykge1xyXG4gICAgICBvcGVyYXRvcnMucHVzaCh0b2tlbik7XHJcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcclxuICAgICAgd2hpbGUgKG9wZXJhdG9ycy5sZW5ndGggJiYgb3BlcmF0b3JzLmF0KC0xKSAhPT0gJygnKSB7XHJcbiAgICAgICAgb3V0cHV0LnB1c2gob3BlcmF0b3JzLnBvcCgpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob3BlcmF0b3JzLmF0KC0xKSA9PT0gJygnKSBvcGVyYXRvcnMucG9wKCk7XHJcblxyXG4gICAgICBpZiAob3BlcmF0b3JzLmF0KC0xKSA9PT0gJ+KImicpIHtcclxuICAgICAgICBvdXRwdXQucHVzaChvcGVyYXRvcnMucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0LmNvbmNhdChvcGVyYXRvcnMucmV2ZXJzZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZhbHVhdGVSUE4ocnBuKSB7XHJcbiAgY29uc3Qgc3RhY2sgPSBbXTtcclxuICBmb3IgKGNvbnN0IHRva2VuIG9mIHJwbikge1xyXG4gICAgaWYgKCFpc05hTih0b2tlbikpIHtcclxuICAgICAgc3RhY2sucHVzaChwYXJzZUZsb2F0KHRva2VuKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAn4oiaJykge1xyXG4gICAgICBjb25zdCBhID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChhIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdTcXVhcmUgcm9vdCBvZiBuZWdhdGl2ZSBudW1iZXInKTtcclxuICAgICAgc3RhY2sucHVzaChNYXRoLnNxcnQoYSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYiA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBjb25zdCBhID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgIHN0YWNrLnB1c2goYSArIGIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGEgLSBiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgc3RhY2sucHVzaChhICogYik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgIHN0YWNrLnB1c2goYSAvIGIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBvcGVyYXRvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhY2tbMF07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVsZW1lbnRQYXJhbXMgPSB7XHJcbiAgdGFnOiBTdHJpbmcsXHJcbiAgY2xhc3NOYW1lczogQXJyYXksXHJcbiAgdGV4dENvbnRlbnQ6IFN0cmluZyxcclxuICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KHBhcmFtcykge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnKTtcclxuICAgIHRoaXMuc2V0Q3NzQ2xhc3NlcyhwYXJhbXMuY2xhc3NOYW1lcyk7XHJcbiAgICB0aGlzLnNldFRleHRDb250ZW50KHBhcmFtcy50ZXh0Q29udGVudCk7XHJcbiAgICB0aGlzLnNldENhbGxiYWNrKHBhcmFtcy5jYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBzZXRDc3NDbGFzc2VzKGNsYXNzTmFtZXMpIHtcclxuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRleHRDb250ZW50KHRleHRDb250ZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjYWxsYmFjayhlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGFkZElubmVyRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRDcmVhdG9yKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudC5nZXRFbGVtZW50KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhcmstdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLXRoZW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92aWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBCdXR0b25DcmVhdG9yIGZyb20gJy4uL3V0aWxzL2J1dHRvbi9idXR0b24tY3JlYXRvci5qcyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi91dGlscy9lbGVtZW50LWNyZWF0b3IuanMnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0LCBjYWxjdWxhdGUgfSBmcm9tICcuLi91dGlscy9jYWxjdWxhdG9yLmpzJztcclxuaW1wb3J0IGNsaWNrU291bmQgZnJvbSAnLi4vLi4vYXNzZXRzL2NsaWNrLm1wMyc7XHJcbmltcG9ydCAnLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi9kYXJrLXRoZW1lLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FsY3VsYXRvclVJKCkge1xyXG4gIGNvbnN0IGFwcENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lczogWydhcHAtY29udGFpbmVyJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICBjYWxsYmFjazogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2lkZWJhciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lczogWydzaWRlYmFyJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICBjYWxsYmFjazogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnV0dG9uU291bmQgPSBuZXcgQXVkaW8oY2xpY2tTb3VuZCk7XHJcbiAgYnV0dG9uU291bmQudm9sdW1lID0gMTtcclxuXHJcbiAgbGV0IHNvdW5kT24gPSB0cnVlO1xyXG4gIGNvbnN0IHNvdW5kQnV0dG9uID0gbmV3IEJ1dHRvbkNyZWF0b3Ioe1xyXG4gICAgdGFnOiAnYnV0dG9uJyxcclxuICAgIGNsYXNzTmFtZXM6IFsnc291bmQtYnV0dG9uJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJ/CflIonLFxyXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgc291bmRPbiA9ICFzb3VuZE9uO1xyXG4gICAgICBzb3VuZEJ1dHRvbi5zZXRUZXh0Q29udGVudChzb3VuZE9uID8gJ/CflIonIDogJ/CflIcnKTtcclxuICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGxldCBkYXJrVGhlbWUgPSBmYWxzZTtcclxuICBjb25zdCB0aGVtZUJ1dHRvbiA9IG5ldyBCdXR0b25DcmVhdG9yKHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICBjbGFzc05hbWVzOiBbJ3RoZW1lLWJ1dHRvbiddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICfwn4yeJyxcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIGRhcmtUaGVtZSA9ICFkYXJrVGhlbWU7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay10aGVtZScsIGRhcmtUaGVtZSk7XHJcbiAgICAgIHRoZW1lQnV0dG9uLnNldFRleHRDb250ZW50KGRhcmtUaGVtZSA/ICfwn4yZJyA6ICfwn4yeJyk7XHJcbiAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBzaWRlYmFyLmFkZElubmVyRWxlbWVudChzb3VuZEJ1dHRvbi5nZXRFbGVtZW50KCkpO1xyXG4gIHNpZGViYXIuYWRkSW5uZXJFbGVtZW50KHRoZW1lQnV0dG9uLmdldEVsZW1lbnQoKSk7XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRQYXJhbXMgPSB7XHJcbiAgICB0YWc6ICdzZWN0aW9uJyxcclxuICAgIGNsYXNzTmFtZXM6IFsnY2FsY3VsYXRvci1jb250YWluZXInXSxcclxuICAgIHRleHRDb250ZW50OiAnJyxcclxuICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlQYXJhbXMgPSB7XHJcbiAgICB0YWc6ICdpbnB1dCcsXHJcbiAgICBjbGFzc05hbWVzOiBbJ2NhbGN1bGF0b3ItZGlzcGxheSddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgfTtcclxuICBjb25zdCBkaXNwbGF5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKGRpc3BsYXlQYXJhbXMpO1xyXG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZGlzcGxheS5nZXRFbGVtZW50KCk7XHJcbiAgZGlzcGxheUVsZW1lbnQudHlwZSA9ICd0ZXh0JztcclxuICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9ICcwJztcclxuICBkaXNwbGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIHZhbGlkYXRlSW5wdXQoZSk7XHJcbiAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdG9yRWxlbWVudCA9IG5ldyBFbGVtZW50Q3JlYXRvcihlbGVtZW50UGFyYW1zKTtcclxuICBjYWxjdWxhdG9yRWxlbWVudC5hZGRJbm5lckVsZW1lbnQoZGlzcGxheSk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkxheW91dCA9IFtcclxuICAgIFsnQUMnLCAnKCcsICcpJywgJ8OXJ10sXHJcbiAgICBbJ+KImicsICclJywgJysvLScsICfDtyddLFxyXG4gICAgWyc3JywgJzgnLCAnOScsICfiiJInXSxcclxuICAgIFsnNCcsICc1JywgJzYnLCAnKyddLFxyXG4gICAgWycxJywgJzInLCAnMycsICc9J10sXHJcbiAgICBbJzAnLCAnLicsICfijKsnXSxcclxuICBdO1xyXG5cclxuICBidXR0b25MYXlvdXQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBpc05hTih0ZXh0KSAmJiB0ZXh0ICE9PSAnwrcnID8gJ29wJyA6ICdudW0nO1xyXG4gICAgICBsZXQgY2FsbGJhY2s7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRleHQpIHtcclxuICAgICAgICBjYXNlICdBQyc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSAnMCc7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn4oyrJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9IGRpc3BsYXlFbGVtZW50LnZhbHVlLnNsaWNlKDAsIC0xKSB8fCAnMCc7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKy8tJzpcclxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGlzcGxheUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY3VycmVudC5tYXRjaCgvKFxcKC0/XFxkKyhcXC5cXGQrKT9cXCl8LT9cXGQrKFxcLlxcZCspPykkLyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgICAgaWYgKG51bWJlci5zdGFydHNXaXRoKCcoLScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IG51bWJlci5zbGljZSgyLCAtMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuc3RhcnRzV2l0aCgnLScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IGAoJG51bWJlci5zbGljZSgxKX1gO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IGAoLSR7bnVtYmVyfSlgO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudC5zbGljZSgwLCAtbnVtYmVyLmxlbmd0aCkgKyByZXBsYWNlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5U291bmQoc291bmRPbiwgYnV0dG9uU291bmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyUnOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSBkaXNwbGF5RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBleHByLm1hdGNoKC8oLis/KShbK1xcLSovXSkoXFwoPy0/XFxkKyhcXC5cXGQrKT9cXCk/KSQvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJhc2VFeHByID0gbWF0Y2hbMV07IC8vIGV4cHJlc3Npb24gdy9vIGxhc3QgbnVtXHJcbiAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSBtYXRjaFsyXTsgLy8gb3BlcmF0b3IgYmVmb3JlIG51bVxyXG4gICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IG1hdGNoWzNdO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlRXhwciA9IGAoJHtiYXNlRXhwcn0ke29wZXJhdG9yfSgke2Jhc2VFeHByfSoke251bWJlcn0vMTAwKSlgO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlID0gcGVyY2VudGFnZUV4cHI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2ltcGxlTWF0Y2ggPSBleHByLm1hdGNoKC8oLT9cXGQrKFxcLlxcZCspPykoPyEuKlxcZCkvKTtcclxuICAgICAgICAgICAgICBpZiAoc2ltcGxlTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHNpbXBsZU1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICBleHByLnNsaWNlKDAsIC1udW1iZXIubGVuZ3RoKSArIGAoJHtudW1iZXJ9KjAuMDEpYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICfiiJonOlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5RWxlbWVudC52YWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSAn4oiaKCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgKz0gJ+KImignO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChzb3VuZE9uLCBidXR0b25Tb3VuZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkaXNwbGF5RWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC/Dly9nLCAnKicpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL8O3L2csICcvJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgv4oiSL2csICctJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvwrcvZywgJy4nKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8sL2csICcuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxjdWxhdGUoaW5wdXQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5RWxlbWVudC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5RWxlbWVudC52YWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnQudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbGVtZW50LnZhbHVlICs9IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25DcmVhdG9yKHtcclxuICAgICAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgICAgIGNsYXNzTmFtZXM6IFtjbGFzc05hbWVdLFxyXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0LFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNhbGN1bGF0b3JFbGVtZW50LmFkZElubmVyRWxlbWVudChidXR0b24uZ2V0RWxlbWVudCgpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhcHBDb250YWluZXIuYWRkSW5uZXJFbGVtZW50KHNpZGViYXIpO1xyXG4gIGFwcENvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoY2FsY3VsYXRvckVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gYXBwQ29udGFpbmVyLmdldEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheVNvdW5kKHNvdW5kT24sIGJ1dHRvblNvdW5kKSB7XHJcbiAgaWYgKHNvdW5kT24pIHtcclxuICAgIGJ1dHRvblNvdW5kLnBsYXkoKS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coJ0F1ZGlvIHBsYXkgZXJyb3I6JywgZSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxjdWxhdG9yVUkgfSBmcm9tIFwiLi9hcHAvdmlldy92aWV3XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FsY3VsYXRvciA9IGNyZWF0ZUNhbGN1bGF0b3JVSSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYWxjdWxhdG9yKTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC92aWV3L3ZpZXcuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3V0aWxzL2VsZW1lbnQtY3JlYXRvci5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvdXRpbHMvY2FsY3VsYXRvci5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC91dGlscy9idXR0b24vYnV0dG9uLWNyZWF0b3IuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiRWxlbWVudENyZWF0b3IiLCJCdXR0b25DcmVhdG9yIiwiX0VsZW1lbnRDcmVhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInBhcmFtcyIsIl90aGlzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lcyIsImZvckVhY2giLCJuYW1lIiwiYnV0dG9uRWxlbWVudCIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJzZXRDYWxsYmFjayIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWZhdWx0IiwidmFsaWRhdGVJbnB1dCIsImV2ZW50IiwiYWxsb3dlZEtleXMiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0IiwiY2FsY3VsYXRlIiwiZXhwcmVzc2lvbiIsInRva2VucyIsInRva2VuaXplIiwicnBuIiwidG9SUE4iLCJldmFsdWF0ZVJQTiIsInJlcGxhY2UiLCJyZWdleCIsIm1hdGNoIiwiRXJyb3IiLCJvdXRwdXQiLCJvcGVyYXRvcnMiLCJwcmVjZWRlbmNlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRva2VuIiwiaXNOYU4iLCJwdXNoIiwibGVuZ3RoIiwiYXQiLCJwb3AiLCJlcnIiLCJmIiwiY29uY2F0IiwicmV2ZXJzZSIsInN0YWNrIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInBhcnNlRmxvYXQiLCJhIiwiTWF0aCIsInNxcnQiLCJiIiwiRWxlbWVudFBhcmFtcyIsInRhZyIsIlN0cmluZyIsIkFycmF5IiwiRnVuY3Rpb24iLCJzZXRDc3NDbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWxlbWVudCIsImFkZElubmVyRWxlbWVudCIsImNsaWNrU291bmQiLCJjcmVhdGVDYWxjdWxhdG9yVUkiLCJhcHBDb250YWluZXIiLCJzaWRlYmFyIiwiYnV0dG9uU291bmQiLCJBdWRpbyIsInZvbHVtZSIsInNvdW5kT24iLCJzb3VuZEJ1dHRvbiIsInBsYXlTb3VuZCIsImRhcmtUaGVtZSIsInRoZW1lQnV0dG9uIiwiYm9keSIsInRvZ2dsZSIsImVsZW1lbnRQYXJhbXMiLCJkaXNwbGF5UGFyYW1zIiwiZGlzcGxheSIsImRpc3BsYXlFbGVtZW50IiwidHlwZSIsImNhbGN1bGF0b3JFbGVtZW50IiwiYnV0dG9uTGF5b3V0Iiwicm93IiwidGV4dCIsInNsaWNlIiwiY3VycmVudCIsIm51bWJlciIsInJlcGxhY2VtZW50Iiwic3RhcnRzV2l0aCIsImV4cHIiLCJiYXNlRXhwciIsIm9wZXJhdG9yIiwicGVyY2VudGFnZUV4cHIiLCJzaW1wbGVNYXRjaCIsImlucHV0IiwicmVzdWx0IiwiYnV0dG9uIiwicGxheSIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdG9yIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9