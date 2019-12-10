<template>
  <div>
    <!-- <router-view></router-view> -->
    <div class="mainPage">
      <van-image
        width="100%"
        height="60vw"
        src="https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/91424/35/4973/27189/5dea1d39Eb2422922/5ac7ff6a9bdc0c78.jpg"
      />
      <div class="shang-headerBox">
        <div class="fountBox">
          <router-link to="/search">
            <van-search
              background="rgba(0,0,0,0)"
              shape="round"
              placeholder="请输入搜索关键词"
              v-model="value"
            />
          </router-link>
        </div>
      </div>
      <div class="swiprt">
        <van-swipe
          class="swipe"
          style="height: 40vw;top:-47vw;width:90vw;left:5vw;border-radius:15px"
          :autoplay="2000"
          indicator-color="white"
        >
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/37805/37/14397/87161/5d2929ddE4093af48/e44a8f8ea4a8c864.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//imgcps.jd.com/ling4/4477655/576O6aKc5Liq5oqk/5r6z5rSy5rSX5oqk55So5ZOB/p-5d91a4f642dd5b7c7d52cbcc/2af0b86a/cr_1125x445_0_171/s1125x690/q70.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/100984/17/4663/103883/5de86fdaE7c557361/aa23231c9cbf7992.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/105518/23/5180/69268/5deb2ebcE97a91839/a45dd25a75578d1e.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103299/39/4826/78109/5de9bd84E43f392cf/6ba1ded3b8147924.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/92623/26/4670/61537/5de8727eEbf93b928/b0e4730649d3e6d4.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/37805/37/14397/87161/5d2929ddE4093af48/e44a8f8ea4a8c864.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              alt
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="tabBox" style="position: absolute;top: 61vw;">
        <van-tabs v-model="active" swipeable>
          <van-tab v-for="index in 2" :key="index">
            <div
              class="Control di"
              style="width: 20vw;margin: 0;height: 100%;"
              v-for="i in ary"
              :key="i"
            >
              <div style='width: 14vw;height: 14vw;background: #ccc;border-radius: 50%; margin: auto;' alt="">
                <img src="../../assets/1.png" alt="">
              </div>
              <p style="text-align: center;">{{i}}</p>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <my-main></my-main>
  </div>
</template>
<script>
import Main from "@/components/home/main/main.vue";
// Vue.component('my-img',{
//   template:'<img src="../../assets/1.png" alt="">',
//   name:'my-img'
// })
export default {
  data() {
    return {
      value: "",
      ary: [
        "京东超市","数码电器","京东服饰","京东生鲜",
        "京东到家",
        "充值缴费",
        "9.9元拼",
        "领卷",
        "赚钱",
        "PLUS会员"
      ]
      // ary1:['京东超市1','数码电器1','京东服饰1','京东生鲜','京东到家','充值缴费','9.9元拼','领卷','赚钱','PLUS会员'][1]
    };
  },
  created() {
    
  },
  components: {
    "my-main": Main
  },
  computed: {},
  methods: {
    
  }
};
</script>
<style lang="less" >
//scoped 当前样式 只对当前模板 起作用
.shang-headerBox {
  .fountBox {
    width: 90vw;
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 5vw;
    display: inline-block;
  }
  .tabBox {
    top: 0;
    .Control {
     
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
