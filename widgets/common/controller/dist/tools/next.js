define(["jimu-core","jimu-ui"],(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=371)}({3:function(e,n){e.exports=t},371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n(4),u=function(){function t(){this.index=2,this.id="controller-roll-list-next",this.classes={}}return t.prototype.visible=function(t){var e=r.getAppStore().getState().widgetsState[t.layoutItem.widgetId];return e&&e.showArrow},t.prototype.disabled=function(t){var e=r.getAppStore().getState().widgetsState[t.layoutItem.widgetId];return e&&e.disableNext},t.prototype.getGroupId=function(){return null},t.prototype.getTitle=function(){var t=r.i18n.getIntl("_jimu");return t?t.formatMessage({id:"next",defaultMessage:o.defaultMessages.next}):"Next"},t.prototype.getIcon=function(){return n(39)},t.prototype.onClick=function(t){var e=r.getAppStore().getState().widgetsState[t.layoutItem.widgetId];e&&e.onArrowClick&&e.onArrowClick(!1,!1)},t.prototype.getSettingPanel=function(t){return null},t}();e.default=u},39:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M8.784 7L3.732 1.875a.814.814 0 010-1.14.786.786 0 011.123 0l5.613 5.696c.31.314.31.824 0 1.138l-5.613 5.695a.786.786 0 01-1.123 0 .814.814 0 010-1.139L8.784 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},4:function(t,n){t.exports=e}})}));