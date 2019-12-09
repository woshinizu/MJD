<template>
    <div class="noshopsBox">
        <span>对不起搜索不到该商品 也没有相关的商品 请您重新搜索</span>
        <van-icon name="question-o" />
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'noshops',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .noshopsBox{
        // background: #ccc;
        text-align: center ;
        color: rgb(190, 189, 189,0.5) ;
        margin-top:2vw;     
        padding: 5vw;
        span{
            font-size:1.5rem;
            color: rgb(190, 189, 189,0.8) ;

        }
        i{
            margin-top: 15vh;
            font-size: 10rem;
            display: block;
            color: rgba(223, 76, 76, 0.3) ;
        }
    }
</style>