define("web:static/member/user/server/company/companyDetail.js",function(e){"use strict";e.async(["common:components/ui/zepto/zepto.js","common:components/jquery/jquery.js","common:components/ui/template/template.js","common:components/third-party/lazyload/lazyload.js"],function(e){var t={init:function(){e.ajax({url:"/web/company/detail/"+window.pageConfig.id,type:"get",dataType:"json",success:function(t){if(console.log(t),t.success){var t=t.data;e(".tit").text(1==t.companyType?"中介信息":"房行信息"),e(".company-name").text(t.companyName?t.companyName:"暂无数据"),e(".company-money").text(t.registeredCapital?t.registeredCapital:"暂无数据"),e(".company-beian").text(t.recordNumber?t.recordNumber:"暂无数据"),e(".company-chengxin").text(t.integrityNumber?t.integrityNumber:"暂无数据"),e(".company-shehui").text(t.identity?t.identity:"暂无数据"),e(".company-people").text(t.legalPerson?t.legalPerson:"暂无数据"),e(".company-res-type").text(t.companyTypeStr?t.companyTypeStr:"暂无数据"),e(".company-cxtype").text(t.integrityRegistrationType?t.integrityRegistrationType:"暂无数据"),e(".company-res-region").text(t.registeredAddress?t.registeredAddress:"暂无数据"),e(".company-address").text(t.companyAddress?t.companyAddress:"暂无数据")}else console.log(t.code)}})}};t.init()})});