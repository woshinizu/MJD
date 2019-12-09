<template>
  <div>
    <div class="searchBox">
      <router-link to="/index/home">
        <div class="jump">
          <van-icon name="arrow-left" />
        </div>
      </router-link>
      <div class="Search">
        <van-search
          v-model="value"
          :placeholder="value"
          show-action
          white="100vw"
          shape="round"
        >
          <div slot="action" >搜索</div>
        </van-search>
      </div>
    </div>
    <div class="">

    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "searchList",
  data() {
    return {
        value:this.$route.query.keywords,
    };
  },
  created() {
      console.log(this.$route)
  },
  components: {
      
  },
  methods: {
      
  },
};
</script>
<style lang="less">
.searchBox {
  // background: #ccc;
  // height: 100%;
  border-bottom: 1px solid #ccc;
  .jump {
    display: inline-block;
  }
  .Search {
    display: inline-block;
    .van-cell {
      width: 75vw;
    }
  }
}
</style>