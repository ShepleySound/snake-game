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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/PressStart2P-Regular.ttf */ \"./src/assets/fonts/PressStart2P-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n}\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\n@font-face {\\n  font-family: 'PressStart';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\n  font-style: normal;\\n}\\n\\nhtml {\\n  height: 100vh;\\n}\\n\\nbody {\\n  font-family: 'PressStart';\\n  background-color: #121212;\\n  color: #eeeeee;\\n  text-align: center;\\n  height: 100%;\\n  margin: 0;\\n  display: grid;\\n  align-items: center;\\n  justify-items: center;\\n  grid-template: 75px 50px 1fr / 1fr;\\n  grid-template-areas:\\n    'title'\\n    'score'\\n    'gs';\\n}\\n\\nh1 {\\n  color: #cccccc;\\n  grid-area: title;\\n}\\n\\n.score {\\n  grid-area: score;\\n  color: #cccccc;\\n  font-size: 1.1rem;\\n}\\n\\n.game-screen {\\n  display: grid;\\n  border: 1px solid #aaaaaa;\\n  grid-area: gs;\\n  height: 80vmin;\\n  width: 80vmin;\\n  align-self: start;\\n  position: relative;\\n}\\n\\n.square {\\n  border: 1px solid #48484810;\\n  /* transition: background-color 100ms; */\\n}\\n\\n.square.active {\\n  background-color: #745f3a;\\n}\\n\\n.square[data-val='1'] {\\n  background-color: #6c7ba3;\\n  border-color: #b9d3d6;\\n  transition: none;\\n}\\n\\n.square[data-val='2'] {\\n  background-color: #79a1a0;\\n  border-color: #c9dada;\\n  transition: none;\\n}\\n\\n.square[data-val='4'] {\\n  background-color: #da6d3b;\\n}\\n\\n.dpad {\\n  display: grid;\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  grid-template: 1fr 2fr 1fr / 1fr 1fr;\\n  grid-template-areas:\\n    'up up'\\n    'left right'\\n    'down down';\\n  gap: 1px;\\n}\\n\\n.dpad-button {\\n  background-color: #ffffff0a;\\n  border: none;\\n}\\n\\n.dpad-button:hover {\\n  background-color: #ffffff0f;\\n}\\n\\n.dpad-button:active {\\n  box-shadow: inset 0px 0px 6px #ffffff11;\\n}\\n\\n.dpad-arrow {\\n  opacity: 9%;\\n}\\n\\n.dpad-up {\\n  grid-area: up;\\n}\\n\\n.dpad-down {\\n  grid-area: down;\\n}\\n\\n.dpad-left {\\n  grid-area: left;\\n}\\n\\n.dpad-right {\\n  grid-area: right;\\n}\\n\\n.overlay {\\n  font-size: calc(1.5rem + 1vw);\\n  background-color: #00000088;\\n  position: absolute;\\n  height: 100vh;\\n  width: 100vw;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  display: none;\\n}\\n\\n.overlay-head,\\n.overlay-hiscore {\\n  margin: 18px;\\n}\\n\\n.entername-congrats,\\n.entername-prompt,\\n.entername-input {\\n  font-family: 'PressStart';\\n  font-size: calc(1.5rem + 1vw);\\n  text-align: center;\\n  margin: 12px;\\n  background-color: transparent;\\n  color: #ffffff;\\n  border: none;\\n  outline: none;\\n  width: 80%;\\n}\\n\\n.entername-input {\\n  background-color: #242424;\\n  width: 60%;\\n  padding: 12px;\\n}\\n\\n.hiscore-container {\\n  display: grid;\\n  width: clamp(400px, 100%, 600px);\\n  gap: 12px;\\n  grid-auto-rows: 1fr;\\n  grid-template-columns: 2fr 1fr;\\n  align-items: center;\\n  justify-items: end;\\n  /* background-color: #181818; */\\n  padding: 18px;\\n}\\n\\n.option {\\n  background-color: transparent;\\n  border: none;\\n  font-size: 1rem;\\n  font-family: 'PressStart';\\n  color: #ffffff;\\n  padding: 12px;\\n  margin-top: 36px;\\n  background-color: #242424;\\n}\\n\\n.option:hover {\\n  background-color: #282828;\\n}\\n\\n.hiscore-name {\\n  justify-self: start;\\n}\\n\\n@media (orientation: portrait) {\\n  body {\\n    grid-template: 50px 25px 1fr / 1fr;\\n    grid-template-areas:\\n      'title'\\n      'score'\\n      'gs';\\n  }\\n  h1 {\\n    font-size: 1.5rem;\\n  }\\n  .score {\\n    font-size: 0.8rem;\\n  }\\n  .game-screen {\\n    height: 92vmin;\\n    width: 92vmin;\\n  }\\n}\\n/* \\n.hiscore-score {\\n  width: min-content;\\n} */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULTSCORES\": () => (/* binding */ DEFAULTSCORES),\n/* harmony export */   \"UP\": () => (/* binding */ UP),\n/* harmony export */   \"DOWN\": () => (/* binding */ DOWN),\n/* harmony export */   \"LEFT\": () => (/* binding */ LEFT),\n/* harmony export */   \"RIGHT\": () => (/* binding */ RIGHT),\n/* harmony export */   \"SPACE\": () => (/* binding */ SPACE)\n/* harmony export */ });\nconst DEFAULTSCORES = [\n  { name: 'Player 1', score: 500 },\n  { name: 'Player 2', score: 400 },\n  { name: 'Player 3', score: 300 },\n  { name: 'Player 4', score: 200 },\n  { name: 'Player 5', score: 100 },\n];\n\nconst UP = 'up';\nconst DOWN = 'down';\nconst LEFT = 'left';\nconst RIGHT = 'right';\nconst SPACE = 'Space';\n\n\n\n\n//# sourceURL=webpack://snake-game/./src/constants.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movement */ \"./src/movement.js\");\n/* harmony import */ var _scoreboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoreboard */ \"./src/scoreboard.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass Control {\n  constructor(gameState, interval) {\n    this.gameState = gameState;\n    this.interval = interval;\n    this.state = 0; // 0: idle, 1: running, 2: paused, 3: resumed\n    this.start();\n    this.keydownListener();\n    this.dpadListener();\n  }\n  // Start the timer that controls snake movement and food spawn\n  start() {\n    this.timerId = window.setInterval(() => {\n      this.moveSnake();\n    }, this.gameState.snakeSpeed);\n    this.state = 1;\n  }\n  // Clear the timer so that a new interval can be set\n  updateSpeed() {\n    clearInterval(this.timerId);\n    this.timerId = window.setInterval(() => {\n      this.moveSnake();\n    }, this.gameState.snakeSpeed);\n    this.gameState.updatingSpeed = false;\n  }\n  //\n  pause() {\n    if (this.state != 1 && this.state != 3) return;\n\n    clearInterval(this.timerId);\n    this.state = 2;\n  }\n\n  stop() {\n    clearInterval(this.timerId);\n    this.state = 0;\n  }\n\n  moveSnake() {\n    _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDirection(_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDesired());\n    const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };\n    if (!this.gameState.isPaused) {\n      switch (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection()) {\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.UP:\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].up(pos);\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.DOWN:\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].down(pos);\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.LEFT:\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].left(pos);\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT:\n          _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].right(pos);\n          break;\n        default:\n          break;\n      }\n    }\n\n    if (!this.gameState.isValidMove(pos) && !this.gameState.isPaused) {\n      this.gameState.isGameOver = true;\n      this.gameOver();\n    }\n    if (this.gameState.isValidMove(pos)) {\n      this.gameState.moveSnake(pos);\n      this.gameState.movesSinceFood += 1;\n      if (this.gameState.updatingSpeed) {\n        this.updateSpeed();\n      }\n    }\n    if (this.gameState.movesSinceFood >= 400) {\n      this.gameState.movesSinceFood = 0;\n      this.gameState.generateFood();\n    }\n    if (this.gameState.isFoodEmpty()) {\n      this.gameState.generateFood();\n    }\n  }\n\n  keydownListener() {\n    window.addEventListener('keydown', (e) => {\n      if (!this.gameState.isPaused) {\n        const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };\n        if (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.UP && _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.DOWN) {\n          if (e.code === 'ArrowUp') {\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].up(pos);\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.UP);\n          }\n\n          if (e.code === 'ArrowDown') {\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].down(pos);\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.DOWN);\n          }\n        }\n\n        if (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.LEFT && _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT) {\n          if (e.code === 'ArrowLeft') {\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].left(pos);\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.LEFT);\n          }\n\n          if (e.code === 'ArrowRight') {\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].right(pos);\n            _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT);\n          }\n        }\n      }\n\n      if (e.code === _constants__WEBPACK_IMPORTED_MODULE_2__.SPACE) {\n        if (!this.gameState.isGameOver && !this.gameState.isPaused) {\n          this.gamePause();\n        } else {\n          this.gameResume();\n        }\n      }\n    });\n  }\n\n  dpadListener() {\n    const dpad = document.querySelectorAll('.dpad-button');\n    dpad.forEach((direction) => {\n      direction.addEventListener('click', () => {\n        if (!this.gameState.isPaused) {\n          const pos = {\n            x: this.gameState.pos[0].x,\n            y: this.gameState.pos[0].y,\n          };\n          if (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.UP && _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.DOWN) {\n            if (direction.value === _constants__WEBPACK_IMPORTED_MODULE_2__.UP) {\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].up(pos);\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.UP);\n            }\n\n            if (direction.value === _constants__WEBPACK_IMPORTED_MODULE_2__.DOWN) {\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].down(pos);\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.DOWN);\n            }\n          }\n\n          if (_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.LEFT && _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection() !== _constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT) {\n            if (direction.value === _constants__WEBPACK_IMPORTED_MODULE_2__.LEFT) {\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].left(pos);\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.LEFT);\n            }\n\n            if (direction.value === _constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT) {\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].right(pos);\n              _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT);\n            }\n          }\n        }\n      });\n    });\n  }\n\n  gamePause() {\n    if (this.state !== 2 && this.state !== 0) {\n      this.pause();\n      _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redrawScores();\n      this.gameState.isPaused = true;\n      document.querySelector('.overlay').style.display = 'flex';\n      document.querySelector('.overlay-head').innerText = 'PAUSED';\n    }\n  }\n\n  gameResume() {\n    if (this.state === 2) {\n      this.gameState.isPaused = false;\n      document.querySelector('.overlay').style.display = 'none';\n      document.querySelector('.overlay-head').innerText = '';\n      this.start();\n    }\n  }\n\n  gameOver() {\n    this.stop();\n\n    const triggerReset = (e) => {\n      if (e.code === _constants__WEBPACK_IMPORTED_MODULE_2__.SPACE) {\n        _movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDesired(_constants__WEBPACK_IMPORTED_MODULE_2__.RIGHT);\n        document.querySelector('.overlay').style.display = 'none';\n        document.querySelector('.overlay-head').innerText = '';\n        this.gameState.reset();\n        this.start();\n        window.removeEventListener('keydown', triggerReset);\n      }\n    };\n\n    const submitName = (e) => {\n      const nameInput = document.querySelector('.entername-input');\n      nameInput.focus();\n      this.gameState.currentName = nameInput.value;\n      if (e.code === 'Enter') {\n        if (nameInput.value !== '' && nameInput.value.length <= 8) {\n          if (_scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hiScoreList.length < 5) {\n            _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addScore(\n              this.gameState.currentName,\n              this.gameState.score,\n            );\n          } else {\n            _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateScore(\n              this.gameState.currentName,\n              this.gameState.score,\n            );\n          }\n          nameInput.value = '';\n          this.gameState.currentName = '';\n          window.removeEventListener('keydown', submitName);\n          document.querySelector('.entername-container').style.display = 'none';\n          gameOverOverlay();\n        }\n      }\n    };\n    const gameOverOverlay = () => {\n      _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redrawScores();\n      document.querySelector('.overlay').style.display = 'flex';\n      document.querySelector('.overlay-head').innerText = 'GAME OVER';\n      window.addEventListener('keydown', triggerReset);\n    };\n\n    // If there is already a name input OR if not a high score\n    if (\n      this.gameState.currentName !== '' ||\n      !_scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isHighScore(this.gameState.score)\n    ) {\n      gameOverOverlay();\n    }\n\n    // If name is empty AND if the score is high enough to meet list.\n    if (\n      this.gameState.currentName === '' &&\n      _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isHighScore(this.gameState.score)\n    ) {\n      document.querySelector('.entername-container').style.display = 'flex';\n      window.addEventListener('keydown', submitName);\n    }\n\n    // If name is already given AND if the score is high enough to meet list.\n    if (\n      this.gameState.currentName !== '' &&\n      _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isHighScore(this.gameState.score)\n    ) {\n      if (_scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hiScoreList.length < 5) {\n        _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addScore(this.gameState.currentName, this.gameState.score);\n      } else {\n        _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateScore(\n          this.gameState.currentName,\n          this.gameState.score,\n        );\n      }\n      gameOverOverlay();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n\n//# sourceURL=webpack://snake-game/./src/control.js?");

