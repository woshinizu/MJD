<template>
<div>
    <div class="header">
        <div class="left lt">
            <router-link to="/index/my">
                <van-icon name="manager-o" color="#ffffff" size="25px" class="l" />
            </router-link>
        </div>
        <div class="center lt">
            <h2>发现</h2>
        </div>
        <div class="right rt">
            <router-link to="/search">
                 <van-icon name="search" color="#ffffff" size="25px" class="r"/>
            </router-link>
        </div>
    </div>


    <div class="footer">
        <div class="not-concern">
            <img src="../../assets/not-concern.jpg">
        </div>
        <div class="like">
            <h5 class="lt">猜你喜欢</h5>
            <van-icon name="warning-o" class="rt" @click="add"/>
        </div>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
        <recommend></recommend>
    </div>
</div>
</template>
<script>
// @ is an alias to /src
import recommend from '@/components/found/recommend/recommend.vue'
export default {
    name: 'found',
    data() {
        return {
            ary:[
                
            ]
        }
    },
    methods: {
        changeA(e){
            console.log(e)
        },
        add(){

        },
        concern(){
            this.$router.push('/found/concern')
        }
    },
    components: {
        recommend
    }
}
</script>
<style lang="less" scoped>
.header{
    width:100%;
    height:15vw;
    background:red;
    .left{
        width:15vw;
        height:15vw;
        text-align: center;
        .l{
            line-height: 15vw;
        }
    }
    .center{
        width:60vw;
        height:15vw;
        text-align:center;
        line-height: 15vw;
        font-family:Arial,Helvetica,sans-serif;
        h2{
            color:#fff;
            font-family: cursive;
            font-size: 27px;
            position: relative;
            left: 20px;
        }
    }
    .right{
        width: 25vw;
        height: 15vw;
        line-height: 18vw;
        text-align: right;
        .r{
            margin:0 2vw;  
        }
    }
}
.footer{
    height:100%;
    width:100%;
    background:#f7f5f5;
    .not-concern{
        width: 96vw;
        height: 50vw;
        background: #fff;
        margin: 0 2vw;
        img{
            width:100%;
            height:100%;
            border-radius: 10px;
        }
    }
    .like{
        padding:2vw 0 2vw 2vw;
        width:22vw;
        height:8vw;
        h5{
        color:#000000;
        line-height:8vw
        }
        .van-icon-warning-o{
            line-height:8vw
        }
    }
    
}


</style>