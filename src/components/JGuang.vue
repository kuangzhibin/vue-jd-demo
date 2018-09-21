<template>
  <div class="JGuang">
    <!-- 1 -->
    <div class="title">
      <img src="../assets/img/title1.png" alt="">
    </div>
    <div class="floorBox">
      <div class="floor floor1 bdr-b">
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span >一桌好菜</span>
            </strong>
            <p>做一桌好菜给爱的人</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod1.jpg" alt="">
            <img src="../assets/img/prod2.jpg" alt="">
          </div>
        </a>
        <a class="item" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span>老字号</span>
            </strong>
            <p>百年经典古法传承</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod3.jpg" alt="">
            <img src="../assets/img/prod4.jpg" alt="">
          </div>
        </a>
      </div>
      <div class="floor floor2">
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span >玩3C</span>
            </strong>
            <p>荣耀爆品 全场最高立省600</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod5.jpg" alt="">
            <img src="../assets/img/prod6.jpg" alt="">
          </div>
        </a>
        <a class="item" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span>京东家电</span>
            </strong>
            <p>家电狂欢 京彩有你</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod13.jpg" alt="">
            <img src="../assets/img/prod14.jpg" alt="">
          </div>
        </a>
      </div>
    </div>
    <!-- 2 -->
    <div class="title">
      <img src="../assets/img/title2.png" alt="">
    </div>
    <div class="floorBox">
      <div class="floor floor3 bdr-b">
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span >进口馆</span>
            </strong>
            <p>满99减50</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod7.jpg" alt="">
          </div>
        </a>
        <a class="item" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span>美妆馆</span>
            </strong>
            <p>领免费试用</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod8.jpg" alt="">
          </div>
        </a>
      </div>
      <div class="floor floor4">
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span >手机馆</span>
            </strong>
            <p>享白条免息</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod9.jpg" alt="">
          </div>
        </a>
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span>生鲜馆</span>
            </strong>
            <p>尝鲜秒杀</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod10.jpg" alt="">
          </div>
        </a>
        <a class="item bdr-r" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span >内衣馆</span>
            </strong>
            <p>年中狂欢购</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod11.jpg" alt="">
          </div>
        </a>
        <a class="item" href="javascript:;">
          <div class="txt">
            <strong class="ignore">
              <span>奢品馆</span>
            </strong>
            <p>奢品精选</p>
          </div>
          <div class="pic">
            <img src="../assets/img/prod12.jpg" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'JGuang',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.JGuang{
  .bdr-r{
    border-right: 1px solid #f5f5f5;
  }
  .bdr-b{
    border-bottom: 1px solid #f5f5f5;
  }
  .floor{
    display: flex;
    background-color: #fff;
  }
  .floor1 .item{
    width: 50%;
    padding: 20px;
    .txt{
      text-align: center;
    }
    strong{
      font-weight: normal;
      color: #222;
      font-size: 32px;
      position: relative;
      display: block;
      span{
        display: inline-block;
        margin: 0 8px;
        background-color: #fff;
      }
    }
    p{
      color: #648EFF;
    }
    .pic {
      display: flex;
      padding: 0 14px;
      img{
        width: 130px;
        height: 130px;
        margin: 10px 14px 0;
      }
    }
  }

  .floor2 .item{
    width: 50%;
    padding: 20px;
    strong{
      span{
        font-weight: normal;
        color: #222;
        font-size: 32px;
        margin: 0;
      }
    }
    p{
      color: #FF5959;
    }
    .pic {
      display: flex;
      padding: 0 14px;
      img{
        width: 130px;
        height: 130px;
        margin: 10px 14px 0;
      }
    }
  }
  .floor3 .item{
    width: 50%;
    padding: 20px;
    .txt{
      float: left;
    }
    strong{
      span{
        font-weight: normal;
        color: #222;
        font-size: 32px;
        margin: 0;
      }
    }
    p{
      color: #D663E1;
    }
    .pic {
      img{
        float: right;
        width: 160px;
        height: 160px;
        margin: 16px 10px 0 0;
      }
    }
  }
  .floor4 .item{
    width: 25%;
    padding: 20px;
    strong{
      span{
        font-weight: normal;
        color: #222;
        font-size: 32px;
        margin: 0;
      }
    }
    p{
      color: #D663E1;
    }
    .pic {
      display: flex;
      padding: 0 14px;
      img{
        width: 130px;
        height: 130px;
        margin: 14px 0;
      }
    }
  }
}
</style>
