<template>
    <div class="content">
        <header class="header">
            <div class="title">购物车</div>
            <div class="edit_title">编辑</div>
        </header>
        <main v-for="item in ary" :key="item.shopId">
            <shopping-item v-model="ary" @shopSelect="shopSelect" :spuInfo="item"></shopping-item>
        </main>
        <div class="total">
            <total :totalPrice="totalPrice" :all="all"></total>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import shoppingItem from '@/components/shopping-cart/shopping-item';
import total from '@/components/shopping-cart/total'
export default {
    name: 'shoppingcart',
    data() {
        return {
            all:false,
            ary: [
                {
                    shopId: 1,
                    name: 'JD自营',
                    allSelect: false,
                    joincart: [
                        {
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
                        },
                        {
                            id: 2,
                            title: '荣耀(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
                            item:{
                                颜色: '银色',
                                大小: '256g',
                            },
                            price: 500,
                            num: 2,
                            image: '../../assets/logo.png',
                            isSelect: false,
                        }
                    ],
                },
                {
                    shopId: 2,
                    name: '华为旗舰店',
                    allSelect: false,
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
                            image: '../../assets/logo.png',
                            isSelect: false,
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
                            image: '../../assets/logo.png',
                            isSelect: true,
                        }
                    ],
                }
            ]
        }
    },
    computed:{
        totalPrice(){
            return this.ary.reduce((prev,next) => {
                let sum = next.joincart.reduce((p,n) => {
                    return p+(n.isSelect ? n.price*n.num : 0)
                },0);
                return prev+sum
            },0);
        }
    },
    craeted(){
    },
    components: {
        'shopping-item': shoppingItem,
        total,
    },
    methods:{
        shopSelect(id,select){
            if(id){
                let i = '';
                let newAry = this.ary.filter((item,index) => {
                    i=index;
                    return item.shopId == id
                });
                newAry[0].allSelect = true;
                newAry[0].joincart.forEach(element => {
                    element.isSelect = true;
                });
                this.ary[i-1] = newAry[0];
                console.log(11111111111);
                console.log(this.ary);
            }
        },
        itemSelect(){

        }
    }

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
        .total{
            position: fixed;
            bottom: 15vw;
            left: 0;
            width: 100%;
            height: 18vw;
            background: #fff;
            opacity: 0.8;
        }
        
    }
    
</style>