define("common:components/vux/components/x-number/index.min.js",function(e,t,n){!function(e,r){"object"==typeof t&&"object"==typeof n?n.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.vuxXNumber=r():e.vuxXNumber=r()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){n(1)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=n(5),u=n(2),o=r,c=u(i.a,s.a,!1,o,null,null);t.default=c.exports},function(){},function(e){e.exports=function(e,t,n,r,i,s){var u,o=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var a;if(s?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):r&&(a=r),a){var f=l.functional,h=f?l.render:l.beforeCreate;f?(l._injectStyles=a,l.render=function(e,t){return a.call(t),h(e,t)}):l.beforeCreate=h?[].concat(h,a):[a]}return{esModule:u,exports:o,options:l}}},function(e,t,n){"use strict";var r=n(4);t.a={name:"x-number",props:{min:Number,max:Number,readonly:Boolean,step:{type:Number,"default":1},value:{validator:function(e){return"number"==typeof e||"string"==typeof e&&""===e},"default":0},name:String,title:String,fillable:{type:Boolean,"default":!1},width:{type:String,"default":"50px"},buttonStyle:{type:String,"default":"square"},align:{type:String,"default":"right"}},created:function(){this.currentValue=this.value},data:function(){return{currentValue:0}},computed:{disabledMin:function(){return void 0!==this.min&&(""===this.currentValue||this.currentValue<=this.min)},disabledMax:function(){return void 0!==this.max&&(""===this.currentValue||this.currentValue>=this.max)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},watch:{currentValue:function(e){""!==e&&(void 0!==this.min&&this.currentValue<this.min&&(this.currentValue=this.min),this.max&&this.currentValue>this.max&&(this.currentValue=this.max)),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},value:function(e){this.currentValue=e}},methods:{add:function(){if(!this.disabledMax){var e=new r(this.currentValue);this.currentValue=1*e.plus(this.step)}},sub:function(){if(!this.disabledMin){var e=new r(this.currentValue);this.currentValue=1*e.minus(this.step)}},blur:function(){""===this.currentValue&&(this.currentValue=0)}}}},function(e,t,n){var r;!function(){"use strict";function i(){function e(t){var n=this;return n instanceof e?(t instanceof e?(n.s=t.s,n.e=t.e,n.c=t.c.slice()):u(n,t),void(n.constructor=e)):void 0===t?i():new e(t)}return e.prototype=p,e.DP=a,e.RM=f,e.E_NEG=h,e.E_POS=d,e}function s(e,t,n){var r=e.constructor,i=t-(e=new r(e)).e,s=e.c;for(s.length>++t&&o(e,i,r.RM),s[0]?n?i=t:(s=e.c,i=e.e+i+1):++i;s.length<i;s.push(0));return i=e.e,1===n||n&&(i>=t||i<=r.E_NEG)?(e.s<0&&s[0]?"-":"")+(s.length>1?s[0]+"."+s.join("").slice(1):s[0])+(0>i?"e":"e+")+i:e.toString()}function u(e,t){var n,r,i;for(0===t&&0>1/t?t="-0":v.test(t+="")||c(0/0),e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(0>n&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):0>n&&(n=t.length),r=0;"0"==t.charAt(r);r++);if(r==(i=t.length))e.c=[e.e=0];else{for(;"0"==t.charAt(--i););for(e.e=n-r-1,e.c=[],n=0;i>=r;e.c[n++]=+t.charAt(r++));}return e}function o(e,t,n,r){var i,s=e.c,u=e.e+t+1;if(1===n?r=s[u]>=5:2===n?r=s[u]>5||5==s[u]&&(r||0>u||s[u+1]!==i||1&s[u-1]):3===n?r=r||s[u]!==i||0>u:(r=!1,0!==n&&c("!Big.RM!")),1>u||!s[0])r?(e.e=-t,e.c=[1]):e.c=[e.e=0];else{if(s.length=u--,r)for(;++s[u]>9;)s[u]=0,u--||(++e.e,s.unshift(1));for(u=s.length;!s[--u];s.pop());}return e}function c(e){var t=new Error(e);throw t.name="BigError",t}var l,a=20,f=1,h=-7,d=21,p={},v=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;p.abs=function(){var e=new this.constructor(this);return e.s=1,e},p.cmp=function(e){var t,n=this,r=n.c,i=(e=new n.constructor(e)).c,s=n.s,u=e.s,o=n.e,c=e.e;if(!r[0]||!i[0])return r[0]?s:i[0]?-u:0;if(s!=u)return s;if(t=0>s,o!=c)return o>c^t?1:-1;for(s=-1,u=(o=r.length)<(c=i.length)?o:c;++s<u;)if(r[s]!=i[s])return r[s]>i[s]^t?1:-1;return o==c?0:o>c^t?1:-1},p.div=function(e){var t=this,n=t.constructor,r=t.c,i=(e=new n(e)).c,s=t.s==e.s?1:-1,u=n.DP;if((u!==~~u||0>u||u>1e6)&&c("!Big.DP!"),!r[0]||!i[0])return r[0]==i[0]&&c(0/0),i[0]||c(s/0),new n(0*s);var l,a,f,h,d,p,v=i.slice(),m=l=i.length,g=r.length,w=r.slice(0,l),b=w.length,x=e,_=x.c=[],y=0,S=u+(x.e=t.e-e.e)+1;for(x.s=s,s=0>S?0:S,v.unshift(0);b++<l;w.push(0));do{for(f=0;10>f;f++){if(l!=(b=w.length))h=l>b?1:-1;else for(d=-1,h=0;++d<l;)if(i[d]!=w[d]){h=i[d]>w[d]?1:-1;break}if(!(0>h))break;for(a=b==l?i:v;b;){if(w[--b]<a[b]){for(d=b;d&&!w[--d];w[d]=9);--w[d],w[b]+=10}w[b]-=a[b]}for(;!w[0];w.shift());}_[y++]=h?f:++f,w[0]&&h?w[b]=r[m]||0:w=[r[m]]}while((m++<g||w[0]!==p)&&s--);return _[0]||1==y||(_.shift(),x.e--),y>S&&o(x,u,n.RM,w[0]!==p),x},p.eq=function(e){return!this.cmp(e)},p.gt=function(e){return this.cmp(e)>0},p.gte=function(e){return this.cmp(e)>-1},p.lt=function(e){return this.cmp(e)<0},p.lte=function(e){return this.cmp(e)<1},p.sub=p.minus=function(e){var t,n,r,i,s=this,u=s.constructor,o=s.s,c=(e=new u(e)).s;if(o!=c)return e.s=-c,s.plus(e);var l=s.c.slice(),a=s.e,f=e.c,h=e.e;if(!l[0]||!f[0])return f[0]?(e.s=-c,e):new u(l[0]?s:0);if(o=a-h){for((i=0>o)?(o=-o,r=l):(h=a,r=f),r.reverse(),c=o;c--;r.push(0));r.reverse()}else for(n=((i=l.length<f.length)?l:f).length,o=c=0;n>c;c++)if(l[c]!=f[c]){i=l[c]<f[c];break}if(i&&(r=l,l=f,f=r,e.s=-e.s),(c=(n=f.length)-(t=l.length))>0)for(;c--;l[t++]=0);for(c=t;n>o;){if(l[--n]<f[n]){for(t=n;t&&!l[--t];l[t]=9);--l[t],l[n]+=10}l[n]-=f[n]}for(;0===l[--c];l.pop());for(;0===l[0];)l.shift(),--h;return l[0]||(e.s=1,l=[h=0]),e.c=l,e.e=h,e},p.mod=function(e){var t,n=this,r=n.constructor,i=n.s,s=(e=new r(e)).s;return e.c[0]||c(0/0),n.s=e.s=1,t=1==e.cmp(n),n.s=i,e.s=s,t?new r(n):(i=r.DP,s=r.RM,r.DP=r.RM=0,n=n.div(e),r.DP=i,r.RM=s,this.minus(n.times(e)))},p.add=p.plus=function(e){var t,n=this,r=n.constructor,i=n.s,s=(e=new r(e)).s;if(i!=s)return e.s=-s,n.minus(e);var u=n.e,o=n.c,c=e.e,l=e.c;if(!o[0]||!l[0])return l[0]?e:new r(o[0]?n:0*i);if(o=o.slice(),i=u-c){for(i>0?(c=u,t=l):(i=-i,t=o),t.reverse();i--;t.push(0));t.reverse()}for(o.length-l.length<0&&(t=l,l=o,o=t),i=l.length,s=0;i;)s=(o[--i]=o[i]+l[i]+s)/10|0,o[i]%=10;for(s&&(o.unshift(s),++c),i=o.length;0===o[--i];o.pop());return e.c=o,e.e=c,e},p.pow=function(e){var t=this,n=new t.constructor(1),r=n,i=0>e;for((e!==~~e||-1e6>e||e>1e6)&&c("!pow!"),e=i?-e:e;1&e&&(r=r.times(t)),e>>=1;)t=t.times(t);return i?n.div(r):r},p.round=function(e,t){var n=this,r=n.constructor;return null==e?e=0:(e!==~~e||0>e||e>1e6)&&c("!round!"),o(n=new r(n),e,null==t?r.RM:t),n},p.sqrt=function(){var e,t,n,r=this,i=r.constructor,s=r.c,u=r.s,l=r.e,a=new i("0.5");if(!s[0])return new i(r);0>u&&c(0/0),u=Math.sqrt(r.toString()),0===u||u===1/0?(e=s.join(""),e.length+l&1||(e+="0"),t=new i(Math.sqrt(e).toString()),t.e=((l+1)/2|0)-(0>l||1&l)):t=new i(u.toString()),u=t.e+(i.DP+=4);do n=t,t=a.times(n.plus(r.div(n)));while(n.c.slice(0,u).join("")!==t.c.slice(0,u).join(""));return o(t,i.DP-=4,i.RM),t},p.mul=p.times=function(e){var t,n=this,r=n.constructor,i=n.c,s=(e=new r(e)).c,u=i.length,o=s.length,c=n.e,l=e.e;if(e.s=n.s==e.s?1:-1,!i[0]||!s[0])return new r(0*e.s);for(e.e=c+l,o>u&&(t=i,i=s,s=t,l=u,u=o,o=l),t=new Array(l=u+o);l--;t[l]=0);for(c=o;c--;){for(o=0,l=u+c;l>c;)o=t[l]+s[c]*i[l-c-1]+o,t[l--]=o%10,o=o/10|0;t[l]=(t[l]+o)%10}for(o&&++e.e,t[0]||t.shift(),c=t.length;!t[--c];t.pop());return e.c=t,e},p.toString=p.valueOf=p.toJSON=function(){var e=this,t=e.constructor,n=e.e,r=e.c.join(""),i=r.length;if(n<=t.E_NEG||n>=t.E_POS)r=r.charAt(0)+(i>1?"."+r.slice(1):"")+(0>n?"e":"e+")+n;else if(0>n){for(;++n;r="0"+r);r="0."+r}else if(n>0)if(++n>i)for(n-=i;n--;r+="0");else i>n&&(r=r.slice(0,n)+"."+r.slice(n));else i>1&&(r=r.charAt(0)+"."+r.slice(1));return e.s<0&&e.c[0]?"-"+r:r},p.toExponential=function(e){return null==e?e=this.c.length-1:(e!==~~e||0>e||e>1e6)&&c("!toExp!"),s(this,e,1)},p.toFixed=function(e){var t,n=this,r=n.constructor,i=r.E_NEG,u=r.E_POS;return r.E_NEG=-(r.E_POS=1/0),null==e?t=n.toString():e===~~e&&e>=0&&1e6>=e&&(t=s(n,n.e+e),n.s<0&&n.c[0]&&t.indexOf("-")<0&&(t="-"+t)),r.E_NEG=i,r.E_POS=u,t||c("!toFix!"),t},p.toPrecision=function(e){return null==e?this.toString():((e!==~~e||1>e||e>1e6)&&c("!toPre!"),s(this,e-1,2))},l=i(),void 0!==(r=function(){return l}.call(t,n,t,e))&&(e.exports=r)}()},function(e,t){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-cell"},[n("div",[n("p",{"class":e.labelClass,style:{width:e.$parent.labelWidth,textAlign:e.$parent.labelAlign,marginRight:e.$parent.labelMarginRight},domProps:{innerHTML:e._s(e.title)}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.readonly,expression:"!readonly"}],staticClass:"weui-cell__ft vux-cell-primary","class":{"vux-number-round":"round"===e.buttonStyle},staticStyle:{"font-size":"0"}},[n("div",{style:{"float":e.align}},[n("a",{staticClass:"vux-number-selector vux-number-selector-sub","class":{"vux-number-disabled":e.disabledMin},on:{click:e.sub}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"}},[n("defs"),n("path",{attrs:{d:"M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"}})])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-number-input",style:{width:e.width},attrs:{name:e.name,readonly:!e.fillable,pattern:"[0-9]*",type:"number"},domProps:{value:e.currentValue},on:{blur:[e.blur,function(){e.$forceUpdate()}],input:function(t){t.target.composing||(e.currentValue=e._n(t.target.value))}}}),e._v(" "),n("a",{staticClass:"vux-number-selector vux-number-selector-plus","class":{"vux-number-disabled":e.disabledMax},on:{click:e.add}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20"}},[n("defs"),n("path",{attrs:{d:"M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"}})])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.readonly,expression:"readonly"}],staticClass:"weui-cell__ft vux-cell-primary"},[e._v("\n    "+e._s(e.value)+"\n  ")])])},r=[],i={render:n,staticRenderFns:r};t.a=i}])})});