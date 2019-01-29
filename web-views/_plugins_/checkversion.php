<?php
    
if (!function_exists('is_hfapp')) {
    /**
     * 判断是否在好房App内打开
     *
     * @return int 是：1 否：0
     */
    function is_hfapp()
    {
        if (empty($_SERVER['HTTP_USER_AGENT'])) {
            return 0;
        }
        $userAgent = addslashes($_SERVER['HTTP_USER_AGENT']);
        return (strpos($userAgent, 'haofang') === false) ? 0 : 1;
    }
}

if (!function_exists('is_weixin')) {
    /**
     * 判断是否在好房App内打开
     *
     * @return int 是：1 否：0
     */
    function is_weixin()
    {
        if (empty($_SERVER['HTTP_USER_AGENT'])) {
            return 0;
        }
        $userAgent = addslashes($_SERVER['HTTP_USER_AGENT']);
        return (strpos($userAgent, 'MicroMessenger') === false) ? 0 : 1;
    }
}

?>

