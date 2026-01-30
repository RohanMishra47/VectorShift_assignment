// BaseNode.js
import { Handle } from "reactflow";

export const BaseNode = ({ id, label, children, handles }) => {
  return (
    <div className="min-w-[150px] bg-white border-2 border-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
      {/* 1. Header Area */}
      <div className="bg-indigo-50 px-3 py-1 border-b border-indigo-100 flex justify-between items-center">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
      </div>

      {/* 2. Content Area */}
      <div className="p-3 text-sm text-gray-700">{children}</div>

      {/* 3. Styled Handles */}
      {handles.map((h, index) => (
        <Handle
          key={`${id}-${index}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          // We use Tailwind classes via 'className' for the handles too!
          className="w-3 h-3 bg-indigo-500 border-2 border-white hover:bg-indigo-600 transition-colors"
          style={h.style}
        />
      ))}
    </div>
  );
};
