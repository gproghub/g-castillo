import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

interface MainNavProps {
  mobile: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ mobile }) => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      name: 'Peso',
      href: `/pesos`,
      active: pathname.includes('/pesos'),
    },
    {
      name: 'Cuentas',
      href: `/cuentas`,
      active: pathname === '/cuentas',
    },
    {
      name: 'Recetas',
      href: `/recetas`,
      active: pathname === '/recetas',
    },
  ];
  return (
    <div
      className={
        mobile
          ? 'flex flex-col text-white text-4xl items-center pt-20 gap-y-10'
          : 'flex gap-x-4 lg:text-lg'
      }
    >
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          className={cn(
            'hover:scale-110 duration-200 hover:text-emerald-500',
            route.active && 'text-emerald-500'
          )}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
  // "hover:scale-110 duration-200 hover:text-emerald-500"
};

export default MainNav;
