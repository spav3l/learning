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

/***/ "./pages/certification.jsx":
/*!*********************************!*\
  !*** ./pages/certification.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Certification; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_functionStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/functionStore */ \"./store/functionStore.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Certification(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), certificat = ref[0], setCertificat = ref[1];\n    var certs = (0,_store_functionStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().certs;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isHover = ref1[0], setIsHover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCertificat(certs);\n        console.log(certs);\n    }, [\n        certs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-4 md:px-4\",\n        id: \"certs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(props.activeCer ? \"bg-red-500\" : null, \" text-2xl text-white  font-semibold my-2\"),\n                children: \"Certification\"\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2\",\n                children: certificat.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseOver: function() {\n                            return setIsHover(x === null || x === void 0 ? void 0 : x._id);\n                        },\n                        onMouseOut: function() {\n                            return setIsHover(\"\");\n                        },\n                        className: \"\".concat(isHover !== \"\" && isHover !== (x === null || x === void 0 ? void 0 : x._id) ? \"bg opacity-50 scale-90\" : \"bg-[#202022] bg-opacity-100 \", \" p-2 ease-in-out duration-300 cursor-default select-none\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-semibold\",\n                                        children: x === null || x === void 0 ? void 0 : x.provider\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[.8rem]\",\n                                        children: x === null || x === void 0 ? void 0 : x.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[3rem] flex items-center gap-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineArrowRight, {\n                                        className: \"text-orange-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl\",\n                                        children: x === null || x === void 0 ? void 0 : x.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiCertification, {\n                                        className: \"text-green-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\",\n                                        children: x === null || x === void 0 ? void 0 : x.certId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: x === null || x === void 0 ? void 0 : x.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center gap-2 opacity-70 hover:opacity-100 ease-in-out duration-300\",\n                                        children: [\n                                            \"See it \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiLinkExternal, {}, void 0, false, {\n                                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 26\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, x._id, true, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zerka/Desktop/projects/pages/certification.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Certification, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Certification;\nvar _c;\n$RefreshReg$(_c, \"Certification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNVLEdBQUM7d0NBQUNWLFNBQVMsRUFBQyxFQUFFO2tEQUFFSSxDQUFDLGFBQURBLENBQUMsV0FBUSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLENBQUMsQ0FBRVMsTUFBTTs7Ozs7NkNBQUs7Ozs7OztxQ0FDM0I7MENBQ04sOERBQUNkLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxNQUFNOzBDQUNuQiw0RUFBQ2MsR0FBQztvQ0FBQ0MsSUFBSSxFQUFFWCxDQUFDLGFBQURBLENBQUMsV0FBTSxHQUFQQSxLQUFBQSxDQUFPLEdBQVBBLENBQUMsQ0FBRVksSUFBSTs4Q0FDZCw0RUFBQ0MsUUFBTTt3Q0FBQ2pCLFNBQVMsRUFBQywrRUFBK0U7OzRDQUFDLFNBQ3pGOzBEQUFBLDhEQUFDWCwwREFBYzs7OztxREFBRzs7Ozs7OzZDQUNsQjs7Ozs7eUNBQ1A7Ozs7O3FDQUNBOzt1QkFwQkRlLENBQUMsQ0FBQ0UsR0FBRzs7Ozs2QkFxQk47aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047Q0FDSDtHQXZEdUJoQixhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2VydGlmaWNhdGlvbi5qc3g/MDY4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZ1bmN0aW9uU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2Z1bmN0aW9uU3RvcmVcIjtcbmltcG9ydCB7IEJpQ2VydGlmaWNhdGlvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgQmlMaW5rRXh0ZXJuYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VydGlmaWNhdGlvbihwcm9wcykge1xuICBjb25zdCBbY2VydGlmaWNhdCwgc2V0Q2VydGlmaWNhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgY2VydHMgfSA9IGZ1bmN0aW9uU3RvcmUoKTtcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDZXJ0aWZpY2F0KGNlcnRzKTtcbiAgICBjb25zb2xlLmxvZyhjZXJ0cyk7XG4gIH0sIFtjZXJ0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS00IG1kOnB4LTRcIiBpZD1cImNlcnRzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgcHJvcHMuYWN0aXZlQ2VyID8gXCJiZy1yZWQtNTAwXCIgOiBudWxsXG4gICAgICAgIH0gdGV4dC0yeGwgdGV4dC13aGl0ZSAgZm9udC1zZW1pYm9sZCBteS0yYH1cbiAgICAgID5cbiAgICAgICAgQ2VydGlmaWNhdGlvblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAge2NlcnRpZmljYXQubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldElzSG92ZXIoeD8uX2lkKX1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldElzSG92ZXIoXCJcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBpc0hvdmVyICE9PSBcIlwiICYmIGlzSG92ZXIgIT09IHg/Ll9pZFxuICAgICAgICAgICAgICAgID8gXCJiZyBvcGFjaXR5LTUwIHNjYWxlLTkwXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctWyMyMDIwMjJdIGJnLW9wYWNpdHktMTAwIFwiXG4gICAgICAgICAgICB9IHAtMiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmVgfVxuICAgICAgICAgICAga2V5PXt4Ll9pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt4Py5wcm92aWRlcn08L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsuOHJlbV1cIj57eD8uZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bM3JlbV0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPnt4Py5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEJpQ2VydGlmaWNhdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnt4Py5jZXJ0SWR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17eD8ubGlua30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBvcGFjaXR5LTcwIGhvdmVyOm9wYWNpdHktMTAwIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgU2VlIGl0IDxCaUxpbmtFeHRlcm5hbCAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZnVuY3Rpb25TdG9yZSIsIkJpQ2VydGlmaWNhdGlvbiIsIkFpT3V0bGluZUFycm93UmlnaHQiLCJCaUxpbmtFeHRlcm5hbCIsIkNlcnRpZmljYXRpb24iLCJwcm9wcyIsImNlcnRpZmljYXQiLCJzZXRDZXJ0aWZpY2F0IiwiY2VydHMiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImFjdGl2ZUNlciIsIm1hcCIsIngiLCJvbk1vdXNlT3ZlciIsIl9pZCIsIm9uTW91c2VPdXQiLCJoMSIsInByb3ZpZGVyIiwicCIsImRhdGUiLCJuYW1lIiwiY2VydElkIiwiYSIsImhyZWYiLCJsaW5rIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/certification.jsx\n"));

/***/ })

});