import Rete from "rete";
//import Node from "../vue/Node.vue";
import { NumberSocket } from "../sockets";
import { NumberControl } from "../controls/NumberControl.js";

export class NumberComponent extends Rete.Component {
  constructor() {
    super("Number");
    // this.data.render = "vue";
    // this.data.component = Node;
    // this.data.props = {};
  }

  builder(node) {
    let out = new Rete.Output("num", "Number", NumberSocket);

    node.addControl(new NumberControl(this.editor, "num"));
    node.addOutput(out);
  }

  worker(node, inputs, outputs) {
    outputs["num"] = node.data.num;
  }
}
