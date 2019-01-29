define("web:static/member/user/server/company/company.js",function(a){"use strict";a.async(["common:components/jquery/jquery.js","common:components/pcUI/pager/pager.js","common:components/ui/template/template.js"],function(a,n,i){var e={listTPL:'<li class="clearfix">\r\n    <div><%=list.companyName %></div>\r\n    <div><%=list.contactNumber %></div>\r\n    <div><%=list.companyAddress %></div>\r\n    <div>已备案</div>\r\n    <div>\r\n        <a href="/pc/agent/detail?id=<%=list.id%>&&page=1">人员列表</a>\r\n        <a href="/pc/company/detail?id=<%=list.id%>">企业详情</a>\r\n    </div>\r\n</li>',config:{index:1,currentPage:1,totalPage:"",pageSize:10},init:function(){this.initAjax(),this.tab_change(),this.searchData()},tab_change:function(){var n=this;a(".nav-child").on("click",function(){n.config.index=parseInt(a(this).index()+1),window.configPager.page=1,a(this).addClass("selected").siblings().removeClass("selected"),a(".company").hide().eq(a(this).index()).show(),n.initAjax()})},initAjax:function(n){var e=this,t=e.config.index,o={pageNo:window.configPager.page,pageSize:10,companyType:t};"undefined"!=typeof n&&(o.companyName=n),a.ajax({url:window.configPager.companyListUrl,type:"get",data:o,dataType:"json",success:function(n){if(console.log(n),n.success){e.config.totalPage=Math.ceil(n.data.total/10),e.pagination(),e.config.totalPage>1?a(".pagenation").show():a(".pagenation").hide();var o=n.data.list,c=[];if(0===o.length)a(".num1").html(0),a(".num2").html(0),a(".company-container").html("");else{for(var s=0;s<o.length;s++){var r=o[s];c.push(i.parse(e.listTPL,{list:r}))}1==t?(a(".num1").html(n.data.total),a("#company-housing-list").html(c.join(""))):(a(".num2").html(n.data.total),a("#company-middle-list").html(c.join("")))}}else console.log(n.code)}})},searchData:function(){var n=this;a("#middle-btn").on("click",function(){var i=a("#company-middle-search").val();""==i?(window.configPager.page=1,n.initAjax("")):(window.configPager.page=1,n.initAjax(i))}),a("#housing-btn").on("click",function(){var i=a("#company-housing-search").val();""==i?(window.configPager.page=1,n.initAjax("")):(window.configPager.page=1,n.initAjax(i))})},pagination:function(){{var n=this;a(".company-list").find(".pagenation").eq(parseInt(n.config.index-1)).pager({pageTotal:Number(n.config.totalPage),currentPage:window.configPager.page||1,perPage:5,className:"pagination-box",currentClassName:"current-pager"}).on("pager:switch",function(n,i){console.log(i),a(".ui2-pager-current").html();var e=location.search,t=/page\=[^&]+/,o=null;e&&t.test(e)&&(o=location.pathname+e.replace(t,"page="+i)),e||(o=location.pathname+"?page="+i),e&&!t.test(e)&&(o=location.href+"&page="+i),location.href=o})}}};e.init()})});