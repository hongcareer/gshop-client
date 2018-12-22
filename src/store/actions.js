//包含n个间接修改状态数据的方法的对象

import {
  RECEIVE_CATEGORYS,
  RECEIVE_POSITION,
  RECEIVE_SHOPS
}from './mutation-type';
//异步函数
import {
  reqPosition,
  reqCategorys,
  reqShops
} from '../Api/index'

export default {
  async getPosition({commit,state}){
    //发送请求
    let {latitude,longitude} = state;
    let result = await reqPosition(longitude,latitude);
    if(result.code === 0){
      let position = result.data;
      commit(RECEIVE_POSITION,{position})
    }
  },
  async getCategorys({commit}){
    let result = await reqCategorys()
    if(result.code === 0){
      let categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    let {latitude,longitude} = state;
    let result = await reqShops(longitude,latitude)
    if(result.code === 0){
      let shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
