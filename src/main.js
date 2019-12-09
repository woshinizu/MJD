import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { 
  Search,
  Button,
  Icon,
  Tab,
  Tabs,
  RadioGroup,
  Radio,
  Popup,
  Cell,
  Stepper,
  Image,
  Swipe,
  SwipeItem,
  Divider,
  Checkbox
} from 'vant';
import '@/less/commen.less' // 引入公用样式
Vue.use(Search)
  .use(Button)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(RadioGroup)
  .use(Radio)
  .use(Popup)
  .use(Cell)
  .use(Stepper)
  .use(Image)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Checkbox)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
