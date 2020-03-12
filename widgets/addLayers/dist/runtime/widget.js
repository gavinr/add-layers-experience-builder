define(["jimu-arcgis","jimu-core"], function(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./add-layers-experience-builder/widgets/addLayers/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./add-layers-experience-builder/widgets/addLayers/src/runtime/translations/default.ts":
/*!*********************************************************************************************!*\
  !*** ./add-layers-experience-builder/widgets/addLayers/src/runtime/translations/default.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    _widgetLabel: \"Add Layers\",\r\n    addLayer: \"Add Layer\",\r\n    featureServiceUrl: \"Feature Service URL\",\r\n    instructions: \"Copy/paste a FeatureService Layer URL here to add it to the map.\"\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZGQtbGF5ZXJzLWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL2FkZExheWVycy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FkZC1sYXllcnMtZXhwZXJpZW5jZS1idWlsZGVyL3dpZGdldHMvYWRkTGF5ZXJzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzP2NjNDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogXCJBZGQgTGF5ZXJzXCIsXHJcbiAgYWRkTGF5ZXI6IFwiQWRkIExheWVyXCIsXHJcbiAgZmVhdHVyZVNlcnZpY2VVcmw6IFwiRmVhdHVyZSBTZXJ2aWNlIFVSTFwiLFxyXG4gIGluc3RydWN0aW9uczpcclxuICAgIFwiQ29weS9wYXN0ZSBhIEZlYXR1cmVTZXJ2aWNlIExheWVyIFVSTCBoZXJlIHRvIGFkZCBpdCB0byB0aGUgbWFwLlwiXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./add-layers-experience-builder/widgets/addLayers/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./add-layers-experience-builder/widgets/addLayers/src/runtime/widget.tsx":
/*!********************************************************************************!*\
  !*** ./add-layers-experience-builder/widgets/addLayers/src/runtime/widget.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/** @jsx jsx */\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\r\n// import { TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'jimu-ui';\r\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./add-layers-experience-builder/widgets/addLayers/src/runtime/translations/default.ts\");\r\nvar Widget = /** @class */ (function (_super) {\r\n    __extends(Widget, _super);\r\n    function Widget() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.state = {\r\n            featureServiceUrlInput: \"\",\r\n            jimuMapView: null\r\n        };\r\n        // Every time the input box value changes, this function gets called.\r\n        // We set our component's state so we can use the value in the formSubmit function.\r\n        _this.handleFeatureServiceUrlInputChange = function (event) {\r\n            _this.setState({\r\n                featureServiceUrlInput: event.target.value\r\n            });\r\n        };\r\n        _this.formSubmit = function (evt) {\r\n            evt.preventDefault();\r\n            // Error cases\r\n            if (!_this.state.jimuMapView) {\r\n                // Data Source was not configured - we cannot do anything.\r\n                console.error(\"Please configure a Data Source with the widget.\");\r\n                return;\r\n            }\r\n            if (_this.state.featureServiceUrlInput == \"\") {\r\n                // Nothing was typed into the box!\r\n                alert(\"Please copy/paste in a FeatureService URL\");\r\n                return;\r\n            }\r\n            // Lazy-loading (Only load if needed) the ArcGIS API for JavaScript modules\r\n            // that we need - only once the \"Add Layer\" button is pressed.\r\n            jimu_arcgis_1.loadArcGISJSAPIModules([\r\n                \"esri/layers/FeatureLayer\",\r\n                \"esri/tasks/support/Query\",\r\n                \"esri/geometry/SpatialReference\"\r\n            ]).then(function (modules) {\r\n                _this.FeatureLayer = modules[0], _this.Query = modules[1], _this.SpatialReference = modules[2];\r\n                // First create the Feature Layer from the URL that is in the box.\r\n                var layer = new _this.FeatureLayer({\r\n                    url: _this.state.featureServiceUrlInput\r\n                });\r\n                // Add the layer to the map (accessed through the Experience Builder Data Source)\r\n                _this.state.jimuMapView.view.map.add(layer);\r\n                // After the layer is created, zoom to the layer's extent, if the setting is set for that.\r\n                layer.on(\"layerview-create\", function (event) {\r\n                    if (_this.props.config.hasOwnProperty(\"zoomToLayer\") &&\r\n                        _this.props.config.zoomToLayer === true) {\r\n                        var query = new _this.Query();\r\n                        query.where = \"1=1\";\r\n                        query.outSpatialReference = new _this.SpatialReference({\r\n                            wkid: 102100\r\n                        });\r\n                        layer.queryExtent(query).then(function (results) {\r\n                            _this.state.jimuMapView.view.extent = results.extent;\r\n                        });\r\n                    }\r\n                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another\r\n                    _this.setState({\r\n                        featureServiceUrlInput: \"\"\r\n                    });\r\n                });\r\n            });\r\n        };\r\n        return _this;\r\n    }\r\n    Widget.prototype.render = function () {\r\n        var _this = this;\r\n        var style = jimu_core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n      form > div {\\n        display: flex;\\n        justify-content: space-between;\\n        input {\\n          width: 100%;\\n        }\\n        button {\\n          min-width: 100px;\\n        }\\n      }\\n    \"], [\"\\n      form > div {\\n        display: flex;\\n        justify-content: space-between;\\n        input {\\n          width: 100%;\\n        }\\n        button {\\n          min-width: 100px;\\n        }\\n      }\\n    \"])));\r\n        return (jimu_core_1.jsx(\"div\", { className: \"widget-addLayers jimu-widget p-2\", css: style },\r\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\r\n                this.props.useMapWidgetIds &&\r\n                this.props.useMapWidgetIds.length === 1 && (jimu_core_1.jsx(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetIds: this.props.useMapWidgetIds, onActiveViewChange: function (jmv) {\r\n                    _this.setState({\r\n                        jimuMapView: jmv\r\n                    });\r\n                } })),\r\n            jimu_core_1.jsx(\"p\", null, default_1.default.instructions),\r\n            jimu_core_1.jsx(\"form\", { onSubmit: this.formSubmit },\r\n                jimu_core_1.jsx(\"div\", null,\r\n                    jimu_core_1.jsx(\"input\", { type: \"text\", placeholder: default_1.default.featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),\r\n                    jimu_core_1.jsx(\"button\", null, default_1.default.addLayer)))));\r\n    };\r\n    return Widget;\r\n}(jimu_core_1.BaseWidget));\r\nexports.default = Widget;\r\nvar templateObject_1;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZGQtbGF5ZXJzLWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL2FkZExheWVycy9zcmMvcnVudGltZS93aWRnZXQudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWRkLWxheWVycy1leHBlcmllbmNlLWJ1aWxkZXIvd2lkZ2V0cy9hZGRMYXllcnMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD8wYzlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIEFsbFdpZGdldFByb3BzLFxyXG4gIEJhc2VXaWRnZXQsXHJcbiAgY3NzLFxyXG4gIGpzeCxcclxuICBEYXRhU291cmNlQ29tcG9uZW50XHJcbn0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hcERhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZVR5cGVzLFxyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXHJcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXHJcbiAgSmltdU1hcFZpZXdcclxufSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBCdXR0b259IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBmZWF0dXJlU2VydmljZVVybElucHV0OiBzdHJpbmc7XHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBCYXNlV2lkZ2V0PFxyXG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuICBJU3RhdGVcclxuPiB7XHJcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxyXG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxyXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XHJcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IFwiXCIsXHJcbiAgICBqaW11TWFwVmlldzogbnVsbFxyXG4gIH07XHJcblxyXG4gIC8vIEV2ZXJ5IHRpbWUgdGhlIGlucHV0IGJveCB2YWx1ZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkLlxyXG4gIC8vIFdlIHNldCBvdXIgY29tcG9uZW50J3Mgc3RhdGUgc28gd2UgY2FuIHVzZSB0aGUgdmFsdWUgaW4gdGhlIGZvcm1TdWJtaXQgZnVuY3Rpb24uXHJcbiAgaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZvcm1TdWJtaXQgPSBldnQgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gRXJyb3IgY2FzZXNcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICAvLyBEYXRhIFNvdXJjZSB3YXMgbm90IGNvbmZpZ3VyZWQgLSB3ZSBjYW5ub3QgZG8gYW55dGhpbmcuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY29uZmlndXJlIGEgRGF0YSBTb3VyY2Ugd2l0aCB0aGUgd2lkZ2V0LlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCA9PSBcIlwiKSB7XHJcbiAgICAgIC8vIE5vdGhpbmcgd2FzIHR5cGVkIGludG8gdGhlIGJveCFcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgY29weS9wYXN0ZSBpbiBhIEZlYXR1cmVTZXJ2aWNlIFVSTFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExhenktbG9hZGluZyAoT25seSBsb2FkIGlmIG5lZWRlZCkgdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgbW9kdWxlc1xyXG4gICAgLy8gdGhhdCB3ZSBuZWVkIC0gb25seSBvbmNlIHRoZSBcIkFkZCBMYXllclwiIGJ1dHRvbiBpcyBwcmVzc2VkLlxyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIsXHJcbiAgICAgIFwiZXNyaS90YXNrcy9zdXBwb3J0L1F1ZXJ5XCIsXHJcbiAgICAgIFwiZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlXCJcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5RdWVyeSwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXM7XHJcblxyXG4gICAgICAvLyBGaXJzdCBjcmVhdGUgdGhlIEZlYXR1cmUgTGF5ZXIgZnJvbSB0aGUgVVJMIHRoYXQgaXMgaW4gdGhlIGJveC5cclxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgRGF0YSBTb3VyY2UpXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKTtcclxuXHJcbiAgICAgIC8vIEFmdGVyIHRoZSBsYXllciBpcyBjcmVhdGVkLCB6b29tIHRvIHRoZSBsYXllcidzIGV4dGVudCwgaWYgdGhlIHNldHRpbmcgaXMgc2V0IGZvciB0aGF0LlxyXG4gICAgICBsYXllci5vbihcImxheWVydmlldy1jcmVhdGVcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmhhc093blByb3BlcnR5KFwiem9vbVRvTGF5ZXJcIikgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub0xheWVyID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyB0aGlzLlF1ZXJ5KCk7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCI7XHJcbiAgICAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gbmV3IHRoaXMuU3BhdGlhbFJlZmVyZW5jZSh7XHJcbiAgICAgICAgICAgIHdraWQ6IDEwMjEwMFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsYXllci5xdWVyeUV4dGVudChxdWVyeSkudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudCA9IHJlc3VsdHMuZXh0ZW50O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIG9mIGFkZGluZyB0aGUgbGF5ZXIgaXMgY29tcGxldGUgLSByZW1vdmUgdGhlIGxheWVyIFVSTCBmcm9tIHRoZSBib3ggc28gd2UgY2FuIGFkZCBhbm90aGVyXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgIGZvcm0gPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5mb3JtU3VibWl0fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLmZlYXR1cmVTZXJ2aWNlVXJsfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbj57ZGVmYXVsdE1lc3NhZ2VzLmFkZExheWVyfTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQVVBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQThDQTtBQTVDQTtBQUFBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUtBO0FBQ0E7QUFBQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./add-layers-experience-builder/widgets/addLayers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })});;