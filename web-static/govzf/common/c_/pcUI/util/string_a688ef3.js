define("common:components/pcUI/util/string.js",function(t,n,o){!function(n){"function"==typeof define&&define.amd?define(["./lib/crypto","./lib/base64","./object"],n):"object"==typeof o&&"object"==typeof o.exports?o.exports=n(t("common:components/pcUI/util/lib/crypto.js"),t("common:components/pcUI/util/lib/base64.js"),t("common:components/pcUI/util/object.js")):(this.util=this.util||{},this.util.string=n(CryptoJS,{atob:this.atob,btoa:this.btoa},this.object))}(function(t,n,o){return{toPad:function(t,n,o,e){var r="";for(t=String(t),n=String(n),o-=t.length;o-->0;)r+=n;return 1==e?r+t:t+r},pad:function(t,n,o,e){return this.toPad(t,n,o,e)},nl2br:function(t){return String(t||"").replace(/[\r\n]/g,"<br />")},empty:function(t){return/^\s*$/.test(t)},reverse:function(t){return String(t).split("").reverse().join("")},md5:function(n,o){return n=t.MD5(String(n)).toString(),o?this.md5(this.reverse(n)+o):n},base64Encode:function(t){return n.btoa(t)},base64Decode:function(t){return n.atob(t)},crypto:t,toJSONString:o.toJSONString,jsonEncode:o.toJSONString,parseJSON:o.parseJSON,jsonDecode:o.parseJSON}})});