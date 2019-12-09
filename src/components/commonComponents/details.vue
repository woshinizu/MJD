<template>
    <div>
        <div>
      <van-swipe @change="onChange" class="swipe">
        <van-swipe-item> <img src="https://imgcps.jd.com/ling/100000287117/5a6255So55S15ZmoMuaKmOi1tw/5Lqs5Lic5ZWG55So6ZKc5oOg5p2l6KKt/p-5bd8253082acdd181d02fa37/2b683aac.jpg"></van-swipe-item>
        <van-swipe-item> <img src="https://imgcps.jd.com/ling/100000287117/5a6255So55S15ZmoMuaKmOi1tw/5Lqs5Lic5ZWG55So6ZKc5oOg5p2l6KKt/p-5bd8253082acdd181d02fa37/2b683aac.jpg"></van-swipe-item>
        <van-swipe-item> <img src="https://imgcps.jd.com/ling/100000287117/5a6255So55S15ZmoMuaKmOi1tw/5Lqs5Lic5ZWG55So6ZKc5oOg5p2l6KKt/p-5bd8253082acdd181d02fa37/2b683aac.jpg"></van-swipe-item>
        <van-swipe-item> <img src="https://imgcps.jd.com/ling/100000287117/5a6255So55S15ZmoMuaKmOi1tw/5Lqs5Lic5ZWG55So6ZKc5oOg5p2l6KKt/p-5bd8253082acdd181d02fa37/2b683aac.jpg"></van-swipe-item>

        <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
        </div>
      </van-swipe>
      </div>
      <div class="img">
          <img src="http://img0.imgtn.bdimg.com/it/u=3440598947,3722563553&fm=26&gp=0.jpg">
      </div>
      <div>
        <div>
            <p>￥2199</p>
            <p>￥2599</p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'details',
    data() {
    return {
      current: 0
    }
    },
    methods: {
        onChange(index) {
        this.current = index;
        }
    }
}
</script>
<style lang="less" scoped>
.swipe{
    width:100%;
    height:70vw;
    img{
        width:100%;
        height:100%
    }
    .custom-indicator{
        position: relative;
        top: -10vw;
        left: 90vw;
        color: #fff;
    }
}
.img{
    width:100%;
    height:15vw;
    img{
        width:100%;
        height:100%;
    }
}
</style>