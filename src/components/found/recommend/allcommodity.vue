<template>
    <div>
        <ul>
            <li v-for="item in ary">
                <img :src="item.pic">
                <div>
                    <p>{{item.til}}</p>
                    <span>{{item.count}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
// @ is an alias to /src


export default {
    name: 'XXX',
    data() {
        return {
            ary:[
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'},
                {pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'},{pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'},{pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'},{pic:'//img10.360buyimg.com/n7/s350x350_jfs/t1/71754/4/13187/293719/5da5a548Edd67be22/4df6d1bffaa6a86b.jpg!q70.dpg.webp',til:'荣耀路由Pro2 凌霄四核CPU 5G双频双千兆智能高速路由器 四信号大功率放大器 云存储 无线家用穿墙 IPv6',count:'￥299.00'}
                ]
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
ul{
    width: 94vw;
    margin: 0 3vw 20vw 3vw;
    
    li{
            width: 100%;
            height: 34vw;
            border-bottom: 1px solid #d4c3c3;
            margin:3vw 0;
            img{
                float: left;
                width: 30vw;
                height: 30vw;
                margin-right: 4vw;
            }
            p{
                width: 58vw;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                float: left;
                font-weight: 800;
                margin-bottom: 3vw;
            }
            span{
                color: red;
                font-weight: 800;
            }
    }
}
</style>