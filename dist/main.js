/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Pokemon Classic Regular.woff */ "./src/fonts/Pokemon Classic Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Pokemon';\n  \n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  }\n  \n  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    width: fit-content;\n    max-width: 91vw;\n\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    max-height: 20%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n}\n\n.hidden {\n    filter: brightness(0) blur(3px);\n}\n\n.guess-box {\n    user-select: none;\n    pointer-events: none; \n\n    font-family: 'Pokemon';\n\n    margin: 1rem;\n    padding: 1rem 2rem;\n\n    border: none;\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n\n    user-select: none;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n\n    /* Stops mobile being weird, but causes quirks on desktop */\n    opacity: 1;\n  }\n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;IAEtB;gEACqE;EACvE;;;;AAIF;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;;IAEtB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;;IAEjB,mCAAmC;IACnC,iBAAiB;IACjB,sBAAsB;;IAEtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,YAAY;;IAEZ,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;;IAEnB,8BAA8B;;IAE9B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;;IAEf,WAAW;AACf;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;;IAEpB,sBAAsB;;IAEtB,YAAY;IACZ,kBAAkB;;IAElB,YAAY;;IAEZ,yBAAyB;;IAEzB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,wDAAwD;IACxD,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;;IAEvB,WAAW;;IAEX,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,gBAAgB;;IAEhB,2DAA2D;IAC3D,UAAU;EACZ;;AAEF;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;;IAEd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa,EAAE,0BAA0B;AAC7C;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["@font-face {\n    font-family: 'Pokemon';\n  \n    src: url('/src/fonts/Pokemon\\ Classic\\ Regular.woff') format('woff'),\n         url('/src/fonts/Pokemon\\ Classic\\ Regular.woff') format('woff2');\n  }\n  \n  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    width: fit-content;\n    max-width: 91vw;\n\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    max-height: 20%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n}\n\n.hidden {\n    filter: brightness(0) blur(3px);\n}\n\n.guess-box {\n    user-select: none;\n    pointer-events: none; \n\n    font-family: 'Pokemon';\n\n    margin: 1rem;\n    padding: 1rem 2rem;\n\n    border: none;\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n\n    user-select: none;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n\n    /* Stops mobile being weird, but causes quirks on desktop */\n    opacity: 1;\n  }\n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkGuess": () => (/* binding */ checkGuess),
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _pokeAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeAPI */ "./src/pokeAPI.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");




let currentPokemonName;

let turnCounter = 0;

function generatePokemon() {

    const pokemon = (0,_pokeAPI__WEBPACK_IMPORTED_MODULE_0__.getRandomPokemon)();

    pokemon.then(function(response) {

        if (response) {
            currentPokemonName = response.name;

            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.changeDisplayedPokemon)(response.sprites.front_default);
        }
    });
}

const checkGuess = (guess) => {

    if (guess === currentPokemonName) {
        return true;
    }

    return false;
}


const newGame = () => {
    // Set turnCounter to 0;
    turnCounter = 0;

    // Generate new random pokemon
    generatePokemon();

    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.enableKeyboard)();
}

const game = (guess) => {

    if (turnCounter < 5) {

        turnCounter++;
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.increasePokemonSize)(turnCounter);

        if (checkGuess(guess)) {
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.revealPokemon)();
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.increasePokemonSize)();
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.disableKeyboard)();
            return;
        }

        if (turnCounter == 5) {
            // Show full size Pokemon
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.revealPokemon)();
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.increasePokemonSize)();
            
            // Change guessBox to be real value
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.setGuessBoxValue)(currentPokemonName);

            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.disableKeyboard)();

            return;
        }
    }
}

// Next turn
    // Increase size of sprite
    // increment turn counter


// Stop taking user input

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDisplayedPokemon": () => (/* binding */ changeDisplayedPokemon),
/* harmony export */   "disableKeyboard": () => (/* binding */ disableKeyboard),
/* harmony export */   "enableKeyboard": () => (/* binding */ enableKeyboard),
/* harmony export */   "increasePokemonSize": () => (/* binding */ increasePokemonSize),
/* harmony export */   "revealPokemon": () => (/* binding */ revealPokemon),
/* harmony export */   "setGuessBoxValue": () => (/* binding */ setGuessBoxValue),
/* harmony export */   "setupUI": () => (/* binding */ setupUI)
/* harmony export */ });
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");




