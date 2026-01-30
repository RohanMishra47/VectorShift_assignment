import { BaseNode } from "./BaseNode";

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Transform" handles={[]}>
      <input type="text" placeholder="Transformation Logic" />
    </BaseNode>
  );
};
