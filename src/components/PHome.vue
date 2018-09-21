<template>
  <div class="container" flexcontainer>
    <JHeader :opacity="opacity"></JHeader>
    <JSlider ref="slide" :initData="sliders"></JSlider>
    <JActivity></JActivity>
    <JString></JString>
    <JNews></JNews>
    <JGuang></JGuang>
    <JProduct></JProduct>
   </div>
</template>

<script>
import JHeader from './JHeader.vue'
import JSlider from './JSlider.vue'
import JActivity from './JActivity.vue'
import JString from './JString.vue'
import JNews from './JNews.vue'
import JGuang from './JGuang.vue'
import JProduct from './JProduct.vue'
import JFooter from './JFooter.vue'
export default {
  name: 'HelloWorld',
  components: {
    JHeader,
    JSlider,
    JActivity,
    JString,
    JNews,
    JGuang,
    JProduct,
    JFooter
  },
  data () {
    return {
      opacity: 0,
      msg: '',
      sliders: [
        {
          link: '/',
          src: require('../assets/img/c-1.jpg'),
          alt: ''
        },
        {
          src: require('../assets/img/c-2.jpg'),
        },
        {
          src: require('../assets/img/c-3.jpg'),
        },
        {
          src: require('../assets/img/c-4.jpg'),
        },
        {
          src: require('../assets/img/c-5.jpg'),
        },
        {
          src: require('../assets/img/c-6.jpg'),
        },
        {
          src: require('../assets/img/c-7.jpg'),
        },
        {
          src: require('../assets/img/c-8.jpg'),
        }

      ]
    }
  },
  mounted() {
    var self = this;
    var height = self.$refs.slide.$el.clientHeight;
    console.log(height);
    window.addEventListener('scroll', function () {
      self.opacity= Math.min((document.documentElement.scrollTop || document.body.scrollTop), height) / height;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-bottom: 100px;
}
</style>
