define("common:components/vux/components/marquee-item/index.min.js",function(e,t,n){!function(e,r){"object"==typeof t&&"object"==typeof n?n.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.vuxMarqueeItem=r():e.vuxMarqueeItem=r()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),i=n(1),u=i(r.a,o.a,!1,null,null,null);t.default=u.exports},function(e){e.exports=function(e,t,n,r,o,i){var u,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=f):r&&(f=r),f){var d=a.functional,p=d?a.render:a.beforeCreate;d?(a._injectStyles=f,a.render=function(e,t){return f.call(t),p(e,t)}):a.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:s,options:a}}},function(e,t){"use strict";t.a={name:"marquee-item",mounted:function(){var e=this;this.$nextTick(function(){e.$parent.destroy(),e.$parent.init(),e.$parent.start()})}}},function(e,t){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",[e._t("default")],2)},r=[],o={render:n,staticRenderFns:r};t.a=o}])})});