import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import login from '../views/login.vue'
import sign from '../views/sign.vue'
import setting from '../views/setting.vue'
// import Password from './my/se'nnguyjhbmn
import home from './home/home'
import found from './found/found'
import classification from './classification/classification'
import my from './my/my'
// import login from './my/my'
import shoppingcart from './shoppingcart/shopping-cart'
import details from '@/components/commonComponents/details.vue'

import Search from '@/components/home/header/search.vue'
import SearchList from '@/components/home/header/searchList.vue'

import Password from '@/views/Password/setPassword.vue'

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
    component: setting,
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
    path:'/setPassword',
    name:'setpasswordshang',
    component:Password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
