<template>
  <div class="btn-banner">
    <div class="btn" @click="changeSortListShow">
      <span>智能排序</span>
      <span class="iconfont icon-down"></span>
    </div>
    <div class="btn">
      <span>位置距离</span>
      <span class="iconfont icon-down"></span>
    </div>
    <!-- <div class="btn" @click="sortByStarOrPrice">
      <span :class="{active:this.isPrice}">价格</span>/
      <span :class="{active:!this.isPrice}">星级</span>
      <span class="iconfont icon-down"></span>
    </div>-->
    <div class="btn">
      <span>筛选</span>
      <span class="iconfont icon-down"></span>
    </div>
    <transition name="sortListShow">
      <div class="sortList" v-show="sortListShow">
        <span @click="showGoodTag">好评最多</span>
        <span @click="showCommentMax">评论最多</span>
        <span @click="showPriceHigh">价格最高</span>
        <span @click="showPriceLow">价格最低</span>
        <span @click="showStarHigh">星级最低</span>
        <span @click="showStarLow">星级最高</span>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "hotellistBtn",
  props: {
    hotelList: [Object, Array]
  },
  data() {
    return {
      sortArr: [],
      curentIndex: 0,
      isPrice: false,
      sortListShow: false
    };
  },
  methods: {
    showGoodTag() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["ratingCount"];
        let y = b["ratingCount"];
        return x > y ? -1 : 1;
      });
    },
    showCommentMax() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["commentCount"];
        let y = b["commentCount"];
        return x > y ? -1 : 1;
      });
    },
    showPriceHigh() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["price"];
        let y = b["price"];
        return x > y ? -1 : 1;
      });
    },
    showPriceLow() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["price"];
        let y = b["price"];
        return x < y ? -1 : 1;
      });
    },
    showStarHigh() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["star"];
        let y = b["star"];
        return x < y ? -1 : 1;
      });
    },
    showStarLow() {
      this.sortListShow = false;
      this.hotelList.sort((a, b) => {
        let x = a["star"];
        let y = b["star"];
        return x > y ? -1 : 1;
      });
    },
    changeSortListShow() {
  
      this.sortListShow = !this.sortListShow;
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.btn-banner {
  position: fixed;
  top: 36px;
  background-color: #fff;
  padding: 5px 0 5px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  z-index: 1;
  display: flex;

  .sortList {
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;

    z-index: -99;
    background-color: black;
    padding: 5px;
    span {
      font-size: 12px;
      color: white;
      display: block;
      margin-top: 5px;
      margin-left: 10px;
    }
  }
  .sortListShow-enter-active,
  .sortListShow-leave-active {
    transition: all 0.5s linear;
  }
  .sortListShow-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .sortListShow-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .sortListShow-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .sortListShow-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  .btn {
    font-size: 13px;
    text-align: center;
    flex: 1;
    cursor: pointer;
    .active {
      font-weight: bold;
    }
  }
  .icon-down {
    font-size: 12px;
  }
}
</style>
