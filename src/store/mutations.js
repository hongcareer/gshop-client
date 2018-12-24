//包含着n个直接修改状态数据的方法
import {
  RECEIVE_CATEGORYS,
  RECEIVE_POSITION,
  RECEIVE_SHOPS,
  RECEIVE_USER
}from './mutation-type';


export default {
  [RECEIVE_POSITION](state,{position}){
    state.position = position
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER](state,{user}){
    state.user = user
  }
}
