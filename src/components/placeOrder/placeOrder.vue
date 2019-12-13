<template>
    <div class="content">
        <header class="header">
            <div class="title">填写订单</div>
        </header>
        <main>
           <div class="user">
               <order-address class="userInfo"></order-address>
            </div>
            <pay-way class="pay"></pay-way>
            <product-info></product-info>
            <order-sum></order-sum>
        </main>
        <div class="total">
            <order-button></order-button>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import orderAddress from '@/components/placeOrder/orderAddress.vue';
import payWay from '@/components/placeOrder/payWay.vue';
import productInfo from '@/components/placeOrder/productInfo.vue';
import orderSum from '@/components/placeOrder/orderSum.vue';
import orderButton from '@/components/placeOrder/orderButton.vue';
export default {
    name: 'placeOrder',
    data() {
        return {
          
        }
    },
    computed:{
        
    },
    craeted(){
    },
    components: {
        'order-address':orderAddress,
        'pay-way':payWay,
        'product-info':productInfo,
        'order-sum':orderSum,
        'order-button':orderButton,
    },
    methods:{
        
    },
    watch: {
        
    },

}
</script>
<style lang="less" scoped>
    .content{
        min-height: 80vh;
        background: #F3F4F6;
        padding-bottom: 15vw;
        .header{
            text-align: center;
            height: 44px;
            line-height: 44px;
            color: #fff;
            .title{
                font-size: 18px;
                background: #FE4310;
            }
        }
        main{
            .user{
                background: #fff repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
                background-size:30vw;
                padding-bottom: 1vw;
                border-radius: 10px;
            }
            .userInfo{
                height: 20vw;
            }
            .pay{
                margin: 5vw 0;
            }
        }
        .total{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 15vw;
            background: #fff;
        }
        
    }
    
</style>