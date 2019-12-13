<template>
  <div class="All">
    <div class="orderHeader">
      <van-icon class="lt" name="arrow-left" @click="oldT"></van-icon>
      <h4 class="lt">我的订单</h4>
      <van-icon name="search" color="#ffffff" size="25px" class="sLMX lr" @click="oldSearch"></van-icon>
    </div>
    <div class="second">
      <van-tabs v-model="active">
        <van-tab title="全部" to="/myOrder/lmxAll"></van-tab>
        <van-tab title="待付款" to="/myOrder/wait"></van-tab>
        <van-tab title="待收货" to="/myOrder/waitHUO"></van-tab>
        <van-tab title="已完成" to="/myOrder/done"></van-tab>
        <van-tab title="已取消" to="/myOrder/cancel"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "myOrder",
  data() {
    return {};
  },
  methods: {
    oldT() {
      this.$router.push("/index/my");
    },
    oldSearch() {
      this.$router.push("/search");
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.All {
  height: 100vh;
  background: rgb(238, 223, 223);
}
.orderHeader {
  background: rgb(223, 53, 53);
  color: #ffff;
  height: 10vh;
  text-align: center;
  line-height: 10vh;
}
.van-icon-arrow-left:before {
  line-height: 10vh;
  margin-left: 4vw;
  font-size: 6vw;
}
h4 {
  margin-left: 30vw;
}
.sLMX {
  line-height: 10vh;
  margin-left: 21vw;
}
.second {
  background: rgb(255, 254, 254);
  height: 15vw;
  line-height: 15vw;
}
h5 {
  display: inline-block;
  margin-left: 8vw;
  color: #cccc;
}
</style>