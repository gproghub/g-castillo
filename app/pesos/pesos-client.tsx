'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';
import { Peso } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PesosProps {
  pesos: Peso[];
}

const PesoClient: React.FC<PesosProps> = ({ pesos }) => {
  // Truco para evitar problemas de hidratación
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl w-full text-emerald-500 ">Pesos</h2>
        <Button
          onClick={() => router.push('/pesos/new')}
          className="shadow-emerald-500 flex items-center text-emerald-500 shadow-md text-xl rounded-xl hover:bg-emerald-500 hover:text-white dark:hover:text-black duration-500"
        >
          <Plus />
          Añadir
        </Button>
      </div>
      <DataTable columns={columns} data={pesos} />
    </div>
  );
};

export default PesoClient;
