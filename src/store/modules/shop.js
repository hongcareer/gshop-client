import Vue from 'vue'
import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from "../../Api";
import {
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from "../mutation-type";

const state={
  goods:[],
  ratings:[],
  info:{},
  cartFoods:[]
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
  //增加食物的数量
  [ADD_FOOD_COUNT](state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++;
    }

  },
  //减少食物的数量
  [REDUCE_FOOD_COUNT](state,{food}){
    if(food.count>0){
      food.count--
      //从cartFoods中删除数量为0的食物
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }

  }
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
  getFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(ADD_FOOD_COUNT,{food})
    }else{
      commit(REDUCE_FOOD_COUNT,{food})
    }
  }

};
const getter={
  cartFoods(){
    let foods = [];
    state.goods.forEach(good=>{
      good.forEach(food=>{
        foods.push(food)
      })
    });
    return foods
  }
}
export default {
  state,
  mutations,
  actions,
  getter
}

