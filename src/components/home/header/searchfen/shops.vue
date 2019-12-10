<template>
  <div>
    <div v-if="left">
        <shopshome></shopshome>
    </div>
    <div v-else>
      <flagshipStore></flagshipStore>
    </div>
  </div>
</template>
<script>
import flagshipStore from "@/components/home/header/searchfen/flagshipStore.vue";
import shopshome from "@/components/home/header/searchfen/shops/shopshome.vue";

// @ is an alias to /src
export default {
  name: "shops",
  data() {
    return {
        
    };
  },
  components: {
    flagshipStore,shopshome
  },
  computed: {
      left(){
        return this.$route.query.left == 'true'
      }
  },
};
</script>
<style lang="less" scoped>
div{
    width: 100%;
}
</style>