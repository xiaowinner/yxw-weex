/*global Vue*/
import Router from 'vue-router'
import HomePage from '@/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage
    }
  ]
})
