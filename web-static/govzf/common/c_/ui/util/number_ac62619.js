define("common:components/ui/util/number.js",function(e,n,r){var t=e("common:components/ui/util/string.js");r.exports={format:function(e){return e?t.reverse(t.reverse(e).replace(/\d{3}/g,"$&,")).replace(/^,/,""):0},toInt:function(e){return e=parseInt(e),isNaN(e)?0:e}}});