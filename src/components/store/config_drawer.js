export const state = () => ({
  show: false,
});

export const getters = {
  show(state) {
    return state.show;
  },
};

export const actions = {
  active({ commit }, bool) {
    return commit("ACTION", bool);
  },
};

export const mutations = {
  ACTION(state, bool) {
    return (state.show = bool);
  },
};
