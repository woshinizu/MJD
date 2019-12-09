<template>
  <div>
    <div class="searchBox">
      <router-link to="/index/home">
        <div class="jump" >
          <van-icon name="arrow-left" />
        </div>
      </router-link>
      <div class="Search">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          white="100vw"
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="add">搜索</div>

        
        </van-search>
        
      </div>
    </div>
    <div>
      <div class="hotBoxSh">
        <div class="topSearch">最近搜索</div>
        <van-icon @click="clear"  class="rt" name="delete" />
      </div>
      <div class="hotBoxX">
        <div v-for="(i,index) in ary" :key="index" @click='onSearchAdd(i)'>
          <span>{{i}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import hot from "@/components/home/header/hot.vue";
import { searchList } from '@/api/index.js'
export default {
  name: "search",
  data() {
    return {
      value: '',
      ary: localStorage.getItem('set').split(','),
    };
  },
  components: {
    // hot
  },
  methods: {
    onSearch() {},
    add() {
      this.ary.push(this.value)
    //   this.ary = this.value;
      localStorage.setItem('set',this.ary.join(","))
      this.$router.push({
        path:'/searchList',
        query:{keywords:this.value}
      })
    },
    onSearchAdd(i){
        searchList({keywords:i}).then(data=>{
            this.data = data
        })
    },
    clear(){
        localStorage.removeItem('set')
        this.ary = []
    }
  }
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
.hotBoxSh {
  margin-top: 3vw;
  .topSearch {
    margin-left: 3vw;
    display: inline-block;
  }
  .van-icon-delete {
    margin: 1.5vw 6vw 2vw 2vw;
    display: inline-block;
    font-size: 1.1rem;
    color: #ccc;
  }
}
.hotBoxX {
  margin: 3vw;
  width: 100%;
  height: 100%;
  > div {
    display: inline-block;
    margin-bottom: 4vw;
    span {
      width: 100%;
      height: 100%;
      background: rgba(204, 204, 204, 0.2);
      margin-left: 3vw;
      padding: 1vw 2vw 1vw 2vw;
      border-radius: 5px;
      font-size: 0.8rem;
      color: rgba(204, 204, 204, 0.8);
    }
  }
}
</style>