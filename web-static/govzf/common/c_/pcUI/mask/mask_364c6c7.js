define("common:components/pcUI/mask/mask.js",function(o,t,s){!function(t){"object"==typeof s&&"object"==typeof s.exports?s.exports=t(o("common:components/jquery/jquery.js"),o("common:components/pcUI/class/class.js")):t(window.jQuery,window.jQuery.klass)}(function(o,t){var s=document;return t.$factory("mask",{initialize:function(t){this.options=o.extend({autoOpen:!0,dom:s.body,color:"#000",opacity:.6},t||{}),this.init()},init:function(){var t=this,i=t.container=o(t.options.dom);i[0]!=s.body&&!/fixed|absolute/.test(i.css("position"))&&i.css("position","relative"),t.mask=o('<div class="ui2-mask">').hide().css({backgroundColor:t.options.color,opacity:t.options.opacity}).appendTo(t.container),t.o2s(window,"resize",function(){t.resetPosition()}),t.options.autoOpen&&t.open()},open:function(){this.resetPosition(),this.mask.show(),this.trigger("open")},close:function(){this.mask.hide(),this.trigger("close")},resetPosition:function(){var o=this.container[0];this.mask.css({width:o.scrollWidth||s.documentElement.scrollWidth,height:o.scrollHeight||s.documentElement.scrollHeight})},destroy:function(){this.mask.remove(),this.mask=null,this.ofs(window,"resize")}})})});