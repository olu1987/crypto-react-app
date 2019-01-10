webpackHotUpdate("static\\development\\pages\\ticker.js",{

/***/ "./lib/sdks/ticker/index.js":
/*!**********************************!*\
  !*** ./lib/sdks/ticker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

/***/ })

})
//# sourceMappingURL=ticker.js.5c7da5c7ed34d8284f4c.hot-update.js.map