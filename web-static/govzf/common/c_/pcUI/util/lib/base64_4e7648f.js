define("common:components/pcUI/util/lib/base64.js",function(t,o,e){!function(){function t(t){this.message=t}var o={},r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",o.btoa||(o.btoa=function(o){for(var e,n,a=String(o),i=0,c=r,f="";a.charAt(0|i)||(c="=",i%1);f+=c.charAt(63&e>>8-i%1*8)){if(n=a.charCodeAt(i+=.75),n>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");e=e<<8|n}return f}),o.atob||(o.atob=function(o){var e=String(o).replace(/=+$/,"");if(e.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,a,i=0,c=0,f="";a=e.charAt(c++);~a&&(n=i%4?64*n+a:a,i++%4)?f+=String.fromCharCode(255&n>>(-2*i&6)):0)a=r.indexOf(a);return f}),"object"==typeof e&&"object"==typeof e.exports?e.exports=o:(this.btoa=o.btoa,this.atob=o.atob)}()});