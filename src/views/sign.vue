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
        :clickable="true"
        placeholder="请输入密码"
        input-align="left"
        :autofocus="true"
        style="width:80vw;margin:6vw auto;"
        @click-right-icon="$toast('question')"
      />
      <div @click="signIn">
        <van-button
          type="warning"
          style="width:80vw;margin:10vw auto;display:block"
          :round="true"
        >注册</van-button>
      </div>
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
import axios from "axios";
import { Dialog } from "vant";
// import sign from "@/router/sign/sign.js"
Vue.use(Field);
Vue.use(Icon);

export default {
  name: "sign",
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
    signIn() {
      let username = this.username;
      let password = this.password;
      if (!username || !password) {
        Dialog.alert({
          title: "⚠️警告",
          message: "用户名或密码不能为空"
        }).then(() => {
          // on close
          this.$router.push("/sign");
        });
      } else {
        axios.post("/sign", { username, password }).then(data => {
          console.log(data);
          if (data.data.code == 0) {
            Dialog.alert({
              title: "💐💐💐",
              message: "恭喜你注册成功!"
            }).then(() => {
              // on close
              this.$router.push("/login");
            })
          }else{
            Dialog.alert({
              title: "⚠️警告",
              message: "用户名已存在!"
            }).then(() => {
              // on close
              this.$router.push("/sign");
            })
          }
        })
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
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2468770489,773317773&fm=26&gp=0.jpg");
  background-size: cover;
  background-position: center center;
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
p {
  position: absolute;
  left: 30vw;
  top: 109vw;
  font-size: 0.14em;
  color: #909399;
}
</style>