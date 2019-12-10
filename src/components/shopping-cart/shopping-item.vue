<template>
    <div class="item_Box">
            <van-checkbox @click.self="change(!spuInfo.allSelect)" v-model="spuInfo.allSelect" checked-color="#FD2607">{{spuInfo.name}}</van-checkbox>
            <template v-for="(item,index) in spuInfo.joincart" >
                    <van-checkbox @click="changItem" v-model="item.isSelect" checked-color="#FD2607" :key="item.id">
                        <sku-item :skuInfo="item"></sku-item>
                    </van-checkbox>
                <van-divider :key="index" v-if=" index != spuInfo.joincart.length-1" />
            </template>
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
export default {
    name: 'shoppingItem',
    props: ['spuInfo'],
    data() {
        return {
            checked:1,
            itemRadio: 1,
            show: false,
            // ary: [1,2,3]
        
        }
    },
    created(){
        console.log(this.spuInfo);
    },
    computed:{
        allSelect:{
            get(){
                return 
            },
            set(){}
        }
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
         showPopup() {
            this.show = true;
        },
        change(select){
            console.log(11);
            this.$emit('shopSelect',this.spuInfo.shopId,select);
        },
        changItem(){
            this.itemRadio = this.itemRadio ? 0 : 1;
            console.log(4444444);
        }
    },
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