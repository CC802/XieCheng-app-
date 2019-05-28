<template>
  <div class="mine">
    <div class="header">
        <div class="headPic">
            
        </div>
    </div>
     <router-view></router-view>
    <div class="btn">
        <div class="a" :class="{active:this.mylikeShow}" @click="mylikeIsShow">我的收藏</div>
        <div class="a" :class="{active:!this.mylikeShow}" @click="mycommentIsShow">我的评论</div>
    </div>
    <div class="box" v-show="mylikeShow">
      <ul>
        <li v-for="(item,index) in this.collectHotelList " :key="index">
          <span>{{item.title}}</span>
          <div ></div>
        </li>
      </ul>
    </div>
    <div class="box" v-show="!mylikeShow"> 
      <ul>
        <li v-for="(item,index) in this.hotelComment" :key="index">
          <span>{{item.hotelinfoName}}</span>
          <span>{{item.comment}}</span>
        </li>
      </ul>
       </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  props:
  {
    collectHotelList:Array,
   
    filterName:''
  }
  ,
  data()
  {
    return{
      mylikeShow:true,
      hotelComment:[]
    }
  },
  components: {
  
  },
  created()
  {
    if(this.$route.query.collectHotel != undefined)
    {
       let arr = this.$route.query.collectHotel
       console.log(arr);
       this.$emit("hotel-is-collect", arr);
    }
    if(this.$route.query.commentText)
    {
        let obj = {
          comment:this.$route.query.commentText,
          hotelinfoName:this.$route.query.hotelinfoName

        }
        
        console.log( this.$route.query);
        this.hotelComment.push(obj);
  
        console.log(  this.hotelComment);
    }
     
  },
  update()
  {

  },
  methods:
  {
    mylikeIsShow()
    {
        this.mylikeShow = true;
    },
    mycommentIsShow()
    {
      this.mylikeShow = false;
    }
  },
  watch:
  {
    filterName(newstr)
    {
      console.log(newstr);
    }
  }

}
</script>
<style lang="scss" rel='stylesheet/scss'>
.mine
{
  .header
  {
    width:100%;
    height: 40px;
    background-color: #0C2531;
    .headPic
    {
        width:40px;
        height: 40px;
        border-radius:50%;
        margin-left:10px;

    }
  }
  .btn{
    widows: 100%;
    height: 50px;
    display: flex;
    .a
    {
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      flex: 1;
    }
    .active
    {
      border-bottom:2px solid  
    }
  }
  .box
  {
    li
    {
      width:100%;
      height:50px;
      background-color: #AED3E9;
    }
  }
}
</style>
