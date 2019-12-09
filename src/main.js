import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
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
=======
import { Search, Button, Icon, Tab, Tabs, Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, NoticeBar, TreeSelect, Grid, GridItem, Image } from 'vant';
import '@/less/commen.less' // 引入公用样式
Vue.use(Search).use(Button).use(Icon).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(NoticeBar).use(TreeSelect).use(Grid).use(GridItem).use(Image)


>>>>>>> f9785abbd49fbcdba34f33bc2519a987fff27a6a

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
