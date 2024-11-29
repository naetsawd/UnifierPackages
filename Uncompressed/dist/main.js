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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/PixelifySans-VariableFont_wght.ttf */ "./src/fonts/PixelifySans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: "Lato";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	font-style: normal;
}

@font-face {
	font-family: "Pixelify";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	font-style: normal;
}

* {
	padding: 0px;
	margin: 0px;
}

body {
	display: grid;
	grid-template-columns: 100vw;
	grid-template-rows: 8vh 88vh 4vh;
	background-size: cover;
	font-family: "Lato", sans-serif;
	color: white;
}

body::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.75) 0%,
		rgba(0, 0, 0, 0.5) 100%
	);
	z-index: -1;
}

/* Header & Navigation */
header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 32px;
}

.siteTitle {
	font-family: "Pixelify", sans-serif;
	font-size: 32px;
	border-bottom: 1px solid white;
	padding: 0px 12px;
}

nav {
	display: flex;
	flex-direction: row;
}

nav > *,
.searchBox {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 3px 7px;
	margin: 0px 5px;
	list-style-type: none;
}

.searchContainer {
	padding: 8px;
}

.invalidSearch {
	border: 1px solid lightcoral;
}

.searchBox,
.searchBtn {
	background-color: transparent;
	outline: none;
	border: 0;
}

.searchBox {
	color: white;
	font-size: 16px;
}

.searchBtn {
	font-family: "Lato", sans-serif;
	font-weight: 600;
	font-size: 16px;
	background-color: white;
}

.navItem,
.searchBtn {
	cursor: pointer;
	font-size: 16px;
	padding: 2px 10px;
	border-radius: 20px;
	transition: ease 0.3s;
}

.navItem:hover,
.searchBtn:hover {
	color: black;
	background-color: white;
	transform: scale(1.05);
}

.divider {
	width: 1px;
	height: 20px;
	background-color: white;
	margin: 0 5px;
}

.chosenUnit {
	color: black;
	background-color: white;
	border-radius: 20px;
}

/* Content */
.content {
	display: grid;
	grid-template-columns: 90%;
	grid-template-rows: 65% 35%;
	justify-content: center;
	grid-template-areas: "curr" "forecast";
}

/* Current Information */
.currInfo {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 26px 0px;
	font-weight: 400;
	grid-area: curr;
}

.currInfoLeft {
	display: flex;
	flex-direction: column;
	font-size: 32px;
	padding: 26px;
	justify-content: center;
	align-items: flex-start;
	max-width: 720px;
}

.cityDate {
	font-size: 16px;
	color: lightgray;
}

.cityName {
	font-size: 46px;
	font-weight: 500;
}

.leftDivider {
	margin: 16px 0px;
}

.cityTemp {
	font-size: 28px;
	font-weight: 400;
}

.cityWeather {
	font-size: 20px;
	font-weight: 300;
}

.weatherIcon {
	width: 128px;
	height: 128px;
}

.currInfoRight {
	display: flex;
	flex-direction: column;
	padding: 26px;
	align-items: flex-end;
	justify-content: center;
}

.rightInfoTitle {
	font-size: 26px;
	font-weight: 500;
}

.rightInfoNo {
	font-weight: 300;
	font-size: 22px;
}

.rightDivider {
	margin: 10px 0px;
}

.leftDivider,
.rightDivider {
	background-color: white;
	height: 1px;
	width: 100%;
	align-self: center;
}

/* Forecast Information */
.forecastSection {
	display: flex;
	flex-direction: row;
	display: grid;
	grid-auto-flow: column;
	grid-template-rows: auto;
	margin-bottom: 26px;
	align-items: center;
	justify-items: center;
	overflow-x: scroll;
	overflow-y: hidden;
	grid-area: forecast;
}

.forecastCard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90%;
	width: 200px;
	border-radius: 25px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	margin: 10px;
}

.forecastDate {
	font-size: 18px;
	font-weight: 600;
}

.forecastTime {
	font-size: 18px;
	font-weight: 500;
}

.forecastMaxTemp,
.forecastTemp {
	font-size: 18px;
	font-weight: 500;
}

.forecastMinTemp {
	font-size: 14px;
	font-weight: 500;
	color: lightgray;
}

.weatherIconForecast {
	width: 75px;
	height: 75px;
}

.currInfoLeft,
.currInfoRight,
.forecastSection,
nav > *, 
footer {
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 25px;
	background-color: #00000080;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(15px);
}

