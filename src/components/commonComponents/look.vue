<template>
    <div>
        <header>
            <router-link to="/details"><van-icon name="arrow-left" class="left"/></router-link>
            <span>5G新品上市</span>
            <router-link to="/index/classification">
            <van-icon name="apps-o" class="right1"/>
            </router-link>
            
            <van-icon name="ellipsis" class="right2"/>
        </header>
        <div class="top">
            <div class="img"> <img src="https://img30.360buyimg.com/cms/jfs/t1/7612/15/4826/4894/5bdbee52E3beb1314/3a4a0a5cddabfa59.jpg"> </div>
            <div class="til">
                <p>华为京东自营旗县店</p>
                <span>京东自营</span>
            </div>
        <div class="rig lt">
            
            <van-button class="rt button" color="red" round type="info" size="small">关注</van-button>
            <span>2586万人关注</span>
        </div>
        </div>
        <div class="event">
            <img src="https://m.360buyimg.com/babel/jfs/t1/101001/39/5346/238638/5dedabb8Ef016a1cb/87d02d8442699f3e.jpg!q70.dpg">
        </div>
        <div>
             <img src="https://m.360buyimg.com/babel/s1081x184_jfs/t1/97137/24/5587/35729/5dee0792Ed715c568/aafe72203da32add.jpg!q70.dpg">
            
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
header{
    width:100%;
    height:15vw;
    border-bottom:1px solid #eee;
    .left{
        width: 15vw;
        height: 15vw;
        text-align: center;
        line-height: 15vw;
        font-size: 8vw;
        float: left;
    }
    >span{
        width: 65vw;
        height: 15vw;
        display: inline-block;
        text-align: center;
        line-height: 15vw;
        font-size: 5vw;
        float: left;
    }
    .right1{
        float: left;
        font-size: 7vw;
        line-height: 15vw;
    }
    .right2{
        float: left;
        font-size: 7vw;
        line-height: 15vw;
        margin:0 2vw;
    }
}
.top{
    width: 100%;
    height: 15vw;
    .img{
           width: 20vw;
           height: 10vw;
           margin:2vw 3vw;
           float:left;
        img{
            width:100%;
            height:100%
        }
    }
    .til{
    width: 40vw;
    float: left;
    margin: 2vw;
    border-right: 3px solid #a49999;
        p{
            font-size: 3.5vw;
            font-weight: 800;
        }
        span{
            color: red;
            font-size: 3vw;
            border: 1px solid red;
            border-radius: 3px;
        }
    }
    .rig{
        width: 27vw;
    height: 15vw;
     span{
        font-size: 3vw;
        margin-left: 4vw;
        font-weight: 700;
     }
    .button{
        margin: 2vw 6vw 0 0vw;
        line-height: 1vw;
        height: 6vw;
        width: 2vw;
    }
    }

}
.event{
    width: 100%;
    height: 130vw;
}
</style>