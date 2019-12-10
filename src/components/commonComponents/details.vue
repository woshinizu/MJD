<template>
    <div>
        <div>
            <router-link to="/index/found">
            <van-icon name="arrow-left" class="icon"/>
            </router-link>
        <van-swipe :autoplay="3000" indicator-color="white">
         
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg"></van-swipe-item>
        </van-swipe>
        <van-icon name="ellipsis" class="san" @click="changeShow"/>
      </div>
        <div class="price">
            <div>
            <span class="span">￥</span><span class="span1">2199.00</span>
            <span class="span2">￥2099.00</span>
            <span class="spanurl"></span>
            <div class="iconBox rt">
                <van-icon name="gold-coin-o" class="icon1 lt"/>
                <van-icon name="star-o" class="icon2 lt"/>
                <p class="rt">降价</p>
                <p class="rt">收藏</p>
            </div>
        </div>
        <div class="introduce">
            <i>
                <img src="https://img30.360buyimg.com/jdphoto/jfs/t1/103394/13/3758/3386/5de323b1Eac3d9094/0c8acd4c82acef04.png">
            </i>
            <i>
                <img src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/69566/30/15738/1062/5dd3abb6Ea8fd7aa3/57c6a72435905414.png">
            </i>
            荣耀10青春版 幻彩渐变 2400万AI自拍 全网通版4GB+64GB 渐变蓝 移动联通电信4G全面屏手机
        </div>
        <div class="desc">限时优惠899！2400万AI高清自拍，麒麟710处理器，炫光渐变色！荣耀爆品特惠，选品质，购荣耀~ 
            <router-link to="/look">
                 <a href="#">查看</a>
            </router-link>
          
        </div>
        <div class="select">
            <h3>已选</h3>
            <div>
                选择的类型
            </div>
            <van-icon name="ellipsis" class="dian"/>
        </div>
        <van-icon name="play"  class="sanjiao" v-show="isShow"/>
        <div class="box" v-show="isShow">
            <ul>
                <li>
                    <van-icon name="wap-home-o" />
                    <router-link to="/index/home">
                        <span>首页</span>
                    </router-link>
                    
                </li>
                <li>
                    <van-icon name="search" />
                    <router-link to="/search">
                        <span>搜索</span>
                    </router-link>
                    
                </li>
                <li>
                    <van-icon name="user-o" />
                    <router-link to="/index/found">
                        <span>我的京东</span>
                    </router-link>
                    
                </li>
                <li>
                    <van-icon name="exchange" />
                    <span>浏览记录</span>
                </li>
                <li>
                    <van-icon name="like-o" />
                    <router-link to="/index/my">
                        <span>我的关注</span>
                    </router-link>
                    
                </li>
            </ul>
        </div>
      </div>
      <div class="pic">
          <img src="https://img30.360buyimg.com/sku/jfs/t1/36741/20/3750/303100/5cb970f7E8d4360c0/300ebf1adf30579f.jpg">
      </div>
      <div>
          <van-goods-action>
    <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
    <router-link to="/homePage">
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
    </router-link>
    
    <van-goods-action-button type="warning" text="加入购物车" />
    <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'details',
    data() {
    return {
      current: 0,
      isShow:false,
    }
    },
    methods: {
        onChange(index) {
        this.current = index;
        },
        onClickIcon() {
        Toast('点击图标');
        },
        onClickButton() {
        Toast('点击按钮');
        },
        changeShow(){
            this.isShow = !this.isShow
        }
  }
    }

</script>
<style lang="less" scoped>

