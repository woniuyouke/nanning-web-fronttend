define("web:widget/header/header.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/cookie/cookie.js","common:components/pcUI/tips/tips.js"],function(e,o,t,n){function i(){var e=navigator.appVersion.split("MSIE"),o=parseFloat(e[1]);if(o>=5.5&&document.body.filters)for(var t=0;t<document.images.length;t++){var n=document.images[t],i=n.src.toUpperCase();if("PNG"==i.substring(i.length-3,i.length)){var a=n.id?"id='"+n.id+"' ":"",s=n.className?"class='"+n.className+"' ":"",r=n.title?"title='"+n.title+"' ":"title='"+n.alt+"' ",c="display:inline-block;"+n.style.cssText;"left"==n.align&&(c="float:left;"+c),"right"==n.align&&(c="float:right;"+c),n.parentElement.href&&(c="cursor:hand;"+c);var l="<span "+a+s+r+' style="width:'+n.width+"px; height:"+n.height+"px;"+c+";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+n.src+"', sizingMethod='scale');\"></span>";n.outerHTML=l,t-=1}}}e("#topLogin").click(function(){window.location.href=myHeader.config.loginUrl+"?returnUrl="+encodeURIComponent(window.location.href)}),e("#toRegister").click(function(){window.location.href=myHeader.config.loginUrl+"?returnUrl="+encodeURIComponent(window.location.href)+"&toRegister=true"}),e("#J_logout").click(function(){var o="/web/account/logout";e.ajax({url:o,type:"GET",success:function(e){e.success?window.location.href=myHeader.config.houseListUrl:n.show(e.msg)},error:function(){console.log("接口获取失败！")}})});var a=window.localStorage,s=e("#J_nav li.cur").index();-1!==s&&(2===s?a.setItem("isMarket","1"):a.setItem("isMarket","0")),e(function(){var o=window.navigator.userAgent;(o.indexOf("MSIE 7.0")>0||o.indexOf("MSIE 6.0")>0)&&(t.get("warned")||(t.set("warned",!0,{expires:86400}),e("#wDialog").dialog({customWraper:!0,autoOpen:!0,esc:!0}))),t.get("hfWendaNew")?e(".subnav .tips_dot").addClass("hide"):e(".subnav .tips_dot").removeClass("hide")}),window.attachEvent&&window.attachEvent("onload",i)})});