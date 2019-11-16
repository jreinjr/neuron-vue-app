import Rete from "rete";
//import Node from "../vue/Node.vue";
import { AnySocket, ActionSocket } from "../sockets";
import { TextControl } from "../controls/TextControl.js"

// var eventHandlers = {
//   list: [],
//   remove(name) {
//     this.list.forEach(h => {
//       document.removeEventListener(name, h);
//     });
//     this.list = [];
//   },
//   add(name, h) {
//     document.addEventListener(name, h, false);
//     this.list.push(h);
//   }
// };

export class ViewerComponent extends Rete.Component {
  constructor() {
    super("Viewer");
    this.task = {
      outputs: {}
    }
  }

  builder(node) {
    let act = new Rete.Input("act", "Action", ActionSocket);
    let in1 = new Rete.Input("any", "Any", AnySocket);
    let textControl = new TextControl(this.editor, "viewer", true);
    node.addInput(act);
    node.addInput(in1);
    node.addControl(textControl);
  }

  worker(node, inputs) {
    let inputValue = inputs['any'].length ? inputs['any'][0]:'';
    let inputString = inputValue ? String(inputValue) : '';
    this.component.editor.nodes.find(n => n.id == node.id).controls.get('viewer').setValue(inputString);
  }
}
