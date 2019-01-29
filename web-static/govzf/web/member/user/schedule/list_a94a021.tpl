<%
var className = 'over', week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var nowTime = (new Date()).getTime();

if ( type==1 && (list.tenantStatus != 3 && list.tenantStatus != 6 && list.tenantStatus != 7)){
    className = '';
}else if(type==2 && (list.tenantStatus != 3 && list.tenantStatus != 6 && list.tenantStatus != 7)){
    className = '';
};
if(list.tenantStatusDesc == '已结束'){
    className = 'over';
}

var layoutCollocation = { 1:'冰箱',2: "电视机",3: "空调",4: "微波炉",5: "洗衣机",6: "床",7: "宽带",8: "桌子",9: "热水器",10: "衣柜",11: "煤气",12: "沙发",13: "电梯",14: "厨房",15: "浴室",16: "智能门锁",17: "对讲门铃",18: "储物柜",19: "免费WiFi",20: "燃气灶",21: "电磁炉" ,22: "卫生间"};

var _date = new Date(list.reserveDate);
var Y = _date.getFullYear();
var M = (_date.getMonth() + 1) < 10 ? '0' + (_date.getMonth() + 1) : _date.getMonth() + 1;
var D = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate();
var h = _date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours();
var m = _date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes();
var w = _date.getDay();
var imgUrl = list.coverMedia && list.coverMedia.url || '';
var imgKey = imgUrl && imgUrl.split(',')[0] || '';
var imgExt = imgUrl && imgUrl.split(',')[1] || '';
%>

<div class="account-wrapper schedule-wrapper">
    <h2>
        <em class="iconfont icon-search_history"></em>
        <% if(list.reserveDate) { %>
        <%= Y + '-' + M + '-' + D %> <%= week[w] %> <%= h + ':' + m %>
        <% } else { %>
        随时看房
        <% } %>
        <em class="iconfont icon-search_location ml-40"></em>
        <%= list.houseDetail && list.houseDetail.communityAddress || '' %>
        <% if(type==1){ %>
            <span class="status <%= className %>"><%= list.tenantStatusDesc %></span>
        <% }else if(type==2){ %>
            <span class="status <%= className %>"><%= list.tenantStatusDesc %></span>
        <% } %>
    </h2>
    <div class="account-content">
        <p class="tit clearfix">
            <% if(type==1){ %>
                <span class="fl-left"><%= list.contactDesc %>：<%= list.agencyMobile || (list.houseDetail && list.houseDetail.mobile) || '' %></span>
            <% }else if(type==2){ %>
                <span class="fl-left">看房人：<%= list.name || '匿名用户' %>&nbsp;&nbsp;手机：<%= list.mobile|| '' %></span>
            <% } %>

            <% if(list.channel == 'boyu') { %>
            <a href='/web/contract/boyu/jump?target=5&roomTypeId=<%= list.external_number %>' class="fl-right"
               data-id='<%= list.id %>'>取消预约</a>
            <% } else { %>
                <% if(type==1 && (list.tenantStatus == 0 || list.tenantStatus == 1 || list.tenantStatus == 2 || list.tenantStatus == 4 ) && list.tenantStatusDesc != '已结束') { %>
                    <a href='javascript:;' class="fl-right J_cancel_btn" data-id='<%= list.id %>'>取消预约</a>
                <% }else if(type==2 && (list.tenantStatusDesc != '已结束' || list.tenantStatusDesc == '已带看')){ %>
                    <% if( list.tenantStatusDesc == '待看房'){ %>
                        <a href='javascript:;' class="fl-right F_accept_btn" data-id='<%= list.id %>'>确认带看</a>
                    <% }else if(list.tenantStatusDesc == '预约申请中'){ %>
                        <a href='javascript:;' class="fl-right F_cancel_btn" data-id='<%= list.id %>'>取消预约</a>
                    <% }else if(list.tenantStatusDesc == '待确认'){ %>
                        <a href='javascript:;' class="fl-right F_cancel_btn" data-id='<%= list.id %>'>拒绝预约</a>
                        <a href='javascript:;' class="fl-right F_revise_btn mr_10" data-id='<%= list.id %>'>修改时间</a>
                        <a href='javascript:;' class="fl-right F_sure_btn mr_10" data-id='<%= list.id %>'>接受预约</a>
                    <% } %>
                 <% } %>
            <% } %>
        </p>
        <div class="house-every-item">
            <dl class="detail-pic clearfix">
                <dt class="pic">
                    <% if(imgKey) { %>
                    <img class="lazy"
                         data-original="<%= viewUrl %>/<%= imgKey %>/640x360_gov.<%= imgExt %>"
                         src="<%= default_img %>">
                    <% } else { %>
                    <img src="<%= default_img %>">
                    <% } %>
                </dt>
                <dd class="detail clearfix">
                    <div class="detail-left">
                        <p class="title">
                            <a href="/pc/main/detail.id.<%= list.jumpUrl %>.html"><%= list.reserveHouse
                                %></a>
                        </p>

                        <p class="huxing">
                            <% if(list.houseDetail && list.houseDetail.rentType==1){ %>
                            <span>整租</span>
                            <% }else{ %>
                            <span>合租</span>
                            <% } %>&nbsp;·&nbsp;
                            <% if(list.houseLayout){ %>
                            <span><%= list.houseLayout %></span>
                            <% } %>&nbsp;·&nbsp;
                            <%= list.houseDetail && parseFloat(list.houseDetail.space / 100) || '' %>㎡</p>
                        <p class="location">
                            <%= list.houseDetail && list.houseDetail.communityAddress || '' %>
                        </p>
                        <p class="tags clearfix">
                            <% if(list['houseDetail'] && list['houseDetail']['collocation'] && list['houseDetail']['collocation'].length != '0' ){ %>
                                <% list['houseDetail']['collocation'].forEach(function(collocation){ %>
                                <span><%= layoutCollocation[collocation] %></span>
                                <%})%>
                            <% } %>
                        </p>
                        <% if(list.channel=='个人房源'){ %>
                        <p class="fangdong clearfix">
                            <img src="<%= owner_img %>">
                            <span>认证房东</span>
                        </p>
                        <% } %>
                        <div class="detail-right">
                            <p class="price"><strong><%= list.houseDetail && list.houseDetail.rentPrice/100 || ''%></strong><span>元/月</span></p>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</div>