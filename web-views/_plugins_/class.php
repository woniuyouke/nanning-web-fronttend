<?php
/**
 * Created by PhpStorm.
 * User: stevensheng
 * Date: 2018/5/14
 * Time: 上午10:54
 */

//获取当前的导航
function getNavCur()
{
    $uri = $_SERVER['PHP_SELF'];
    $navCur = '租赁主页';
    if (strpos($uri, 'pc/publicrental') !== false) {
        $navCur = '公租房';
    }elseif (strpos($uri, 'pc/gov') !== false || strpos($uri, 'pc/main/gov') !== false) {
        $navCur = '国有房源';
    }elseif (strpos($uri, 'pc/common') !== false || strpos($uri, 'pc/main/detail.id') !== false || strpos($uri, 'pc/commuting/list') !== false) {
        $navCur = '市场房源';
    } elseif ((strpos($uri, 'pc/moreNews') !== false) || (strpos($uri, 'pc/news') !== false)) {
        $navCur = '租房动态';
    } elseif (strpos($uri, 'pc/user/login') !== false) {
        $navCur = '登录';
    } elseif (strpos($uri, 'pc/follow.html') !== false || strpos($uri, 'pc/user/schedule/list') !== false || strpos($uri, 'pc/user/setting') !== false || strpos($uri, 'pc/user/authinfo') !== false || strpos($uri, 'pc/user/account/chMobAc') !== false || strpos($uri, 'pc/user/account/resetLp') !== false || strpos($uri, 'pc/user/conice') !== false || strpos($uri, '/publishHouse/list') !== false || strpos($uri, '/user/zuyue/list') !== false || strpos($uri, '/user/zuyue/detail') || strpos($uri, 'user/publicrental/progress') || strpos($uri, 'user/listOfBills') || strpos($uri, 'user/cardList') || strpos($uri, 'publishHouse/list') || strpos($uri, '/company') !== false || strpos($uri, '/agent/list') !== false || strpos($uri, '/user/beian/list') !== false || strpos($uri, '/user/beian/detail') !== false || strpos($uri, 'pc/verify/edit') !== false || strpos($uri, 'pc/user/verification') !== false || strpos($uri, '/user/zuyue/addContract') !== false) {
        $navCur = '用户中心';
    } elseif (strpos($uri, 'pc/map') !== false) {
        $navCur = '地图找房';
    } elseif (strpos($uri, 'pc/agent') !== false) {
        $navCur = '便民服务';
    } elseif (strpos($uri, 'pc/verify/edit') !== false || strpos($uri, 'pc/user/verification') !== false || strpos($uri, 'pc/user/beian') !== false || strpos($uri, 'pc/user/zuyue/list') !== false) {
        $navCur = '';
    } elseif (strpos($uri, 'pc/user/member/agreement') !== false) {
        $navCur = '';
    }

    return $navCur;
}

//获取配置
function getModuleConfig()
{
    $F_GlobalData = array(
        'moduleConfig' => array(
            'publishHouse' => true, //房源发布(C端个人房源发布)
            /*新闻*/
            'marketNews' => true, //市场信息展示
            'policyNews' => true, //政策发布
            /*市场房源*/
            'houseInfo' => true, //房源信息展示
            'orderHouse' => true, //预约看房
            'C2COrderHouse' => true,//C端预约看房
            'followMarketHouse' => true, //市场房源收藏
            'searchMarketHouse' => true, //便捷找房
            'map' => true,//地图找房
            'commuting' => true, //通勤找房
            /*中介服务*/
            'companyInfo' => true, //公司信息
            'agentInfo' => true,//个人经纪人
            /*公租房*/
            'noticeNews' => true,//公示信息
            'policyPublicNews' => true,//公租房政策发布
            'publicRentalInfo' => true, //公租房信息展示
            'followPublicRental' => true, //公租房收藏
            'searchPublicRental' => true, //公租房基础找房
            'mapsearchPublicRental' => true, //公租房地图找房
            'applyPublicRental' => true, //公租房申请
            'publicRentalProcess' => true, //公租房申请进度查询
            /*交易*/
            'C2BSign' => true, //C2B签约
            'C2CSign' => true, //C2C签约
            'C2BUnrent' => true, //C2B退租
            'C2CUnrent' => true, //C2C退租
            'contract' => true, //合同
            'C2BDeal' => true, //C2B交易
            'C2CDeal' => true, //C2C交易
            /*帐号*/
            'account' => true,//账户设置
            'nameCertification' => true,//实名认证
            'realPersonCertification' => true,//实人认证

        ),
    );
    return $F_GlobalData;
}

//安全漏洞，过滤部分前端字符串
function strFilterHtml($str)
{
    //dd($str);
    $replace = ['alert', 'prompt','onload','onmouseover','onfocus','onerror','script','src','mid','insert','select','delete','update','declare','iframe','onreadystatechange','atestu','xss','svg','confirm','onabort','onblur','onchange','onclick','ondblclick','onkeydown','onkeypress','onkeyup','onmousedown','onmousemove','onmouseout','onmouseover','onmouseup','onmouseup','onreset','onresize','onselect','onsubmit','onunload','location','window','eval','new','Function', '\{', '\}', '\[', '\]', '!'];
    foreach ($replace as $item){
        if (preg_match("/$item/i", $str)){
            return '1';
        }
    }
    return $str;
}