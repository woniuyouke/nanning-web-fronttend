define("web:static/member/user/bisiness/bindCard.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/tips/tips.js","common:components/ui/authAjax/authAjax.js","common:components/ui/template/template.js"],function(e,s,a,t,n){var o,i={config:{sBaseInfoUrl:"/web/account/C/baseinfoC",sLoginUrl:"/web/account/login",sendMsgCaptchaUrl:"/web/account/reset/msgcode",validateUrl:"/web/account/reset/msgcodevalidate",imgCaptchaUrl:"/web/account/imgcode",sendNewMsgCaptchaUrl:"/web/account/msgcodewithoutimgcode",checkUrl:"/web/account/msgcode",submitUrl:"/web/account/reset/mobile",resetPWDUrl:"/web/account/reset/login",bankList:"/web/bank/list",sNextUrl:myHeader.config.loginUrl,bankListUrl:"/pc/user/cardList",bindCard:"/web/account/card"},banklistTPL:'<div class="clearfix item">\r\n  <input type="radio" name="ownerOne"  value="<%= list.bankAbbr %>">\r\n  <div class="unit">\r\n    <img class="bank_icon bank_<%= list.bankAbbr %>">\r\n    <span><%= list.bankName %></span>\r\n  </div>\r\n</div>',init:function(){var e=this;e.supportBank(),e.bindEvent()},bindEvent:function(){var s=this;e("#J_send_captcha").on("click",function(){s.formValid()&&s.sendNewCaptchaAjax()}),e("#J_validate").on("click",function(){return s.formValidBankTel()?void s.validate():!1}),e("#J_submit").click(function(){if(!e(this).hasClass("disabled")){if(!s.formValidPwd())return;e(this).addClass("disabled"),s.submit()}}),e(".dialog-wrapper").dialog({customWraper:!0}),e("#set-btn").click(function(){window.location.href="/pc/account/setPayPwd?returnUrl="+encodeURIComponent(window.location.href)}),e("#set-dialog").on("click",".close-btn",function(){e("#set-dialog").dialog("instance").close()}),s.isNotSetPayPassword(function(){e("#set-dialog").dialog("instance").open()})},isNotSetPayPassword:function(s){var t=this;e.ajax({url:"/web/account/C/baseinfoC",type:"GET",success:function(e){if(e.success){var n=e.data;n.payPassword||s.call(t)}else a.show("发生错误")},error:function(){a.show("网络错误")}})},supportBank:function(){var s=this;t({url:s.config.bankList,type:"GET",success:function(t){if(console.log(t),t.success){var o=t.data,i=[];if(o.length){for(var c=0;c<o.length;c++){var r=o[c];i.push(n.parse(s.banklistTPL,{list:r}))}e(".bankList").html(i.join(""))}}else a.show(t.msg)},error:function(){a.show("接口获取失败！")}})},formValidBankTel:function(){var s=this,t=s.replaceStr(e("#msgCaptcha").val()),n=e("[name=ownerOne]:checked").val()||"",o=s.replaceStr(e("#IDCard").val());return console.log(n),n?""!=o&&/^([1-9]{1})(\d{6,18})$/.test(o)?s.formValid()?""==t?(a.show("请输入短信验证码！"),!1):/^\d{6}$/.test(t)?!0:(a.show("验证码为6位数字"),!1):!1:(a.show("请输入有效的银行卡卡号！"),!1):(a.show("请选择开户行！"),!1)},replaceStr:function(e){return e=e.replace(/\s/gi,"")},formValid:function(){var s=this,t=s.replaceStr(e("#IDMobile").val());return""!=t&&/^1\d{10}$/.test(t)?!0:(a.show("请输入正确的手机号！"),!1)},bindCard:function(){var s=this,n={bankName:e("[name=ownerOne]:checked").val()||"",cardNo:s.replaceStr(e("#IDCard").val()),end:"C",mobile:s.replaceStr(e("#IDMobile").val())};t({url:s.config.bindCard,type:"post",contentType:"application/json;charset=utf-8",data:JSON.stringify(n),success:function(e){e.success?window.location.href=s.config.bankListUrl:a.show(e.msg)},error:function(){a.show("接口获取失败！")}})},formValidPwd:function(){var s=e("#sPwd").val().trim(),a=e("#sConfirmPwd").val().trim();return""==s||/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(s)||/[\uFF00-\uFFEF]/.test(s)||!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/.test(s)?void e("#J_set_step2 .error-msg").removeClass("info").html("密码最短6位且包含字母和数字！"):s!=a?void e("#J_set_step2 .error-msg").removeClass("info").html("两次输入密码不一致！"):!0},sendNewCaptchaAjax:function(){var s=this,t={mobile:s.replaceStr(e("#IDMobile").val()),type:2};e.ajax({url:s.config.sendNewMsgCaptchaUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){t.success?(s.activeClock(e("#J_send_captcha")),e("#J_send_captcha").attr("disabled","disabled"),a.show("短信已成功发送")):(e("#J_send_captcha").removeClass("disabled"),a.show(t.fieldErrors[1].msg))},error:function(){e("#J_send_captcha").removeClass("disabled"),a.show("接口获取失败！")}})},submit:function(){var s=this,t={checkPassword:e("#sConfirmPwd").val().trim(),password:e("#sPwd").val().trim()};e.ajax({url:s.config.resetPWDUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){e("#J_submit").removeClass("disabled"),t.success?(a.show("密码修改成功"),s.activeClockToBack()):e("#J_set_step2 .error-msg").removeClass("info").html(t.msg)},error:function(){e("#J_submit").removeClass("disabled"),a.show("接口获取失败！")}})},activeClockToBack:function(){var s=this;clearInterval(o);var a=2;o=setInterval(function(){a?e("#J_second").text(a--):(location.replace(s.config.sNextUrl),clearInterval(o))},1e3)},validate:function(){var s=this,t={mobile:s.replaceStr(e("#IDMobile").val()),msgAuthCode:s.replaceStr(e("#msgCaptcha").val())};e.ajax({url:s.config.checkUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){e("#J_validate").removeClass("disabled").removeAttr("disabled"),t.success?s.bindCard():(a.show("短信验证码错误"),e("#J_validate").removeClass("disabled").removeAttr("disabled"))},error:function(){e("#J_validate").removeClass("disabled").removeAttr("disabled"),a.show("接口获取失败！")}})},activeClock:function(e){function s(){a?e.text("重新获取"+a--+"s"):(e.text("重新获取").removeClass("disabled").removeAttr("disabled"),clearInterval(o))}clearInterval(o);var a=60;s(),o=setInterval(s,1e3)},sendCaptchaAjax:function(){var s=this,t={};e.ajax({url:s.config.sendMsgCaptchaUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(a){a.success?(s.activeClock(e("#J_send_captcha")),e("#J_set_step1 .error-msg").addClass("info").html("短信已成功发送")):(e("#J_send_captcha").removeClass("disabled"),e("#J_set_step1 .error-msg").removeClass("info").html(a.msg))},error:function(){e("#J_send_captcha").removeClass("disabled"),a.show("接口获取失败！")}})}};i.init()})});