<template>
  <div class="JSlider">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <a :href="item.link || 'javascript:;'">
          <img :src="item.src" :alt="item.alt || ''">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: ['initData'],
    data() {
      return {
        slides: this.initData,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          loop : true
        }
      }
    }
  }
</script>

<style lang="scss">
.JSlider{
  .swiper-container{
    width: 100%;
    height: 366px;
    margin-top: -28px;
  }
  .swiper-pagination-bullet{
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    background: none;

  }
  .swiper-pagination-bullet-active{
    background: #fff;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets{
    bottom: 40px;
  }
}
</style>
