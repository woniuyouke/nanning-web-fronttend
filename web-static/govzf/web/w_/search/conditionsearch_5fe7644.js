define("web:widget/search/conditionsearch.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/suggestion/suggestion.js","common:components/pcUI/tips/tips.js","web:components/dropSelect/dropSelect.js"],function(e,t,a){function n(e){""==e&&(e=0);var t=/^[0-9]+$/;return console.log(e,t.test(e)),t.test(e)}var i={lock:!1,suggestionObj:null,flag:"",urlParamObj:{},init:function(){this.bindEvent(),this.selectPulin(),this.fuzzyCompany({})},bindEvent:function(){var t=this;if(/adress=([^&]+)/.test(location.search)){var n=location.search.match(/adress=([^&]+)/)&&location.search.match(/adress=([^&]+)/)[1],i=location.search.match(/destinationLng=([^&]+)/)&&location.search.match(/destinationLng=([^&]+)/)[1],r=location.search.match(/destinationLat=([^&]+)/)&&location.search.match(/destinationLat=([^&]+)/)[1];t.flag=decodeURIComponent(n),t.urlParamObj.destinationLng=i,t.urlParamObj.destinationLat=r,e("#J_input_company").val(decodeURIComponent(n))}/isMore=true/.test(location.search)&&(e("#J_more_confition").hide(),e("#J_search_inner").show()),e("#J_more_confition").click(function(){location.href=location.search?location.href+"&isMore=true":location.href+"?isMore=true"}),e("#J_search_inner").on("click","li",function(){var a=e(this);a.hasClass("search-every-title")||a.hasClass("jump-out")||a.hasClass("input-box")||a.hasClass("checkout-box")||a.hasClass("select-box")||t.togetherUrl(a)}),e(".checkout-box").click(function(){var a=[],n=null,i=null,r=e(this).attr("data-search"),i=r.match(/(^[a-z]+)/)&&r.match(/(^[a-z]+)/)[1],c=r.match(/(^[a-z]+)(\d+)/)&&r.match(/(^[a-z]+)(\d+)/)[2];e(this).toggleClass("selected"),e(this).parent().children(".selected").each(function(){var t=e(this).attr("data-search");t!=i+"0"&&t!=i&&a.push(t)}),n=a.join(""),n=n?n.replace(new RegExp("(?!^"+i+")"+i,"g"),"_"):i,n&&0==c&&(n=i+"0"),0==c||c||(n=i),t.togetherUrl(n)}),e("#J_search_inner").on("click",".confirm-btn",function(){t.togetherUrl(e(this),!0)}),e(".input-box input").focus(function(){e(this).siblings(".confirm-btn").show()}),e(".input-box input").blur(function(){var t=e(this).siblings("input").val();e(this).val()||t||e(this).siblings(".confirm-btn").hide()}),e(".every-selected-condition").click(function(){t.deleteParamUrl(e(this))}),e(".all-delete-condition").click(function(){var e=location.pathname.replace(/\/[\w\-]+$/,""),t=location.search.split("?")[1];location.href=e+(t&&"?"+t||"")}),e("#J_input_company").on("input",function(){var a=e(this);t.flag!==e.trim(a.val())&&(t.urlParamObj.destinationLng=null,t.urlParamObj.destinationLat=null),e.ajax({url:"//api.map.baidu.com/place/v2/search?ak=dCfxVQH8PlNRzQgP51QLOxCbgyNUbXVz&output=json",type:"get",dataType:"jsonp",data:{query:e.trim(a.val()),region:_config.location},success:function(t){e("#J_input_company").suggestion("instance").setData(t)}})}),e("#J_find_house").click(function(){var e=location.search;return(t.urlParamObj.destinationLng||t.urlParamObj.destinationLat||/destinationLat/.test(e)||/destinationLng/.test(e))&&(t.urlParamObj.destinationLng||t.urlParamObj.destinationLat)?t.urlParamObj.trafficTime||/trafficTime/.test(e)?t.urlParamObj.trafficType||/trafficType/.test(e)?void t.findHouse():(a.show("请选择交通方式"),!1):(a.show("请选择行程时间"),!1):(a.show("请选择公司地址"),!1)})},fuzzyCompany:function(t){var a=this;this.suggestionObj=e("#J_input_company").suggestion({dataField:"results",data:t,matchKwField:"name",format:function(e,t){return e.name.replace(t,"<span class='fuzzy-search-kw'>"+t+"</span>")}}).on("suggestion:select",function(e,t,n){a.urlParamObj.destinationLng=n.location.lng,a.urlParamObj.destinationLat=n.location.lat})},findHouse:function(){var t=this,a=t.urlParamObj,n=location.pathname.split("/"),i=n[4],r=location.search.split("?")[1];for(var c in a)if(/pe/.test(a[c]))i&&/^pe$/.test(a[c])?i=i.replace(/(^|-)pe[^-]+(-|$)/,function(e,t,a){return t&&a&&"-"||""}):(i&&/pe[^-]+/.test(i)&&(i=i.replace(/pe[^-]+/,a[c])),i||(i=a[c]),i&&!/pe[^-]+/.test(i)&&(i=i+"-"+a[c]));else{var o=new RegExp(""+c+"\\=([^&]+|$)");if(a[c])r&&o.test(r)&&(r=r.replace(o,c+"="+a[c])),r||(r=c+"="+a[c]),r&&!o.test(r)&&(r=r+"&"+c+"="+a[c]);else{var l=new RegExp("(&|^)"+c+"\\=[^&]+(&|$)");r=r.replace(l,function(e,t,a){return t&&a&&"&"||""})}}r=/adress/.test(r)?r.replace(/adress=([^&]+|$)/,"adress="+encodeURIComponent(e("#J_input_company").val())):r?r+"&adress="+encodeURIComponent(e("#J_input_company").val()):"adress="+encodeURIComponent(e("#J_input_company").val()),/page/.test(r)&&(r=r.replace(/(&|^)page=[^&]+(&|$)/,function(e,t,a){return t&&a&&"&"||""})),n[4]=i,location.href=(n.join("/")+(r&&"?"+r||"")).replace("/?","?")},togetherUrl:function(t,a){var i=location.pathname,r="string"!=typeof t?t.attr("data-search"):t,c=r.match(/([a-z]+)/)[1],o=i.split("/"),l=o[4],s=location.search.split("?")[1],u=new RegExp(""+c),p=new RegExp("^"+c+"$"),f=new RegExp(""+c+"\\w+(?=(\\-|$))"),d=0;"string"!=typeof t&&(t.hasClass("region")?t.addClass("current-region").siblings().removeClass("current-region"):t.addClass("current-selected").siblings().removeClass("current-selected"));var h=e(".tabs-selected").attr("data-search")+e(".current-region").attr("data-search");if("string"!=typeof t&&t.hasClass("region"))return/pe/.test(o)&&(h=h+"/"+l.match(/pe([^-]+)/)[0]),/page/.test(s)&&(s=s.replace(/(&|^)page=[^&]+(&|$)/,function(e,t,a){return t&&a&&"&"||""})),void(location.href=s?h+(s&&"?"+s||""):h);if(a){var g=t.siblings("input");n(g[0].value)&&n(g[1].value)||(alert("筛选请输入正整数"),d++),g[0].value&&!g[1].value&&(r=c+g[0].value+"_"),!g[0].value&&g[1].value&&(r=c+"_"+g[1].value),g[0].value&&g[1].value&&(r=Number(g[0].value)>Number(g[1].value)?c+g[1].value+"_"+g[0].value:c+g[0].value+"_"+g[1].value)}l&&p.test(r)?l=l.replace(new RegExp("(^|\\-)"+c+"[^-]+(\\-|$)"),function(e,t,a){return t&&a&&"-"||""}):(l&&u.test(l)&&(l=l.replace(f,r)),l||p.test(r)||(l=r),l&&!u.test(l)&&(l=l+"-"+r)),"ar"==c&&(l=l.replace(/(^|-)bk[^]+(-|$)/,function(e,t,a){return t&&a&&"-"||""})),"ln"==c&&(l=l.replace(/(^|-)sn[^]+(-|$)/,function(e,t,a){return t&&a&&"-"||""})),/page/.test(s)&&(s=s.replace(/(&|^)page=[^&]+(&|$)/,function(e,t,a){return t&&a&&"&"||""})),o[4]=l;var h=o.join("/");h=h.replace(/\/$/,""),d||(location.href=h+(s&&"?"+s||""))},deleteParamUrl:function(e){var t=e.attr("data-search"),a=location.pathname.split("/"),n=a[4],i=new RegExp("(-?)"+t+"\\w+(-|$)"),r=location.search.split("?")[1];n=n.replace(i,function(e,t,a){return t&&a&&"-"||""}),"ar"==t&&(n=n.replace(/(^|-)bk[^]+(-|$)/,function(e,t,a){return t&&a&&"-"||""})),"ln"==t&&(n=n.replace(/(^|-)sn[^]+(-|$)/,function(e,t,a){return t&&a&&"-"||""})),a[4]=n;var c=a.join("/");c=c.replace(/\/$/,""),location.href=c+(r&&"?"+r||"")},selectPulin:function(){if(window.configSelect){var t=this;e("#J_rent_type").dropSelect({title:configSelect.rentTypeTitle,showSelectedVal:!0,data:JSON.parse(configSelect.rentTypeList),type:"single",defaultValue:[configSelect.rentValue],selectHandler:function(e){t.togetherUrl(e[0]?e[0]:"re")}}),e("#J_traffic_type").dropSelect({title:configSelect.trafficTypeTitle,showSelectedVal:!0,data:JSON.parse(configSelect.trafficTypeList),type:"single",defaultValue:[Number(configSelect.trafficTypeValue)],needDefaultOption:!1,selectHandler:function(e){t.urlParamObj.trafficType=e[0]}}),e("#J_traffic_time").dropSelect({title:configSelect.trafficTimeTitle,showSelectedVal:!0,data:JSON.parse(configSelect.trafficTimeList),type:"single",needDefaultOption:!1,defaultValue:[Number(configSelect.trafficTimeValue)],selectHandler:function(e){t.urlParamObj.trafficTime=e[0]}});for(var a=JSON.parse(configSelect.priceRangeList),n=!0,i=configSelect.priceRange,r=null,c=0;c<a.length;c++)a[c].key==configSelect.priceRangeValue&&(n=!1);n&&(/^\_/.test(i)&&(r=i.replace(/^\_/,"")+"元以下"),/^\d+\_\d+/.test(i)&&(r=i+"元"),/\_$/.test(i)&&(r=i.replace(/\_$/,"元以上"))),e("#J_traffic_rent").dropSelect({title:n&&r||"期望租金",showSelectedVal:!0,data:a,type:"single",needDefaultOption:!1,defaultValue:[configSelect.priceRangeValue],selectHandler:function(e){var a=null;a=e[0]?e[0]:"pe",t.urlParamObj.pe=a}})}}};i.init()})});