define("common:components/vux/components/view-box/index.min.js",function(e,t,n){!function(e,o){"object"==typeof t&&"object"==typeof n?n.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof t?t.vuxViewBox=o():e.vuxViewBox=o()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(){n(1)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(4),s=n(2),c=o,d=s(r.a,i.a,!1,c,null,null);t.default=d.exports},function(){},function(e){e.exports=function(e,t,n,o,r,i){var s,c=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,c=e.default);var u="function"==typeof c?c.options:c;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var a;if(i?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=a):o&&(a=o),a){var f=u.functional,l=f?u.render:u.beforeCreate;f?(u._injectStyles=a,u.render=function(e,t){return a.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,a):[a]}return{esModule:s,exports:c,options:u}}},function(e,t){"use strict";t.a={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},function(e,t){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),n("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},o=[],r={render:n,staticRenderFns:o};t.a=r}])})});