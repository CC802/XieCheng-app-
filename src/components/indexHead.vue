<template>
  <div class="header">
    <div class="movepic">
      <ul>
        <transition-group name="slide">
          <li v-for="(item,index) in imgarr" :key="item" v-show="index === currentIndex">
            <img :src="item">
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "indexHead",
  props: {
    imgarr: Array
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      console.log(1);
      // if(this.timer)
      // {
      //   this.currentIndex = 0;
      //   cleanInterval(this.timer);
      //   timer = null;
      // }
      // this.timer = setInterval(() => {
      //   this.currentIndex++;
      //   if (this.currentIndex >= this.imgarr.length) {
      //     this.currentIndex = 0;
      //   }
      // }, 3000);

      // Code that will run only after the
      // entire view has been rendered
    });
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.header {
  width: 100%;

  ul {
    position: relative;
    width: 100%;
    height: 75px;
    overflow: hidden;

    li {
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 75px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.slide-enter {
  transform: translateX(375px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s linear;
}
.slide-leave-to {
  transform: translateX(-375px);
}

.slide-enter-to {
  transform: translateX(0);
}
</style>