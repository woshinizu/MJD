<template>
    <div class="content">
        <header class="header">
            <div class="title">购物车</div>
            <div class="edit_title">编辑</div>
        </header>
        <main>
            <shopping-item></shopping-item>
        </main>
    </div>
</template>
<script>
// @ is an alias to /src
import shoppingItem from '@/components/shopping-cart/shopping-item';
export default {
    name: 'shoppingcart',
    data() {
        return {
        
        }
    },
    components: {
        'shopping-item': shoppingItem,
    },

}
</script>
<style lang="less" scoped>
    .content{
        min-height: 80vh;
        background: #F3F4F6;
        .header{
            text-align: center;
            height: 44px;
            line-height: 44px;
            color: #fff;
            .title{
                font-size: 18px;
                background: #FE4310;
            }
            .edit_title{
                position:absolute;
                right: 10px;
                top: 0;
                width: 50px;
            }
        }
        main{
            margin-top: 15px;
            border-radius: 10px;
            background: #fff;
        }
        
    }
    
</style>