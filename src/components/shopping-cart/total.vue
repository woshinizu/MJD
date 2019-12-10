<template>
    <div class="footer">
        <van-radio-group v-model="radio" class="radio">
            <van-radio :name="all ? radio : ''" checked-color="#FD2607">全选</van-radio>
        </van-radio-group>
        <div>
            <div>合计: <span class="num">￥{{totalPrice.toFixed(2)}}</span></div>
        </div>
        <div class="btnBox">
            <van-button class="btn" color="#FD2607" round>去结算</van-button>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'total',
    props: ['totalPrice','all'],
    data() {
        return {
            radio: "1",
            show: false,
        }
    },
    components: {
    },
    methods:{
    }
}
</script>
<style lang="less" scoped>
   .footer{
       display: flex;
       justify-content: space-between;
       height:15vw;
       line-height: 15vw;
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