"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    SelectedDayDish: 0,
    ShowWiew: true,
    DayDishes: [{
      date: new Date(),
      MealTimes: [{
        name: "Завтрак",
        dishes: [{
          name: "Пельмени",
          urlImage: "https://avatars.mds.yandex.net/get-pdb/2979710/939656c9-f65b-4d51-b287-e6cc6bfd8df0/s1200"
        }]
      }]
    }],
    token: localStorage.getItem("token") || "",
    user: {
      name: "kryazhev"
    },
    users: []
  },
  mutations: {
    LeftDayDish: function LeftDayDish(state) {
      if (state.SelectedDayDish > 0) {
        state.ShowWiew = false;
        state.SelectedDayDish--;
        setTimeout(function () {
          state.ShowWiew = true;
        }, 500);
      }
    },
    RightDayDish: function RightDayDish(state) {
      if (state.SelectedDayDish < state.DayDishes.length - 1) {
        state.ShowWiew = false;
        state.SelectedDayDish++;
        setTimeout(function () {
          state.ShowWiew = true;
        }, 500);
      }
    },
    //suer mutations
    auth_success: function auth_success(state, token) {
      state.token = token;
    },
    logout: function logout(state) {
      state.token = "";
    },
    //
    setUsers: function setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    SignIn: function SignIn(_ref, form) {
      var commit = _ref.commit;
      return new Promise(function (resolve, reject) {
        (0, _axios["default"])({
          url: "https://kryazhev-offical.ru/api/user/auth",
          method: "POST",
          data: {
            login: form.login,
            password: form.password
          }
        }).then(function (resp) {
          var token = resp.data.token;
          _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          localStorage.setItem("token", "Bearer ".concat(token));
          commit("auth_success", token);
          resolve(resp);
        })["catch"](function (err) {
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
      });
    },
    // eslint-disable-next-line no-unused-vars
    SignUp: function SignUp(_ref2, form) {
      var dispatch = _ref2.dispatch;
      return new Promise(function (resolve, reject) {
        _axios["default"].post("https://kryazhev-offical.ru/api/user/", {
          username: form.username,
          login: form.login,
          password: form.password,
          isAdmin: form.isAdmin
        }).then(function (resp) {
          dispatch("loadUsers").then(function () {
            resolve(resp.data);
          });
        })["catch"](function (err) {
          reject(err);
        });
      });
    },
    LogOut: function LogOut(_ref3) {
      var commit = _ref3.commit;
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        commit("logout");
        localStorage.removeItem("token");
        delete _axios["default"].defaults.headers.common["Authorization"];
        resolve();
      });
    },
    DeleteUser: function DeleteUser(_ref4, id) {
      var dispatch = _ref4.dispatch;
      var data = {
        id: id
      };
      return new Promise(function (resolve, reject) {
        (0, _axios["default"])({
          method: "delete",
          url: "https://kryazhev-offical.ru/api/user/",
          data: data
        }).then(function () {
          dispatch("loadUsers").then(function () {
            resolve();
          });
        })["catch"](function () {
          reject();
        });
      });
    },
    loadUsers: function loadUsers(_ref5) {
      var commit = _ref5.commit;
      //commit("setUsers", [{ name: 1 }]);
      return new Promise(function (resolve, reject) {
        (0, _axios["default"])({
          url: "https://kryazhev-offical.ru/api/user/",
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }).then(function (resp) {
          commit("setUsers", resp.data);
          resolve(resp.data);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  },
  getters: {
    getSelectedDayDiish: function getSelectedDayDiish(state) {
      if (state.SelectedDayDish > state.DayDishes.length) {
        return state.DayDishes[state.DayDishes.length];
      } else {
        return state.DayDishes[state.SelectedDayDish];
      }
    },
    getSelectedDayDate: function getSelectedDayDate(state) {
      var dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
      var date = state.DayDishes[state.SelectedDayDish].date;
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: dayNames[date.getDay()]
      };
    },
    getShowView: function getShowView(state) {
      return state.ShowWiew;
    },
    getUser: function getUser(state) {
      return state.user;
    },
    isLoggedIn: function isLoggedIn(state) {
      return !!state.token;
    },
    users: function users(state) {
      return state.users;
    }
  },
  modules: {}
});

exports["default"] = _default;