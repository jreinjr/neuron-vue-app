import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import VueRenderPlugin from "rete-vue-render-plugin";

import Node from "./vue/Node.vue"
import { NumberComponent } from "./components/NumberComponent.js";
import { TextComponent } from "./components/TextComponent.js";
import data from "./data.json";
import { ViewerComponent } from "./components/ViewerComponent";

export default async function(container) {
  const components = [new NumberComponent(), new TextComponent(), new ViewerComponent()];

  const editor = new Rete.NodeEditor("neuron@0.1.0", container);
  const engine = new Rete.Engine("neuron@0.1.0");

  editor.use(ConnectionPlugin);
  editor.use(ContextMenuPlugin);
  editor.use(VueRenderPlugin, { 
    component: Node
   });

  components.map(c => {
    editor.register(c);
    engine.register(c);
  });

  editor.on(
    "process nodecreated noderemoved connectioncreated connectionremoved",
    async () => {
      await engine.abort();
      await engine.process(editor.toJSON());
    }
  );

  await editor.fromJSON(data);

  //editor.view.resize();
  setTimeout(() => editor.trigger("process"), 1000);
}
