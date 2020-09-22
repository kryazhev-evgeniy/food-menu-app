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
import Buefy from "buefy";
import "buefy/dist/buefy.css";

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

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
