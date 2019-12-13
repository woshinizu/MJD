<template>
    <div>
        
        <header>
            <div class="img lt">
                <img src="//img11.360buyimg.com/cms/jfs/t1/6997/27/5197/8479/5bdbedb6Eb8e2ff7f/ebc913b8c18a58e0.jpg">
            </div>
            <div class="til lt">
                <router-link to="/particulars" tag="p">
                     <p>荣耀京东自营旗舰店</p>
                </router-link>
                <router-link to="/details?productId=1" tag="span">
                <span>京东自营</span>
                </router-link>
                
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
        <van-tabbar v-model="active">
        <van-tabbar-item icon="shop-o" 
            v-for="item in ary"
            :key="item.id"
            :to="item.to"
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
export default {
    name: 'XXX',
    data() {
        return {
        value:'',
        active:0,
        ary:[
            {til:'首页',to:'/homePage/head',icon:'shop-o',id:1},
            {til:'全部商品',to:'/homePage/allcommodity',icon:'bag',id:2},
            {til:'活动',to:'/homePage/activity',icon:'new-o',id:3},
            {til:'分类',to:'/homePage/sort',icon:'apps-o',id:4}]
        }
    },
    methods: {
        onSearch(){

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