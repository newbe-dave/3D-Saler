const state = {
  pathStack: ['软装库', '沙发']
}

const getters = {
  path: state => state.pathStack
}

const mutations = {
  setPath: (state, newPath) => {state.pathStack = newPath}
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
