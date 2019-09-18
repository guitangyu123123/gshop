import ajax from "./ajax";

// 封装请求接口
// 根据经纬度获取位置详情
export const reqAddress= (geohash)=> ajax(`/positon/${geohash}`)
// 获取食品分类列表
export const reqFoodType = ()=> ajax('index_category')
// 获取商家类表商铺
export const reqShops = (longitude,latitude)=> ajax('/shops',{longitude,latitude})
//根据经纬度和关键字搜索商铺列表
export const reqShopLists =(keyword,{longitude,latitude})=> ajax('/search_shops',{keyword,geohash:{longitude,latitude}})
// 获取一次性验证码
export const reqCaptcha = ()=> ajax('captcha')
// 用户名密码登录
export const reqLogin = ()=> ajax('login_pwd')
// 发送短信验证码
export const reqSendCode = ()=> ajax('sendcode')
// 手机号验证码登录
export const reqLoginSms = ()=> ajax('login_sms')
// 根据回话获取用户信息
export const reqUserinfo = ()=> ajax('userinfo')
// 用户退出
export const reqLoginOut = ()=> ajax('loginout')
