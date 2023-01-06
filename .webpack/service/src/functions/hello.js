/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/functions/hello.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
async function handler() {
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: 'Hello word Serverless',
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
exports.handler = handler;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=hello.js.map