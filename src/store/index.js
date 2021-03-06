/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

function getApi(path) {
  return `http://localhost:3000/${path}`;
}

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
    user: {},
    users: []
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
    logout(state) {
      state.token = "";
    },
    //
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, newuser) {
      state.user = newuser;
    }
  },
  actions: {
    SignIn({ commit }, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: getApi("api/user/auth"),
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
            commit("setUser", resp.data.user);
            resolve();
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    SignUp({ dispatch }, form) {
      return new Promise((resolve, reject) => {
        axios
          .post(getApi("api/user/"), {
            username: form.username,
            login: form.login,
            password: form.password,
            isAdmin: form.isAdmin
          })
          .then(resp => {
            dispatch("loadUsers").then(() => {
              resolve(resp.data);
            });
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    LogOut({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    DeleteUser({ dispatch }, id) {
      var data = {
        id: id
      };

      return new Promise((resolve, reject) => {
        axios({
          method: "delete",
          url: getApi("api/user/"),
          data: data
        })
          .then(() => {
            dispatch("loadUsers").then(() => {
              resolve();
            });
          })
          .catch(() => {
            reject();
          });
      });
    },
    loadUsers({ commit }) {
      //commit("setUsers", [{ name: 1 }]);
      return new Promise((resolve, reject) => {
        axios({
          url: getApi("api/user/"),
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
          .then(resp => {
            commit("setUsers", resp.data);
            resolve(resp.data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    SetPassword({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: getApi("api/user/setpass"),
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          },
          data: data
        })
          .then(resp => {
            resolve(resp);
          })
          .catch(err => {
            reject(err);
            console.log(err);
          });
      });
    }
  },
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
    isLoggedIn: state => !!state.token,
    users: state => state.users
  },
  modules: {}
});