/* Footer */
footer {
	border-radius: 0px;
	border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footerText {
    color: white;
    font-size: 15px;
}

.githubIcon {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 2px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,4CAAkC;CAClC,kBAAkB;AACnB;;AAEA;CACC,uBAAuB;CACvB,4CAAoD;CACpD,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,4BAA4B;CAC5B,gCAAgC;CAChC,sBAAsB;CACtB,+BAA+B;CAC/B,YAAY;AACb;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,MAAM;CACN,QAAQ;CACR,SAAS;CACT,OAAO;CACP;;;;EAIC;CACD,WAAW;AACZ;;AAEA,wBAAwB;AACxB;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,mCAAmC;CACnC,eAAe;CACf,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mBAAmB;CACnB,gBAAgB;CAChB,eAAe;CACf,qBAAqB;AACtB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;;CAEC,6BAA6B;CAC7B,aAAa;CACb,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,+BAA+B;CAC/B,gBAAgB;CAChB,eAAe;CACf,uBAAuB;AACxB;;AAEA;;CAEC,eAAe;CACf,eAAe;CACf,iBAAiB;CACjB,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;;CAEC,YAAY;CACZ,uBAAuB;CACvB,sBAAsB;AACvB;;AAEA;CACC,UAAU;CACV,YAAY;CACZ,uBAAuB;CACvB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA,YAAY;AACZ;CACC,aAAa;CACb,0BAA0B;CAC1B,2BAA2B;CAC3B,uBAAuB;CACvB,sCAAsC;AACvC;;AAEA,wBAAwB;AACxB;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,uBAAuB;CACvB,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;;CAEC,uBAAuB;CACvB,WAAW;CACX,WAAW;CACX,kBAAkB;AACnB;;AAEA,yBAAyB;AACzB;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,wBAAwB;CACxB,mBAAmB;CACnB,mBAAmB;CACnB,qBAAqB;CACrB,kBAAkB;CAClB,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,0CAA0C;CAC1C,YAAY;AACb;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;;CAEC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;;;;;CAKC,0CAA0C;CAC1C,mBAAmB;CACnB,2BAA2B;CAC3B,4CAA4C;CAC5C,2BAA2B;AAC5B;;AAEA,WAAW;AACX;CACC,kBAAkB;CAClB,YAAY;IACT,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["@font-face {\n\tfont-family: \"Lato\";\n\tsrc: url(\"fonts/Lato-Regular.ttf\");\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: \"Pixelify\";\n\tsrc: url(\"fonts/PixelifySans-VariableFont_wght.ttf\");\n\tfont-style: normal;\n}\n\n* {\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template-columns: 100vw;\n\tgrid-template-rows: 8vh 88vh 4vh;\n\tbackground-size: cover;\n\tfont-family: \"Lato\", sans-serif;\n\tcolor: white;\n}\n\nbody::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\trgba(0, 0, 0, 0.75) 0%,\n\t\trgba(0, 0, 0, 0.5) 100%\n\t);\n\tz-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0px 32px;\n}\n\n.siteTitle {\n\tfont-family: \"Pixelify\", sans-serif;\n\tfont-size: 32px;\n\tborder-bottom: 1px solid white;\n\tpadding: 0px 12px;\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\nnav > *,\n.searchBox {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: row;\n\tpadding: 3px 7px;\n\tmargin: 0px 5px;\n\tlist-style-type: none;\n}\n\n.searchContainer {\n\tpadding: 8px;\n}\n\n.invalidSearch {\n\tborder: 1px solid lightcoral;\n}\n\n.searchBox,\n.searchBtn {\n\tbackground-color: transparent;\n\toutline: none;\n\tborder: 0;\n}\n\n.searchBox {\n\tcolor: white;\n\tfont-size: 16px;\n}\n\n.searchBtn {\n\tfont-family: \"Lato\", sans-serif;\n\tfont-weight: 600;\n\tfont-size: 16px;\n\tbackground-color: white;\n}\n\n.navItem,\n.searchBtn {\n\tcursor: pointer;\n\tfont-size: 16px;\n\tpadding: 2px 10px;\n\tborder-radius: 20px;\n\ttransition: ease 0.3s;\n}\n\n.navItem:hover,\n.searchBtn:hover {\n\tcolor: black;\n\tbackground-color: white;\n\ttransform: scale(1.05);\n}\n\n.divider {\n\twidth: 1px;\n\theight: 20px;\n\tbackground-color: white;\n\tmargin: 0 5px;\n}\n\n.chosenUnit {\n\tcolor: black;\n\tbackground-color: white;\n\tborder-radius: 20px;\n}\n\n/* Content */\n.content {\n\tdisplay: grid;\n\tgrid-template-columns: 90%;\n\tgrid-template-rows: 65% 35%;\n\tjustify-content: center;\n\tgrid-template-areas: \"curr\" \"forecast\";\n}\n\n/* Current Information */\n.currInfo {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 26px 0px;\n\tfont-weight: 400;\n\tgrid-area: curr;\n}\n\n.currInfoLeft {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 32px;\n\tpadding: 26px;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tmax-width: 720px;\n}\n\n.cityDate {\n\tfont-size: 16px;\n\tcolor: lightgray;\n}\n\n.cityName {\n\tfont-size: 46px;\n\tfont-weight: 500;\n}\n\n.leftDivider {\n\tmargin: 16px 0px;\n}\n\n.cityTemp {\n\tfont-size: 28px;\n\tfont-weight: 400;\n}\n\n.cityWeather {\n\tfont-size: 20px;\n\tfont-weight: 300;\n}\n\n.weatherIcon {\n\twidth: 128px;\n\theight: 128px;\n}\n\n.currInfoRight {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 26px;\n\talign-items: flex-end;\n\tjustify-content: center;\n}\n\n.rightInfoTitle {\n\tfont-size: 26px;\n\tfont-weight: 500;\n}\n\n.rightInfoNo {\n\tfont-weight: 300;\n\tfont-size: 22px;\n}\n\n.rightDivider {\n\tmargin: 10px 0px;\n}\n\n.leftDivider,\n.rightDivider {\n\tbackground-color: white;\n\theight: 1px;\n\twidth: 100%;\n\talign-self: center;\n}\n\n/* Forecast Information */\n.forecastSection {\n\tdisplay: flex;\n\tflex-direction: row;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-rows: auto;\n\tmargin-bottom: 26px;\n\talign-items: center;\n\tjustify-items: center;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n\tgrid-area: forecast;\n}\n\n.forecastCard {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 90%;\n\twidth: 200px;\n\tborder-radius: 25px;\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tmargin: 10px;\n}\n\n.forecastDate {\n\tfont-size: 18px;\n\tfont-weight: 600;\n}\n\n.forecastTime {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMaxTemp,\n.forecastTemp {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMinTemp {\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: lightgray;\n}\n\n.weatherIconForecast {\n\twidth: 75px;\n\theight: 75px;\n}\n\n.currInfoLeft,\n.currInfoRight,\n.forecastSection,\nnav > *, \nfooter {\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tborder-radius: 25px;\n\tbackground-color: #00000080;\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n\tbackdrop-filter: blur(15px);\n}\n\n/* Footer */\nfooter {\n\tborder-radius: 0px;\n\tborder: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.footerText {\n    color: white;\n    font-size: 15px;\n}\n\n.githubIcon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    margin-right: 2px;\n}"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createNavItem: () => (/* binding */ createNavItem),
/* harmony export */   setCurrInfo: () => (/* binding */ setCurrInfo),
/* harmony export */   setForecast: () => (/* binding */ setForecast)
/* harmony export */ });
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetches */ "./src/fetches.js");
/* harmony import */ var _images_morning_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/morning.png */ "./src/images/morning.png");
/* harmony import */ var _images_afternoon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/afternoon.jpg */ "./src/images/afternoon.jpg");
/* harmony import */ var _images_evening_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/evening.jpg */ "./src/images/evening.jpg");
/* harmony import */ var _images_night_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/night.jpg */ "./src/images/night.jpg");
/* harmony import */ var _images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/githubLogo.svg */ "./src/images/githubLogo.svg");








function setBackground(city) {
	(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchCurrTime)(city)
	  .then(time => {
		let backgroundImageUrl;

		if (time >= 5 && time < 12) {
		  backgroundImageUrl = _images_morning_png__WEBPACK_IMPORTED_MODULE_1__;
		} else if (time >= 12 && time < 17) {
		  backgroundImageUrl = _images_afternoon_jpg__WEBPACK_IMPORTED_MODULE_2__;
		} else if (time >= 17 && time < 20) {
		  backgroundImageUrl = _images_evening_jpg__WEBPACK_IMPORTED_MODULE_3__;
		} else {
		  backgroundImageUrl = _images_night_jpg__WEBPACK_IMPORTED_MODULE_4__;
		}
  
		document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
	  });
  }
  

function createNavItem(container, items) {
	const ul = document.createElement("ul");
	ul.classList.add(container);

	items.forEach((item, index) => {
		const li = document.createElement("li");
		li.classList.add("navItem");
		li.classList.add(item.class);
		li.textContent = item.text;

		ul.append(li);

		if (index < items.length - 1) {
			const divider = document.createElement("li");
			divider.classList.add("divider");
			ul.append(divider);
		}
	});

	document.querySelector("nav").append(ul);
}

function setCurrInfo() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let speed = localStorage.getItem("speedUnit");

	setBackground(city);

	const content = document.querySelector(".content");

	const currInfo = document.createElement("section");
	currInfo.classList.add("currInfo");
	currInfo.innerHTML = ``;

	const currInfoLeft = document.createElement("section");
	currInfoLeft.classList.add("currInfoLeft");
	
	return Promise.all([
		(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchLeftInfo)(city, tempUnit),
		(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchRightInfo)(city, speed),
	]).then(function (results) {
		const leftInfoResult = results[0];
		const rightInfoResult = results[1];

		leftInfoResult.forEach((item) => {
			if (item.icon) {
				const iconContainer = document.createElement("img");
				iconContainer.classList.add(item.class);
				iconContainer.src = item.icon;

				currInfoLeft.append(iconContainer);
			} else {
				const textContainer = document.createElement("div");
				textContainer.classList.add(item.class);
				textContainer.textContent = item.text;

				currInfoLeft.append(textContainer);
			}
		});

		const currInfoRight = document.createElement("section");
		currInfoRight.classList.add("currInfoRight");

		rightInfoResult.forEach((item) => {
			const textContainer = document.createElement("div");
			textContainer.classList.add(item.class);
			textContainer.textContent = item.text;

			currInfoRight.append(textContainer);
		});

		currInfo.append(currInfoLeft, currInfoRight);
		content.append(currInfo);
	});
}

