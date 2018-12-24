//包含n个间接修改状态数据的方法的对象

import {
  RECEIVE_CATEGORYS,
  RECEIVE_POSITION,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USERINFO
} from './mutation-type';
//异步函数
import {
  reqPosition,
  reqCategorys,
  reqShops,
  reqLogout,
  reqUserInfo
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
  },
  //保存用户的信息
  saveUser({commit},result){
    if(result.code === 0){
      let user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  //异步保存用户的信息
  async saveUserInfo({commit}){
    let result = await reqUserInfo()
    if(result.code === 0){
      let user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  //登录
  async reqLogout({commit}){
    let result = await reqLogout();
    if(result.code === 0){
      commit(RESET_USERINFO)
    }
  }

}
