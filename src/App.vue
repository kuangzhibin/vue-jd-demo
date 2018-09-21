<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <JFooter :path="$route.fullPath"></JFooter>
  </div>
</template>

<script>
import JFooter from './components/JFooter'
export default {
  name: 'App',
  components: {
    JFooter
  },
  data() {
    return {
      transitionName: ''
    }
  },
  watch:{
    '$route' (to, from) {
      const routeDeep = ['/', '/class'];
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #f6f6f6;
  font-size: 24px;
  width: 100%;
  height: 100%;
}
.clearfix:after {
   content:"";
   display: block;
   clear:both;
}
.ellipsis{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }
.fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }

  @keyframes fold-left-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes fold-right-in {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
