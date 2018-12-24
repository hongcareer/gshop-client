
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Navheader from './components/Navheader/Navheader';
import Star from './components/Star/Star'
import {Button} from 'mint-ui';

Vue.component('Navheader',Navheader);
Vue.component('Star',Star)
Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
