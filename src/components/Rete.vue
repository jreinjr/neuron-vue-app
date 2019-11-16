<template>
  <div id="rete" ref="rete">
    <button onclick="console.log('hi')" class="spectrum-Button">
      <span class="spectrum-Button-label">Execute</span>
    </button>
  </div>
</template>

<script>
import init from "../node-editor";

export default {
    mounted() {
        init(this.$refs.rete);
    }
};
</script>

<style>
#rete {
  width: 100%;
  height: 100%;
  background: var(--spectrum-global-color-gray-200);
  background-size:55px 55px;
  background-image:
    linear-gradient(to right, var(--spectrum-global-color-gray-400) 1px, transparent 1px),
    linear-gradient(to bottom, var(--spectrum-global-color-gray-400) 1px, transparent 1px);
}

#rete button {
  float: left;
  position: relative;
  z-index: 999;
  margin: 10px
}

.node .control input, .node .input-control input {
  width: 140px;
}

select, input {
  width: 100%;
  border-radius: 2px;
  background-color: white;
  padding: 2px 6px;
  border: 1px solid #999;
  font-size: 110%;
  width: 170px;
}
</style>
