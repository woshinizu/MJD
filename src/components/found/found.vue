<template>
<div>
    <div class="header">
        <div class="left lt">
            <van-icon name="manager-o" color="#ffffff" size="25px" class="l"/>
        </div>
        <div class="center lt">
            <h2>发现</h2>
        </div>
        <div class="right rt">
            <van-icon name="search" color="#ffffff" size="25px" class="r"/>
            <van-icon name="chat" color="#ffffff" size="25px" class="r"/>
        </div>
    </div>


    <div class="footer">
        <div class="not-concern">
            <img src="../../assets/not-concern.jpg">
        </div>
        <div class="like">
            <h5 class="lt">猜你喜欢</h5>
            <van-icon name="warning-o" class="rt"/>
        </div>
        <div class="recommend">
            <ul>
                <li>
                    <div>
                        <i class="lt img"><img src="../../assets/logo.png"></i>
                        <p class="lt">膜法世家官方旗县店</p>
                        <van-button class="rt button" color="red" round type="info" size="small">+关注</van-button>
                    </div>
                </li>
            </ul>
                
            
        </div>
    </div>
</div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'found',
    data() {
        return {
            ary:[
                
            ]
        }
    },
    components: {
        
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
.recommend{
    width:100%;
    height:100%;
    background:#f7f5f5;
    ul{
        width: 96vw;
        background: #fff;
        margin: 0 2vw;
        li{
            width:100%;
            height:50vw;
            border-radius: 10px;
            div{
                i{
                    width:10vw;
                    height:10vw;
                    border-radius:50%;
                    img{
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        margin:2vw;
                        border:1px solid #eee;
                    }
                    
                }
                p{
                        margin: 4vw 2vw 2vw 8vw;
                        color: #000;
                        font-size: 15px;
                        font-weight: 600;
                }
                .button{
                    margin:10px
                }
            }
        }
    }
}
</style>