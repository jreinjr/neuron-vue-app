import Rete from "rete";
//import Node from "../vue/Node.vue";
import { AnySocket } from "../sockets";
import { TextControl } from "../controls/TextControl.js"


export class ViewerComponent extends Rete.Component {
  constructor() {
    super("Viewer");
    // this.data.render = "vue";
    // this.data.component = Node;
    // this.data.props = {};
  }

  builder(node) {
    let in1 = new Rete.Input("any", "Any", AnySocket);
    let textControl = new TextControl(this.editor, "viewer", true);
    node.addInput(in1);
    node.addControl(textControl);
  }

  worker(node, inputs) {
    let inputValue = inputs['any'].length ? inputs['any'][0]:'';
    let inputString = inputValue ? String(inputValue) : '';
    this.editor.nodes.find(n => n.id == node.id).controls.get('viewer').setValue(inputString);
  }
}
