<template>
  <div class="my">
    <div class="mainbox">
      <!-- <van-uploader :after-read="afterRead" />
      <van-uploader v-model="fileList" multiple />-->
      <div class="imgbox"></div>
      <div class="rt">
        <span>
          <router-link to="/login">登录/</router-link>
        </span>
        <span>
          <router-link to="/sign">注册</router-link>
        </span>
      </div>
      <div class="replay" @click="replay">
        <van-icon name="replay" color="#fff" size="1.4em" />
      </div>
      <div class="setting">
        <router-link to="/setting">
          <van-icon name="wap-nav" color="#fff" size="1.5em" />
        </router-link>
      </div>
      <ul class="tab">
        <li>商品关注</li>
        <li>
          <router-link to>店铺关注</router-link>
        </li>
        <li>喜欢的内容</li>
        <li>浏览记录</li>
      </ul>
    </div>
    <ul class="bod">
      <li>
        <div>
          <van-icon name="cash-back-record" size="1.4em" />
        </div>
        <span>待付款</span>
      </li>
      <li>
        <div>
          <van-icon name="gift-card-o" size="1.4em" />
        </div>
        <span>待收货</span>
      </li>
      <li>
        <div>
          <van-icon name="smile-comment-o" size="1.4em" />
        </div>
        <span>待评价</span>
      </li>
      <li>
        <div>
          <van-icon name="bill-o" size="1.4em" />
        </div>
        <span>
          <router-link to style="color:#909399">退换/售后</router-link>
        </span>
      </li>
      <li>
        <div>
          <van-icon name="orders-o" size="1.4em" color="tomato" />
        </div>
        <span>我的订单</span>
      </li>
    </ul>
    <ul class="bod">
      <li>
        <div>
          <van-icon name="points" size="1.4em" />
        </div>
        <span>京豆</span>
      </li>
      <li>
        <div>
          <van-icon name="bill-o" size="1.4em" />
        </div>
        <span>优惠券</span>
      </li>
      <li>
        <div>
          <van-icon name="newspaper-o" size="1.4em" />
        </div>
        <span>白条</span>
      </li>
      <li>
        <div>
          <van-icon name="gift-card-o" size="1.4em" />
        </div>
        <span>礼品卡</span>
      </li>
      <li>
        <div>
          <van-icon name="pending-payment" size="1.4em" color="tomato" />
        </div>
        <span>我的钱包</span>
      </li>
    </ul>
    <div class="rec">
      <van-icon name="like" color="tomato" size="0.8em" />
      <span style="color:#909399 ; font-size:0.8em">为你推荐</span>
      <van-icon name="like" color="tomato" size="0.8em" />
    </div>
    <ul class="lk">
      <li>
         <div class="lt">
          <div> 
            <img
              src="https://m.360buyimg.com/babel/s350x350_jfs/t1/54944/25/5319/145292/5d2ee0f4Edc726a86/88da314960c9583a.jpg!q70.dpg"
              alt
            />
          </div>
          <p>
            <span>自营</span>音响音响音响
            <span style="color:tomato;background:none;padding-top:2vw">￥2990</span>
          </p>
        </div>
        <div class="rt">
          <div>
            <img
              src="https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14949/9/4241/112484/5c304b10Ee04ada5f/c4bf4e75be0bc172.jpg!q70.dpg.webp"
              alt
            />
          </div>
          <p>
            <span>自营</span>手表手表手表
            <span style="color:tomato;background:none;padding-top:2vw">￥2990</span>
          </p>
        </div>
      </li>
      <li>
        <div class="lt">
          <div>
            <img
              src="https://m.360buyimg.com/babel/s350x350_jfs/t1/86483/4/1066/116158/5db93234E713aa969/3c0bde5e8ce5368f.jpg!q70.dpg"
              alt
            />
          </div>
          <p>
            <span>自营</span>音响音响音响
            <span style="color:tomato;background:none;padding-top:2vw">￥2990</span>
          </p>
        </div>
        <div class="rt">
          <div>
            <img
              src="https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14949/9/4241/112484/5c304b10Ee04ada5f/c4bf4e75be0bc172.jpg!q70.dpg.webp"
              alt
            />
          </div>
          <p>
            <span>自营</span> 手表手表手表
            <span style="color:tomato;background:none;padding-top:2vw">￥2990</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
