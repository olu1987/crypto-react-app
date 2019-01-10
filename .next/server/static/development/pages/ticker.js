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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/constants/api/index.js":
/*!************************************!*\
  !*** ./lib/constants/api/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  CRPTO_API_URL: 'https://www.bitstamp.net/api/v2/',
  ALLOW_CORS_URL: 'https://cors-anywhere.herokuapp.com/'
});

/***/ }),

/***/ "./lib/constants/currency-pairs/index.js":
/*!***********************************************!*\
  !*** ./lib/constants/currency-pairs/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'BTC-USD',
  value: 'btcusd'
}, {
  name: 'BTC-EUR',
  value: 'btceur'
}, {
  name: 'EUR-USD',
  value: 'eurusd'
}, {
  name: 'XRP-USD',
  value: 'xrpusd'
}, {
  name: 'XRP-EUR',
  value: 'xrpeur'
}, {
  name: 'XRP-BTC',
  value: 'xrpbtc'
}, {
  name: 'LTC-USD',
  value: 'ltcusd'
}, {
  name: 'LTC-EUR',
  value: 'ltceur'
}, {
  name: 'LTC-BTC',
  value: 'ltcbtc'
}, {
  name: 'ETH-USD',
  value: 'ethusd'
}, {
  name: 'ETH-EUR',
  value: 'etheur'
}, {
  name: 'ETH-BTC',
  value: 'ethbtc'
}, {
  name: 'BCH-USD',
  value: 'bchusd'
}, {
  name: 'BCH-EUR',
  value: 'bcheur'
}, {
  name: 'BCH-BTC',
  value: 'bchbtc'
}]);

/***/ }),

/***/ "./lib/sdks/ticker/index.js":
/*!**********************************!*\
  !*** ./lib/sdks/ticker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/api */ "./lib/constants/api/index.js");
/* harmony import */ var _ticker_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticker-factory */ "./lib/sdks/ticker/ticker-factory.js");
/* harmony import */ var _constants_currency_pairs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/currency-pairs */ "./lib/constants/currency-pairs/index.js");





var composePromise = function composePromise() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (initialValue) {
    return functions.reduceRight(function (acc, fn) {
      return Promise.resolve(acc).then(fn);
    }, initialValue);
  };
};

function get(currencyPair) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["default"].ALLOW_CORS_URL).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["default"].CRPTO_API_URL, "/ticker/").concat(currencyPair)).then(function (payload) {
    return _ticker_factory__WEBPACK_IMPORTED_MODULE_2__["default"].createTickerFromPayload(payload.data);
  }).catch(function (e) {
    return console.log(e);
  });
}

function getList() {
  return Promise.all(_constants_currency_pairs__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (pair) {
    return get(pair.value);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  getList: getList
});

/***/ }),

/***/ "./lib/sdks/ticker/models/ticker.js":
/*!******************************************!*\
  !*** ./lib/sdks/ticker/models/ticker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ticker; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ticker = function Ticker(_ref) {
  var high = _ref.high,
      last = _ref.last,
      timestamp = _ref.timestamp,
      bid = _ref.bid,
      vwap = _ref.vwap,
      volume = _ref.volume,
      low = _ref.low,
      ask = _ref.ask,
      open = _ref.open;

  _classCallCheck(this, Ticker);

  this.high = high;
  this.last = last;
  this.timestamp = timestamp;
  this.bid = bid;
  this.vwap = vwap;
  this.volume = volume;
  this.low = low;
  this.ask = ask;
  this.open = open;
};



/***/ }),

/***/ "./lib/sdks/ticker/ticker-factory.js":
/*!*******************************************!*\
  !*** ./lib/sdks/ticker/ticker-factory.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/ticker */ "./lib/sdks/ticker/models/ticker.js");


function createTickerFromPayload(_ref) {
  var ask = _ref.ask,
      high = _ref.high,
      last = _ref.last,
      timestamp = _ref.timestamp,
      bid = _ref.bid,
      vwap = _ref.vwap,
      volume = _ref.volume,
      low = _ref.low,
      open = _ref.open;
  return new _models_ticker__WEBPACK_IMPORTED_MODULE_0__["default"]({
    ask: ask,
    high: high,
    last: last,
    timestamp: timestamp,
    bid: bid,
    vwap: vwap,
    volume: volume,
    low: low,
    open: open
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  createTickerFromPayload: createTickerFromPayload
});

/***/ }),

/***/ "./pages/ticker.js":
/*!*************************!*\
  !*** ./pages/ticker.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_sdks_ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sdks/ticker */ "./lib/sdks/ticker/index.js");
var _jsxFileName = "C:\\Users\\Olu\\Desktop\\crypto-react-app\\pages\\ticker.js";



var Ticker = function Ticker() {
  _lib_sdks_ticker__WEBPACK_IMPORTED_MODULE_1__["default"].getList().then(function (data) {
    console.log(data);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Hello Ticker");
};

/* harmony default export */ __webpack_exports__["default"] = (Ticker);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/ticker.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/ticker.js */"./pages/ticker.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=ticker.js.map