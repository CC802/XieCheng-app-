<template>
  <div id="app">
    <router-view
      :hotelList="hotelList"
      :collectHotelList="collectHotelList"
      @is-booked-hotel="isBookedHotel"
      @this-is-deleted="thisIsDeleted"
      @hotel-is-collect="hotelIsCollect"
      @name-is-push="nameIsPush"
      :bookedHotelList="bookedHotelList"
      :filterName="filterName"
    ></router-view>
    <transition name="layer_show">
        <div class="start_layer" v-if="isShow">

        </div>
    </transition>
    <transition name="show">
     
      <div class="login" v-if="!isLogin">
        <div class="btn" @click="login">一键登录</div>
      </div>
    </transition>
    <div class="app_bottom_layer"></div>

    <div class="app_bottom">
      <div class="bottom_index">
        <router-link to="/" exact>
          <span class="iconfont icon-shouye"></span>
          <span class="text">首页</span>
        </router-link>
      </div>

      <div class="bottom_mylist">
        <router-link to="/mylist">
          <span class="iconfont icon-daifukuan"></span>
          <span class="text">我的订单</span>
        </router-link>
      </div>

      <div class="bottom_mine">
        <router-link to="/mine">
          <span class="iconfont icon-wode"></span>
          <span class="text">我的主页</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      hotelList: [],
      bookedHotelList: [],
      collectHotelList: [],
      yourComment:[],
      filterName:'',
      isLogin: false,
      isShow: true
    };
  },
  created() {
    this.axios.get("/api/data").then(response => {
      let res = response.data.hoteldt;
      console.log(res);
      this.hotelList = res;
    });
    setTimeout(() => {
      this.isShow = false;
    }, 2000);
  },
  methods: {
    isBookedHotel(newOj) {
      if(newOj.length >0)
      {
          this.bookedHotelList = [];
      }
      else
      {
            this.bookedHotelList.push(newOj);
      console.log(this.bookedHotelList);
      }
    },
      thisIsDeleted(i)
     {
       console.log(i);
       var arr = this.bookedHotelList;
       console.log(arr);
        arr.splice(i,1);
        console.log(arr);
        this.bookedHotelList = arr;
     },
     hotelIsCollect(arr)
     {
        if(arr.length >0)
      {
           this.collectHotelList = [];
      }
      else
      {
           this.collectHotelList.push(arr);
        console.log(this.collectHotelList)
      }
        
     }
    ,
    nameIsPush(data)
    {
      this.filterName = data;
      console.log(this.filterName);
    }
    ,
    login() {
      this.$router.replace("/");
      this.isLogin = true;
    }
  }
}
</script>

<style lang="scss" rel='stylesheet/scss'>
@import "../public/sass/_mixin.scss";
.app_bottom_layer {
  width: 100%;
  height: 40px;
}
.layer_show-leave-active
{
  transition: 1s all linear;
}
.layer_show-leave
{
   opacity: 1;
}
.layer_show-leave-to
{
    opacity: 0;
}
.show-leave-active {
  transition: 1s all linear;
}
.show-leave {
  opacity: 1;
}
.show-leave-to {
  opacity: 0;
}
.start_layer {
  position: absolute;
  background-color:#2A77E1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 15;
  background-image:url("/img/image/timg.jpg");
  background-position:center center;
  background-repeat:no-repeat ;
}
.login {
  background-color: white;
  position: absolute;
  margin:0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  .btn {
    margin:  auto;
    width: 200px;
    height: 40px;
    background-color: #4ba1ec;
    text-align: center;
    line-height: 40px;
  }
}
.app_bottom {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #222222;
  padding-top: 4px;
  box-sizing: border-box;
  font-size: 20px;
  .text {
    font-size: 10px;
    display: block;
    margin: 0 auto;
  }
  .bottom_index {
    text-align: center;
    height: 100%;
    flex: 1;

    & > .active {
      color: white;
    }
  }
  .bottom_mylist {
    text-align: center;
    height: 100%;
    flex: 1;
    & > .active {
      color: white;
    }
  }
  .bottom_mine {
    text-align: center;
    height: 100%;
    flex: 1;
    & > .active {
      color: white;
    }
  }
}
</style>