/***/ }),

/***/ "./src/gameScreen.js":
/*!***************************!*\
  !*** ./src/gameScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameScreen {\n  constructor(grid, gridSize, screenElement, scoreElement) {\n    this.grid = grid;\n    this.gridSize = gridSize;\n    this.screenElement = screenElement;\n    this.screenElement.style.gridTemplate = `repeat(${this.gridSize}, 1fr) / repeat(${this.gridSize}, 1fr)`;\n    this.scoreElement = scoreElement;\n    this.grid.forEach((x, xIndex) => {\n      x.forEach((y, yIndex) => {\n        const square = document.createElement('div');\n        square.dataset.x = `${xIndex}`;\n        square.dataset.y = `${yIndex}`;\n        square.dataset.val = `${y}`;\n        square.classList.add('square');\n        this.screenElement.append(square);\n      });\n    });\n  }\n\n  gridSquare(x, y) {\n    return this.screenElement.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\n  }\n\n  setSquareValue(x, y, value) {\n    this.gridSquare(x, y).dataset.val = value;\n  }\n\n  setScoreText(score) {\n    this.scoreElement.innerText = score;\n    this.screenElement.style.boxShadow = `0px 0px ${score / 100}px #ffffff`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameScreen);\n\n\n//# sourceURL=webpack://snake-game/./src/gameScreen.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameState {\n  constructor(grid, screen) {\n    this.snakeSize = 3;\n    this.snakeSpeed = 75;\n    this.movesSinceFood = 0;\n    this.pos = [{ x: 1, y: 1 }];\n    this.food = [];\n    this.grid = grid;\n    this.screen = screen;\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);\n    this.isPaused = false;\n    this.score = 0;\n    this.isGameOver = false;\n    this.updatingSpeed = false;\n    this.currentName = '';\n  }\n\n  eatFood(pos) {\n    this.snakeSize += 1;\n    const foodIndex = this.food.indexOf(pos);\n    this.food.splice(foodIndex, 1);\n    this.movesSinceFood = 0;\n    this.score += 100;\n    this.screen.setScoreText(this.score);\n    if (this.score % 500 === 0) {\n      this.updatingSpeed = true;\n      this.snakeSpeed -= 2;\n    }\n  }\n\n  isFoodEmpty() {\n    if (this.food.length) {\n      return false;\n    }\n    return true;\n  }\n\n  getHeadPos() {\n    return this.pos[0];\n  }\n\n  setHeadPos(val) {\n    this.pos[0] = val;\n  }\n\n  getGridElementValue(x, y) {\n    return this.grid.gridStore[x][y];\n  }\n\n  setGridElement(x, y, val) {\n    this.grid.gridStore[x][y] = val;\n    this.screen.setSquareValue(x, y, val);\n  }\n\n  clearGrid() {\n    for (let x = 1; x <= this.grid.size; x++) {\n      for (let y = 1; y <= this.grid.size; y++) {\n        this.setGridElement(x, y, 0);\n      }\n    }\n  }\n\n  moveSnake(newPosition) {\n    if (this.getGridElementValue(newPosition.x, newPosition.y) === 4) {\n      this.eatFood(newPosition);\n    }\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 2);\n    this.pos.unshift(newPosition);\n    this.setGridElement(newPosition.x, newPosition.y, 1);\n    if (this.pos.length > this.snakeSize) {\n      const tailRemove = this.pos.pop();\n      this.setGridElement(tailRemove.x, tailRemove.y, 0);\n    }\n  }\n\n  isValidMove(newPosition) {\n    if (this.pos.some((e) => e.x === newPosition.x && e.y === newPosition.y)) {\n      return false;\n    }\n    // eslint-disable-next-line no-restricted-syntax\n    if (\n      newPosition.x < 1 ||\n      newPosition.x > this.grid.size ||\n      newPosition.y < 1 ||\n      newPosition.y > this.grid.size\n    ) {\n      return false;\n    }\n\n    return true;\n  }\n\n  createFood(position) {\n    this.setGridElement(position.x, position.y, 4);\n    this.food.push(position);\n  }\n\n  randomPosition() {\n    const x = Math.floor(Math.random() * this.grid.size) + 1;\n    const y = Math.floor(Math.random() * this.grid.size) + 1;\n    return { x, y };\n  }\n\n  generateFood() {\n    const newPosition = this.randomPosition();\n    if (!this.getGridElementValue(newPosition.x, newPosition.y)) {\n      this.createFood(newPosition);\n    } else {\n      this.generateFood();\n    }\n  }\n\n  reset() {\n    this.snakeSize = 3;\n    this.snakeSpeed = 75;\n    this.movesSinceFood = 0;\n    this.pos = [{ x: 1, y: 1 }];\n    this.food = [];\n    this.score = 0;\n    this.screen.setScoreText(this.score);\n    this.isPaused = false;\n    this.isGameOver = false;\n    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);\n    this.clearGrid();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameState);\n\n\n//# sourceURL=webpack://snake-game/./src/gameState.js?");

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Grid {\n  constructor(size) {\n    const grid = [];\n    for (let x = 1; x <= size; x++) {\n      const gridY = [];\n      grid[x] = gridY;\n      for (let y = 1; y <= size; y++) {\n        gridY[y] = 0;\n      }\n    }\n    this.size = size;\n    this.gridStore = grid;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Grid(50));\n\n\n//# sourceURL=webpack://snake-game/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameScreen */ \"./src/gameScreen.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _assets_svgs_keyboard_arrow_up_white_36dp_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/svgs/keyboard_arrow_up_white_36dp.svg */ \"./src/assets/svgs/keyboard_arrow_up_white_36dp.svg\");\n/* harmony import */ var _assets_svgs_keyboard_arrow_down_white_36dp_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/svgs/keyboard_arrow_down_white_36dp.svg */ \"./src/assets/svgs/keyboard_arrow_down_white_36dp.svg\");\n/* harmony import */ var _assets_svgs_keyboard_arrow_left_white_36dp_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/svgs/keyboard_arrow_left_white_36dp.svg */ \"./src/assets/svgs/keyboard_arrow_left_white_36dp.svg\");\n/* harmony import */ var _assets_svgs_keyboard_arrow_right_white_36dp_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/svgs/keyboard_arrow_right_white_36dp.svg */ \"./src/assets/svgs/keyboard_arrow_right_white_36dp.svg\");\n\n\n\n\n\n\n\n\n\n\n\nconst scoreElement = document.querySelector('.score-value');\nconst gameScreenElement = document.querySelector('.game-screen');\nconst dpadElements = document.querySelectorAll('.dpad-button');\n\nconst addArrow = (arrowAsset) => {\n  const arrowElement = document.createElement('embed');\n  arrowElement.classList.add('dpad-arrow');\n  arrowElement.src = arrowAsset;\n  return arrowElement;\n};\n\ndpadElements.forEach((element) => {\n  switch (element.value) {\n    case _constants__WEBPACK_IMPORTED_MODULE_5__.UP:\n      element.append(addArrow(_assets_svgs_keyboard_arrow_up_white_36dp_svg__WEBPACK_IMPORTED_MODULE_6__));\n      break;\n    case _constants__WEBPACK_IMPORTED_MODULE_5__.DOWN:\n      element.append(addArrow(_assets_svgs_keyboard_arrow_down_white_36dp_svg__WEBPACK_IMPORTED_MODULE_7__));\n      break;\n    case _constants__WEBPACK_IMPORTED_MODULE_5__.LEFT:\n      element.append(addArrow(_assets_svgs_keyboard_arrow_left_white_36dp_svg__WEBPACK_IMPORTED_MODULE_8__));\n      break;\n    case _constants__WEBPACK_IMPORTED_MODULE_5__.RIGHT:\n      element.append(addArrow(_assets_svgs_keyboard_arrow_right_white_36dp_svg__WEBPACK_IMPORTED_MODULE_9__));\n      break;\n    default:\n      break;\n  }\n});\n// Initialize game screen, which stores grid and current score display elements\nconst gameScreen = new _gameScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n  _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gridStore,\n  _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].size,\n  gameScreenElement,\n  scoreElement,\n);\n\n// Initialize object that stores all values related to game state\nconst gameState = new _gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], gameScreen);\n\n// Initalize controller object\nconst controller = new _control__WEBPACK_IMPORTED_MODULE_4__[\"default\"](gameState, gameState.snakeSpeed);\n\n\n//# sourceURL=webpack://snake-game/./src/index.js?");

