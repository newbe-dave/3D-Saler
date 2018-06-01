const state = {
  goodsList: []
};

const getters = {
  getGoodsList: (state) => state.goodsList
};

const mutations = {
  refreshGoodsList: (state, result) => {
    state.goodsList = result;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
