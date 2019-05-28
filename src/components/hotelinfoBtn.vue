<template>
  <div class="back" @click="routerGo()">
        <span class="iconfont icon-fanhui icon"></span>
    </div>
</template>
<script>
export default {
  name: "hotelinfoBtn",
  methods:
  {
     routerGo() {
                // go(n) 该方法接收一个整数,如果n为正代表从当前浏览记录前进n个浏览记录地址
                // 如果n为负代表从当前浏览记录返回n个浏览记录地址
                // 下面的例子就是返回上一个浏览器记录
                this.$router.go(-1)
            }
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.back
   {
     position: absolute;
     width: 26px;
     height: 26px;
     border-radius:50%;
     z-index: 10;
     background-color: rgba(0,0,0,0.5);
     left:10px;
     top:10px;
     .icon
     {
       color:white;
       font-size: 25px;
     }
   }
   </style>