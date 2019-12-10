import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import login from '../views/login.vue'
import sign from '../views/sign.vue'
import setting from '../views/setting.vue'
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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/index/home',
    children:home.concat(found,classification,my,shoppingcart)
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
    component: setting
  },
  {
    path:'/details',
    name:'details',
    component:details,

},{
    path:'/search',
    name:'search',
    component:Search,
  },
  {
    path:'/searchList',
    name:'searchList',
    component:SearchList
  },
  {
    path:'/look',
    name:'look',
    component:look
  },
  {
    path:'/homePage',
    name:'homePage',
    component:homePage
  },
  {
    path:'/particulars',
    name:'particulars',
    component:particulars
  },
  {
    path:'/placeOrder',
    name:'placeOrder',
    component:placeOrder,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