/***/ }),

/***/ "./src/movement.js":
/*!*************************!*\
  !*** ./src/movement.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass move {\n  static desiredDirection = 'right';\n  static direction = 'right';\n\n  static up(pos) {\n    pos.x -= 1;\n  }\n\n  static down(pos) {\n    pos.x += 1;\n  }\n\n  static left(pos) {\n    pos.y -= 1;\n  }\n\n  static right(pos) {\n    pos.y += 1;\n  }\n\n  static getDesired() {\n    return this.desiredDirection;\n  }\n\n  static setDesired(desiredDirection) {\n    this.desiredDirection = desiredDirection;\n  }\n\n  static getDirection() {\n    return this.direction;\n  }\n\n  static setDirection(direction) {\n    this.direction = direction;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);\n\n\n//# sourceURL=webpack://snake-game/./src/movement.js?");

/***/ }),

/***/ "./src/scoreboard.js":
/*!***************************!*\
  !*** ./src/scoreboard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass ScoreBoard {\n  constructor() {\n    this.hiscoreElement = document.querySelector('.hiscore-container');\n    this.hiScoreList = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('hiscores') || _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTSCORES;\n    document.querySelector('#reset').addEventListener('click', () => {\n      this.hiScoreList = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTSCORES;\n      this.redrawScores();\n    });\n  }\n\n  // Add score object to array, THEN redraw\n\n  addScore(name, score) {\n    this.hiScoreList.push({ name: name, score: score });\n  }\n\n  isHighScore(checkScore) {\n    this.sortScores();\n    if (this.hiScoreList.length < 5) {\n      return true;\n    }\n    const checkList = this.hiScoreList.findIndex(({ score }) => {\n      return score < checkScore;\n    });\n    if (checkList >= 0) {\n      return true;\n    }\n    return false;\n  }\n\n  updateScore(name, checkScore) {\n    this.sortScores();\n    const replaceIndex = this.hiScoreList.findIndex(({ score }) => {\n      return score < checkScore;\n    });\n    if (replaceIndex >= 0) {\n      this.hiScoreList.splice(replaceIndex, 1, {\n        name: name,\n        score: checkScore,\n      });\n    }\n  }\n\n  sortScores() {\n    this.hiScoreList.sort((a, b) => {\n      return b.score - a.score;\n    });\n  }\n\n  redrawScores() {\n    this.sortScores();\n    this.hiscoreElement.innerHTML = '';\n    this.hiScoreList.forEach((entry) => {\n      const nameElement = document.createElement('div');\n      nameElement.classList.add('hiscore-name');\n      nameElement.innerText = entry.name;\n      const scoreElement = document.createElement('div');\n      scoreElement.classList.add('hiscore-score');\n      scoreElement.innerText = entry.score;\n      scoreElement.dataset.score = entry.score;\n      this.hiscoreElement.append(nameElement, scoreElement);\n    });\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('hiscores', this.hiScoreList);\n  }\n\n  getScoreByName(name) {\n    const hiScoreList = this.getCurrentHiscores();\n    const result = hiScoreList.filter((entry) => {\n      return entry.name === name;\n    });\n    return result;\n  }\n\n  getCurrentHiscores() {\n    const nameList = document.querySelectorAll('.hiscore-name');\n    const scoreList = document.querySelectorAll('.hiscore-score');\n\n    const hiscoreList = [];\n    nameList.forEach((player, index) => {\n      hiscoreList.push({\n        name: player.innerText,\n        score: parseInt(scoreList[index].dataset.score),\n      });\n    });\n    return hiscoreList;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ScoreBoard());\n\n\n//# sourceURL=webpack://snake-game/./src/scoreboard.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst storage = {\n  get(item) {\n    return JSON.parse(localStorage.getItem(item));\n  },\n\n  set(item, value) {\n    localStorage.setItem(item, JSON.stringify(value));\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://snake-game/./src/storage.js?");

/***/ }),

