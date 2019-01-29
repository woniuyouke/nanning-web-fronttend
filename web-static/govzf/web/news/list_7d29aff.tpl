<a href="<%= list.url %>" class="left-fix-right-grid">
    <div class="left-fix-right-grid-left {{ $data['iconUrl'] ? '' : 'text_noimg' }}">
        <p class="left-fix-right-grid-left-title"><%= list.title %></p>
        <p class="left-fix-right-grid-left-content"><%= list.content %></p>
        <p class="left-fix-right-grid-left-tags">
            <span><%= list['published_at'] %></span>
            <span><%= list.source %></span>
        </p>
    </div>
    <% if(list.iconUrl) { %>
    <img class="left-fix-right-grid-right" src="<%= list.iconUrl %>">
    <% } %>
</a>
