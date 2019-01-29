var require,define;!function(e,r,t){function n(e,r,t,a){var o=n.stores[e]||{};if(o.exports)return void i.log("module "+e+" is exists!");var u=n.stores[e]=this;u.name=e,u.callback=r,u.deps=i.makeArray(t),u.needLoadDepsCount=u.deps.length,u.needNotices=i.makeArray(o.notices),u.exports={},u.url=o.url,u.isUse=a,u.status=n.STATUS.INITIALIZED,u.initialize()}var i={is:function(e,r){return Object.prototype.toString.call(e)=="[object "+r+"]"},makeArray:function(e){return e?i.is(e,"Array")?e:[e]:[]},each:function(e,r){if(i.is(e,"Array"))for(var t=0;t<e.length;t++)r(e[t],t);else for(var t in e)r(e[t],t)},inArray:function(e,r){if(e=i.makeArray(e),!e.length)return!1;if(e.indexOf)return e.indexOf(r)>-1;for(var t=0;t<e.length;t++)if(e[t]==r)return!0;return!1},log:function(){console&&console.log.apply(console,arguments)},extend:function(e,r){return i.each(r,function(r,t){e[t]=r}),e}};n.prototype={initialize:function(){var e=this;if(e.deps.length){var r=e.analyseNeedLoadDeps();r.length&&(e.status=n.STATUS.DEPSLOADING,n.loadDeps(r))}else e.complete()},analyseNeedLoadDeps:function(){var e=this,r=[];return i.each(e.deps,function(t){var i=n.stores[t];return i?i.status>n.STATUS.LOADED?i.notice(e):i.notices.push(e):(i=n.stores[t]={name:t,notices:[e],status:n.STATUS.UNDEFINED},void r.push(i))}),r},receiveNotice:function(){!--this.needLoadDepsCount&&this.complete()},notice:function(e){var r=this;if(e){if(r.status<n.STATUS.COMPLETED)return r.needNotices.push(e);e.receiveNotice()}else i.each(r.needNotices,function(e){e.receiveNotice()}),r.needNotices.length=0},complete:function(){var e=this;e.status=n.STATUS.COMPLETED,e.isUse&&e.execute(),e.notice()},execute:function(){var r=this;if(r.status!=n.STATUS.EXECUTED){r.status=n.STATUS.EXECUTED;var t=r.callback;if(i.is(t,"Function")){var a;(a=r.callback.call(e,n.require,r.exports,r))&&(r.exports=a)}else i.is(t,"Object")&&(r.exports=t)}return r.exports}},i.extend(n,{STATUS:{UNDEFINED:0,LOADING:1,LOADED:2,INITIALIZED:3,DEPSLOADING:4,COMPLETED:5,EXECUTED:6},stores:{},urlStores:{},getUrlStore:function(e){var r=n.urlStores[e];return r||(r=n.urlStores[e]={modules:[],status:n.STATUS.UNDEFINED,url:e}),r}}),n.analyseNeedLoadUrls=function(e){var r={};return i.each(e,function(e){var t=require.url(e.name),i=n.getUrlStore(t),a=i.status;return e.url=t,a==n.STATUS.LOADED?n.init(e.name):(i.modules.push(e.name),void(r[t]||a!=n.STATUS.UNDEFINED||(r[t]=i)))}),r},n.loadDeps=function(e){i.each(n.analyseNeedLoadUrls(e),function(e){e.status=n.STATUS.LOADING,n.load(e.url,function(){e.status=n.STATUS.LOADED,i.each(e.modules,function(e){n.init(e)}),e.modules.length=0})})},n.createElement=function(e){var t=/\.(?:css|less)(?:\?|$)/.test(e),i=t?"link":"script",a=r.createElement(i);return a.charset=n.require.config("charset"),t?(a.rel="stylesheet",a.type="text/css",a.href=e):(a.type="text/javascript",a.src=e),a},n.load=function(e,t){function i(){o||(!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onerror=a.onreadystatechange=null,u||(a.parentNode.removeChild(a),a=null),o=!0,t())}var a=n.createElement(e),o=!1,u="link"==a.tagName.toLowerCase(),s=+navigator.userAgent.replace(/.*(?:Apple|Android)WebKit\/(\d+).*/,"$1")<536,c="onload"in a;if(a.onload=a.onerror=a.onreadystatechange=i,r.getElementsByTagName("head")[0].appendChild(a),u&&(s||!c))var l=setTimeout(function(){return a.sheet?(clearTimeout(l),i()):void setTimeout(arguments.callee,50)},50)},n.init=function(e){n.stores[e].status<n.STATUS.INITIALIZED&&new n(e)},require=n.require=function(e){var r=require.id(e),t=n.stores[r];if(!t)throw new Error("module ["+r+"]' not found!");return t.execute()};var a=0,o={domain:"",baseurl:"",rules:[],charset:"utf-8",map:{}};i.extend(require,{helper:i,version:"2.0.1",load:n.load,config:function(e,r){if(i.is(e,"Object"))i.each(e,function(e,r){require.config(r,e)});else{if(r===t)return o[e];"map"==e?i.each(r,function(e,r){var t=o.map[r]||[];i.each(i.makeArray(e),function(e){t.push(require.id(e))}),o.map[r]=t}):o[e]=i.is(o[e],"Object")?i.extend(o[e]||{},r):r}},async:function(r,t){r=require.id(r),new n("_r_"+a++,function(){var n=[];i.each(i.makeArray(r),function(e){n.push(require(e))}),i.is(t,"Function")&&t.apply(e,n)},r,!0)},id:function(e){if(i.is(e,"Array"))return i.each(e,function(r,t){e[t]=require.id(r)}),e;if(/:\/\//.test(e))return e;var r=o.baseurl||"";return i.each(o.rules||[],function(r){e=e.replace(r[0],r[1])}),r&&"/"!=e.charAt(0)&&(e=r.replace(/\/+$/,"")+"/"+e),e.replace(/\/+/g,"/")},url:function(e){var r=o.map||{},t=o.domain||"";for(var n in r)if(r.hasOwnProperty(n)&&i.inArray(r[n],e)){e=n;break}return/^(?:https?\:)?\/\//.test(e)?e:t+e}}),define=function(e,r,t){if(i.is(t,"Function")){var a=r;r=t,t=a}t=require.id(t),e=require.id(e),new n(e,r,t)},define.Module=n}(window,document),require.config({}),function(){function e(t){var n=[];return r.each(t,function(r){var t=require.config("deps")[r]||[];n.push(r),n.unshift.apply(n,e(t))}),n}var r=require.helper,t=define;window.define=function(e,r){e=require.id(e),new define.Module(e,r)},r.extend(define,t);var n=0;require.async=function(t,i){t=r.makeArray(require.id(t));var a=e(t);new define.Module("_r_"+n++,function(){var e=[];r.each(t,function(r){e.push(require(r))}),r.is(i,"Function")&&i.apply(window,e)},a,!0)}}();