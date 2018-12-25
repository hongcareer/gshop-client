import {reqLogout, reqUserInfo} from "../../Api";
import {RECEIVE_USER, RESET_USERINFO} from "../mutation-type";

const state={
  //包含着user的用户信息
  user:{}
};
const mutations={
  [RECEIVE_USER](state,{user}){
    state.user = user
  },
  [RESET_USERINFO](state){
    state.user = {}
  },
};
const actions={
  //同步保存用户的信息
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
  //登出
  async reqLogout({commit}){
    let result = await reqLogout();
    if(result.code === 0){
      commit(RESET_USERINFO)
    }
  }
};
const getter={

}
export default {
  state,
  mutations,
  actions,
  getter
}

