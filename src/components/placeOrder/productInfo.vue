<template>
    <div class="sku_box">
        <div class="shop">
            <van-icon name="shop-o" />
            <span class="shop_title">{{skuInfo.name}}</span>
        </div>
        <sku-item :skuInfo="skuInfo" :from="type"></sku-item>
        <div class="express">
            <span>配送</span>
            <span>京东快递</span>
        </div>
        <div class="tips">
            <span>退换无忧 商家赠送 享运费补贴或免费取件服务</span>
            <div class="icon"><van-icon name="info-o" /></div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
export default {
    name: 'shoppingItem',
    // props: ['spuInfo'],
    data() {
        return {
            show: false,
            type: 'order',
            skuInfo: {
                        id: 1,
                        title: '华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                        item:{
                            颜色: '红色',
                            大小: '512g',
                        },
                        price: 1000,
                        num: 4,
                        image: '../../assets/logo.png',
                        isSelect: false,
                        shopId: 1,
                        name: 'JD自营',
                    }
        
        }
    },
    created(){
        
    },
    computed:{
        
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
        
    },
}
</script>
<style lang="less" scoped>
    .sku_box{
        margin-top: 5vw;
        border-radius: 10px;
        background: #fff;
        padding: 5vw;
        .shop{
            padding-bottom: 5vw;
            .shop_title{
                margin-left:2vw;
            }
        }
        .express{
            display: flex;
            justify-content: space-between;
            margin: 5vw 0 0 2vw;
            font-size: 14px;
        }
        .tips{
            display: flex;
            margin: 5vw 0 0 2vw;
            font-size: 14px;
            height: 5vw;
            line-height: 5vw;
            .icon{
                height: 5vw;
                line-height: 6vw;
            }
        }
    }
</style>