import Vue from "vue";
import App from "./App.vue";

import "../node_modules/@spectrum-css/vars/dist/spectrum-global.css";
import "../node_modules/@spectrum-css/vars/dist/spectrum-large.css";
import "../node_modules/@spectrum-css/vars/dist/spectrum-darkest.css";
import "../node_modules/@spectrum-css/page/dist/index-vars.css";
import "../node_modules/@spectrum-css/typography/dist/index-vars.css";
import "../node_modules/@spectrum-css/icon/dist/index-vars.css";
import "../node_modules/@spectrum-css/button/dist/index-vars.css";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
