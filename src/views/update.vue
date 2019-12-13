<template>

    <div>
<!-- <van-uploader :after-read="afterRead" /> -->

<!-- 
<div class="head-p" id="touxiang">
         <img  src="/img/user_pic_big.jpg" alt='头像'  width="100" height="100" id="avatar_img">
    </div>
    <div  id="fromTx">
         <input type="file" class="file"  name="avatar" id="avatar">
    </div> -->

    </div>
</template>
<script>
// @ is an alias to /src
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
}
</script>
<style lang="less">

</style>