define("common:components/vux/components/search/index.min.js",function(t,e,i){!function(t,n){"object"==typeof e&&"object"==typeof i?i.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof e?e.vuxSearch=n():t.vuxSearch=n()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";function n(){i(1)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=i(5),r=i(2),u=n,a=r(s.a,o.a,!1,u,null,null);e.default=a.exports},function(){},function(t){t.exports=function(t,e,i,n,s,o){var r,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,u=t.default);var c="function"==typeof u?u.options:u;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId=s);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:u,options:c}}},function(t,e,i){"use strict";var n=i(4);e.a={name:"search",mixins:[n.a],props:{required:{type:Boolean,"default":!1},placeholder:String,cancelText:String,value:{type:String,"default":""},results:{type:Array,"default":function(){return[]}},autoFixed:{type:Boolean,"default":!0},top:{type:String,"default":"0px"},position:{type:String,"default":"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{emitEvent:function(){var t=this;this.$nextTick(function(){t.$emit("input",t.currentValue),t.$emit("on-change",t.currentValue)})},onComposition:function(t,e){"start"===e&&(this.onInput=!0),"end"===e&&(this.onInput=!1,this.emitEvent()),"input"===e&&(this.onInput||this.emitEvent())},clear:function(){this.currentValue="",this.emitEvent(),this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0)},cancel:function(){this.isCancel=!0,this.currentValue="",this.emitEvent(),this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1,this.$emit("on-blur")}},data:function(){return{onInput:!1,currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){!0===t&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t}}}},function(t,e){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box","class":{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar","class":{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[t._t("left"),t._v(" "),i("form",{staticClass:"weui-search-bar__form",attrs:{action:"."},on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",attrs:{"for":"search_input_"+t.uuid},on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",autocomplete:"off",id:"search_input_"+t.uuid,placeholder:t.placeholder,required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,compositionstart:function(e){t.onComposition(e,"start")},compositionend:function(e){t.onComposition(e,"end")},input:[function(e){e.target.composing||(t.currentValue=e.target.value)},function(e){t.onComposition(e,"input")}]}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{"for":"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消")+"\n    ")]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(){t.handleResultClick(e)}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},n=[],s={render:i,staticRenderFns:n};e.a=s}])})});