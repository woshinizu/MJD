import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/commen.less' // 引入公用样式

import { Search,Icon,Image,Swipe, SwipeItem,Tab, Tabs } from 'vant';
Vue.use(Search).use(Icon).use(Image).use(Swipe).use(SwipeItem).use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
