<template>
    <div class="item_Box">
        <!-- <van-checkbox-group v-model="ary" ref="checkboxGroup"> -->
            <van-checkbox
                label-disabled
                class="shopName"
                @click.stop="changeShopSelect"
                v-model="spuInfo.allSelect"
                checked-color="#FD2607"
            >
                {{spuInfo.name}}
            </van-checkbox>
            <div
                v-for="(item,index) in spuInfo.joincart" 
                :key="item.id"
                @click.stop="clickShop(item.id)"
            >
                <div class="product">
                    <van-checkbox
                        label-disabled
                        @click.stop="changItem"
                        v-model="item.isSelect"
                        checked-color="#FD2607"
                        @click="changItem(item.id,item.isSelect)"
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
                return this.spuInfo.allSelect
            },
            set(val){}
        }
    },
    components: {
        'sku-item': skuItem,
    },
    methods:{
        showPopup() {
            this.show = true;
        },
        changeShopSelect(){
            //点击店铺  前选择按钮  调用父组件方法改变数据
            console.log(this.spuInfo.shopId,!this.spuInfo.allSelect);
            this.$emit('shopSelect',this.spuInfo.shopId,!this.spuInfo.allSelect);
        },
        changItem(id,select){
            console.log(id,this.spuInfo.shopId,!select);
            this.$emit('itemSelect',id,this.spuInfo.shopId,!select);
        },
        clickShop(id){
            console.log('clickShop');
            this.$router.push({
                path: '/details',
                query: {id}
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