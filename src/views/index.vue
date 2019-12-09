<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/index/home" >
          <van-icon name="wap-home-o" />
          <div>首页</div>
        </router-link>
      </div>
      
      <div>
        <router-link to="/index/classification">
          <van-icon name="weapp-nav" />
          <div>分类</div>
        </router-link>
      </div>
      <div class="fountBox">
        <router-link to="/index/found">
          <van-icon class="i" name="search" />
          <div>发现</div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/shopping-cart" >
          <van-icon name="shopping-cart-o" />
          <div>购物车</div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/my">
          <van-icon name="user-o" />
          <div>我的</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
import {icon} from "vant"
export default {
  data() {
    return {

    };
  },
  components: {
  },
  computed: {
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
//scoped 当前样式 只对当前模板 起作用
.mainPage>div:nth-child(1){
  padding-bottom: 18vw
}
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9vh;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background:#fff;
  box-shadow:0px 0px 9px -1px #ccc;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #000;
      display: block;
      width: 100%;
      height: 100%;
      i{
        
        font-size: 7vw;
        font-weight: 800;
      }
      div {
        font-size: 5vw;
      }
    }
    i .add {
      font-size: 12vw;
      color: rgb(0, 0, 0);
    }
    a.router-link-active{
        color: rgb(0, 153, 255);
    }
  }
}
</style>
