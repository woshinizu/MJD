<template>
  <div class="main">
    <div>
      <div class="banner">账户设置</div>
    </div>
    <div class="first">
      <div class="login">
        <div class="imgbox"></div>
        <div class="rt">
          <span>
            <router-link to="/login">登录/</router-link>
          </span>
          <span>
            <router-link to="/sign">注册</router-link>
          </span>
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
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "setting",
  data() {
    return {};
  },
  components: {},
  methods: {
      clcookie(){
          
      }
  },
};
</script>
<style lang="less" scoped>
.main {
  background: #eee;
  height: 100vh;
  width: 100vw;
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

      >span {
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
       >span {
        font-size: 0.9em;
        color: #909399;
        padding-left: 6vw;
        a {
          color: #909399;
        }
      }
    }
  }
}
</style>