.icon{
    position: absolute;
    z-index: 1;
    font-size: 9vw;
    color: #fff;
    width: 10vw;
    height: 10vw;
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
    line-height: 10vw;
    margin: 2vw;
}
.san{
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
     z-index: 1;
    font-size: 9vw;
    color: #fff;
    width: 10vw;
    height: 10vw;
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
    line-height: 10vw;
    margin: 2vw;
}
.van-swipe{
    width:100%;
    height:90vw;
    position: relative;
    top: 0px;
    img{
        width:100%;
        height:100%
    }
    .custom-indicator{
        position: relative;
        top: -10vw;
        left: 90vw;
        color: #fff;
    }
}
.price{
    width: 92vw;
    height:10vw;
    margin: 4vw;
    img{
        width:100%;
        height:100%;
    }
    .span{
        color: red;
    }
    .span1{
        color: red;
        font-size: 6vw;
        font-weight: 700;
    }
    .span2{
        margin: 0 3vw;
        color: blueviolet;
    }
    .spanurl{
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 14px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTGE3/2U8/25G/1cq/1gs/10y/2g//1Yq/2tC/2hA/3FK/2tD//z7/35b/76s/6qT/+nj/9zT/4ts/5uB/82//39G6vAAAAAKdFJOUwD////I///jjklm7CdZAAACLElEQVQ4y3WVWZLkIAxEbROmpgGtiPtfdYSXary0KsJ/j1RKkDX9W78Vz5p/a9kqbVX2Cnvlz880nXTsvyu+HOxJp4HOOX+mX3pET/EDT8sN3enpS8f1V3q+smfbaaDzAU/fvk82Xi2/mh7hOOLz1/T8h+WHcsgHu9yGPXoOFZ/Ka1mZ+qQIq+YdrZo6arazRs6a0gusmclaNKhJbWMReGM1701LLQVFtG5sGD1XJmo5qsRILTmbpc25LH7aUjpskkpWqa3h0zM34liBY8RmnZUwq7DLZ6pdmAoqWMFG9d62N04xg7jtyISzQKMGCsJ+KqZEQAbAbhuJ7Nr2KuDVALdVsc1NxPkK0l2mVAGIxDC4MrPd2jYGtdz8BNFW+7yDN+4DY7GUFnU4I0P13rtuuCivBg0jsqj3iX3HCthZN+3jaga+qRPehAc4et8SYlT2gTnsw+FqmUBrRUw1HXDY4NvAWIWM4gK2w9xnAFV2G37HOkyArsx3uEr2acfIkHY4s7niUv1bthsGlIpCOOCx7SjYV+V77p+Wh7tdMm7lygjNN/VUntfoMIMs0VoLud+3ptIX1cjVc/FpK/Qb+lDu4kqzaui3s862OdbGvtn+rEpvu3bbb579PWP2x3jkCDpVrgHo3rE/SqdelOPf+bc8YuiufAbJPKbvM4Ze4GuIvUfYQOfr9ezoesu/3xwapG8Z9nkE9+n6zO2X4N5Df5p+Pte/jINd3qP3YMPn5z8ovzRMJvNRugAAAABJRU5ErkJggg==) 50% no-repeat;
        background-size: cover;
    }
    .iconBox{
        width:20vw;
        .icon1{
            margin:0 4vw;
        }
        p{
            font-size:2vw;
             margin:0.5vw 2vw;
        }
    }
    
}
.introduce{
    width:92vw;
     margin: 3vw 0vw;
     font-weight: 700;
    i{
        width: 10vw;
        height: 5vw;
        display: block;
        float: left;
        margin: 0 1vw;
        img{
            width:100%;
            height:100%
        }
    }
}
.desc{
        font-size: 3vw;
}
.select{
    width: 92vw;
    height: 15vw;
    background: rgba(231, 226, 222,0.5);
    margin: 1vw 0;
    h3{
        height: 100%;
        width: 10vw;
        font-size: 3vw;
        margin: 1vw;
        color: gray;
        float: left;
    }
    >div{
        float: left;
        width: 68vw;
        height: 100%;
    }
    .dian{
        float: right;
        margin: 1vw 3vw;
        font-weight: 900;
        color: gray;
    }
}
.box{
    background: rgba(0,0,0,0.5);
    width: 30vw;
    height: 50vw;
    position: absolute;
    top: 50px;
    right: 10px;
    ul{
        width:100%;
        height:100%;
        li{
            height:10vw;
            line-height:10vw;
            span{
                color: #fff;
                margin: 0 3vw;
                font-size: 4vw;
                border-bottom: 1px solid #fff;
                width: 10vw;
            }
            i{
                color:#fff;
                margin-left: 1vw;
            }
        }
    }
}
.sanjiao{
    position: absolute;
    top: 40px;
    right: 29px;
    transform: rotate(-90deg);
    color: rgba(0,0,0,0.5);
}
.pic{
    width: 92vw;
    margin: 0 4vw;
}
</style>