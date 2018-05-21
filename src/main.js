// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import _ from 'lodash'
import App from './App'
import Navigation from './components/Navigation.vue'
import router from './router'
import Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store'

Vue.use(iView)
Vue.component('Navigation', Navigation)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
