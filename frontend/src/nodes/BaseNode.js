// BaseNode.js - The reusable abstraction
import { Handle } from "reactflow";

export const BaseNode = ({ id, label, children, handles }) => {
  return (
    <div
      style={{
        border: "1px solid #777",
        padding: "10px",
        borderRadius: "5px",
        background: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "5px",
          borderBottom: "1px solid #eee",
        }}
      >
        {label}
      </div>

      {/* Content Area (Where the inputs go) */}
      <div>{children}</div>

      {/* Dynamic Handles */}
      {handles.map((h, index) => (
        <Handle
          key={`${id}-${index}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style}
        />
      ))}
    </div>
  );
};
