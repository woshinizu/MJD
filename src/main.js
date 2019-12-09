import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search,Button,Icon,Tab, Tabs,TreeSelect } from 'vant';
import '@/less/commen.less' // 引入公用样式
Vue.use(Search)
Vue.use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
