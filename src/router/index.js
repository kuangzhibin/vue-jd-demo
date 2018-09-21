import Vue from 'vue'
import Router from 'vue-router'
import PHome from '@/components/PHome'
import PClass from '@/components/PClass'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'PHome',
      component: PHome
    },
    {
      path: '/class',
      name: 'Class',
      component: PClass
    }
  ]
})
