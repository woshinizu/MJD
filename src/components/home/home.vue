<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home" >
          <i class="iconfont icon-11"></i>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan-"></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-yingyong- add" @click="show"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi"></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-icon-user"></i>
          <div>{{loginState ? "我的" : "未登录"}}</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:false,
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
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background:#fff;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #000;
      display: block;
      width: 100%;
      height: 100%;
      i {
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
