<template>
    <div class="btn_box">
        <div class="money">
            <span class="sum">￥{{(skuInfo.price * skuInfo.num).toFixed(2)}}</span>
        </div>
        <div class="order">
            <van-button  class="btn" color="#FD2607" round>提交订单</van-button>
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
    .btn_box{
        background: #fff;
        display: flex;
       justify-content: space-between;
       height:15vw;
       line-height: 15vw;
       .money{
           padding: 0 6vw;
           .sum{
               color: #FD2607;
               font-weight: 600;
           }
       }
       .order{
           padding: 0 4vw;
            .btn{
                height: 10vw;
                line-height: 10vw;
            }
       }
    }
</style>