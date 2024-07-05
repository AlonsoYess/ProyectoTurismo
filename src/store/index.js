import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token, // Getter para obtener el token
  },
});

export default store;
