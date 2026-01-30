import { BaseNode } from "./BaseNode";

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Note" handles={[]}>
      <textarea
        placeholder="Reminder..."
        style={{ width: "100%", border: "none", background: "#fff9c4" }}
      />
    </BaseNode>
  );
};
