import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from './home/home'
import found from './found/found'
import classification from './classification/classification'
import login from './login/login'
import shoppingcart from './shoppingcart/shopping-cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/index/home',
    children:home.concat(found,classification,login,shoppingcart)
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
