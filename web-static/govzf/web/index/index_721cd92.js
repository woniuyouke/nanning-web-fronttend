define("web:static/index/index.js",function(n){"use strict";n.async(["common:components/ui/zepto/zepto.js","common:components/jquery/jquery.js","common:components/third-party/swiper/swiper.js","common:components/third-party/lazyload/lazyload.js","common:components/third-party/moment/moment.js","common:components/pcUI/template/template.js","common:components/pcUI/dialog/dialog.js"],function(n,e,t,i,s,a){function l(){var n=["日","一","二","三","四","五","六"],e=s(new Date),t="周"+n[e.day()],i=e.hour(),a=e.minute(),l=o(i,a);return{month:e.month()+1,date:e.date(),day:t,meridiem:l}}function o(n,e){var t=100*n+e;return 600>t?"凌晨":900>t?"早上":1200>t?"上午":1300>t?"中午":1800>t?"下午":"晚上"}var r={houseCardTPL:'<a class="house-gallery-card-item <%= index % 2 === 1 ? \'no-margin\' : \'\' %>  <%= index < 3 ? \'no-margin-top\' : \'\'%>" href="<%= data.url %>">\r\n    <div class="house-gallery-card-item-img">\r\n        <img class="lazy" data-original="<%= list.picUrls[0] %>" src="<%= listConfig.loadImg %>">\r\n        <% if(list.category && list.category == 2){ %>\r\n        <span class="layoutAll">统一装修户型 </span>\r\n        <% } %>\r\n        <% if(list.vrShow && list.vrShow == 1){ %>\r\n        <span class="vr-icon iconfont"></span>\r\n        <% } %>\r\n\r\n    </div>\r\n    <p class="house-gallery-card-item-tit">\r\n      <span class="name"><%= list.title %></span>\r\n      <span class="price"><%= list.price %></span>\r\n    </p>\r\n    <p class="house-gallery-card-item-info">\r\n      <span class="layout">\r\n        <% if(list.rentType == 1){ %>\r\n        <span>整租</span>\r\n        <% }else if(list.rentType == 2){ %>\r\n        <span>合租</span>\r\n        <% } %>\r\n        <% if(list.layout){ %>\r\n        <span><%= list.layout %></span>\r\n        <% } %>\r\n        <% if(list.area){ %>\r\n        <span><%= list.area %></span>\r\n        <% } %>\r\n      </span>\r\n      <% if(list.location && list.location !== \'-\' || list.address){ %>\r\n      <span class="location">\r\n        <%= list.location %>&nbsp;<%= list.address %>\r\n      </span>\r\n      <% } %>\r\n    </p>\r\n</a>\r\n',selectedCardTPL:'<a class="swiper-slide" href="<%= data.link %>">\r\n  <div class="selected-gallery-card-pic <%= data.pic %>">\r\n  </div>\r\n</a>\r\n',init:function(){this.initWenXin(),this.initTools(),this.initHouseTab(),this.initSelected(),this.loadImg(),this.initAd(),this.initEvent()},loadImg:function(){n("img.lazy").lazyload()},initAd:function(){n("#J_nr_container").addClass("loaded")},initHouseTab:function(){n(".house-gallery-card-tab-item").click(function(){n(".house-gallery-card-tab-item").removeClass("active"),n("#J_market .house-list").hide(),n(this).addClass("active");var e=n(this).data("type");n(".house-list#J_"+e+"HouseList").show()})},initSelected:function(){for(var e=[{pic:"zhuanti_1",link:myHeader.config.commonListUrl+"/rm1",title:"南山上班首选",desc:"技术大牛汇集之地"},{pic:"zhuanti_2",link:myHeader.config.commonListUrl,title:"本月新上",desc:"与TA的独享空间"},{pic:"zhuanti_3",link:myHeader.config.commonListUrl+"/pe_3000",title:"千元好房",desc:"好的生活不一定贵。,"},{pic:"zhuanti_5",link:myHeader.config.commonListUrl+"/ar450103",title:"南山",desc:"好的生活不一定贵"}],i=[],s=0;s<e.length;s++){var l=e[s];i.push(a.parse(this.selectedCardTPL,{data:l}))}console.log("selected"+e.length),console.log(e),n("#J_selected .swiper-wrapper").html(i.join(""));new t("#J_selected .swiper-container",{slidesPerView:4,preventClicks:!1,spaceBetween:14,loop:!0,speed:300,autoplay:!1,direction:"horizontal",nextButton:"#J_selected .swiper-button-next",prevButton:"#J_selected .swiper-button-prev"})},initWenXin:function(){var e=l(),t={3:"愿你出走半生，归来仍是少年。",4:"就算终有一散，也别辜负相遇。",5:"自己的世界不大不小，温暖自己却刚刚好。",6:"你曾拥有英雄的梦想，好像黑夜里的光。",7:"你心地善良，来日骑马喝酒走四方。",8:"愿有岁月可回首，且以深情共白头。",9:"承蒙你出现，够我喜欢好多年 ​​​。",10:"陪伴是最长情的告白。",11:"愿余生有人鲜衣怒马陪你看烈焰繁花。",12:"只要站起来比倒下去多一次就是成功。",13:"但凡未得到，但凡是过去，总是最登对。",14:"听不清的耳语最诚恳，看不到的内心都忠贞。",15:"愿余生有人鲜衣怒马陪你看烈焰繁花。",16:"愿时光许你，佑你岁月无忧。",17:"你心地善良，来日骑马喝酒走四方。",18:"自己的世界不大不小，温暖自己却刚刚好。",19:"就算终有一散，也别辜负相遇。",20:"愿有岁月可回首，且以深情共白头。"},i=(e.meridiem,n("#J_banner_container"),""+(t[e.date]||"愿余生有人鲜衣怒马陪你看烈焰繁花。"));n(".top-fix-banner-content").html(i)},initTools:function(){},initEvent:function(){e("#public-type-select").dialog({customWraper:!0}),e("#jump-next").on("click",function(){e("#public-type-select").dialog("instance").open()}),e(".close-btn").on("click",function(){e("#public-type-select").dialog("instance").close()}),e("#public-type-select .list-item").on("click",function(){n(this).addClass("selected").siblings().removeClass("selected")}),e("#submit-sel").on("click",function(){var n=e("#public-type-select .list-item.selected").data("type");location.href="/pc/user/publicrental/apply?publicType="+n})}};r.init()})});