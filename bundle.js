/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/PressStart2P-Regular.ttf */ \"./src/assets/fonts/PressStart2P-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'PressStart';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\n  font-style: normal;\\n}\\n\\nhtml {\\n  height: 100vh;\\n}\\n\\nbody {\\n  font-family: 'PressStart';\\n  background-color: #121212;\\n  color: #eeeeee;\\n  text-align: center;\\n  height: 100%;\\n  margin: 0;\\n  display: grid;\\n  align-items: center;\\n  justify-items: center;\\n  grid-template: 75px 50px 1fr / 1fr;\\n  grid-template-areas:\\n    'title'\\n    'score'\\n    'gs';\\n}\\n\\nh1 {\\n  letter-spacing: 1.2rem;\\n  color: #cccccc;\\n  grid-area: title;\\n}\\n\\n.score {\\n  grid-area: score;\\n  color: #cccccc;\\n  font-size: 1.1rem;\\n}\\n\\n.game-screen {\\n  display: grid;\\n  border: 1px solid #aaaaaa;\\n  grid-area: gs;\\n  height: 80vmin;\\n  width: 80vmin;\\n  align-self: start;\\n}\\n\\n.square {\\n  border: 1px solid #48484810;\\n  /* transition: background-color 100ms; */\\n}\\n\\n.square.active {\\n  background-color: #745f3a;\\n}\\n\\n.square[data-val='1'] {\\n  background-color: #6c7ba3;\\n  border-color: #b9d3d6;\\n  transition: none;\\n}\\n\\n.square[data-val='2'] {\\n  background-color: #79a1a0;\\n  border-color: #c9dada;\\n  transition: none;\\n}\\n\\n.square[data-val='4'] {\\n  background-color: #da6d3b;\\n}\\n\\n.game-paused,\\n.game-over {\\n  font-size: 2rem;\\n  background-color: #00000088;\\n  position: absolute;\\n  height: 100vh;\\n  width: 100vw;\\n  align-items: center;\\n  justify-content: center;\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snake-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movement */ \"./src/movement.js\");\n\nclass Control {\n  constructor(gameState, interval) {\n    this.gameState = gameState;\n    this.interval = interval;\n    this.state = 0; // 0: idle, 1: running, 2: paused, 3: resumed\n  }\n\n  start() {\n    console.log('Starting timer');\n    this.timerId = window.setInterval(() => {\n      this.moveSnake();\n    }, this.gameState.snakeSpeed);\n    this.state = 1;\n    console.log(this.gameState.snakeSpeed);\n  }\n\n  updateSpeed() {\n    clearInterval(this.timerId);\n    this.timerId = window.setInterval(() => {\n      this.moveSnake();\n    }, this.gameState.snakeSpeed);\n    this.gameState.updatingSpeed = false;\n  }\n\n  pause() {\n    console.log(this.gameState);\n    if (this.state != 1 && this.state != 3) return;\n\n    console.log('Pausing timer');\n    clearInterval(this.timerId);\n    this.state = 2;\n  }\n\n  stop() {\n    console.log('Stopping timer!!!');\n    clearInterval(this.timerId);\n    this.state = 0;\n  }\n\n  moveSnake() {\n    _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDirection(_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDesired());\n    const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };\n    if (!this.gameState.isPaused) {\n      switch (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection()) {\n        case 'up':\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].up(pos);\n          break;\n        case 'down':\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].down(pos);\n          break;\n        case 'left':\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].left(pos);\n          break;\n        case 'right':\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].right(pos);\n          break;\n        default:\n          break;\n      }\n    }\n\n    if (!this.gameState.isValidMove(pos) && !this.gameState.isPaused) {\n      this.gameState.isGameOver = true;\n      this.gameOver();\n    }\n    if (this.gameState.isValidMove(pos)) {\n      this.gameState.moveSnake(pos);\n      this.gameState.movesSinceFood += 1;\n      if (this.gameState.updatingSpeed) {\n        this.updateSpeed();\n      }\n    }\n    if (this.gameState.movesSinceFood >= 400) {\n      this.gameState.movesSinceFood = 0;\n      this.gameState.generateFood();\n    }\n    if (this.gameState.isFoodEmpty()) {\n      this.gameState.generateFood();\n    }\n  }\n\n  gameOver() {\n    this.stop();\n    document.querySelector('.game-over').style.display = 'flex';\n    const triggerReset = (e) => {\n      if (e.code === 'Space') {\n        _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired('right');\n        document.querySelector('.game-over').style.display = 'none';\n        this.gameState.reset();\n        this.start();\n        window.removeEventListener('keydown', triggerReset);\n      }\n    };\n\n    window.addEventListener('keydown', triggerReset);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n\n//# sourceURL=webpack://snake-game/./src/control.js?");

/***/ }),

