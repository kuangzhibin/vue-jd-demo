<template>
  <div class="JFooter">
    <a @click="$router.push('/')">
      <img :src="path === '/' ? iconHomeActive :iconHome" alt="">
    </a>
    <a @click="$router.push('/class')">
      <img :src="path === '/class' ? iconKlassActive :iconKlass" alt="">
    </a>
    <a href="javascript:;">
      <img src="../assets/img/Jicon_fire.png" alt="">
    </a>
    <a href="javascript:;">
      <img src="../assets/img/Jicon_car.png" alt="">
    </a>
    <a href="javascript:;">
      <img src="../assets/img/Jicon_user.png" alt="">
    </a>
  </div>
</template>

<script>
import iconHomeActive from '@/assets/img/Jicon_home_active.png'
import iconHome from '@/assets/img/Jicon_home.png'
import iconKlassActive from '@/assets/img/Jicon_class_active.png'
import iconKlass from '@/assets/img/Jicon_class.png'
export default {

  name: 'JFooter',
  props: ['path'],
  data () {
    return {
      iconHome,
      iconHomeActive,
      iconKlass,
      iconKlassActive
    }
  }
}
</script>

<style lang="scss" scoped>
.JFooter{
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.6);
  display: flex;
  height: 100px;
  width: 100%;
  a{
    flex: 1;
    display: block;
    // width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 120px;
  }
}
</style>
