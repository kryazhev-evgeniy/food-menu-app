import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Dishes: [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
