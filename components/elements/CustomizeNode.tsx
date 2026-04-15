'use client';
import { Handle, Position } from '@xyflow/react';

export default function CustomNode({ data }: { data: { label: string; type: string; color?: string } }) {
  const edges = {
    background: '#fff',
    border: '1px solid #ccc',
  };
  return (
    <div
      style={{
        padding: 10,
        border: '2px solid #ccc',
        borderRadius: 8,
        ...(data.color && { background: data.color }),
        color: 'white',
        minWidth: 120,
      }}
    >
      <div>{data.label}</div>
      <Handle
        type='target'
        style={edges}
        position={Position.Top}
      />
      <Handle
        type='source'
        style={edges}
        position={Position.Bottom}
      />
    </div>
  );
}
