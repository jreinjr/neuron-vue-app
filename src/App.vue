<template>
  <div id="app">
    <Rete />

  </div>
</template>

<script>
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/page/dist/index-vars.css";
import "@spectrum-css/textfield/dist/index-vars.css";
import "@spectrum-css/stepper/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "@spectrum-css/button/dist/index-vars.css";

import "@adobe/coral-spectrum/dist/css/coral.min.css";
import "@adobe/coral-spectrum/dist/js/coral.min.js";


import Rete from './components/Rete.vue'

export default {
  name: "app",
  components: {
    Rete
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;

}

</style>
