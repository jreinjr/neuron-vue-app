import Rete from "rete";
import VueNumberControl from "./_NumberControl.vue";

export class NumberControl extends Rete.Control {
  constructor(emitter, key, readonly) {
    super(key);
    this.component = VueNumberControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
