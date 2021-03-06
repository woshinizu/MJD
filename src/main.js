import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search, Button, Icon, Tab, Tabs, Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, NoticeBar, TreeSelect, Grid, GridItem, Image, Divider, Checkbox, Stepper ,Cell,Popup,NumberKeyboard,PasswordInput,CheckboxGroup,Sku, CellGroup,Tabbar, TabbarItem,AddressList ,AddressEdit,Notify,Toast,Tag} from 'vant';
import '@/less/commen.less' // 引入公用样式
Vue.use(Search).use(Button).use(Icon).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(NoticeBar).use(TreeSelect).use(Grid).use(GridItem).use(Image).use(Divider).use(Checkbox).use(Stepper).use(Cell).use(Popup).use(NumberKeyboard).use(PasswordInput).use(CheckboxGroup).use(Sku).use(CellGroup).use(Tabbar).use(TabbarItem).use(AddressList).use(AddressEdit).use(Notify).use(Toast).use(Tag)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
