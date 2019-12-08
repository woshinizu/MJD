<template>
    <div class="item_content">
        <div class="img_box">
            <img class="img" src="../../assets/logo.png" alt="" />
        </div>
        <div>
            <div class="name">
                华为(HUAWEI) MateBook D 14英寸全面屏轻薄笔记本电脑便携超级快充第三方Linux(AMD锐龙5 3500U 8+512GB)银
            </div>
            <div class="sku_line">
                <van-button class="select_btn" @click="showPopup">
                    <div class="select">
                        <span>【预售版】MateBook D 14 锐龙版，第三方linux系统</span>
                        <van-icon class="drop_down" name="arrow-down" />
                    </div>
                </van-button>
                <van-popup position="bottom" :style="{ minHeight: '50%' }" v-model="show">内容</van-popup>
            </div>
            <div class="sku_sum">
                <div class="money">
                    <span class="unit">￥</span>
                    <span class="num">99999999</span>
                </div>
                <van-stepper v-model="value" integer />
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'skuItem',
    data() {
        return {
            radio: "1",
            show: false,
        
        }
    },
    components: {
        
    },
    methods:{
         showPopup() {
            this.show = true;
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
                width:20vw;
                height: 20vw;
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
        .sku_line{
            margin: 2vw 0;
            .select_btn{
                width: 50vw;
                background: #f7f7f7;
                padding: 0 15px 0 5px;
                height: 20px;
                line-height: 20px;
                font-size: 10px;
                color: #666;
                border-radius: 50px;
                .select{
                    display: flex;
                    >span{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .drop_down{
                        line-height: 20px;
                    }
                }
            }
            
        }
        .sku_sum{
            display: flex;
            height: 40px;
            line-height: 40px;
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