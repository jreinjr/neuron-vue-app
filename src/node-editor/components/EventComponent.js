import Rete from "rete";
import { ActionSocket } from "../sockets";

var eventHandlers = {
  list: [],
  remove(name) {
    this.list.forEach(h => {
      document.removeEventListener(name, h);
    });
    this.list = [];
  },
  add(name, h) {
    document.addEventListener(name, h, false);
    this.list.push(h);
  }
};

export class EventComponent extends Rete.Component {
  constructor() {
    super("Event");
    this.task = {
      outputs: { act: "option" },
      init(task) {
        eventHandlers.remove("execute");
        eventHandlers.add("execute", e => {
          task.run(e);
          task.reset();
        });
      }
    };
  }

  builder(node) {
    let out = new Rete.Output("act", "Action", ActionSocket);
    node.addOutput(out);
  }

  worker() {}
}
