<template>
    <div class="sku_box">
        <van-sku
            v-model="showContent"
            :sku="sku"
            :goods="sku.goods"
            :goods-id="goodsId"
            :quota="quota"
            :initial-sku="initialSku"
            :quota-used="quotaUsed"
            :hide-stock="sku.hide_stock"
             @buy-clicked="onClicked"
             @overlay-clickd="close"
            close-on-click-overlay
            :show-add-cart-btn="false"
            buy-text="确定"
        />
    </div>
</template>
<script>
// @ is an alias to /src
import skuItem from '@/components/shopping-cart/item-sku';
import { addCart } from "@/api/shopping.js"
export default {
    name: 'skuList',
    props: ['show','goodsId', 'type','sku'],
    data() {
        return {
            quota: 0,
            quotaUsed: 0,
            username: localStorage.getItem('username') || '',
            initialSku: {},
            // initialSku: {
            //     // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
            //     // 值：skuValueId（规格值 id）
            //     s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            //     s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            //     s3: '122', // 最多包含3个规格值，为0表示不存在该规格
            //     // 初始选中数量
            //     selectedNum: 2
            // },
            };
    },
    created(){
        console.log(this.sku);
    },
    computed:{
        showContent:{
            get(){
                return this.show
            },
            set(val){
                if(val != this.show){
                    this.$emit('changeskuShow')
                }
            }
        }
    },
    components: {
    },
    methods:{
        onClicked(skuData){
            let params = {},
                skuInfo={};
            if(this.type == 'buy'){
                console.log('buy',skuData);
            } else if(this.type == 'add') {
                console.log('add',skuData);
                params.shopId = this.sku.shopId;
                params.name = this.sku.shopName;
                params.joincart = [];
                skuInfo.productId = this.sku.productId;
                skuInfo.skuId= skuData.selectedSkuComb.id;
                skuInfo.title= this.sku.goods.title;
                skuInfo.price= this.sku.list.find(item => item.id = skuInfo.skuId).price;
                skuInfo.num = skuData.selectedNum;
                skuInfo.isSelect=false;
                skuInfo.item = {};
                let names = Object.keys(skuData.selectedSkuComb);
                names.forEach(item => {
                    this.sku.tree.forEach(v => {
                        if(item == v.k_s){
                            let str = '';
                            v.v.forEach(i => {
                                if(i.id ==  skuData.selectedSkuComb[item]){
                                    skuInfo.item[v.k] =i.name;
                                    // skuInfo.item.push({[v.k]: i.name,});
                                }
                            })
                            skuInfo.image = v.imgUrl ?  v.imgUrl : this.sku.goods.picture;
                        }
                        
                    })
                });
                params.username=this.username;
                params.joincart.push(skuInfo);
                console.log(params);
                addCart(params).then(data => {
                    console.log(data);
                })
            } else if(this.type == 'edit'){
                this.$emit('changeShow',skuData.selectedSkuComb.id)
            }
        },
        close(){
            console.log('close');
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>