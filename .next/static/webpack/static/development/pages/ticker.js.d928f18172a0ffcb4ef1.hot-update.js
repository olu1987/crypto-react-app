webpackHotUpdate("static\\development\\pages\\ticker.js",{

/***/ "./pages/ticker.js":
/*!*************************!*\
  !*** ./pages/ticker.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_sdks_ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sdks/ticker */ "./lib/sdks/ticker/index.js");
var _jsxFileName = "C:\\Users\\Olu\\Desktop\\crypto-react-app\\pages\\ticker.js";



var Ticker = function Ticker() {
  _lib_sdks_ticker__WEBPACK_IMPORTED_MODULE_1__["default"].getTickerList();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello Ticker");
};

/* harmony default export */ __webpack_exports__["default"] = (Ticker);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ticker")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=ticker.js.d928f18172a0ffcb4ef1.hot-update.js.map