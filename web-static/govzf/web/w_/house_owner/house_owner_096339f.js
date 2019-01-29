define("web:widget/house_owner/house_owner.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/dialog/dialog.js","web:components/dropSelect/dropSelect.js","common:components/pcUI/tips/tips.js"],function(e,t,n,o){var a={config:{dateKey:"0",timeKey:"0",sReserveUrl:"/web/tenant/reserve",sBaseInfoUrl:"/web/account/C/baseinfoC",sLoginUrl:"/web/account/login",houseOwnerUrl:"/web/tenant/op",date_list:[],time_list:[]},init:function(){var e=this;e.initData(),e.bindEvent()},initData:function(){var e=this;pageConfig.pick_date_list.forEach(function(t,n){var o={};o.key=n,o.value="尽快安排看房"==t.date?t.date:t.date+"("+t.week+")",e.config.date_list.push(o)}),pageConfig.pick_time_list.forEach(function(t,n){var o={};o.key=n,o.value=t.value,e.config.time_list.push(o)})},bindEvent:function(){var t=this;e(document).on("click","#house_owner_dialog .J_close",function(){e("#house_owner_dialog").dialog("instance").close()}),e("#J_data_list").dropSelect({showSelectedVal:!0,data:t.config.date_list,needDefaultOption:!1,type:"single",defaultValue:[0],selectHandler:function(e){t.config.dateKey=e[0],console.log(t.config)}}),e("#J_time_list").dropSelect({showSelectedVal:!0,data:t.config.time_list,needDefaultOption:!1,type:"single",defaultValue:[0],selectHandler:function(e){t.config.timeKey=e[0],console.log(t.config)}}),e("#house_owner_dialog").dialog({customWraper:!0,autoOpen:!1}),e("#house_owner_success").dialog({customWraper:!0,autoOpen:!1}),e("#house_owner_fail").dialog({customWraper:!0,autoOpen:!1}),e("#house_owner_complete").dialog({customWraper:!0,autoOpen:!1}),e(".fangdong-wrapper").on("click",".F_accept_btn",function(){var n=e(this).attr("data-id"),o={tenantId:n,status:"3",agencyMobile:"",followDesc:"",suggestTime:""};e.ajax({url:t.config.houseOwnerUrl,type:"post",contentType:"application/json;charset=utf-8",data:JSON.stringify(o),dataType:"json",success:function(){e("#house_owner_complete").dialog("instance").open()}})}),e(".fangdong-wrapper").on("click",".F_sure_btn",function(){var n=e(this).attr("data-id"),o={tenantId:n,status:"0",agencyMobile:"",followDesc:"",suggestTime:""};console.log(o),e.ajax({url:t.config.houseOwnerUrl,type:"post",contentType:"application/json;charset=utf-8",data:JSON.stringify(o),dataType:"json",success:function(t){t.success&&e("#house_owner_success").dialog("instance").open()}})}),e(".fangdong-wrapper").on("click",".F_cancel_btn",function(){var n=e(this).attr("data-id"),o={tenantId:n,status:"6",agencyMobile:"",followDesc:"",suggestTime:""};e.ajax({url:t.config.houseOwnerUrl,type:"post",contentType:"application/json;charset=utf-8",data:JSON.stringify(o),dataType:"json",success:function(){e("#house_owner_fail").dialog("instance").open()}})}),e(".fangdong-wrapper").on("click",".F_revise_btn",function(){var n=e(this).attr("data-id");e("#house_owner_dialog").dialog("instance").open(),e("#J_yue_btn").on("click",function(){var a=pageConfig.pick_date_list[t.config.dateKey].value+" "+pageConfig.pick_time_list[t.config.timeKey].value+":00",i={tenantId:n,status:"8",agencyMobile:"",followDesc:"",suggestTime:a};e.ajax({url:t.config.houseOwnerUrl,type:"post",contentType:"application/json;charset=utf-8",data:JSON.stringify(i),dataType:"json",success:function(e){console.log(e),e.success?(o.show("修改时间成功"),setTimeout(function(){location.reload()},300)):console.log(e.msg)}})})})}};a.init()})});