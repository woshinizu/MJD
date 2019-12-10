<template>
    <div class="sku_box">
        <van-sku
            v-model="showContent"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
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
export default {
    name: 'skuList',
    props: ['show','goodsId', 'type'],
    data() {
        return {
            quota: 0,
            quotaUsed: 0,
            sku: {
            tree: [//规格列表
                {
                k: '颜色', // skuKeyName：规格类目名称
                v: [
                    {id: '30349', name: '红色', imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg', previewImgUrl: 'http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg',},
                    {id: '1215', name: '蓝色', imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg', previewImgUrl: 'http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg',}
                ]
                ,k_s: 's1'
                },
                {
                    k: '大小', 
                    v: [
                        { id: '30350',  name: '512G', },
                        { id: '1193', name: '1T', }
                    ],
                    k_s: 's2',
                },
                {
                    k: 'cpu', 
                    v: [
                        { id: '11111',  name: 'i7', },
                        { id: '22222', name: '15', }
                    ],
                    k_s: 's3',
                }
            ],
            list: [
                {
                    id: 2259, // skuId，下单时后端需要
                    price: 1000, // 价格（单位分）
                    s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '11111', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                    id: 2260, // skuId，下单时后端需要
                    price: 2000, // 价格（单位分）
                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '30350', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '22222', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 20 // 当前 sku 组合对应的库存
                }
            ],
            price: '1.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: false, // 是否无规格商品
            hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 商品标题
                title: '测试商品',
                // 默认商品 sku 缩略图
                picture: 'http://img2.imgtn.bdimg.com/it/u=3756254732,4064333062&fm=11&gp=0.jpg'
            },
            };
    },
    created(){
    },
    computed:{
        showContent:{
            get(){
                return this.show
            },
            set(val){
                if(val != this.show){
                    this.$emit('changeShow')
                }
            }
        }
    },
    components: {
    },
    methods:{
        onClicked(skuData){
            if(this.type == 'buy'){
                console.log('buy',skuData);
            } else if(this.type == 'add') {
                console.log('add',skuData);
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