import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import login from '../views/login.vue'
import sign from '../views/sign.vue'
import setting from '../views/setting.vue'
import update from '../views/update.vue'
// import Password from './my/se'nnguyjhbmn
import myOrder from '../components/my/myOrder.vue'
import home from './home/home'
import found from './found/found'
import classification from './classification/classification'
import my from './my/my'
// import login from './my/my'
import shoppingcart from './shoppingcart/shopping-cart'
import details from '@/components/commonComponents/details.vue'
import look from '@/components/commonComponents/look.vue'
import homePage from '@/components/commonComponents/homePage.vue'
import particulars from '@/components/commonComponents/particulars.vue'
import placeOrder from '@/components/placeOrder/placeOrder.vue'

import Search from '@/components/home/header/search.vue'
import SearchList from '@/components/home/header/searchList.vue'
import adr from '../views/adr.vue'
import newAdd from '../views/newAdd.vue'
import bianji from '../views/bianji.vue'

import setPassword from '@/views/Password/setPassword.vue'

import lmxAll from '@/components/my/LMX/lmxAll.vue'
import cancel from '@/components/my/LMX/cancel.vue'
import done from '@/components/my/LMX/done.vue'
import wait from '@/components/my/LMX/wait.vue'
import waitHUO from '@/components/my/LMX/waitHUO.vue'
import doneC from '@/components/my/LMX/doneC.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/index/home',
    children: home.concat(found, classification, my, shoppingcart)
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign
  },
  {
    path: '/setting',
    name: 'setting',
    component: setting,
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path:'/details',
    name:'details',
    component:details,

  }, {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/searchList',
    name: 'searchList',
    component: SearchList
  },
  {
    path: '/adr',
    name: 'adr',
    component: adr
  },
  {
    path: '/newAdd',
    name: 'newAdd',
    component: newAdd
  },
  {
    path: '/bianji',
    name: 'bianji',
    component: bianji
  },
  {
    path: '/look',
    name: 'look',
    component: look
  },
  {
    path:'/homePage',
    name:'homePage',
    redirect:'/homePage/head',
    component:homePage,
    children:[
      {
        path:'/homePage/head',
        component:() => import(/* webpackChunkName: "head" */ '../components/found/recommend/head.vue')
      },
      {
          path:'/homePage/allcommodity',
          component:() => import(/* webpackChunkName: "allcommodity" */ '../components/found/recommend/allcommodity.vue')
      },
      {
          path:'/homePage/activity',
          component:() => import(/* webpackChunkName: "activity" */ '../components/found/recommend/activity.vue')
      },
      {
          path:'/homePage/sort',
          component:() => import(/* webpackChunkName: "sort" */ '../components/found/recommend/sort.vue')
      },
    ]},
    {
    path: '/homePage',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: particulars
  },
  {
    path: '/placeOrder',
    name: 'placeOrder',
    component: placeOrder,
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: setPassword,
  }, {
    path: '/myOrder',
    name: 'myOrder',
    component: myOrder,
    redirect:'/myOrder/lmxAll',
    children: [
      {
        path: '/myOrder/lmxAll',
        name: 'lmxAll',
        component: lmxAll
      },
      {
        path: '/myOrder/wait',
        name: 'wait',
        component: wait
      },
      {
        path: '/myOrder/waitHUO',
        name: 'waitHUO',
        component: waitHUO
      },
      {
        path: '/myOrder/done',
        name: 'done',
        component: done
      },
      {
        path: '/myOrder/cancel',
        name: 'cancel',
        component: cancel
      },
      
    ]
  },
  {
    path: '/doneC',
    name: 'doneC',
    component: doneC
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
