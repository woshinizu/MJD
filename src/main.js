import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/commen.less' // 引入公用样式

import { Search,Icon,Image,Swipe,SwipeItem,Tab,Tabs,Button } from 'vant';
Vue.use(Search).use(Icon).use(Image).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Button)
// import { Search,Button,Icon,Tab, Tabs,Swipe, SwipeItem } from 'vant';
// import '@/less/commen.less' // 引入公用样式
// Vue.use(Search)
// Vue.use(Button).use(Icon).use(Tab).use(Tabs).use(Swipe).use(SwipeItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
