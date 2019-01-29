define("common:components/pcUI/baiduMap/baiduMap.js",function(e){function t(e,t){this._center=e,this._htmlContent=t}function n(e,t,n){this._center=e,this._htmlContent=t,this._ishover=n}function i(e,t,n){this._center=e,this._htmlContent=t,this._total=n}function o(e){this.options=p.extend({dom:"",pageType:"around",autoCreateMap:!1,housePoint:"",loupanName:"",dragging:!0,pinchToZoom:!0,scrollWheelZoom:!0,createLabel:!0,houseAddress:"",houseTotal:""},e||{}),this.init()}var a,r,p=e("common:components/jquery/jquery.js"),s=e("common:components/pcUI/tips/tips.js"),c=e("common:components/pcUI/template/template.js"),l=function(e,t,n){if(null==e)return"";var i="",o=typeof e;if("string"==o||"number"==o||"boolean"==o)i+="&"+t+"="+(null==n||n?encodeURIComponent(e):e);else for(var a in e){var r=null==t?a:t+(e instanceof Array?"["+a+"]":"."+a);i+=l(e[a],r,n)}return i};return t.prototype=new BMap.Overlay,t.prototype.initialize=function(e){this._map=e;var t=document.createElement("div");t.style.cssText="position:absolute; height:30px; background:rgba(63,81,181,1); color:#fff; border-radius:15px;padding:0 8px; width:auto;font-size:12px; line-height:30px; white-space:nowrap",t.innerHTML=this._htmlContent,e.getPanes().markerPane.appendChild(t),this._width=t.offsetWidth,this._height=t.offsetHeight;var n=document.createElement("em"),i=this._width/2-8,o=this._height-3;t.appendChild(n),n.style.cssText="position:absolute;z-index:5; display:block;width:0;height:0;top:"+o+"px;left:"+i+"px;border-top:8px solid rgba(63,81,181,1);border-right:8px solid transparent;border-left:8px solid transparent;";var a=document.createElement("em"),r=this._width/2-8,p=this._height-2;return t.appendChild(a),a.style.cssText="position:absolute; z-index:4;display:block;width:0;height:0;top:"+p+"px;left:"+r+"px;border-top:8px solid rgba(63,81,181,1);border-right:8px solid transparent;border-left:8px solid transparent;",this._div=t,this._div},t.prototype.draw=function(){var e=this._map.pointToOverlayPixel(this._center);this._div.style.left=e.x-(this._width/2-2)+"px",this._div.style.top=e.y-(this._height+22+9)+"px"},t.prototype.show=function(){this._div&&(this._div.style.display="")},a=t,n.prototype=new BMap.Overlay,n.prototype.initialize=function(e){this._map=e;var t=document.createElement("div");t.style.cssText="position:absolute; z-index:4;";var n=c.parse("<% if (isHover) {\r\n    var bg = '#FE5955';\r\n} else {\r\n    var bg = '#3F51B5';\r\n} %>\r\n<span style=\"position: relative;display: inline-block; width: 24px; height: 24px; min-width: 24px; border-radius: 50%; line-height: 24px; color: #fff; text-align: center;font-size: 14px; background:<%= bg %>\">\r\n    <%= num %>\r\n    <span style=\"\r\n            position: absolute;\r\n            z-index: 5;\r\n            display: block;\r\n            width: 0px;\r\n            height: 0px;\r\n            top: 22px;\r\n            left: 5px;\r\n            border-top: 7px solid <%= bg %>;\r\n            border-right: 7px solid transparent;\r\n            border-left: 7px solid transparent;\"></span>\r\n</span>",{num:this._htmlContent,isHover:this._ishover});return t.innerHTML=n,e.getPanes().markerPane.appendChild(t),this._width=t.offsetWidth,this._height=t.offsetHeight,this._div=t,this._div},n.prototype.draw=function(){var e=this._map.pointToOverlayPixel(this._center);this._div.style.left=e.x-(this._width/2-2)+"px",this._div.style.top=e.y-(this._height/2+20)+"px"},n.prototype.show=function(){this._div&&(this._div.style.display="")},r=n,i.prototype=new BMap.Overlay,i.prototype.initialize=function(e){this._map=e;var t=document.createElement("div");t.style.cssText="position:absolute; z-index:4;";var n=c.parse('<div style=" padding: 8px 24px; min-width: 165px; border-radius: 26px; background: #fff;box-shadow: 0 2px 10px 0 rgba(0,0,0,0.15);">\r\n    <p style="color: #333; font-size: 14px;"><%= address %></p>\r\n    <p style=" color: #666; font-size: 12px;">附近<b style="color:rgb(254,93,89) "><%= total %></b>套租房</p>\r\n    <em style="font-size: 12px; position: absolute; right: 16px; top: 50%; margin-top: -6px; color: #999" class="iconfont icon-arrow_left"></em>\r\n</div>',{address:this._htmlContent,total:this._total});return t.innerHTML=n,e.getPanes().markerPane.appendChild(t),this._width=t.offsetWidth,this._height=t.offsetHeight,this._div=t,this._div},i.prototype.draw=function(){var e=this._map.pointToOverlayPixel(this._center);this._div.style.left=e.x-(this._width/2-2)+"px",this._div.style.top=e.y-(this._height/2+20)+"px"},i.prototype.show=function(){this._div&&(this._div.style.display="")},drawIndexMasker=i,o.prototype={config:{mapApi:"//api.map.baidu.com/api?v=2.0&ak=dCfxVQH8PlNRzQgP51QLOxCbgyNUbXVz",placeApi:"//api.map.baidu.com/place/v2/search?ak=dCfxVQH8PlNRzQgP51QLOxCbgyNUbXVz",sStaticDomain:window.config.aURL.sStaticDomain,icons:{loupan:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/list_location_01aa20f.svg".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),bank:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_bank_ic_d70c3e6.svg".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),bus:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_bus_ic_36f3b27.svg".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),commiunty:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_community_ic_322fc45.png".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),food:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_food_ic_accb580.png".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),hospital:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_hospital_ic_b7d1b1a.png".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),metro:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_metro_ic_042014f.svg".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),school:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_school_ic_e76d0be.svg".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}(),shop:function(){var e={url:window.config.aURL.sStaticDomain+"/static/govzf/common/c_/pcUI/baiduMap/img/pin/pin_shop_ic_58e98f1.png".replace(/\/static/gi,""),size:new BMap.Size(32,32),anchor:new BMap.Size(9,26)};return new BMap.Icon(e.url,e.size,{anchor:e.anchor})}()},gSearchMap:{"公交":"bus","地铁":"metro","学校":"school","医院":"hospital","银行":"bank","购物":"shop","美食":"food","小区":"commiunty"},allTempMarker:[]},init:function(){var e=this;e._initBDMapCallBack(),e._createMasker()},_initBDMapCallBack:function(){var e=this;if(e.options.dom&&e.options.housePoint)if("panorama"==e.options.pageType){var t=new BMap.Panorama(e.options.dom);t.setPosition(new BMap.Point(e.options.housePoint[0],e.options.housePoint[1])),t.setPov({heading:-13,pitch:6})}else e.map=new BMap.Map(e.options.dom),"index"==e.options.pageType&&(e.mapPtIndex=new BMap.Point(e.options.housePoint[0],parseFloat(e.options.housePoint[1]-3e-4))),e.mapPt=new BMap.Point(e.options.housePoint[0],e.options.housePoint[1]),e.map.centerAndZoom(e.mapPt,18),e.map.disableDoubleClickZoom(),e.options.dragging||e.map.disableDragging(),e.options.pinchToZoom||e.map.disablePinchToZoom(),e.options.scrollWheelZoom||e.map.enableScrollWheelZoom();else s.show("没有传dom或坐标，请检查")},_createMasker:function(){var e=this;e.options&&e.options.pageType?"detail"==e.options.pageType||"webDetail"==e.options.pageType?(e.masker=new a(e.mapPt,e.options.loupanName),e.map.addOverlay(e.masker)):"around"==e.options.pageType?(e.masker=new a(e.mapPt,e.options.loupanName),e.map.addOverlay(e.masker)):"index"==e.options.pageType&&(e.masker=new BMap.Marker(e.mapPtIndex,{icon:e.config.icons.loupan}),e.nameMasker=new drawIndexMasker(e.mapPt,e.options.houseAddress,e.options.houseTotal),e.map.addOverlay(e.masker),e.map.addOverlay(e.nameMasker)):s.show("请填写pageType，detail或around")},_addPoint:function(e,t,n){var i=this;i.masker=new r(e,t,n),i.map.addOverlay(i.masker)},_searchPlace:function(e){var t=this;if(e&&e.query){var n,i=t.config.placeApi+l(e);return p.ajax({url:i,type:"get",dataType:"jsonp",async:!1,success:function(e){0==!e.status?(s.show(e.message),n=!1):n=e.results},error:function(){s.show("请求报错了")}}).then(function(e){return e.results})}s.show("还没有输入需要查询的建筑物")},_searchLocalPlace:function(e){var t=this,n=new BMap.LocalSearch(t.map,{renderOptions:{autoViewport:!0,selectFirstResult:!0},onSearchComplete:function(i){var o=[];if(n.getStatus()==BMAP_STATUS_SUCCESS){for(var a=0;a<i.getCurrentNumPois();a++){var r=i.getPoi(a),p=(r.point.lat,r.point.lng,r.address,r.title),s=new BMap.Marker(r.point,{icon:t.config.icons[t.config.gSearchMap[e.key]]});s.setTitle(p),t.map.addOverlay(s),o.push(s),s.addEventListener("click",function(e){t._openInfo(this.getTitle(),e)})}t.config.allTempMarker.push({id:e.key,tempMarker:o})}else console.log("附近没有相关设施")}});n.searchNearby(e.key,t.mapPt,2e3)},_openInfo:function(e,t){var n=t.target,i=this,o=new BMap.Point(n.getPosition().lng,n.getPosition().lat),a=new BMap.InfoWindow(e);i.map.openInfoWindow(a,o)},_getDistance:function(e,t){var n=this;return e&&t?parseInt(n.map.getDistance(e,t)):void s.show("请输入两个坐标")},_dealData:function(e){var t,n,i=this,o=[];t=i.mapPt;for(var a=0;a<e.length;a++){var r={};r.station=e[a].name,r.line=e[a].address.split("地铁").join("").replace(/;/g,"、"),n=new BMap.Point(e[a].location.lng,e[a].location.lat),r.distance=i._getDistance(t,n),o.push(r)}return o},get_place_distance:function(e){var t=this,n={};return n.query=e||"地铁",n.output="json",n.radius="1500",n.location=t.mapPt.lat+","+t.mapPt.lng,t._searchPlace(n).then(function(e){return t._dealData(e)})},set_place_point:function(e){var t=this;if(""==e)return s.error("请输入关键字"),!1;var n={key:e};t._searchLocalPlace(n)},delete_place_point:function(e){var t=this;if(""==e)return s.error("请输入关键字"),!1;for(var n=t.config.allTempMarker,i=0;i<t.config.allTempMarker.length;i++)if(n[i].id==e){for(var o=0;o<n[i].tempMarker.length;o++)t.map.removeOverlay(n[i].tempMarker[o]);n.splice(i,1)}},show_return_place_point:function(e){var t=this,n={};return n.query=e||"地铁",n.output="json",n.radius="1500",n.location=t.mapPt.lat+","+t.mapPt.lng,t._searchPlace(n).then(function(e){return e.length>0&&e.forEach(function(e,n){var i=new BMap.Point(e.location.lng,e.location.lat);t._addPoint(i,parseInt(n+1))}),t._dealData(e)})},hover_point:function(e,t){for(var n=this,i=n.map.getOverlays(),o=0;o<i.length;o++)if(i[o]._htmlContent==e)return n.map.removeOverlay(i[o]),n._addPoint(i[o]._center,e,t),!1}},o});