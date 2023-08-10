import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 py-3">
      {/* <div className="flex gap-x-7 items-center justify-center"> */}
      {/* <h1 className="text-xl md:text-3xl">Castillo</h1> */}
      {/* {userId && <MainNav />} */}
      {/* </div> */}

      <div className="flex items-center gap-x-3">
        {/* <ModeToggle /> */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
