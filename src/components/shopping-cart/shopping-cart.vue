<template>
    <div class="content" v-if="shoppingList || username">
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
    <div class="content" v-else>
        <header class="header">
            <div class="title">购物车</div>
        </header>
        <div class="gologin">
            <span>登录后可同步用户账户购物中的商品</span>
            <van-button class="btn2" color="#FD2607" @click="goLogin">登录</van-button>
        </div>
        <div class="img">
            <van-image
                round
                width="20vw"
                src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
            />
            <div>登录后可同步购物车中的商品</div>
        </div>
    </div>
    
</template>
<script>
// @ is an alias to /src
import shoppingItem from '@/components/shopping-cart/shopping-item';
import total from '@/components/shopping-cart/total';
import { getCartList, getLogin  } from '@/api/shopping.js';
export default {
    name: 'shoppingcart',
    data() {
        return {
            type: 0,
            username: localStorage.getItem('username') || '',
            shoppingList: [],
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
        // getLogin().then(data => {
        //     console.log(data);
        // })
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
        },
        goLogin(){
            this.$router.push('/login');
        }
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
        .gologin{
            height: 20vw;
            line-height: 20vw;
            text-align: center;
            background: #fff;
            .btn2{
                height: 10vw;
                line-height: 10vw;
                margin: 0 2vw;
            }
        }
        .img{
            text-align: center;
            margin: 20vw 0;
        }

        
    }
    
</style>