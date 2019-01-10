webpackHotUpdate("static\\development\\pages\\ticker.js",{

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

/***/ })

})
//# sourceMappingURL=ticker.js.ee1f21975c23ec07723b.hot-update.js.map