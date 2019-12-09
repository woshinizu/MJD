<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
    <!-- ======================================================================================== -->
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "classification",
  data() {
    return {
      value: "",
      items:[
          {
    // 导航名称
    text: '所有城市',
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
      }
    ]
  },
  {
    // 导航名称
    text: '所有城市222',
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
      }
    ]
  }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },
  components: {}
};
</script>
<style lang="less">
</style>
