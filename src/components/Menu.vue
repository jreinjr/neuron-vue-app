<template>
  <div>
    <button v-on:click="execute">Execute</button>
  </div>
</template>

<script>


export default {
  methods: {
    execute: () => {
      var event = new Event('execute');
      document.dispatchEvent(event);
    }
  }
};
</script>