<template>
    <div class="content">
        <header class="header">
            <div class="title">填写订单</div>
        </header>
        <main>
           <div class="user"><order-address class="userInfo"></order-address></div>
           <div style="height: 30vw">
               777
           </div>
        </main>
        <div class="total">yyy</div>
    </div>
</template>
<script>
// @ is an alias to /src
import orderAddress from '@/components/placeOrder/orderAddress.vue'
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
        padding-bottom: 18vw;
        .header{
            text-align: center;
            height: 44px;
            line-height: 44px;
            color: #fff;
            .title{
                font-size: 18px;
                background-image: url("https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3736330826,2967852506&fm=85&s=5346387238AEBF09039603E40200E02F");
                background-size: cover;
                background-position: center center;
            }
        }
        main{
            .user{
                background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
                background-size:30vw;
                padding-bottom: 1vw;
            }
            .userInfo{
                height: 20vw;
            }
        }
        .total{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 18vw;
            background: #fff;
            opacity: 0.8;
        }
        
    }
    
</style>