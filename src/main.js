
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Navheader from './components/Navheader/Navheader';
import Star from './components/Star/Star'
import {Button} from 'mint-ui';
import CartControl from './components/CartControl/CartControl';
import Split from './components/Split/Split'
import './mock/mockServer'

Vue.component('Navheader',Navheader);
Vue.component('Star',Star)
Vue.component(Button.name,Button)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
