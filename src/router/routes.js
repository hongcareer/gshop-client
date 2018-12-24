
import Login from '../pages/Login/Login.vue'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Shop from '../pages/Shop/Shop.vue'
import shopGoods from '../pages/Shop/shopGoods/shopGoods'
import shopInfo from '../pages/Shop/shopInfo/shopInfo'
import shopRatings from '../pages/Shop/shopRatings/shopRatings'

export default [
  {
    path:'/msite',
    component:Msite,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/order',
    component:Order,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'goods',
        component:shopGoods,
      },
      {
        path:'ratings',
        component:shopRatings,
      },
      {
        path:'info',
        component:shopInfo,
      },
      {
        path:'/',
        redirect:'goods',
      },
    ]
  },
  {
    path:'/',
    redirect: '/msite'
  }
]
