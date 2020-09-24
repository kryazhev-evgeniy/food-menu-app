import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SelectedDayDish: 0,
    ShowWiew: true,
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
      }
    ],
    user: {
      token: ""
    }
  },
  mutations: {
    LeftDayDish(state) {
      if (state.SelectedDayDish > 0) {
        state.ShowWiew = false;
        state.SelectedDayDish--;
        setTimeout(() => {
          state.ShowWiew = true;
        }, 500);
      }
    },
    RightDayDish(state) {
      if (state.SelectedDayDish < state.DayDishes.length - 1) {
        state.ShowWiew = false;
        state.SelectedDayDish++;
        setTimeout(() => {
          state.ShowWiew = true;
        }, 500);
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
    },
    getShowView: state => {
      return state.ShowWiew;
    }
  }
});
