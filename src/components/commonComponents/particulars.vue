<template>
    <div class="all">
        <div class="herder">
                <div class="icon1 lt" @click="change">
                    <van-icon name="arrow-left" />
                </div>
            <span class="lt">店铺详情</span>
            <div class="icon2">
                 <van-icon name="ellipsis" />
            </div>
        </div>
        <div class="logo">
            <div class="lt img">
                <img :src="shop.image">
            </div>
            <div class="center lt">
                <h2>{{shop.name}}</h2>
                <p>自营</p>
            </div>
            <div class="iconbox">
                <van-icon name="star-o" class="icon"/>
                <p>收藏</p>
            </div>
        </div>
        <div class="Description">
            <div class="lt">店铺简介</div>
            <div class="rt">{{shop.deac}}</div>
        </div>
        <div class="tlt">
            <div class="lt">店铺时间</div>
            <div class="rt">{{shop.start}}</div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

import {getShop} from '@/api/shopping'
export default {
    name: 'particulars',
    data() {
        return {
        shop:'',
        shopId:this.$route.query.shopId || '',
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
        change(){
            this.$router.push({
                path:'/homePage/head',
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
.all{
    width:100%;
    height:100vh;
    background:#eee;
    .herder{
        width:100%;
        height:20vw;
        background:#fff;
        border-bottom: 1px solid #000;
        .icon1{
            width: 10vw;
            height: 20vw;
            line-height: 20vw;
            font-size: 8vw;
            text-align: center;
        }
        span{
            width: 75vw;
            height: 18vw;
            display: block;
            line-height: 18vw;
            text-align: center;
        }
        .icon2{
            height: 18vw;
            line-height: 18vw;
            width: 15vw;
            text-align: center;
            float: left;
            font-size: 8vw;

        }
    }
    .logo{
        width: 100%;
        height: 17vw;
        background:#fff;
        .img{
            width: 25vw;
            height: 10vw;
            margin: 3vw;
            border: 1px solid #eee;
            border-radius: 5px;
        }
        .center{
            width:50vw;
            font-size:1vw;
            margin:4vw;
            p{
                width: 6vw;
                height: 4vw;
                background: red;
                line-height: 4vw;
                text-align: center;
                border-radius: 4px;
                margin-top: 1vw;
                color: #fff;
            }
        }
    }
    .Description{
            width: 100%;
            height: 15vw;
            background: #fff;
            line-height: 15vw;
            margin-top: 10vw;
            border-bottom: 1px solid #464242;
    }
    .tlt{
            width: 100%;
            height: 15vw;
            background: #fff;
            line-height: 15vw;
    }
    .iconbox{
        .icon{
            margin-top:3vw;
        }
        >p{
            font-size: 1vw;
        }
    }
    .rt{
        float: right;
        color: #a59c9c;
    }
    
}
</style>