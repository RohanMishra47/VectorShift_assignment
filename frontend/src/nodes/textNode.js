// textNode.js

import { useEffect, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }

    setVariables(Array.from(matches));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const dynamicHandles = variables.map((varName, index) => ({
    type: "target",
    position: Position.Left,
    id: `${id}-${varName}`,
    // Calculate vertical position based on index to spread them out
    style: {
      top: `${(index + 1) * (100 / (variables.length + 1))}%`,
    },
  }));

  const nodeHandles = [
    { type: "source", position: Position.Right, id: "output" },
    ...dynamicHandles,
  ];

  return (
    <BaseNode id={id} label="Text" handles={nodeHandles}>
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          className="w-full resize-none"
        />
      </label>
    </BaseNode>
  );
};
