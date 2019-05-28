<template>
  <div class="hotelinfoBottom">
    <div class="ask" @click="ask">
      <span class="iconfont icon--jigou icon"></span>
      <span class="text">联系店家</span>
    </div>
    <div class="collect" @click="collect">
      <span ref="heart" class="iconfont icon-aixin icon" :class="{red:this.isCollect}"></span>

      <span class="text">收藏</span>
    </div>
    <div class="book" @click="book">
      <span class="text">立刻预定</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "hotelinfobottomBtn",
  props: {
    hotelinfo: {},
    isCollect: Boolean
  },
  data() {
    return {
      flag: Boolean
    };
  },
  methods: {
    book() {
      let bookedHotel = {};
      bookedHotel = this.hotelinfo;
      console.log(bookedHotel);
      console.log("已经预定");
      this.$emit("sure-is-show");
      // this.$router.push({name: 'mylist',query:{bookedHotel}})
    },
    collect() {
      if (this.hotelinfo.liked == true) {
        console.log("喜欢");
        this.hotelinfo.liked = false;
        let data = this.hotelinfo.liked;
        this.$emit("hotel-is-collect", data);
        console.log(this.isCollect);
      } else if (this.hotelinfo.liked == false) {
        let data = this.hotelinfo.liked;
        console.log("不喜欢");
        this.hotelinfo.liked = true;
        this.$emit("hotel-is-collect", data);
        console.log(this.isCollect);
        let collectHotel = {};
        collectHotel = this.hotelinfo;
        console.log(this.hotelinfo.liked);

        this.flag = this.hotelinfo.liked;
        this.$router.push({
          name: "mine",
          query: {
            collectHotel: collectHotel
          }
        });
      }
    },

    ask() {
      this.$emit("num-is-show");
    }
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.hotelinfoBottom {
  display: flex;
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 0;
  left: 0;
  background-color: grey;
  .ask {
    text-align: center;
    flex: 20%;
    .icon {
      display: block;
      font-size: 24px;
    }
    .text {
      font-size: 13px;
    }
  }
  .collect {
    flex: 20%;
    text-align: center;
    .icon {
      display: block;
      font-size: 24px;
    }
    .text {
      font-size: 13px;
    }
  }
  .book {
    text-align: center;
    line-height: 45px;
    flex: 60%;
    background-color: #fe6915;
    .text {
      color: white;
      font-size: 15px;
    }
  }
}
.red {
  color: red;
}
</style>