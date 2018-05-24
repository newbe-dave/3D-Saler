import Vue from 'vue'
import Vuex from 'vuex'
import breadCrumb from './modules/breadCrumb.js'
import cgFilter from './modules/cgFilter'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    breadCrumb,
    cgFilter
  }
})
