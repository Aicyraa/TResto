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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css"
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&family=Playwrite+AT:ital,wght@0,100..400;1,100..400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Primary - deep forest green */\n  --primary: #1e3932;\n  --primary-light: #2d5a4e;\n  --primary-dark: #14281e;\n\n  /* Secondary - warm gold / latte tones */\n  --secondary: #d4a96a;\n  --secondary-light: #e8cba0;\n  --secondary-dark: #b8893e;\n\n  /* Accent - rich copper */\n  --accent: #c75b12;\n  --accent-light: #e07a30;\n  --accent-dark: #9e470d;\n\n  /* Backgrounds */\n  --bg-page: #f5f1eb;\n  --bg-content: #ffffff;\n  --bg-card: #faf7f2;\n  --bg-header: #1e3932;\n\n  /* Text */\n  --text-primary: #1e1e1e;\n  --text-secondary: #5c5c5c;\n  --text-light: #f5f1eb;\n  --text-muted: #8a8a8a;\n  --text-link: #1e3932;\n  --text-link-hover: #c75b12;\n\n  /* Buttons */\n  --btn-primary-bg: #1e3932;\n  --btn-primary-text: #ffffff;\n  --btn-primary-hover: #2d5a4e;\n  --btn-secondary-bg: #d4a96a;\n  --btn-secondary-text: #1e1e1e;\n  --btn-secondary-hover: #b8893e;\n\n  /* Nav / Tabs */\n  --nav-bg: #1e3932;\n  --nav-text: #f5f1eb;\n  --nav-text-hover: #d4a96a;\n  --nav-active: #c75b12;\n  --nav-active-text: #ffffff;\n  --nav-icon: #f5f1eb;\n  --nav-icon-hover: #d4a96a;\n\n  /* Transitions & Utils */\n  --transition: 300ms ease;\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Atkinson Hyperlegible Mono\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: var(--bg-page);\n  color: var(--text-primary);\n}\n\n/* Header & Nav */\nheader {\n  z-index: 100;\n  background-color: var(--bg-header);\n  padding: 1rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n}\n\n.tabs {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--nav-text);\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-md);\n  transition: all var(--transition);\n  position: relative;\n}\n\n.tabs .txt {\n  font-size: 1.1rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.tabs .icons {\n  width: 20px;\n  height: 20px;\n  stroke: var(--nav-icon);\n}\n\n.tabs:hover {\n  color: var(--nav-text-hover);\n}\n\n.tabs.active {\n  color: var(--nav-active-text);\n  background-color: var(--nav-active);\n}\n\n.tabs.active .icons {\n  stroke: var(--nav-active-text);\n}\n\nmain#content {\n  min-height: calc(100vh - 72px);\n  padding-bottom: 4rem;\n}\n\n/* Home Tab Styles */\n.home {\n  display: flex;\n  flex-direction: column;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 3rem;\n  padding: 5rem 10%;\n  background: linear-gradient(\n    135deg,\n    var(--primary) 0%,\n    var(--primary-light) 100%\n  );\n  color: var(--text-light);\n}\n\n.hero-content h1 {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.hero-subtitle {\n  font-size: 1.5rem;\n  color: var(--secondary-light);\n  margin-bottom: 1.5rem;\n}\n\n.hero-buttons {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n.btn-primary,\n.btn-secondary,\n.btn-outline {\n  padding: 0.8rem 2rem;\n  border-radius: var(--radius-md);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition);\n  border: none;\n}\n\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n\n.btn-primary:hover {\n  background: var(--accent-light);\n  transform: translateY(-2px);\n}\n\n.btn-secondary {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.hero-image {\n  height: 400px;\n  background: url(\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80\");\n  background-size: cover;\n  background-position: center;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n}\n\n.welcome {\n  padding: 5rem 10%;\n  text-align: center;\n}\n\n.welcome-features {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.feature-item {\n  padding: 2rem;\n  background: var(--bg-card);\n  border-radius: var(--radius-lg);\n}\n\n.feature-item svg {\n  width: 40px;\n  height: 40px;\n  stroke: var(--accent);\n  margin-bottom: 1rem;\n}\n\n.highlights {\n  padding: 5rem 10%;\n  background: var(--bg-card);\n}\n\n.highlight-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  margin-bottom: 4rem;\n}\n\n.highlight-item.reverse {\n  direction: rtl;\n}\n\n.highlight-item.reverse > * {\n  direction: ltr;\n}\n\n.highlight-image {\n  height: 350px;\n  border-radius: var(--radius-lg);\n  background-size: cover;\n  background-position: center;\n}\n\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 4rem 10%;\n  background: var(--primary);\n  color: white;\n  text-align: center;\n}\n\n.stat-box h3 {\n  font-size: 2.5rem;\n  color: var(--secondary-light);\n}\n\n/* Menu Tab Styles */\n.menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 3rem 10%;\n}\n\n.food-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transition: var(--transition);\n}\n\n.food-card:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-lg);\n}\n\n.food-image {\n  height: 200px;\n  background: var(--primary-light);\n}\n\n.food-info {\n  padding: 1.5rem;\n}\n\n.food-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.food-category {\n  font-size: 0.8rem;\n  background: var(--bg-page);\n  padding: 0.2rem 0.8rem;\n  border-radius: 20px;\n}\n\n.food-price {\n  font-weight: 700;\n  color: var(--accent);\n  font-size: 1.25rem;\n}\n\n.btn-add-to-cart {\n  width: 100%;\n  padding: 0.8rem;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n}\n\n/* Branches Tab Styles */\n.branches-header {\n  padding: 4rem 10%;\n  background: var(--primary);\n  color: white;\n  text-align: center;\n}\n\n.branches-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n  padding: 3rem 10%;\n}\n\n.branch-card {\n  background: white;\n  padding: 2rem;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border-top: 5px solid var(--accent);\n}\n\n.branch-header {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n}\n\n.detail-item {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  color: var(--text-secondary);\n}\n\n.detail-item svg {\n  width: 20px;\n  height: 20px;\n  stroke: var(--accent);\n  flex-shrink: 0;\n}\n\n.branch-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n\n/* Responsive */\n@media (max-width: 1024px) {\n  .hero,\n  .highlight-item {\n    grid-template-columns: 1fr;\n  }\n  .welcome-features,\n  .stats {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n}\n\n@media (max-width: 600px) {\n  nav {\n    gap: 1rem;\n  }\n  .tabs .txt {\n    display: none;\n  }\n  .welcome-features,\n  .stats,\n  .branches-grid {\n    grid-template-columns: 1fr;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tresto/./src/style/main.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tresto/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tresto/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style/main.css"
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tresto/./src/style/main.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tresto/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contents/branch.js"
/*!********************************!*\
  !*** ./src/contents/branch.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   branch: () => (/* binding */ branch)\n/* harmony export */ });\nfunction branch() {\n   const branchData = [\n      {\n         id: 1,\n         name: \"Downtown Bistro\",\n         address: \"123 Main Street, New York, NY 10001\",\n         phone: \"+1 (212) 555-0101\",\n         hours: \"Mon-Thu: 10AM - 10PM, Fri-Sun: 10AM - 11PM\",\n         rating: 4.8,\n         reviews: 342\n      },\n      {\n         id: 2,\n         name: \"Uptown Grill\",\n         address: \"456 Park Avenue, New York, NY 10022\",\n         phone: \"+1 (212) 555-0102\",\n         hours: \"Mon-Thu: 11AM - 10PM, Fri-Sun: 11AM - 12AM\",\n         rating: 4.9,\n         reviews: 567\n      },\n      {\n         id: 3,\n         name: \"Brooklyn Cafe\",\n         address: \"789 Flatbush Avenue, Brooklyn, NY 11238\",\n         phone: \"+1 (718) 555-0103\",\n         hours: \"Mon-Sun: 8AM - 11PM\",\n         rating: 4.7,\n         reviews: 289\n      },\n      {\n         id: 4,\n         name: \"Queens Lounge\",\n         address: \"321 Roosevelt Avenue, Queens, NY 11375\",\n         phone: \"+1 (718) 555-0104\",\n         hours: \"Tue-Thu: 10AM - 10PM, Fri-Sat: 10AM - 12AM, Sun: 10AM - 10PM\",\n         rating: 4.6,\n         reviews: 198\n      }\n   ];\n\n   const container = document.createElement(\"div\");\n   container.className = \"branches-page\";\n\n   const headerSection = document.createElement(\"section\");\n   headerSection.className = \"branches-header\";\n   headerSection.innerHTML = `\n      <div class=\"branches-header-content\">\n         <h1>Our Branches</h1>\n         <p>Visit us at any of our locations</p>\n      </div>\n   `;\n\n   const listContainer = document.createElement(\"div\");\n   listContainer.className = \"branches-grid\";\n\n   branchData.forEach(branch => {\n      const branchCard = document.createElement(\"div\");\n      branchCard.className = \"branch-card\";\n      branchCard.innerHTML = `\n         <div class=\"branch-header\">\n            <h3 class=\"branch-name\">${branch.name}</h3>\n            <div class=\"branch-rating\">\n               <span class=\"stars\">★ ${branch.rating}</span>\n               <span class=\"reviews\">(${branch.reviews} reviews)</span>\n            </div>\n         </div>\n         <div class=\"branch-details\">\n            <div class=\"detail-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\" />\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z\" />\n               </svg>\n               <span>${branch.address}</span>\n            </div>\n            <div class=\"detail-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z\" />\n               </svg>\n               <span>${branch.phone}</span>\n            </div>\n            <div class=\"detail-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v6h4.5m4.5-15a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" />\n               </svg>\n               <span>${branch.hours}</span>\n            </div>\n         </div>\n         <div class=\"branch-actions\">\n            <button class=\"btn-primary\">Order Now</button>\n            <button class=\"btn-secondary\">Call</button>\n         </div>\n      `;\n      listContainer.appendChild(branchCard);\n   });\n\n   container.appendChild(headerSection);\n   container.appendChild(listContainer);\n\n   return container;\n}\n\n\n//# sourceURL=webpack://tresto/./src/contents/branch.js?\n}");

/***/ },

/***/ "./src/contents/home.js"
/*!******************************!*\
  !*** ./src/contents/home.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n   const container = document.createElement(\"div\")\n   container.className = \"home\"\n   container.innerHTML = `\n      <!-- Hero Section -->\n      <section class=\"hero\">\n         <div class=\"hero-content\">\n            <h1>Welcome to TResto</h1>\n            <p class=\"hero-subtitle\">Discover Culinary Excellence</p>\n            <p class=\"hero-description\">Experience world-class dining with premium cuisine and exceptional service. Every dish is a story, every meal an unforgettable memory.</p>\n            <div class=\"hero-buttons\">\n               <button class=\"btn-primary\">Explore Menu</button>\n               <button class=\"btn-secondary\">Visit Us</button>\n            </div>\n         </div>\n         <div class=\"hero-image\"></div>\n      </section>\n\n      <!-- Welcome Section -->\n      <section class=\"welcome\">\n         <div class=\"welcome-content\">\n            <h2>Our Passion for Taste</h2>\n            <p>At TResto, we combine traditional techniques with modern innovation to bring you the finest flavors from across the globe.</p>\n         </div>\n         <div class=\"welcome-features\">\n            <div class=\"feature-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n               </svg>\n               <h3>Premium Ingredients</h3>\n               <p>Sourced locally and sustainably for the freshest taste in every bite.</p>\n            </div>\n            <div class=\"feature-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v6h4.5m4.5-15a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" />\n               </svg>\n               <h3>Exquisite Service</h3>\n               <p>Dedicated staff providing a seamless and personalized dining experience.</p>\n            </div>\n            <div class=\"feature-item\">\n               <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z\" />\n               </svg>\n               <h3>Master Chefs</h3>\n               <p>Culinary experts crafting unique dishes that tantalize your taste buds.</p>\n            </div>\n         </div>\n      </section>\n\n      <!-- Highlights Section -->\n      <section class=\"highlights\">\n         <div class=\"highlight-item\">\n            <div class=\"highlight-image\" style=\"background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')\"></div>\n            <div class=\"highlight-content\">\n               <h3>All-Out Buffet</h3>\n               <p>Indulge in our extensive buffet featuring a wide variety of dishes from around the world. Perfect for celebrations and family gatherings.</p>\n               <button class=\"btn-outline\">Learn More</button>\n            </div>\n         </div>\n\n         <div class=\"highlight-item reverse\">\n            <div class=\"highlight-image\" style=\"background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')\"></div>\n            <div class=\"highlight-content\">\n               <h3>Fine Dining Experience</h3>\n               <p>Elevate your evening with our elegant ambiance and carefully crafted tasting menu. A journey of flavors awaits.</p>\n               <button class=\"btn-outline\">Reserve Table</button>\n            </div>\n         </div>\n      </section>\n\n      <!-- Stats Section -->\n      <section class=\"stats\">\n         <div class=\"stat-box\">\n            <h3>500+</h3>\n            <p>Happy Customers Daily</p>\n         </div>\n         <div class=\"stat-box\">\n            <h3>15+</h3>\n            <p>Years of Excellence</p>\n         </div>\n         <div class=\"stat-box\">\n            <h3>4</h3>\n            <p>Signature Branches</p>\n         </div>\n         <div class=\"stat-box\">\n            <h3>50+</h3>\n            <p>Signature Dishes</p>\n         </div>\n      </section>\n   `\n\n   return container\n}\n\n\n//# sourceURL=webpack://tresto/./src/contents/home.js?\n}");

/***/ },

