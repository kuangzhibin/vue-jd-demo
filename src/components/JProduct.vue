<template>
  <div class="JProduct clearfix">
    <ul>
      <li>
        <a href="javascript:;">
          <img src="../assets/img/Pitem1.jpg" alt="">
          <p class="name">暴风AI电视4 40X 40英寸全高清互联网平板液晶显示网络电视机wifi（黑色）</p>
          <p class="price">
            ￥&nbsp;
            <span class="price-big ignore">1099</span>
            <span class="price-small">.00</span>
          </p>
          <p class="info">
            <span class="praise">好评率100%</span>
            <span class="btn">看相似</span>
          </p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/img/Pitem2.jpg" alt="">
          <p class="name">越南进口红心火龙果 4个装 单果约330~420g 新鲜水果</p>
          <p class="price">
            ￥&nbsp;
            <span class="price-big ignore">32</span>
            <span class="price-small">.90</span>
          </p>
          <p class="info">
            <span class="praise">好评率99%</span>
            <span class="btn">看相似</span>
          </p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/img/Pitem3.jpg" alt="">
          <p class="name">海买 熟冻野生加拿大北极甜虾（MSC认证） 400g/袋 50-60只 海鲜水产</p>
          <p class="price">
            ￥&nbsp;
            <span class="price-big ignore">23</span>
            <span class="price-small">.00</span>
          </p>
          <p class="info">
            <span class="praise">好评率97%</span>
            <span class="btn">看相似</span>
          </p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/img/Pitem4.jpg" alt="">
          <p class="name" >CSS世界 HTML5 JavaScript 网页制作 web前端开发 网页设计 图书籍</p>
          <p class="price">
            ￥&nbsp;
            <span class="price-big ignore">48</span>
            <span class="price-small">.30</span>
          </p>
          <p class="info">
            <span class="praise">好评率100%</span>
            <span class="btn">看相似</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'JProduct',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.JProduct{
  padding: 30px 0 40px;
  background-color: #f0f2f5;
  ul{
    li{
      float: left;
      width: 50%;
      padding-bottom: 8px;
      &:nth-child(even){
        padding-left: 4px;
      }
      &:nth-child(odd){
        padding-right: 4px;
      }
      a{
        display: inline-block;
        background-color: #fff;
        img{
          width: 370px;
        }
        .name{
          overflow: hidden;
          font-size: 24px;
          line-height: 1.4;
          height: 8.96vw;
          text-overflow: ellipsis;
          word-break: break-all;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 2;
          line-clamp: 2;
          margin: 10px 0 6px;
          padding: 0 8px;
        }
        .price{
          color: #f23030;
          height: 46px;
          line-height: 46px;
          overflow: hidden;
        }
        .price-big{
          font-size: 32px;
        }
        .info{
          display: block;
          position: relative;
          padding: 0 8px;
          height: 50px;
          line-height: 50px;
          .btn{
            position: absolute;
            top: 0;
            right: 16px;
            display: inline-block;
            width: 98px;
            height: 48px;
            border: 1px solid #bfbfbf;
            border-radius: 4px;
            text-align: center;
          }
        }

      }
    }
  }
}
</style>
