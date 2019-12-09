<template>
  <div>
    <div class="searchLMX" style=" background: red;box-sizing:border-box">
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
    </div>

    <!-- ======================================================================================== -->
    <van-tree-select
      height="100vh"
      :items="items  "
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      @click="changeLMX"
    >
      <div slot="content">
        <div class="commodityLMX">
          <h4>热门推荐</h4>
          <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
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
    changeLMX() {
        // let aLMX=document.getElementsByClassName('van-sidebar-item van-tree-select__nav-item my-class');
        // let aHeight
    }
  },
  components: {}
};
</script>
<style lang="less" scope>
.searchLMX>.van-search {
  height: 11vh;
  background: rgb(228, 60, 31) !important;
  
}
.van-tree-select__content {
  flex: 3;
}
.van-grid-item__content--center {
  width: 21vw;
}
h4 {
  margin-bottom: 1.5vh;
}
</style>
