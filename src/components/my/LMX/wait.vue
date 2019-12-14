<template>
  <div class="wait">
    <div class="shopHeader">
      <van-icon name="shop-o" class="MLeftOne lt"></van-icon>
      <div class="shopName lt">COLOURPOP旗舰店</div>
      <van-icon name="arrow" class="MLeftTow lt" @click="oldShop"></van-icon>
      <van-icon name="delete" class="MLeftThree rt" @click="deletShop"></van-icon>
    </div>
    <div class="shopMain">
      <div class="photo lt">
        <img
          src="//img10.360buyimg.com/mobilecms/s200x200_jfs/t1/45183/34/14007/70781/5dad62b4e1954d8ab/426f84dd2099e7be.jpg!q70.dpg.webp"
          alt
        />
      </div>
      <div class="shopText lt">卡拉泡泡（Colourpop）唇釉哑光雾面唇蜜唇彩口红女学生唇蜜染唇液唇彩保湿滋润唇釉 Arriba!（辣椒红）</div>
    </div>
    <div class="shopLMX">
      <van-tag round plain="false">修改订单</van-tag>
      <van-tag round plain="false" text-color="red" @click="pay">去支付</van-tag>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import lmxAll from  '@/components/my/LMX/lmxAll.vue'
export default {
  name: "wait",
  data() {
    return {};
  },
  methods: {
    oldShop() {
      this.$router.push("/homePage/head");
    },
    pay(){
        //支付路由  尚帅
    }
  },
  components: {
    //    lmxAll
  }
};
</script>
<style lang="less" scoped>
.wait {
  margin-top: 1.5vh;
  background: rgb(255, 254, 254);
  height: 21vh;
  position: relative;
  .shopHeader {
    width: 100%;
    height: 12vw;
    .MLeftOne,
    .MLeftTow {
      width: 5vw;
      height: 5vw;
      margin: 3vw;
      text-align: center;
      line-height: 6vw;
    }
    .shopName {
      width: 41vw;
      height: 5vw;
      margin: 3vw 0;
      font-weight: 600;
    }
    .MLeftThree {
      margin: 4vw;
    }
  }
}
.shopLMX {
  position: absolute;
  bottom: 3vh;
  left: 30vh;
}
.van-tag--default.van-tag--plain {
  color: #969799;
  margin-right: 4vw;
  height: 18px;
}
.shopMain {
  .photo {
    height: 21vw;
    width: 21vw;
    margin-left: 5vw;
  }
  .shopText {
    margin-top: 4vw;
    margin-left: 5vw;
    width: 44vw;
    height: 9vw;
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>