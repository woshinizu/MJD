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

      <van-button type="warning" style="width:80vw;margin:10vw auto;display:block" round="true">登录</van-button>

            <router-link class="ra" to="/sign">新用户注册</router-link>
      <div>
      </div>
    </van-cell-group>
    <!-- <input type="text" placeholder="请输入内容"> -->
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
  name: "login",
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
.imgbox{
width: 30vw;
height: 30vw;
margin: 15vw auto;
border-radius: 50%;
background-image: url('https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3633190512,1207269899&fm=26&gp=0.jpg');
background-size: cover;

>img{
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
</style>