<template>
  <div class="done">
    <div class="shopHeader">
      <van-icon name="shop-o" class="MLeftOne lt"></van-icon>
      <div class="shopName lt">COLOURPOP旗舰店</div>
      <van-icon name="arrow" class="MLeftTow lt" @click="oldShop"></van-icon>
      <div class="doneAll lt">已完成</div>
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
      <van-tag round plain="false">卖了换钱</van-tag>
      <van-tag round plain="false">评价晒单</van-tag>
      <van-tag round plain="false" text-color="red" @click="oldShop">再次购买</van-tag>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "lmxAll",
  data() {
    return {};
  },
  methods: {
      oldShop(){
          this.$router.push('/homePage/head')
      },
      deletShop(){
    //       alert(Dialog.confirm({
    //     title: '标题',
    //     message: '弹窗内容'
    //      }).then(() => {
    //    // on confirm
    //    }).catch(() => {
    //      // on cancel
    //    }))
    

      }

  },
  components: {}
};
</script>
<style lang="less"scoped>
.done {
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
    .doneAll{
    width: 20vw;
    height: 12vw;
    border-radius: 35px;
    background: rgb(226, 72, 93);
    line-height: 12vw;
    text-align: center;
    
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
  left: 22vh;
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