const state = {
  limit: 20,
  startPage: 0
};

const mutations = {};

const actions = {
  searchPageData: ({commit, state}, startPage) => {
    let pageData = [];
    var length = Math.floor(Math.random() * 10);
    for (var i = 0; i <= length; i ++) {
      pageData.push({
        id: i, name: 'page' + startPage + '-' + i, favouriteState: false
      });
    }
    commit('refreshGoodsList', pageData);
  }
};

export default {
  state,
  mutations,
  actions
}
