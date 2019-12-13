<template>
  <div>
    <div class="searchLMX" style=" background: red;box-sizing:border-box">
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
    </div>

    <!-- ======================================================================================== -->
    <van-tree-select
      height="100vh"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      @click-nav="changeLMX"
      class='barBox'
    >
      <div slot="content">
        <div class="commodityLMX">
          <h4  class="four">热门推荐</h4>
          <van-grid :gutter="10">
            <van-grid-item v-for="value in 50" :key="value" icon="photo-o" text="文字" />
          </van-grid>
        </div>
      </div>
    </van-tree-select>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "classification",
  data() {
    return {
      value: "",
      items: [
        {
          text: "生活旅行",
          index:0,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            }
            // {
            //   text: "酒店预订",
            //   id: 2
            // }
          ]
        },
        {
          // 导航名称
          text: "家居家装",
           index:1,
          // 导航节点额外类名
          className: "my-class",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "沐浴花洒",
              // id，作为匹配选中状态的标识符
              id: 1
              // 禁用选项
            },
            {
              text: "实木沙发",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:2,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:3,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:4,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:5,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:6,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:7,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:8,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:9,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:10,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:11,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:12,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:13,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:14,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        },
        {
          text: "生活旅行",
           index:15,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            },
            {
              text: "酒店预订",
              id: 2
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },
  methods: {
    changeLMX(index) {
        console.log(index);
        
        let aLMX=document.getElementsByClassName('my-class')[0];
        let aHeight=aLMX.offsetHeight;//44
        let domH=document.documentElement.clientHeight || document.body.clientHeight;//640
        let firstH=document.getElementsByClassName('navBox')[0];
        let fH=firstH.clientHeight;//58
        let headerH=document.getElementsByClassName('searchLMX')[0];
        let hH=headerH.clientHeight;//70
        let centerBOX=domH-fH-hH;
        let allA=this.items.length*aHeight;
        let ele = document.querySelector('.barBox').querySelector('.van-sidebar');
        console.log(this.activeIndex*aHeight,this.activeIndex)
        // ele.style.transform= `translateY(${-this.activeIndex*aHeight}px)`
        // ele.scrollTop = index*aHeight
        this.move(ele,index*aHeight)

    },
    move(ele,tar){
        let t = ele.scrollTop;
        function fn(){
            t += 10;
            ele.scrollTop = t;
            if(t >= tar){
                ele.scrollTop = tar;
                return;
            }
            requestAnimationFrame(()=>{
                fn();
            })
        }
        fn();
    }
  },
  components: {}
};
</script>
<style lang="less" scope>
.barBox{
  // position: relative;
    .van-sidebar{
        height: 80vh;
    }
}
.searchLMX{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
}
.searchLMX>.van-search {
  height: 11vh;
  z-index: 9999;
  background: rgb(228, 60, 31) !important;
}
.van-tree-select__content {
  flex: 3;
}
.van-grid-item__content--center {
  width: 21vw;
}
.van-grid{
  height: 60vh;
}
.four {
  margin:4vw 0 1.5vh 2.5vw;
 
}
.my-class{
    box-sizing: border-box;
}
</style>
