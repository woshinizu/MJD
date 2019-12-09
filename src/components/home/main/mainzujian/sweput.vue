<template>
  <div>
    <div class="headerImg">
      <van-image
        width="100%"
        height="100%"
        style
        src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
      />
    </div>
    <div v-for="i in 20" :key="i">
      <div class="itemsone">
        <div>
          <van-image
            width="100%"
            height="45vw"
            style
            src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/63893/8/14130/160274/5db7eb47Eaca0c28b/a2fdb94f4422fd4c.jpg!q70.dpg.webp"
          />
        </div>
        <span>公猴百搭网红过膝长筒靴女2019秋冬新款长靴高筒靴</span>
        <p>￥179</p>
        <button class="rt">看相似</button>
      </div>
      <div class="itemstwo">
        <div>
          <van-image
            width="100%"
            height="45vw"
            style
            src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/72845/38/14010/151912/5db58e67E2403955e/324ae0c24621aff8.jpg!q70.dpg.webp"
          />
        </div>
        <span>【2条装】休闲裤男 秋冬季加绒加厚韩版棉麻直筒修身弹学</span>
        <p>￥98</p>
        <button class="rt">看相似</button>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "sweput",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.headerImg {
  width: 100%;
  height: 10vw;
}
.itemsone {
  width: 46vw;
  margin-left: 3vw;
  display: inline-block;
  background: #fff;
  margin-top: 2vw;
  height: 73vw;
  span {
    font-size: 3.3vw;
  }
  p {
    color: rgb(238, 43, 43);
    display: inline-block;
    margin-top: 3vw;
  }
  button {
    color: #ccc;
    font-size: 3vw;
    display: inline-block;
    margin-top: 3.8vw;
    background: #fff;
  }
}
.itemstwo {
  width: 46vw;
  margin-left: 2vw;
  display: inline-block;
  background: #fff;
  margin-top: 2vw;
  height: 73vw;
  span {
    font-size: 3.3vw;
  }
  p {
    color: rgb(238, 43, 43);
    display: inline-block;
    margin-top: 3vw;
  }
  button {
    color: #ccc;
    font-size: 3vw;
    display: inline-block;
    margin-top: 3.8vw;
    background: #fff;
  }
}
</style>