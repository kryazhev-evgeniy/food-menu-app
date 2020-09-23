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
    SelectedDayDish: 1,
    DayDishes: [{
      date: new Date(),
      MealTimes: [{
        name: "Завтрак",
        dishes: [{
          name: "Пельмени",
          urlImage: "https://avatars.mds.yandex.net/get-pdb/2979710/939656c9-f65b-4d51-b287-e6cc6bfd8df0/s1200"
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
        state.SelectedDayDish--;
      }
    },
    RightDayDish: function RightDayDish(state) {
      if (state.SelectedDayDish < 10) {
        state.SelectedDayDish++;
      }
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;