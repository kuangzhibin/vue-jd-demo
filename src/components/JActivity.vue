<template>
  <div class="JActivity">
    <a v-for="i in 3" :href="items[i-1].link">
      <img :src="items[i-1].img" alt="">
    </a>
  </div>
</template>

<script>
export default {

  name: 'JActivity',

  data () {
    return {
      items: [
        {
          img: require('../assets/img/activity-1.png'),
          link: 'https://pro.m.jd.com/mall/active/N4wEvHqN1xXd3uouwNve8WBTzpm/index.html'
        },
        {
          img: require('../assets/img/activity-2.png'),
          link: 'https://pro.m.jd.com/mall/active/RAeKq6xS7C6eCVdQc9fKJnMDt5H/index.html'
        },
        {
          img: require('../assets/img/activity-3.png'),
          link: 'https://pro.m.jd.com/mall/active/2Fvf33zEApe9SnP5GjzxFWrYqqKj/index.html'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.JActivity{
  height: 200px;
  background: #eee;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  z-index: 2;
  margin-top: -30px;
  display: flex;
  a{
    width: 33.333333%;
    img{
      width: 100%;
    }
  }
}
</style>
