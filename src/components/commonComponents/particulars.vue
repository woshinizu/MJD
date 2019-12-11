<template>
    <div class="all">
        <div class="herder">
            <router-link to="/homePage/head">
                <div class="icon1 lt">
                    <van-icon name="arrow-left" />
                </div>
            </router-link>
            
            
            <span class="lt">店铺详情</span>
            <div class="icon2">
                 <van-icon name="ellipsis" />
            </div>
        </div>
        <div class="logo">
            <div class="lt img">
                <img src="//img13.360buyimg.com/cms/jfs/t1/7612/15/4826/4894/5bdbee52E3beb1314/3a4a0a5cddabfa59.jpg">
            </div>
            <div class="center lt">
                <h2>华为荣耀官方旗县店</h2>
                <p>自营</p>
            </div>
            <div class="iconbox">
                <van-icon name="star-o" class="icon"/>
                <p>收藏</p>
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'particulars',
    data() {
        return {
        
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
    .iconbox{
        .icon{
            margin-top:3vw;
        }
        >p{
            font-size: 1vw;
        }
    }
    
}
</style>