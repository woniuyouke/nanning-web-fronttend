<% if(data !=null && typeof(data) !='undefined'){%>
<% if(data.verifyStatus==3){%>
<div class="error-info">
    <em class="iconfont icon-alert_failure"></em>
    <p><%=data.reason%></p>
</div>
<%}%>
<% if(data.verifyStatus==2){%>
<div class="detai-no">南宁市住房局房源核验码<span><%=data.govHouseNumber%></span></div>
<%}%>

<div class="detail-info-field">
    <div class="status-info">
    <div  class="status <%=data.verifyStatus==1 ? 'pending' : data.verifyStatus==2 ? 'success' : data.verifyStatus==3 ? 'error' : ''%>"><%=data.verifyStatus==1 ? '核验中' : data.verifyStatus==2 ? '已核验' : data.verifyStatus==3 ? '核验失败' : '-'%></div>
    
    <% if(data.verifyStatus==2){%>
    <div class="ewm"><img src="<%=data.qrCodeUrl ? data.qrCodeUrl : ''%>"/></div>
    <%}%>
    </div>
   <!--  <dl><dt>抵押状态</dt><dd><%=data.govHouseNumber ? data.govHouseNumber : '-'%></dd></dl>
    <dl><dt>限制状态</dt><dd><%=data.govHouseNumber ? data.govHouseNumber : '-'%></dd></dl>
    <dl><dt>在租状态</dt><dd><%=data.govHouseNumber ? data.govHouseNumber : '-'%></dd></dl> -->
    <dl><dt>所有权利证明类型</dt><dd><%=data.rightProofTypeName ? data.rightProofTypeName : '-'%></dd></dl>
    <dl><dt>所有权利证明编号</dt><dd><%=data.propertyRightNo  ? data.propertyRightNo  : '-'%></dd></dl>
    <dl><dt>房屋在区域</dt><dd><%=data.houseDistrict ? data.houseDistrict : '-'%></dd></dl>
    <dl><dt>房屋详细坐落地址</dt><dd><%=data.houseLocation ? data.houseLocation : '-'%></dd></dl>
    <dl><dt>房源门牌</dt><dd><%=data.buildingNo ? data.buildingNo : '-'%><%=data.unitNo ? data.unitNo : ''%><%=data.roomNo ? data.roomNo : ''%></dd></dl>
    <dl><dt>房屋用途</dt><dd><%=data.natureLandName ? data.natureLandName : '-'%></dd></dl>
    <dl><dt>权利类型</dt><dd><%=data.propertyType==1 ? '所有权人' : data.propertyType==2 ? '使用权人' : '-'%></dd></dl>
    <dl><dt>建筑面积</dt><dd><%=data.space ? data.space/100 : '-'%>m²</dd></dl>
    <dl><dt>套内面积</dt><dd><%=data.houseSpace || data.houseSpace === 0 ? data.houseSpace/100 : '-'%>m²</dd></dl>
    <%if(data.govSucc == 2 ){%><dl><dt>是否共有产权房源</dt><dd><%=data.crpStatus==1 ? '是' : '否'%></dd></dl><%}%>
    
    
    <div class="subInfo">
        <h3>权利人</h3>
        <dl><dt>权利人姓名</dt><dd><%=data.propertyRightName ? data.propertyRightName : '-'%></dd></dl>
        <dl><dt>权利人身份证</dt><dd><%=data.propertyRightCardNo ? data.propertyRightCardNo : '-'%></dd></dl>
        <dl><dt>权利人联系电话</dt><dd><%=data.propertyRightMobile ? data.propertyRightMobile : '-'%></dd></dl>
        <!-- <dl></dl>
        <dl><dt>权利人身份证照片</dt><dd><img src="" width="120" height="90"/></dd></dl> -->
        <%if( data.crpInfo  !=null){%>
        <%for(var i in data.crpInfo){ var crpInfo=data.crpInfo[i];%>
            <h3>共有权利人<%=parseInt(i)+1%></h3>
             <%if(data.govSucc == 2 ){%>
             <dl><dt>共有权利证明类型</dt><dd><%=crpInfo.rightProofTypeName ? crpInfo.rightProofTypeName : '-'%></dd></dl> 
             <%}%>
            <dl><dt>共有权利人所有权证号</dt><dd><%=crpInfo.propertyRightNo ? crpInfo.propertyRightNo : '-'%></dd></dl>
            <dl><dt>共有权利人姓名</dt><dd><%=crpInfo.name ? crpInfo.name : '-'%></dd></dl>
            <dl><dt>共有权利人证件号码</dt><dd><%=crpInfo.idcard ? crpInfo.idcard : '-'%></dd></dl>
            <dl><dt>共有权利人电话</dt><dd><%=crpInfo.mobile ? crpInfo.mobile : '-'%></dd></dl>
             <dl><dt>共有权利人证件号码照片</dt><dd>
                <%if(crpInfo.pics){for(var j in crpInfo.pics){ var pic=crpInfo.pics[j]%>
                <img src="<%=pic? pic.picUrl : ''%>" width="120" height="90"/>
                <%}}%>
            </dd></dl>
        <%}%>
        <%}%>

    </div>
   
    <%if(data.rightProofTypeName=='商品房网签合同编号' || data.rightProofTypeName==='合同备案编号'){%>
    <dl><dt>商品房买卖合同登记备案证明照片</dt><dd>
        <%if(data.houseSaleContractProofPic){for(var j in data.houseSaleContractProofPic){ var pic=data.houseSaleContractProofPic[j]%>
        <img src="<%=pic ? pic.picUrl : ''%>" width="120" height="90"/>
        <%}}%>
    </dd></dl>
    <dl><dt>房屋交付使用说明</dt><dd>
        <%if(data.houseDeliveryDescPic){for(var j in data.houseDeliveryDescPic){ var pic=data.houseDeliveryDescPic[j]%>
        <img src="<%=pic ? pic.picUrl : ''%>" width="120" height="90"/>
            <%}}%>
    </dd></dl>
    <%}else{%>
        <dl><dt>产权证图片</dt><dd>
        <%if(data.propertyPic){for(var j in data.propertyPic){ var pic=data.propertyPic[j]%>
        <img src="<%=pic ? pic.picUrl : ''%>" width="120" height="90"/>
        <%}}%>
    </dd></dl>
    <%}%>
  
    <%if(data.crpStatus == 1){%>
        <dl><dt>共有人同意出租意见书</dt><dd>
        <%if(data.commonOwnerOpinion){for(var j in data.commonOwnerOpinion){ var pic=data.commonOwnerOpinion[j]%>
        <img src="<%=pic ? pic.h5PicUrl : ''%>" width="120" height="90"/>
        <%}}%>
    </dd></dl>
    <%}%>
</div>
<%}%>