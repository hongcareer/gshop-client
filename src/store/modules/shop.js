import {reqShopGoods,reqShopRatings,reqShopInfo} from "../../Api";
import {RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO,RECEIVE_SHOP_RATINGS} from "../mutation-type";

const state={
  goods:[],
  ratings:[],
  info:{},

};
const mutations={
  [RECEIVE_SHOP_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_SHOP_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_SHOP_INFO](state,{info}){
    state.info = info
  },

};
const actions={
  //提交参数到mutations中，mutations更显状态数据

  async getShopGoods({commit}){
    let result = await reqShopGoods()
    if(result.code === 0){
      let goods = result.data
      commit(RECEIVE_SHOP_GOODS,{goods})
    }
  },
  async getShopRatings({commit}){
    let result = await reqShopRatings()
    if(result.code === 0){
      let ratings = result.data
      commit(RECEIVE_SHOP_RATINGS,{ratings})
    }
  },
  async getShopInfo({commit}){
    let result = await reqShopInfo();
    if(result.code === 0){
      let info = result.data

      commit(RECEIVE_SHOP_INFO,{info})
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

