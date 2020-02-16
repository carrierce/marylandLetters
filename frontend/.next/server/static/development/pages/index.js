module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/charlescarrier/Dev/marylandLettersProject/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx("div", {
    className: "container m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.data
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

Index.getInitialProps = async () => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("http://localhost:5500/api/letter/1");
  const data = await response.json();
  let textToArray = data[0].text.split("");
  let testText = "\tMonday \tMay 9\rMrs. Jervis\rDear Madam,\rThe Dr. pronounced\rVery regard\r\tTruly yours,\r\tJ. H. Sullivan"; // <span class="pl-4">Monday </span><span class="pl-4">May 9</span><p> Mrs. Jervis</p><p>Dear Madam,
  // </p><p>The Dr. pronounced</p><p>Very regard</p><p><span class="pl-4">Truly yours,
  // </span></p><p><span span class="pl-4">J. H. Sullivan</span></p>

  let testTextToArray = testText.split("");
  let paragraphOpen = false;
  let spanOpen = false;
  let inputArray = textToArray;

  for (let i = 0; i < inputArray.length; i++) {
    if (!spanOpen) {
      if (!paragraphOpen && inputArray[i] == "\t" && inputArray[i - 1] == "</span></p>") {
        paragraphOpen = true;
        spanOpen = true;
        inputArray[i] = '<p><span class="pl-4">';
      }

      if (inputArray[i] == "\t") {
        spanOpen = true;
        inputArray[i] = '<span class="pl-4">';
      }
    }

    if (spanOpen && !paragraphOpen) {
      if (testTextToArray[i] == "\r") {
        spanOpen = false;
        paragraphOpen = true;
        testTextToArray[i] = "</span><p>";
      }

      if (inputArray[i] == "\t") {
        inputArray[i] = '</span><span class="pl-4">';
      }
    }

    if (!paragraphOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "<p>";
      }
    }

    if (paragraphOpen && !spanOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "</p><p>";
      }

      if (inputArray[i] == "\t" && inputArray[i + 1] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "</p>";
      }
    }

    if (i == inputArray.length - 1) {
      if (paragraphOpen && spanOpen) {
        inputArray.push("</span></p>");
        paragraphOpen = false;
        spanOpen = false;
      }

      if (paragraphOpen) {
        inputArray.push("</p>");
        paragraphOpen = false;
      }

      if (spanOpen) {
        inputArray.push("</span>");
        spanOpen = false;
      }
    }

    if (spanOpen && paragraphOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = false;
        spanOpen = false;
        inputArray[i] = "</span></p>";
      }
    }
  }

  let outputText = inputArray.join("");
  console.log(inputArray.join(""));
  return {
    data: outputText
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charlescarrier/Dev/marylandLettersProject/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map