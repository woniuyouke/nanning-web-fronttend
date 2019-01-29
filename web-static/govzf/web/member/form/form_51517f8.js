define("web:static/member/form/form.js",function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function a(){l["default"](".step-wrapper").css("display");var e=void 0;l["default"](".step-wrapper").each(function(t,a){return"block"==l["default"](a).css("display")?void(e=t+1):void 0}),l["default"](".step-item").removeClass("selected"),l["default"](".step-process .step-item:lt("+e+")").addClass("selected")}function r(e){var t=[],a="";return void 0!==e&&""!==e?(t=e.split("-"),t.map(function(e,t){2>t&&(a+=e)}),a):""}function s(e,t){l["default"]("#"+e).find(".J_row-"+t).addClass("error"),l["default"]("#"+e).find(".form-row-error").css("display","block")}function n(e,t){l["default"]("#"+e).find(".J_row-"+t).removeClass("error"),l["default"]("#"+e).find(".form-row-error").css("display","none")}var i=e("common:components/jquery/jquery.js"),l=t(i);e("web:components/bootstrap-datetimepicker/bootstrap-datetimepicker.js");var o=e("common:components/pcUI/template/template.js"),u=t(o),p=e("common:components/pcUI/dialog/dialog.js"),d=t(p),_=e("common:components/ui/getQueryString/getQueryString.js"),f=t(_),c={isNull:function(e){if(null==e)return!0;if(""==e)return!0;if(void 0==e)return!0;var t=/^[ ]+$/;return t.test(e)},isNotDate:function(e){return!/^\d{4}\-\d{2}\-\d{2}$/.test(e)}};l["default"](".dialog-wrapper").dialog({customWraper:!0}),l["default"](".form_date").datetimepicker({weekStart:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd"}),l["default"](".dialog-wrapper").on("click",".close,.cancel",function(){l["default"]("#J_del_family").dialog("instance").close(),l["default"]("#J_sub_form").dialog("instance").close()}),console.log(d["default"]);var m='<form class="family-item J_addFamily" id="step3_form_<%= index %>">\r\n  <span class="tit">成员<%= index+1 %></span>\r\n  <a class="delete"><em class="iconfont icon-close_ic"></em>删除</a>\r\n  <p class="form-row">\r\n    <label class="J_row-name">姓名：</label>\r\n    <input type="text" class="m-width" name="name"\r\n           placeholder="请输入姓名">\r\n    <label class="J_row-id_number">身份证号：</label>\r\n    <input\r\n      type="text" class="l-width" name="id_number" placeholder="请输入身份证号">\r\n    <label class="J_row-relation">与申请人关系：</label>\r\n    <input type="text" class="l-width" name="relation" placeholder="请输入与申请人关系">\r\n  </p>\r\n  <p class="form-row">\r\n    <label class="J_row-sex">性别：</label>\r\n    <span class="pretty-radio-wrapper">\r\n      <label for="male_f_<%= index %>_2" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="1" id="male_f_<%= index %>_2" name="sex">\r\n        男\r\n      </label>\r\n      <label for="female_f_<%= index %>_1" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="2" id="female_f_<%= index %>_1" name="sex">\r\n        女\r\n      </label>\r\n    </span>\r\n    <label class="J_row-household_type">户籍：</label>\r\n    <span class="pretty-radio-wrapper">\r\n      <label for="register_f_<%= index %>_1" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="1" id="register_f_<%= index %>_1" name="household_type">\r\n        农业\r\n      </label>\r\n      <label for="register_f_<%= index %>_2" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="2" id="register_f_<%= index %>_2" name="household_type">\r\n        非农业\r\n      </label>\r\n    </span>\r\n    <label class="J_row-marital_status">婚姻状况：</label>\r\n    <span class="pretty-radio-wrapper">\r\n      <label for="marital_status_f_<%= index %>_1" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" id="marital_status_f_<%= index %>_1" value="1" name="marital_status">\r\n        已婚\r\n      </label>\r\n      <label for="marital_status_f_<%= index %>_2" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" id="marital_status_f_<%= index %>_2" value="2" name="marital_status">\r\n        未婚\r\n      </label>\r\n      <label for="marital_status_f_<%= index %>_3" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" id="marital_status_f_<%= index %>_3" value="3" name="marital_status">\r\n        离异\r\n      </label>\r\n      <label for="marital_status_f_<%= index %>_4" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" id="marital_status_f_<%= index %>_4" value="4" name="marital_status">\r\n        寡鳏\r\n      </label>\r\n    </span>\r\n  </p>\r\n  <p class="form-row">\r\n    <label class="J_row-birthday">出生年月：</label>\r\n    <input type="text" placeholder="请选择日期" name="birthday" class="m-width form_date">\r\n    <span class="iconfont time-after"></span>\r\n    <label class="J_row-monthly_income ml-20">个人月收入：</label>\r\n    <input type="text" placeholder="请输入个人月收入" name="monthly_income" class="m-width no-right"><span>元</span>\r\n    <label class="J_row-low_income_id_number ml-20">低保证号：</label>\r\n    <input class="l-width" type="text" name="low_income_id_number" placeholder="请输入低保证号">\r\n  </p>\r\n  <p class="form-row">\r\n    <label class="J_row-work_unit">工作单位：</label>\r\n    <input type="text" class="l-width" name="work_unit" placeholder="请输入工作单位名称">\r\n    <label class="J_row-position">职位：</label>\r\n    <input type="text" class="m-width" name="position" placeholder="请输入职位">\r\n  </p>\r\n  <p class="form-row">\r\n    <label class="J_row-is_apply">是否申请保障：</label>\r\n    <span class="pretty-radio-wrapper">\r\n      <label for="is_apply_f_<%= index %>_1" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="1" id="is_apply_f_<%= index %>_1" name="is_apply">\r\n        是\r\n      </label>\r\n      <label for="is_apply_f_<%= index %>_2" class="iconfont">\r\n        <span class="pretty-radio"></span>\r\n        <input type="radio" value="2" id="is_apply_f_<%= index %>_2" name="is_apply">\r\n        否\r\n      </label>\r\n    </span>\r\n  </p>\r\n  <p class="form-row-error form-row"><span class="text">请填写完整表单，若如无对应信息，请填写“无”</span></p>\r\n</form>\r\n',y={city:308},h=l["default"](".form-content-wrapper"),b=l["default"]("#J_area_wrap"),w=l["default"]("#J_block_wrap"),v=l["default"]("#step1"),g=l["default"]("#step2"),k=l["default"]("#step3"),x=l["default"]("#step4"),N=l["default"]("#step5"),J=l["default"](".family-wrapper"),C=!0;h.on("click",".back",function(){var e=l["default"](this).data("to");l["default"](this).parents(".step-wrapper").css("display","none"),l["default"]("#"+e).css("display","block"),a()}),b.on("click",".area-item",function(){var e=l["default"](this),t=void 0,a=l["default"](this).index(),r=region[a].child;e.hasClass("selected")||(e.siblings().removeClass("selected"),e.addClass("selected"),t=r.map(function(e){var t='<a class="block-item" data-name="'+e.name+'">'+e.name+"</a>";return t}),y.area=e.data("name"),y.block=null,l["default"]("#J_area_selected").html(e.data("name")),w.html(t.join("")).css("display","block"))}),w.on("click",".block-item",function(){var e=l["default"](this);e.siblings().removeClass("selected"),e.addClass("selected"),y.block=e.data("name"),l["default"]("#J_area_selected").html(y.area+"-"+y.block)}),v.on("click",".next",function(){var e=v.find(".form-row-error");""==y.area||null==y.area?e.html("请选择地区").css("visibility","visible"):""==y.block||null==y.block?e.html("请选择板块").css("visibility","visible"):(l["default"](this).parents(".step-wrapper").css("display","none"),e.html("").css("visibility","hidden"),l["default"]("#step2").css("display","block"),a())}),l["default"](".form-content-wrapper").on("click",".pretty-radio-wrapper>label",function(){l["default"](this).addClass("sel").siblings().removeClass("sel")}),l["default"](".form-content-wrapper").on("click","input[type=radio]",function(e){e.stopPropagation()}),l["default"](".form-content-wrapper").on("click",".pretty-checkbox-wrapper>label",function(){var e=l["default"](this);e.hasClass("sel")?e.removeClass("sel"):e.addClass("sel")}),l["default"](".form-content-wrapper").on("click","input[type=checkbox]",function(e){e.stopPropagation()}),g.on("change","input[name=pension]",function(){var e=l["default"](this).val();2==e?l["default"](".J_pension_dete").css("display","none"):l["default"](".J_pension_dete").css("display","inline-block")}),g.on("change","input[name=medicare]",function(){var e=l["default"](this).val();2==e?l["default"](".J_insurance_date").css("display","none"):l["default"](".J_insurance_date").css("display","inline-block")}),g.on("change","input[name=accumulation_fund]",function(){var e=l["default"](this).val();2==e?l["default"](".J_accumulation_date").css("display","none"):l["default"](".J_accumulation_date").css("display","inline-block")}),g.on("click",".next",function(){g.find("form").trigger("submit","step2")}),l["default"](".J_step2_form").submit(function(e,t){e.preventDefault();var r={},i=l["default"](this).serializeArray();if(l["default"].each(i,function(){r[this.name]=this.value}),c.isNull(r.sex))return s("step2","sex"),!1;if(n("step2","sex"),c.isNull(r.work_status))return s("step2","work_status"),!1;if(n("step2","work_status"),c.isNull(r.work_unit))return s("step2","work_unit"),!1;if(n("step2","work_unit"),c.isNull(r.work_address))return s("step2","work_address"),!1;if(n("step2","work_address"),c.isNull(r.marriage))return s("step2","marriage"),!1;if(n("step2","marriage"),c.isNull(r.domiciliary_register))return s("step2","domiciliary_register"),!1;if(n("step2","domiciliary_register"),c.isNull(r.register_address))return s("step2","register_address"),!1;if(n("step2","register_address"),c.isNull(r.address))return s("step2","address"),!1;if(n("step2","address"),c.isNull(r.residence_time))return s("step2","residence_time"),!1;if(c.isNotDate(r.residence_time))return s("step2","residence_time"),!1;if(n("step2","residence_time"),c.isNull(r.low_no))return s("step2","low_no"),!1;if(n("step2","low_no"),c.isNull(r.pension))return s("step2","pension"),!1;if(n("step2","pension"),1==r.pension){if(c.isNull(r.pension_insurance_date))return s("step2","pension"),!1;if(c.isNotDate(r.pension_insurance_date))return s("step2","pension"),!1;n("step2","pension")}if(c.isNull(r.medicare))return s("step2","pension"),!1;if(n("step2","pension"),1==r.medicare){if(c.isNull(r.insurance_date))return s("step2","pension"),!1;if(c.isNotDate(r.insurance_date))return s("step2","pension"),!1;n("step2","pension")}if(c.isNull(r.accumulation_fund))return s("step2","accumulation_fund"),!1;if(n("step2","accumulation_fund"),1==r.accumulation_fund){if(c.isNull(r.accumulation_date))return s("step2","accumulation_fund"),!1;if(c.isNotDate(r.accumulation_date))return s("step2","accumulation_fund"),!1;n("step2","accumulation_fund")}if(c.isNull(r.monthly_income))return s("step2","monthly_income"),!1;if(n("step2","monthly_income"),c.isNull(r.family_monthly_income))return s("step2","family_monthly_income"),!1;n("step2","family_monthly_income"),y=l["default"].extend(y,r);var o=l["default"]("#"+t).find(".next").data("to");l["default"](this).parents(".step-wrapper").css("display","none"),l["default"]("#"+o).css("display","block"),a()}),k.on("click",".add-family",function(){var e=l["default"](".family-item").length,t=u["default"].parse(m,{index:e});l["default"](".family-wrapper").append(t),l["default"](".form_date").datetimepicker({weekStart:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd"})}),k.on("click",".delete",function(){l["default"]("#J_del_family .submit").attr("id",l["default"](this).parents(".J_addFamily").index()),l["default"]("#J_del_family").dialog("instance").open()}),l["default"]("#J_del_family").on("click",".submit",function(){var e=l["default"](this).attr("id");l["default"]("#J_del_family").dialog("instance").close(),l["default"](".J_addFamily").eq(e).css("border-color","red"),l["default"](".J_addFamily").eq(e).remove(),l["default"](".J_addFamily").each(function(e){var t=parseInt(e)+1;l["default"](".J_addFamily").eq(e).find(".tit").html("成员"+t)})}),k.on("click",".next",function(){var e=[],t=1;C=!0,J.find("form").each(function(t){var a={},i=l["default"](this).serializeArray();if(l["default"].each(i,function(){a[this.name]=this.value}),c.isNull(a.name))return s("step3_form_"+t,"name"),C=!1,!1;if(n("step3_form_"+t,"name"),c.isNull(a.id_number))return s("step3_form_"+t,"id_number"),C=!1,!1;if(n("step3_form_"+t,"id_number"),c.isNull(a.relation))return s("step3_form_"+t,"relation"),C=!1,!1;if(n("step3_form_"+t,"relation"),c.isNull(a.sex))return s("step3_form_"+t,"sex"),C=!1,!1;if(n("step3_form_"+t,"sex"),c.isNull(a.household_type))return s("step3_form_"+t,"household_type"),C=!1,!1;if(n("step3_form_"+t,"household_type"),c.isNull(a.marital_status))return s("step3_form_"+t,"marital_status"),C=!1,!1;if(n("step3_form_"+t,"marital_status"),c.isNull(a.birthday))return s("step3_form_"+t,"birthday"),C=!1,!1;if(c.isNotDate(a.birthday))return s("step3_form_"+t,"birthday"),C=!1,!1;if(n("step3_form_"+t,"birthday"),c.isNull(a.monthly_income))return s("step3_form_"+t,"monthly_income"),!1;if(n("step3_form_"+t,"monthly_income"),c.isNull(a.low_income_id_number))return s("step3_form_"+t,"low_income_id_number"),C=!1,!1;if(n("step3_form_"+t,"low_income_id_number"),c.isNull(a.work_unit))return s("step3_form_"+t,"work_unit"),C=!1,!1;if(n("step3_form_"+t,"work_unit"),c.isNull(a.position))return s("step3_form_"+t,"position"),C=!1,!1;if(n("step3_form_"+t,"position"),c.isNull(a.is_apply))return s("step3_form_"+t,"is_apply"),C=!1,!1;n("step3_form_"+t,"is_apply"),C=!0;var o=a.birthday;a.birthday=r(o),e.push(JSON.stringify(a))}),y.member_family=e,e.forEach(function(e){1==JSON.parse(e).is_apply&&(t+=1)}),y.real_family_num=t,C&&k.find(".J_step3_form").trigger("submit","step3")}),l["default"](".J_step3_form").submit(function(e,t){e.preventDefault();var r={};r.family_member_type=new Array;var i=l["default"](this).serializeArray();if(l["default"].each(i,function(){"family_member_type"==this.name?r[this.name].push(this.value):r[this.name]=this.value}),c.isNull(r.declare_family_num))return s("setp3_2","declare_family_num"),!1;if(n("setp3_2","declare_family_num"),0==r.family_member_type.length)return s("setp3_2","family_member_type"),!1;n("setp3_2","family_member_type"),r.family_member_type=r.family_member_type.join(","),y=l["default"].extend(y,r);var o=l["default"]("#"+t).find(".next").data("to");l["default"](this).parents(".step-wrapper").css("display","none"),l["default"]("#"+o).css("display","block"),a()}),x.on("click",".next",function(){x.find("form").trigger("submit","step4")}),l["default"](".J_step4_form").submit(function(e,t){e.preventDefault();var r={};r.other={};var i=l["default"](this).serializeArray();if(l["default"].each(i,function(){"is_transfer_in_three_years"==this.name||"had_welfare"==this.name?r.other[this.name]=this.value:r[this.name]=this.value}),c.isNull(r.house_address))return s("step4","house_address"),!1;if(n("step4","house_address"),c.isNull(r.house_area))return s("step4","house_area"),!1;if(n("step4","house_area"),c.isNull(r.property_rights))return s("step4","property_rights"),!1;if(n("step4","property_rights"),c.isNull(r.other.is_transfer_in_three_years))return s("step4","is_transfer_in_three_years"),!1;if(n("step4","is_transfer_in_three_years"),c.isNull(r.other.had_welfare))return s("step4","is_transfer_in_three_years"),!1;n("step4","is_transfer_in_three_years"),r.other=JSON.stringify(r.other),y=l["default"].extend(y,r);var o=l["default"]("#"+t).find(".next").data("to");l["default"](this).parents(".step-wrapper").css("display","none"),l["default"]("#"+o).css("display","block"),a()}),N.on("click",".submit",function(){l["default"]("#J_sub_form").dialog("instance").open()}),l["default"]("#J_sub_form").on("click",".submit",function(){N.find("form").trigger("submit")}),l["default"](".J_step5_form").submit(function(e){e.preventDefault();var t={};t={deposit_amount:0,real_estate_amount:0,car_amount:0,security_amount:0,other_property:0};var a=l["default"](".J_step5_form").serializeArray();l["default"].each(a,function(){("deposit_amount"==this.name||"real_estate_amount"==this.name||"car_amount"==this.name||"security_amount"==this.name||"other_property"==this.name)&&(t[this.name]=isNaN(parseInt(this.value))?0:parseInt(this.value))}),y=l["default"].extend(y,t);var s=y,n=s.residence_time,i=s.pension_insurance_date,o=s.insurance_date,u=s.accumulation_date;y.residence_time=r(n),y.pension_insurance_date=r(i),y.insurance_date=r(o),y.accumulation_date=r(u),y.public_type=f["default"]("publicType")||"",l["default"].ajax({url:window.applyApiUrl,type:"post",data:y,dataType:"json",success:function(e){0==e.code?setTimeout(function(){window.location.href="/pc/user/publicrental/progress"},1e3):alert(e.msg)}})}),N.on("input","input",function(e){e.preventDefault();var t={};t={deposit_amount:0,real_estate_amount:0,car_amount:0,security_amount:0,other_property:0};var a=l["default"](".J_step5_form").serializeArray();l["default"].each(a,function(){("deposit_amount"==this.name||"real_estate_amount"==this.name||"car_amount"==this.name||"security_amount"==this.name||"other_property"==this.name)&&(t[this.name]=isNaN(parseInt(this.value))?0:parseInt(this.value))});var r=void 0;r=t.deposit_amount+t.real_estate_amount+t.car_amount+t.security_amount+t.other_property,l["default"]("#total").val(r)})});