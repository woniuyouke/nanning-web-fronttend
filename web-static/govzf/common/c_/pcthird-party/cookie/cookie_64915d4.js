!function(e,o){"object"==typeof module?module.exports=o(require("common:components/ui/zepto/zepto.js")):"function"==typeof define?define("common:components/pcthird-party/cookie/cookie.js",function(e){return o(e("common:components/ui/zepto/zepto.js"))}):(e.jQuery.featherUi=e.jQuery.featherUi||{},e.jQuery.featherUi.Cookie=o(e.jQuery||e.$))}(window,function(e){function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return decodeURIComponent(e.replace(n," "))}catch(o){}}var n=/\+/g;return{config:{},set:function(o,n,t){if(t=e.extend({},this.config,t),"number"==typeof t.expires){var i=t.expires,r=t.expires=new Date;r.setTime(+r+864e5*i)}return document.cookie=[encodeURIComponent(o),"=",encodeURIComponent(n),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")},get:function(e,n){for(var t=e?void 0:{},i=document.cookie?document.cookie.split("; "):[],r=0,c=i.length;c>r;r++){var p=i[r].split("="),u=decodeURIComponent(p.shift()),s=p.join("=");if(e&&e===u){t=o(s);break}e||void 0===(s=o(s))||(t[u]=s)}return t||n},remove:function(o,n){this.set(o,"",e.extend({},n,{expires:-1}))}}});