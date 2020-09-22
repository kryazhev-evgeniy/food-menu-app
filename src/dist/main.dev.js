"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _fontawesome = require("@fortawesome/fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _buefy = _interopRequireDefault(require("buefy"));

require("buefy/dist/buefy.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_fontawesome.library.add(_freeSolidSvgIcons.faChevronLeft, _freeSolidSvgIcons.faSignInAlt, _freeSolidSvgIcons.faUserPlus, _freeSolidSvgIcons.faUserSecret, _freeSolidSvgIcons.faAlignRight, _freeSolidSvgIcons.faHome, _freeSolidSvgIcons.faChevronRight, _freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faKey);

_vue["default"].component("font-awesome-icon", _vueFontawesome.FontAwesomeIcon);

_vue["default"].config.productionTip = false;

_vue["default"].use(_buefy["default"], {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas"
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");