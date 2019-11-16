import Rete from "rete";
import { ActionSocket } from "../sockets";

export class AlertComponent extends Rete.Component {
  constructor() {
    super("Alert");
    this.task = {
      outputs: {}
    };
  }

  builder(node) {
    let act = new Rete.Input("act", "Action", ActionSocket);
    node.addInput(act);
  }

  worker() {
    console.log("Test");
  }
}
