<%if(list.length>0){ var item = list[0]%>

    <div class="card-item bank_<%=item['bankAbbr']%>" data-cardNo="<%=item['bankAbbr']%>">
        <p><%=item['bankName']%></p>
        <p><%=item['cardNo']%></p>
    </div>
    <div class='bind-btn mt34 removeCard' data-id="<%=item['id']%>">移除银行卡</div>
<%}else{%>
<p class='note'>您暂未绑定银行卡</p>
<a href='/pc/user/bindCard'>
    <div class='bind-btn'>添加银行卡</div>
</a>
<%}%>