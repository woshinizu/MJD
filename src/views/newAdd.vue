<template>
  <div>
    <div class="newHBoxLMX">
      <van-icon class="lt" name="arrow-left" @click="oldAge"></van-icon>
      <h4 class="newF rt">新建收货地址</h4>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import areaList  from "../js/address.js";
export default {
  name: "newAdd",
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave() {
      Toast("save");
      //点击保存
      // localStorage=this.value;
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    oldAge() {
      this.$router.push("/adr");
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.newHBoxLMX {
  height: 10vh;
  text-align: center;
  line-height: 9vh;
  border-bottom: 1px solid #fcf2f2;
}
.van-icon-arrow-left:before {
  line-height: 10vh;
  margin-left: 4vw;
  font-size: 6vw;
}
.newF {
  margin-right: 22vh;
}
</style>