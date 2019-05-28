 <template>
  <div class="search">
    <span class="iconfont icon-saoyisao scan"></span>
    <div class="search-content">
      <span class="iconfont icon-sousuo sousuo"></span>
      <input placeholder="带你畅游全世界">
    </div>
    <span class="iconfont icon-wode wode"></span>
  </div>
</template>
<script>
export default {
  name: "searchtHead"
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
      .search {
    display: flex;
    width: 100%;
    height: 40px;
    box-sizing: border-box;

    padding: 5px 10px 5px 10px;
    .scan
    {
      line-height:28px;
      flex:0 0 50px ;
      display: inline-block;
    }
    .wode
    {
      text-align: right;
      flex: 0 0 50px;
      line-height:28px;
    }
    .search-content {
      flex:1;
      display: inline-block;
      padding:0px 5px 0px 5px ;
      height: 26px;
      border-radius:10px;
      border: 1px solid black;
      overflow: hidden;
      background-color: white;
      
      .sousuo
      {
       margin-right:10px;
      }    
      input {
        padding:0;
        vertical-align: top;
        display:inline-block;
        height: 25px;
        outline: none;
        border: none;
      }
    }
  }
</style>