// Get container
const container = document.querySelector("#container")

const setupUI = () => {
    // Title
    const title = new Image();
    title.classList.add("title");
    // title.textContent = "Who's that Pokemon?!";
    title.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;

    container.append(title);


    // Pokemon image
    const pokemonSprite = document.createElement("img");
    pokemonSprite.classList.add("pokemon-image");
    pokemonSprite.style.width = "10%";

    // Hide the sprite
    pokemonSprite.classList.add("hidden");

    container.append(pokemonSprite);


    // Guess input box
    const guessBox = document.createElement("input");
    guessBox.type = "text";
    guessBox.classList.add("guess-box");

    container.append(guessBox);
}

const changeDisplayedPokemon = (src) => {
    const pokemonSprite = document.querySelector(".pokemon-image");

    pokemonSprite.src = src;
}

const increasePokemonSize = (turn) => {

    const pokemonSprite = document.querySelector(".pokemon-image");

    switch(turn) {

        case 1:
            pokemonSprite.style.width = "20%";
            break;

        case 2:
            pokemonSprite.style.width = "35%";
            break;

        case 3:
            pokemonSprite.style.width = "50%";
            break;

        case 4:
            pokemonSprite.style.width = "70%";
            break;

        default:
            pokemonSprite.style.width = "100%";
            break;
    }
}

const revealPokemon = () => {
    const pokemonSprite = document.querySelector(".pokemon-image");
    pokemonSprite.classList.remove("hidden");
}

function getGuessBox() {
    return document.querySelector(".guess-box");
}

const setGuessBoxValue = (value) => {
    getGuessBox().value = value;
}


// Keyboard
const keyboard = document.querySelector(".keyboard");

const enableKeyboard = () => {
    keyboard.addEventListener("click", handleMouseClick);
}

const disableKeyboard = () => {
    keyboard.removeEventListener("click", handleMouseClick);
}


function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key);
        return;
    }

    if (e.target.matches("[data-enter]")) {
        //submit guess
        (0,_Game__WEBPACK_IMPORTED_MODULE_1__.game)(getGuessBox().value);
    }

    if (e.target.matches("[data-delete]")) {
        // backspace
        deleteChar(getGuessBox().value);
    }
}

function pressKey(key) {
    getGuessBox().value += key;
}

function updateGuessBox(guess) {
    getGuessBox().value = guess;
}

function deleteChar(string) {
    updateGuessBox(string.substring(0, string.length-1));
}

/***/ }),

/***/ "./src/pokeAPI.js":
/*!************************!*\
  !*** ./src/pokeAPI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon),
/* harmony export */   "getRandomPokemon": () => (/* binding */ getRandomPokemon)
/* harmony export */ });
async function getPokemon(pokemon) {
    // Can provide a name or a dex number for `pokemon`
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {mode: 'cors'})
    return await response.json();
}

const getRandomPokemon = () => {

    // Gen 1 only for now
    const randomID = Math.floor(Math.random() * 386);

    return getPokemon(randomID);
}

/***/ }),

/***/ "./src/fonts/Pokemon Classic Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/Pokemon Classic Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84cc0c3ded298408a902.woff";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f3d84d9059990371793.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");





