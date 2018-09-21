<template>
  <div class="PClass">
    <JHeader :main="false"></JHeader>
    <JClass></JClass>
  </div>
</template>

<script>
import JHeader from './JHeader.vue'
import JClass from './JClass.vue'
export default {

  name: 'PClass',
  components: {
    JHeader,
    JClass
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.PClass{
  width: 100%;
  height: 100%;
}
</style>
