define("web:components/search/jq_dropbox.js",function(t){"use strict";t.async(["common:components/jquery/jquery.js"],function(t){var s={UP:38,DOWN:40,LEFT:37,RIGHT:39,ENTER:13,PAGEUP:33,PAGEDOWN:34},e=null,i=function(t){this.opts=this._setOptions(t),("select"==this.opts.options.type||"auto"==this.opts.options.type)&&(this.isEvent=!1,this.drawTemplate=this.opts.methods.drawTemplate,this.element=this.opts.options.element,this.trigger=this.opts.options.trigger,this.listTargetName=this.opts.options.listTargetName.toUpperCase(),this.showBox=null,this.captureObj=null,this.isDrawList=!1,this.isBlur=!1,this.loadData=null,this.selTarget=null,this.init())};i.prototype={_setOptions:function(s){var e={options:{type:null,element:null,showBox:"created",listTargetName:"LI",trigger:"mousedown",keyboard:!1,data:null,lazyData:!0,exclude:!0,showBoxHover:!1,isOffset:!0,ajax:{url:null,cache:!1,data:[]},untrigger:!0},cssStyle:null,className:{box:"csf_dropBox_box",list:"csf_dropBox_list",hover:"csf_dropBox_hover"},template:{showBoxList:"<ul>            {{ for(var i = 0,l = csf.data.length;i < l;i++){ }}              <li data-dropbox-flag = {{=csf.data[i].flag}}>                {{=csf.data[i].value}}              </li>            {{ } }}          </ul>"},methods:{drawTemplate:function(s,e,i){var o=t.parseJSON(i),n=doT.template(e),a=n(o);s.html(a)},onElementClick:function(){},onShowListClick:function(){},untrigger:function(){},onInit:function(){},getAjaxOpts:function(){return{}}}},i=t.extend(!0,e,s);return i},init:function(){if("created"==this.opts.options.showBox){var t=this.element.attr("id");this.createShowBox(t)}else this.showBox=this.opts.options.showBox;this.opts.options.isOffset&&this.setOffset(this.element),this.event(),this.showBoxEvent(),"auto"==this.opts.options.type&&this.autoEvent(),this.opts.methods.onInit.call(this,this.element)},isInput:function(){return"INPUT"==this.element[0].tagName?!0:!1},updata:function(t){var s=t;this.drawTemplate.apply(this,[this.showBox,this.opts.template.showBoxList,s])},createShowBox:function(s){var s="__csf_dropbox_showbox_"+s+"__";if(t("#"+s).length>0)t.error("Have an element id is "+s);else{var e=this.opts.className.box,i="display:none;";if(this.opts.cssStyle){i="";for(var o in this.opts.cssStyle)i+=o+":"+this.opts.cssStyle[o]+";"}var n='<div id="'+s+'" class="'+e+'" style="position:absolute;'+i+'"></div>';t(document.body).append(n),this.showBox=t("#"+s)}this.opts.options.lazyData||"auto"==this.opts.options.type||this.createShowList()},createShowList:function(){var s,e=this;if(this.opts.options.data)return s=this.opts.options.data,this.loadData=s,this.isDrawList=!0,void this.drawTemplate.apply(this,[this.showBox,this.opts.template.showBoxList,s]);if(null!=this.opts.options.ajax.url){var i=this.opts.options.ajax.url;return void t.ajax({url:i,data:this.opts.options.ajax.data,cache:!1,success:function(t){e.isDrawList=!0,e.loadData=t,e.drawTemplate.apply(e,[e.showBox,e.opts.template.showBoxList,t])}})}},event:function(){var i=this,o=!1;this.opts.options.isOffset&&t(window).resize(function(){i.setOffset(i.element)}),this.element.bind(this.trigger,function(t){return i.opts.options.isOffset&&i.setOffset(i.element),t.stopPropagation(),"auto"==i.opts.options.type&&!i.opts.options.lazyData&&(i.isEvent=!0,e=i,i.isDrawList)?(i.showBox.css("display",i.displayBox(i.isEvent)),void i.opts.methods.onElementClick.call(i,i.element)):(i.isEvent?(i.isEvent=!1,e=null):(i.isEvent=!0,i._isExclude(),e=i,i.opts.options.lazyData&&!o&&(i.createShowList(),o=!0)),i.showBox.css("display",i.displayBox(i.isEvent)),void i.opts.methods.onElementClick.call(i,i.element))}),this.element.bind("mouseup",function(){i.doReleaseCapture()}),this.opts.options.untrigger&&(this.isInput()?this.element.bind("blur",function(){i.unevent()}):t(document).bind(this.trigger,function(){i.isEvent&&(i.unevent(),e=null)})),this.isInput()&&this.opts.options.keyboard&&this.element.bind("keydown",function(t){var e=t.keyCode;switch(e){case s.UP:i.doKeyList(0);break;case s.DOWN:i.doKeyList(1);break;case s.ENTER:i.doKeyList(2)}}),this.opts.options.showBoxHover&&this.showBox.bind("mouseover",function(s){var e=i.opts.className.hover,o=t(i._findTarget(s));null!=i.selTarget&&i.selTarget.removeClass(e),o.addClass(e),i.selTarget=o})},_findTarget:function(t){for(var s=t.target;s&&s.tagName!=this.listTargetName;)s=s.parentNode;return s?s:[]},_isuntrigger:function(){var s=this;this.isInput()?this.element.bind("blur",function(){s.unevent()}):t(document).bind(this.trigger,function(){s.isEvent&&s.unevent()})},_isExclude:function(){!this.isInput()&&this.opts.options.exclude&&null!=e&&(e.unevent(),e=null)},doKeyList:function(t){var s=this.opts.className.hover;if(0==t)if(null==this.selTarget)this.selTarget=this.showBox.find(this.listTargetName).filter(":last");else{this.selTarget.removeClass(s);var i=this.selTarget.prev();this.selTarget=i.length>0?i:this.showBox.find(this.listTargetName).filter(":last")}if(1==t)if(null==this.selTarget)this.selTarget=this.showBox.find(this.listTargetName).filter(":first");else{this.selTarget.removeClass(s);var o=this.selTarget.next();this.selTarget=o.length>0?o:this.showBox.find(this.listTargetName).filter(":first")}null!=this.selTarget&&this.selTarget.addClass(s),2==t&&null!=this.selTarget&&(this.opts.methods.onShowListClick.apply(this,[this.selTarget[0],this.element]),this.selTarget.removeClass(s),this.selTarget=null,this.isEvent=!1,e=null,this.showBox.css("display",this.displayBox(this.isEvent)),this.isInput()&&this.element.trigger("blur"),this.dosetCapture(this.element[0]))},autoEvent:function(){var s,e=this,i=null,o="",n="",a=this.opts.className.hover;this.element.bind("focus",function(){s=setTimeout(function(){if(n=t.trim(e.element.val()),""==n&&null==e.loadData)return e.showBox.css("display","none"),setTimeout(arguments.callee,500),e.isDrawList=!1,void(o="");if(n!=o&&!e.isBlur){if(e.isDrawList=!0,e.isEvent=!0,""==n&&null!=e.loadData)i=e.loadData,null!=e.selTarget&&(e.selTarget.removeClass(a),e.selTarget=null),e.drawTemplate.apply(e,[e.showBox,e.opts.template.showBoxList,i]);else{var s=e.opts.methods.getAjaxOpts();t.extend(!0,s,{success:function(t){null!=e.selTarget&&(e.selTarget.removeClass(a),e.selTarget=null),t.data&&(t.data.length?e.drawTemplate.apply(e,[e.showBox,e.opts.template.showBoxList,t]):(e.showBox.parent("#J_search_suggest").css("display","none"),e.showBox.css("display","none")))}}),t.ajax(s)}e.showBox.css("display",e.displayBox(e.isEvent)),o=n}setTimeout(arguments.callee,500)},500),e.isBlur=!1})},unevent:function(){null!=this.selTarget&&(this.selTarget.removeClass(this.opts.className.hover),this.selTarget=null),this.isBlur=!0,this.doReleaseCapture(),this.opts.methods.untrigger.call(this,this.element),this.isEvent=!1,this.showBox.css("display",this.displayBox(this.isEvent))},showBoxEvent:function(){var t=this;this.showBox.bind("mousedown",function(s){var i=s.target,o=t.opts.methods.onShowListClick.apply(t,[i,t.element,t.listTargetName]);return o&&(t.isEvent=!1,e=null,t.showBox.parent("#J_search_suggest").css("display",t.displayBox(t.isEvent)),t.showBox.css("display",t.displayBox(t.isEvent)),null!=t.selTarget&&(t.selTarget.removeClass(t.opts.className.hover),t.selTarget=null),t.isInput()&&t.element.trigger("blur")),t.isInput()&&t.dosetCapture(t.element[0]),!1})},displayBox:function(t){return 1==t?"":"none"},setOffset:function(t){t.offset(),t.outerHeight()},resetOffset:function(){this.setOffset(this.element)},dosetCapture:function(t){t.setCapture&&(this.doReleaseCapture(),t.setCapture(),this.captureObj=t)},doReleaseCapture:function(){this.captureObj&&this.captureObj.releaseCapture&&this.captureObj.releaseCapture()}},t.extend({jq_dropbox:function(t){return new i(t)}})})});