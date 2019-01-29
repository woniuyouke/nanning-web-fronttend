define("web:static/member/user/upload/upload.js",function(e){"use strict";e.async(["common:components/jquery/jquery.js","common:components/pcUI/uploader/uploader.js","common:components/pcUI/dialog/dialog.js","common:components/pcUI/suggestion/suggestion.js","common:components/pcUI/tips/tips.js"],function(e,i,o,t,s){var n={pics:[],init:function(){var i=this;e.ajax({url:"/web/goverp/api/house/"+window.configUrl.id+"/contract",type:"get",data:{id:window.configUrl.id},success:function(o){if(o.success){i.pics=o.data.contractPic,console.log(o.data.contractPic.length+" abc");for(var t=0;t<o.data.contractPic.length;t++){var n="http://"+window.configUrl.viewUrl+"/view/house/"+i.pics[t].imgKey+"/900x675."+i.pics[t].imgExt,c=e('<div class="image-item"><img src="'+n+'"><a class="images-del">x</a></div>');e("#credentials-img-uploader").append(c)}}else s.show("带入数据失败")}}),i.uploaderImg(),i.delImg()},uploaderImg:function(){var i=this;e("#selectCredentialsImg").on("click",function(){e("#selectCredentialsImgInput").trigger("click")}),e("#selectCredentialsImgInput").on("change",function(o){var t=new FormData,n=o.target.files||o.dataTransfer.files;if(console.log(n[0].type),"image/jpeg"!=n[0].type&&"image/jpg"!=n[0].type)return s.show("请上传jpg格式的照片"),!1;for(var c in n)t.append("part"+c,n[c]);e.ajax({url:"http://"+window.configUrl.postPicsUrl+"/upload/house.html",type:"post",data:t,contentType:!1,processData:!1,cache:!1,success:function(o){if(o.code)return s.show(o.file),!1;for(var t in o){var n={imgKey:o[t].sKey,imgExt:o[t].sExt};if(i.pics.push(n),/^(png|jpe?g)$/.test(o[t].sExt)){var c="http://"+window.configUrl.viewUrl+"/view/house/"+o[t].sKey+"/900x675."+o[t].sExt,a=e('<div class="image-item"><img src="'+c+'"><a class="images-del">x</a></div>');e("#credentials-img-uploader").append(a)}}}})})},delImg:function(){var i=this;e("#closeTips").on("click",function(){e(".smallTip").hide()}),e("#credentials-img-uploader").on("click",".images-del",function(){var o=e(this).parent(".image-item"),t=o.index();i.pics.splice(t,1),e("#selectCredentialsImgInput").val(""),o.remove()}),e(".sub").on("click",function(){var o=[],t=[],s=[],n=0,c=0,a=0,r=e(".tags input[type='checkbox']"),l=e(".collocation input[type='checkbox']"),p=e(".landlordRequest input[type='checkbox']");for(n in r)r[n].checked&&o.push(r.eq(n).attr("housetagindex"));for(c in l)l[c].checked&&t.push(l.eq(c).attr("housecollocationindex"));for(a in p)p[a].checked&&s.push(p.eq(a).attr("landlordrequestindex"));var u=(parseInt(e(".crpStatus input[name='ownerOne']:checked").val()),{contractPic:i.pics,housingId:window.configUrl.id||""});i.housePublish(u)}),e(".back").on("click",function(){location.href=history.back()})},housePublish:function(i){e.ajax(""!=window.configUrl.id?{url:"/web/goverp/api/house/"+window.configUrl.id+"/contract/upload",contentType:"application/json; charset=UTF-8",type:"post",data:JSON.stringify(i),dataType:"json",success:function(e){e.success?(s.show("上传合同成功"),setTimeout(function(){location.href="/pc/publishHouse/list"},300)):s.show(null!=e.fieldErrors?e.fieldErrors[0].msg:e.msg)}}:{url:window.configUrl.houseFormUrl,type:"post",contentType:"application/json; charset=UTF-8",data:JSON.stringify(i),dataType:"json",success:function(e){e.success?(s.show("发房成功"),setTimeout(function(){location.href="/pc/publishHouse/list"},300)):s.show(null!=e.fieldErrors?e.fieldErrors[0].msg:e.msg)}})}};n.init()})});