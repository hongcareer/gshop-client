import {reqCategorys, reqPosition, reqShops} from "../../Api";
import {RECEIVE_CATEGORYS, RECEIVE_POSITION, RECEIVE_SHOPS} from "../mutation-type";

const state={
  //包含着第一屏的数据
  position:{},
  categorys:[],
  shops:[],
  latitude: 40.2211,
  longitude: 114.41342,
};
const mutations={
  [RECEIVE_POSITION](state,{position}){
    state.position = position
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
};
const actions={
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
};
const getter={

}
export default {
  state,
  mutations,
  actions,
  getter
}
