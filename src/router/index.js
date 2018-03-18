import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Download from '../components/DownloadTab'
import Recomend from '../components/RecomendedTab'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    // {
    //   path: '/',
    //   name: 'Download',
    //   component: Download
    // },
    {
      path: '/',
      name: 'Recomend',
      component: Recomend
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
