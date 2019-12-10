<template>
    <div>
        <header>
            <div class="img lt">
                <img src="//img11.360buyimg.com/cms/jfs/t1/6997/27/5197/8479/5bdbedb6Eb8e2ff7f/ebc913b8c18a58e0.jpg">
            </div>
            <div class="til lt">
                <router-link to="/particulars" tag="p">
                     <p>荣耀京东自营旗舰店</p>
                </router-link>
                <span>京东自营</span>
            </div>
        </header>
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
    components: {
        
    }
}
</script>
<style lang="less" scoped>
header{
    width: 100%;
    height: 50vw;
    background: url(https://img30.360buyimg.com/cms/jfs/t16936/264/1681570577/52086/e47956d7/5ad3fff1Ncf4ec060.png) no-repeat;
    background-size: cover;
    .img{
        width: 15vw;
        height: 15vw;
        margin: 3vw;
        img{
            width:100%;
            height:100%;
            border-radius: 8px;
        }
    }
    .til{
            width: 40vw;
            height: 15vw;
            margin: 3vw 0;
            color: #fff;
            >p{
                font-weight: 600;
            }
            >span{
                background: red;
                font-size: 3vw;
                font-weight: 700;
                padding: 1vw;
                border-radius: 4px;
                margin-top: 2vw;
                display: block;
                width: 12vw;
            }
    }
}
</style>