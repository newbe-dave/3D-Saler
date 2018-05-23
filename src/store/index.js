import Vue from 'vue'
import Vuex from 'vuex'
import breadCrumb from './modules/breadCrumb.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    breadCrumb
  }
})
