// textNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const nodeHandles = [
    { type: "source", position: Position.Right, id: "output" },
  ];

  return (
    <BaseNode id={id} label="Text" handles={nodeHandles}>
      <label>
        Text:
        <input type="text" value={currText} onChange={handleTextChange} />
      </label>
    </BaseNode>
  );
};
