<template>
  <div class="home">
     <searchHead></searchHead>
     <indexHead :imgarr = "imgarr"></indexHead>
     <indexBtn></indexBtn>
  </div>
</template>

<script>
import indexHead from '../components/indexHead.vue';
import indexBtn from '../components/indexBtn.vue';
import searchHead from '../components/searchHead.vue';
export default {
  name: 'home',
  data()
  {
      return{
         imgarr:['/img/image/1.jpg',
        'img/image/2.jpg',
        'img/image/3.jpg',
        'img/image/4.jpg']
      }
  },
  components: {
      indexHead,
      indexBtn,
      searchHead
  }
}
</script>
<style lang="scss" rel='stylesheet/scss'>
      .choose-btn
      {
        width: 100%;
        height: 40px;
        display: flex;
        .hotel
        {
           flex:0 0 25%;
           background-color:red;
        }
      }
</style>
