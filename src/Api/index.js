import ajax from './ajax'
// http://localhost:5000/position/:geohash
// /api
const BASE = '/api'
export const reqPosition=(longitude,latitude)=>ajax(BASE+`/position/${latitude},${longitude}`)
//获取用户列表
export const reqCategorys = () =>ajax(BASE+'/index_category')

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude)=>ajax(BASE+`/shops`,{longitude,latitude})
