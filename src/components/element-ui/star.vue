=<template>
  <div class="block">
    <el-rate
  v-model="value3"
  show-text
  @blur="put">
</el-rate>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value3: null
      }
    },
    methods:
    {
      put()
      {
        let data = this.value3;
        this.$emit("put-it-out",data);
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
