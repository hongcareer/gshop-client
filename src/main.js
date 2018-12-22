
import Vue from 'vue'
import App from './App'
import router from './router'

import Navheader from './components/Navheader/Navheader';
Vue.component('Navheader',Navheader)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
