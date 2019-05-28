<template>
  <div class="hotelinfo">
    <div class="hidden">
      <transition name="mapShow">
        <div class="map" v-show="isMapShow" @click="mapIsShow">
          <a :href="'http://api.map.baidu.com/geocoder?address='+hotelinfo.address+'&output=html'">
            <img
              :src="'http://api.map.baidu.com/staticimage? width=400&height=300&zoom=11&center='+hotelinfo.address"
            >
          </a>
        </div>
      </transition>
      <transition name="numShow">
        <div class="num" v-show="isNumShow" @click="numIsShow" >
          <ul>
            <li>商家联系方式</li>
            <li v-for="(item,index) in this.hotelinfo.telephones" :key="index">{{item}}</li>
          </ul>
        </div>
      </transition>
       <transition name="commentShow">
        <div class="commentLayer" v-show="isCommentShow" >
            <div class="space">
                <span>发表你的评论</span>
                <star @put-it-out="submitComment"></star>
                <input v-model="commentText">
                <div @click="submitComment">提交</div>
            </div>
            <div class="close"  @click="commentIsShow">
                <span class="iconfont icon-guanbi"></span>
            </div>
        </div>
      </transition>
      <hotelinfoBtn></hotelinfoBtn>
      <div class="title">
        <span>{{this.hotelinfo.title}}</span>
      </div>
      <div class="pic" ref="imageWrapper">
        <ul>
          <li
            v-for="(item,index) in this.hotelinfo.imageUrls"
            :key="index"
            v-if="index>1 && index<=8"
          >
            <img :src="item">
          </li>
        </ul>
      </div>
      <div class="description">
        <span>酒店详情:{{this.hotelinfo.description}}</span>
      </div>
      <div class="address">
        <span>地址:{{this.hotelinfo.address}}</span>
        <span class="iconfont icon-location icon" @click="mapIsShow"></span>
      </div>
      <div class="comment">
        <div class="first">
          <span class="star">{{this.hotelinfo.star}}星</span>
          <span class="level">{{level}}</span>
          <span class="level">{{this.hotelinfo.level}}</span>
          <span class="openDate">开店日期:{{this.hotelinfo.openDate}}</span>
        </div>
        <div class="second" v-show="this.hotelinfo.assistServices">
          附带服务:
          <span v-for="(item,index) in this.hotelinfo.assistServices" :key="index">{{item}}</span>
        </div>
        <div class="third" v-show="this.hotelinfo.infrastructures">
          基础设施
          <span
            v-for="(item,index) in this.hotelinfo.infrastructures"
            :key="index"
            v-if="index<=10"
          >{{item}}</span>
        </div>
        <div class="fourth"></div>
        <div class="submitComment" @click="commentIsShow">
          去点评
          <span class="iconfont icon-down"></span>
        </div>
      </div>
      <transition name="sureShow" >
        <div class="sure" v-show="isBtnShow">
          <div class="sure_box" >
            <date class="date" @date-is-seletct='dateIsSelect'></date>
            <div class="btn" @click="submit">提交</div>
            <div class="btn" @click="sureIsShow">取消</div>
          </div>
          <span class="iconfont icon-guanbi icon">
                        
          </span>
        </div>
      </transition>
      <hotelinfobottomBtn
      :isCollect="isCollect"
        :hotelinfo="hotelinfo"
        @sure-is-show="sureIsShow"
        @num-is-show="numIsShow"
        @hotel-is-collect="hotelIsCollect"

      ></hotelinfobottomBtn>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import hotelinfoBtn from "../components/hotelinfoBtn.vue";
