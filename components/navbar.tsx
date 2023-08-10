'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import MainNav from './main-nav';
import { ModeToggle } from './mode-toggle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useAuth();

  return (
    <div className="flex items-center justify-between px-3 py-3">
      <div className="flex gap-x-7 items-center justify-between w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl cursor-pointer font-bold tracking-wider" onClick={() => router.push('/')}>
          Castillo
        </h1>
        {userId && (
          <div className="mx-5">
            <Menu className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)} />
            <div className="hidden md:block font-semibold">
              <MainNav mobile={false} />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-90 z-10 flex flex-col items-center p-5">
          <X className="text-white self-end cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          <MainNav mobile={true} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
