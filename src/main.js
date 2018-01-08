// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import TabLogo from './components/TabLogo.vue'
import DownloadTab from './components/DownloadTab.vue'
import AccountTab from './components/AccountTab.vue'
import AboutUsTab from './components/AboutUs.vue'
import TermsTab from './components/Terms.vue'
import InfosInAccountTab from './components/InfosInAccount.vue'
import userInfoTab from './components/UserInfoOfInfos.vue'
import RechargeCenterTab from './components/RechargeCenterOfInfos.vue'
import DownloadRecTab from './components/DownloadRecord.vue'
import FavouriteRecTab from './components/FavouriteRecord.vue'
import router from './router'
import Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.component('my-logo', TabLogo)
Vue.component('my-download', DownloadTab)
Vue.component('my-account', AccountTab)
Vue.component('my-aboutus', AboutUsTab)
Vue.component('my-terms', TermsTab)
Vue.component('my-infos', InfosInAccountTab)
Vue.component('my-user', userInfoTab)
Vue.component('my-recharge', RechargeCenterTab)
Vue.component('my-downloadRec', DownloadRecTab)
Vue.component('my-favouriteRec', FavouriteRecTab)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
