import Rete from "rete";
import { AnySocket, ActionSocket } from "../sockets";
import { TextControl } from "../controls/TextControl.js"

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
