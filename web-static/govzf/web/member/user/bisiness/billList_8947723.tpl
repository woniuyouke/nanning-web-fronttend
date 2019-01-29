<%
    /**
     * 依据账单不同状态返回对应的状态信息。
     * @param state 0-未激活，1-激活，2-已支付，3-逾期，4-支付中，5-支付失败，6-失效。
     * @returns {*}
     */
    function _payStateInfo(state) {
        switch (~~state) {
            case 0:
            case 1:
            case 5:  // 支付失败，C端统一显示“待支付”
                return {
                    stateclass: 'unpay',
                    text: window.curRentType ? '待收款' : '待支付'
                }
            case 2:
                return {
                    stateclass: 'paid',
                    text: window.curRentType ? '已收款' : '已支付'
                }
            case 3:
                return {
                    stateclass: 'unpay',
                    text: window.curRentType ? '待收款' : '待支付',
                    tips: '已逾期，请尽快支付以免影响您的信用',
                }
            case 4:
                return {
                    stateclass: 'paying',
                    text: '支付中'
                }
            case 6:
                return {
                    stateclass: 'paid',
                    text: '失效'
                }
            default:
                return {
                    stateclass: 'unpay',
                    text: window.curRentType ? '待收款' : '待支付'
                }
        }
    }

    //根据totalPage,pageNo 生成分页数据
    function getPageList(totalPage, pageNo) {
        var pageArr = [];
        pageArr.push(pageNo);
        while(pageArr.length < 10) {
            var prev = pageArr[0] - 1;
            var next = pageArr[pageArr.length-1] + 1;
            if (prev >= 1 || next <= totalPage) {
                if (prev >= 1) {
                    pageArr.unshift(prev);
                }
                if (next <= totalPage) {
                    pageArr.push(next);
                }
            } else {
                break;
            }
        }
        return pageArr;
    }

    /**
     * long 型日期转化为 format 格式
     * @param longTime long型日期时间
     * @param format 形如 'yyyy-MM-dd'
     * @returns {*}
     */
    function formatDate(longTime, format) {
        return new Date(longTime || 1000000000000).format(format || 'yyyy-MM-dd')
    }
    Date.prototype.format = Date.prototype.format || function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }

    //生成分页数据
    var pageArr = getPageList(pageTotal, pageNo);
    //判断是否有合同id，如果有添加到querystring
    var sContractId = cid ? '&cid=' + cid : '';

for(var i=0; i<list.length; i++) {
    var listTmp = list[i];
    var curType = list[i].currentType;
    var payState = _payStateInfo(listTmp.status);
%>
<div class="z_item" data-id="<%= listTmp.id %>" data-cid="<%= listTmp.contractId %>">
    <div class='z_title'>
        <% if (!listTmp.isC2B) { %>
            <span><%=payState.text%></span>
        <% } %>
        <%if(listTmp.status!=2&&listTmp.status!=4&&listTmp.status!=6&&listTmp.billRole=='tenant' && !listTmp.isC2B){%>
        <div data-ids="<%= listTmp.ids.join(',') %>" class="payBill">去支付
        <span class="pay-loading">...</span>
        </div>
        <%}%>
        <% if (listTmp.status == 2) { %>
        <a class="serial-btn" data-contractId="<%= listTmp.contractId %>" data-billOrder="<%= listTmp.billOrder %>">流水信息</a>
        <% } %>
    </div>
    <div class='z_body'>
        <div>第<%= listTmp.billOrder %>期账单</div>
        <div class='amount'>￥<%= (listTmp.payExpense/100).toFixed(2) %><% if(!!payState.tips&&listTmp.billRole=='tenant') { %><span class="payTips"><%= payState.tips %></span><% } %></div>
        <div>账单明细：
        <% if(listTmp.billOrder == 1) { %>
        押金￥<%= (listTmp.depositExpense/100).toFixed(2) %>/
        <% } %>
        租金￥<%= (listTmp.expense/100).toFixed(2) %>
        </div>
        <div>账单周期： <%= formatDate(listTmp.scheduleBegin) %> 至 <%= formatDate(listTmp.scheduleEnd) %></div>
        <div>合同编号： <%= listTmp.contractNo || '*******' %></div>
    </div>
</div>
<% } %>
<% if (pageTotal > 1 /* 大于一页才显示分页 */) { %>
<div class="lp-main-page">
    <% if (pageNo > 1) { %>
    <a href="<%= '/pc/user/listOfBills?type='+ type +'&pageNo='+ (pageNo - 1) + sContractId %>" class="page-prev">上一页</a>
    <% } %>
    <% for(var i = 0; i < pageArr.length; i++) { %>
    <a class="page-num <%= pageArr[i] == pageNo ? 'cur' : '' %>" href="<%= '/pc/user/listOfBills?type='+ type +'&pageNo='+ pageArr[i] + sContractId %>">
        <%= pageArr[i] %>
    </a>
    <% } %>
    <% if (pageNo < pageTotal ) { %>
    <a href="<%= '/pc/user/listOfBills?type='+ type +'&pageNo='+ (pageNo + 1) + sContractId %>" class="page-next">下一页</a>
    <% } %>
    <span class='page-total'>共<%= pageTotal %>页</span>
</div>
<% } %>