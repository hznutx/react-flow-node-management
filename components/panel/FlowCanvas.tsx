/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactFlow, Background, Controls, Edge, Node, OnEdgesChange, OnNodesChange, addEdge } from '@xyflow/react';
import CustomNode from '../elements/CustomizeNode';

const nodeTypes = {
  custom: CustomNode,
};

type FlowCanvasProps = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
};

export default function FlowCanvas({ nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges }: FlowCanvasProps) {
  const onConnect = (params: any) => {
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          type: 'smoothstep',
          animated: true,
        },
        eds,
      ),
    );
  };

  const canvasProps = { nodes, edges, onNodesChange, onEdgesChange, onConnect, nodeTypes };

  return (
    <div style={{ flex: 1 }}>
      <ReactFlow
        {...canvasProps}
        onNodeDoubleClick={(_, node) => {
          setNodes((nds) => nds.filter((n) => n.id !== node.id));
          setEdges((eds) => eds.filter((e) => e.source !== node.id && e.target !== node.id));
        }}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
