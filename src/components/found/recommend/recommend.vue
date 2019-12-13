<template>
  <div>
    <div class="recommend">
      <ul>
        <li v-for="item in arr" :key="item.id">
          <div class="til">
            <i class="lt img">
              <img :src="item.img" />
            </i>
            <p class="lt">{{item.tit}}</p>
            <van-button class="rt button" color="red" round type="info" size="small" @click="followe">+关注</van-button>
          </div>
          <div class="text">
            <ul @touchScroll="changeA">
              
              <li class="txBox lt" v-for="value in item.ary" :key="value.id">
                <img :src="value.pic" />
                <p class="p1">{{value.til}}</p>
                <p class="p2">{{value.p1}}</p>
                <p class="p3">{{value.p2}}</p>
              </li>
              <router-link to="/details">
              <li class="txBox lt ll">
                <h2> 查看详情> </h2>
              </li>
              </router-link>
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
    return {
      arr:[
        {
          img:'//img13.360buyimg.com/cms/jfs/t1/7612/15/4826/4894/5bdbee52E3beb1314/3a4a0a5cddabfa59.jpg!q70.dpg.webp',
          tit:'华为官方旗县店',
          id:1,
          ary:[
            {
              pic:'//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/45434/16/15638/254169/5dcbd7d4E7a2831a3/5dae45c7f9a4de56.jpg!q70.dpg.webp',
              til:'荣耀20i',
              p2:'￥199',
              p3:'￥299',
              id:1,
            },
            {
              pic:'//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/45434/16/15638/254169/5dcbd7d4E7a2831a3/5dae45c7f9a4de56.jpg!q70.dpg.webp',
              til:'荣耀20i',
              p2:'￥199',
              p3:'￥299',
              id:2,
            },
            {
              pic:'//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/45434/16/15638/254169/5dcbd7d4E7a2831a3/5dae45c7f9a4de56.jpg!q70.dpg.webp',
              til:'荣耀20i',
              p2:'￥199',
              p3:'￥299',
              id:3,
            },
          ]
        },
        {
          img:'//img12.360buyimg.com/cms/jfs/t1/81032/39/8470/4824/5d676271E218ee18d/6eaebe1898d807eb.jpg!q70.dpg.webp',
          tit:'纪梵希官方旗县店',
          id:2,
          ary:[
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105016/2/5573/231645/5dedef80Ef2be78dc/654b68f7111fa23a.jpg!q80.dpg.webp',
              til:'纪梵希圣诞套装',
              p2:'￥199',
              p3:'￥299',
              id:1,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105016/2/5573/231645/5dedef80Ef2be78dc/654b68f7111fa23a.jpg!q80.dpg.webp',
              til:'纪梵希圣诞套装',
              p2:'￥199',
              p3:'￥299',
              id:2,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105016/2/5573/231645/5dedef80Ef2be78dc/654b68f7111fa23a.jpg!q80.dpg.webp',
              til:'纪梵希圣诞套装',
              p2:'￥199',
              p3:'￥299',
              id:3,
            },
          ]
        },
        {
          img:'//img30.360buyimg.com/popshop/jfs/t6454/7/643207412/11412/ed690674/59426bf1Nc3617b08.jpg!q70.dpg.webp',
          tit:'耐克官方旗县店',
          id:3,
          ary:[
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/94539/26/4864/282655/5de9e360Ed5f03201/1ddd6ead04840670.jpg!q80.dpg.webp',
              til:'耐克NIKE',
              p2:'￥199',
              p3:'￥299',
              id:1,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/94539/26/4864/282655/5de9e360Ed5f03201/1ddd6ead04840670.jpg!q80.dpg.webp',
              til:'耐克NIKE',
              p2:'￥199',
              p3:'￥299',
              id:2,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/94539/26/4864/282655/5de9e360Ed5f03201/1ddd6ead04840670.jpg!q80.dpg.webp',
              til:'耐克NIKE',
              p2:'￥199',
              p3:'￥299',
              id:3,
            },
          ]
        },
        {
          img:'//img30.360buyimg.com/popshop/jfs/t1/51871/31/13508/8822/5da42b95E51a1c3ca/b6de294e06fc92db.jpg!q70.dpg.webp',
          tit:'yaya羽绒服旗县店',
          id:4,
          ary:[
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/98880/3/4832/166533/5de9c7ffE601cbc63/59faa4e8d74ee89b.jpg!q80.dpg.webp',
              til:'yaya羽绒服',
              p2:'￥199',
              p3:'￥299',
              id:1,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/98880/3/4832/166533/5de9c7ffE601cbc63/59faa4e8d74ee89b.jpg!q80.dpg.webp',
              til:'yaya羽绒服',
              p2:'￥199',
              p3:'￥299',
              id:2,
            },
            {
              pic:'//m.360buyimg.com/mobilecms/s750x750_jfs/t1/98880/3/4832/166533/5de9c7ffE601cbc63/59faa4e8d74ee89b.jpg!q80.dpg.webp',
              til:'yaya羽绒服',
              p2:'￥199',
              p3:'￥299',
              id:3,
            },
          ]
        }
      ]
    };
  },
  components: {},
  methods: {
    changeA(e) {
      console.log(e);
    },
    add() {},
    followe(){
      
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