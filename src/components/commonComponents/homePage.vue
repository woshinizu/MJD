<template>
    <div>
        
        <header>
            <div class="img lt">
                <img :src="shop.header">
            </div>
            <div class="til lt"  @click="addChange">
                     <p>{{shop.name}}</p>
                <span>京东自营</span>
                
            </div>
            <van-button icon="star-o" type="primary" class="button">关注有礼</van-button>
            
        </header>
        <div class="search">
               <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                >
                <div slot="action" @click="onSearch">搜索</div>
                </van-search>
        </div>
        <router-view></router-view>
        </van-tabs>
        <van-tabbar v-model="active" @change="onchange">
        <van-tabbar-item icon="shop-o" 
            v-for="item in ary"
            :key="item.id"
            :title="item.til"
            :icon="item.icon"
            
        >
        {{item.til}}
        </van-tabbar-item>
        
        </van-tabbar>
        
    </div>
</template>
<script>
// @ is an alias to /src

import {getShop} from '@/api/shopping'
export default {
    name: 'XXX',
    data() {
        return {
        value:'',
        active:0,
        shop:'',
        shopId:this.$route.query.shopId || '',
        ary:[
            {til:'首页',to:'/homePage/head',icon:'shop-o',id:1},
            {til:'全部商品',to:'/homePage/allcommodity',icon:'bag',id:2},
            {til:'活动',to:'/homePage/activity',icon:'new-o',id:3},
            {til:'分类',to:'/homePage/sort',icon:'apps-o',id:4}]
        }
    },
    created() {
         console.log(this.$route)
        getShop(this.shopId).then(data=>{
            if(data.code==0){
                this.shop = data.data
                console.log(this.shop)
            }else{
                Notify({ type: 'danger', message: '请求错误' })
            }
        })
    },
    methods: {
        onSearch(){

        },
        addChange(){
            console.log(this.shop.shopId)
            this.$router.push({
                path:'/particulars',
                query:{
                    shopId:this.shop.shopId
                }
            })
        },
        
        onchange(index){
            console.log(index);
            this.$router.push({
                path:this.ary[index].to,
                query:{
                    shopId:this.shopId
                }
            })
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>

header{
    width: 100%;
    height: 21vw;
    background: url(https://img30.360buyimg.com/cms/jfs/t16936/264/1681570577/52086/e47956d7/5ad3fff1Ncf4ec060.png) no-repeat;
    background-size: cover;
    .img{
        width: 15vw;
        height: 15vw;
        margin: 3vw;
        img{
            width:100%;
            height:100%;
            border-radius: 8px;
        }
    }
    .til{
            width: 40vw;
            height: 15vw;
            margin: 3vw 0;
            color: #fff;
            >p{
                font-weight: 600;
                width:45vw;
            }
            >span{
                background: red;
                font-size: 3vw;
                font-weight: 700;
                padding: 1vw;
                border-radius: 4px;
                margin-top: 2vw;
                display: block;
                width: 12vw;
            }
    }
    .button{
        float: right;
        margin: 6vw 2vw;
        background: red;
        border-radius: 10vw;
        border: 1px solid red;
        height: 8vw;
        line-height: 8vw;
        font-size: 2vw;
        width: 27vw;
    }
}
.van-search{
    background: linear-gradient(45deg, #09062c, #5d2152) !important;
}
.van-search__action{
    color:#fff;
}
</style>