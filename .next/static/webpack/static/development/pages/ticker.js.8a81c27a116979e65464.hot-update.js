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





function get(currencyPair) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://cors-anywhere.herokuapp.com/'.concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["default"].CRPTO_API_URL, "/ticker/").concat(currencyPair)).then(function (payload) {
    return _ticker_factory__WEBPACK_IMPORTED_MODULE_2__["default"].createTickerFromPayload(payload.data);
  }).catch(function (e) {
    return console.log(e);
  });
}

function getTickerList() {
  return get(_constants_currency_pairs__WEBPACK_IMPORTED_MODULE_3__["default"][0].value).then(function (data) {
    return data;
  }); //return currencyPairsList.map(el => ({ name: el.name, data: get(el.value).then(data => data) }));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  getTickerList: getTickerList
});

/***/ })

})
//# sourceMappingURL=ticker.js.8a81c27a116979e65464.hot-update.js.map