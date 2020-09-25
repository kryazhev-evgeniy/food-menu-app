import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { library } from "@fortawesome/fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import buefy from "buefy";
import "buefy/dist/buefy.css";

import "./assets/main.css";

library.add(fas);

Vue.use(Vuesax);
Vue.use(buefy);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