/***/ "./src/contents/menu.js"
/*!******************************!*\
  !*** ./src/contents/menu.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n   const data = [\n      {\n         id: 1,\n         name: \"Classic Espresso\",\n         price: 3.50,\n         category: \"Beverages\"\n      },\n      {\n         id: 2,\n         name: \"Cappuccino\",\n         price: 4.75,\n         category: \"Beverages\"\n      },\n      {\n         id: 3,\n         name: \"Grilled Salmon Fillet\",\n         price: 16.99,\n         category: \"Mains\"\n      },\n      {\n         id: 4,\n         name: \"Mushroom Risotto\",\n         price: 13.50,\n         category: \"Mains\"\n      },\n      {\n         id: 5,\n         name: \"Chocolate Lava Cake\",\n         price: 7.99,\n         category: \"Desserts\"\n      },\n      {\n         id: 6,\n         name: \"Tiramisu\",\n         price: 6.50,\n         category: \"Desserts\"\n      },\n      {\n         id: 7,\n         name: \"Caesar Salad\",\n         price: 9.99,\n         category: \"Appetizers\"\n      },\n      {\n         id: 8,\n         name: \"Bruschetta Trio\",\n         price: 8.50,\n         category: \"Appetizers\"\n      },\n      {\n         id: 9,\n         name: \"Iced Lavender Latte\",\n         price: 5.25,\n         category: \"Beverages\"\n      },\n      {\n         id: 10,\n         name: \"Herb-Crusted Chicken Breast\",\n         price: 14.99,\n         category: \"Mains\"\n      }\n   ];\n\n   const container = document.createElement(\"div\");\n   container.className = \"menu\";\n   data.forEach(d => {\n      const generated = loadData(d)\n      console.log(generated);\n      \n      container.innerHTML += generated\n   }) \n   \n   return container\n\n}\n\nfunction loadData(data) {\n   const images = [\n      \"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80\",\n      \"https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80\",\n      \"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80\",\n      \"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n   ];\n   const randomImg = images[data.id % images.length];\n\n   return `\n      <div class=\"food-card\">\n         <div class=\"food-image\" style=\"background-image: url('${randomImg}')\"></div>\n         <div class=\"food-info\">\n            <h3 class=\"food-name\">${data.name}</h3>\n            <div class=\"food-footer\">\n               <span class=\"food-category\">${data.category}</span>\n               <span class=\"food-price\">$${data.price.toFixed(2)}</span>\n            </div>\n            <button class=\"btn-add-to-cart\">\n               Add to Cart\n            </button>\n         </div>\n      </div>\n   `\n}\n\n\n//# sourceURL=webpack://tresto/./src/contents/menu.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _contents_branch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents/branch.js */ \"./src/contents/branch.js\");\n/* harmony import */ var _contents_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contents/home.js */ \"./src/contents/home.js\");\n/* harmony import */ var _contents_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents/menu.js */ \"./src/contents/menu.js\");\n// Handles logic for content loading\n\n\n\n\n\nconst el = {\n   nav: document.querySelector(\"#nav-bar\"),\n   content: document.querySelector(\"#content\"),\n}\n\nfunction updateActiveTab(tabId) {\n   document.querySelectorAll(\".tabs\").forEach(tab => {\n      if (tab.dataset.tab === tabId) {\n         tab.classList.add(\"active\");\n      } else {\n         tab.classList.remove(\"active\");\n      }\n   });\n}\n\nfunction switchTab(e) {\n   const tabElement = e.target.closest(\".tabs\");\n   if (!tabElement) return;\n\n   const tabId = tabElement.dataset.tab;\n   \n   switch(tabId) {\n      case \"home\":\n         loadTab(_contents_home_js__WEBPACK_IMPORTED_MODULE_2__.home);\n         break;\n      case \"menu\":\n         loadTab(_contents_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);\n         break;\n      case \"branch\":\n         loadTab(_contents_branch_js__WEBPACK_IMPORTED_MODULE_1__.branch);\n         break;\n      default:\n         return;\n   }\n   updateActiveTab(tabId);\n}\n\nfunction loadTab(currentTab) {\n   el.content.innerHTML = \"\" \n   el.content.append(currentTab()) \n   window.scrollTo(0, 0);\n}\n\n(function(){\n   loadTab(_contents_home_js__WEBPACK_IMPORTED_MODULE_2__.home) // initialize home tab\n   el.nav.addEventListener(\"click\", switchTab) \n})();\n\n//# sourceURL=webpack://tresto/./src/index.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;