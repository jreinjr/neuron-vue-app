import Rete from "rete";
import { TextSocket } from "../sockets";
import { TextControl } from "../controls/TextControl.js";

export class TextComponent extends Rete.Component {
  constructor() {
    super("Text");
    this.task = {
      outputs: {txt: 'output'}
    }
  }

  builder(node) {
    let out = new Rete.Output("txt", "Text", TextSocket);

    node.addControl(new TextControl(this.editor, "txt"));
    node.addOutput(out);
  }

  worker(node, inputs, outputs) {
    outputs["txt"] = node.data.txt;
    return {txt: node.data.txt}
  }
}
