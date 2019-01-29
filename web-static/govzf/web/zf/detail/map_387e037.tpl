<p class="tit"><%= name %></p>
<div class="map-line-content">
    <% if(data.length>0){ %>
    <% for(var i = 0;i < data.length;i++){ %>
    <div class="map-item">
        <div class="icon">
            <span class="icon-bg">
                <%= i+1 %>
                <span class="arrow"></span>
            </span>
        </div>
        <div class="map-item-info">
            <p class="name">
                <span><%= data[i].station %></span>
                <span style="float: right"><%= data[i].distance %>米</span>
            </p>
            <p class="text">
                <%= data[i].line %>
            </p>
        </div>
    </div>
    <% } %>
    <% }else {%>
    <p class="no-data">周边暂无<%= name %>信息</p>
    <% } %>
</div>