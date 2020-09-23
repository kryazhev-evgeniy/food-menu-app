import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SelectedDayDish: 0,
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
              }
            ]
          }
        ]
      },
      {
        date: new Date(),
        MealTimes: [
          {
            name: "Завтрак",
            dishes: [
              {
                name: "Каша",
                urlImage:
                  "https://avatars.mds.yandex.net/get-zen_doc/40274/pub_5bbb1083ad289e00ac6c2194_5bbb1a69ded2be00aa54d47a/scale_1200"
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
      if (state.SelectedDayDish < state.DayDishes.length - 1) {
        state.SelectedDayDish++;
      }
    }
  },
  actions: {},
  modules: {},
  getters: {
    getSelectedDayDiish: state => {
      if (state.SelectedDayDish > state.DayDishes.length) {
        return state.DayDishes[state.DayDishes.length];
      } else {
        return state.DayDishes[state.SelectedDayDish];
      }
    },
    getSelectedDayDate: state => {
      const dayNames = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ];
      const date = state.DayDishes[state.SelectedDayDish].date;
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: dayNames[date.getDay()]
      };
    }
  }
});
