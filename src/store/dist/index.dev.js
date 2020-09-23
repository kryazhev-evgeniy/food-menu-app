"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

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
    }, {
      date: new Date(),
      MealTimes: [{
        name: "Завтрак",
        dishes: [{
          name: "Каша",
          urlImage: "https://avatars.mds.yandex.net/get-zen_doc/40274/pub_5bbb1083ad289e00ac6c2194_5bbb1a69ded2be00aa54d47a/scale_1200"
        }, {
          name: "Капуста"
        }, {
          name: "Котлеты"
        }]
      }, {
        name: "Обед",
        dishes: [{
          name: "1"
        }, {
          name: "2"
        }, {
          name: "3"
        }]
      }]
    }]
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
    }
  },
  actions: {},
  modules: {},
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
    }
  }
});

exports["default"] = _default;