define("common:components/vux/components/group-title/index.min.js",function(e,t,n){!function(e,r){"object"==typeof t&&"object"==typeof n?n.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.vuxGroupTitle=r():e.vuxGroupTitle=r()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){n(1)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(4),u=n(2),s=r,c=u(o.a,i.a,!1,s,null,null);t.default=c.exports},function(){},function(e){e.exports=function(e,t,n,r,o,i){var u,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,s=e.default);var f="function"==typeof s?s.options:s;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var a;if(i?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=a):r&&(a=r),a){var d=f.functional,l=d?f.render:f.beforeCreate;d?(f._injectStyles=a,f.render=function(e,t){return a.call(t),l(e,t)}):f.beforeCreate=l?[].concat(l,a):[a]}return{esModule:u,exports:s,options:f}}},function(e,t){"use strict";t.a={name:"group-title"}},function(e,t){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"weui-cells__title"},[e._t("default")],2)},r=[],o={render:n,staticRenderFns:r};t.a=o}])})});