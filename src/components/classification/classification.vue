<template>
    <div>
     <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  shape="round"
  @search="onSearch"
>
</van-search>
    </div>
</template>
<script>
 
// @ is an alias to /src
export default {
    name: 'classification',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>