<template>
    <div>
       <div class="YQX">
           <van-icon name="arrow-left" class="Tiao lt " size='25px' color='#ffff'  @click="bc"></van-icon>
           <div class="first lt">
               <van-icon name="warning-o" class="lt" size="25px"  color='#ffff'></van-icon>
               <p>已取消</p>
           </div>
           </div> 
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    methods: {
        //问大哥跳上一个
        bc(){
            this.$router.back()
        }
    },
    components: {
        
    }
}
</script>
<style lang="less"scoped>
.YQX{
    background: rgb(243, 68, 68);
    width: 100%;
    height: 38vw;
    position: relative;
}
.first{
    height: 21vw;
    width: 50vw;
    margin: 5vw;
    position: absolute;
    left: 30%;
    bottom: 0;
    
}
.Tiao{
    margin: 5vw 0 0 1vw;
}
p{
    font-size: 21px;
    font-weight: 600;
    color: #ffffff;
    margin-left: 9vw;
}
</style>