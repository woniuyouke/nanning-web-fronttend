define("common:components/pcUI/getQueryString/getQueryString.js",function(n){function e(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(e);return null!=o?decodeURIComponent(o[2]):null}n("common:components/jquery/jquery.js");return e});