/***/ "./src/assets/fonts/PressStart2P-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/PressStart2P-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21503c6a5385ab41dde9.ttf\";\n\n//# sourceURL=webpack://snake-game/./src/assets/fonts/PressStart2P-Regular.ttf?");

/***/ }),

/***/ "./src/assets/svgs/keyboard_arrow_down_white_36dp.svg":
/*!************************************************************!*\
  !*** ./src/assets/svgs/keyboard_arrow_down_white_36dp.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e62d9556b6b2cbd1fdf.svg\";\n\n//# sourceURL=webpack://snake-game/./src/assets/svgs/keyboard_arrow_down_white_36dp.svg?");

/***/ }),

/***/ "./src/assets/svgs/keyboard_arrow_left_white_36dp.svg":
/*!************************************************************!*\
  !*** ./src/assets/svgs/keyboard_arrow_left_white_36dp.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58574bec62d67625b53a.svg\";\n\n//# sourceURL=webpack://snake-game/./src/assets/svgs/keyboard_arrow_left_white_36dp.svg?");

/***/ }),

/***/ "./src/assets/svgs/keyboard_arrow_right_white_36dp.svg":
/*!*************************************************************!*\
  !*** ./src/assets/svgs/keyboard_arrow_right_white_36dp.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7616536e5f817ecc33c.svg\";\n\n//# sourceURL=webpack://snake-game/./src/assets/svgs/keyboard_arrow_right_white_36dp.svg?");

/***/ }),

/***/ "./src/assets/svgs/keyboard_arrow_up_white_36dp.svg":
/*!**********************************************************!*\
  !*** ./src/assets/svgs/keyboard_arrow_up_white_36dp.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa002585ebd8a955ddb6.svg\";\n\n//# sourceURL=webpack://snake-game/./src/assets/svgs/keyboard_arrow_up_white_36dp.svg?");

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