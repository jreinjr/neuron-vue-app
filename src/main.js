import Vue from "vue";
import App from "./App.vue";

import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/page/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "@spectrum-css/button/dist/index-vars.css";

import "@adobe/coral-spectrum/dist/css/coral.min.css";
import "@adobe/coral-spectrum/dist/js/coral.min.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
