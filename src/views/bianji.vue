<template>
    <div>
        <div class="newHBoxLMX">
            <van-icon class="lt" name="arrow-left" @click='oldAge' ></van-icon>
            <h4 class="lt">编辑收货地址</h4>
            <h5 class="rt" @click="del">删除</h5>
        </div>
        <van-address-edit
            :address-info='list'
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
import areaList  from "../js/address.js";
// @ is an alias to /src
export default {
  name: "newAdd",
  data() {
    return {
      areaList,
      searchResult: [],
      list: {
          id: "1",
          name: "张三",
          tel: "13000000000",
          province:'浙江省',
          city:'杭州市',
          county:'西湖区',
          addressDetail:'文三路 138 号东方通信大厦 7 楼 501 室',
         postalCode:'1234567'
        },
    };
  },
  methods: {
    onSave() {
    //   Toast("save");
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
    oldAge(){
        this.$router.push('/adr')
    },
    del(){
        //删除


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
h4 {
  margin-left: 15vh;
}
h5{
    margin-right: 5vw;
 }
</style>