define("web:static/member/user/bisiness/bankList.js",function(o){"use strict";o.async(["common:components/jquery/jquery.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/tips/tips.js","common:components/ui/authAjax/authAjax.js","common:components/ui/template/template.js"],function(o,n,a,e){var t={config:{yiQianBaoQrcodeUrl:"/web/api/payment/url/prattbalance/qrcode",isOpenWallet:"/web/api/payment/regionRegister/check",openWallet:"/web/api/payment/regionRegister",getYiQianBaoPage:"/web/api/payment/url/prattbalance"},init:function(){var n=this;n.bindEvent(),n.queryIsOpenWallet(),o(".dialog-wrapper").dialog({customWraper:!0})},bindEvent:function(){var n=this;o("#J_authorization_dialog").on("click",".close-btn, .btn-gray",function(){o("#J_authorization_dialog").dialog("instance").close()}),o("#J_openWallet").on("click",function(){o("#J_authorization_dialog").dialog("instance").open()}),o("#J_agree").on("click",function(){n.openWallet()})},queryIsOpenWallet:function(){var o=this;e({url:o.config.isOpenWallet,type:"GET",success:function(n){200===n.status?n.data.isRegister?o.getYiQianBaoPageUrl():o.showYiQianBaoAuth():a.show(n.message)},error:function(o){console.log(o)}})},openWallet:function(){var o=this;e({url:o.config.openWallet,type:"POST",success:function(o){200===o.status?window.location.reload():a.show(o.message)},error:function(o){console.log(o)}})},showYiQianBaoQrcode:function(){var n=location.protocol+"//"+location.host+"/h5/user/index",a=this.config.yiQianBaoQrcodeUrl+"?backUrl="+encodeURIComponent(n),e=new Image;e.onload=function(){o("#J_yiqianbao_qrcode").attr("src",a),o(".unauthorization-wrapper").addClass("hide"),o(".authorization-wrapper").removeClass("hide")},e.src=a},showYiQianBaoAuth:function(){o(".authorization-wrapper").addClass("hide"),o(".unauthorization-wrapper").removeClass("hide")},getYiQianBaoPageUrl:function(){var o=this,n=location.protocol+"//"+location.host+"/h5/user/index",t={backUrl:encodeURIComponent(n)};e({url:o.config.getYiQianBaoPage,type:"POST",data:t,success:function(o){200===o.status?location.href=o.data.prattBalanceUrlWeb:a.show(o.message)},error:function(o){console.log(o)}})}};t.init()})});