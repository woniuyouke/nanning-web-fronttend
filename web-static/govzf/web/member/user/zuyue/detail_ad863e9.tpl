<%
var payType = {
    1: '月付',
    2: '2月付',
    3: '季付',
    4: '4月付',
    5: '5月付',
    6: '半年付',
    7: '7月付',
    8: '8月付',
    9: '9月付',
    10: '10月付',
    11: '11月付',
    12: '年付',
    13: '其他'
}
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
<div class="title-wrapper">
    合同详情
    <span class="contract-number">合同编号: <%= data.contractNo %></span>
</div>
<div class="detail-wrapper">
    <dl class="house-info clearfix">
        <dt class="house-img">
            <% if (data.housePicKey && data.housePicExt) { %>
                <img src="<%= imgUrl + '/' + data.housePicKey + '/900x675.' + data.housePicExt %>" alt="">
            <% } else { %>
                <img src="<%= defaultUrl %>" alt="">
            <% } %>
        </dt>
        <dd class="house-desc">
            <p class="name">
                <%= data.houseName %>
            </p>
            <p class="addr">
                <i class="icon iconfont icon-search_location"></i>
                <%= data.address %>
            </p>
            <p class="price">
                <%= data.mouthPrice / 100 %>元/月 <%= payType[data.paymentCycle] %>
            </p>
            <div class="status-wrapper">
                <% if (data.currentType == 0) { %>
                    <% if(data.status == 10 && data.type == 1) { %>
                        <div class="status noneffective">合同录入中</div>
                    <% } %>
                    <% if(data.status == 1 && (data.initiate == 3 || data.initiate == 2 || data.initiate == 0)) { %>
                        <% if(data.crpStatus == 1 && data.type == 3) { %>
                            <div class="status noneffective"><%= verifyCrpArr[data.codeStatus][data.currentType] %></div>
                        <% }else{ %>
                            <div class="status noneffective">
                                待确认
                            </div>
                        <% } %>
                    <% } %>
                    <% if(data.status == 10 && data.type == 3) { %>
                        <div class="status noneffective"><%= verifyCrpArr[data.codeStatus][data.currentType] %></div>
                    <% } %>
                    <% if(data.status == 0 && data.initiate == 3) { %>
                        <div class="status noneffective">
                            待确认
                        </div>
                    <% } %>

                    <% if((data.status == 2 || data.status == 1) && data.initiate == 1) { %>
                        <% if(data.crpStatus == 1 && data.type == 3) { %>
                            <div class="status noneffective"><%= verifyCrpArr[data.codeStatus][data.currentType] %></div>
                        <% }else{ %>
                            <div class="status noneffective">待房东确认</div>
                        <% } %>
                    <% } %>

                    <% if(data.status == 9 || data.status == 14) { %>
                        <% if(data.evictStatus && data.status == 9) { %>
                            <span>退租失败</span>
                        <% } %>

                        <div class="status">
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                已生效
                            <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                待生效
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.filling) { %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                                <% } else if(!data.isC2B) { %>
                                <a href="javascript:;" class="btn light" data-fun="pay" data-type="0" data-id="<%=data.id %>">支付房租</a>
                                <% } %>
                            <% } %>
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="房东">申请退租</a>
                            <% } %>
                        </div>
                    <% } %>
                    <% if(data.status == 4) { %>
                        <% if(data.evictStatus) { %>
                            <span>退租失败</span>
                        <% } %>
                        <div class="status">
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                已生效
                            <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                待生效
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='
                    <%= JSON.stringify(data) %>
                    '>南宁市租赁备案证明</a>
                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.filling) { %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                                <% } else if(!data.isC2B) { %>
                                <a href="javascript:;" class="btn light" data-fun="pay" data-type="0" data-id="<%=data.id %>">支付房租</a>
                                <% } %>
                            <% } %>
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="房东">申请退租</a>
                            <% } %>
                        </div>
                    <% } %>

                    <% if(data.status == 6 && data.initiate == 0) { %>
                        <div class="status noneffective">
                            <% if(data.recordStatus == 5){ %>
                                已失效
                            <% }else{ %>
                                已结束
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.firstPay) { %>
                            <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                            <% } %>
                        </div>
                    <% } %>


                    <% if(data.status == 7 ) { %>
                        <div class="status noneffective">
                            已失效
                        </div>
                        <div class="btn-wrapper">
                            <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% if (data.firstPay) { %>
                            <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                            <% } %>
                        </div>
                    <% } %>

                    <% if(data.status == 8 && data.initiate == 1) { %>
                        <span>退租申请中</span>
                        <div class="status">
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                已生效
                            <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                待生效
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>

                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.firstPay) { %>
                            <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                            <% } %>
                        </div>
                    <% } %>

                    <% if(data.status == 6 && (data.initiate == 2 || data.initiate == 1)) { %>
                        <span>退租申请成功</span>
                        <div class="status noneffective">
                            <% if(data.recordStatus == 5){ %>
                                已失效
                            <% }else{ %>
                                已结束
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.firstPay) { %>
                            <a href="javascript:;" class="btn light" data-fun="bill" data-type="0" data-id="<%=data.id %>">查看账单</a>
                            <% } %>
                        </div>
                    <% } %>

                    <% if(data.status == 8 && data.initiate == 2) { %>
                        <span>退租待确认</span>
                        <div class="status">
                            <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                已生效
                            <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                待生效
                            <% } %>
                        </div>
                        <div class="btn-wrapper">
                            <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                            <% } else { %>
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            <% } %>
                            <% if (data.firstPay) { %>
                            <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                            <% } %>

                            <a href="javascript:;" class="btn light" data-fun="confirm-cancel">确认退租</a>
                            <a href="javascript:;" class="btn border" data-fun="reject-cancel">拒绝退租</a>
                        </div>
                    <% } %>

                <% } else { %>
                    <% if (data.type != 3) { %>
                        <% if(data.status == 10 && (data.currentType == 1 || data.currentType == 3)) { %>
                            <div class="status noneffective">
                                待确认
                            </div>
                        <% } %>

                        <% if(data.status == 1 && data.initiate == 3) { %>
                            <div class="status noneffective">
                                待确认
                            </div>
                        <% } %>
                        <% if(data.status == 9) { %>
                            <% if(data.evictStatus) { %>
                                <span>退租失败</span>
                            <% } %>
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if(data.currentType != 3) { %>
                                    <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                        <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="租客">申请退租</a>
                                    <% } %>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 4) { %>
                            <% if(data.evictStatus) { %>
                                <span>退租失败</span>
                            <% } %>
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if(data.currentType != 3) { %>
                                    <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                        <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="租客">申请退租</a>
                                    <% } %>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 6 && data.initiate == 0) { %>
                            <!-- <div class="status noneffective">
                                已结束
                            </div> -->
                            <div class="status noneffective">
                                <% if(data.recordStatus == 5){ %>
                                    已失效
                                <% }else{ %>
                                    已结束
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 7 ) { %>
                            <!-- <div class="status noneffective">已结束</div> -->
                            <div class="status noneffective">
                                已失效
                            </div>
                            <div class="btn-wrapper">
                                <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                            </div>
                        <% } %>

                        <% if(data.status == 14 && data.currentType == 3) { %>
                            <span>退租待确认</span>
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                                <% if(data.isAck != 1) { %>
                                    <a href="javascript:;" class="btn light" data-fun="confirm-cancel">确认退租</a>
                                    <a href="javascript:;" class="btn border" data-fun="reject-cancel">拒绝退租</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 8 && data.initiate == 1) { %>
                            <span>退租申请中</span>
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>

                                <a href="javascript:;" class="btn light" data-fun="confirm-cancel">确认退租</a>
                                <a href="javascript:;" class="btn border" data-fun="reject-cancel">拒绝退租</a>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 8 && data.initiate == 2) { %>
                            <span>退租待确认</span>
                            <!-- <div class="status">
                                已生效
                            </div> -->
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 6 && (data.initiate == 2 || data.initiate == 1)) { %>
                            <span>退租申请成功</span>
                            <!-- <div class="status noneffective">已结束</div> -->
                            <div class="status noneffective">
                                <% if(data.recordStatus == 5){ %>
                                    已失效
                                <% }else{ %>
                                    已结束
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>

                            </div>
                        <% } %>

                    <% } %>
                    
                    <% if(data.status == 1 && (data.currentType == 3 || data.currentType == 1)) { %>
                        <% if(data.crpStatus == 1 && data.type == 3) { %>
                            <div class="status noneffective"><%= verifyCrpArr[data.codeStatus][data.currentType] %></div>
                        <% }else if(data.initiate == 2 || data.initiate == 3 || data.initiate == 0){ %>
                            <div class="status noneffective">
                                待租客确认
                            </div>
                        <% } %>
                    <% } %>

                    <% if (data.type == 3) { %>
                        <% if(data.status == 1 && data.initiate == 2 && data.crpStatus != 1) { %>
                            <div class="status noneffective">
                                待租客确认
                            </div>
                        <% } %>

                        <% if((data.status == 0 && data.initiate == 3) || (data.status == 2 && data.initiate == 1)) { %>
                            <div class="status noneffective">
                                待确认
                            </div>
                        <% } %>

                        <% if(data.status == 10 && data.currentType == 3 && data.crpStatus == 1) { %>
                            <div class="status noneffective"><%= verifyCrpArr[data.codeStatus][data.currentType] %></div>
                        <% } %>

                        <% if(data.status == 9) { %>
                            <% if(data.evictStatus) { %>
                                <span>退租失败</span>
                            <% } %>
                            <!-- <div class="status">
                                已生效
                            </div> -->
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if(data.currentType != 3) { %>
                                    <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                        <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="租客">申请退租</a>
                                    <% } %>
                                <% } %>
                                <% if (data.firstPay) { %>
                                    <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 6 && data.initiate == 0) { %>
                            <!-- <div class="status noneffective">
                                已结束
                            </div> -->
                            <div class="status noneffective">
                                <% if(data.recordStatus == 5){ %>
                                    已失效
                                <% }else{ %>
                                    已结束
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 8 && data.initiate == 1) { %>
                            <span>退租申请中</span>
                            <!-- <div class="status">已生效</div> -->
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>

                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                                <% if (data.isAck != 1) { %>
                                    <a href="javascript:;" class="btn light" data-fun="confirm-cancel">确认退租</a>
                                    <a href="javascript:;" class="btn border" data-fun="reject-cancel">拒绝退租</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 8 && data.initiate == 2) { %>
                            <span>退租待确认</span>
                            <!-- <div class="status">
                                已生效
                            </div> -->
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>

                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 14 && data.currentType == 3) { %>
                            <span>退租待确认</span>
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                                <% if(data.isAck != 1) { %>
                                    <a href="javascript:;" class="btn light" data-fun="confirm-cancel">确认退租</a>
                                    <a href="javascript:;" class="btn border" data-fun="reject-cancel">拒绝退租</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 6 && (data.initiate == 1 || data.initiate == 2)) { %>
                            <span>退租申请成功</span>
                            <!-- <div class="status noneffective">已结束</div> -->
                            <div class="status noneffective">
                                <% if(data.recordStatus == 5){ %>
                                    已失效
                                <% }else{ %>
                                    已结束
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>
                                <% if (data.firstPay) { %>
                                <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                            </div>
                        <% } %>

                        <% if(data.status == 4) { %>
                            <% if (data.evictStatus) { %>
                                <span>退租失败</span>
                            <% } %>
                            <!-- <div class="status">已生效</div> -->
                            <div class="status">
                                <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                    已生效
                                <% }else if(data.recordStatus == 1 || data.recordStatus == 2){ %>
                                    待生效
                                <% } %>
                            </div>
                            <div class="btn-wrapper">
                                <% if (data.certificationAttachment && (data.recordStatus == 3 || data.recordStatus == 6)) { %>
                                    <a href="javascript:;" class="btn light" data-fun="beian" data-obj='<%= JSON.stringify(data) %>'>南宁市租赁备案证明</a>
                                <% } else { %>
                                    <a href="javascript:;" class="btn border bg-disabled">南宁市租赁备案证明</a>
                                <% } %>

                                <% if (data.firstPay) { %>
                                    <a href="javascript:;" class="btn light" data-fun="bill" data-type="1" data-id="<%=data.id %>">查看账单</a>
                                <% } %>
                                <% if(data.currentType != 3) { %>
                                    <% if(data.recordStatus == 3 || data.recordStatus == 6 || data.recordStatus == 7 || data.recordStatus == 8){ %>
                                        <a href="javascript:;" class="btn border" data-fun="apply-cancel" data-to="租客">申请退租</a>
                                    <% } %>
                                <% } %>
                            </div>
                        <% } %>

                    <% } %>
                <% } %>
            </div>
        </dd>
    </dl>
    <div class="content-wrapper">
        <h3 class="tit">出租方信息</h3>
        <ul class="wrapper clearfix">
            <%if(data.houseType != 2 && data.houseType!= 5){%>
                <h3 class="tit">权利人</h3>
            <% } %>
            <li class="item">
                <% if(data.type == 2) { %>
                    <span class="left-label">企业名称</span>
                <% } else { %>
                    <span class="left-label">名称</span>
                <% } %>
                <%= data.ownerName %>
            </li>
            <li class="item">
                <span class="left-label">联系电话</span>
                <%= data.ownerPhone %>
            </li>
            <li class="item">
                <span class="left-label">证件类型</span>
                <% if(data.ownerCardType == 1) { %>
                    <span class="left-label">居民身份证</span>
                <% } else { %>
                    <span class="left-label">营业执照号</span>
                <% } %>
            </li>
            <li class="item">
                <span class="left-label">证件号码</span>
                <%= data.ownerIdentity %>
            </li>

            <li class="item">
                <span class="left-label">地址</span>
                <%= data.ownerAddress %>
            </li>
        </ul>

        <% if(data.crpStatus == 1 && data.houseType != 2 && data.houseType!= 5){ %>
            <% data['crpInfo'].forEach(function(item, index){ %>
                <h3 class="tit">共有权利人<%= index + 1 %></h3>
                <ul class="wrapper clearfix">

                    <li class="item">
                        <span class="left-label">名称</span>
                        <%= item.name %>
                    </li>
                    <li class="item">
                        <span class="left-label">证件类型</span>
                        <span class="left-label">居民身份证</span>

                    </li>
                    <li class="item">
                        <span class="left-label">证件号码</span>
                        <%= item.idcard %>
                    </li>
                    <li class="item">
                        <span class="left-label">联系电话</span>
                        <%= item.mobile %>
                    </li>
                </ul>
            <% }) %>
        <% }
        %>

        <h3 class="tit">承租方信息</h3>
        <ul class="wrapper clearfix">
            <li class="item">
                <span class="left-label">姓名</span>
                <%= data.tenantName %>
            </li>
            <li class="item">
                <span class="left-label">联系电话</span>
                <%= data.tenantPhone %>
            </li>
            <li class="item">
                <span class="left-label">证件类型</span>
                居民身份证
            </li>
            <li class="item">
                <span class="left-label">证件号码</span>
                <%= data.tenantIdentity %>
            </li>
            <li class="item">
                <span class="left-label">地址</span>
                <%= data.tenantAddress %>
            </li>
        </ul>
        <% if (data.type == 3) { %>
            <h3 class="tit">中间人信息</h3>
            <ul class="wrapper clearfix">
                <li class="item">
                    <span class="left-label">姓名</span>
                    <%= data.introducerName %>
                </li>
                <li class="item">
                    <span class="left-label">手机号</span>
                    <%= data.introducerPhone %>
                </li>
                <li class="item">
                    <span class="left-label">身份证号</span>
                    <%= data.introducerCard %>
                </li>
            </ul>
        <% } %>
        <ul class="wrapper clearfix">
            <h3 class="tit">租约信息</h3>
            <li class="item">
                <span class="left-label">租期</span>
                <%= data.tenancyBegin %> - <%= data.tenancyEnd %>
            </li>
            <li class="item">
                <span class="left-label">租金</span>
                <%= data.rentFee ? data.rentFee / 100 : '' %>元/月
            </li>
            <li class="item">
                <span class="left-label">付款周期</span>
                <%= payType[data.paymentCycle] %>
            </li>

            <li class="item">
                <span class="left-label">押金</span>
                <%= data.guarantee ? data.guarantee / 100 : '' %>元
            </li>
        </ul>
        <ul class="wrapper clearfix">
            <h3 class="tit">房屋信息</h3>
            <li class="item">
                <span class="left-label">房屋坐落</span>
                <%= data.houseLocation %>
            </li>
            <li class="item">
                <span class="left-label">建筑面积</span>
                <%= data.buildSpace / 100 %>㎡
            </li>
        </ul>
        <% if(data.recordStatus && data.recordStatus != '' && (data.recordStatus == 3 || data.recordStatus == 4 || data.recordStatus == 5 || data.recordStatus == 6 || data.recordStatus == 7)){ %>
            <ul class="wrapper clearfix">
                <h3 class="tit">备案信息</h3>
                <div class="is-ba">备案状态:
                    <% if(data.recordStatus == 3) { %>
                        已备案 &emsp;&emsp; 备案编号:&ensp;<%= data.recordNo %>
                    <% }else if(data.recordStatus == 4){ %>
                        备案失败 &emsp;&emsp; <span style="color:red">失败原因: <%= data.recordRemark %></span>
                    <% }else if(data.recordStatus == 5){ %>
                        已注销
                    <% }else if(data.recordStatus == 6){ %>
                        已备案 &emsp;&emsp; 备案编号:&ensp;<%= data.recordNo %>
                    <% }else if(data.recordStatus == 7){ %>
                        注销中 &emsp;&emsp; 备案编号:&ensp;<%= data.recordNo %>
                    <% } %>
                </div>
            </ul>
        <% } %>

        <% if(data.pdfKeyExt){ %>
            <ul class="wrapper clearfix">
                <a class="down-contract"
                   href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                   class="" target="_blank">
                    查看合同正本
                </a>
            </ul>
        <% } %>

    </div>
    <% if((data.currentType == 0 && (data.status == 1 || data.status == 10) && (data.initiate == 0 || data.initiate == 3 || data.initiate == 2)) || (data.currentType == 0 && data.status == 0 && data.initiate == 3)) { %>
        <!-- 个人房源 和 中介房源 租客确认  -->

        <div class="upload-wrapper">


            <p class="form-row">
                <label class="left-label w-left-label required">是否使用CA电子签章</label>
                <span class="pretty-radio-wrapper">
                    <label for="e_signature1" class="iconfont">
                        <span class="pretty-radio"></span>
                        <input type="radio" value="1" id="e_signature1" name="e_signature"/>
                            是
                    </label>
                    <label for="e_signature2" class="iconfont">
                        <span class="pretty-radio"></span>
                        <input type="radio" value="0" id="e_signature2" name="e_signature"/>
                        否
                    </label>
                </span>
            </p>


            <div class="row clearfix upload-msg" id="contractSignature">
                <p id="ca-warning-tip" class="tips warning-tip"><i class="iconfont icon-alert_failure"></i>确认合同前，请先下载合同并在双方签字确认后再上传合同签字页!<span
                            class="close-btn iconfont icon-close_ic" id="closeTips"></span></p>
                <div class="contain-left clearfix">
                    <label class="common-label"><span class="required">*</span>合同签字页图片</label>
                </div>
                <div class="contain-right clearfix">
                    <a href="javascript:;" id="selectCredentialsImg" class="upload">点此上传</a>
                    <input type="file" class="hidden-field" id="selectCredentialsImgInput" multiple="multiple">
                </div>
                <div id="credentials-img-uploader" class="image-wrapper clearfix">

                </div>
            </div>
            <div class="confirm-wrapper">
            <span class="checkbox icon iconfont icon-checkbox_selected">
            </span>
                我已认真阅读并确认
                <% if(data.pdfKeyExt){ %>
                    <a href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                       class="" target="_blank">《房屋租赁合同》</a>
                <% } %>
            </div>
        </div>
        <% if((data.isAck != 1 && data.crpStatus == 1) || data.crpStatus != 1) { %>
            <div class="dqr">
                <a href="javascript:;" class="btn confirm-contract" id="r_confirm">确认合同</a>
                <a href="javascript:;" class="btn cancel-contract" id="r_cancel">拒绝合同</a>
            </div>
        <% } %>
    <% } else if (data.currentType == 1 && data.status == 0 && data.initiate == 3) { %>
        <!-- 中介房源 租客未确认 房东确认 -->
        <div class="confirm-wrapper">
        <span class="checkbox icon iconfont icon-checkbox_selected">
        </span>
            我已认真阅读并确认
            <% if(data.pdfKeyExt){ %>
                <a href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                   class="" target="_blank">《房屋租赁合同》</a>
            <% } %>
        </div>
        <div class="dqr">
            <a href="javascript:;" class="btn confirm-contract" id="o_confirm">确认合同</a>
            <a href="javascript:;" class="btn cancel-contract" id="o_cancel">拒绝合同</a>
        </div>
    <% } else if (data.currentType == 1 && data.type == 3 && (data.status == 2 || data.status == 1 || data.status == 10) && (data.initiate == 1 || data.initiate == 3)) { %>
        <!-- 中介房源 租客已确认 房东确认 -->
        <div class="confirm-wrapper">
        <span class="checkbox icon iconfont icon-checkbox_selected">
        </span>
            我已认真阅读并确认
            <% if(data.pdfKeyExt){ %>
                <a href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                   class="" target="_blank">《房屋租赁合同》</a>
            <% } %>
        </div>
        <% if((data.isAck != 1 && data.crpStatus == 1) || data.crpStatus != 1) { %>
            <div class="dqr">
                <a href="javascript:;" class="btn confirm-contract" id="o_confirm">确认合同</a>
                <a href="javascript:;" class="btn cancel-contract" id="o_cancel">拒绝合同</a>
            </div>   
        <% } %> 
    <% } else if (data.currentType == 3 && data.status == 0 && data.initiate == 3 && data.isAck != 1) { %>
        <!-- 中介房源 租客未确认 共有人确认 -->
        <div class="confirm-wrapper">
        <span class="checkbox icon iconfont icon-checkbox_selected">
        </span>
            我已认真阅读并确认
            <% if(data.pdfKeyExt){ %>
                <a href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                   class="" target="_blank">《房屋租赁合同》</a>
            <% } %>
        </div>
        <div class="dqr">
            <a href="javascript:;" class="btn confirm-contract" id="g_confirm">确认合同</a>
            <a href="javascript:;" class="btn cancel-contract" id="g_cancel">拒绝合同</a>
        </div>
    <% } else if (data.currentType == 3 && (data.type == 1 || data.type == 3) && (data.status == 2 || data.status == 1 || data.status == 10) && data.isAck != 1) { %>
        <!-- 中介房源 租客已确认 共有人确认 -->
        <div class="confirm-wrapper">
        <span class="checkbox icon iconfont icon-checkbox_selected">
        </span>
            我已认真阅读并确认
            <% if(data.pdfKeyExt){ %>
                <a href="/web/file/secret/<%= JSON.parse(data.pdfKeyExt).key + '.' + JSON.parse(data.pdfKeyExt).ext %>"
                   class="" target="_blank">《房屋租赁合同》</a>
            <% } %>
        </div>
        <div class="dqr">
            <a href="javascript:;" class="btn confirm-contract" id="g_confirm">确认合同</a>
            <a href="javascript:;" class="btn cancel-contract" id="g_cancel">拒绝合同</a>
        </div>
    <% } %>
</div>