import hotelinfobottomBtn from "../components/hotelinfobottomBtn.vue";
import date from "../components/element-ui/date.vue";
import star from "../components/element-ui/star.vue";
export default {
  name: "Hotelinfo",
  data() {
    return {
      commentLevel:'暂无评价',
      commentText:'',
      currentIndex:null,
      leaveDate: "",
      enterDate: "",
      hotelinfo: {},
      hoteladdress: "",
      isBtnShow: false,
      isMapShow: false,
      isNumShow: false,
      isCommentShow: false,
      submitDate:'',
      date:[],
      isCollect:Boolean
    };
  },
  created() {
    this.hotelinfo = this.$route.params.item;
    this.hoteladdress = this.$route.params.item.address;
    console.log(this.hotelinfo);
     if(this.hotelinfo.liked == true)
     {
        this.isCollect = true
     }
     else if(this.hotelinfo.liked == false)
     {
       this.isCollect = false
     }

  },
  methods: {
    routerGo() {
      this.$router.go(-1);
    },
    commentIsShow() {
      this.isCommentShow = !this.isCommentShow;
    },
    sureIsShow() {
      this.isBtnShow = !this.isBtnShow;
    },
    mapIsShow() {
      this.isMapShow = !this.isMapShow;
    },
    numIsShow() {
      console.log("num is show");
      this.isNumShow = !this.isNumShow;
    },
    submitComment(data)
    {
      console.log(data);
       this.$router.push({
        name: "mine",
        query: {
          commentText:this.commentText,
          hotelinfoName:this.hotelinfo.title,
        }
        })
    },
    hotelIsCollect(data)
    {
      this.isCollect = data;
      
      if(this.isCollect == false)
      {
         let pushName = this.hotelinfo.title;
          console.log(pushName);
          this.$emit('name-is-push',pushName)
      }
    },
    dateIsSelect(data)
    {
      this.date = data;
    },
    chooseLevel(el,index)
    {
      this.currentIndex = index;
      console.log(el);
      let userComment = el.target.innerText;
      console.log(userComment);

    },
    submit() {
      console.log(this.date);
      this.submitDate =new Date().toLocaleString();
      console.log(this.submitDate);
      this.$router.push({
        name: "mylist",
        query: {
          bookedHotel: this.hotelinfo,
          leaveDate:this.date[1] ,
          enterDate: this.date[0],
          submitDate:this.submitDate
        }
      });
    }
  },
  computed: {
    level() {
      let str = "";
      if (this.hotelinfo.star == 1) {
        str = "一般";
      } else if (this.hotelinfo.star == 2) {
        str = "较好";
      } else if (this.hotelinfo.star == 3) {
        str = "很好";
      } else if (this.hotelinfo.star == 4) {
        str = "超赞";
      } else if (this.hotelinfo.star == 5) {
        str = "顶尖";
      }
      return str;
    }
  },
  components: {
    hotelinfoBtn,
    hotelinfobottomBtn,
    date,
    star
  },
  watch: {
    leaveDate(newstr) {
      console.log(newstr);
    }
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.commentShow-enter {
  opacity: 0;
}
.commentShow-enter-to {
  opacity: 1;
}
.commentShow-enter-active {
  transition: all 1s linear;
}
.mapShow-enter {
  opacity: 0;
}
.mapShow-enter-to {
  opacity: 1;
}
.mapShow-enter-active {
  transition: all 1s linear;
}
.hotelinfo {
  position: fixed;
  padding: 0px 5px 0px 5px;
  z-index: 10;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: #f2f2f2;
  .hidden {
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    box-sizing: border-box;
    position: absolute;
    overflow-y: scroll;

    .num {
      background-color: rgba(0, 0, 0, 0.5);
      right: 0;
      bottom: 0;
      z-index: 20;
      position: absolute;
      left: 0;
      top: 0;
      ul {
        background-color: white;
        width: 100%;
        margin: 250px 0;
        padding: 10px 10px 15px 10px;
        li {
          font-size: 15px;
          margin-top: 10px;
        }
      }
    }
    .map {
      background-color: rgba(0, 0, 0, 0.5);
      right: 0;
      bottom: 0;
      z-index: 20;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
        height: 300px;
      }
    }
    .commentLayer {
      background-color: rgba(0, 0, 0, 0.5);
      right: 0;
      bottom: 0;
      z-index: 20;
      position: absolute;
      left: 0;
      top: 0;
      .close
      {
        width: 20px;
        height: 20px;
        font-size:20px;
        position: absolute;
        bottom: 60px;
        left:50%;
      }
      .space {
        margin:200px auto;
        width: 100%;
        height: 400px;
        background-color: white;
        text-align:center;
        .level
        {
            span
            {
              display:inline-block;
              width: 50px;
              text-align: center;
              line-height: 20px;
              height:20px;
              border:1px solid #000;
              margin-left:10px;
              border-radius:10px;

            }
            .active
            {
              background-color: aqua;
              color:orange;
            }
        }
      }
    }
    .title {
      position: absolute;
      z-index: 5;
      padding: 10px;
      height: 30px;
      top: 110px;
      left: 0;
      color: white;
    }
    .pic {
      width: 100%;
      height: 150px;
      overflow: hidden;
      overflow-x: scroll;

      ul {
        width: 1050px;
        height: 150px;

        li {
          float: left;
          width: 150px;
          height: 150px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .description,
    .address,
    .comment {
      box-sizing: border-box;
      width: 100%;
      margin-top: 5px;
      padding: 5px 0px 5px 10px;
      font-size: 13px;
      background-color: white;
    }
    .address {
      .icon {
        float: right;
        margin-right: 10px;
      }
    }
    .comment {
      position: relative;
      .first {
        .star {
          font-size: 20px;
          font-weight: bold;
          margin-left: 10px;
        }
        .level {
          display: inline-block;
          font-size: 14px;
          margin-left: 15px;
        }
        .openDate {
          display: inline-block;
          margin-left: 15px;
        }
      }
      .second {
        padding: 5px 40px 5px 5px;
        span {
          display: inline-block;
          border: 1px solid #00c9f9;
          margin-right: 5px;
          margin-top: 2px;
        }
      }
      .third {
        padding: 5px 40px 5px 5px;
        span {
          display: inline-block;
          border: 1px solid red;
          margin-right: 5px;
          margin-top: 2px;
        }
      }
      .submitComment {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
    .sureShow-enter-active,
    .sureShow-leave-active {
      transition: all 0.3s linear;
    }
    .sureShow-enter {
      opacity: 0;
    }
    .sureShow-enter-to {
      opacity: 1;
    }

    .sure {
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
      padding: 150px 20px;
      box-sizing: border-box;
      .sure_box {
        position: relative;
        padding: 70px 10px;
        box-sizing: border-box;
        margin: 0 auto;
        height: 300px;
        border-radius: 10px;
        background-color: white;
        .date {
          margin:0 auto;
        }
        .btn {
          color: white;
          text-align: center;
          margin:20px auto;
          width: 100px;
          height: 40px;
          line-height: 40px;
          background-color: black;
          border-radius: 10px;
        }
      }
    
    }
  }
}
</style>
