<%list.forEach(function(item) { %>
	<li class='house-every-item' data-id= '<%= item.id %>'>
		<dl class='detail-pic clearfix'>
			<dt class='pic'>
			    <a href='<%= item.upStatus ?  item["defaultWebUrl"] : "javascript:;" %>'>
					<img src="<%= item['pics'][0]['picUrl'] %>" title='图片'>
				</a>
			</dt>
			<dd class='detail clearfix'>
				<div class='detail-left'>
					<p class='title'>
						<a href="<%= item.upStatus ?  item['defaultWebUrl'] : "javascript:;" %>" class='<%= item.upStatus ?  "" : "strike-through" %>'><%=item['title']%></a>
						<% if(item['auditStatus'] != '0' && item['auditStatus'] != '2'){ %>
						<% if(item['houseIsMortgage']==1) { %>
						    <span class="is-dy">有抵押</span>
						<%} else if(item['houseIsMortgage']==0){%>
						    <span class="is-dy">无抵押</span>
						<% } %>
						<% if(item['houseIsLimit']==1) { %>
                             <span class="is-dy">有限制</span>
                        <%} else if(item['houseIsLimit']==0){%>
                            <span class="is-dy">无限制</span>
                        <% } %>
                        <% } %>
					</p>
					<p class='huxing'><%=item['rentType'] == 1 ? '整租&nbsp;·&nbsp;' : '合租&nbsp;·&nbsp;'%>
					    <% if(item['roomNum'] != 0 || item['hallNum'] != 0 || item['toiletNum'] != 0){ %>
                            <%= item['roomNum'] + '室' + item['hallNum'] + '厅' + item['toiletNum'] +'卫&nbsp;·&nbsp;'%>
                        <% } %>
						<%= item['space']/100 %>㎡</p>
					<p class='location'><%=item['communityName']%>&nbsp;&nbsp; <%=item['communityAddress']%></p>
					<p class='tags clearfix'>
					    <% if (item['collocationName'] !== '') { %>
					        <% item['collocationName'].split(',').forEach(function(collocationName){ %>
                                <span><%= collocationName %></span>
                            <%})%>
                        <% } %>
					</p>
					<% if(item['auditStatus'] == '1'){ %>
					<p class="fangdong clearfix">
						<% if(item['govHouseNumber'] != null){ %>
						<img src="<%= yhy_img %>">
						<span class="yhy">已核验</span>
						<% } %>
					</p>
					<% } %>
					<%if(item['logoUrl'] || item['brandName']) { %>
					<span class='brand'>
					    <%if(item['logoUrl'] && !item['brandName']) { %>
					    	<img src="<%= item['logoUrl'] %>">
						<% } else { %>
							<%=item['brandName']%>
						<% } %>
					</span>
					<%}%>

					<div class='detail-right'>
						<% if(item['auditStatus'] == '0'){ %>
						<p class="state shenhezhong">
							<span>审核中</span>
						</p>

						<%} %>
						<% if(item['auditStatus'] == '1'&& item['upStatus'] == '2'){ %>
						<p class="state yishangjia">
							<span>已上架</span>
						</p>

						<%} %>
						<% if(item['auditStatus'] == '2'){ %>
						<p class="state shenhebohui">
							<span title="<%= item['reason'] %>">审核驳回</span>
						</p>
						<%} %>

                       <% if (item['auditStatus'] == '1' && item['upStatus'] == '0') { %>
                            <p class="state yixiajia">
                                <% if (item['pattern'] === 1) { %>
                                    <span title='该房源已备案，如需上架请重新编辑后发布'>已下架</span>
                                <% } else { %>
                                    <span>已下架</span>
                                <% } %>
                             </p>
                        <% } %>

						<p class='price'><strong class='<%= item.auditStatus == 2?  "change-gray" : "" %>'><%= item['rentPrice'] ? item['rentPrice']/100:'' %></strong class='<%= item.auditStatus == 2?  "change-gray" : "" %>'><span>元/月</span></p>
					</div>

					<p class="handle uploadContract">
						<span>上传合同</span>
					</p>

                    <% if (item['upStatus'] === '2'){ %>
                        <p class="handle pullHouse">
                            <span>下架房源</span>
                        </p>
                    <% } else if (item['upStatus'] === '0') { %>
                        <% if(item['auditStatus'] === '1' && item['pattern'] !== 2 && !item['hasRecord']){ %>
                            <p class="handle editHoude">
                                <span>编辑</span>
                            </p>
                        <% } %>
                    <% } %>

				</div>
			</dd>
		</dl>
	</li>
<% }) %>
