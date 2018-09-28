<template>
  <div class="topHeader" :class="{noMain: !main}" :style="backgroundColor">
    <div class="ticon tleft" @click="changeRoute"></div>
    <form class="search" action="/">
      <div class="logo-jd"></div>
      <div class="div-dilive"></div>
      <div class="logo-search"></div>
      <input type="text" name="search" placeholder="澳洲爱他美，领券599减80">
    </form>
    <div class="ticon tright"></div>
  </div>
</template>

<script>
export default {

  name: 'topHeader',
  props: {
    opacity: {
      type: Number,
      default: 0
    },
    main: {
      type: Boolean,
      default: true
    }
  },

  computed:{
    backgroundColor() {
      return this.main ? `background-color: rgba(225, 50, 53, ${Math.min(0.9, this.opacity)})` : ''
    }
  },

  data () {
    return {

    }
  },
  methods: {
    changeRoute(){
      this.$router.push(this.main ? '/class' : '/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .topHeader{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 0 30px;
    background-color: rgba(225, 50, 53, 0)
  }
  .ticon{
    width: 40px;
    height: 60px;
    padding: 0 10px;
    margin-top: 20px;
    line-height: 100px;
    flex: 0 0 auto;
    &.tleft{
      background: url(../assets/img/menu.png) no-repeat;
      background-size: contain;
      background-position: 50%;
    }
    &.tright{
      background: url(../assets/img/msg.png) no-repeat;
      background-size: contain;
      background-position: 50%;
    }
  }
  .noMain{
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .ticon{
    width: 40px;
    height: 60px;
    padding: 0 10px;
    margin-top: 20px;
    line-height: 100px;
    flex: 0 0 auto;
      &.tleft{
        background: url(../assets/img/Jicon-arrowLeft.png) no-repeat;
        background-size: contain;
        background-position: 50%;
      }
      &.tright{
        background: url(../assets/img/Jicon-shortMenu.png) no-repeat;
        background-size: contain;
        background-position: 50%;
      }
    }
    .logo-jd, .div-dilive{
      display: none;
    }
    .search{
      background-color: #f7f7f7;
      .logo-search{
        padding: 0 30px;
      }
      input{
        background-color: transparent;
      }
    }
  }
  .search{
    width: 1120px;
    height: 60px;
    background-color: #fff;
    margin: 0 30px;
    margin-top: 20px;
    padding: 0 20px;
    border-radius: 30px;
    display: flex;
    .logo-jd{
      width: 40px;
      height: 40px;
      margin-top: 10px;
      margin-left: 10px;
      background: url(../assets/img/logo.png) no-repeat;
      background-size: 40px;
    }
    .div-dilive{
      width: 1px;
      border-right: 1px solid #f0f0f0;
      margin: 10px 20px;
    }
    .logo-search{
      width: 28px;
      height: 28px;
      margin-top: 16px;
      margin-right: 10px;
      background: url(../assets/img/search.png) no-repeat center;
      background-size: 28px;
    }
    input{
      float: right;
      width: 390px;
      height: 36px;
      line-height: 36px;
      margin-top: 16px;
      border: none;
      outline: none;
      font-size: 24px;
      &::-webkit-input-placeholder {
         color: #aaa;
         font-size: 24px;
     }
    }

  }
</style>
