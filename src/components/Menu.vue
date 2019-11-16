<template>
  <div>
    <button v-on:click="execute" class="spectrum-Button">
      <span class="spectrum-Button-label">Execute</span>
    </button>
  </div>
</template>

<script>


export default {
  methods: {
    execute: () => {
      document.dispatchEvent(new Event("execute"));
    }
  }
};
</script>