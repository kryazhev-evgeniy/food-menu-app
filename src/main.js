import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome";
import {
  faUserSecret,
  faAlignRight,
  faHome,
  faChevronLeft,
  faChevronRight,
  faSignInAlt,
  faUserPlus,
  faUser,
  faEnvelope,
  faKey
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(
  faChevronLeft,
  faSignInAlt,
  faUserPlus,
  faUserSecret,
  faAlignRight,
  faHome,
  faChevronRight,
  faUser,
  faEnvelope,
  faKey
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
