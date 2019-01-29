<%  data.forEach(function(item) { %>
<div class="item-wrapper <%=item['status']? 'beian-sign' : '' %>">
    <div class="top" >
        <a href="/pc/user/verification/detail?id=<%=item['id']%>">
        <div class="address"><%=item['houseLocated']%></div>
        <span class='icon iconfont icon-arrow_left'></span>
        </a>
        <div class="time">创建时间 <%=item['createdAt']%></div>

    </div>
    <div class="middle">
        <div class="status <%=item['verifyStatus']==1 ? 'pending' : item['verifyStatus']==2 ? 'success' : item['verifyStatus']==3 ? 'error' : ''%>"><%=item['verifyStatus']==1 ? '核验中' : item['verifyStatus']==2 ? '已核验' : item['verifyStatus']==3 ? '核验失败' : '-'%></div>
       <!--  <% if(item['verifyStatus']==2 ){%>
        <div class="success-text"><div>南宁市住房局房源核验码</div><div><%=item['govHouseNumber']%></div></div>
        <%}%> -->
        <% if(item['verifyStatus']==3){%>
        <div class="error-text"><%=item['reason']%></div>
        <%}%>
    </div>
    <div class="bottom">
        <div class="houseStatus">
            <dl><dt>抵押状态：</dt><dd><%=item.verifyStatus == 2 ? (item['houseIsMortgage'] ==1 ? '有抵押' : '无抵押') : '-'%></dd></dl>
            <dl><dt>限制状态：</dt><dd><%=item.verifyStatus == 2 ? (item['houseIsLimit']==1 ? '有限制' : '无限制') : '-'%></dd></dl>
            <dl><dt>在租状态：</dt><dd><%=item.verifyStatus == 2 ? (item['houseIsRent']==1 ? '在租中' : '空置中') : '-'%></dd></dl>
        </div>
        <% if(item['verifyStatus']==2 ){%>
        <div class="ewm">
            <img src="<%=item.qrCodeUrl%>" class="toolTipSrc"/>
            <div><%=item['govHouseNumber']%></div>
        </div>
         <%}%>
    </div>
</div>
<%})%>
