// llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const nodeHandles = [
    { type: "source", position: Position.Right, id: "response" },
    { type: "target", position: Position.Left, id: "system" },
    { type: "target", position: Position.Left, id: "prompt" },
  ];

  return <BaseNode id={id} label="LLM" handles={nodeHandles} />;
};
