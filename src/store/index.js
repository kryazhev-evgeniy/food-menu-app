import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Dishes: [
      {
        name: "1",
        urlImage:
          "https://s1.1zoom.me/big3/4/Meat_products_Vegetables_485899.jpg"
      },
      {
        name: "2",
        urlImage:
          "https://avatars.mds.yandex.net/get-pdb/2407118/3d214a7e-1a1d-4443-9bef-7c0271acc3c9/s1200"
      },
      {
        name: "3",
        urlImage: "https://www.fotoprizer.ru/img/157765_orig.jpg"
      }
    ],
    SelectedDayDish: 1
  },
  mutations: {
    LeftDayDish(state) {
      if (state.SelectedDayDish > 0) {
        state.SelectedDayDish--;
      }
    },
    RightDayDish(state) {
      if (state.SelectedDayDish < 10) {
        state.SelectedDayDish++;
      }
    }
  },
  actions: {},
  modules: {}
});
