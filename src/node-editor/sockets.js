import Rete from "rete";

export const NumberSocket = new Rete.Socket("Number");
export const TextSocket = new Rete.Socket("Text");
export const AnySocket = new Rete.Socket("Any");

NumberSocket.combineWith(AnySocket);
TextSocket.combineWith(AnySocket);