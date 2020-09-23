import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SelectedDayDish: 1,
    DayDishes: [
      {
        date: new Date(),
        MealTimes: [
          {
            name: "Завтрак",
            dishes: [
              {
                name: "Пельмени",
                urlImage:
                  "https://avatars.mds.yandex.net/get-pdb/2979710/939656c9-f65b-4d51-b287-e6cc6bfd8df0/s1200"
              },
              {
                name: "Капуста"
              },
              {
                name: "Котлеты"
              }
            ]
          },
          {
            name: "Обед",
            dishes: [
              {
                name: "1"
              },
              {
                name: "2"
              },
              {
                name: "3"
              }
            ]
          }
        ]
      }
    ]
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
