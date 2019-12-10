<template>
    <div class="footer">
            <van-checkbox
                class="all"
                v-model="selectAll"
                checked-color="#FD2607"
                @click="change"
            >
                全选
            </van-checkbox>
        <div v-if="!type">
            <div>合计: <span class="num">￥{{totalPrice.toFixed(2)}}</span></div>
        </div>
        <div class="btnBox">
            <van-button v-show="!type" class="btn" color="#FD2607" round @click="submit">去结算</van-button>
            <van-button v-show="type" class="btn" round>删除</van-button>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'total',
    props: ['totalPrice','shoppingList', 'type', 'selectAll'],
    data() {
        return {
            radio: "1",
            show: false,
        }
    },
    components: {
    },
    methods:{
        change(){
            this.$emit('allSelect',!this.selectAll)
        },
        submit(){
            this.$router.push('/placeOrder');
        }
    }
}
</script>
<style lang="less" scoped>
   .footer{
       display: flex;
       justify-content: space-between;
       height:15vw;
       line-height: 15vw;
       .all{
           padding: 0 6vw;
       }
       .btnBox{
           padding: 0 4vw;
            .btn{
                height: 10vw;
                line-height: 10vw;
            }
       }
       .van-radio{
           padding: 0 4vw;
            height: 15vw;
            line-height: 15vw;
       }
       .num{
           font-weight: 600;
       }
   }
</style>