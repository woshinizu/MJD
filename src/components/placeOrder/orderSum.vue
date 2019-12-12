<template>
    <div class="money_box">
        <div class="money">
            <span>商品金额</span>
            <span class="sum">￥{{(skuInfo.price * skuInfo.num).toFixed(2)}}</span>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'money',
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
    },
    methods:{
       
    },
}
</script>
<style lang="less" scoped>
    .money_box{
        margin-top: 5vw;
        border-radius: 10px;
        background: #fff;
        padding: 5vw;
        .money{
            display: flex;
            justify-content: space-between;
            margin: 0vw 0 0 2vw;
            font-size: 14px;
            .sum{
                font-weight: 600;
            }
        }
        
    }
</style>