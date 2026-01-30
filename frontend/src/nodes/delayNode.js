import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Delay" handles={[]}>
      <input type="number" placeholder="Delay (ms)" />
    </BaseNode>
  );
};
