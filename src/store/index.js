import Vue from 'vue'
import Vuex from 'vuex'
import breadCrumb from './modules/breadCrumb.js'
import cgFilter from './modules/cgFilter'
import navigation from './modules/navigation'

Vue.use(Vuex);

const state = {
  selectedNavigation: '',
  detailModelName: ''
};

const getters = {

};

const mutations = {
  setSelectedNavi: (state, selected) => {
    state.selectedNavigation = selected;
  }
};

const actions = {

};

export default new Vuex.Store({
  modules: {
    breadCrumb,
    cgFilter,
    navigation
  },
  state,
  mutations,
  getters,
  actions
})
