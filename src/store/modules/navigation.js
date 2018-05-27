const state = {
  currentSelection: 'softDecoration-sofa'
};

const getters = {};

const mutations = {
  setCurrentSelected: (state, name) => {
    state.currentSelection = name;
  }
};

const actions = {
  setSelectedItem: ({state, commit}, name) => {
    commit("setCurrentSelected", name);
    commit("setSelectedNavi", name);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
