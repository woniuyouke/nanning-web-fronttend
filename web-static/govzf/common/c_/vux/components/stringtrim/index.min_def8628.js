define("common:components/vux/components/stringtrim/index.min.js",function(n,t,e){!function(n,r){"object"==typeof t&&"object"==typeof e?e.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.vuxstringTrim=r():n.vuxstringTrim=r()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n){"use strict";n.exports=function(n){var t=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");return n.replace(t,"")}}])})});