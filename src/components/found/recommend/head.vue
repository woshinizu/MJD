<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="@/assets/1.jpg"></van-swipe-item>
        <van-swipe-item><img src="@/assets/2.jpg"></van-swipe-item>
        <van-swipe-item><img src="@/assets/3.jpg"></van-swipe-item>
        <van-swipe-item><img src="@/assets/4.jpg"></van-swipe-item>
        </van-swipe>
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
img{
    width:100%;
    height:120vw;
}
</style>