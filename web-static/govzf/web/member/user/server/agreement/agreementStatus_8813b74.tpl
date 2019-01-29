<%
        var isOwner = (list.isOwner == 1) ? true : false;
var isCrp = (list.isCrp == 1) ? true : false;
    %>

  <!--房屋信息-->
  <div class="house-msg fl-left">
    <div class="headerTit">
      <p class='titleText'>
        <%=list.houseAddress %>
          <!-- 2.已备案：出租方/承租方==只要不是共有权利人 -->
          <% if(list.status == '3' || list.status == '3001' || list.status == '3002' || list.status == '3003'|| list.status == '4002' || list.status == '6'){%>
            <% if(!isCrp){%>
          <a class="applyzhuxiao" href="javascript:;">申请注销</a>
          <%}%>
                <% }%>

                  <!--1.待确认:承租人/共有权利人-->
                  <% if((list.status == '4001'  || list.status == '4003') &&(!isOwner || isCrp)){%>
                    <% if(list.isAck != 1){%>
          <a class="handleBeian" href="javascript:;">确认备案</a>
          <a class="cancelBeian" href="javascript:;">取消备案</a>
          <%}%>
                        <% }%>

                          <!-- 3.备案注销中 后台对接：可以不根据角色判断，只根据isAck判断 -->
                          <% if(list.status == '7'|| list.status == '7001' ){%>
                            <% if(list.isAck != 1){%>
          <a class="handleZhuxiao" href="javascript:;">确认注销</a>
          <a class="cancelZhuxiao" href="javascript:;">拒绝注销</a>
          <%}%>
                                <% }%>

      </p>

      <% if(list.status == '3' ||list.status == '3001' ||list.status == '3002' ||list.status == '3003' || list.status == '6'|| list.status == '7'|| list.status == '7001'){ %>
        <p class="contractNo">备案编号<span><%=list.archiveNum %></span></p>
        <% } %>
          <p class="statusBox">
        <% if(list.status == '2'){ %>
          <span class="doingBtn">备案中</span>
          <% }else if(list.status == '7'|| list.status == '7001' || list.status == '8'){ %>
            <span class="doingBtn">备案注销中</span>
            <% if(list.pdfStatus === '0'){ %>
              <i>备案证明生成中</i>
              <% } %>
                    <% if(list.pdfStatus === '1' && (imgUrl !== null || imgUrl !== '')){ %>
          <a class="seeBtn" href="<%=imgUrl%>" target="_blank">查看南宁市租赁备案证明</a>
          <% } %>
                        <% }else if(list.status == '1' || list.status == '5'|| list.status == '5001'){ %>
          <span class="canalBtn"><%=list.status=='1' ? '未备案':'已注销' %></span>
          <% }else if(list.status == '4'){ %>
            <span class="errorBtn">备案失败</span>
            <i class="errorTips">失败原因：<%=list.remark %></i>
            <% }else if(list.status == '3' || list.status == '3001' || list.status == '3002' || list.status == '3003' || list.status == '4002'|| list.status == '6'){ %>
              <span class="greenBtn">已备案</span>
              <% if(list.pdfStatus === '0'){ %>
                <i>备案证明生成中</i>
                <% } %>
                                  <% if(list.pdfStatus === '1' && (imgUrl !== null || imgUrl !== '')){ %>
          <a class="seeBtn" href="<%=imgUrl%>" target="_blank">查看南宁市租赁备案证明</a>
          <% } %>
                                      <% }else if(list.status == '1011'|| list.status == '4004'){%>
                                        <% if(!isCrp){ %>
          <span class="doingBtn">待房源核验</span>
          <% } %>
                                            <%}else if(list.status == '4001'  || list.status == '4003'){%>
          <span class="doingBtn">待确认</span>
          <%}else if(list.status == '2013' || list.status == '2015'|| list.status == '2016'){%>
            <span class="doingBtn">已失效</span>
            <%}else if((list.status == '2012' ||list.status == '2014') && isOwner){%>
              <span class="doingBtn">已取消备案</span>
              <%}%>
          </p>
    </div>
  </div>

  <!--出租方信息-->
    <div class="rent-msg fl-left">
      <div class="title">出租方信息</div>
      <div class="row clearfix">
        <label class="common-label">出租方名称</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=list.ownerPerson %>
        </div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">出租方联系电话</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=list.ownerMobile %>
        </div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">出租方证件号码</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=list.ownerCertificateId %>
        </div>
        </div>
      </div>
    </div>

    <!--共有权利人-->
  <%if(list.crpStatus == 1) {%>
    <% list['crpInfo'].forEach(function (item, index) {%>
    <div class="crpInfo-msg fl-left">
      <div class="crpInfo-title">共有产权人
          <%= index +1 %>
        </div>
      <div class="row clearfix">
        <label class="common-label">出租方名称</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=item.name %>
            </div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">出租方联系电话</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=item.mobile %>
            </div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">出租方证件号码</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=item.idcard %>
            </div>
        </div>
      </div>
    </div>
    <%}) %>
        <%}%>



          <!--承租方信息-->
  <div class="sale-msg fl-left">
    <div class="title">承租方信息</div>
    <div class="row clearfix">
      <label class="common-label">承租方名称</label>
      <div class="msgDiv clearfix">
        <div class="container">
          <%=list.tenantPerson %>
                </div>
      </div>
    </div>
    <div class="row clearfix">
      <label class="common-label">承租方联系电话</label>
      <div class="msgDiv clearfix">
        <div class="container">
          <%=list.tenantFamilyMobile %>
                </div>
      </div>
    </div>
    <div class="row clearfix">
      <label class="common-label">承租方证件号码</label>
      <div class="msgDiv clearfix">
        <div class="container">
          <%=list.tenantCertificateId %>
                </div>
      </div>
    </div>
  </div>

  <!--合同信息-->
    <div class="agreement-msg fl-left">
      <div class="title">租金方案</div>
      <div class="row clearfix">
        <label class="common-label">租金</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=list.rentExpense %>
                </div>
          <div class="unit">元/月</div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">合同起始日</label>
        <div class="msgDiv clearfix">
          <div class="container">
            <%=list.contractStartTime %>
                </div>
        </div>
      </div>
      <div class="row clearfix">
        <label class="common-label">合同终止日</label>
        <div class="msgDiv clearfix">
          <div class="msgDiv clearfix">
            <div class="container">
              <%=list.contractEndTime %>
                  </div>
          </div>
        </div>
      </div>
    </div>

    <!--材料上传-->
      <div class="material-msg fl-left">
        <div class="title">材料附件</div>
        <!--<div class="row clearfix">
          <div class="contain-left clearfix">
            <label class="common-label"><span class="required">*</span>产权人证件照片</label>
          </div>
          <div class="contain-right clearfix">
            <% if(list['propertyIdCardAttachment'] !== null){ %>
                    <%
                        for(var i=0; i< list['propertyIdCardAttachment'].length; i++) {
                        var listItem = list['propertyIdCardAttachment'][i];
                        var itemUrl = globalData+listItem.imgKey+'/640x360'+'.'+listItem.imgExt;
                    %>
                        <img src="<%= itemUrl%>">
              <% } %>
                <% } %>
            </div>
          </div>-->
            <!-- <div class="row clearfix">
            <div class="contain-left clearfix">
              <label class="common-label"><span class="required">*</span>房屋所有权利证明图片</label>
            </div>
            <div class="contain-right">
              <% if(list['housePropertyRightAttachment'] !== null){ %>
                <%
                for(var i=0; i< list['housePropertyRightAttachment'].length; i++) {
                var listItem = list['housePropertyRightAttachment'][i];
                var itemUrl = globalData+listItem.imgKey+'/640x360'+'.'+listItem.imgExt;
                %>
                <img src="<%= itemUrl%>">
                <% } %>
            <% } %>
            </div>
            </div> -->
            <!-- <div class="row clearfix">
              <div class="contain-left clearfix">
                <label class="common-label"><span class="required">*</span>承租人证件照片</label>
              </div>
              <div class="contain-right">
                <% if(list['tenantCertificateAttachment'] !== null){ %>
                <%
                for(var i=0; i< list['tenantCertificateAttachment'].length; i++) {
                var listItem = list['tenantCertificateAttachment'][i];
                var itemUrl = globalData+listItem.imgKey+'/640x360'+'.'+listItem.imgExt;
                %>
                <img src="<%= itemUrl%>">
                  <% } %>
                <% } %>
            </div>
              </div> -->
            <div class="row clearfix">
                <div class="contain-left clearfix">
                  <label class="common-label"><span class="required">*</span>合同附件（需上传完整租赁合同照片）</label>
                  <div class="container-tips"></div>
                </div>
                <div class="contain-right">
                  <% if(list['contractAttachment'] !== null){ %>
                  <%
                        for(var i=0; i< list['contractAttachment'].length; i++) {
                        var listItem = list['contractAttachment'][i];
                        var itemUrl = globalData+listItem.imgKey+'/900x675'+'.'+listItem.imgExt;
                    %>
                    <img class="preImg" src="<%= itemUrl%>">
                    <% } %>
                      <% } %>
              </div>
                </div>
                <!-- <div class="row clearfix">
                  <div class="contain-left clearfix">
                    <label class="common-label">承租合同（或居间代理合同）</label>
                    <div class="container-tips"></div>
                  </div>
                  <div class="contain-right">
                    <% if(list['agencyContractAttachment'] !== null){ %>
                <%
                for(var i=0; i< list['agencyContractAttachment'].length; i++) {
                var listItem = list['agencyContractAttachment'][i];
                var itemUrl = globalData+listItem.imgKey+'/640x360'+'.'+listItem.imgExt;
                %>
                <img src="<%= itemUrl%>">
                      <% } %>
            <% } %>
            </div>
                  </div> -->
            <!-- <div class="row clearfix">
                    <div class="contain-left clearfix">
                      <label class="common-label">其他材料</label>
                    </div>
                    <div class="contain-right">
                      <% if(list['otherAttachment'] !== null){ %>
                <%
                for(var i=0; i< list['otherAttachment'].length; i++) {
                var listItem = list['otherAttachment'][i];
                var itemUrl = globalData+listItem.imgKey+'/640x360'+'.'+listItem.imgExt;
                %>
                <img src="<%= itemUrl%>">
                        <% } %>
            <% } %>
            </div>
                    </div> -->
          </div>