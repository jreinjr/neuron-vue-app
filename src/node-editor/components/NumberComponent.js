import Rete from "rete";
//import Node from "../vue/Node.vue";
import { NumberSocket } from "../sockets";
import { NumberControl } from "../controls/NumberControl.js";

export class NumberComponent extends Rete.Component {
  constructor() {
    super("Number");
    this.task = {
      outputs: {num: 'output'}
    }
  }

  builder(node) {
    let out = new Rete.Output("num", "Number", NumberSocket);

    node.addControl(new NumberControl(this.editor, "num"));
    node.addOutput(out);
  }

  worker(node) {
    return {num: node.data.num}
  }
}