function setForecast() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let type = localStorage.getItem("forecast");

	const content = document.querySelector(".content");

	let forecastSection = document.querySelector(".forecastSection");
	if (!forecastSection) {
		forecastSection = document.createElement("section");
		forecastSection.classList.add("forecastSection");
		content.append(forecastSection);
	}

	forecastSection.innerHTML = ``;

	const fetchPromises = [];
	if (type === "daily") {
		for (let i = 1; i < 7; i++) {
			fetchPromises.push((0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchForecastDaily)(i, city, tempUnit));
			// fetchPromises.push([
			// 	{ class: "forecastDate", text: "WeathAPI" },
			// 	{ class: "forecastMaxTemp", text: "Trial Ended" },
			// 	{ class: "forecastMaxTemp", text: "Information" },
			// 	{ class: "forecastMinTemp", text: "Not Available" },
			// ]);
		}
	} else {
		for (let i = 1; i < 24; i++) {
			fetchPromises.push((0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchForecastHourly)(i, city, tempUnit));
		}
	}

	return Promise.all(fetchPromises).then((results) => {
		results.forEach((forecastData) => {
			const forecastCard = document.createElement("div");
			forecastCard.classList.add("forecastCard");

			forecastData.forEach((item) => {
				if (item.class === "weatherIconForecast") {
					const weatherIconForecast = document.createElement("img");
					weatherIconForecast.classList.add(item.class);
					weatherIconForecast.src = item.icon;

					forecastCard.append(weatherIconForecast);
				} else {
					const forecastItem = document.createElement("div");
					forecastItem.classList.add(item.class);
					forecastItem.textContent = item.text;

					forecastCard.append(forecastItem);
				}
			});

			forecastSection.append(forecastCard);
		});

		content.append(forecastSection);
	});
}

function createFooter() {
    const footer = document.querySelector("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footerText");
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-WeatherApp";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.classList.add("githubIcon");
    icon.src = (_images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_5__);

    link.appendChild(icon);

    footer.appendChild(link);
    footer.appendChild(footerText);
}

/***/ }),

/***/ "./src/fetches.js":
/*!************************!*\
  !*** ./src/fetches.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFetch: () => (/* binding */ defaultFetch),
/* harmony export */   fetchCurrTime: () => (/* binding */ fetchCurrTime),
/* harmony export */   fetchForecastDaily: () => (/* binding */ fetchForecastDaily),
/* harmony export */   fetchForecastHourly: () => (/* binding */ fetchForecastHourly),
/* harmony export */   fetchLeftInfo: () => (/* binding */ fetchLeftInfo),
/* harmony export */   fetchRequest: () => (/* binding */ fetchRequest),
/* harmony export */   fetchRightInfo: () => (/* binding */ fetchRightInfo)
/* harmony export */ });
function fetchRequest(city) {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			city +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		}).catch(function (error) {
			const searchCont = document.querySelector(".searchContainer");
			searchCont.classList.add("invalidSearch");

			const searchBox = document.querySelector(".searchBox");
			searchBox.placeholder = "Please enter a valid name";

			return defaultFetch();
		});
}

function defaultFetch() {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			localStorage.getItem("prevCity") +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		localStorage.setItem("city", localStorage.getItem("prevCity"));

		return response.json();
	});
}

function fetchLeftInfo(city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});

		let tempVal = response.current.temp_c;
		let feelsVal = response.current.feelslike_c;

		if (tempUnit === "°F") {
			tempVal = response.current.temp_f;
			feelsVal = response.current.feelslike_f;
		}

		return [
			{ class: "cityDate", text: formattedDate },
			{
				class: "cityName",
				text: response.location.name + ", " + response.location.country,
			},
			{ class: "leftDivider", text: "" },
			{
				class: "cityTemp",
				text: tempVal + tempUnit + " | Feels Like " + feelsVal + tempUnit,
			},
			{ class: "cityWeather", text: response.current.condition.text },
			{ class: "weatherIcon", icon: response.current.condition.icon },
		];
	});
}

function fetchRightInfo(city, speed) {
	return fetchRequest(city).then(function (response) {
		let speedVal = response.current.wind_kph;

		if (speed === "mi") {
			speedVal = response.current.wind_mph;
		}
		
		return [
			{ class: "rightInfoTitle", text: "Humidity" },
			{ class: "rightInfoNo", text: response.current.humidity + " %" },
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Rain" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_rain + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Snow" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_snow + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Wind Speed" },
			{ class: "rightInfoNo", text: speedVal + " " + speed + "/h" },
		];
	});
}

function fetchForecastDaily(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[num];

		if (!forecastData) {
			return [
				{ class: "forecastDate", text: "WeathAPI" },
				{ class: "forecastMaxTemp", text: "Trial Ended" },
				{ class: "forecastMaxTemp", text: "Information" },
				{ class: "forecastMinTemp", text: "Not Available" },
			];
		}

		const localTimeDate = new Date(forecastData.date);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		let tempValMax = forecastData.day.maxtemp_c;
		let tempValMin = forecastData.day.mintemp_c;

		if (tempUnit === "°F") {
			tempValMax = forecastData.day.maxtemp_f;
			tempValMin = forecastData.day.mintemp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "weatherIconForecast", icon: forecastData.day.condition.icon },
			{ class: "forecastMaxTemp", text: tempValMax + tempUnit },
			{ class: "forecastMinTemp", text: tempValMin + tempUnit },
		];
	});
}

function fetchForecastHourly(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[0].hour[num];

		const localTimeEpoch = forecastData.time_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "numeric"
		});

		let tempVal = forecastData.temp_c;

		if (tempUnit === "°F") {
			tempVal = forecastData.temp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "forecastTime", text: formattedTime },
			{ class: "weatherIconForecast", icon: forecastData.condition.icon },
			{ class: "forecastTemp", text: tempVal + tempUnit },
		];
	});
}

function fetchCurrTime(city) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "2-digit",
			hour12: false
		});

		return formattedTime;
	});
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chosenUnit: () => (/* binding */ chosenUnit),
/* harmony export */   searchFunction: () => (/* binding */ searchFunction),
/* harmony export */   switchForecast: () => (/* binding */ switchForecast),
/* harmony export */   switchSpeed: () => (/* binding */ switchSpeed),
/* harmony export */   switchTemp: () => (/* binding */ switchTemp)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


function chosenUnit() {
	const units = document.querySelectorAll(".navItem");

	units.forEach((unit) => {
		unit.classList.remove("chosenUnit");
	});

	if (localStorage.getItem("forecast") === "daily") {
		units[0].classList.add("chosenUnit");
	} else {
		units[1].classList.add("chosenUnit");
	}

	if (localStorage.getItem("tempUnit") === "°C") {
		units[2].classList.add("chosenUnit");
	} else {
		units[3].classList.add("chosenUnit");
	}

	if (localStorage.getItem("speedUnit") === "km") {
		units[4].classList.add("chosenUnit");
	} else {
		units[5].classList.add("chosenUnit");
	}
}

async function searchFunction() {
	const content = document.querySelector(".content");
	const searchCont = document.querySelector(".searchContainer");
	const searchBox = document.querySelector(".searchBox");
	const searchBtn = document.querySelector(".searchBtn");

	searchBtn.onclick = async function () {
		if (searchBox.value.trim()) {
			searchCont.classList.remove("invalidSearch");
			searchBox.placeholder = "Search";

			localStorage.setItem("prevCity", localStorage.getItem("city"));
			localStorage.setItem("city", searchBox.value);

			content.innerHTML = "";
			searchBox.value = "";
			await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
			await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
		} else {
			searchCont.classList.add("invalidSearch");
			searchBox.placeholder = "Please enter a name";
		}
	};
}

async function switchForecast() {
	const forecastSection = document.querySelector(".forecastSection");
	const daily = document.querySelector(".daily");
	const hourly = document.querySelector(".hourly");

	daily.onclick = async function () {
		localStorage.setItem("forecast", "daily");

		forecastSection.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	hourly.onclick = async function () {
		localStorage.setItem("forecast", "hourly");

		forecastSection.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

async function switchTemp() {
	const content = document.querySelector(".content");
	const C = document.querySelector(".celsius");
	const F = document.querySelector(".fahrenheit");

	C.onclick = async function () {
		localStorage.setItem("tempUnit", "°C");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	F.onclick = async function () {
		localStorage.setItem("tempUnit", "°F");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

async function switchSpeed() {
	const content = document.querySelector(".content");
	const KM = document.querySelector(".kilometers");
	const MI = document.querySelector(".miles");

	KM.onclick = async function () {
		localStorage.setItem("speedUnit", "km");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	MI.onclick = async function () {
		localStorage.setItem("speedUnit", "mi");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

/***/ }),

/***/ "./src/fonts/PixelifySans-VariableFont_wght.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/PixelifySans-VariableFont_wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "088d140132e39b3c37a8.ttf";

/***/ }),

/***/ "./src/images/afternoon.jpg":
/*!**********************************!*\
  !*** ./src/images/afternoon.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1995cd16991f177888eb.jpg";

/***/ }),

/***/ "./src/images/evening.jpg":
/*!********************************!*\
  !*** ./src/images/evening.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "293ffba11335eb43a5cb.jpg";

/***/ }),

/***/ "./src/images/githubLogo.svg":
/*!***********************************!*\
  !*** ./src/images/githubLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4577cfbb9306cfe891b.svg";

/***/ }),

