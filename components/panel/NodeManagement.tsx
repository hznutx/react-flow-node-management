/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback } from 'react';

export const pastelColors = ['#6B9AC4', '#8E7DBE', '#E598B8', '#D66BA0', '#7FB3D5', '#5BC0BE', '#6FCF97', '#E9C46A', '#F4A261', '#E76F51', '#90BE6D', '#48CAE4'];

export const getRandomColor = () => {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};

export function TextUpdaterNode(props: any) {
  const onChange = useCallback((e: any) => {
    console.log(e.target.value);
  }, []);

  return (
    <div className='text-updater-node'>
      <div>
        <label htmlFor='text'>Text:</label>
        <input
          id='text'
          name='text'
          onChange={onChange}
          className='nodrag'
        />
      </div>
    </div>
  );
}
