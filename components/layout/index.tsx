'use client';

import { useState } from 'react';
import { MenuIcon } from '@/components/icons';

const Navbar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);

  return (
    <nav className='fixed top-0 z-10 xl:hidden justify-between h-16 text-background bg-foreground shadow w-full flex px-5 items-center'>
      <h2>FlowSnap</h2>
      <button
        className='cursor-pointer hidden'
        onClick={() => setToggleMobile((prev) => !prev)}
      >
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
