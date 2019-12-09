<template>
  <div>
    <div>
        
    </div>
    <div>
      <flagshipStore></flagshipStore>
    </div>
  </div>
</template>
<script>
import flagshipStore from "@/components/home/header/searchfen/flagshipStore.vue";

// @ is an alias to /src
export default {
  name: "shops",
  data() {
    return {};
  },
  components: {
    flagshipStore
  }
};
</script>
<style lang="less" scoped>
div{
    width: 100%;
}
</style>