<template>
  <div class="mylist">
    <div class="title">我的订单</div>
    <div class="none" v-show="isNone">
      暂时还没有订单哦~~~
    </div>
    <div class="list" v-show="!isNone">
      <ul>
        <li v-for="(item,index) in this.bookedHotelList " :key="index">
          <span class="date">{{item.submitDate}}</span>
          <div class="content">
            <div class="union">
            <div class="left">
              <span>{{item.hotel.title}}</span>
              <span>{{item.hotel.address}}</span>
              <span style="display:block">进店时间:{{item.enterDate}}</span>
              <span  style="display:block">离店时间:{{item.leaveDate}}</span>
            </div>
            <div class="right">
              <span>￥{{item.hotel.price}}</span>
              <span>已成交</span>
            </div>
            </div>
            <div class="bottom-btn">
              <span @click="deleteThis(index)">删除</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "mylist",
  props: {
    bookedHotelList: Array
  },
  data() {
    return {
      isNone: true
    };
  },

  created() {
    if (this.$route.query.bookedHotel) {
      let newOj = 
      {
        hotel:this.$route.query.bookedHotel,
        enterDate:this.$route.query.enterDate,
        leaveDate:this.$route.query.leaveDate,
        submitDate:this.$route.query.submitDate
      }
      this.$emit("is-booked-hotel", newOj);
      console.log(newOj);
    }
    if(this.bookedHotelList.length >0)
    {
      console.log(this.bookedHotelList);
      this.isNone = false;
    }
    

  },
 
  methods:
  {
    
    deleteThis(index)
    {
        var i = index;
        this.$emit('this-is-deleted',i)
    }
  },
  watch: {
    bookedHotelList(newObject,oldObject) {
   
      console.log(newObject);
    }
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.mylist {
  background-color: #f2f2f2;
  box-sizing: border-box;
  min-height: 620px;
  padding: 60px 10px 60px 10px;
  .title {
    top: 0;
    left: 0;
    position: fixed;
    text-align: center;
    width: 100%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    background-color: white;
  }
  .none
  {
    text-align:center;
  }
  .list {
    li {
      position: relative;
      margin-top: 50px;
      width: 100%;
      height: 180px;
      background-color: white;
      .date {
        position: absolute;
        top: -20px;
      }
      .union {
        height: 140px;
        width: 100%;
        .left {
          width: 60%;
          float: left;

        }
        .right {
          width: 40%;
          float: left;
        }
      }

      .bottom-btn {
        float: left;
      }
    }
  }
}
</style>
