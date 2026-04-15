'use client';

import { useNodesState, useEdgesState, ReactFlowProvider, type Node, type Edge } from '@xyflow/react';

import SideBarMenu from './SideBarMenu';
import FlowCanvas from './FlowCanvas';
import '@xyflow/react/dist/style.css';

export default function Builder() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  return (
    <ReactFlowProvider>
      <div style={{ display: 'flex', height: '100vh' }}>
        <SideBarMenu
          setNodes={setNodes}
          setEdges={setEdges}
        />
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        />
      </div>
    </ReactFlowProvider>
  );
}
