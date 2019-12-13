<template>
    <div class="item_content">
        <div class="img_box">
            <van-image
                width="100"
                height="100"
                class="img"
                radius="5px"
                :src="skuInfo.image"
            />
            <!-- <img class="img" src="../../assets/logo.png" alt="" /> -->
        </div>
        <div>
            <div :class="from == 'order' ? 'orderName'  : 'name'">
                {{skuInfo.title}}
            </div>
            <div class="sku_line">
                <div v-if="from == 'order'"><span class="orderSpecs">{{specs}}</span></div>
                <van-button v-else class="select_btn" @click.stop="showPopup">
                    <div class="select">
                        <span>{{specs}}</span>
                        <van-icon class="drop_down" name="arrow-down" />
                    </div>
                </van-button>
            </div>
            <div class="sku_sum">
                <div class="money">
                    <span class="unit">￥</span>
                    <span class="num">{{skuInfo.price.toFixed(2)}}</span>
                </div>
                <div @click.stop="changeNum">
                    <van-stepper v-model="skuInfo.num" integer />
                </div>
            </div>
        </div>
        <div @click.stop="stop" v-if="show">
            <sku-list :show="show" @goodsId="goodsId" :type="type" @changeskuShow="changeskuShow" :sku="sku"></sku-list>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import skuList from '@/components/commonComponents/skuList.vue';
import { getSkuList } from "@/api/shopping.js"
export default {
    name: 'skuItem',
    props: ['skuInfo', 'from'],
    data() {
        return {
            value: 0,
            show: false,
            goodsId: 2259,
            type: 'edit',
            sku: '',
        }
    },
    components: {
        'sku-list':skuList,
    },
    computed:{
        specs(){
            let name = Object.keys(this.skuInfo.item);
            let ary =[];
            name.forEach(v => {
                ary.push(v + ':' + this.skuInfo.item[v])
            })
            return ary.join(',')
        }
    },
    methods:{
         showPopup() {
            getSkuList(this.skuInfo.productId).then(data => {
                if(data.code == 0){
                    this.sku = data.data;
                    this.show = true;
                    console.log(data);
                } else{
                    Notify({ type: 'danger', message: '请求错误' });
                }
            })
            
        },
        changeNum(){
            console.log(111);
        },
        changeskuShow(){
            this.show = !this.show;
        },
        stop(){
            console.log('shop');
        }
    }
}
</script>
<style lang="less" scoped>
    .item_content{
        display: flex;
        .img_box{
            margin: 0 2vw;
            .img{
                box-shadow: 0 0 18px 0 rgba(0,0,0,.05);
            }
        }
        .name{
            font-size: 14px;
            padding-right: 10px;
            margin-bottom: 3px;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .orderName{
            font-size: 16px;
            padding-right: 10px;
            margin-bottom: 3px;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .sku_line{
            margin: 2vw 0;
            .select_btn{
                width: 50vw;
                background: #f7f7f7;
                padding: 0 2vw;
                height: 5vw;
                line-height: 5vw;
                font-size: 10px;
                color: #666;
                border-radius: 50px;
                .select{
                    display: flex;
                    justify-content: space-between;
                    >span{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .drop_down{
                        line-height: 5vw;
                    }
                }
            }
            .orderSpecs{
                color: #666;
                font-size: 12px;
            }
            
        }
        .sku_sum{
            display: flex;
            height: 10vw;
            line-height: 10vw;
            justify-content: space-between;
            .money{
                color:#CA300A;
                font-weight: 600;
                .unit{
                    font-size: 12px;
                }
                .num{
                    font-size: 16px;
                }
            }
        }
    }
</style>