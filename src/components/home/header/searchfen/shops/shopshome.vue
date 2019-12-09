<template>
  <div style="width:100vw">
    <div class="shopsBoxD" v-for="s in 5" :key="s">
      <img src="../../../../../assets/logo.png" alt />
      <div class="size">联想（Lenovo）威6 2020款 英特尔酷睿 i5 14英寸窄边框轻薄笔记本电脑(i5-10210U 8G 512G</div>
      <span>￥1555</span>
      <p class="p1">700+条评价 好评率98%</p>
      <p class="p2">联想扬天京东自营旗舰店</p>
      <div class="shopsDXI">详细</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "shopshome",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
.shopsBoxD {
  width: 100%;
  background: #fff;
  position: relative;
  margin-bottom: 0.5vh;
  img {
    width: 20vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    display: inline-block;
  }
  .size {
    display: inline-block;
    width: 76vw;
    position: absolute;
    font-size: 0.9rem;
    padding: 2vw;
    overflow: hidden;
  }
  span {
    font-size: 1rem;
    color: rgb(238, 76, 76);
    position: absolute;
    top: 6vh;
  }
  .p1 {
      position: absolute;
      top: 8vh;
      left: 22vw;
    display: inline-block;
    // margin-top: 5vh;
    font-size: 0.8rem;
    // margin-right: 15vw;
    top: 17vw;
  }
  .p2 {
      position: absolute;
      top: 11vh;
      left: 22vw;
    display: inline-block;
    // margin-left: 20vw;   
    // margin-top: 2.6vh;
    font-size: 0.8rem;
  }
  .shopsDXI{
      position: absolute;
      display: inline-block;
      top: 10vh;
      left: 85vw;
      background: rgb(204, 204, 204,0.2);
      border-radius: 5px;
      width: 10vw;
      text-align: center;
      font-size: 0.8rem;
  }
  .shopsDXI:active{
      color: red;
  }
}
</style>