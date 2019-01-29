<%list.forEach(function(item) { %>
	<li class='house-every-item'>
		<dl class='detail-pic clearfix'>
			<dt class='pic'>
			    <a href='<%= item.upStatus ?  item['url'] : "javascript:;"%>'>
				<img src="<%=item['picUrls'][0]%>" title='图片'>
				<% if(item['houseType']) { %>
					<%
						var houseType = '';
						if (item['houseType'] == '3') {
								houseType = 'house-type-gr';
						}
						if (item['houseType'] == '4') {
								houseType = 'house-type-zj';
						}
						if (item['houseType'] == '2') {
								houseType = 'house-type-zlqy';
						}
						if (item['houseType'] == '5') {
								houseType = 'house-type-gy';
						}
						if (item['houseType'] == '6') {
								houseType = 'house-type-kfqy';
						}
					%>
				<span class="house-type <%=houseType%>"></span>
				<%}%>
				</a>
				<% if(item['category'] && item['category'] == 2) { %>
				<span class='roomcount'>统一装修户型&nbsp;共<%=item['roomCount']%>间</span>
				<% } %>

				<%if(!item.upStatus) { %>
                	<p class='off-dialog'>已下架</p>
                <%}%>
			</dt>
			<dd class='detail clearfix'>
				<div class='detail-left'>
					<p class='title'>
						<a href="<%= item.upStatus ?  item['url'] : "javascript:;"%>" class='<%= item.upStatus ?  "" : "strike-through" %>'><%=item['title']%></a>
						<% if(item['isGuaranty']) {%>
						<span class='tag'>信用免押</span>
						<% } %>
					</p>
					<p class='huxing'><%=item['rentType'] == 1 ? '整租&nbsp;·&nbsp;' : '合租&nbsp;·&nbsp;'%>
					<%= item['layout'] ? item['layout'] + '&nbsp;·&nbsp;' : ''%><%= item['area']%></p>
					<p class='location'><%=item['location']%>&nbsp;&nbsp; <%=item['address']%></p>
					<p class='tags clearfix'>
						<% item['tags'].forEach(function(tag){%>
						<span><%=tag%></span>
						<%})%>
					</p>
					<p class="fangdong clearfix">
							<!-- <img src="../static/zf/markeylist/img/landlord.png">
							<span>认证房东</span> -->
							<% if(item['govHouseNumber']) {%>
							<img src="<%= iconOneUrl %>">
							<span class="yhy">已核验</span>
							<%}%>
							<% if(item['houseIsMortgage'] !== '') {%>
							<img src="<%= iconTwoUrl %>">
							<span class="is-pledge"><%=item['houseIsMortgage'] == 0 ? '无抵押' : '有抵押'%></span>
							<%}%>

					</p>
				</div>
				<% 
				  var price = item['price'];
				  console.log(price)
				%>
				<div class='detail-right'>
					<p class='price'><strong class='<%= item.upStatus ?  "" : "change-gray" %>'><%= price %></strong><span class='<%= item.upStatus ?  "" : "change-gray" %>'>元/月</span></p>
				</div>
				<span class='delete-icon icon iconfont icon-nav_detele' data-id='<%= item['id']%>' ></span>
			</dd>
		</dl>
		<% if(item['traffic']) { %>
			<%
				var type = null;
				if(item['traffic']['trafficType'] == '1') {
					type = 'icon-surrounding_metro';
				} 
				if(item['traffic']['trafficType'] == '2') {
					type = 'icon-bike_ic';
				} 
				if(item['traffic']['trafficType'] == '3') {
					type = 'icon-walk_ic';
				} 
				if(item['traffic']['trafficType'] == '4') {
					type = 'icon-car_ic';
				} 

			%>
			<p class='line icon iconfont <%=type%>'>
				<span class='time'><%=item['traffic']['trafficTime']%></span>
				<span class='trafficType'><%=item['traffic']['distance']%></span>
			</p>
		<%} %>
	</li>
<% }) %>