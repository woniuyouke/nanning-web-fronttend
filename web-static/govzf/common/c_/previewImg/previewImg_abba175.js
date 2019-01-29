define('common:components/previewImg/previewImg.js', function(require, exports, module){
/*
* create by uncletang on 2017-04-07 16:57
* 图片放大插件
* */
class previewImg {
  open(imgArray, current) {
    imgArray = [].filter.call(imgArray, item => {
      if (item.src && item.src !== location.href) {
        return item
      }
    });

    var html = '<div id="previewImg"><div class="mask preview_mask_material"></div>'
      + '<div class="img_preview_container_material" id="preview_container">'
      + '<div class="img_preview_inner" id="img_container">'
      + '<span class="img_preview_wrp" style="" id="img_dom">'
      + '<img />'
      + '<a href="javascript:;" class="img_preview_close" id="closebtn" title="关闭">'
      + '<i class="img_preview_material_close">关闭</i>'
      + '</a>'
      + '</span>'
      + '<span class="vm_box"></span>'
      + '</div>'
      + '<span class="vm_box"></span>'
      + '<div class="img_preview_opr_container   " id="img_opr_container">'
      + '<ul class="img_preview_opr_list">'
      // + ' <li class="img_preview_opr_item"><a href="javascript:;" id="btnview" title="查看原图"><i class="img_preview_material origin">查看原图</i>&nbsp;</a></li>'
      + '<li class="img_preview_opr_item"><a href="javascript:;" id="btnprev" title="查看上一个"><i class="img_preview_material prev">上一个</i>&nbsp;</a></li>'
      + '<li class="img_preview_opr_item"><a href="javascript:;" id="btnnext" title="查看下一个"><i class="img_preview_material next">下一个</i>&nbsp;</a></li>'
      // + '<li class="img_preview_opr_item"><a href="javascript:;" id="btndown" title="下载图片"><i class="img_preview_material download">下载图片</i>&nbsp;</a></li>'
      + '</ul>'
      + '</div>'
      + '</div></div>';
    if ($("#previewImg").length > 0) {
      $("#previewImg").unbind();
      $('#previewImg').remove();
    }
    $('body').append(html);


    var thissrc = current.attr('src');

    $('#img_dom img').attr({ "src": thissrc });

    var thisIndex = this._getCurrentIndex(imgArray, thissrc);
    if (imgArray.length == 1) {
      $('#img_opr_container').addClass('next_disabled');
      $('#img_opr_container').addClass('prev_disabled');
    }
    if (thisIndex == imgArray.length - 1 && imgArray.length > 1) {
      $('#img_opr_container').addClass('next_disabled');
    }
    if (thisIndex == 0 && imgArray.length > 1) {
      $('#img_opr_container').addClass('prev_disabled');
    }

    //查看原图
    $("#btnview").unbind().bind('click', function (e) {
      var url = imgArray[thisIndex].src;
      var b = url.lastIndexOf("/");
      var t = url.substring(b + 1, url.length).toString();
      var str = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>'
        + t + '</title></head><body ><img src="' + url + '" /></body></html>';
      var a = window.open("");
      a.document.write(str);
    })
    //查看上一个
    $("#btnprev").unbind().bind('click', function (e) {
      if (thisIndex > 0)
        thisIndex--;
      if (thisIndex > 0) {
        $('#img_dom img').attr({ "src": imgArray[thisIndex].src });
      } else if (thisIndex == 0) {
        $('#img_dom img').attr({ "src": imgArray[thisIndex].src });
        $('#img_opr_container').addClass('prev_disabled');
      } else {
        $('#img_opr_container').addClass('prev_disabled');
      }
      if (imgArray.length > 1)
        $('#img_opr_container').removeClass('next_disabled');
    })
    //查看下一个
    $("#btnnext").unbind().bind('click', function (e) {
      if (thisIndex < imgArray.length - 1)
        thisIndex++;
      if (thisIndex < imgArray.length - 1) {
        var ttt = imgArray[thisIndex].src;
        $('#img_dom img').attr({ "src": imgArray[thisIndex].src });
      } else if (thisIndex == imgArray.length - 1) {
        $('#img_dom img').attr({ "src": imgArray[thisIndex].src });
        $('#img_opr_container').addClass('next_disabled');
      } else {
        $('#img_opr_container').addClass('next_disabled');
      }
      if (imgArray.length > 1)
        $('#img_opr_container').removeClass('prev_disabled');
    })
    //下载图片
    // $("#btndown").unbind().bind('click',(e)=>{
    //     var url = imgArray[thisIndex].src;
    //     this._downloadURI(imgArray[thisIndex].src,"图片下载")
    // })
    //点击其他空白地方关闭
    $("#previewImg").bind('click', function (e) {
      var $target = $(e.target);
      var bool = $target.parent().andSelf().is("#img_dom") ||
        $target.parent().andSelf().is("#img_opr_container") ||
        $target.parent().parent().andSelf().is("#img_opr_container") ||
        $target.parent().parent().parent().andSelf().is("#img_opr_container") ||
        $target.parent().parent().parent().parent().andSelf().is("#img_opr_container");
      if (!bool) {
        $("#btnview").unbind();
        $("#btnprev").unbind();
        $("#btnnext").unbind();
        $("#btndown").unbind();
        $("#previewImg").unbind();
        $('#previewImg').remove();
      }
    })
    //关闭
    $("#closebtn").unbind().bind('click', function (e) {
      $("#btnview").unbind();
      $("#btnprev").unbind();
      $("#btnnext").unbind();
      $("#btndown").unbind();
      $("#previewImg").unbind();
      $('#previewImg').remove();
    })
  }

  _downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.target = '_blank';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  _getCurrentIndex(imgArray, s) {
    var token = 0;
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].src == s) {
        token = i;
        break;
      }
    }
    return token;
  }
}
module.exports = new previewImg();
});