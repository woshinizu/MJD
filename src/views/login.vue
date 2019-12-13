<template>
  <div>
    <van-cell-group>
      <router-link to="">
      <div class="ico" @click="back">
        <van-icon name="arrow-left" />
      </div>
      </router-link>
      
      <div class="imgbox"></div>
      <van-field
        left-icon="contact"
        v-model="username"
        placeholder="请输入用户名"
        input-align="left"
        style="width:80vw;margin:10vw auto"
        :autofocus="true"
      />
      <van-field
        left-icon="edit"
        v-model="password"
        type="password"
        placeholder="请输入密码"
        input-align="left"
        :autofocus="true"
        style="width:80vw;margin:6vw auto;"
      />
      <div @click="submit">
        <van-button
          type="warning"
          style="width:80vw;margin:10vw auto;display:block"
          :round="true"
        >登录</van-button>
      </div>
      <router-link class="ra" to="/sign">新用户注册</router-link>
      <div></div>
    </van-cell-group>
  </div>
</template>
<script>
// @ is an alias to /src
import vant from "vant";
import { Field } from "vant";
import { Icon } from "vant";
import Vue from "vue";
import { Dialog } from "vant";
import axios from "axios";
import md5 from 'md5'
// import sign from "@/router/sign/sign.js"
Vue.use(Field);
Vue.use(Icon);

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {},
  methods: {
     back(){
      this.$router.back()
    },
    submit() {
      let username = this.username;
      let password = this.password;
      if (!username || !password) {
        // alert("用户名密码不能为空");
        Dialog.alert({
          title: "⚠️警告",
          message: "用户名或密码不能为空"
        }).then(() => {
          // on close
          this.$router.push('./login');
        });
      } else {
        // 输入用户名密码，与后台给的数据做对比，如果一致那么就返回code 0 登录成功
        axios.post("/login", { username,password})
          .then(data => {
            if (data.data.code == 0) {
              this.$router.push("/index/home");
              localStorage.setItem('username',username);
            } else {
              Dialog.alert({
                title: "⚠️警告",
                message: "用户名或密码错误"
              }).then(() => {
                // on close
                this.$router.push("/login");
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
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
  background-image: url("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3633190512,1207269899&fm=26&gp=0.jpg");
  background-size: cover;

  > img {
    width: 100%;
    height: 100%;
  }
}
.ico{
  position:absolute;
 top:5vw;
  left:3vw;
  // width:5vw;
  // height:5vw;
  color:#909399;
  font-size:1.8em;
}
.ra {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.14em;
  display: block;
  text-align: center;
  cursor: pointer;
}
</style>