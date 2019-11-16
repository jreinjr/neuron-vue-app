<template lang="pug">
.node(:class="[selected(), node.name] | kebab")
  .title.spectrum-Heading1 {{node.name}}

  // Outputs
  .output(v-for='output in outputs()' :key="output.key")
    .output-title.spectrum-Body1 {{output.name}}
    Socket(v-socket:output="output", type="output", :socket="output.socket")

  // Controls
  .control(
    v-for='control in controls()',
    v-control="control"
  )

  // Inputs
  .input(v-for='input in inputs()' :key="input.key")
    Socket(v-socket:input="input", type="input", :socket="input.socket")
    .input-title(v-show='!input.showControl()') {{input.name}}
    .input-control(
      v-show='input.showControl()'
      v-control="input.control"
    )
</template>

<script>


import mixin from './mixin';
import Socket from './Socket.vue';

export default {
  mixins: [mixin],
  components: {
    Socket
  }
}
</script>

<style lang="sass" scoped>
@import "./vars"

.node
  background: var(--spectrum-global-color-gray-100)
  border: 2px solid var(--spectrum-global-color-gray-600)
  border-radius: 2px
  cursor: pointer
  min-width: $node-width
  height: auto
  padding-bottom: 6px
  box-sizing: content-box
  position: relative
  user-select: none
  &:hover
    background: lighten($node-color,4%)
  &.selected
    border-color: #e3c000
  .title
    padding: 8px
    font-size: 24px
  .output
    text-align: right
  .input
    text-align: left
  .input-title,.output-title
    font-size: 16px
    vertical-align: middle
    display: inline-block
    margin: $socket-margin
    line-height: $socket-size
  .input-control
    z-index: 1
    width: calc(100% - #{$socket-size + 2*$socket-margin})
    vertical-align: middle
    display: inline-block
  .control
    padding: $socket-margin $socket-size/2 + $socket-margin
</style>