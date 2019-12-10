<template>
    <div class="addr">
        <div class="list">
            <div>
                北京市昌平区六环以内
            </div>
            <div class="detaile">
                回龙观东大街3号楼珠峰培训
            </div>
            <div>
                <span>姓名</span>
                <span>16666666666</span>
            </div>
        </div>
        <div class="edit">
            <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'orderAddress',
    data() {
        return {
          showList:true,
        }
    },
    computed:{
        
    },
    craeted(){
    },
    components: {
    },
    methods:{
        
    },
    watch: {
        
    },

}
</script>
<style lang="less" scoped>
    .addr{
        display: flex;
        justify-content: space-between;
        background: #fff !important;
        padding: 5vw;
        font-size: 14px;
        padding-bottom: 1vw;
        .list{
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            .detaile{
                font-size: 16px;
                font-weight: 600;
            }
        }
        .edit{
            height: 20vw;
            line-height: 20vw;
        }
    }
</style>