<template>
  <div class="JNews">
    <a class="tips" href="javascript:;">
      <img src="../assets/img/jd-news-tit.png" alt="">
    </a>
    <div class="listsBox">
      <swiper :options="swiperNewsOption">
        <swiper-slide v-for="(item, index) in lists" :key="index" class="ellipsis">
          <a :href="item.link || 'javascript:;'" class="ellipsis">
            <span class="red">{{item.tip}}</span>
            {{item.title}}
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <a class="more" href="javascript:;">更多</a>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'JNews',
  components: {
      swiper,
      swiperSlide
    },
  data () {
    return {
      swiperNewsOption: {
        direction : 'vertical',
        autoplay: true,
        loop : true
      },
      lists: [
        {
          tip: '热',
          title: '为什么懂电脑的人不买i7处理器?'
        },
        {
          tip: '热门',
          title: '小米曝光新机参数，就剩价格没说了'
        },
        {
          tip: '热',
          title: '5G手机来了，4G手机还有必要买吗?'
        },
        {
          tip: '热',
          title: 'iphone 9九月问世，性能惊人'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.JNews{
  display: flex;
  height: 60px;
  margin: 0 20px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
  .swiper-container{
    width: 460px;
    height: 60px;
    padding: 0 20px;
    .red{
      color: #f00;
      margin-right: 16px;
    }
  }
  .swiper-wrapper{
    a{
      display: inline-block;
      height: 60px;
      line-height: 60px;
    }
  }
  .tips{
    flex: 0 0 auto;
    display: block;
    width: 146px;
    height: 32px;
    padding-top: 14px;
    img{
      width: 100%;
    }
  }
  .listsBox{
    flex: 1;
  }
  .more{
    flex: 0 0 auto;
    display: block;
    line-height: 60px;
    width: 60px;
    height: 60px;
    margin-left: 20px;
    &:after{
      content: '';
      height: 60px;
      border-left: 1px solid #f00;
      position: relative;
      left: -120%;
    }
  }
}
</style>
