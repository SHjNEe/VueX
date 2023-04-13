import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const counterModule = {
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
    },
  },
  actions: {
    increase(context, payload) {
      context.commit("increase", payload);
    },
    increment(context) {
      context.commit("increment");
    },
    login(context) {
      context.commit("setAuth", { isLoggedIn: true });
    },
    logout(context) {
      context.commit("setAuth", { isLoggedIn: false });
    },
  },

  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter * 3;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
};

const store = createStore({
  modules: {
    counterModule,
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
