<template>
  <div>
    <div>
      <van-image
        width="100%"
        height="100%"
        src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
      />
    </div>
    <div class="reliveBox">
      <span>重温纯美</span>
      <p>时尚即传承</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/72845/38/14010/151912/5db58e67E2403955e/324ae0c24621aff8.jpg!q70.jpg.dpg"
        />
      </div>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/53875/17/16679/133037/5ddd0272Ea1a40df7/ffea5d4438ca9457.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
    <div class="reliveBoxReigth">
      <span>海尔家电</span>
      <p>科技领先海尔智慧家电</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t10060/146/3031314172/157481/d19443d1/5cdfe8ffN11cd8a1c.jpg!q70.jpg.dpg"
        />
      </div>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/77310/37/7013/70780/5d50e360E37b8743a/8527ebdb3f118259.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
    <div class="goodsBoxone">
      <span>职场精英</span>
      <p>办公室装备</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/103199/2/5081/217830/5dea3025E534817d1/ae17f71ed4d2743f.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
    <div class="goodsBoxtwo">
      <span>好奇宝贝</span>
      <p>陪你成长</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/59913/13/16203/198901/5ddb97ffEb253c1a6/42bc901e2eae6cfc.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
    <div class="goodsBoxthree">
      <span>海尔家电</span>
      <p>家电盛宴</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/78823/1/12449/86295/5d9c46c0Ee8ad1943/ee6b07c91bf4b20c.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
    <div class="goodsBoxfour">
      <span>新机骄傲</span>
      <p>照进生活</p>
      <div>
        <van-image
          width="100%"
          height="100%"
          src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/92839/30/3241/149822/5dde2133Ef82c5f6d/4ece2e59d1c86a1d.jpg!q70.jpg.dpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "mainshang",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.reliveBox {
  width: 45vw;
  background: #fff;
  height: 35vw;
  border-radius: 10px 0 0 0;
  margin-left: 5vw;
  display: inline-block;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 5vw;
    margin-left: 2vw;
  }
  p {
    font-size: 3vw;
    margin-left: 2vw;
  }
  > div {
    width: 15vw;
    height: 15vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 4vw;
  }
}
.reliveBoxReigth {
  width: 45vw;
  background: #fff;
  height: 35vw;
  border-radius: 0 10px 0 0;
  display: inline-block;
  margin-left: 0.3vw;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 5vw;
    margin-left: 2vw;
  }
  p {
    font-size: 3vw;
    margin-left: 2vw;
  }
  > div {
    width: 15vw;
    height: 15vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 4vw;
  }
}
.goodsBoxone {
  width: 22vw;
  background: #fff;
  height: 25vw;
  border-radius: 0 0 0 10px;
  display: inline-block;
  margin-left: 5vw;
  margin-top: 0.3vw;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 4vw;
    margin-left: 3vw;
  }
  p {
    font-size: 1vw;
    margin-left: 3vw;
  }
  > div {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 1vw;
  }
}
.goodsBoxtwo {
  width: 22vw;
  background: #fff;
  height: 25vw;
  display: inline-block;
  margin-left: 1vw;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 4vw;
    margin-left: 3vw;
  }
  p {
    font-size: 1vw;
    margin-left: 3vw;
  }
  > div {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 1vw;
  }
}
.goodsBoxthree {
  width: 22vw;
  background: #fff;
  height: 25vw;
  display: inline-block;
  margin-left: 0.3vw;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 4vw;
    margin-left: 3vw;
  }
  p {
    font-size: 1vw;
    margin-left: 3vw;
  }
  > div {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 1vw;
  }
}
.goodsBoxfour {
  width: 22vw;
  background: #fff;
  height: 25vw;
  border-radius: 0 0 10px 0;
  display: inline-block;
  margin-left: 1vw;
  span {
    color: linear-gradient(90deg, #45caff, #1471fb);
    font-weight: bold;
    font-size: 4vw;
    margin-left: 3vw;
  }
  p {
    font-size: 1vw;
    margin-left: 3vw;
  }
  > div {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    margin-left: 4vw;
    margin-top: 1vw;
  }
}

</style>