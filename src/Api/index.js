import ajax from './ajax'
// http://localhost:5000/position/:geohash
// /api
const BASE = '/api'
export const reqPosition=(longitude,latitude)=>ajax(BASE+`/position/${latitude},${longitude}`)

//获取用户列表
export const reqCategorys = () =>ajax(BASE+'/index_category')

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude)=>ajax(BASE+`/shops`,{longitude,latitude})

//发送短信验证码
export const sendCode = (phone) =>ajax(BASE+'/sendcode',{phone});

//用户名密码登录
export const reqUserLogin = ({name,pwd,captcha}) =>ajax(BASE+'/login_pwd',{name,pwd,captcha},'POST');

//短信验证码登录
export const reqSmsLogin = ({phone,code}) =>ajax(BASE+'/login_sms',{phone,code},'POST');

//登出
export const reqLogout = () =>ajax(BASE+'/logout');

//获取用户的信息，保存用户的信息，刷新时不丢失页面
export const reqUserInfo =()=>ajax(BASE+'/userinfo')

