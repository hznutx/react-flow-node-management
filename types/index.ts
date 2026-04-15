/* eslint-disable @typescript-eslint/no-explicit-any */
export type NodeData = {
  label: string;
  type: 'trigger' | 'action' | 'function';
  config?: any;
};
