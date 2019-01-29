define("common:components/pcUI/pager/pager.js",function(t,e,a){!function(e){"object"==typeof a&&"object"==typeof a.exports?a.exports=e(t("common:components/jquery/jquery.js"),t("common:components/pcUI/class/class.js")):e(window.jQuery,window.jQuery.klass)}(function(t,e){return e.$factory("pager",{initialize:function(e){this.options=t.extend({dom:null,pageTotal:0,perPage:10,url:"",showFirst:!0,showLast:!0,currentPage:1,currentPageClassName:"ui2-pager-current",className:"",pageClassName:""},e||{}),this.init()},init:function(){var e=this,a=e.options;e.container=t('<ul class="ui2-pager">').addClass(a.className),e.dom=t(a.dom).empty().append(e.container),e.index=parseInt(a.currentPage),e.createPage(),e.initEvent()},initEvent:function(){var e=this;this.options.dom&&this.options.dom.on&&this.options.dom.on("pager:destroy",function(){e.container&&e.destroy()}),e.container.delegate("a","click",function(){e.to(t(this).attr("data-page"))})},to:function(t){var e=this,a=e.options;e.index=t?parseInt(1>t?1:t>a.pageTotal?a.pageTotal:t):e.index,e.createPage(),e.trigger("switch",e.index)},createPage:function(){var e=this,a=e.getPageResult(),n=e.options;e.container.empty(),t.each(a,function(a,i){var o,s=i[0],r=i[1];o=r?r!=e.index?t('<li><a href="'+(n.url?n.url+r:"javascript:void(0);")+'" data-page="'+r+'">'+s+"</a></li>").addClass(i[2]):t("<li>"+r+"</li>").addClass(n.currentPageClassName):t("<li>"+s+"</li>").addClass("ui2-pager-point"),o.addClass(n.pageClassName).appendTo(e.container)})},getPageResult:function(){var t=this,e=t.options,a=parseInt(e.pageTotal),n=e.perPage,i=this.index,o=0,s=0,r=Math.ceil(n/2),p=parseInt(n/2);n>a?(o=1,s=a):r>=i?(o=1,s=n):i>r&&(a>=i+r?(o=i-r+1,s=i+p):(o=a-n+1,s=a));var c=[];i>1&&c.push([e.previous||"&lt;",i-1,"ui2-pager-previous"]),e.showFirst&&(o>2?(c.push(["1",1]),c.push(["&middot;&middot;&middot;"])):2==o&&c.push(["1",1]));for(var u=o;s>=u;)c.push([u,u++]);return e.showLast&&(a-1>s?(c.push(["&middot;&middot;&middot;"]),c.push([a,a])):s==a-1&&c.push([a,a])),a>i&&c.push([e.next||"&gt;",i+1,"ui2-pager-next"]),c},destroy:function(){this.container.remove(),this.container=null,this.dom=null}})})});