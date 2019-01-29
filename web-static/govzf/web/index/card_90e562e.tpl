<a class="house-gallery-card-item <%= index % 2 === 1 ? 'no-margin' : '' %>  <%= index < 3 ? 'no-margin-top' : ''%>" href="<%= data.url %>">
    <div class="house-gallery-card-item-img">
        <img class="lazy" data-original="<%= list.picUrls[0] %>" src="<%= listConfig.loadImg %>">
        <% if(list.category && list.category == 2){ %>
        <span class="layoutAll">统一装修户型 </span>
        <% } %>
        <% if(list.vrShow && list.vrShow == 1){ %>
        <span class="vr-icon iconfont"></span>
        <% } %>

    </div>
    <p class="house-gallery-card-item-tit">
      <span class="name"><%= list.title %></span>
      <span class="price"><%= list.price %></span>
    </p>
    <p class="house-gallery-card-item-info">
      <span class="layout">
        <% if(list.rentType == 1){ %>
        <span>整租</span>
        <% }else if(list.rentType == 2){ %>
        <span>合租</span>
        <% } %>
        <% if(list.layout){ %>
        <span><%= list.layout %></span>
        <% } %>
        <% if(list.area){ %>
        <span><%= list.area %></span>
        <% } %>
      </span>
      <% if(list.location && list.location !== '-' || list.address){ %>
      <span class="location">
        <%= list.location %>&nbsp;<%= list.address %>
      </span>
      <% } %>
    </p>
</a>
