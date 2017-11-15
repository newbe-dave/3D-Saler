import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPanel from '../components/IndexPanel'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: IndexPanel
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// methods: {
//   showServer: () => {
//     this.$http.get('/api/hello').then((res) => {
//       if (res.data.success) {
//         this.msg = res.data
//       }
//     })
//   }
// }
