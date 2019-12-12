<template>
    <div class="pay">
        <div>支付方式</div>
        <div class="way_box">
            <span class="way">在线支付</span>
            <van-icon name="weapp-nav" />
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
export default {
    name: 'orderAddress',
    data() {
        return {
          showList:true,
          
        }
    },
    computed:{
        
    },
    craeted(){
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
        
    },
    watch: {
        
    },

}
</script>
<style lang="less" scoped>
    .pay{
        display: flex;
        justify-content: space-between;
        padding: 2vw 5vw;
        background: #fff;
        border-radius: 10px;
        height: 15vw;
        line-height: 15vw;
        .way_box{
            line-height: 15vw;
            .way{
                margin: 2vw;
            }
        }
        
    }
</style>