<template>
  <div>
    <div class="searchLMX" style=" background: red;box-sizing:border-box">
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
    </div>

    <!-- ======================================================================================== -->
    <div>
      <van-tree-select
        height="100vh"
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-nav="changeLMX"
        class="barBox"
      >
        <div slot="content">
          <div class="commodityLMX">
            <h4 class="four">热门推荐</h4>
            <van-grid :gutter="10">
              <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
        </div>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
// @ is an alias to /src
export default {
  name: "classification",
  data() {
    return {
      value: "",
      items: [],
      activeId: 1,
      activeIndex: 0
    };
  },
  methods: {
    changeLMX(index) {
      console.log(index);

      let aLMX = document.getElementsByClassName("my-class")[0];
      let aHeight = aLMX.offsetHeight; //44
      let domH =
        document.documentElement.clientHeight || document.body.clientHeight; //640
      let firstH = document.getElementsByClassName("navBox")[0];
      let fH = firstH.clientHeight; //58
      let headerH = document.getElementsByClassName("searchLMX")[0];
      let hH = headerH.clientHeight; //70
      let centerBOX = domH - fH - hH;
      let allA = this.items.length * aHeight;
      let ele = document.querySelector(".barBox").querySelector(".van-sidebar");
      console.log(this.activeIndex * aHeight, this.activeIndex);
      // ele.style.transform= `translateY(${-this.activeIndex*aHeight}px)`
      // ele.scrollTop = index*aHeight
      this.move(ele, index * aHeight);
    },
    move(ele, tar) {
      let t = ele.scrollTop;
      function fn() {
        t += 10;
        ele.scrollTop = t;
        if (t >= tar) {
          ele.scrollTop = tar;
          return;
        }
        requestAnimationFrame(() => {
          fn();
        });
      }
      fn();
    }
  },
  created() {
    Axios.get("/classfy").then(data => {
      let temp = data.data.data;
      this.items = temp;
    });
  },
  components: {}
};
</script>
<style lang="less" scope>
.barBox {
  .van-sidebar {
    height: 80vh;
  }
}
.searchLMX > .van-search {
  height: 11vh;
  background: rgb(228, 60, 31) !important;
}
.van-tree-select__content {
  flex: 3;
}
.van-grid-item__content--center {
  width: 21vw;
}
.four {
  margin: 4vw 0 1.5vh 2.5vw;
}
.my-class {
  box-sizing: border-box;
}
</style>
