<li class="clearfix">
    <div><%=list.companyName %></div>
    <div><%=list.contactNumber %></div>
    <div><%=list.companyAddress %></div>
    <div>已备案</div>
    <div>
        <a href="/pc/agent/detail?id=<%=list.id%>&&page=1">人员列表</a>
        <a href="/pc/company/detail?id=<%=list.id%>">企业详情</a>
    </div>
</li>