<li class='house-every-item'>
  <dl class='detail-pic clearfix'>
    <dt class='pic'>
      <a href="<%= list.url %>">
        <img src="<%= list.picUrls[0] %>" title='图片'>
      </a>
      <% if(list.category && list.category == 2){ %>
      <span class='roomcount'>统一装修户型</span>
      <% } %>
    </dt>
    <dd class='detail clearfix'>
      <div class='detail-left'>
        <p class='title'>
          <a href="<%= list.url %>"><%= list.title %></a>
          <% if(list.isGuaranty){ %>
            <span class='tag'>信用免押</span>
          <% } %>
        </p>
        <p class='huxing'>
          <%=  list['rentType'] == 1 ? '整租&nbsp;·&nbsp;' : '合租&nbsp;·&nbsp;' %>
          <%=  list['layout'] ? list['layout'] + '&nbsp;·&nbsp;' : ''%>
          <%=  list['area'] %>
        </p>
        <p class='location'><%=  list['location'] + '&nbsp;&nbsp;' + list['address'] %></p>
        <p class='tags clearfix'>
          <% for(var i=0; i < list.tags.length; i++) { %>
          <span><%= list.tags[i] %></span>
          <% } %>
        </p>
        <% if(list['logoUrl'] || list['brandName']) { %>
        <a class='brand' href="<%= list.companyUrl ? list.companyUrl : 'javascript:;' %>" style="color:#309DE5;" target="_blank">
            <%= list['brandName'] %>
        </a>
        <% } %>
      </div>
      <div class='detail-right'>
        <p class='price'><strong><%= list['price'].replace('元/月', '') %></strong><span>元/月</strong></p>
      </div>
    </dd>
  </dl>
</li >