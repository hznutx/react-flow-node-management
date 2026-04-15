/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import type { Node, Edge } from '@xyflow/react';
import { getRandomColor } from './NodeManagement';
import { useState } from 'react';

type SidebarProps = {
  toggleMobile?: boolean;
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
};

export default function Sidebar({ setNodes, toggleMobile }: SidebarProps) {
  const [form, setForm] = useState({
    label: '',
    type: 'single',
  });
  const [errText, setErrText] = useState<string | undefined>(undefined);

  const menu: any[] = [
    //{
    //  label: <p className='inline-flex items-center gap-2'>+ Add Node</p>,
    //  onclick: () => {},
    //},
  ];

  return (
    <aside className={`${toggleMobile ? 'block duration-300 transition-transform' : 'hidden'} xl:block relative space-y-5 py-10 w-full px-5 xl:max-w-xs z-10 text-white bg-[#111]`}>
      <h4 className='font-semibold'>Dashboard</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (form.label === '') {
            setErrText('Not submit without label name');
            return;
          }

          setNodes((nds) => [
            ...nds,
            {
              id: `node-${nds.length}`,
              position: {
                x: Math.random() * 400,
                y: Math.random() * 400,
              },
              data: {
                label: form.label || 'New Node',
                type: form.type,
                color: getRandomColor(),
              },
              type: 'custom',
            },
          ]);

          setForm({ label: '', type: 'single' });
          setErrText(undefined);
        }}
        className='space-y-3'
      >
        <input
          type='text'
          placeholder='Label Name'
          value={form.label}
          onChange={(e) => setForm((prev) => ({ ...prev, label: e.target.value }))}
          className='w-full px-3 py-2 rounded-xl bg-stone-800 border border-stone-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500'
        />
        <select
          value={form.type}
          onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
          className='w-full px-3 py-2 rounded-xl bg-stone-800 border border-stone-600 text-white'
        >
          <option value='single'>Single</option>
          <option value='multiple'>Multiple</option>
        </select>
        <button
          type='submit'
          className='w-full bg-teal-600 hover:bg-teal-500 rounded-xl py-2'
        >
          Add Node
        </button>
        {errText && <p className='text-xs text-red-400'>{errText}</p>}{' '}
      </form>
      {menu?.map((item, i) => (
        <button
          className='cursor-pointer bg-stone-700 hover:bg-stone-500 text-white rounded-xl w-full shadow py-3 px-8'
          onClick={item?.onclick}
          key={i}
        >
          {item?.label}
        </button>
      ))}
      <p className='text-xs text-gray-400'>PS. Double click on module to remove</p>
    </aside>
  );
}
