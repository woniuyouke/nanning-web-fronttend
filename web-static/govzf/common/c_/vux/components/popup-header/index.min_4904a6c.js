define("common:components/vux/components/popup-header/index.min.js",function(e,t,n){!function(e,o){"object"==typeof t&&"object"==typeof n?n.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof t?t.vuxPopupHeader=o():e.vuxPopupHeader=o()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(){n(1)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(4),s=n(2),u=o,c=s(r.a,i.a,!1,u,null,null);t.default=c.exports},function(){},function(e){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,u=e.default);var a="function"==typeof u?u.options:u;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),r&&(a._scopeId=r);var p;if(i?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=p):o&&(p=o),p){var f=a.functional,d=f?a.render:a.beforeCreate;f?(a._injectStyles=p,a.render=function(e,t){return p.call(t),d(e,t)}):a.beforeCreate=d?[].concat(d,p):[p]}return{esModule:s,exports:u,options:a}}},function(e,t){"use strict";t.a={name:"popup-header",props:{leftText:String,rightText:String,title:String,showBottomBorder:{type:Boolean,"default":!0}}}},function(e,t){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-popup-header","class":e.showBottomBorder?"vux-1px-b":""},[n("div",{staticClass:"vux-popup-header-left",on:{click:function(){e.$emit("on-click-left")}}},[e._t("left-text",[e._v(e._s(e.leftText))])],2),e._v(" "),n("div",{staticClass:"vux-popup-header-title"},[e._t("title",[e._v(e._s(e.title))])],2),e._v(" "),n("div",{staticClass:"vux-popup-header-right",on:{click:function(){e.$emit("on-click-right")}}},[e._t("right-text",[e._v(e._s(e.rightText))])],2)])},o=[],r={render:n,staticRenderFns:o};t.a=r}])})});