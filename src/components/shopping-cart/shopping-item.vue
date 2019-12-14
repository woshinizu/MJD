<template>
    <div class="item_Box">
        <!-- <van-checkbox-group v-model="ary" ref="checkboxGroup"> -->
            <van-checkbox
                label-disabled
                class="shopName"
                v-model="allSelect"
                checked-color="#FD2607"
                
            >
                <div @click.stop="goShop">{{spuInfo.name}}</div>
            </van-checkbox>
            <div
                v-for="(item,index) in spuInfo.joincart" 
                :key="item.skuId"
                @click.stop="clickShop(item.productId)"
            >
                <div class="product">
                    <van-checkbox
                        label-disabled
                        @click.stop="changItem"
                        v-model="item.isSelect"
                        checked-color="#FD2607"
                        class="iss"
                    >
                    </van-checkbox>
                    <sku-item :skuInfo="item"></sku-item>
                </div>
                <van-divider :key="index" v-if=" index != spuInfo.joincart.length-1" />
            </div>
        <!-- </van-checkbox-group> -->
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
            show: false,
            ary: []
        
        }
    },
    created(){
        console.log(this.spuInfo);
    },
    computed:{
        allSelect:{
            get(){
                return !(this.spuInfo.joincart.some(item => {
                    console.log(item);
                    return item.isSelect == false
                }));
            },
            set(val){
                this.$emit('shopSelect',this.spuInfo.shopId,val);
            }
        }
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
        showPopup() {
            this.show = true;
        },
        clickShop(productId){
            console.log('clickShop');
            this.$router.push({
                path: '/details',
                query: {productId}
            })
        },
        changItem(){
            console.log('shop');
        },
        goShop(){
            this.$router.push({
                path: '/homePage',
                query: { shopId: this.spuInfo.shopId}
            })
        }
    },
}
</script>
<style lang="less" scoped>
    .item_Box{
        padding: 5vw;
        margin: 5px;
        .shopName{
            font-weight: 600;
            padding: 2vw 0;
            
        }
        .radio_Box{
            padding: 5vw 2vw 2vw;
        }
        .product{
            display: flex;
            .iss{
                min-width: 6vw;
            }
        }
        
    }
</style>