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
    <div class="shopBox">
        <div v-if='flag'>
            <shops></shops>
        </div>
         <div v-else>
             <noshops></noshops>
         </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import shops from '@/components/home/header/searchfen/shops.vue'
import noshops from '@/components/home/header/searchfen/noshops.vue'
export default {
  name: "searchList",
  data() {
    return {
        value:this.$route.query.keywords,
        flag:true
    };
  },
  created() {
      console.log(this.$route)
  },
  components: {
      shops,noshops
      
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
.shopBox{
    position: absolute;
    background: rgb(209, 209, 209,0.1);
    height: 100%;
    
}
</style>