define("common:components/vux/components/trim/index.min.js",function(e,t,n){!function(e,o){"object"==typeof t&&"object"==typeof n?n.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof t?t.vuxtrim=o():e.vuxtrim=o()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e){"use strict";e.exports=function(e){var t=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");return e.replace(t,"")}}])})});