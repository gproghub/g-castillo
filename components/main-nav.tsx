import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface MainNavProps {
  mobile: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ mobile }) => {
  const router = useRouter();
  const routes = [
    {
      name: 'Peso',
      href: `/peso`,
    },
    {
      name: 'Cuentas',
      href: `/cuentas`,
    },
    {
      name: 'Recetas',
      href: `/recetas`,
    },
  ];
  return (
    <div className={mobile ? 'flex flex-col text-white text-4xl items-center pt-20 gap-y-10' : 'flex gap-x-4 lg:text-lg'}>
      {routes.map((route) => (
        <Link key={route.name} href={route.href} className="hover:scale-110 duration-200 hover:text-emerald-500">
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