(0,_UI__WEBPACK_IMPORTED_MODULE_1__.setupUI)();
(0,_Game_js__WEBPACK_IMPORTED_MODULE_2__.newGame)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUVTO0FBQ0s7O0FBRXBDLDRDQUFPO0FBQ1AsaURBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvcG9rZUFQSS5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1Bva2Vtb24gQ2xhc3NpYyBSZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb2tlbW9uJztcXG4gIFxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB9XFxuICBcXG4gIFxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICAvKiBCZXR0ZXIgd2F5IHRvIHNvcnQgdGhpcyBwbGVhc2UgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIG1heC13aWR0aDogMjZyZW07ICovXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIG1hcmdpbjogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyOCwgMjgpO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDkxdnc7XFxuXFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzU2NEFEO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ucG9rZW1vbi1pbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGJsdXIoM3B4KTtcXG59XFxuXFxuLmd1ZXNzLWJveCB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9rZW1vbic7XFxuXFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTYzYWQ7XFxuICAgIFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3Vlc3MtYm94OmZvY3VzIHsgXFxuICAgIG91dGxpbmU6IG5vbmU7IFxcbn0gXFxuXFxuLmd1ZXNzLWJveDo6cGxhY2Vob2xkZXIge1xcblxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM5NSk7XFxufVxcblxcbi5zdWJtaXQtZ3Vlc3MgeyBcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2V5Ym9hcmQgKi9cXG5cXG4ua2V5Ym9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCwgbWlubWF4KGF1dG8sIDEuMjVyZW0pKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDNyZW07XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmtleTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmtleTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgIC8qIFN0b3BzIG1vYmlsZSBiZWluZyB3ZWlyZCwgYnV0IGNhdXNlcyBxdWlya3Mgb24gZGVza3RvcCAqL1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbi5rZXkge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2NEFEO1xcbiAgICBjb2xvcjogI2ZmZTAzMTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmtleS5sYXJnZSB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIGZpbGw6ICNmZmUwMzE7IC8qIGZvciB0aGUgYmFja3NwYWNlIFNWRyAqL1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuc3ZnIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCOztJQUV0QjtnRUFDcUU7RUFDdkU7Ozs7QUFJRjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztJQUV0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsWUFBWTs7SUFFWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLG1CQUFtQjs7SUFFbkIsOEJBQThCOztJQUU5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGVBQWU7O0lBRWYsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjs7SUFFcEIsc0JBQXNCOztJQUV0QixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixZQUFZOztJQUVaLHlCQUF5Qjs7SUFFekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYix3REFBd0Q7SUFDeEQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix1QkFBdUI7O0lBRXZCLFdBQVc7O0lBRVgsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7O0lBRWhCLDJEQUEyRDtJQUMzRCxVQUFVO0VBQ1o7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7O0lBRWQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSwwQkFBMEI7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1Bva2Vtb24nO1xcbiAgXFxuICAgIHNyYzogdXJsKCcvc3JjL2ZvbnRzL1Bva2Vtb25cXFxcIENsYXNzaWNcXFxcIFJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgIHVybCgnL3NyYy9mb250cy9Qb2tlbW9uXFxcXCBDbGFzc2ljXFxcXCBSZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB9XFxuICBcXG4gIFxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICAvKiBCZXR0ZXIgd2F5IHRvIHNvcnQgdGhpcyBwbGVhc2UgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIG1heC13aWR0aDogMjZyZW07ICovXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIG1hcmdpbjogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyOCwgMjgpO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDkxdnc7XFxuXFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzU2NEFEO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ucG9rZW1vbi1pbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGJsdXIoM3B4KTtcXG59XFxuXFxuLmd1ZXNzLWJveCB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9rZW1vbic7XFxuXFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTYzYWQ7XFxuICAgIFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3Vlc3MtYm94OmZvY3VzIHsgXFxuICAgIG91dGxpbmU6IG5vbmU7IFxcbn0gXFxuXFxuLmd1ZXNzLWJveDo6cGxhY2Vob2xkZXIge1xcblxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM5NSk7XFxufVxcblxcbi5zdWJtaXQtZ3Vlc3MgeyBcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2V5Ym9hcmQgKi9cXG5cXG4ua2V5Ym9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCwgbWlubWF4KGF1dG8sIDEuMjVyZW0pKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDNyZW07XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmtleTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmtleTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgIC8qIFN0b3BzIG1vYmlsZSBiZWluZyB3ZWlyZCwgYnV0IGNhdXNlcyBxdWlya3Mgb24gZGVza3RvcCAqL1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbi5rZXkge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2NEFEO1xcbiAgICBjb2xvcjogI2ZmZTAzMTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmtleS5sYXJnZSB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIGZpbGw6ICNmZmUwMzE7IC8qIGZvciB0aGUgYmFja3NwYWNlIFNWRyAqL1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuc3ZnIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldFJhbmRvbVBva2Vtb24gfSBmcm9tICcuL3Bva2VBUEknO1xuXG5pbXBvcnQgeyBjaGFuZ2VEaXNwbGF5ZWRQb2tlbW9uLCBpbmNyZWFzZVBva2Vtb25TaXplLCByZXZlYWxQb2tlbW9uLCBcbiAgICAgICAgIHNldEd1ZXNzQm94VmFsdWUsIGVuYWJsZUtleWJvYXJkLCBkaXNhYmxlS2V5Ym9hcmQgfSBmcm9tICcuL1VJLmpzJztcblxubGV0IGN1cnJlbnRQb2tlbW9uTmFtZTtcblxubGV0IHR1cm5Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQb2tlbW9uKCkge1xuXG4gICAgY29uc3QgcG9rZW1vbiA9IGdldFJhbmRvbVBva2Vtb24oKTtcblxuICAgIHBva2Vtb24udGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY3VycmVudFBva2Vtb25OYW1lID0gcmVzcG9uc2UubmFtZTtcblxuICAgICAgICAgICAgY2hhbmdlRGlzcGxheWVkUG9rZW1vbihyZXNwb25zZS5zcHJpdGVzLmZyb250X2RlZmF1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0d1ZXNzID0gKGd1ZXNzKSA9PiB7XG5cbiAgICBpZiAoZ3Vlc3MgPT09IGN1cnJlbnRQb2tlbW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgLy8gU2V0IHR1cm5Db3VudGVyIHRvIDA7XG4gICAgdHVybkNvdW50ZXIgPSAwO1xuXG4gICAgLy8gR2VuZXJhdGUgbmV3IHJhbmRvbSBwb2tlbW9uXG4gICAgZ2VuZXJhdGVQb2tlbW9uKCk7XG5cbiAgICBlbmFibGVLZXlib2FyZCgpO1xufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IChndWVzcykgPT4ge1xuXG4gICAgaWYgKHR1cm5Db3VudGVyIDwgNSkge1xuXG4gICAgICAgIHR1cm5Db3VudGVyKys7XG4gICAgICAgIGluY3JlYXNlUG9rZW1vblNpemUodHVybkNvdW50ZXIpO1xuXG4gICAgICAgIGlmIChjaGVja0d1ZXNzKGd1ZXNzKSkge1xuICAgICAgICAgICAgcmV2ZWFsUG9rZW1vbigpO1xuICAgICAgICAgICAgaW5jcmVhc2VQb2tlbW9uU2l6ZSgpO1xuICAgICAgICAgICAgZGlzYWJsZUtleWJvYXJkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHVybkNvdW50ZXIgPT0gNSkge1xuICAgICAgICAgICAgLy8gU2hvdyBmdWxsIHNpemUgUG9rZW1vblxuICAgICAgICAgICAgcmV2ZWFsUG9rZW1vbigpO1xuICAgICAgICAgICAgaW5jcmVhc2VQb2tlbW9uU2l6ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGFuZ2UgZ3Vlc3NCb3ggdG8gYmUgcmVhbCB2YWx1ZVxuICAgICAgICAgICAgc2V0R3Vlc3NCb3hWYWx1ZShjdXJyZW50UG9rZW1vbk5hbWUpO1xuXG4gICAgICAgICAgICBkaXNhYmxlS2V5Ym9hcmQoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBOZXh0IHR1cm5cbiAgICAvLyBJbmNyZWFzZSBzaXplIG9mIHNwcml0ZVxuICAgIC8vIGluY3JlbWVudCB0dXJuIGNvdW50ZXJcblxuXG4vLyBTdG9wIHRha2luZyB1c2VyIGlucHV0IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xuXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9HYW1lJztcblxuLy8gR2V0IGNvbnRhaW5lclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIilcblxuZXhwb3J0IGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAvLyB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2hvJ3MgdGhhdCBQb2tlbW9uPyFcIjtcbiAgICB0aXRsZS5zcmMgPSBsb2dvO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG5cblxuICAgIC8vIFBva2Vtb24gaW1hZ2VcbiAgICBjb25zdCBwb2tlbW9uU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwb2tlbW9uU3ByaXRlLmNsYXNzTGlzdC5hZGQoXCJwb2tlbW9uLWltYWdlXCIpO1xuICAgIHBva2Vtb25TcHJpdGUuc3R5bGUud2lkdGggPSBcIjEwJVwiO1xuXG4gICAgLy8gSGlkZSB0aGUgc3ByaXRlXG4gICAgcG9rZW1vblNwcml0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChwb2tlbW9uU3ByaXRlKTtcblxuXG4gICAgLy8gR3Vlc3MgaW5wdXQgYm94XG4gICAgY29uc3QgZ3Vlc3NCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZ3Vlc3NCb3gudHlwZSA9IFwidGV4dFwiO1xuICAgIGd1ZXNzQm94LmNsYXNzTGlzdC5hZGQoXCJndWVzcy1ib3hcIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGd1ZXNzQm94KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZURpc3BsYXllZFBva2Vtb24gPSAoc3JjKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vblNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9rZW1vbi1pbWFnZVwiKTtcblxuICAgIHBva2Vtb25TcHJpdGUuc3JjID0gc3JjO1xufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2VQb2tlbW9uU2l6ZSA9ICh0dXJuKSA9PiB7XG5cbiAgICBjb25zdCBwb2tlbW9uU3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2tlbW9uLWltYWdlXCIpO1xuXG4gICAgc3dpdGNoKHR1cm4pIHtcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBwb2tlbW9uU3ByaXRlLnN0eWxlLndpZHRoID0gXCIyMCVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHBva2Vtb25TcHJpdGUuc3R5bGUud2lkdGggPSBcIjM1JVwiO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcG9rZW1vblNwcml0ZS5zdHlsZS53aWR0aCA9IFwiNTAlXCI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBwb2tlbW9uU3ByaXRlLnN0eWxlLndpZHRoID0gXCI3MCVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwb2tlbW9uU3ByaXRlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXZlYWxQb2tlbW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHBva2Vtb25TcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBva2Vtb24taW1hZ2VcIik7XG4gICAgcG9rZW1vblNwcml0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRHdWVzc0JveCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ndWVzcy1ib3hcIik7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRHdWVzc0JveFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgZ2V0R3Vlc3NCb3goKS52YWx1ZSA9IHZhbHVlO1xufVxuXG5cbi8vIEtleWJvYXJkXG5jb25zdCBrZXlib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmRcIik7XG5cbmV4cG9ydCBjb25zdCBlbmFibGVLZXlib2FyZCA9ICgpID0+IHtcbiAgICBrZXlib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW91c2VDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlS2V5Ym9hcmQgPSAoKSA9PiB7XG4gICAga2V5Ym9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vdXNlQ2xpY2spO1xufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEta2V5XVwiKSkge1xuICAgICAgICBwcmVzc0tleShlLnRhcmdldC5kYXRhc2V0LmtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWVudGVyXVwiKSkge1xuICAgICAgICAvL3N1Ym1pdCBndWVzc1xuICAgICAgICBnYW1lKGdldEd1ZXNzQm94KCkudmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZGVsZXRlXVwiKSkge1xuICAgICAgICAvLyBiYWNrc3BhY2VcbiAgICAgICAgZGVsZXRlQ2hhcihnZXRHdWVzc0JveCgpLnZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXNzS2V5KGtleSkge1xuICAgIGdldEd1ZXNzQm94KCkudmFsdWUgKz0ga2V5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHdWVzc0JveChndWVzcykge1xuICAgIGdldEd1ZXNzQm94KCkudmFsdWUgPSBndWVzcztcbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2hhcihzdHJpbmcpIHtcbiAgICB1cGRhdGVHdWVzc0JveChzdHJpbmcuc3Vic3RyaW5nKDAsIHN0cmluZy5sZW5ndGgtMSkpO1xufSIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb2tlbW9uKHBva2Vtb24pIHtcbiAgICAvLyBDYW4gcHJvdmlkZSBhIG5hbWUgb3IgYSBkZXggbnVtYmVyIGZvciBgcG9rZW1vbmBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwb2tlbW9ufWAsIHttb2RlOiAnY29ycyd9KVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Qb2tlbW9uID0gKCkgPT4ge1xuXG4gICAgLy8gR2VuIDEgb25seSBmb3Igbm93XG4gICAgY29uc3QgcmFuZG9tSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzODYpO1xuXG4gICAgcmV0dXJuIGdldFBva2Vtb24ocmFuZG9tSUQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7IHNldHVwVUkgfSBmcm9tICcuL1VJJztcbmltcG9ydCB7IG5ld0dhbWUgfSBmcm9tICcuL0dhbWUuanMnO1xuXG5zZXR1cFVJKCk7XG5uZXdHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9