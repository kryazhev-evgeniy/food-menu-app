import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome";
import {
  faUserSecret,
  faAlignRight,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import buefy from "buefy";
import "buefy/dist/buefy.css";

library.add(faUserSecret);
library.add(faAlignRight);
library.add(faHome);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
