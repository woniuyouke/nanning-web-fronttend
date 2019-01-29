<%list.forEach(function(item) { %>
	<li class='house-every-item'>
		<dl class='detail-pic clearfix'>
			<dt class='pic'>
			    <a href='<%= item['detail'] %>'>
				<img src="<%=item['picUrls'][0]%>" title='图片'>
				</a>
				<% if(item['category'] && item['category'] == 2) { %>
				<span class='roomcount'>统一装修户型&nbsp;共<%=item['roomCount']%>间</span>
				<% } %>

				<%if(item['applicationStatus'] == 1) { %>
               	 	<span class="apply-tag ing"></span>
                <%}%>
                <%if(item['applicationStatus'] == 2) {%>
                	<span class="apply-tag soon"></span>
                <%}%>
               <%if(item['applicationStatus'] == 3) {%>
                	<span class="apply-tag over"></span>
                <%}%>
			</dt>
			<dd class='detail clearfix'>
				<div class='detail-left'>
					<p class='title'>
						<a href="<%= item['detail'] %>">
						<% if(item['publicType'] == 1) {%>
						【公租房】
						<%}%>
						<% if(item['publicType'] == 2) {%>
						【人才房】
						<%}%>
						<% if(item['publicType'] == 3) {%>
						【公租房/人才房】
						<%}%>
						<%=item['communityName']%>
						</a>
					</p>
					<%if(item['layoutInfo']) {%>
						<p class='huxing'><%=item['layoutInfo']%></p>
					<%}%>
					<%if(item['districtName'] || item['districtName']) { %>
							<p class='location'><%=item['districtName'] ? item['districtName'] + '-' : ''%><%item['districtName']%>&nbsp;&nbsp; <%=item['blockName']%></p>
				   <%}%>
					<p class='tags clearfix'>
						<% item['tags'].forEach(function(tag){%>
						<span><%=tag%></span>
						<%})%>
					</p>
					<%if(item['logoUrl'] || item['brandName']) {%>
					<span class='brand'>
					    <%if(item['logoUrl'] && !item['brandName']) { %>
					    	<img src='<%=item['logoUrl']%>'>
						<% } else { %>
							<%=item['brandName']%>
						<% } %>
					</span>
					<%}%>
				</div>

				<div class='detail-right'>

					<% if( item['publicTypePrice']['data'] && item['publicTypePrice']['data'].length > 0) { %>
						<% for(var i in item['publicTypePrice']['data']) { %>
							<p class='price'>
								<strong><%= item['publicTypePrice']['data'][i].price %><%= item['priceUnit'] %></strong><br><%= item['publicTypePrice']['data'][i].name%>价
							</p>
						<% } %>
					<% }else{ %>
						<p class="price">
							<strong><%= item['publicTypePrice']['default'] %></strong>
						</p>
					<% } %>

				</div>
				<span class='delete-icon icon iconfont icon-nav_detele' data-id="<%= item['id'] %>" ></span>
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