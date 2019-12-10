<template>
  <div class="main">
    <div>
      <div class="ico" @click="bk">
        <van-icon name="arrow-left" />
      </div>
      <div class="banner">账户设置</div>
    </div>
    <div class="first">
      <div class="login">
        <div class="imgbox"  v-for="v in arr"  :style="{backgroundImage:`url(${v.pic})`}" :key="v.pic"></div>
        <div class="lower"></div>
        <div class="rt" v-if="flag">
          <span>
            <router-link to="/login">登录/</router-link>
          </span>
          <span>
            <router-link to="/sign">注册</router-link>
          </span>
        </div>
        <div class="els" v-else>
          <span>用户名：{{des}}</span>
        </div>
        <div class="icon">
          <van-icon name="arrow" color="#909399" />
        </div>
      </div>
      <div class="adr">
        <span>
          <router-link to="/adr">地址管理</router-link>
        </span>
        <div class="icon">
          <van-icon name="arrow" color="#909399" />
        </div>
      </div>
    </div>
    <div class="second">
      <div class="safe">
        <span>账户与安全</span>
      </div>
      <div class="pay">
        <span>
          <router-link to="/setPassword">支付设置</router-link>
        </span>
        <div class="icon">
          <van-icon name="arrow" color="#909399" />
        </div>
      </div>
      <div class="clear" @click="clcookie">
        <span>清除缓存</span>
      </div>
    </div>
    <div class="third">
      <div class="response">
        <span>反馈</span>
      </div>
      <div class="about">
        <span>关于京东app</span>
      </div>
    </div>
    <router-link to="/login">
      <div class="fourth" v-if="!flag" @click="cleLocal">
        <span>退出登录</span>
      </div>
    </router-link>
  </div>
</template>
<script>
// @ is an alias to /src
// import axios from ''
import { getcookie, setcookie, removecookie } from "../APIafter/cookie";
export default {
  name: "setting",
  data() {
    return {
      flag: true,
      arr:[]
    };
  },
  components: {},
  created() {
    fetch("/setting", {
      method: "post"
    })
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        console.log(data);
        if (data.code == 0) {
          this.des = data.userdata;
          this.arr = data.img.filter(item => item.username == this.des);
          this.flag = false;
        }
        this.ary = data.data;
        console.log(this.ary);
      });
  },
  methods: {
    bk(){
      this.$router.back()
    },
    clcookie() {},
    cleLocal() {
      // console.log(666)
      // removecookie('a','http://localhost:8080/')
      fetch("/delSession", {
      method: "post"
    })
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        console.log(data);
        if (data.code == 0) {
          // this.des = data.userdata;
          this.flag = true;

        }
        this.ary = data.data;
        console.log(this.ary);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  background: #eee;
  height: 100vh;
  width: 100vw;
  .ico{
  position:absolute;
  top:5vw;
  left:3vw;
  // width:5vw;
  // height:5vw;
  color:#fff;
  font-size:1.8em;
}
  .banner {
    background-image: url("http://img2.imgtn.bdimg.com/it/u=1686753727,485296867&fm=26&gp=0.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 20vw;
    line-height: 20vw;
    color: #ffffff;
    text-align: center;
  }
  .first {
    background: #fff;
    border-bottom-right-radius: 6%;
    border-bottom-left-radius: 6%;
    .login {
      border-bottom: 1px solid #f3f0f0;

      width: 100%;
      height: 16vw;
      padding-bottom: 7vw;
      background: #fff;
      .imgbox {
        position: absolute;
        top: 24vw;
        left: 4vw;
        z-index:1;
        width: 16vw;
        height: 16vw;
        border-radius: 50%;
        background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3243257367,27035386&fm=26&gp=0.jpg");
        background-size: cover;
        background-position: center center;
      }
      .lower {
        position: absolute;
        top: 24vw;
        left: 4vw;
        width: 16vw;
        height: 16vw;
        border-radius: 50%;
        background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3243257367,27035386&fm=26&gp=0.jpg");
        background-size: cover;
        background-position: center center;
      }
      .rt {
        position: absolute;
        top: 29vw;
        left: 28vw;
        > span > a {
          color: #909399;
          font-size: 0.9em;
        }
      }
      .els {
        position: absolute;
        top: 29vw;
        left: 25vw;
        > span {
          color: #909399;
        }
      }
      .icon {
        position: absolute;
        top: 30vw;
        right: 2vw;
      }
    }
    .adr {
      height: 16vw;
      line-height: 16vw;
      font-size: 0.9em;
      a {
        color: #909399;
        padding-left: 6vw;
      }
      > .icon {
        position: absolute;
        top: 44vw;
        right: 2vw;
      }
    }
  }
  .second {
    background: #fff;
    margin-top: 8vw;
    border-radius: 5%;
    > div {
      height: 16vw;
      line-height: 16vw;
      border-bottom: 1px solid #f3f0f0;

      > span {
        font-size: 0.9em;
        color: #909399;
        padding-left: 6vw;
        a {
          color: #909399;
        }
      }
    }
    .pay {
      .icon {
        position: absolute;
        top: 84vw;
        right: 2vw;
      }
    }
  }
  .third {
    margin-top: 8vw;
    background: #fff;
    border-radius: 5%;
    > div {
      height: 16vw;
      line-height: 16vw;
      border-bottom: 1px solid #f3f0f0;
      > span {
        font-size: 0.9em;
        color: #909399;
        padding-left: 6vw;
        a {
          color: #909399;
        }
      }
    }
  }
  .fourth {
    background: #fff;
    height: 16vw;
    margin-top: 5vw;
    line-height: 16vw;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    text-align: center;
    color: #909399;
  }
}
</style>