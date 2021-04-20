export default {
  state: {
    show: false,
  },

  mutations: {
    ACTION(state, bool) {
      return (state.show = bool);
    },
  },

  actions: {
    active({ commit }, bool) {
      return commit("ACTION", bool);
    },
  },

  getters: {
    show(state) {
      return state.show;
    },
  },
};
