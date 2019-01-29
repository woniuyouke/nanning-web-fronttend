define("web:static/member/user/server/agreement/agreementStatus.js",function(n){"use strict";n.async(["common:components/jquery/jquery.js","common:components/ui/template/template.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/tips/tips.js","common:components/previewImg/previewImg.js"],function(n,a,i,s,t){var l=!1,r={listTPL:'<%\r\n        var isOwner = (list.isOwner == 1) ? true : false;\r\nvar isCrp = (list.isCrp == 1) ? true : false;\r\n    %>\r\n\r\n  <!--房屋信息-->\r\n  <div class="house-msg fl-left">\r\n    <div class="headerTit">\r\n      <p class=\'titleText\'>\r\n        <%=list.houseAddress %>\r\n          <!-- 2.已备案：出租方/承租方==只要不是共有权利人 -->\r\n          <% if(list.status == \'3\' || list.status == \'3001\' || list.status == \'3002\' || list.status == \'3003\'|| list.status == \'4002\' || list.status == \'6\'){%>\r\n            <% if(!isCrp){%>\r\n          <a class="applyzhuxiao" href="javascript:;">申请注销</a>\r\n          <%}%>\r\n                <% }%>\r\n\r\n                  <!--1.待确认:承租人/共有权利人-->\r\n                  <% if((list.status == \'4001\'  || list.status == \'4003\') &&(!isOwner || isCrp)){%>\r\n                    <% if(list.isAck != 1){%>\r\n          <a class="handleBeian" href="javascript:;">确认备案</a>\r\n          <a class="cancelBeian" href="javascript:;">取消备案</a>\r\n          <%}%>\r\n                        <% }%>\r\n\r\n                          <!-- 3.备案注销中 后台对接：可以不根据角色判断，只根据isAck判断 -->\r\n                          <% if(list.status == \'7\'|| list.status == \'7001\' ){%>\r\n                            <% if(list.isAck != 1){%>\r\n          <a class="handleZhuxiao" href="javascript:;">确认注销</a>\r\n          <a class="cancelZhuxiao" href="javascript:;">拒绝注销</a>\r\n          <%}%>\r\n                                <% }%>\r\n\r\n      </p>\r\n\r\n      <% if(list.status == \'3\' ||list.status == \'3001\' ||list.status == \'3002\' ||list.status == \'3003\' || list.status == \'6\'|| list.status == \'7\'|| list.status == \'7001\'){ %>\r\n        <p class="contractNo">备案编号<span><%=list.archiveNum %></span></p>\r\n        <% } %>\r\n          <p class="statusBox">\r\n        <% if(list.status == \'2\'){ %>\r\n          <span class="doingBtn">备案中</span>\r\n          <% }else if(list.status == \'7\'|| list.status == \'7001\' || list.status == \'8\'){ %>\r\n            <span class="doingBtn">备案注销中</span>\r\n            <% if(list.pdfStatus === \'0\'){ %>\r\n              <i>备案证明生成中</i>\r\n              <% } %>\r\n                    <% if(list.pdfStatus === \'1\' && (imgUrl !== null || imgUrl !== \'\')){ %>\r\n          <a class="seeBtn" href="<%=imgUrl%>" target="_blank">查看南宁市租赁备案证明</a>\r\n          <% } %>\r\n                        <% }else if(list.status == \'1\' || list.status == \'5\'|| list.status == \'5001\'){ %>\r\n          <span class="canalBtn"><%=list.status==\'1\' ? \'未备案\':\'已注销\' %></span>\r\n          <% }else if(list.status == \'4\'){ %>\r\n            <span class="errorBtn">备案失败</span>\r\n            <i class="errorTips">失败原因：<%=list.remark %></i>\r\n            <% }else if(list.status == \'3\' || list.status == \'3001\' || list.status == \'3002\' || list.status == \'3003\' || list.status == \'4002\'|| list.status == \'6\'){ %>\r\n              <span class="greenBtn">已备案</span>\r\n              <% if(list.pdfStatus === \'0\'){ %>\r\n                <i>备案证明生成中</i>\r\n                <% } %>\r\n                                  <% if(list.pdfStatus === \'1\' && (imgUrl !== null || imgUrl !== \'\')){ %>\r\n          <a class="seeBtn" href="<%=imgUrl%>" target="_blank">查看南宁市租赁备案证明</a>\r\n          <% } %>\r\n                                      <% }else if(list.status == \'1011\'|| list.status == \'4004\'){%>\r\n                                        <% if(!isCrp){ %>\r\n          <span class="doingBtn">待房源核验</span>\r\n          <% } %>\r\n                                            <%}else if(list.status == \'4001\'  || list.status == \'4003\'){%>\r\n          <span class="doingBtn">待确认</span>\r\n          <%}else if(list.status == \'2013\' || list.status == \'2015\'|| list.status == \'2016\'){%>\r\n            <span class="doingBtn">已失效</span>\r\n            <%}else if((list.status == \'2012\' ||list.status == \'2014\') && isOwner){%>\r\n              <span class="doingBtn">已取消备案</span>\r\n              <%}%>\r\n          </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--出租方信息-->\r\n    <div class="rent-msg fl-left">\r\n      <div class="title">出租方信息</div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方名称</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=list.ownerPerson %>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方联系电话</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=list.ownerMobile %>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方证件号码</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=list.ownerCertificateId %>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--共有权利人-->\r\n  <%if(list.crpStatus == 1) {%>\r\n    <% list[\'crpInfo\'].forEach(function (item, index) {%>\r\n    <div class="crpInfo-msg fl-left">\r\n      <div class="crpInfo-title">共有产权人\r\n          <%= index +1 %>\r\n        </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方名称</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=item.name %>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方联系电话</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=item.mobile %>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">出租方证件号码</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=item.idcard %>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <%}) %>\r\n        <%}%>\r\n\r\n\r\n\r\n          <!--承租方信息-->\r\n  <div class="sale-msg fl-left">\r\n    <div class="title">承租方信息</div>\r\n    <div class="row clearfix">\r\n      <label class="common-label">承租方名称</label>\r\n      <div class="msgDiv clearfix">\r\n        <div class="container">\r\n          <%=list.tenantPerson %>\r\n                </div>\r\n      </div>\r\n    </div>\r\n    <div class="row clearfix">\r\n      <label class="common-label">承租方联系电话</label>\r\n      <div class="msgDiv clearfix">\r\n        <div class="container">\r\n          <%=list.tenantFamilyMobile %>\r\n                </div>\r\n      </div>\r\n    </div>\r\n    <div class="row clearfix">\r\n      <label class="common-label">承租方证件号码</label>\r\n      <div class="msgDiv clearfix">\r\n        <div class="container">\r\n          <%=list.tenantCertificateId %>\r\n                </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--合同信息-->\r\n    <div class="agreement-msg fl-left">\r\n      <div class="title">租金方案</div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">租金</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=list.rentExpense %>\r\n                </div>\r\n          <div class="unit">元/月</div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">合同起始日</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="container">\r\n            <%=list.contractStartTime %>\r\n                </div>\r\n        </div>\r\n      </div>\r\n      <div class="row clearfix">\r\n        <label class="common-label">合同终止日</label>\r\n        <div class="msgDiv clearfix">\r\n          <div class="msgDiv clearfix">\r\n            <div class="container">\r\n              <%=list.contractEndTime %>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--材料上传-->\r\n      <div class="material-msg fl-left">\r\n        <div class="title">材料附件</div>\r\n        <!--<div class="row clearfix">\r\n          <div class="contain-left clearfix">\r\n            <label class="common-label"><span class="required">*</span>产权人证件照片</label>\r\n          </div>\r\n          <div class="contain-right clearfix">\r\n            <% if(list[\'propertyIdCardAttachment\'] !== null){ %>\r\n                    <%\r\n                        for(var i=0; i< list[\'propertyIdCardAttachment\'].length; i++) {\r\n                        var listItem = list[\'propertyIdCardAttachment\'][i];\r\n                        var itemUrl = globalData+listItem.imgKey+\'/640x360\'+\'.\'+listItem.imgExt;\r\n                    %>\r\n                        <img src="<%= itemUrl%>">\r\n              <% } %>\r\n                <% } %>\r\n            </div>\r\n          </div>-->\r\n            <!-- <div class="row clearfix">\r\n            <div class="contain-left clearfix">\r\n              <label class="common-label"><span class="required">*</span>房屋所有权利证明图片</label>\r\n            </div>\r\n            <div class="contain-right">\r\n              <% if(list[\'housePropertyRightAttachment\'] !== null){ %>\r\n                <%\r\n                for(var i=0; i< list[\'housePropertyRightAttachment\'].length; i++) {\r\n                var listItem = list[\'housePropertyRightAttachment\'][i];\r\n                var itemUrl = globalData+listItem.imgKey+\'/640x360\'+\'.\'+listItem.imgExt;\r\n                %>\r\n                <img src="<%= itemUrl%>">\r\n                <% } %>\r\n            <% } %>\r\n            </div>\r\n            </div> -->\r\n            <!-- <div class="row clearfix">\r\n              <div class="contain-left clearfix">\r\n                <label class="common-label"><span class="required">*</span>承租人证件照片</label>\r\n              </div>\r\n              <div class="contain-right">\r\n                <% if(list[\'tenantCertificateAttachment\'] !== null){ %>\r\n                <%\r\n                for(var i=0; i< list[\'tenantCertificateAttachment\'].length; i++) {\r\n                var listItem = list[\'tenantCertificateAttachment\'][i];\r\n                var itemUrl = globalData+listItem.imgKey+\'/640x360\'+\'.\'+listItem.imgExt;\r\n                %>\r\n                <img src="<%= itemUrl%>">\r\n                  <% } %>\r\n                <% } %>\r\n            </div>\r\n              </div> -->\r\n            <div class="row clearfix">\r\n                <div class="contain-left clearfix">\r\n                  <label class="common-label"><span class="required">*</span>合同附件（需上传完整租赁合同照片）</label>\r\n                  <div class="container-tips"></div>\r\n                </div>\r\n                <div class="contain-right">\r\n                  <% if(list[\'contractAttachment\'] !== null){ %>\r\n                  <%\r\n                        for(var i=0; i< list[\'contractAttachment\'].length; i++) {\r\n                        var listItem = list[\'contractAttachment\'][i];\r\n                        var itemUrl = globalData+listItem.imgKey+\'/900x675\'+\'.\'+listItem.imgExt;\r\n                    %>\r\n                    <img class="preImg" src="<%= itemUrl%>">\r\n                    <% } %>\r\n                      <% } %>\r\n              </div>\r\n                </div>\r\n                <!-- <div class="row clearfix">\r\n                  <div class="contain-left clearfix">\r\n                    <label class="common-label">承租合同（或居间代理合同）</label>\r\n                    <div class="container-tips"></div>\r\n                  </div>\r\n                  <div class="contain-right">\r\n                    <% if(list[\'agencyContractAttachment\'] !== null){ %>\r\n                <%\r\n                for(var i=0; i< list[\'agencyContractAttachment\'].length; i++) {\r\n                var listItem = list[\'agencyContractAttachment\'][i];\r\n                var itemUrl = globalData+listItem.imgKey+\'/640x360\'+\'.\'+listItem.imgExt;\r\n                %>\r\n                <img src="<%= itemUrl%>">\r\n                      <% } %>\r\n            <% } %>\r\n            </div>\r\n                  </div> -->\r\n            <!-- <div class="row clearfix">\r\n                    <div class="contain-left clearfix">\r\n                      <label class="common-label">其他材料</label>\r\n                    </div>\r\n                    <div class="contain-right">\r\n                      <% if(list[\'otherAttachment\'] !== null){ %>\r\n                <%\r\n                for(var i=0; i< list[\'otherAttachment\'].length; i++) {\r\n                var listItem = list[\'otherAttachment\'][i];\r\n                var itemUrl = globalData+listItem.imgKey+\'/640x360\'+\'.\'+listItem.imgExt;\r\n                %>\r\n                <img src="<%= itemUrl%>">\r\n                        <% } %>\r\n            <% } %>\r\n            </div>\r\n                    </div> -->\r\n          </div>',userMobile:"",param:{id:"",globalData:""},init:function(){this.getParam(),this.initAjax(),this.bindEven()},bindEven:function(){var a=this;n(".dialog-wrapper").dialog({customWraper:!1}),n("body").delegate(".deletBtn ","click",function(){n("#set-dialog").dialog("instance").open()}),n("#canal-btn").on("click",function(){n("#set-dialog").dialog("instance").close()}),n("#set-btn").on("click",function(){n("#set-dialog").dialog("instance").close(),l||a.changStatus()})},getParam:function(){var n=location.href,a=n.split("?")[1].split("&");this.param.id=a[0].split("=")[1]},initAjax:function(){var i=this;n.ajax({url:window.configPager.contractFillingDetailUrl+"/"+i.param.id,type:"get",dataType:"json",success:function(r){if(r.success){var e=window.configPager.sHouseViewUrl+"/",c=[],o=parseInt(i.param.id);if(null!==r.data.rentExpense||""!==r.data.rentExpense){var d=r.data.rentExpense/100;r.data.rentExpense=d.toFixed(2)}c.push(a.parse(i.listTPL,{list:r.data,globalData:e,imgUrl:window.configPager.getSeeImgUrl+o,userMobile:i.userMobile})),n(".form-wrapper").html(c.join("")),n(".handleBeian").on("click",function(){n("#handleBeianToast").dialog("instance").open()}),n("#handleBeianToast .nocancel").on("click",function(){l||(l=!0,n.ajax({url:"/web/contract/filling/recordAck/"+o,type:"get",dataType:"json",success:function(a){a.success?(s.show("确认备案成功"),n("#handleBeianToast").dialog("instance").close(),l=!1,i.init()):(s.show(a.msg),n("#handleBeianToast").dialog("instance").close(),l=!1)}}))}),n("#handleBeianToast .cancel").on("click",function(){n("#handleBeianToast").dialog("instance").close()}),n(".cancelBeian").on("click",function(){n("#cancelBeianToast").dialog("instance").open()}),n("#cancelBeianToast .nocancel").on("click",function(){l||(l=!0,n.ajax({url:"/web/contract/filling/recordCancel/"+o,type:"get",dataType:"json",success:function(a){a.success?(s.show("取消备案成功"),n("#cancelBeianToast").dialog("instance").close(),l=!1,i.init()):(s.show(a.msg),n("#cancelBeianToast").dialog("instance").close(),l=!1)}}))}),n("#cancelBeianToast .cancel").on("click",function(){n("#cancelBeianToast").dialog("instance").close()}),n(".applyzhuxiao").on("click",function(){n("#applyZhuxiaoToast").dialog("instance").open()}),n("#applyZhuxiaoToast .nocancel").on("click",function(){l||(l=!0,n.ajax({url:"/web/contract/filling/cancelApply/"+o,type:"get",dataType:"json",success:function(a){a.success?(s.show("申请注销成功"),n("#applyZhuxiaoToast").dialog("instance").close(),l=!1,i.init()):(s.show(a.msg),n("#applyZhuxiaoToast").dialog("instance").close(),l=!1)}}))}),n("#applyZhuxiaoToast .cancel").on("click",function(){n("#applyZhuxiaoToast").dialog("instance").close()}),n(".handleZhuxiao").on("click",function(){n("#handleZhuxiaoToast").dialog("instance").open()}),n("#handleZhuxiaoToast .nocancel").on("click",function(){l||(l=!0,n.ajax({url:"/web/contract/filling/cancelAck/"+o,type:"get",dataType:"json",success:function(a){a.success?(s.show("注销成功"),n("#handleZhuxiaoToast").dialog("instance").close(),l=!1,i.init()):(s.show(a.msg),n("#handleZhuxiaoToast").dialog("instance").close(),l=!1)}}))}),n("#handleZhuxiaoToast .cancel").on("click",function(){n("#handleZhuxiaoToast").dialog("instance").close()}),n(".cancelZhuxiao").on("click",function(){n("#cancelZhuxiaoToast").dialog("instance").open()}),n("#cancelZhuxiaoToast .nocancel").on("click",function(){l||(l=!0,n.ajax({url:"/web/contract/filling/cancelRefuse/"+o,type:"get",dataType:"json",success:function(a){a.success?(s.show("拒绝注销成功"),n("#cancelZhuxiaoToast").dialog("instance").close(),l=!1,i.init()):(s.show(a.msg),n("#cancelZhuxiaoToast").dialog("instance").close(),l=!1)}}))}),n("#cancelZhuxiaoToast .cancel").on("click",function(){n("#cancelZhuxiaoToast").dialog("instance").close()}),n(".preImg").on("click",function(){t.open(n(".preImg"),n(this))})}else console.log(r.code)}})},changStatus:function(){var i=this,t={id:parseInt(i.param.id)};l=!0,n.ajax({url:"/web/contract/cancel/"+t.id,type:"get",dataType:"json",contentType:"application/json; charset=UTF-8",success:function(t){if(t.success){s.show("修改备案已提交！");var r=window.configPager.sHouseViewUrl+"/",e=[],c=parseInt(i.param.id);if(null!==t.data.rentExpense||""!==t.data.rentExpense){var o=t.data.rentExpense/100;t.data.rentExpense=o.toFixed(2)}e.push(a.parse(i.listTPL,{list:t.data,globalData:r,imgUrl:window.configPager.getSeeImgUrl+c})),null!==t.data&&(n(".form-wrapper").html(""),n(".form-wrapper").html(e.join(""))),l=!1}else s.show(t.msg),l=!1}})}};r.init()})});