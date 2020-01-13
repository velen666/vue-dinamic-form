import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faUserFriends,
  faSearch,
  faHome,
  faPhoneAlt,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);

library.add(
  faUserSecret,
  faUserFriends,
  faSearch,
  faHome,
  faFileAlt,
  faPhoneAlt,
  faFlag
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
