<template>
  <div>
    <div class="imageBox">
      <van-image
        width="33.33vw"
        height="33.33vw"
        src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/95041/32/5018/101351/5dea4a98Ead048c61/14cc934e7d391bfd.jpg!q70.jpg.dpg"
      />
      <van-image
        width="33.33vw"
        height="33.33vw"
        src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/100528/2/4367/69036/5dea4ad2Ed157b5cd/367821df65868c4c.jpg!q70.jpg.dpg"
      />
      <van-image
        width="33.33vw"
        height="33.33vw"
        src="//m.360buyimg.com/mobilecms/jfs/t1/91852/23/5023/72769/5dea4af6E86b1dcca/c0be9ddf6eef9ce6.gif"
      />
    </div>
    <div class="SecondBox">
      <div class="imgBigBox">
        <div class="imgboxxia" style="display: inline-block;border-radius: 15px 0 0 0;">
          <van-image
            width="45vw"
            height="33.33vw"
            style
            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
          />
        </div>
        <div class="imgboxshang" style="display: inline-block;">
          <van-image
            width="45vw"
            height="33.33vw"
            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
          />
        </div>
      </div>
      <div class="phoneBox">
        <van-image
          width="100%"
          height="33.33vw"
          src="//m.360buyimg.com/mobilecms/s750x200_jfs/t1/87792/2/4849/97278/5de9c5d4E07eecdec/a27b1b3750ece704.png!q70.webp"
        />
      </div>
    </div>
    <div class="mainxiaBigBox">
        <my-mainxia></my-mainxia>
    </div>
    <div class="mainshangBigBox">
        <my-mainshang></my-mainshang>
    </div>
    <div class="loadMore">
      <my-sweput></my-sweput>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import mainxia from '@/components/home/main/mainzujian/mainxia.vue'
import mainshang from '@/components/home/main/mainzujian/mainshang.vue'
import sweput from '@/components/home/main/mainzujian/sweput.vue'
export default {
  name: "mian",
  data() {
    return {};
  },
  components: {
      "my-mainxia":mainxia,
      "my-mainshang":mainshang,
      "my-sweput":sweput
  }
};
</script>
<style lang="less">
.imageBox {
  position: absolute;
  top: 116vw;
}
.SecondBox {
  position: absolute;
  top: 149vw;
  background: #d48b18;
  width: 100%;
  height: 230vw;
  line-height: 100%;
  .imgBigBox {
    position: absolute;
    top: 2vw;
    .imgboxxia {
      margin-left: 5vw;
      img {
        border-radius: 15px 0 0 15px;
      }
    }
    .imgboxshang {
      img {
        border-radius: 0 15px 15px 0;
      }
    }
  }
  .phoneBox{
      position: absolute;
      top: 37vw;
      width: 100%;
      height: 20vw;
  }
}
.mainxiaBigBox{
    position: absolute;
    top: 297vw;
}
.mainshangBigBox{
    position: absolute;
    top: 222vw;
}
.loadMore{
  position: absolute;
  top: 388vw;
  height: 500vw;
  background: #ccc
}
</style>