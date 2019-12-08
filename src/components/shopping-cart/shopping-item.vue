<template>
    <div class="item_Box">
         <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="#FD2607">JD自营</van-radio>
            <van-radio-group v-model="radio" class="radio_Box">
                <van-radio name="1" checked-color="#FD2607">
                    <sku-item></sku-item>
                </van-radio>
            </van-radio-group>
        </van-radio-group>
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
export default {
    name: 'shoppingItem',
    data() {
        return {
            radio: "1",
            show: false,
        
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
        .radio_Box{
            padding: 5vw 2vw 2vw;
        }
    }
</style>