define(["jimu-core","jimu-ui"],(function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=370)}({25:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.916 7l5.052 5.125c.31.315.31.825 0 1.14a.786.786 0 01-1.123 0L3.232 7.568a.814.814 0 010-1.138L8.845.736a.786.786 0 011.123 0c.31.314.31.824 0 1.139L4.916 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},3:function(e,r){e.exports=t},370:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),o=r(4),u=function(){function t(){this.index=1,this.id="controller-roll-list-previous",this.classes={}}return t.prototype.visible=function(t){var e=n.getAppStore().getState().widgetsState[t.layoutItem.widgetId];return e&&e.showArrow},t.prototype.disabled=function(t){var e=n.getAppStore().getState().widgetsState[t.layoutItem.widgetId];return e&&e.disablePrevious},t.prototype.getGroupId=function(){return null},t.prototype.getTitle=function(){var t=n.i18n.getIntl("_jimu");return t?t.formatMessage({id:"previous",defaultMessage:o.defaultMessages.previous}):"Previous"},t.prototype.getIcon=function(){return r(25)},t.prototype.onClick=function(t){var e=n.getAppStore().getState().widgetsState[t.layoutItem.widgetId];e&&e.onArrowClick&&e.onArrowClick(!0,!1)},t.prototype.getSettingPanel=function(t){return null},t}();e.default=u},4:function(t,r){t.exports=e}})}));