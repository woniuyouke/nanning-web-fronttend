define("common:components/ui/authAjax/authAjax.js",function(o){function e(o){var e=o.success,r=o.error;n.ajax(n.extend(o,{success:function(o){e.call(this,o),o.success||"401"!=o.errorCode||location.replace("/h5/user/login?returnUrl="+encodeURIComponent(location.href))},error:function(o){r.call(this,o),401==o.status&&location.replace("/h5/user/login?returnUrl="+encodeURIComponent(location.href))}}))}var n=o("common:components/ui/zepto/zepto.js");return e});