/***/ "./src/gameScreen.js":
/*!***************************!*\
  !*** ./src/gameScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameScreen {\n  constructor(grid, gridSize, screenElement, scoreElement) {\n    this.grid = grid;\n    this.gridSize = gridSize;\n    this.screenElement = screenElement;\n    this.screenElement.style.gridTemplate = `repeat(${this.gridSize}, 1fr) / repeat(${this.gridSize}, 1fr)`;\n    this.scoreElement = scoreElement;\n    this.grid.forEach((x, xIndex) => {\n      x.forEach((y, yIndex) => {\n        const square = document.createElement('div');\n        square.dataset.x = `${xIndex}`;\n        square.dataset.y = `${yIndex}`;\n        square.dataset.val = `${y}`;\n        square.classList.add('square');\n        this.screenElement.append(square);\n      });\n    });\n  }\n\n  gridSquare(x, y) {\n    return this.screenElement.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\n  }\n\n  setSquareValue(x, y, value) {\n    this.gridSquare(x, y).dataset.val = value;\n  }\n\n  setScoreText(score) {\n    this.scoreElement.innerText = score;\n    console.log(score);\n    this.screenElement.style.boxShadow = `0px 0px ${score / 100}px #ffffff`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameScreen);\n\n\n//# sourceURL=webpack://snake-game/./src/gameScreen.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameState {\n  constructor(grid, screen) {\n    this.snakeSize = 3;\n    this.snakeSpeed = 50;\n    this.movesSinceFood = 0;\n    this.pos = [{ x: 1, y: 1 }];\n    this.food = [];\n    this.grid = grid;\n    this.screen = screen;\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);\n    this.isPaused = false;\n    this.score = 0;\n    this.isGameOver = false;\n    this.updatingSpeed = false;\n  }\n\n  eatFood(pos) {\n    this.snakeSize += 1;\n    const foodIndex = this.food.indexOf(pos);\n    this.food.splice(foodIndex, 1);\n    this.movesSinceFood = 0;\n    this.score += 100;\n    this.screen.setScoreText(this.score);\n    if (this.score % 500 === 0) {\n      this.updatingSpeed = true;\n      this.snakeSpeed -= 2;\n    }\n  }\n\n  isFoodEmpty() {\n    if (this.food.length) {\n      return false;\n    }\n    return true;\n  }\n\n  getHeadPos() {\n    return this.pos[0];\n  }\n\n  setHeadPos(val) {\n    this.pos[0] = val;\n  }\n\n  getGridElementValue(x, y) {\n    return this.grid.gridStore[x][y];\n  }\n\n  setGridElement(x, y, val) {\n    this.grid.gridStore[x][y] = val;\n    this.screen.setSquareValue(x, y, val);\n  }\n\n  clearGrid() {\n    for (let x = 1; x <= this.grid.size; x++) {\n      for (let y = 1; y <= this.grid.size; y++) {\n        this.setGridElement(x, y, 0);\n      }\n    }\n  }\n\n  moveSnake(newPosition) {\n    if (this.getGridElementValue(newPosition.x, newPosition.y) === 4) {\n      this.eatFood(newPosition);\n    }\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 2);\n    this.pos.unshift(newPosition);\n    this.setGridElement(newPosition.x, newPosition.y, 1);\n    if (this.pos.length > this.snakeSize) {\n      const tailRemove = this.pos.pop();\n      this.setGridElement(tailRemove.x, tailRemove.y, 0);\n    }\n  }\n\n  isValidMove(newPosition) {\n    if (this.pos.some((e) => e.x === newPosition.x && e.y === newPosition.y)) {\n      return false;\n    }\n    // eslint-disable-next-line no-restricted-syntax\n    if (\n      newPosition.x < 1 ||\n      newPosition.x > this.grid.size ||\n      newPosition.y < 1 ||\n      newPosition.y > this.grid.size\n    ) {\n      return false;\n    }\n\n    return true;\n  }\n\n  createFood(position) {\n    this.setGridElement(position.x, position.y, 4);\n    this.food.push(position);\n  }\n\n  randomPosition() {\n    const x = Math.floor(Math.random() * this.grid.size) + 1;\n    const y = Math.floor(Math.random() * this.grid.size) + 1;\n    return { x, y };\n  }\n\n  generateFood() {\n    const newPosition = this.randomPosition();\n    if (!this.getGridElementValue(newPosition.x, newPosition.y)) {\n      this.createFood(newPosition);\n    } else {\n      this.generateFood();\n    }\n  }\n\n  reset() {\n    this.snakeSize = 3;\n    this.snakeSpeed = 50;\n    this.movesSinceFood = 0;\n    this.pos = [{ x: 1, y: 1 }];\n    this.food = [];\n    this.score = 0;\n    this.screen.setScoreText(this.score);\n    this.isPaused = false;\n    this.isGameOver = false;\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);\n    this.clearGrid();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameState);\n\n\n//# sourceURL=webpack://snake-game/./src/gameState.js?");

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Grid {\n  constructor(size) {\n    const grid = [];\n    for (let x = 1; x <= size; x++) {\n      const gridY = [];\n      grid[x] = gridY;\n      for (let y = 1; y <= size; y++) {\n        gridY[y] = 0;\n      }\n    }\n    this.size = size;\n    this.gridStore = grid;\n  }\n\n  // clear() {\n  //   this.gridStore.forEach((x) => {\n  //     x.forEach((square) => {\n  //       square = 0;\n  //       console.log(square);\n  //     });\n  //   });\n  // }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Grid(50));\n\n\n//# sourceURL=webpack://snake-game/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameScreen */ \"./src/gameScreen.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movement */ \"./src/movement.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n\n\n\n\n\n\n\nconst gameScreenElement = document.querySelector('.game-screen');\nconst scoreElement = document.querySelector('.score-value');\nconst gameScreen = new _gameScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n  _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gridStore,\n  _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].size,\n  gameScreenElement,\n  scoreElement,\n);\n\nconst startGame = () => {\n  return new _gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], gameScreen);\n};\n\nlet gameState = new _gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], gameScreen);\n\n// const moveSnake = () => {\n//   move.setDirection(move.getDesired());\n//   const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };\n//   if (!gameState.isPaused) {\n//     switch (move.getDirection()) {\n//       case 'up':\n//         move.up(pos);\n//         break;\n//       case 'down':\n//         move.down(pos);\n//         break;\n//       case 'left':\n//         move.left(pos);\n//         break;\n//       case 'right':\n//         move.right(pos);\n//         break;\n//       default:\n//         break;\n//     }\n//   }\n\n//   if (!gameState.isValidMove(pos) && !gameState.isPaused) {\n//     gameState.isGameOver = true;\n//     console.log(gameState.pos);\n//     controller.;\n//     gameOver();\n//   }\n//   if (gameState.isValidMove(pos)) {\n//     gameState.moveSnake(pos);\n//     gameState.movesSinceFood += 1;\n//   }\n//   if (gameState.movesSinceFood >= 400) {\n//     gameState.movesSinceFood = 0;\n//     gameState.generateFood();\n//   }\n//   if (gameState.isFoodEmpty()) {\n//     gameState.generateFood();\n//   }\n// };\n\nconst controller = new _control__WEBPACK_IMPORTED_MODULE_5__[\"default\"](gameState, gameState.snakeSpeed);\ncontroller.start();\n\nwindow.addEventListener('keydown', (e) => {\n  if (!gameState.isPaused) {\n    const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };\n    if (_movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getDirection() !== 'up' && _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getDirection() !== 'down') {\n      if (e.code === 'ArrowUp') {\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].up(pos);\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setDesired('up');\n      }\n\n      if (e.code === 'ArrowDown') {\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].down(pos);\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setDesired('down');\n      }\n    }\n\n    if (_movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getDirection() !== 'left' && _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getDirection() !== 'right') {\n      if (e.code === 'ArrowLeft') {\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].left(pos);\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setDesired('left');\n      }\n\n      if (e.code === 'ArrowRight') {\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].right(pos);\n        _movement__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setDesired('right');\n      }\n    }\n  }\n\n  if (e.code === 'Space') {\n    if (!gameState.isGameOver) {\n      if (!gameState.isPaused) {\n        gameState.isPaused = true;\n        controller.pause();\n        document.querySelector('.game-paused').style.display = 'flex';\n      } else {\n        gameState.isPaused = false;\n        controller.start();\n        document.querySelector('.game-paused').style.display = 'none';\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://snake-game/./src/index.js?");

/***/ }),

/***/ "./src/movement.js":
/*!*************************!*\
  !*** ./src/movement.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass move {\n  static desiredDirection = 'right';\n  static direction = 'right';\n\n  static up(pos) {\n    pos.x -= 1;\n  }\n\n  static down(pos) {\n    pos.x += 1;\n  }\n\n  static left(pos) {\n    pos.y -= 1;\n  }\n\n  static right(pos) {\n    pos.y += 1;\n  }\n\n  static getDesired() {\n    return this.desiredDirection;\n  }\n\n  static setDesired(desiredDirection) {\n    this.desiredDirection = desiredDirection;\n  }\n\n  static getDirection() {\n    return this.direction;\n  }\n\n  static setDirection(direction) {\n    this.direction = direction;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);\n\n\n//# sourceURL=webpack://snake-game/./src/movement.js?");

/***/ }),

/***/ "./src/assets/fonts/PressStart2P-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/PressStart2P-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21503c6a5385ab41dde9.ttf\";\n\n//# sourceURL=webpack://snake-game/./src/assets/fonts/PressStart2P-Regular.ttf?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;