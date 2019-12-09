<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" @search="onSearch"></van-search>
    <van-tree-select
    class="rightTree"
     :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
    />
  </div>
</template>
<script>
// import { TreeSelect } from 'vant';
// Vue.use(TreeSelect);

// @ is an alias to /src
export default {
  name: "classification",
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
    //   ary:["我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美","我真美",],
    items: [
  {
    // 导航名称
    text: '所有城市',
    // 导航名称右上角徽标
    info: 3,
    // 是否在导航名称右上角显示小红点
    dot: true,
    // 导航节点额外类名
    className: 'my-class',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
        disabled: true
      },
      {
        text: '杭州',
        id: 2
      },
      {
        text: '000',
        id: 3
      }
      
    ]
  },
  {
    // 导航名称
    text: '所有城市2',
    // 导航名称右上角徽标
    info: 3,
    // 是否在导航名称右上角显示小红点
    dot: true,
    // 导航节点额外类名
    className: 'my-class',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
        disabled: true
      },
      {
        text: '杭州',
        id: 2
      },
      {
        text: '000',
        id: 3
      }
      
    ]
  }
]
    };
  },
  components: {},
  methods: {
     
  },
};
</script>
<style lang="less" scope>
.rightTree{
     background-color:red; 
}
</style>