import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Math" handles={[]}>
      <input type="text" placeholder="Expression (e.g., a + b)" />
    </BaseNode>
  );
};
