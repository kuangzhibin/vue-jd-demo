<template>
  <div class="JString">
    <a v-for="i in spans.length" href="javascript:;">
      <img :src="spans[i-1].img" alt="">
      <span>{{spans[i-1].name}}</span>
    </a>
  </div>
</template>

<script>
export default {

  name: 'JString',

  data () {
    return {
      spans: [
        {
          img: require('../assets/img/item01.png'),
          name: '京东超市'
        },
        {
          img: require('../assets/img/item02.png'),
          name: '全球购'
        },
        {
          img: require('../assets/img/item03.png'),
          name: '京东服饰'
        },
        {
          img: require('../assets/img/item04.png'),
          name: '京东生鲜'
        },
        {
          img: require('../assets/img/item05.png'),
          name: '京东到家'
        },
        {
          img: require('../assets/img/item06.png'),
          name: '充值缴费'
        },
        {
          img: require('../assets/img/item07.png'),
          name: '9.9元拼'
        },
        {
          img: require('../assets/img/item08.png'),
          name: '领券'
        },
        {
          img: require('../assets/img/item09.png'),
          name: '赚钱'
        },
        {
          img: require('../assets/img/item10.png'),
          name: '全部'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.JString{
  display: flex;
  flex-wrap: wrap ;
  flex: 0 0 auto;
  padding: 8px 0 36px;
  background-color: #fff;
  a{
    width: 20%;
    display: block;
    text-align: center;
    margin: 12px 0;
    img{
      width: 80px;
      height: 80px;
      margin: 0 auto;
      margin-bottom: 6px;
      display: block;
    }
  }
}
</style>
