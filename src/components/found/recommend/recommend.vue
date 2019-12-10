<template>
  <div>
    <div class="recommend">
      <ul>
        <li>
          <div class="til">
            <i class="lt img">
              <img src="../../../assets/logo.png" />
            </i>
            <p class="lt">膜法世家官方旗县店</p>
            <van-button class="rt button" color="red" round type="info" size="small">+关注</van-button>
          </div>
          <div class="text">
            <ul @touchScroll="changeA">
              <router-link to="/details">
              <li class="txBox lt">
                <img src="../../../assets/logo.png" />
                <p class="p1">膜法世家膜法世家膜法世家</p>
                <p class="p2">￥199</p>
                <p class="p3">￥299</p>
              </li>
              </router-link>
              
              <li class="txBox lt">
                <img src="../../../assets/logo.png" />
                <p class="p1">膜法世家膜法世家膜法世家</p>
                <p class="p2">￥199</p>
                <p class="p3">￥299</p>
              </li>
              <li class="txBox lt">
                <img src="../../../assets/logo.png" />
                <p class="p1">膜法世家膜法世家膜法世家</p>
                <p class="p2">￥199</p>
                <p class="p3">￥299</p>
              </li>
              <li class="txBox lt">
                <img src="../../../assets/logo.png" />
                <p class="p1">膜法世家膜法世家膜法世家</p>
                <p class="p2">￥199</p>
                <p class="p3">￥299</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "recommend",
  data() {
    return {};
  },
  components: {},
  methods: {
    changeA(e) {
      console.log(e);
    },
    add() {}
  }
};
</script>
<style lang="less">
.recommend {
  width: 100%;
  height: 100%;
  background: #f7f5f5;
  ul {
    width: 96vw;
    background: #fff;
    margin: 0 2vw;

    > li {
      width: 100%;
      height: 60vw;
      border-radius: 10px;
      .til {
        width: 100%;
        height: 15vw;
        i {
          width: 10vw;
          height: 10vw;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            margin: 2vw;
            border: 1px solid #eee;
          }
        }
        p {
          margin: 4vw 2vw 2vw 8vw;
          color: #000;
          font-size: 15px;
          font-weight: 600;
        }
        .button {
          margin: 10px;
        }
      }

      
      .text {
        width: 92vw;
        height: 45vw;
        // overflow: hidden;
        ul {
          width: 100%;
          height: 50vw;
          overflow: scroll;
          display:flex;
          .txBox {
            width: 35vw;
            height: 45vw;
            float:left;
            img {
              width: 30vw;
              height: 25vw;
              border: 1px solid #eee;
              border-radius: 10px;
            }
            .p1 {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 32vw;
              font-size: 0.8em;
              color: #000;
            }
            .p2 {
              color: red;
              font-weight: 700;
            }
            .p3 {
              color: #958a8a;
              font-size: 0.8em;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>