define('common:components/dictionary/dictionary.js', function(require, exports, module){
/**
 * 安心管
 * Copyright 2016 Baidu Inc. All rights reserved.
 *
 * @file 通用枚举数据
 */

import Enum from 'enum';

/**
 * 预约状态
 *
 * @enum
 */
export const AppointmentStatus = new Enum(
    {alias: '待审核', text: '待审核', value: 1},
    {alias: '待预约', text: '待预约', value: 2},
    {alias: '已预约', text: '已预约', value: 3},
    {alias: '已取消', text: '已取消', value: 4},
    {alias: '已驳回', text: '已驳回', value: 5},
    {alias: '已办理', text: '已办理', value: 6},
    {alias: '已失约', text: '已失约', value: 7}
);

/**
 * 核验状态
 *
 * @enum
 */
export const VerifiedStatus = new Enum(
    {alias: '待核验', text: '待核验', value: 1},
    {alias: '无需核验', text: '无需核验', value: 2},
    {alias: '核验通过', text: '核验通过', value: 3},
    {alias: '核验未通过', text: '核验未通过', value: 4}
);

export const Slot = new Enum(
    {alias: '上午 ', text: '上午', value: 1},
    {alias: '下午', text: '下午', value: 2}
);

export const BusinessType = new Enum(
    {alias: '网签和资金监管', text: '网签和资金监管', value: 1}
);

/**
 *
 * 资金监管银行
 * @enum
 */
export const RegularBank = new Enum(
    {alias: '光大', text: '光大ZJJG-2018', value: 1},
    {alias: '中信', text: '中信ZJJG-2018', value: 2}
);


/**
 *
 * 资金监管银行
 * @enum
 */
export const IsTrustee = new Enum(
    {alias: '本人', text: '本人', value: 0},
    {alias: '受托人', text: '受托人', value: 1}
);

/*
* 仅看今天的
*
* @enum
*/
export const OnlyToday = new Enum(
    {alias: '仅看今天', text: '仅看今天', value: 1}
);
/*
 * 用户状态1 有效 2无效 3停用
 *
 * */
export const UserOrder = new Enum(
    {text: '有效', value: 1, alias: 'valid'},
    {text: '无效', value: 2, alias: 'invalid'},
    {text: '停用', value: 3, alias: 'stop'}
);

/*
 * 证件类型，
 * 1 身份证,
 * 2 户口薄,
 * 3 统一社会信用代码,
 * 4 组织机构代码,
 * 5 港澳居民通行证,
 * 6 来往大陆通行证,
 * 7 护照,
 * 8 士官证,
 * 9 军官证,
 * 10 营业执照,
 * 11 其它证件
 *
 * */
export const CardType = new Enum(
    {text: '居民身份证', value: 1, alias: "SFZ"},
    {text: '户口簿(未成年人)', value: 2, alias: "HKB"},
    {text: '统一社会信用代码', value: 3, alias: "TYSHXYDM"},
    {text: '组织机构代码证', value: 4, alias: "ZZJJDMZ"},
    {text: '港澳居民来往内地通行证', value: 5, alias: "GATXZ"},
    {text: '台湾居民来往大陆通行证', value: 6, alias: "TWTXZ"},
    {text: '护照(外国国籍)', value: 7, alias: "HZ"},
    {text: '士官证', value: 8, alias: "SGZ"},
    {text: '军官证', value: 9, alias: "JGZ"},
    {text: '营业执照', value: 10, alias: "YYZZ"},
    {text: '其他证件', value: 11, alias: "QTZJ"}
);

/*
 * 抵押类型
 * 1 一般抵押,
 * 2 最高频抵押,
 *
 * */
export const MortgageType = new Enum(
    {text: '一般抵押', value: 1, alias: "normal"},
    {text: '最高额抵押', value: 2, alias: "highest"}
);
/*
 * 登记类型
 * 1 一般抵押,
 * 2 最高频抵押,
 *
 * */
// export const RegisterType = new Enum(
//   {text: '二手房买卖登记', value: 1, alias: "NotNewHouse"},
//   {text: '抵押权设立登记', value: 2, alias: "MortRightReg"},
//   {text: '商品房转移登记', value: 3, alias: "TranHouseReg"},
// );

/*
 * 机构信息的: 附件类型
 *
 * 1营业执照 2用印合同 3合同附加条款 4付款凭证 5其他材料
 *
 * */
export const ComponentMaterialType = new Enum(
    {text: '营业执照', value: 1, alias: "bizLicense"},
    {text: '用印合同', value: 2, alias: "printingContract"},
    {text: '合同附加条款', value: 3, alias: "additionalAgreement"},
    {text: '付款凭证', value: 4, alias: "paymentVoucher"},
    {text: '其他材料', value: 5, alias: "others"},
);

/*
 * 机构信息的: 机构类型
 *
 * 1开发商 2银行 3小贷公司 4房产中介 5其他
 *
 * */
export const ComponentType = new Enum(
    {text: '房产商', value: 1, alias: "developers"},
    {text: '银行', value: 2, alias: "bank"},
    {text: '小贷', value: 3, alias: "smallLoanCompany"},
    {text: '房产中介', value: 4, alias: "agency"},
    {text: '其他', value: 5, alias: "others"},
);

/*
 * 机构信息的: 业务范围
 *
 * 1抵押权设立登记 2二手房买卖登记 3 商品房转移登记  4抵押权注销登记
 * */
export const BusinessScope = new Enum(
    {text: '抵押权设立/注销', value: 2, alias: "mortgage"},
    {text: '二手房买卖登记', value: 1, alias: "secondHand"},
    {text: '商品房转移登记', value: 3, alias: "goods"},
);
/*
 * 机构信息的: 登记类别
 *
 * 说明：跟 业务范围 差不多，只是 业务范围合并了 抵押权设立登记 和 抵押权注销登记
 *
 * 1抵押权设立登记 2二手房买卖登记 3 商品房转移登记  4抵押权注销登记
 *
 * */
export const RegisterTypes = new Enum(
    {text: '二手房买卖登记', value: 1, alias: "secondHand"},
    {text: '抵押权设立登记', value: 2, alias: "mortgageSetup"},
    {text: '商品房转移登记', value: 3, alias: "goods"},
    {text: '抵押权注销登记', value: 4, alias: "mortgageLogoff"},
);

/*
 * 机构信息的: 机构状态
 *
 * 状态 1有效 2 无效 3停用
 *
 * */
export const ComponentStatus = new Enum(
    {text: '有效', value: 1, alias: "valid"},
    {text: '无效', value: 2, alias: "invalid"},
    {text: '停用', value: 3, alias: "stopped"},
);

/*
*订单管理：订单状态
*
*  // 1新建 2提交申请 3预审核 4受理 5初审 6审核登簿 7制证 8发证 9终止 10注销完成
* */
export const OrderStatus = new Enum(
    {text: '新建', value: 1, alias: "build"},
    {text: '预审中', value: 2, alias: "firstAuth"},
    {text: '受理中', value: 3, alias: "accept"},
    {text: '审核登簿中', value: 4, alias: "audited"},
    {text: '制证中', value: 6, alias: "certificate"},
    {text: '发证中', value: 7, alias: "certificating"},
    {text: '已发证 ', value: 8, alias: "certificated"},
    {text: '终止', value: 9, alias: "stopped"},
    {text: '注销完成', value: 10, alias: "destoryed"},
)


/*
批量新增结果
1.成功 2,.失败
* */
export const UserSuccessStatus = new Enum(
    {text: '成功', value: 1, alias: "success"},
    {text: '失败', value: 2, alias: "fail"},
);
/**
 * 上报问题状态
 * @type {Enum}
 */
export const ReportIssueStatus = new Enum(
    {text: '未解决', value: 1, alias: "UNSOLVE"},
    {text: '已解决', value: 2, alias: "SOLVED"},
);
/*
* 批量导入板块专用的枚举信息（后端设计失策导致起前端冗余！）。其他地方设计登记类别的,请用 RegisterTypes !important
* */
export const RegisterTypesImport = new Enum(
    {text: '抵押权设立登记', value: 2, alias: "mortgageSetupI"},
    {text: '二手房买卖登记', value: 3, alias: "secondHandI"},
    {text: '商品房转移登记', value: 4, alias: "goodsI"},
    {text: '抵押权注销登记', value: 5, alias: "mortgageLogoffI"},
);

/**
 * OCR 解析状态：  0-解析中 1-解析超时 2-解析成功 3-解析失败
 * @type {Enum}
 */
export const OcrStatusEnum = new Enum(
    {text: '解析中', value: 0, alias: 'ANALYSING'},
    {text: '解析超时', value: 1, alias: 'TIMEOUT'},
    {text: '解析成功', value: 2, alias: 'SUCCESS'},
    {text: '解析失败', value: 3, alias: 'FAILED'},
)
});