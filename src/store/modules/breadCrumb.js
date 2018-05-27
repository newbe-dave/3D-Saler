import _ from 'lodash'
import config from '../config/naviMap'

const state = {
  pathStack: []
}

const getters = {
  path: (state, getters, rootState) => {
    state.pathStack = _.map(rootState.selectedNavigation.split('-'), (str) => config.mapping[str]);

    if (rootState.detailModelName) {
      state.pathStack.concat(rootState.detailModelName);
    }
    return state.pathStack
  }
}

const mutations = {
  setPath: (state, newPath) => {
    state.pathStack = newPath
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
