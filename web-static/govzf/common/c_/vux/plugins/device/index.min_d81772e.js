define("common:components/vux/plugins/device/index.min.js",function(e,t,i){!function(e,n){"object"==typeof t&&"object"==typeof i?i.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof t?t.vuxDevicePlugin=n():e.vuxDevicePlugin=n()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=navigator.userAgent,n=/(Android);?[\s\/]+([\d.]+)?/.test(i),o=/(iPad).*OS\s([\d_]+)/.test(i),r=/(iPod)(.*OS\s([\d_]+))?/.test(i),s=!o&&/(iPhone\sOS)\s([\d_]+)/.test(i),c=/micromessenger/i.test(i),d=/alipayclient/i.test(i),u=function(e){e.$device&&e.device||(e.$device=e.device={isAndroid:n,isIpad:o,isIpod:r,isIphone:s,isWechat:c,isAlipay:d}),e.mixin({created:function(){this.$device={isAndroid:n,isIpad:o,isIpod:r,isIphone:s,isWechat:c,isAlipay:d}}})};t.default=u}])})});