/***/ "./src/images/morning.png":
/*!********************************!*\
  !*** ./src/images/morning.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5b6ba71c1dbf397560b.png";

/***/ }),

/***/ "./src/images/night.jpg":
/*!******************************!*\
  !*** ./src/images/night.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40eed19c13c34632fe19.jpg";

/***/ }),

/***/ "./src/images/siteLogo.png":
/*!*********************************!*\
  !*** ./src/images/siteLogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34ba1304792a31b7d163.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _images_siteLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/siteLogo.png */ "./src/images/siteLogo.png");







const tempUnitItems = [
	{ class: "celsius", text: "°C" },
	{ class: "fahrenheit", text: "°F" },
];

const speedUnitItems = [
	{ class: "kilometers", text: "km" },
	{ class: "miles", text: "mi" },
];

const forecastOpt = [
	{ class: "daily", text: "Daily" },
	{ class: "hourly", text: "Hourly" },
];

document.addEventListener("DOMContentLoaded", function () {
    try {
		initializeLocalStorage();
		setFavicon();
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("forecastOpt", forecastOpt);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("tempUnit", tempUnitItems);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("speedUnit", speedUnitItems);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.setCurrInfo)();
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.setForecast)();
		(0,_content__WEBPACK_IMPORTED_MODULE_1__.createFooter)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.searchFunction)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchForecast)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchTemp)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchSpeed)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.chosenUnit)();
	} catch (error) {
		console.error("Initialization error:", error);
	}
});

function setFavicon() {
	const faviconLink = document.createElement("link");
	faviconLink.rel = "icon";
	faviconLink.href = _images_siteLogo_png__WEBPACK_IMPORTED_MODULE_3__;

	document.head.appendChild(faviconLink);
}

