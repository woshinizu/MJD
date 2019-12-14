<template>
    <div>
        <ul v-if="shop">
            <li v-for="item in shop.product" @click="addchange(item.productId)">
                <img :src="item.goods.picture">
                <div>
                    <p>{{item.goods.title}}</p>
                    <span>{{item.price}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
// @ is an alias to /src

import {getShop} from '@/api/shopping'
export default {
    name: 'XXX',
    data() {
        return {
            shopId:this.$route.query.shopId||'',
            shop:'',
            ary:[
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',
                til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'
                },
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/44228/11/13532/140341/5d6ce65fE4766ed9a/fb3a352e17b22823.jpg!q70.dpg.webp',
                til:'荣耀MagicBook Pro 第三方Linux版16.1英寸全面屏轻薄笔记本电脑（AMD R5 3550H 8G 512G 100%sRGB）冰河银',count:'￥299.00'
                },
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/25803/18/15334/168068/5caee58aEf9db82c0/866518bfac170b25.jpg!q70.dpg.webp',
                til:'荣耀10青春版 幻彩渐变 2400万AI自拍 全网通版6GB+64GB 渐变蓝 移动联通电信4G全面屏手机 双卡双待',count:'￥299.00'
                },
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/93476/5/4396/95600/5de71104E895c7644/8003760dbd58ab55.jpg!q70.dpg.webp',
                til:'荣耀猎人电竞路由器/专业手游加速/双5G通道 Wi-Fi三频/凌霄四核CPU/2100M无线高速穿墙',count:'￥299.00'
                },
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg!q70.dpg.webp',
                til:'荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 魅丽红 移动联通电信4G全面屏手机',
                count:'￥299.00'
                }
                ]
        }
    },
    created() {
        
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
        addchange(productId){
            this.$router.push({
                path:'/details',
                query:{
                    productId,
                }
            })
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
ul{
    width: 94vw;
    margin: 0 3vw 20vw 3vw;
    
    li{
            width: 100%;
            height: 34vw;
            border-bottom: 1px solid #d4c3c3;
            margin:3vw 0;
            img{
                float: left;
                width: 30vw;
                height: 30vw;
                margin-right: 4vw;
            }
            p{
                width: 58vw;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                float: left;
                font-weight: 800;
                margin-bottom: 3vw;
            }
            span{
                color: red;
                font-weight: 800;
            }
    }
}
</style>