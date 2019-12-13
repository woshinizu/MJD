<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="//img10.360buyimg.com/cms/jfs/t1/99353/1/5477/503183/5dedb5c7Ece4b7723/876fa1ab92011809.jpg!q70.dpg.webp"></van-swipe-item>
        <van-swipe-item><img src="//img10.360buyimg.com/cms/jfs/t1/99353/1/5477/503183/5dedb5c7Ece4b7723/876fa1ab92011809.jpg!q70.dpg.webp"></van-swipe-item>
        <van-swipe-item><img src="//img10.360buyimg.com/cms/jfs/t1/99353/1/5477/503183/5dedb5c7Ece4b7723/876fa1ab92011809.jpg!q70.dpg.webp"></van-swipe-item>
        <van-swipe-item><img src="//img10.360buyimg.com/cms/jfs/t1/99353/1/5477/503183/5dedb5c7Ece4b7723/876fa1ab92011809.jpg!q70.dpg.webp"></van-swipe-item>
        </van-swipe>
        <div class="notice">
            
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
            active:0
        }
    },
    components: {
        
    }
}
</script>
<style lang="less"scoped>
.notice{
    width: 92vw;
    height: 50vw;
    background: #eee;
    margin-bottom: 30vw;
    margin-left: 4vw;
    margin-top: 4vw;
    border-radius: 10px;
    box-shadow: 0 0 0 0 0;
    box-shadow: 3px 2px 8px -3px;

}
</style>