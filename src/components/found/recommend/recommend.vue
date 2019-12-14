<template>
  <div>
    <div class="recommend">
      <ul>
        <li v-for="item in shop" :key="item.shopId">
          <div class="til">
            <i class="lt img">
              <img :src="item.header" />
            </i>
            <p class="lt">{{item.name}}</p>
            <van-button class="rt button" round  size="small" @click="addchange(item.shopId)">进店</van-button>
          </div>
          <div class="text">
            <ul @touchScroll="changeA">
              
              <li class="txBox lt" v-for="value in item.product" :key="value.productId" @click="qqq(value.productId)">
                <img :src="value.goods.picture" />
                <p class="p1">{{value.goods.title}}</p>
                <p class="p2">{{value.price}}</p>
                <p class="p3">{{value.price}}</p>
              </li>
              <li class="txBox lt ll">
                  <h2 @click="addchange(item.shopId)"> 查看详情> </h2>
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
import {getallShop} from '@/api/shopping'

export default {
  name: "recommend",
  data() {
    return {
      shop:'',
      shopId:this.$route.query.shopId||'',
      
    };
  },
  created() {
    getallShop().then(data=>{
      if(data.code==0){
        this.shop = data.data
        console.log(this.shop)
      }
    })
  },
  components: {},
  methods: {
    changeA(e) {
      console.log(e);
    },
    qqq(productId){
      this.$router.push({
        path:'/details',
        query:{
          productId,
        }
      })
    },
    add() {},
    followe(){
      
    },
    addchange(shopId){
      this.$router.push({
        path:'/homePage',
        query:{
          shopId,
        }
      })
    }
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
      height: 65vw;
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
    .ll{
      h2{
                  border: 1px solid #ee2c2c;
                  width: 25vw;
                  height: 30vw;
                  border-radius: 4vw;
                  text-align: center;
                  color:#000;
                  line-height: 30vw;
                  font-weight: 900;
                  font-size: 3vw;
                  background: #f8c28b;
      }
    }
  }
}
</style>