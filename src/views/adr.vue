<template>
  <div>
    <div class="reapBox">
      <van-icon class="lt" name="arrow-left" @click="oldAge"></van-icon>
      <h4 class=" rt">收货地址</h4>
    </div>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "adr",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      // Toast("新增地址");
      this.$router.push('/newAdd')
    },

    onEdit(item, index) {
      // Toast("编辑地址:" + index);
      this.$router.push({
        path:'/bianji',
        query:{id:1}
      })
    },
    oldAge(){
      this.$router.push('/setting')
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.reapBox {
  * {
    padding: 0;
  }
  background: rgb(223, 53, 53);
  color: #ffff;
  height: 10vh;
  text-align: center;
  line-height: 10vh;

}
.van-icon-arrow-left:before {
  line-height: 10vh;
  margin-left: 4vw;
  font-size: 6vw;
}
h4{
  margin-right: 23vh;
}
</style>