import Vue from "vue";
import { Uploader } from "vant";

Vue.use(Uploader);

export default {
  name: "my",
  data() {
    return {
      //   fileList: [
      //     { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
      //     // Uploader 根据文件后缀来判断是否为图片文件
      //     // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      //     { url: "https://cloud-image", isImage: true }
      //   ]
    };
  },
  components: {},
  methods: {
    // afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    // }
    replay(){
        // 请求一下页面
    }
  }
};
</script>
<style lang="less" scoped>
a {
  color: #ffffff;
}
.scale {
  font-size: 0.4em;
}
.my {
  width: 100vw;
  height: 100%;
  background-color: #eee;
  .mainbox {
    background-image: url("http://img5.imgtn.bdimg.com/it/u=1364854480,2958361817&fm=26&gp=0.jpg");
    background-size: cover;
    height: 50vw;
    border-bottom-right-radius: 5%;
    border-bottom-left-radius: 5%;

    .setting {
      position: absolute;
      top: 5vw;
      right: 5vw;
    }
    .replay {
      position: absolute;
      top: 5.2vw;
      right: 19vw;
      cursor: pointer;
    }
    .imgbox {
      position: absolute;
      top: 9vw;
      left: 5vw;
      background-image: url("https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1657902631,1789704152&fm=26&gp=0.jpg");
      background-size: cover;
      background-position: center center;
      width: 20vw;
      height: 20vw;

      border-radius: 50%;
    }
    .rt {
      position: absolute;
      top: 16vw;
      left: 35vw;
      > span > a {
        color: #ffffff;
        // font-size: 0.25em;
        // display: block;
        font-size: 0.9em;
        text-align: center;
        cursor: pointer;
      }
    }
    > .tab {
      width: 100%;
      display: flex;
      position: absolute;
      top: 40vw;

      > li {
        flex: 1;
        text-align: center;
        color: #ffffff;
        font-size: 0.25em;
      }
    }
  }
  > .bod {
    background-color: #ffffff;
    margin-top: 6vw;
    height: 18vw;

    border-radius: 3%;
    box-shadow: 10px 3px 5px -2px grey;
    display: flex;
    > li {
      flex: 1;
      color: #909399;
      //
      text-align: center;
      > span {
        font-size: 0.25em;
      }
      > div {
        margin-top: 2vw;
        //   font-size: 0.8em;
      }
    }
  }
  .rec {
    margin-top: 3vw;
    text-align: center;
    border-bottom: #ffffff 1px dashed;
    height: 10vw;
    width: 100%;
    line-height: 8vw;
  }
  > .lk {
    width: 96vw;
    height: 100%;
    overflow: hidden;
    margin: auto;
    > li {
      display: block;
      width: 100%;
      height: 60vw;
      .lt,
      .rt {
        background: #fff;
        border-radius: 10%;
        overflow: hidden;
        box-shadow: 10px 3px 5px -2px grey;
        width: 40vw;
        height: 60vw;
        margin: 2vw;
        // border: #909399 1px solid;
        > div {
          width: 100%;
          height: 40vw;
          img {
            width: 100%;
            height: 100%;
          }
        }
        > p {
          margin-top: 3vw;
          font-size: 0.8em;
          text-align: center;
          > span {
            display: inline-block;
            border-radius: 6%;
            background: tomato;
            color: #ffffff;
          }
        }
      }
      .lt {
        float: left;
      }
      .rt {
        float: right;
      }
    }
  }
}
</style>