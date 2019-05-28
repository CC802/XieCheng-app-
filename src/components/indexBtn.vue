<template>
  <div>
    <div class="introduce">
      <div class="top">
        <span>玩转城市</span>
        <div class="city">请选择城市</div>
      </div>
      <div class="btn-union">
        <div class="btn">
          <span class="icon"></span>
          <span class="text">景点·玩乐</span>
        </div>
        <div class="btn">
          <span class="icon"></span>
          <span class="text">一日游</span>
        </div>
        <div class="btn">
          <span class="icon"></span>
          <span class="text">美食林</span>
        </div>
        <div class="btn">
          <span class="icon"></span>
          <span class="text">问答</span>
        </div>
        <div class="btn">
          <span class="icon"></span>
          <span class="text">当地攻略</span>
        </div>
      </div>
    </div>
    <div class="options">
      <div class="hotel choose">
        <router-link to='/hotellist'>
          <div class="first-btn">
            <span>酒店</span>
            <span>icon</span>
          </div>
        </router-link>

        <div class="center-btn">
          <div class="btn">海外酒店</div>
          <div class="btn">特价酒店</div>
        </div>
        <div class="last-btn">
          <div class="btn">优选酒店</div>
          <div class="btn">民宿·客栈</div>
        </div>
      </div>
      <div class="plane choose">
        <div class="first-btn">机票</div>
        <div class="center-btn">
          <div class="btn">火车票</div>
          <div class="btn">特价机票</div>
        </div>
        <div class="last-btn">
          <div class="btn">汽车票·船票</div>
          <div class="btn">专车·租车</div>
        </div>
      </div>
      <div class="travel choose">
        <div class="first-btn">旅游</div>
        <div class="center-btn">
          <div class="btn">门票</div>
          <div class="btn">目的地攻略</div>
        </div>
        <div class="last-btn">
          <div class="btn">游轮旅行</div>
          <div class="btn">定制旅行</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "indexBtn"
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.introduce {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-top: 4px;
  box-shadow: -0.1em 0.1em 0.2em;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  border:1px solid #747474;
  box-sizing: border-box;
  .top {
    display: flex;
    height: 20px;
    span {
      box-sizing: border-box;
      padding-left: 10px;
      flex: 0 0 70%;
    }
    .city {
      border-radius: 10px;
      font-size: 10px;
      line-height: 20px;
      text-align: center;
      background-color: aqua;
      flex: 0 0 30%;
      width: 30%;
      display: inline-block;
    }
  }
  .btn-union {
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    .btn {
      flex: 1;
      text-align: center;
      .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: white;
      }
      .text {
        display: block;
        margin: 0 auto;
        font-size: 12px;
      }
    }
  }
}
.options {
  font-size: 15px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  box-sizing: border-box;

  border-radius: 15px;
  border: 2px solid white;
  overflow: hidden;
  .choose {
    overflow: hidden;
    height: 100px;
    flex: 1;
    border-bottom: 2px solid white;
    .first-btn {
      display: block;
      width: 33%;
      float: left;
      clear: both;
      height: 100px;
      box-sizing: border-box;
      border-right: 1px solid white;
      line-height: 100px;
      text-align: center;
    }
    .center-btn {
      border-right: 1px solid white;
      display: inline-block;
      width: 33%;
      height: 100px;
      .btn {
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        height: 50px;
        border-bottom: 1px solid white;
      }
    }
    .last-btn {
      display: inline-block;
      width: 33%;
      height: 100px;
      .btn {
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        height: 50px;
        border-bottom: 1px solid white;
      }
    }
  }
  .hotel {
    background-color: #ff8047;
  }
  .plane {
    background-color: #4ba1ec;
  }
  .travel {
    background-color: #45c595;
  }
}
</style>