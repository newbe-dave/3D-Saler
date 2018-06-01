const state = {
  currentSelection: 'softDecoration-sofa'
};

const getters = {
  getMenuSelected: function () {
    return state.currentSelection;
  }
};

const mutations = {
  setCurrentSelected: (state, name) => {
    state.currentSelection = name;
  }
};

const actions = {
  afterSelectedItem: ({state, commit}, name) => {
    commit("setCurrentSelected", name);
    commit("setSelectedNavi", name);

    var result = [];
    var length = Math.floor(Math.random() * 10);
    for (var i = 0; i <= length; i ++) {
      result.push({
        id: i, name: name + i, favouriteState: false
      });
    }
    commit("refreshGoodsList", result)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
