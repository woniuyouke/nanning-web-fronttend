define("common:components/pcUI/cookie/cookie.js",function(e,o,n){!function(o){"object"==typeof n&&"object"==typeof n.exports?n.exports=o(e("common:components/jquery/jquery.js")):window.jQuery.cookie=o(window.jQuery)}(function(e){function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return decodeURIComponent(e.replace(n," "))}catch(o){}}var n=/\+/g;return e.cookie={config:{},set:function(o,n,t){if(t=e.extend({},this.config,t),"number"==typeof t.expires){var i=t.expires,c=t.expires=new Date;c.setTime(+c+864e5*i)}return document.cookie=[encodeURIComponent(o),"=",encodeURIComponent(n),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")},get:function(e,n){for(var t=e?void 0:{},i=document.cookie?document.cookie.split("; "):[],c=0,r=i.length;r>c;c++){var p=i[c].split("="),s=decodeURIComponent(p.shift()),u=p.join("=");if(e&&e===s){t=o(u);break}e||void 0===(u=o(u))||(t[s]=u)}return t||n},remove:function(o,n){this.set(o,"",e.extend({},n,{expires:-1}))}}})});