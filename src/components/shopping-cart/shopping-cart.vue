<template>
    <div class="content" v-if="shoppingList">
        <header class="header">
            <div class="title">购物车</div>
            <div class="edit_title" v-if="!type" @click="edit">编辑</div>
            <div class="edit_title" v-else @click="edit">完成</div>
        </header>
        <main v-for="item in shoppingList" :key="item.shopId">
            <shopping-item
                v-model="shoppingList"
                @shopSelect="shopSelect"
                :spuInfo="item"
            ></shopping-item>
        </main>
        <div class="total">
            <total
                :totalPrice="totalPrice"
                :type="type"
                :shoppingList="shoppingList"
                @allSelect="allSelect"
                :selectAll="selectAll"
            >
            </total>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import shoppingItem from '@/components/shopping-cart/shopping-item';
import total from '@/components/shopping-cart/total';
import { getCartList } from '@/api/shopping.js';
export default {
    name: 'shoppingcart',
    data() {
        return {
            type: 0,
            username: localStorage.getItem('username') || '',
            shoppingList: '',
            // shoppingList: [
            //         {
            //             shopId: 1,
            //             name: 'JD自营',
            //             joincart: [
            //                 {
            //                     id: 1,
            //                     title: '华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
            //                     item:{
            //                         颜色: '红色',
            //                         大小: '512g',
            //                     },
            //                     price: 1000,
            //                     num: 4,
            //                     image: '../../assets/logo.png',
            //                     isSelect: false,
            //                     shopId: 1,
            //                     name: 'JD自营',
            //                 },
            //                 {
            //                     id: 2,
            //                     title: '荣耀(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
            //                     item:{
            //                         颜色: '银色',
            //                         大小: '256g',
            //                     },
            //                     price: 500,
            //                     num: 2,
            //                     image: '../../assets/logo.png',
            //                     isSelect: false,
            //                 }
            //             ],
            //         },
            //         {
            //             shopId: 2,
            //             name: '华为旗舰店',
            //             joincart: [
            //                 {
            //                     id: '1',
            //                     title: '华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
            //                     item:{
            //                         颜色: '红色',
            //                         大小: '512g',
            //                     },
            //                     price: 1000,
            //                     num: 4,
            //                     image: '../../assets/logo.png',
            //                     isSelect: false,
            //                 },
            //                 {
            //                     id: '2',
            //                     title: '荣耀(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银',
            //                     item:{
            //                         颜色: '银色',
            //                         大小: '256g',
            //                     },
            //                     price: 500,
            //                     num: 2,
            //                     image: '../../assets/logo.png',
            //                     isSelect: false,
            //                 }
            //             ],
            //         }
            // ],
            
        }
    },
    computed:{
        totalPrice(){
            return this.shoppingList.reduce((prev,next) => {
                let sum = next.joincart.reduce((p,n) => {
                    return p+(n.isSelect ? n.price*n.num : 0)
                },0);
                return prev + sum
            },0);
        },
        selectAll(){
            return (this.shoppingList.every(item => {
                let shopAll = item.joincart.every(value => {
                    console.log(value.isSelect);
                    return value.isSelect == true
                })
                return shopAll == true
            }));
        }
    },
    created(){
        getCartList(this.username).then(data => {
            console.log(data);
            if(data.code == 0){
                this.shoppingList = data.data;
                console.log(this.shoppingList);
            } else {
                Notify({ type: 'danger', message: '请求错误' });
            }
        })
    },
    components: {
        'shopping-item': shoppingItem,
        total,
    },
    methods:{
        shopSelect(id,select){
            //点击店铺前选择按钮的方法
            if(id){
                let i = null;
                let newItem = this.shoppingList.find((item,index) => {
                    console.log('ggg',index);
                    i = index;
                    return item.shopId == id
                });
                // allSelect = select;
                newItem.joincart.forEach(element => {
                    element.isSelect = select;
                });
                this.shoppingList[i] = newItem;
            }
        },
        allSelect(select){
            //点击全选的方法
            this.shoppingList.forEach(item => {
                this.shopSelect(item.shopId,select)
            })
        },
        edit(){
            this.type = !this.type;
        }
    },
    watch: {
        // shoppingList:{
        //     deep:true,// 深度
        //     immediate:true,// 上来先执行一次
        //     handler(newV,oldV){
        //         // 深度侦听  vue没有给我们保留旧值
        //         console.log(newV,oldV)
        //     }
        // }
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
            // opacity: 0.8;
        }
        
    }
    
</style>