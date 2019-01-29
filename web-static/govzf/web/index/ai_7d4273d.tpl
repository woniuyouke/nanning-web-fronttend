<a class="house-gallery-card-item <%= index % 3 === 0 ? 'no-margin' : '' %> <%= index <= 3 ? 'no-margin-top' : ''%>" href="<%= list.url %>">
    <div class="house-gallery-card-item-img">
        <img src="<%= list.picUrls[0] %>">
        <% if(list.category && list.category == 2){ %>
        <span class="layoutAll">统一装修户型 </span>
        <% } %>
        <% if(list.vrShow && list.vrShow == 1){ %>
        <span class="vr-icon iconfont"></span>
        <% } %>
    </div>
    <p class="house-gallery-card-item-tit">
      <span class="name"><%= list.title %></span>
      <% if(list.location){ %>
      <span class="location">
        <%= list.location %>
      </span>
      <% } %>
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
    </p>
    <p class="price"><%= list.price %></p>

</a>
