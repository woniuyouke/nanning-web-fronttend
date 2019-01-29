<% if (data && data.total && Math.ceil(data.total / data.pageSize) > 1) { %>
    <div class="lp-main-page">
        <% if (data.page > 1) { %>
            <a data-page="<%= data.page-1 %>" class="page-data page-prev">上一页</a>
        <% } %>
        <% for(var i = 1; i <= Math.ceil(data.total / data.pageSize); i++) { %>
            <a data-page="<%= i %>" class="page-data page-num <%= i == data.page ? 'cur' : '' %>"><%= i %></a>
        <% } %>
        <% if (data.page < data.maxPage) { %>
            <a data-page="<%= data.page+1 %>" class="page-data page-next">下一页</a>
        <% } %>
        <span class='page-total'>共<%= Math.ceil(data.total / data.pageSize) %>页</span>
    </div>
<% } %>