import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    msite,
    user
  },
  actions,
  getters
})
