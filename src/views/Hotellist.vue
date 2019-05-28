<template>
  <div>
    
    <hotellistHead></hotellistHead>
    <hotellistBtn :hotelList="hotelList"></hotellistBtn>
    <div class="layer"></div>
    <div class="hotellist_content">
      <ul>
        <li v-for="(item,index) in this.newArr" :key="index">
          <router-link :to="{name:'hotelinfo',params:{item}}" append>
            <!-- <img :src="item"> -->
            <div class="image">
              <img
                v-for="(item,index) in item.imageUrls"
                :key="index"
                :src="item"

                alt
                v-if="index === 0"
              >
            </div>
            <div class="content">
              <span class="title">{{item.title}}</span>
              <span class="star">{{item.star}}星</span>
              <span
                class="goodTags"
                v-for="(item2,index) in item.goodTagDist"
                :key="item2.key"
                v-if="index<=1 && item.goodTagDist!=null"
              >{{item2.key}}</span>
              <span class="commentCount">{{item.commentCount}}条评论</span>
              <span class="address">{{item.address}}</span>
              <span
                class="services"
                v-for="(item3,index) in item.services"
                :key="index"
                v-if="index<=2 && item.services != undefined"
              >{{item3.name}}</span>
              <span class="price">￥{{item.price}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import hotellistHead from "../components/hotellistHead.vue";
import hotellistBtn from "../components/hotellistBtn.vue";
export default {
  name: "hotellist",
  props: {
    hotelList:[],
    hotelList:{}
  },
  data(){
    return{
      newArr:[]
    }
  },
  components: {
    hotellistHead,
    hotellistBtn
  },
  created()
  {
      let arr = this.hotelList;
      arr.map((item,index,arr)=>{
        if(item.goodTagDist == undefined)
        {
          item.goodTagDist=[{key:null}];
        }
        if(item.liked == undefined)
        {
          item.liked = false;
        }
        
       if(item.imageUrls == null ||item.imageUrls ==undefined)
    {
       item.imageUrls = [];
      for(let i =0;i<=8;i++)
      {
       item.imageUrls.push('/img/image/1.jpg');
      }
    }
      })
      this.newArr =arr;
      console.log(this.newArr);
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.layer {
  width: 100%;
  height: 150px;
}
.hotellist_content {
  ul {
    li {
      margin-top: 5px;

      a {
        height: 150px;
        display: flex;

        .content {
          width: 100%;
          position: relative;
          flex: 0 0 1;
          padding: 10px 5px 10px 5px;
          box-sizing: border-box;
          vertical-align: center;
          z-index:-1;

          .title {
            margin-bottom: 10px;
            display: block;
            font-weight: bold;
          }
          .star {
            font-size: 19px;
            display: inline-block;
            color: #507aea;
          }
          .goodTags {
            border: 1px solid #507aea;
            display: inline-block;
            margin-left: 6px;
            font-size: 12px;
            color: #507aea;
          }
          .commentCount {
            display: inline-block;
            font-size: 14px;
            margin-left: 5px;
          }
          .address {
            font-size: 13px;
            display: block;
            margin-top: 10px;
          }
          .services {
            display: inline-block;
            font-size: 10px;
            color: red;
            margin-right: 5px;
          }
          .price {
            font-size: 16px;
            font-weight: 100px;
            position: absolute;
            display: block;
            float: right;
            clear: both;
            right: 10px;
            bottom: 10px;
          }
        }
        .image {
          flex: 0 0 120px;
          text-align: center;
          overflow: hidden;
          width: 120px;
          height: 100%;
        }
      }
    }
  }
}
</style>