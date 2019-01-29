<% if (isHover) {
    var bg = '#FE5955';
} else {
    var bg = '#3F51B5';
} %>
<span style="position: relative;display: inline-block; width: 24px; height: 24px; min-width: 24px; border-radius: 50%; line-height: 24px; color: #fff; text-align: center;font-size: 14px; background:<%= bg %>">
    <%= num %>
    <span style="
            position: absolute;
            z-index: 5;
            display: block;
            width: 0px;
            height: 0px;
            top: 22px;
            left: 5px;
            border-top: 7px solid <%= bg %>;
            border-right: 7px solid transparent;
            border-left: 7px solid transparent;"></span>
</span>