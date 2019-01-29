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
    function _getCheckOrderStatus(status) {
        if(!status){
            return "未对账"
        }else {
            return {
                1: "对账成功",
                2: "对账失败"
            }[status]
        }
    }

    /**
     * 将分为单位的金额转换为千分逗号分隔
     * @param {number} money 分为单位的金额
     * @return {number}
     */
    function _convertMoney(money) {
        var _m = (money / 100).toFixed(2);
        return numberHelper.format(_m);
    }
%>
<% if (type == 0 /* 租客 */) { %>
<ul class="serial-list">
    <li class="head-box">
        <h3 class="money">￥<%= _convertMoney(data.payExpense) %></h3>
        <span class="desc">实付金额</span>
    </li>
    <li class="serial-item">
        <span class="item-left">账单类型</span>
        <span class="item-right">
        <% if (data.billOrder == 1) { %>
        租金/押金账单
        <% } else { %>
        租金账单
        <% } %>
        </span>
    </li>
    <li class="serial-item">
        <span class="item-left">房源名称</span>
        <span class="item-right"><%= data.houseName %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">账单编号</span>
        <span class="item-right"><%= data.billNo %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">交易流水号</span>
        <span class="item-right"><%= data.transactionNo %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">支付状态</span>
        <span class="item-right"><%= _payStateInfo(data.status).text %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">付款时间</span>
        <span class="item-right"><%= data.paidTime %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">创建时间</span>
        <span class="item-right"><%= data.createTime %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">修改时间</span>
        <span class="item-right"><%= data.updateTime %></span>
    </li>
</ul>
<% } else if (type == 1  /* 房东 */) { %>
<ul class="serial-list">
    <li class="head-box">
        <h3 class="money">￥<%= _convertMoney(data.payExpense) %></h3>
        <span class="desc">实收金额</span>
    </li>
    <li class="serial-item">
        <span class="item-left">账单类型</span>
        <span class="item-right">
        <% if (data.billOrder == 1) { %>
        租金/押金账单
        <% } else { %>
        租金账单
        <% } %>
        </span>
    </li>
    <li class="serial-item">
        <span class="item-left">房源名称</span>
        <span class="item-right"><%= data.houseName %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">账单编号</span>
        <span class="item-right"><%= data.billNo %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">收款状态</span>
        <span class="item-right"><%= _payStateInfo(data.status).text %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">收款时间</span>
        <span class="item-right"><%= data.paidTime %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">对账状态</span>
        <span class="item-right"><%= _getCheckOrderStatus(data.checkOrderStatus) %></span>
    </li>
    <% if (data.checkOrderStatus && data.checkOrderTime) { %>
    <li class="serial-item">
        <span class="item-left">对账时间</span>
        <span class="item-right"><%= data.checkOrderTime %></span>
    </li>
    <% } %>
    <li class="serial-item">
        <span class="item-left">创建时间</span>
        <span class="item-right"><%= data.createTime %></span>
    </li>
    <li class="serial-item">
        <span class="item-left">修改时间</span>
        <span class="item-right"><%= data.updateTime %></span>
    </li>
</ul>
<% } %>