<template>
  <div class="block">
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="进店时间"
      end-placeholder="离店时间" 
      @blur="put">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: Array
      };
    },
    methods:
    {
      put(){
        console.log(1);
        let newArr= [];
       this.value6.forEach((item,index)=>{
              item = item.toLocaleDateString()
              newArr.push(item);
           
        })
        console.log(newArr);
    
        this.$emit('date-is-seletct',newArr);
      }
    }
  };
</script>
<style lang="scss" scoped>
.block
{
  margin:0 auto;
}
</style>
