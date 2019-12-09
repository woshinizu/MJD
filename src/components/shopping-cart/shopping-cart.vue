<template>
    <div class="content">
        <header class="header">
            <div class="title">购物车</div>
            <div class="edit_title">编辑</div>
        </header>
        <main v-for="item in ary" :key="item.id">
            <shopping-item :data="item"></shopping-item>
        </main>
        <div class="total"></div>
    </div>
</template>
<script>
// @ is an alias to /src
import shoppingItem from '@/components/shopping-cart/shopping-item';
export default {
    name: 'shoppingcart',
    data() {
        return {
            ary: [
                {
                    shopId: 1,
                    name: 'JD自营',
                    joincart: [
                        {
                            id: '1',
                            title: '华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                            item:{
                                颜色: '红色',
                                大小: '512g',
                            },
                            price: 1000,
                            num: 4,
                            image: '../../assets/logo.png'
                        },
                        {
                            id: '2',
                            title: '荣耀(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                            item:{
                                颜色: '银色',
                                大小: '256g',
                            },
                            price: 500,
                            num: 2,
                            image: '../../assets/logo.png'
                        }
                    ],
                    total: 5000,
                },
                {
                    shopId: 2,
                    name: '华为旗舰店',
                    joincart: [
                        {
                            id: '1',
                            title: '华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                            item:{
                                颜色: '红色',
                                大小: '512g',
                            },
                            price: 1000,
                            num: 4,
                            image: '../../assets/logo.png'
                        },
                        {
                            id: '2',
                            title: '荣耀(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                            item:{
                                颜色: '银色',
                                大小: '256g',
                            },
                            price: 500,
                            num: 2,
                            image: '../../assets/logo.png'
                        }
                    ],
                    total: 5000,
                }
            ]
        }
    },
    components: {
        'shopping-item': shoppingItem,
    },

}
</script>
<style lang="less" scoped>
    .content{
        min-height: 80vh;
        background: #F3F4F6;
        .header{
            text-align: center;
            height: 44px;
            line-height: 44px;
            color: #fff;
            .title{
                font-size: 18px;
                background: #FE4310;
            }
            .edit_title{
                position:absolute;
                right: 10px;
                top: 0;
                width: 50px;
            }
        }
        main{
            margin-top: 15px;
            border-radius: 10px;
            background: #fff;
        }
        
    }
    
</style>