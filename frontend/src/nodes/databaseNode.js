import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Database" handles={[]}>
      <input type="text" placeholder="DB Connection String" />
    </BaseNode>
  );
};
