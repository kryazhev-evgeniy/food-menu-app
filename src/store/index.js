import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    token: localStorage.getItem("token") || "",
    user: {
      name: "kryazhev"
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
    },
    //suer mutations
    auth_success(state, token) {
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.token = "";
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    SignIn({ commit }, form) {
      //https://kryazhev-offical.ru/api/user/auth
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        axios({
          url: "https://kryazhev-offical.ru/api/user/auth",
          method: "POST",
          data: {
            login: form.login,
            password: form.password
          }
        })
          .then(resp => {
            const token = resp.data.token;
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("token", `Bearer ${token}`);
            commit("auth_success", token);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    LogOut({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
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
    },
    getUser: state => {
      return state.user;
    },
    isLoggedIn: state => !!state.token
  }
});
