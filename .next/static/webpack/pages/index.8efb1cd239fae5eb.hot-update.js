"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _certification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certification */ \"./pages/certification.jsx\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./pages/contact.jsx\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ \"./pages/projects.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var pro = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), activeH = ref[0], setActiveH = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var observer = new IntersectionObserver(function(entries) {\n            var entry = entries[0];\n            console.log(\"entry\", entry);\n            setActiveH(\"p\");\n        });\n        setTimeout(function() {\n            observer.observe(pro.current);\n        }, 2000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sebastian Pavel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Sebastian Pavel personal portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/logo.webp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-2 scroll-smooth\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        activeH: activeH,\n                        pro: pro\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_certification__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        activeH: activeH\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        activeH: activeH\n                    }, void 0, false, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zerka/Desktop/projects/pages/index.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Vs4nhJyGXo2NPfMizHL5rQ/hqN8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBQzlCO0FBQ0U7QUFDYTtBQUNaO0FBQ0U7QUFDdUI7QUFFMUMsU0FBU1UsSUFBSSxHQUFHOztJQUM3QixJQUFNQyxHQUFHLEdBQUdSLDZDQUFNLEVBQUU7SUFDcEIsSUFBOEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkNVLE9BQU8sR0FBZ0JWLEdBQVksR0FBNUIsRUFBRVcsVUFBVSxHQUFJWCxHQUFZLEdBQWhCO0lBQzFCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNYSxRQUFRLEdBQUcsSUFBSUMsb0JBQW9CLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3JELElBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRixLQUFLLENBQUMsQ0FBQztZQUM1QkosVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCLENBQUM7UUFDRk8sVUFBVSxDQUFDLFdBQU07WUFDZk4sUUFBUSxDQUFDTyxPQUFPLENBQUNWLEdBQUcsQ0FBQ1csT0FBTyxDQUFDLENBQUM7U0FDL0IsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsT0FBTzs7MEJBQ3BCLDhEQUFDcEIsa0RBQUk7O2tDQUNILDhEQUFDcUIsT0FBSztrQ0FBQyxpQkFBZTs7Ozs7NEJBQVE7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLG9DQUFvQzs7Ozs7NEJBQUc7a0NBQ3hFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLFlBQVk7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2hDOzBCQUNQLDhEQUFDUixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUJBQW1COztrQ0FDaEMsOERBQUNoQixpREFBUTt3QkFBQ0ksT0FBTyxFQUFFQSxPQUFPO3dCQUFFRCxHQUFHLEVBQUVBLEdBQUc7Ozs7OzRCQUFJO2tDQUN4Qyw4REFBQ0wsc0RBQWE7d0JBQUNNLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NEJBQUk7a0NBQ25DLDhEQUFDTCxnREFBTzt3QkFBQ0ssT0FBTyxFQUFFQSxPQUFPOzs7Ozs0QkFBSTs7Ozs7O29CQUN6Qjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBM0J1QkYsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IENlcnRpZmljYXRpb24gZnJvbSBcIi4vY2VydGlmaWNhdGlvblwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVCb3JkZXJWZXJ0aWNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBwcm8gPSB1c2VSZWYoKTtcbiAgY29uc3QgW2FjdGl2ZUgsIHNldEFjdGl2ZUhdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1swXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW50cnlcIiwgZW50cnkpO1xuICAgICAgc2V0QWN0aXZlSChcInBcIik7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHByby5jdXJyZW50KTtcbiAgICB9LCAyMDAwKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMjBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2ViYXN0aWFuIFBhdmVsPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNlYmFzdGlhbiBQYXZlbCBwZXJzb25hbCBwb3J0Zm9saW9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLndlYnBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgc2Nyb2xsLXNtb290aFwiPlxuICAgICAgICA8UHJvamVjdHMgYWN0aXZlSD17YWN0aXZlSH0gcHJvPXtwcm99IC8+XG4gICAgICAgIDxDZXJ0aWZpY2F0aW9uIGFjdGl2ZUg9e2FjdGl2ZUh9IC8+XG4gICAgICAgIDxDb250YWN0IGFjdGl2ZUg9e2FjdGl2ZUh9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSGVhZCIsIkltYWdlIiwiQ2VydGlmaWNhdGlvbiIsIkNvbnRhY3QiLCJQcm9qZWN0cyIsIkFpT3V0bGluZUJvcmRlclZlcnRpY2xlIiwiSG9tZSIsInBybyIsImFjdGl2ZUgiLCJzZXRBY3RpdmVIIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZSIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});