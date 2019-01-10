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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






function get(currencyPair) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["default"].ALLOW_CORS_URL).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["default"].CRPTO_API_URL, "/ticker/").concat(currencyPair)).then(function (payload) {
    return _ticker_factory__WEBPACK_IMPORTED_MODULE_2__["default"].createTickerFromPayload(payload.data);
  }).catch(function (e) {
    return console.log(e);
  });
}

function getTickerList() {
  var tickers = [];
  return _constants_currency_pairs__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, index) {
    return get(el.value).then(function (data) {
      tickers = [].concat(_toConsumableArray(tickers), [{
        name: el.name,
        data: data
      }]);

      if (index + 1 === _constants_currency_pairs__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
        return tickers;
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  getTickerList: getTickerList
});

/***/ })

})
//# sourceMappingURL=ticker.js.f771a866e84e8632ea33.hot-update.js.map