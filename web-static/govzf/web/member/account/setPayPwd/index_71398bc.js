define("web:static/member/account/setPayPwd/index.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/tips/tips.js","common:components/ui/getQueryString/getQueryString.js"],function(e,s,t,a){var r,o={config:{sBaseInfoUrl:"/web/account/C/baseinfoC",sLoginUrl:"/web/account/login",sendMsgCaptchaUrl:"/web/account/reset/msgcodeC",validateUrl:"/web/account/reset/msgcodevalidate",imgCaptchaUrl:"/web/account/imgcode",sendNewMsgCaptchaUrl:"/web/account/msgcode",submitUrl:"/web/account/reset/mobile",sNextUrl:myHeader.config.loginUrl,returnUrl:a("returnUrl")?a("returnUrl"):""},init:function(){var e=this;e.bindEvent(),console.log(e.config.returnUrl)},bindEvent:function(){var s=this;e("#J_send_captcha").on("click",function(){e(this).hasClass("disabled")||s.formValid()&&(e(this).addClass("disabled"),s.sendCaptchaAjax())}),e("#J_validate").click(function(){var t=e("#J_set_step1 #msgCaptcha").val().trim();return""==t?void e("#J_set_step1 .error-msg").removeClass("info").html("请输入短信验证码！"):/^\d{6}$/.test(t)?void s.validate():void e("#J_set_step1 .error-msg").removeClass("info").html("验证码为6位数字")}),e("#J_submit").click(function(){if(!e(this).hasClass("disabled")){if(!s.formValidMobile())return;e(this).addClass("disabled"),s.submit()}})},sendNewCaptchaAjax:function(){var s=this,t={mobile:e("#msgMobile").val(),imgAuthCode:e("#imgCaptcha").val(),type:3};e.ajax({url:s.config.sendNewMsgCaptchaUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){t.success?(s.activeClock(e("#J_send_captcha_new")),e("#J_set_step2 .error-msg").addClass("info").html("短信已成功发送")):(e("#J_send_captcha_new").removeClass("disabled"),e("#J_set_step2 .error-msg").removeClass("info").html(t.msg),e("#J_regcode_img").trigger("click"))},error:function(){e("#J_send_captcha_new").removeClass("disabled"),e("#J_set_step2 .error-msg").removeClass("info").html("接口获取失败！")}})},formValidMobile:function(){var s=e("#password").val().trim(),t=e("#checkPassword").val().trim();return""==s?void e("#J_set_step2 .error-msg").removeClass("info").html("请输入密码!"):/^\d{6}$/.test(s)?""==t?void e("#J_set_step2 .error-msg").removeClass("info").html("请二次确认密码！"):t!=s?void e("#J_set_step2 .error-msg").removeClass("info").html("两次密码不一致!"):!0:void e("#J_set_step2 .error-msg").removeClass("info").html("支付密码为6位数字")},submit:function(){var s=this,t={password:e("#password").val().trim(),checkPassword:e("#password").val().trim()};e.ajax({url:"/web/account/setpaypassword",type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){e("#J_submit").removeClass("disabled"),t.success?window.location.href=s.config.returnUrl?s.config.returnUrl:"/pc/user/setting":e("#J_set_step2 .error-msg").removeClass("info").html(t.fieldErrors&&t.fieldErrors.length>0?t.fieldErrors[0].msg:t.msg)},error:function(){e("#J_submit").removeClass("disabled"),e("#J_set_step2 .error-msg").removeClass("info").html("接口获取失败！")}})},validate:function(){var s=this,t={bizType:"PAY_PASSWORD",msgCode:e("#msgCaptcha").val().trim()};e.ajax({url:s.config.validateUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(s){e("#J_validate").removeClass("disabled"),s.success?(e("#J_set_step1").addClass("hide"),e("#J_validate").addClass("hide"),e("#J_set_step2").removeClass("hide")):e("#J_set_step1 .error-msg").removeClass("info").html(s.msg)},error:function(){e("#J_validate").removeClass("disabled"),e("#J_set_step1 .error-msg").removeClass("info").html("接口获取失败！")}})},activeClock:function(e){function s(){t?e.text("重新获取"+t--+"s"):(e.text("重新获取").removeClass("disabled"),clearInterval(r))}clearInterval(r);var t=60;s(),r=setInterval(s,1e3)},sendCaptchaAjax:function(){var s=this,t={bizType:"PAY_PASSWORD",name:e("#realName").val().trim(),identity:e("#IDCard").val().trim()};e.ajax({url:s.config.sendMsgCaptchaUrl,type:"POST",contentType:"application/json;charset=utf-8",data:JSON.stringify(t),success:function(t){t.success?(s.activeClock(e("#J_send_captcha")),e("#J_set_step1 .error-msg").addClass("info").html("短信已成功发送")):(e("#J_send_captcha").removeClass("disabled"),e("#J_set_step1 .error-msg").removeClass("info").html(t.msg))},error:function(){e("#J_send_captcha").removeClass("disabled"),e("#J_set_step1 .error-msg").removeClass("info").html("接口获取失败！")}})},formValid:function(){var s=e("#realName").val().trim(),t=e("#IDCard").val().trim();return s.length<2||s.length>30||!/^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/.test(s)?void e("#J_set_step1 .error-msg").removeClass("info").html("请输入真实姓名！"):""!=t&&/^(?:\d{14}|\d{17})[\dx]$/i.test(t)?!0:void e("#J_set_step1 .error-msg").removeClass("info").html("请输入正确的身份证号！")}};o.init()})});