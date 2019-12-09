<template>
    <div class="item_Box">
         <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="#FD2607">{{data.name}}</van-radio>
            <template v-for="(item,index) in data.joincart" >
                <van-radio-group v-model="radio" class="radio_Box" :key="index">
                    <van-radio name="1" checked-color="#FD2607">
                        <sku-item :skuInfo="item"></sku-item>
                    </van-radio>
                </van-radio-group>
                <van-divider :key="index" v-if=" index != data.joincart.length-1" />
            </template>
        </van-radio-group>
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
export default {
    name: 'shoppingItem',
    props: ['data'],
    data() {
        return {
            radio: "1",
            show: false,
            // ary: [1,2,3]
        
        }
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
         showPopup() {
            this.show = true;
        }
    }
}
</script>
<style lang="less" scoped>
    .item_Box{
        padding: 5vw;
        margin: 5px;
        .radio_Box{
            padding: 5vw 2vw 2vw;
        }
    }
</style>