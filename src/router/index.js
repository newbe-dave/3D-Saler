import Vue from 'vue'
import Router from 'vue-router'
import ContentList from '@/components/ContentList'
import LogIn from '@/components/LogIn'
import Register from '@/components/Register'
import Findback from '@/components/FindBack'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentList
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/findback',
      name: 'findback',
      component: Findback
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
