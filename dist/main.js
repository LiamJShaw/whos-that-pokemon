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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Pokemon';\n  \n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  }\n  \n  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    width: 40rem;\n    max-width: 90vw;\n\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    max-height: 20%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n}\n\n.hidden {\n    filter: brightness(0) blur(3px);\n}\n\n.guess-box {\n    user-select: none;\n    pointer-events: none; \n\n    font-family: 'Pokemon';\n\n    margin: 0 0 1rem 0;\n    padding: 1rem;\n\n    width: 100vw;\n\n    border: none;\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.turn-indicator-container {\n    width: 100%;\n\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.turn-indicator {\n    border: 1px solid white;\n    flex: 1;\n\n    height: 20px;\n}\n\n\n/* .submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n} */\n\n\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n\n    user-select: none;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n\n    /* Stops mobile being weird, but causes quirks on desktop */\n    opacity: 1;\n  }\n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;IAEtB;gEACqE;EACvE;;;;AAIF;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;;IAEtB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;;IAEjB,mCAAmC;IACnC,iBAAiB;IACjB,sBAAsB;;IAEtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,YAAY;;IAEZ,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,eAAe;;IAEf,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;;IAEnB,8BAA8B;;IAE9B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;;IAEf,WAAW;AACf;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;;IAEpB,sBAAsB;;IAEtB,kBAAkB;IAClB,aAAa;;IAEb,YAAY;;IAEZ,YAAY;;IAEZ,yBAAyB;;IAEzB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,OAAO;;IAEP,YAAY;AAChB;;;AAGA;;;;;;GAMG;;;;AAIH,aAAa;;AAEb;IACI,aAAa;IACb,wDAAwD;IACxD,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;;IAEvB,WAAW;;IAEX,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,gBAAgB;;IAEhB,2DAA2D;IAC3D,UAAU;EACZ;;AAEF;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;;IAEd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa,EAAE,0BAA0B;AAC7C;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["@font-face {\n    font-family: 'Pokemon';\n  \n    src: url('/src/fonts/Pokemon\\ Classic\\ Regular.woff') format('woff'),\n         url('/src/fonts/Pokemon\\ Classic\\ Regular.woff') format('woff2');\n  }\n  \n  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    width: 40rem;\n    max-width: 90vw;\n\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    max-height: 20%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n}\n\n.hidden {\n    filter: brightness(0) blur(3px);\n}\n\n.guess-box {\n    user-select: none;\n    pointer-events: none; \n\n    font-family: 'Pokemon';\n\n    margin: 0 0 1rem 0;\n    padding: 1rem;\n\n    width: 100vw;\n\n    border: none;\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.turn-indicator-container {\n    width: 100%;\n\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.turn-indicator {\n    border: 1px solid white;\n    flex: 1;\n\n    height: 20px;\n}\n\n\n/* .submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n} */\n\n\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n\n    user-select: none;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n\n    /* Stops mobile being weird, but causes quirks on desktop */\n    opacity: 1;\n  }\n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}"],"sourceRoot":""}]);
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
        } else {
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.setGuessBoxValue)("");
        }

        if (turnCounter == 5) {
            // Show full colour and full size Pokemon
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.revealPokemon)();
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.increasePokemonSize)();
            
            // Change guessBox to be real value
            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.setGuessBoxValue)(currentPokemonName);

            (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.disableKeyboard)();

            return;
        }
    }
}

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
    pokemonSprite.style.width = "20%";

    // Hide the sprite
    pokemonSprite.classList.add("hidden");

    container.append(pokemonSprite);


    // Guess input box
    const guessBox = document.createElement("input");
    guessBox.type = "text";
    guessBox.classList.add("guess-box");

    container.append(guessBox);

    // Turn indicator
    const turnIndicatorContainer = document.createElement("div");
    turnIndicatorContainer.classList.add("turn-indicator-container")

    const turn1Indicator = document.createElement("div");
    turn1Indicator.classList.add("turn-indicator");
    turnIndicatorContainer.append(turn1Indicator);

    const turn2Indicator = document.createElement("div");
    turn2Indicator.classList.add("turn-indicator");
    turnIndicatorContainer.append(turn2Indicator);

    const turn3Indicator = document.createElement("div");
    turn3Indicator.classList.add("turn-indicator");
    turnIndicatorContainer.append(turn3Indicator);

    const turn4Indicator = document.createElement("div");
    turn4Indicator.classList.add("turn-indicator");
    turnIndicatorContainer.append(turn4Indicator);

    const turn5Indicator = document.createElement("div");
    turn5Indicator.classList.add("turn-indicator");
    turnIndicatorContainer.append(turn5Indicator);

    // container.append(turnIndicatorContainer);
}

