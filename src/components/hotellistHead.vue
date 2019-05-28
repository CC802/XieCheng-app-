<template>
  <div class="header">
    
    <span class="iconfont icon-fanhui fanhui" @click="routerGo()"></span>
    <div class="search-content">
      <span class="iconfont icon-sousuo sousuo" @click="search"></span>
      <input v-model="value" placeholder="关键字/位置/品牌/酒店">{{value}}
    </div>
    <span class="iconfont icon-location loc"></span>
    <span class="iconfont icon-message msg"></span>
  </div>
</template>
<script>
export default {
  name: "hotellistHead",
  data()
  {
      return{
        value:''
      }
  },
  methods:
  {
     routerGo() {
                // go(n) 该方法接收一个整数,如果n为正代表从当前浏览记录前进n个浏览记录地址
                // 如果n为负代表从当前浏览记录返回n个浏览记录地址
                // 下面的例子就是返回上一个浏览器记录
                this.$router.go(-1)
            },
      search()
      {
        console.log(1);

      }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.header {
  position: fixed;
  display: flex;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 5px 10px 5px 10px;
  z-index: 999;
  .fanhui{
        font-size:24px !important;
    line-height: 26px;
    flex: 1;
    display: inline-block;
  }
  .loc {
    text-align: right;
    flex: 1;
    line-height: 28px;
  }
  .msg
  {
      flex:1;
      text-align: right;
  }
  .search-content {
    box-sizing:border-box;
    flex: 0 0 240px;
    display: inline-block;
    padding: 0px 5px 0px 50px;
    height: 26px;
    border-radius: 10px;
    border: 1px solid black;
    overflow: hidden;
    background-color: white;

    .sousuo {
        font-size:16px !important;
      margin-right: 10px;
      line-height: 24px;
    }
    input {
      width: 120px;
      padding: 0;
      vertical-align: top;
      display: inline-block;
      height: 25px;
      outline: none;
      border: none;
      overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
    }
  }
}
</style>

