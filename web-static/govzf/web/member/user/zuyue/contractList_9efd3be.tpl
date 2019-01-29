<%
var verifyCrpArr = [
  ['待确认','待确认','待确认','待确认'],
  ['待房东确认','待确认','待房东确认','待确认'],
  ['待确认','待租客确认','待租客确认','待确认'],
  ['待确认','待确认','待租客确认','待租客确认'],
  ['待房东确认','待房东确认','待房东确认','待确认'],
  ['待房东确认','待确认','待房东确认','待房东确认'],
  ['待确认','待租客确认','待租客确认','待租客确认']
]
%>
<% for(var i = 0; i < data.length; i++) { %>
<div class="item-wrapper" data-id="<%= data[i].id %>" data-info='<%= JSON.stringify({ ownerIdentity: data[i].ownerIdentity, ownerName: data[i].ownerName, ownerPhone: data[i].ownerPhone, tenantIdentity: data[i].tenantIdentity, tenantPhone: data[i].tenantPhone, tenantPostCode: data[i].tenantPostCode, tenantAddress: data[i].tenantAddress, community: data[i].community, address: data[i].address, rightType: data[i].rightType, rentTypeDesc: data[i].rentTypeDesc, tenantName: data[i].tenantName }) %>'>
    <div class="item-status-wrapper">
    <% if (data[i].currentType == 0) { %>
        <% if(data[i].status == 14) { %>
            <%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                <h3>已生效</h3>
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                <h3>待生效</h3>
            <% } %>
        <% } %>
        <% if(data[i].status == 10 && data[i].type == 1) { %>
            <h3 data-detail="false">合同录入中</h3>
        <% } %>
        <% if(data[i].status == 10 && data[i].type == 3) { %>
            <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
            <% if(data[i].isAck != 1) { %>
                <a href="javascript:;" class="btn light btn-underline" data-fun="o_confirm">确认合同</a>
            <% } %>
        <% } %>
        <% if(data[i].status == 0 && data[i].initiate == 1) { %>
            <h3 data-detail="false">合同录入中</h3>
            <a href="javascript:;" class="btn gray btn-underline cancel-sign" data-fun="t_cancel">取消签约</a>
        <% } %>
        <% if(data[i].status == 0 && data[i].initiate == 3) { %>
                <h3 data-detail="false">待确认</h3>
                <a href="javascript:;" class="btn gray light" data-fun="t_confirm">确认合同</a>
        <% } %>

        <% if(data[i].status == 7 && (data[i].initiate == 1 || data[i].initiate == 2)) { %>
            <h3 data-detail="false">已取消签约</h3>
        <% } %>

        <% if(data[i].status == 1 && (data[i].initiate == 3 || data[i].initiate == 2 || data[i].initiate == 0)) { %>
            <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                <% if(data[i].isAck != 1) { %>
                    <a href="javascript:;" class="btn gray light" data-fun="t_confirm">确认合同</a>
                <% } %>
            <% }else{ %>
                <h3>待确认</h3>
                <a href="javascript:;" class="btn gray light" data-fun="t_confirm">确认合同</a>
            <% } %>
        <% } %>

        <% if((data[i].status == 2 || data[i].status == 1) && data[i].initiate == 1) { %>
            <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
            <% }else{ %>
                <h3>待房东确认</h3>
            <% } %>
        <% } %>

        <% if(data[i].status == 7 && (data[i].initiate == 3 || data[i].initiate == 0)) { %>
        
            <%if(data[i].recordStatus == 4){%>
                <h3>已失效</h3>
            <%}else {%>
                <h3 data-detail="false">已失效</h3>
            <%}%> 

        <% } %>

        <% if(data[i].status == 9) { %>
            <!-- 加待生效1 -->
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%> </h3>
            <% if(data[i].evictStatus) { %>
            <span>退租失败</span>
            <% } %>
            <% if(data[i].filling) { %>
                <% if(!data[i].firstPay && !data[i].isC2B) { %>
                <a href="javascript:;" class="btn gray light" data-fun="pay" data-type="0" data-id="<%=data[i].id %>">支付房租</a>
                <% } else if (!data[i].isC2B) { %>
                <a href="javascript:;" class="btn gray light" data-fun="bill" data-type="0" data-id="<%=data[i].id %>">查看账单</a>
                <% } %>
            <% } %>
        <% } %>

        <% if(data[i].status == 4) { %>
         <!-- 加待生效2 -->
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%> </h3>
            <% if(data[i].evictStatus) { %>
            <span>退租失败</span>
            <% } %>
            <% if(!data[i].evictStatus && data[i].filling) { %>
                <% if(!data[i].firstPay && !data[i].isC2B) { %>
                <a href="javascript:;" class="btn gray light" data-fun="pay" data-type="0" data-id="<%=data[i].id %>">支付房租</a>
                <% } else if (!data[i].isC2B) { %>
                <a href="javascript:;" class="btn gray light" data-fun="bill" data-type="0" data-id="<%=data[i].id %>">查看账单</a>
                <% } %>
            <% } %>
        <% } %>

        <% if(data[i].status == 6 && data[i].initiate == 0) { %>
         <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%> </h3>
        <% } %>

        <% if(data[i].status == 6 && (data[i].initiate == 2 || data[i].initiate == 1)) { %>
         <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%><span>退租申请成功</span> </h3>
        <% } %>
        
        <% if(data[i].status == 8 && data[i].initiate == 1) { %>
         <!-- 加待生效3 -->
        <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%> <span>退租申请中</span> </h3>
            <% } %>

        <% if(data[i].status == 8 && data[i].initiate == 2) { %>
         <!-- 加待生效4 -->
       <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><span>退租待确认</span> </h3>
        <a href="javascript:;" class="btn gray light" data-fun="t_confirmCancel">确认退租</a>
        <a href="javascript:;" class="btn gray border" data-fun="t_rejectCancel">拒绝退租</a>
        <% } %>
    <% } else { %>
        <% if(data[i].status == 14 && data[i].currentType == 3) { %>
            <h3>退租待确认</h3>
            <% if(data[i].isAck != 1) { %>
                <a href="javascript:;" class="btn light btn-underline" data-fun="o_confirmCancel">确认退租</a>
                <a href="javascript:;" class="btn gray btn-underline" data-fun="o_rejectCancel">拒绝退租</a>
            <% } %>
        <% } %>

        <% if(data[i].status == 10 && data[i].currentType == 1 && data[i].type != 1) { %>
            <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
            <% if(data[i].isAck != 1) { %>
                <a href="javascript:;" class="btn light btn-underline" data-fun="o_confirm">确认合同</a>
            <% } %>
        <% } %>

        <% if(data[i].type != 3) { %>
            <% if(data[i].status == 10 && (data[i].currentType == 1 || data[i].currentType == 3)) { %>
                <h3>待确认</h3>
                <% if(data[i].isAck != 1 && (data[i].type == 3 || (data[i].type == 1 && data[i].currentType != 1) )) { %>
                    <a href="javascript:;" class="btn light btn-underline" data-fun="o_confirm">确认合同</a>
                <% } %>
            <% } %>
            <% if(data[i].status == 0 && data[i].initiate == 1) { %>
                <h3 data-detail="false">合同待录入</h3>
                <a href="javascript:;" class="btn light btn-underline" data-fun="o_add">录入合同</a>
                <a href="javascript:;" class="btn gray btn-underline" data-fun="o_reject">拒绝签约</a>
            <% } %>
            <% if(data[i].status == 7 && (data[i].initiate == 1 || data[i].initiate == 2)) { %>
                <h3 data-detail="false">已取消签约</h3>
            <% } %>
            <% if(data[i].status == 1 && (data[i].initiate == 3 || data[i].currentType == 3 || data[i].currentType == 1)) {%>
                <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                    <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                <% }else{ %>
                    <h3>待租客确认</h3>
                <% } %>
            <% } %>
            <% if(data[i].status == 7 && (data[i].initiate == 0 || data[i].initiate == 3)) { %>
            <%if(data[i].recordStatus == 4){%>
                <h3>已失效</h3>
            <%}else {%>
                <h3 data-detail="false">已失效</h3>
            <%}%> 
            <% } %>
            
            <% if(data[i].status == 9) { %>
                <!-- 加待生效5 -->
                <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                    已生效
                <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                    待生效
                <%}%> </h3>
                <% if(data[i].evictStatus) { %>
                <span>退租失败</span>
                <% } %>
            <% } %>
            <% if(data[i].status == 4) { %>
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><% if(data[i].evictStatus) { %>
                    <span>退租失败</span>
                <% } %> </h3>
            <% } %>
            <% if(data[i].status == 6 && data[i].initiate == 0) { %>
            <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%> </h3>
            <% } %>

            <% if(data[i].status == 8 && data[i].initiate == 1) { %>
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><span>退租申请中</span> </h3>
                <a href="javascript:;" class="btn gray light" data-fun="o_confirmCancel">确认退租</a>
                <a href="javascript:;" class="btn gray border" data-fun="o_rejectCancel">拒绝退租</a>
            <% } %>

            <% if(data[i].status == 8 && data[i].initiate == 2) { %>
           <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><span>退租待确认</span> </h3>
            <% } %>

            <% if(data[i].status == 6 && (data[i].initiate == 2 || data[i].initiate == 1)) { %>

            <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%><span>退租申请成功</span> </h3>
            <% } %>
            
        <% } else { %>

            <% if(data[i].status == 0 && data[i].initiate == 1) { %>
            <h3 data-detail="false">合同录入中</h3>
            <% } %>

            <% if(data[i].status == 7 && (data[i].initiate == 1 || data[i].initiate == 2)) { %>
            <h3 data-detail="false">已取消签约</h3>
            <% } %>

            <% if(data[i].status == 10 && data[i].currentType == 3) { %>
                <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                    <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                <% } %>
                <% if(data[i].isAck != 1) { %>
                    <a href="javascript:;" class="btn light btn-underline" data-fun="o_confirm">确认合同</a>
                <% } %>
            <% } %>

            <% if(data[i].status == 1 && data[i].initiate == 3) {%>
                <% if(data[i].crpStatus == 1 && data[i].type == 3) {%>
                    <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                    <% if(data[i].isAck != 1) { %>
                        <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
                    <% } %>
                <% }else{ %>
                    <h3>待确认</h3>
                    <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
                <% } %>
            <% } %>

            <% if(data[i].status == 0 && data[i].initiate == 3) {%>
                <h3>待确认</h3>
                <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
            <% } %>

            <% if(data[i].status == 7 && (data[i].initiate == 3 || data[i].initiate == 0)) { %>
            <%if(data[i].recordStatus == 4){%>
                <h3>已失效</h3>
            <%}else {%>
                <h3 data-detail="false">已失效</h3>
            <%}%> 
            <% } %>

            <% if(data[i].status == 2 && data[i].initiate == 1) {%>
                <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                    <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                    <% if(data[i].isAck != 1) { %>
                        <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
                    <% } %>
                <% }else{ %>
                    <h3>待确认</h3>
                    <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
                <% } %>
            <% } %>

            <% if(data[i].status == 1 && data[i].initiate == 2) {%>
                <% if(data[i].crpStatus == 1 && data[i].type == 3) { %>
                    <h3><%= verifyCrpArr[data[i].codeStatus][data[i].currentType] %></h3>
                    <% if(data[i].isAck != 1) { %>
                        <a href="javascript:;" class="btn gray light" data-fun="o_confirm">确认合同</a>
                    <% } %>
                <% }else{ %>
                    <h3>待租客确认</h3>
                <% } %>
            <% } %>

            <% if(data[i].status == 9) { %>
                <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                    已生效
                <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                    待生效
                <%}%> </h3>
                <% if(data[i].evictStatus) { %>
                <span>退租失败</span>
                <% } %>
            <% } %>
            
            <% if(data[i].status == 4) { %>
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><% if(data[i].evictStatus) { %>
                    <span>退租失败</span>
                <% } %> </h3>

            <% } %>

            <% if(data[i].status == 6 && data[i].initiate == 0) { %>
            <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%> </h3>
            <% } %>

            <% if(data[i].status == 8 && data[i].initiate == 1) { %>
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><span>退租申请中</span> </h3>
            <% if(data[i].crpStatus == 1) { %>
                <% if(data[i].isAck != 1) { %>
                    <a href="javascript:;" class="btn gray light" data-fun="o_confirmCancel">确认退租</a>
                    <a href="javascript:;" class="btn gray border" data-fun="o_rejectCancel">拒绝退租</a>
                <% } %>
            <%}else{%>
                <a href="javascript:;" class="btn gray light" data-fun="o_confirmCancel">确认退租</a>
                <a href="javascript:;" class="btn gray border" data-fun="o_rejectCancel">拒绝退租</a>
            <% } %>
            <% } %>

            <% if(data[i].status == 8 && data[i].initiate == 2) { %>
            <h3><%if(data[i].recordStatus == 3 || data[i].recordStatus == 6 || data[i].recordStatus == 7 || data[i].recordStatus == 8){%>
                已生效
            <%}else if(data[i].recordStatus == 1 || data[i].recordStatus == 2){%>
                待生效
            <%}%><span>退租待确认</span> </h3>
            <% } %>

            <% if(data[i].status == 6 && (data[i].initiate == 2 || data[i].initiate == 1)) { %>
            <h3><%if(data[i].recordStatus == 5){%>
                已失效
            <%}else{%>
                已结束
            <%}%><span>退租申请成功</span> </h3>
            <% } %>
        <% } %>
    <% } %>
    </div>
    <dl class="item-dl-wrapper clearfix">
        <dt class="house-img-wrapper">
            <% if (data[i].housePicKey && data[i].housePicExt) { %>
            <img src="<%= imgUrl + '/' + data[i].housePicKey+'/900x675.'+data[i].housePicExt %>" alt="">
            <% } else { %>
            <img src="<%= defaultUrl %>" alt="">
            <% } %>
        </dt>
        <dd class="house-info-wrapper clearfix">
            <div class="house-info-detail">
                <p class="house-name"><%= data[i].community  %></p>
                <p class="house-area">
                <%= data[i].rentTypeDesc  %> · <%= data[i].huxing  %> · <%= data[i].space / 100 %>㎡
                </p>
                <p class="house-addr">
                    <%= data[i].location  %>
                    <%= data[i].address %>
                </p>
                <!-- <p class="house-tags">
                    <span>独立阳台</span>
                </p>
                <p class="is-auth">
                    <i class="safe-bg"></i>
                    认证房东
                </p> -->
                 <% if(data[i].recordStatus && data[i].recordStatus!='' && data[i].recordStatus!=1 && data[i].recordStatus!=2){ %>
                 <p class="is-ba">
                 <% if(data[i].recordStatus==3){ %>
                    <i class="icon-ba icon-bacg"></i>已备案
                 <% }else if(data[i].recordStatus==4) {%>
                    <i class="icon-ba icon-basb"></i>备案失败
                 <% }else if(data[i].recordStatus==5) {%>
                    <i class="icon-ba icon-zxcg"></i>已注销
                 <% }else if(data[i].recordStatus==6) {%>
                    <i class="icon-ba icon-bacg"></i>已备案
                 <% } %>
                </p>
                <% } %>
                <div class="how-many">
                    <p class="price">
                        <strong>
                            <%= data[i].mouthPrice/100 %>
                        </strong>
                        <span>元/月</span>
                    </p>
                </div>
            </div>
        </dd>
    </dl>
</div>
<% } %>