function initializeLocalStorage() {
	const localStorageItems = [
		{ key: "city", defaultValue: "toronto" },
		{ key: "tempUnit", defaultValue: "°C" },
		{ key: "speedUnit", defaultValue: "km" },
		{ key: "forecast", defaultValue: "daily" },
	];

	for (const item of localStorageItems) {
		if (!localStorage.getItem(item.key)) {
			localStorage.setItem(item.key, item.defaultValue);
		}
	}
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw0Q0FBNEMsK0pBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxTQUFTLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxzQ0FBc0MsMEJBQTBCLHlDQUF5Qyx1QkFBdUIsR0FBRyxnQkFBZ0IsOEJBQThCLDJEQUEyRCx1QkFBdUIsR0FBRyxPQUFPLGlCQUFpQixnQkFBZ0IsR0FBRyxVQUFVLGtCQUFrQixpQ0FBaUMscUNBQXFDLDJCQUEyQixzQ0FBc0MsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxnSEFBZ0gsZ0JBQWdCLEdBQUcsdUNBQXVDLGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxzQkFBc0IsR0FBRyxnQkFBZ0IsMENBQTBDLG9CQUFvQixtQ0FBbUMsc0JBQXNCLEdBQUcsU0FBUyxrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixxQkFBcUIsb0JBQW9CLDBCQUEwQixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsNkJBQTZCLGtDQUFrQyxrQkFBa0IsY0FBYyxHQUFHLGdCQUFnQixpQkFBaUIsb0JBQW9CLEdBQUcsZ0JBQWdCLHNDQUFzQyxxQkFBcUIsb0JBQW9CLDRCQUE0QixHQUFHLDJCQUEyQixvQkFBb0Isb0JBQW9CLHNCQUFzQix3QkFBd0IsMEJBQTBCLEdBQUcsdUNBQXVDLGlCQUFpQiw0QkFBNEIsMkJBQTJCLEdBQUcsY0FBYyxlQUFlLGlCQUFpQiw0QkFBNEIsa0JBQWtCLEdBQUcsaUJBQWlCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLGtCQUFrQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QiwrQ0FBK0MsR0FBRywwQ0FBMEMsa0JBQWtCLHdCQUF3QixtQ0FBbUMsc0JBQXNCLHFCQUFxQixvQkFBb0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixvQkFBb0Isa0JBQWtCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLGVBQWUsb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsMEJBQTBCLDRCQUE0QixHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQixvQkFBb0IsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsa0NBQWtDLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLHVCQUF1QixHQUFHLGtEQUFrRCxrQkFBa0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHdCQUF3QiwrQ0FBK0MsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLHNDQUFzQyxvQkFBb0IscUJBQXFCLEdBQUcsc0JBQXNCLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FBRywyRUFBMkUsK0NBQStDLHdCQUF3QixnQ0FBZ0MsaURBQWlELGdDQUFnQyxHQUFHLDBCQUEwQix1QkFBdUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsaUJBQWlCLG1CQUFtQixzQkFBc0IsR0FBRyxpQkFBaUIscUJBQXFCLGtCQUFrQixtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CO0FBQzFzTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzFUMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbUI7O0FBRXVCO0FBQ0k7QUFDSjtBQUNKO0FBQ1c7O0FBRWpEO0FBQ0EsQ0FBQyx1REFBYTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEMsSUFBSTtBQUNKLHlCQUF5QixrREFBUztBQUNsQyxJQUFJO0FBQ0oseUJBQXlCLGdEQUFPO0FBQ2hDLElBQUk7QUFDSix5QkFBeUIsOENBQUs7QUFDOUI7QUFDQTtBQUNBLCtDQUErQyxtQkFBbUI7QUFDbEUsSUFBSTtBQUNKO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFhO0FBQ2YsRUFBRSx3REFBYztBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLHNCQUFzQiw0REFBa0I7QUFDeEM7QUFDQSxTQUFTLHlDQUF5QztBQUNsRCxTQUFTLCtDQUErQztBQUN4RCxTQUFTLCtDQUErQztBQUN4RCxTQUFTLGlEQUFpRDtBQUMxRDtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQixRQUFRO0FBQzFCLHNCQUFzQiw2REFBbUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQSxFQUFFO0FBQ0Y7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtREFBVTs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLHdDQUF3QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osS0FBSyxnQ0FBZ0M7QUFDckM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEtBQUssNkRBQTZEO0FBQ2xFLEtBQUssNkRBQTZEO0FBQ2xFO0FBQ0EsRUFBRTtBQUNGOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQ0FBMkM7QUFDaEQsS0FBSyw4REFBOEQ7QUFDbkUsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSyxpREFBaUQ7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssaURBQWlEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDJEQUEyRDtBQUNoRTtBQUNBLEVBQUU7QUFDRjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0seUNBQXlDO0FBQy9DLE1BQU0sK0NBQStDO0FBQ3JELE1BQU0sK0NBQStDO0FBQ3JELE1BQU0saURBQWlEO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pELEtBQUsscUVBQXFFO0FBQzFFLEtBQUssdURBQXVEO0FBQzVELEtBQUssdURBQXVEO0FBQzVEO0FBQ0EsRUFBRTtBQUNGOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQsS0FBSyw0Q0FBNEM7QUFDakQsS0FBSyxpRUFBaUU7QUFDdEUsS0FBSyxpREFBaUQ7QUFDdEQ7QUFDQSxFQUFFO0FBQ0Y7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1xRDs7QUFFOUM7QUFDUDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxREFBVztBQUNwQixTQUFTLHFEQUFXO0FBQ3BCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkIsUUFBUSxxREFBVztBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CLFFBQVEscURBQVc7QUFDbkI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CLFFBQVEscURBQVc7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQixRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjs7QUFPSDtBQU9FOztBQUV3Qjs7QUFFN0M7QUFDQSxHQUFHLDhCQUE4QjtBQUNqQyxHQUFHLGlDQUFpQztBQUNwQzs7QUFFQTtBQUNBLEdBQUcsaUNBQWlDO0FBQ3BDLEdBQUcsNEJBQTRCO0FBQy9COztBQUVBO0FBQ0EsR0FBRywrQkFBK0I7QUFDbEMsR0FBRyxpQ0FBaUM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCLFFBQVEsdURBQWE7QUFDckIsUUFBUSx1REFBYTtBQUNyQixRQUFRLHFEQUFXO0FBQ25CLFFBQVEscURBQVc7QUFDbkIsRUFBRSxzREFBWTtBQUNkLFFBQVEsMERBQWM7QUFDdEIsUUFBUSwwREFBYztBQUN0QixRQUFRLHNEQUFVO0FBQ2xCLFFBQVEsdURBQVc7QUFDbkIsUUFBUSxzREFBVTtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9mZXRjaGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvTGF0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL1BpeGVsaWZ5U2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiUGl4ZWxpZnlcIjtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKiB7XG5cdHBhZGRpbmc6IDBweDtcblx0bWFyZ2luOiAwcHg7XG59XG5cbmJvZHkge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCA4OHZoIDR2aDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmJvZHk6OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gYm90dG9tLFxuXHRcdHJnYmEoMCwgMCwgMCwgMC43NSkgMCUsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjUpIDEwMCVcblx0KTtcblx0ei1pbmRleDogLTE7XG59XG5cbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cbmhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMHB4IDMycHg7XG59XG5cbi5zaXRlVGl0bGUge1xuXHRmb250LWZhbWlseTogXCJQaXhlbGlmeVwiLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDMycHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblx0cGFkZGluZzogMHB4IDEycHg7XG59XG5cbm5hdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbm5hdiA+ICosXG4uc2VhcmNoQm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHBhZGRpbmc6IDNweCA3cHg7XG5cdG1hcmdpbjogMHB4IDVweDtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcblx0cGFkZGluZzogOHB4O1xufVxuXG4uaW52YWxpZFNlYXJjaCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG59XG5cbi5zZWFyY2hCb3gsXG4uc2VhcmNoQnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaEJveCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VhcmNoQnRuIHtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2SXRlbSxcbi5zZWFyY2hCdG4ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZzogMnB4IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRyYW5zaXRpb246IGVhc2UgMC4zcztcbn1cblxuLm5hdkl0ZW06aG92ZXIsXG4uc2VhcmNoQnRuOmhvdmVyIHtcblx0Y29sb3I6IGJsYWNrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmRpdmlkZXIge1xuXHR3aWR0aDogMXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRtYXJnaW46IDAgNXB4O1xufVxuXG4uY2hvc2VuVW5pdCB7XG5cdGNvbG9yOiBibGFjaztcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIENvbnRlbnQgKi9cbi5jb250ZW50IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY3VyclwiIFwiZm9yZWNhc3RcIjtcbn1cblxuLyogQ3VycmVudCBJbmZvcm1hdGlvbiAqL1xuLmN1cnJJbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAyNnB4IDBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Z3JpZC1hcmVhOiBjdXJyO1xufVxuXG4uY3VyckluZm9MZWZ0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Zm9udC1zaXplOiAzMnB4O1xuXHRwYWRkaW5nOiAyNnB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdG1heC13aWR0aDogNzIwcHg7XG59XG5cbi5jaXR5RGF0ZSB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmNpdHlOYW1lIHtcblx0Zm9udC1zaXplOiA0NnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGVmdERpdmlkZXIge1xuXHRtYXJnaW46IDE2cHggMHB4O1xufVxuXG4uY2l0eVRlbXAge1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jaXR5V2VhdGhlciB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLndlYXRoZXJJY29uIHtcblx0d2lkdGg6IDEyOHB4O1xuXHRoZWlnaHQ6IDEyOHB4O1xufVxuXG4uY3VyckluZm9SaWdodCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBhZGRpbmc6IDI2cHg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yaWdodEluZm9UaXRsZSB7XG5cdGZvbnQtc2l6ZTogMjZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJpZ2h0SW5mb05vIHtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0Zm9udC1zaXplOiAyMnB4O1xufVxuXG4ucmlnaHREaXZpZGVyIHtcblx0bWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmxlZnREaXZpZGVyLFxuLnJpZ2h0RGl2aWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRoZWlnaHQ6IDFweDtcblx0d2lkdGg6IDEwMCU7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLyogRm9yZWNhc3QgSW5mb3JtYXRpb24gKi9cbi5mb3JlY2FzdFNlY3Rpb24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG5cdG1hcmdpbi1ib3R0b206IDI2cHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdGdyaWQtYXJlYTogZm9yZWNhc3Q7XG59XG5cbi5mb3JlY2FzdENhcmQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0aGVpZ2h0OiA5MCU7XG5cdHdpZHRoOiAyMDBweDtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXHRtYXJnaW46IDEwcHg7XG59XG5cbi5mb3JlY2FzdERhdGUge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JlY2FzdFRpbWUge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JlY2FzdE1heFRlbXAsXG4uZm9yZWNhc3RUZW1wIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9yZWNhc3RNaW5UZW1wIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ud2VhdGhlckljb25Gb3JlY2FzdCB7XG5cdHdpZHRoOiA3NXB4O1xuXHRoZWlnaHQ6IDc1cHg7XG59XG5cbi5jdXJySW5mb0xlZnQsXG4uY3VyckluZm9SaWdodCxcbi5mb3JlY2FzdFNlY3Rpb24sXG5uYXYgPiAqLCBcbmZvb3RlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xuXHRib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xufVxuXG4vKiBGb290ZXIgKi9cbmZvb3RlciB7XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0Ym9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlclRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5naXRodWJJY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQiw0Q0FBa0M7Q0FDbEMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Ms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c0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQiwwQ0FBMEM7Q0FDMUMsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTs7Ozs7Q0FLQywwQ0FBMEM7Q0FDMUMsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQiw0Q0FBNEM7Q0FDNUMsMkJBQTJCO0FBQzVCOztBQUVBLFdBQVc7QUFDWDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcblxcdHNyYzogdXJsKFxcXCJmb250cy9MYXRvLVJlZ3VsYXIudHRmXFxcIik7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIlBpeGVsaWZ5XFxcIjtcXG5cXHRzcmM6IHVybChcXFwiZm9udHMvUGl4ZWxpZnlTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuXFx0cGFkZGluZzogMHB4O1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdnc7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggODh2aCA0dmg7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byBib3R0b20sXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjc1KSAwJSxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJVxcblxcdCk7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwYWRkaW5nOiAwcHggMzJweDtcXG59XFxuXFxuLnNpdGVUaXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQaXhlbGlmeVxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAwcHggMTJweDtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbm5hdiA+ICosXFxuLnNlYXJjaEJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0cGFkZGluZzogM3B4IDdweDtcXG5cXHRtYXJnaW46IDBweCA1cHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQ29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5pbnZhbGlkU2VhcmNoIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbn1cXG5cXG4uc2VhcmNoQm94LFxcbi5zZWFyY2hCdG4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uc2VhcmNoQnRuIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2SXRlbSxcXG4uc2VhcmNoQnRuIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0dHJhbnNpdGlvbjogZWFzZSAwLjNzO1xcbn1cXG5cXG4ubmF2SXRlbTpob3ZlcixcXG4uc2VhcmNoQnRuOmhvdmVyIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcblxcdHdpZHRoOiAxcHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5jaG9zZW5Vbml0IHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcbi5jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY3VyclxcXCIgXFxcImZvcmVjYXN0XFxcIjtcXG59XFxuXFxuLyogQ3VycmVudCBJbmZvcm1hdGlvbiAqL1xcbi5jdXJySW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwYWRkaW5nOiAyNnB4IDBweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGdyaWQtYXJlYTogY3VycjtcXG59XFxuXFxuLmN1cnJJbmZvTGVmdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZvbnQtc2l6ZTogMzJweDtcXG5cXHRwYWRkaW5nOiAyNnB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdG1heC13aWR0aDogNzIwcHg7XFxufVxcblxcbi5jaXR5RGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jaXR5TmFtZSB7XFxuXFx0Zm9udC1zaXplOiA0NnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5sZWZ0RGl2aWRlciB7XFxuXFx0bWFyZ2luOiAxNnB4IDBweDtcXG59XFxuXFxuLmNpdHlUZW1wIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNpdHlXZWF0aGVyIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLndlYXRoZXJJY29uIHtcXG5cXHR3aWR0aDogMTI4cHg7XFxuXFx0aGVpZ2h0OiAxMjhweDtcXG59XFxuXFxuLmN1cnJJbmZvUmlnaHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAyNnB4O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0SW5mb1RpdGxlIHtcXG5cXHRmb250LXNpemU6IDI2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJpZ2h0SW5mb05vIHtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnJpZ2h0RGl2aWRlciB7XFxuXFx0bWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLmxlZnREaXZpZGVyLFxcbi5yaWdodERpdmlkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGhlaWdodDogMXB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogRm9yZWNhc3QgSW5mb3JtYXRpb24gKi9cXG4uZm9yZWNhc3RTZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAyNnB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxuXFx0Z3JpZC1hcmVhOiBmb3JlY2FzdDtcXG59XFxuXFxuLmZvcmVjYXN0Q2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdFRpbWUge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZm9yZWNhc3RNYXhUZW1wLFxcbi5mb3JlY2FzdFRlbXAge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZm9yZWNhc3RNaW5UZW1wIHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ud2VhdGhlckljb25Gb3JlY2FzdCB7XFxuXFx0d2lkdGg6IDc1cHg7XFxuXFx0aGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4uY3VyckluZm9MZWZ0LFxcbi5jdXJySW5mb1JpZ2h0LFxcbi5mb3JlY2FzdFNlY3Rpb24sXFxubmF2ID4gKiwgXFxuZm9vdGVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyVGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZ2l0aHViSWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG5cdGZldGNoTGVmdEluZm8sXG5cdGZldGNoUmlnaHRJbmZvLFxuXHRmZXRjaEZvcmVjYXN0RGFpbHksXG5cdGZldGNoRm9yZWNhc3RIb3VybHksXG5cdGZldGNoQ3VyclRpbWVcbn0gZnJvbSBcIi4vZmV0Y2hlc1wiO1xuXG5pbXBvcnQgbW9ybmluZyBmcm9tIFwiLi9pbWFnZXMvbW9ybmluZy5wbmdcIlxuaW1wb3J0IGFmdGVybm9vbiBmcm9tIFwiLi9pbWFnZXMvYWZ0ZXJub29uLmpwZ1wiXG5pbXBvcnQgZXZlbmluZyBmcm9tIFwiLi9pbWFnZXMvZXZlbmluZy5qcGdcIlxuaW1wb3J0IG5pZ2h0IGZyb20gXCIuL2ltYWdlcy9uaWdodC5qcGdcIlxuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1YkxvZ28uc3ZnXCI7XG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmQoY2l0eSkge1xuXHRmZXRjaEN1cnJUaW1lKGNpdHkpXG5cdCAgLnRoZW4odGltZSA9PiB7XG5cdFx0bGV0IGJhY2tncm91bmRJbWFnZVVybDtcblxuXHRcdGlmICh0aW1lID49IDUgJiYgdGltZSA8IDEyKSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBtb3JuaW5nO1xuXHRcdH0gZWxzZSBpZiAodGltZSA+PSAxMiAmJiB0aW1lIDwgMTcpIHtcblx0XHQgIGJhY2tncm91bmRJbWFnZVVybCA9IGFmdGVybm9vbjtcblx0XHR9IGVsc2UgaWYgKHRpbWUgPj0gMTcgJiYgdGltZSA8IDIwKSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBldmVuaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBuaWdodDtcblx0XHR9XG4gIFxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZVVybH0pYDtcblx0ICB9KTtcbiAgfVxuICBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdkl0ZW0oY29udGFpbmVyLCBpdGVtcykge1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0dWwuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuXG5cdGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0bGkuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG5cdFx0bGkuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRsaS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdHVsLmFwcGVuZChsaSk7XG5cblx0XHRpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0ZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcblx0XHRcdHVsLmFwcGVuZChkaXZpZGVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIikuYXBwZW5kKHVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJJbmZvKCkge1xuICAgIGxldCBjaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpO1xuICAgIGxldCB0ZW1wVW5pdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIik7XG4gICAgbGV0IHNwZWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIik7XG5cblx0c2V0QmFja2dyb3VuZChjaXR5KTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5cdGNvbnN0IGN1cnJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGN1cnJJbmZvLmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1wiKTtcblx0Y3VyckluZm8uaW5uZXJIVE1MID0gYGA7XG5cblx0Y29uc3QgY3VyckluZm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGN1cnJJbmZvTGVmdC5jbGFzc0xpc3QuYWRkKFwiY3VyckluZm9MZWZ0XCIpO1xuXHRcblx0cmV0dXJuIFByb21pc2UuYWxsKFtcblx0XHRmZXRjaExlZnRJbmZvKGNpdHksIHRlbXBVbml0KSxcblx0XHRmZXRjaFJpZ2h0SW5mbyhjaXR5LCBzcGVlZCksXG5cdF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcblx0XHRjb25zdCBsZWZ0SW5mb1Jlc3VsdCA9IHJlc3VsdHNbMF07XG5cdFx0Y29uc3QgcmlnaHRJbmZvUmVzdWx0ID0gcmVzdWx0c1sxXTtcblxuXHRcdGxlZnRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLmljb24pIHtcblx0XHRcdFx0Y29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHRcdGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0aWNvbkNvbnRhaW5lci5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZChpY29uQ29udGFpbmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IGN1cnJJbmZvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjdXJySW5mb1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1JpZ2h0XCIpO1xuXG5cdFx0cmlnaHRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdFx0dGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdFx0Y3VyckluZm9SaWdodC5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5cdFx0fSk7XG5cblx0XHRjdXJySW5mby5hcHBlbmQoY3VyckluZm9MZWZ0LCBjdXJySW5mb1JpZ2h0KTtcblx0XHRjb250ZW50LmFwcGVuZChjdXJySW5mbyk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIik7XG4gICAgbGV0IHRlbXBVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKTtcbiAgICBsZXQgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIik7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuXHRsZXQgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFNlY3Rpb25cIik7XG5cdGlmICghZm9yZWNhc3RTZWN0aW9uKSB7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdFNlY3Rpb25cIik7XG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fVxuXG5cdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBgYDtcblxuXHRjb25zdCBmZXRjaFByb21pc2VzID0gW107XG5cdGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuXHRcdFx0ZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3REYWlseShpLCBjaXR5LCB0ZW1wVW5pdCkpO1xuXHRcdFx0Ly8gZmV0Y2hQcm9taXNlcy5wdXNoKFtcblx0XHRcdC8vIFx0eyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogXCJXZWF0aEFQSVwiIH0sXG5cdFx0XHQvLyBcdHsgY2xhc3M6IFwiZm9yZWNhc3RNYXhUZW1wXCIsIHRleHQ6IFwiVHJpYWwgRW5kZWRcIiB9LFxuXHRcdFx0Ly8gXHR7IGNsYXNzOiBcImZvcmVjYXN0TWF4VGVtcFwiLCB0ZXh0OiBcIkluZm9ybWF0aW9uXCIgfSxcblx0XHRcdC8vIFx0eyBjbGFzczogXCJmb3JlY2FzdE1pblRlbXBcIiwgdGV4dDogXCJOb3QgQXZhaWxhYmxlXCIgfSxcblx0XHRcdC8vIF0pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDI0OyBpKyspIHtcblx0XHRcdGZldGNoUHJvbWlzZXMucHVzaChmZXRjaEZvcmVjYXN0SG91cmx5KGksIGNpdHksIHRlbXBVbml0KSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGZldGNoUHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcblx0XHRyZXN1bHRzLmZvckVhY2goKGZvcmVjYXN0RGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgZm9yZWNhc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvcmVjYXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RDYXJkXCIpO1xuXG5cdFx0XHRmb3JlY2FzdERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpZiAoaXRlbS5jbGFzcyA9PT0gXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIpIHtcblx0XHRcdFx0XHRjb25zdCB3ZWF0aGVySWNvbkZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdFx0XHR3ZWF0aGVySWNvbkZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0d2VhdGhlckljb25Gb3JlY2FzdC5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0XHRmb3JlY2FzdENhcmQuYXBwZW5kKHdlYXRoZXJJY29uRm9yZWNhc3QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IGZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0XHRcdFx0Zm9yZWNhc3RDYXJkLmFwcGVuZChmb3JlY2FzdEl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yZWNhc3RTZWN0aW9uLmFwcGVuZChmb3JlY2FzdENhcmQpO1xuXHRcdH0pO1xuXG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJUZXh0XCIpO1xuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIkRlc2lnbmVkICYgQnVpbHQgYnkgRGVjaHNpdCBOYWV0c2F3YW5cIjtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWV0c2F3ZC9PZGluUHJvamVjdC1XZWF0aGVyQXBwXCI7XG4gICAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChnaXRodWJMb2dvKTtcblxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmZXRjaFJlcXVlc3QoY2l0eSkge1xuXHRyZXR1cm4gZmV0Y2goXG5cdFx0XCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNGY2ZTY3MGI5Y2E0NmZjYWYyMjAzNjU1MjMxMTEwJnE9XCIgK1xuXHRcdFx0Y2l0eSArXG5cdFx0XHRcIiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub1wiLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdGNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaENvbnRhaW5lclwiKTtcblx0XHRcdHNlYXJjaENvbnQuY2xhc3NMaXN0LmFkZChcImludmFsaWRTZWFyY2hcIik7XG5cblx0XHRcdGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQm94XCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lXCI7XG5cblx0XHRcdHJldHVybiBkZWZhdWx0RmV0Y2goKTtcblx0XHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGZXRjaCgpIHtcblx0cmV0dXJuIGZldGNoKFxuXHRcdFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTRmNmU2NzBiOWNhNDZmY2FmMjIwMzY1NTIzMTExMCZxPVwiICtcblx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJldkNpdHlcIikgK1xuXHRcdFx0XCImZGF5cz03JmFxaT1ubyZhbGVydHM9bm9cIixcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblx0XHR9XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSk7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTGVmdEluZm8oY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0dGltZVpvbmU6IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkLFxuXHRcdFx0d2Vla2RheTogXCJsb25nXCIsXG5cdFx0XHR5ZWFyOiBcIm51bWVyaWNcIixcblx0XHRcdG1vbnRoOiBcImxvbmdcIixcblx0XHRcdGRheTogXCJudW1lcmljXCIsXG5cdFx0XHRob3VyOiBcIjItZGlnaXRcIixcblx0XHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG5cdFx0fSk7XG5cblx0XHRsZXQgdGVtcFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuXHRcdGxldCBmZWVsc1ZhbCA9IHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG5cblx0XHRpZiAodGVtcFVuaXQgPT09IFwiwrBGXCIpIHtcblx0XHRcdHRlbXBWYWwgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfZjtcblx0XHRcdGZlZWxzVmFsID0gcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJjaXR5RGF0ZVwiLCB0ZXh0OiBmb3JtYXR0ZWREYXRlIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcImNpdHlOYW1lXCIsXG5cdFx0XHRcdHRleHQ6IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWUgKyBcIiwgXCIgKyByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5LFxuXHRcdFx0fSxcblx0XHRcdHsgY2xhc3M6IFwibGVmdERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzczogXCJjaXR5VGVtcFwiLFxuXHRcdFx0XHR0ZXh0OiB0ZW1wVmFsICsgdGVtcFVuaXQgKyBcIiB8IEZlZWxzIExpa2UgXCIgKyBmZWVsc1ZhbCArIHRlbXBVbml0LFxuXHRcdFx0fSxcblx0XHRcdHsgY2xhc3M6IFwiY2l0eVdlYXRoZXJcIiwgdGV4dDogcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dCB9LFxuXHRcdFx0eyBjbGFzczogXCJ3ZWF0aGVySWNvblwiLCBpY29uOiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uIH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJpZ2h0SW5mbyhjaXR5LCBzcGVlZCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0bGV0IHNwZWVkVmFsID0gcmVzcG9uc2UuY3VycmVudC53aW5kX2twaDtcblxuXHRcdGlmIChzcGVlZCA9PT0gXCJtaVwiKSB7XG5cdFx0XHRzcGVlZFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGg7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiSHVtaWRpdHlcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9Ob1wiLCB0ZXh0OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIgJVwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiQ2hhbmNlIG9mIFJhaW5cIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzczogXCJyaWdodEluZm9Ob1wiLFxuXHRcdFx0XHR0ZXh0OiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfd2lsbF9pdF9yYWluICsgXCIgJVwiLFxuXHRcdFx0fSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgU25vd1wiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsXG5cdFx0XHRcdHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3Nub3cgKyBcIiAlXCIsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIldpbmQgU3BlZWRcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9Ob1wiLCB0ZXh0OiBzcGVlZFZhbCArIFwiIFwiICsgc3BlZWQgKyBcIi9oXCIgfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRm9yZWNhc3REYWlseShudW0sIGNpdHksIHRlbXBVbml0KSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgZm9yZWNhc3REYXRhID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbbnVtXTtcblxuXHRcdGlmICghZm9yZWNhc3REYXRhKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0RGF0ZVwiLCB0ZXh0OiBcIldlYXRoQVBJXCIgfSxcblx0XHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1heFRlbXBcIiwgdGV4dDogXCJUcmlhbCBFbmRlZFwiIH0sXG5cdFx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RNYXhUZW1wXCIsIHRleHQ6IFwiSW5mb3JtYXRpb25cIiB9LFxuXHRcdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0TWluVGVtcFwiLCB0ZXh0OiBcIk5vdCBBdmFpbGFibGVcIiB9LFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUoZm9yZWNhc3REYXRhLmRhdGUpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0dGltZVpvbmU6IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkLFxuXHRcdFx0d2Vla2RheTogXCJzaG9ydFwiLFxuXHRcdFx0bW9udGg6IFwic2hvcnRcIixcblx0XHRcdGRheTogXCJudW1lcmljXCJcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsTWF4ID0gZm9yZWNhc3REYXRhLmRheS5tYXh0ZW1wX2M7XG5cdFx0bGV0IHRlbXBWYWxNaW4gPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbE1heCA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9mO1xuXHRcdFx0dGVtcFZhbE1pbiA9IGZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0RGF0ZVwiLCB0ZXh0OiBmb3JtYXR0ZWREYXRlIH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uRm9yZWNhc3RcIiwgaWNvbjogZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24uaWNvbiB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1heFRlbXBcIiwgdGV4dDogdGVtcFZhbE1heCArIHRlbXBVbml0IH0sXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0TWluVGVtcFwiLCB0ZXh0OiB0ZW1wVmFsTWluICsgdGVtcFVuaXQgfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRm9yZWNhc3RIb3VybHkobnVtLCBjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0bGV0IGZvcmVjYXN0RGF0YSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbbnVtXTtcblxuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gZm9yZWNhc3REYXRhLnRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHR3ZWVrZGF5OiBcInNob3J0XCIsXG5cdFx0XHRtb250aDogXCJzaG9ydFwiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIlxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0dGltZVpvbmU6IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkLFxuXHRcdFx0aG91cjogXCJudW1lcmljXCJcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsID0gZm9yZWNhc3REYXRhLnRlbXBfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbCA9IGZvcmVjYXN0RGF0YS50ZW1wX2Y7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3REYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RUaW1lXCIsIHRleHQ6IGZvcm1hdHRlZFRpbWUgfSxcblx0XHRcdHsgY2xhc3M6IFwid2VhdGhlckljb25Gb3JlY2FzdFwiLCBpY29uOiBmb3JlY2FzdERhdGEuY29uZGl0aW9uLmljb24gfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RUZW1wXCIsIHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCB9LFxuXHRcdF07XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDdXJyVGltZShjaXR5KSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRjb25zdCBsb2NhbFRpbWVFcG9jaCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCAqIDEwMDA7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZUVwb2NoKTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcblx0XHRcdHRpbWVab25lOiByZXNwb25zZS5sb2NhdGlvbi50el9pZCxcblx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0aG91cjEyOiBmYWxzZVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZvcm1hdHRlZFRpbWU7XG5cdH0pO1xufSIsImltcG9ydCB7IHNldEN1cnJJbmZvLCBzZXRGb3JlY2FzdCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNob3NlblVuaXQoKSB7XG5cdGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpO1xuXG5cdHVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcblx0XHR1bml0LmNsYXNzTGlzdC5yZW1vdmUoXCJjaG9zZW5Vbml0XCIpO1xuXHR9KTtcblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKSA9PT0gXCJkYWlseVwiKSB7XG5cdFx0dW5pdHNbMF0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH0gZWxzZSB7XG5cdFx0dW5pdHNbMV0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH1cblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKSA9PT0gXCLCsENcIikge1xuXHRcdHVuaXRzWzJdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHVuaXRzWzNdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpID09PSBcImttXCIpIHtcblx0XHR1bml0c1s0XS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fSBlbHNlIHtcblx0XHR1bml0c1s1XS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoRnVuY3Rpb24oKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaENvbnRhaW5lclwiKTtcblx0Y29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCb3hcIik7XG5cdGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuXG5cdHNlYXJjaEJ0bi5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGlmIChzZWFyY2hCb3gudmFsdWUudHJpbSgpKSB7XG5cdFx0XHRzZWFyY2hDb250LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkU2VhcmNoXCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcblxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmV2Q2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIikpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5XCIsIHNlYXJjaEJveC52YWx1ZSk7XG5cblx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRcdHNlYXJjaEJveC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFNlYXJjaFwiKTtcblx0XHRcdHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiUGxlYXNlIGVudGVyIGEgbmFtZVwiO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaEZvcmVjYXN0KCkge1xuXHRjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0U2VjdGlvblwiKTtcblx0Y29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXHRjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuXHRkYWlseS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RcIiwgXCJkYWlseVwiKTtcblxuXHRcdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xuXG5cdGhvdXJseS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RcIiwgXCJob3VybHlcIik7XG5cblx0XHRmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaFRlbXAoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIik7XG5cdGNvbnN0IEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG5cblx0Qy5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFVuaXRcIiwgXCLCsENcIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcblxuXHRGLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wVW5pdFwiLCBcIsKwRlwiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoU3BlZWQoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IEtNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5raWxvbWV0ZXJzXCIpO1xuXHRjb25zdCBNSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlsZXNcIik7XG5cblx0S00ub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwZWVkVW5pdFwiLCBcImttXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG5cblx0TUkub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwZWVkVW5pdFwiLCBcIm1pXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgXG4gICAgY3JlYXRlTmF2SXRlbSwgXG4gICAgc2V0Q3VyckluZm8sIFxuICAgIHNldEZvcmVjYXN0LFxuXHRjcmVhdGVGb290ZXIgXG59IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7XG5cdHNlYXJjaEZ1bmN0aW9uLFxuXHRjaG9zZW5Vbml0LFxuXHRzd2l0Y2hGb3JlY2FzdCxcblx0c3dpdGNoVGVtcCxcblx0c3dpdGNoU3BlZWRcbn0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmltcG9ydCBzaXRlTG9nbyBmcm9tIFwiLi9pbWFnZXMvc2l0ZUxvZ28ucG5nXCI7XG5cbmNvbnN0IHRlbXBVbml0SXRlbXMgPSBbXG5cdHsgY2xhc3M6IFwiY2Vsc2l1c1wiLCB0ZXh0OiBcIsKwQ1wiIH0sXG5cdHsgY2xhc3M6IFwiZmFocmVuaGVpdFwiLCB0ZXh0OiBcIsKwRlwiIH0sXG5dO1xuXG5jb25zdCBzcGVlZFVuaXRJdGVtcyA9IFtcblx0eyBjbGFzczogXCJraWxvbWV0ZXJzXCIsIHRleHQ6IFwia21cIiB9LFxuXHR7IGNsYXNzOiBcIm1pbGVzXCIsIHRleHQ6IFwibWlcIiB9LFxuXTtcblxuY29uc3QgZm9yZWNhc3RPcHQgPSBbXG5cdHsgY2xhc3M6IFwiZGFpbHlcIiwgdGV4dDogXCJEYWlseVwiIH0sXG5cdHsgY2xhc3M6IFwiaG91cmx5XCIsIHRleHQ6IFwiSG91cmx5XCIgfSxcbl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuXHRcdGluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcblx0XHRzZXRGYXZpY29uKCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJmb3JlY2FzdE9wdFwiLCBmb3JlY2FzdE9wdCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJ0ZW1wVW5pdFwiLCB0ZW1wVW5pdEl0ZW1zKTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcInNwZWVkVW5pdFwiLCBzcGVlZFVuaXRJdGVtcyk7XG4gICAgICAgIHNldEN1cnJJbmZvKCk7XG4gICAgICAgIHNldEZvcmVjYXN0KCk7XG5cdFx0Y3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIHNlYXJjaEZ1bmN0aW9uKCk7XG4gICAgICAgIHN3aXRjaEZvcmVjYXN0KCk7XG4gICAgICAgIHN3aXRjaFRlbXAoKTtcbiAgICAgICAgc3dpdGNoU3BlZWQoKTtcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJJbml0aWFsaXphdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gc2V0RmF2aWNvbigpIHtcblx0Y29uc3QgZmF2aWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0ZmF2aWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG5cdGZhdmljb25MaW5rLmhyZWYgPSBzaXRlTG9nbztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb25MaW5rKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpIHtcblx0Y29uc3QgbG9jYWxTdG9yYWdlSXRlbXMgPSBbXG5cdFx0eyBrZXk6IFwiY2l0eVwiLCBkZWZhdWx0VmFsdWU6IFwidG9yb250b1wiIH0sXG5cdFx0eyBrZXk6IFwidGVtcFVuaXRcIiwgZGVmYXVsdFZhbHVlOiBcIsKwQ1wiIH0sXG5cdFx0eyBrZXk6IFwic3BlZWRVbml0XCIsIGRlZmF1bHRWYWx1ZTogXCJrbVwiIH0sXG5cdFx0eyBrZXk6IFwiZm9yZWNhc3RcIiwgZGVmYXVsdFZhbHVlOiBcImRhaWx5XCIgfSxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgbG9jYWxTdG9yYWdlSXRlbXMpIHtcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0ua2V5KSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5rZXksIGl0ZW0uZGVmYXVsdFZhbHVlKTtcblx0XHR9XG5cdH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=