const changeDisplayedPokemon = (src) => {
    const pokemonSprite = document.querySelector(".pokemon-image");

    pokemonSprite.src = src;
}

const increasePokemonSize = (turn) => {

    const pokemonSprite = document.querySelector(".pokemon-image");

    switch(turn) {

        case 1:
            pokemonSprite.style.width = "30%";
            break;

        case 2:
            pokemonSprite.style.width = "40%";
            break;

        case 3:
            pokemonSprite.style.width = "60%";
            break;

        case 4:
            pokemonSprite.style.width = "80%";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRVM7QUFDSzs7QUFFcEMsNENBQU87QUFDUCxpREFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi8uL3NyYy9wb2tlQVBJLmpzIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dob3MtdGhhdC1wb2tlbW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXBva2Vtb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvUG9rZW1vbiBDbGFzc2ljIFJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1Bva2Vtb24nO1xcbiAgXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXG4gIH1cXG4gIFxcbiAgXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxuICAgIC8qIEJldHRlciB3YXkgdG8gc29ydCB0aGlzIHBsZWFzZSAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogbWF4LXdpZHRoOiAyNnJlbTsgKi9cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgbWFyZ2luOiAxcmVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDI4LCAyOCk7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIG1heC13aWR0aDogOTB2dztcXG5cXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzNTY0QUQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5wb2tlbW9uLWltYWdlIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgYmx1cigzcHgpO1xcbn1cXG5cXG4uZ3Vlc3MtYm94IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdQb2tlbW9uJztcXG5cXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjNhZDtcXG4gICAgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ndWVzcy1ib3g6Zm9jdXMgeyBcXG4gICAgb3V0bGluZTogbm9uZTsgXFxufSBcXG5cXG4uZ3Vlc3MtYm94OjpwbGFjZWhvbGRlciB7XFxuXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzk1KTtcXG59XFxuXFxuLnR1cm4taW5kaWNhdG9yLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnR1cm4taW5kaWNhdG9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogLnN1Ym1pdC1ndWVzcyB7IFxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG5cXG5cXG5cXG4vKiBLZXlib2FyZCAqL1xcblxcbi5rZXlib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIwLCBtaW5tYXgoYXV0bywgMS4yNXJlbSkpO1xcbiAgICBncmlkLWF1dG8tcm93czogM3JlbTtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ua2V5OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ua2V5OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG5cXG4gICAgLyogU3RvcHMgbW9iaWxlIGJlaW5nIHdlaXJkLCBidXQgY2F1c2VzIHF1aXJrcyBvbiBkZXNrdG9wICovXFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuLmtleSB7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTY0QUQ7XFxuICAgIGNvbG9yOiAjZmZlMDMxO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ua2V5LmxhcmdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgZmlsbDogI2ZmZTAzMTsgLyogZm9yIHRoZSBiYWNrc3BhY2UgU1ZHICovXFxufVxcblxcbi5zcGFjZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5zdmcge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0lBRXRCO2dFQUNxRTtFQUN2RTs7OztBQUlGO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0lBRXRCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsc0JBQXNCOztJQUV0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCxZQUFZOztJQUVaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlOztJQUVmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsbUJBQW1COztJQUVuQiw4QkFBOEI7O0lBRTlCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTs7SUFFZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQixzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLFlBQVk7O0lBRVosWUFBWTs7SUFFWix5QkFBeUI7O0lBRXpCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsT0FBTzs7SUFFUCxZQUFZO0FBQ2hCOzs7QUFHQTs7Ozs7O0dBTUc7Ozs7QUFJSCxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHdEQUF3RDtJQUN4RCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsV0FBVzs7SUFFWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7SUFFaEIsMkRBQTJEO0lBQzNELFVBQVU7RUFDWjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYSxFQUFFLDBCQUEwQjtBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9rZW1vbic7XFxuICBcXG4gICAgc3JjOiB1cmwoJy9zcmMvZm9udHMvUG9rZW1vblxcXFwgQ2xhc3NpY1xcXFwgUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICAgdXJsKCcvc3JjL2ZvbnRzL1Bva2Vtb25cXFxcIENsYXNzaWNcXFxcIFJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZjInKTtcXG4gIH1cXG4gIFxcbiAgXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxuICAgIC8qIEJldHRlciB3YXkgdG8gc29ydCB0aGlzIHBsZWFzZSAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogbWF4LXdpZHRoOiAyNnJlbTsgKi9cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgbWFyZ2luOiAxcmVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDI4LCAyOCk7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIG1heC13aWR0aDogOTB2dztcXG5cXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzNTY0QUQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5wb2tlbW9uLWltYWdlIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgYmx1cigzcHgpO1xcbn1cXG5cXG4uZ3Vlc3MtYm94IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdQb2tlbW9uJztcXG5cXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjNhZDtcXG4gICAgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ndWVzcy1ib3g6Zm9jdXMgeyBcXG4gICAgb3V0bGluZTogbm9uZTsgXFxufSBcXG5cXG4uZ3Vlc3MtYm94OjpwbGFjZWhvbGRlciB7XFxuXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzk1KTtcXG59XFxuXFxuLnR1cm4taW5kaWNhdG9yLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnR1cm4taW5kaWNhdG9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogLnN1Ym1pdC1ndWVzcyB7IFxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG5cXG5cXG5cXG4vKiBLZXlib2FyZCAqL1xcblxcbi5rZXlib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIwLCBtaW5tYXgoYXV0bywgMS4yNXJlbSkpO1xcbiAgICBncmlkLWF1dG8tcm93czogM3JlbTtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ua2V5OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ua2V5OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG5cXG4gICAgLyogU3RvcHMgbW9iaWxlIGJlaW5nIHdlaXJkLCBidXQgY2F1c2VzIHF1aXJrcyBvbiBkZXNrdG9wICovXFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuLmtleSB7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTY0QUQ7XFxuICAgIGNvbG9yOiAjZmZlMDMxO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ua2V5LmxhcmdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgZmlsbDogI2ZmZTAzMTsgLyogZm9yIHRoZSBiYWNrc3BhY2UgU1ZHICovXFxufVxcblxcbi5zcGFjZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5zdmcge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0UmFuZG9tUG9rZW1vbiB9IGZyb20gJy4vcG9rZUFQSSc7XG5cbmltcG9ydCB7IGNoYW5nZURpc3BsYXllZFBva2Vtb24sIGluY3JlYXNlUG9rZW1vblNpemUsIHJldmVhbFBva2Vtb24sIFxuICAgICAgICAgc2V0R3Vlc3NCb3hWYWx1ZSwgZW5hYmxlS2V5Ym9hcmQsIGRpc2FibGVLZXlib2FyZCB9IGZyb20gJy4vVUkuanMnO1xuXG5sZXQgY3VycmVudFBva2Vtb25OYW1lO1xuXG5sZXQgdHVybkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVBva2Vtb24oKSB7XG5cbiAgICBjb25zdCBwb2tlbW9uID0gZ2V0UmFuZG9tUG9rZW1vbigpO1xuXG4gICAgcG9rZW1vbi50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9rZW1vbk5hbWUgPSByZXNwb25zZS5uYW1lO1xuXG4gICAgICAgICAgICBjaGFuZ2VEaXNwbGF5ZWRQb2tlbW9uKHJlc3BvbnNlLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrR3Vlc3MgPSAoZ3Vlc3MpID0+IHtcblxuICAgIGlmIChndWVzcyA9PT0gY3VycmVudFBva2Vtb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICAvLyBTZXQgdHVybkNvdW50ZXIgdG8gMDtcbiAgICB0dXJuQ291bnRlciA9IDA7XG5cbiAgICAvLyBHZW5lcmF0ZSBuZXcgcmFuZG9tIHBva2Vtb25cbiAgICBnZW5lcmF0ZVBva2Vtb24oKTtcblxuICAgIGVuYWJsZUtleWJvYXJkKCk7XG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKGd1ZXNzKSA9PiB7XG5cbiAgICBpZiAodHVybkNvdW50ZXIgPCA1KSB7XG5cbiAgICAgICAgdHVybkNvdW50ZXIrKztcbiAgICAgICAgaW5jcmVhc2VQb2tlbW9uU2l6ZSh0dXJuQ291bnRlcik7XG5cbiAgICAgICAgaWYgKGNoZWNrR3Vlc3MoZ3Vlc3MpKSB7XG4gICAgICAgICAgICByZXZlYWxQb2tlbW9uKCk7XG4gICAgICAgICAgICBpbmNyZWFzZVBva2Vtb25TaXplKCk7XG4gICAgICAgICAgICBkaXNhYmxlS2V5Ym9hcmQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEd1ZXNzQm94VmFsdWUoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHVybkNvdW50ZXIgPT0gNSkge1xuICAgICAgICAgICAgLy8gU2hvdyBmdWxsIGNvbG91ciBhbmQgZnVsbCBzaXplIFBva2Vtb25cbiAgICAgICAgICAgIHJldmVhbFBva2Vtb24oKTtcbiAgICAgICAgICAgIGluY3JlYXNlUG9rZW1vblNpemUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hhbmdlIGd1ZXNzQm94IHRvIGJlIHJlYWwgdmFsdWVcbiAgICAgICAgICAgIHNldEd1ZXNzQm94VmFsdWUoY3VycmVudFBva2Vtb25OYW1lKTtcblxuICAgICAgICAgICAgZGlzYWJsZUtleWJvYXJkKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9sb2dvLnBuZyc7XG5cbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL0dhbWUnO1xuXG4vLyBHZXQgY29udGFpbmVyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICAvLyBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gbmV3IEltYWdlKCk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gXCJXaG8ncyB0aGF0IFBva2Vtb24/IVwiO1xuICAgIHRpdGxlLnNyYyA9IGxvZ287XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlKTtcblxuXG4gICAgLy8gUG9rZW1vbiBpbWFnZVxuICAgIGNvbnN0IHBva2Vtb25TcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBva2Vtb25TcHJpdGUuY2xhc3NMaXN0LmFkZChcInBva2Vtb24taW1hZ2VcIik7XG4gICAgcG9rZW1vblNwcml0ZS5zdHlsZS53aWR0aCA9IFwiMjAlXCI7XG5cbiAgICAvLyBIaWRlIHRoZSBzcHJpdGVcbiAgICBwb2tlbW9uU3ByaXRlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHBva2Vtb25TcHJpdGUpO1xuXG5cbiAgICAvLyBHdWVzcyBpbnB1dCBib3hcbiAgICBjb25zdCBndWVzc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBndWVzc0JveC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZ3Vlc3NCb3guY2xhc3NMaXN0LmFkZChcImd1ZXNzLWJveFwiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoZ3Vlc3NCb3gpO1xuXG4gICAgLy8gVHVybiBpbmRpY2F0b3JcbiAgICBjb25zdCB0dXJuSW5kaWNhdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dXJuSW5kaWNhdG9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0dXJuLWluZGljYXRvci1jb250YWluZXJcIilcblxuICAgIGNvbnN0IHR1cm4xSW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dXJuMUluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwidHVybi1pbmRpY2F0b3JcIik7XG4gICAgdHVybkluZGljYXRvckNvbnRhaW5lci5hcHBlbmQodHVybjFJbmRpY2F0b3IpO1xuXG4gICAgY29uc3QgdHVybjJJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR1cm4ySW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJ0dXJuLWluZGljYXRvclwiKTtcbiAgICB0dXJuSW5kaWNhdG9yQ29udGFpbmVyLmFwcGVuZCh0dXJuMkluZGljYXRvcik7XG5cbiAgICBjb25zdCB0dXJuM0luZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHVybjNJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcInR1cm4taW5kaWNhdG9yXCIpO1xuICAgIHR1cm5JbmRpY2F0b3JDb250YWluZXIuYXBwZW5kKHR1cm4zSW5kaWNhdG9yKTtcblxuICAgIGNvbnN0IHR1cm40SW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dXJuNEluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwidHVybi1pbmRpY2F0b3JcIik7XG4gICAgdHVybkluZGljYXRvckNvbnRhaW5lci5hcHBlbmQodHVybjRJbmRpY2F0b3IpO1xuXG4gICAgY29uc3QgdHVybjVJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR1cm41SW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJ0dXJuLWluZGljYXRvclwiKTtcbiAgICB0dXJuSW5kaWNhdG9yQ29udGFpbmVyLmFwcGVuZCh0dXJuNUluZGljYXRvcik7XG5cbiAgICAvLyBjb250YWluZXIuYXBwZW5kKHR1cm5JbmRpY2F0b3JDb250YWluZXIpO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlRGlzcGxheWVkUG9rZW1vbiA9IChzcmMpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uU3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2tlbW9uLWltYWdlXCIpO1xuXG4gICAgcG9rZW1vblNwcml0ZS5zcmMgPSBzcmM7XG59XG5cbmV4cG9ydCBjb25zdCBpbmNyZWFzZVBva2Vtb25TaXplID0gKHR1cm4pID0+IHtcblxuICAgIGNvbnN0IHBva2Vtb25TcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBva2Vtb24taW1hZ2VcIik7XG5cbiAgICBzd2l0Y2godHVybikge1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHBva2Vtb25TcHJpdGUuc3R5bGUud2lkdGggPSBcIjMwJVwiO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcG9rZW1vblNwcml0ZS5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBwb2tlbW9uU3ByaXRlLnN0eWxlLndpZHRoID0gXCI2MCVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHBva2Vtb25TcHJpdGUuc3R5bGUud2lkdGggPSBcIjgwJVwiO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHBva2Vtb25TcHJpdGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJldmVhbFBva2Vtb24gPSAoKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vblNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9rZW1vbi1pbWFnZVwiKTtcbiAgICBwb2tlbW9uU3ByaXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGdldEd1ZXNzQm94KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmd1ZXNzLWJveFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldEd1ZXNzQm94VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBnZXRHdWVzc0JveCgpLnZhbHVlID0gdmFsdWU7XG59XG5cblxuXG4vLyBLZXlib2FyZFxuY29uc3Qga2V5Ym9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtleWJvYXJkXCIpO1xuXG5leHBvcnQgY29uc3QgZW5hYmxlS2V5Ym9hcmQgPSAoKSA9PiB7XG4gICAga2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vdXNlQ2xpY2spO1xufVxuXG5leHBvcnQgY29uc3QgZGlzYWJsZUtleWJvYXJkID0gKCkgPT4ge1xuICAgIGtleWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNb3VzZUNsaWNrKTtcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZUNsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWtleV1cIikpIHtcbiAgICAgICAgcHJlc3NLZXkoZS50YXJnZXQuZGF0YXNldC5rZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1lbnRlcl1cIikpIHtcbiAgICAgICAgLy9zdWJtaXQgZ3Vlc3NcbiAgICAgICAgZ2FtZShnZXRHdWVzc0JveCgpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWRlbGV0ZV1cIikpIHtcbiAgICAgICAgLy8gYmFja3NwYWNlXG4gICAgICAgIGRlbGV0ZUNoYXIoZ2V0R3Vlc3NCb3goKS52YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVzc0tleShrZXkpIHtcbiAgICBnZXRHdWVzc0JveCgpLnZhbHVlICs9IGtleTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR3Vlc3NCb3goZ3Vlc3MpIHtcbiAgICBnZXRHdWVzc0JveCgpLnZhbHVlID0gZ3Vlc3M7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNoYXIoc3RyaW5nKSB7XG4gICAgdXBkYXRlR3Vlc3NCb3goc3RyaW5nLnN1YnN0cmluZygwLCBzdHJpbmcubGVuZ3RoLTEpKTtcbn0iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihwb2tlbW9uKSB7XG4gICAgLy8gQ2FuIHByb3ZpZGUgYSBuYW1lIG9yIGEgZGV4IG51bWJlciBmb3IgYHBva2Vtb25gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cG9rZW1vbn1gLCB7bW9kZTogJ2NvcnMnfSlcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tUG9rZW1vbiA9ICgpID0+IHtcblxuICAgIC8vIEdlbiAxIG9ubHkgZm9yIG5vd1xuICAgIGNvbnN0IHJhbmRvbUlEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzg2KTtcblxuICAgIHJldHVybiBnZXRQb2tlbW9uKHJhbmRvbUlEKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBzZXR1cFVJIH0gZnJvbSAnLi9VSSc7XG5pbXBvcnQgeyBuZXdHYW1lIH0gZnJvbSAnLi9HYW1lLmpzJztcblxuc2V0dXBVSSgpO1xubmV3R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==