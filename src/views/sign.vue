<template>
  <div>
    <van-cell-group>
      <div class="imgbox"></div>
      <van-field
        left-icon="contact"
        v-model="value"
        placeholder="请输入用户名"
        input-align="left"
        style="width:80vw;margin:10vw auto"
        :autofocus="true"
      />
      <van-field
        left-icon="edit"
        v-model="password"
        type="password"
        clickable="true"
        placeholder="请输入密码"
        input-align="left"
        :autofocus="true"
        style="width:80vw;margin:6vw auto;"
        @click-right-icon="$toast('question')"
      />

      <van-button type="warning" style="width:80vw;margin:10vw auto;display:block" round="true">注册</van-button>
      
    </van-cell-group>
     <p>
        遇到问题？您可以
        <a href="tel:18322580483">联系客服</a>
      </p>
  </div>
</template>
<script>
// @ is an alias to /src
import vant from "vant";
import { Field } from "vant";
import { Icon } from "vant";
import Vue from "vue";
// import sign from "@/router/sign/sign.js"
Vue.use(Field);
Vue.use(Icon);

export default {
  name: "sign",
  data() {
    return {
      value: "",
      password: ""
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.imgbox {
  width: 30vw;
  height: 30vw;
  margin: 15vw auto;
  border-radius: 50%;
  background-image: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=100621987,2321697308&fm=26&gp=0.jpg");
  background-size: cover;
  background-position: center center;
  > img {
    width: 100%;
    height: 100%;
  }
}
.ra {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.14em;
  display: block;
  text-align: center;
  cursor: pointer;
}
p {
    position: absolute;
    left: 30vw;
    top: 109vw;
  font-size: 0.14em;
  color: #909399;
}
</style>