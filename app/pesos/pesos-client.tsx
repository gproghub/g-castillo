'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';
import { Peso } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { LineChart, Plus, Table2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import PesosGraficos from './pesos-graficos';

interface PesosProps {
  pesos: Peso[];
}

const PesoClient: React.FC<PesosProps> = ({ pesos }) => {
  const router = useRouter();
  const [enVistaTabla, setEnVistaTabla] = useState(true);
  console.log(enVistaTabla);

  // Truco para evitar problemas de hidratación
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl w-full text-emerald-500 ">{`Pesos - ${
            enVistaTabla ? 'Tabla' : 'Gráficos'
          }`}</h2>
          <div className=" flex">
            <Button
              variant="default"
              className="h-10 w-10 p-0 flex shadow-emerald-500 items-center text-emerald-500 rounded-l-xl shadow-md text-xl  hover:bg-emerald-500 hover:text-white duration-500 dark:hover:text-black"
              onClick={() => setEnVistaTabla(true)}
              disabled={enVistaTabla}
            >
              <Table2 />
            </Button>
            <Button
              variant="default"
              className="h-10 w-10 p-0 flex shadow-emerald-500 items-center text-emerald-500 rounded-r-xl shadow-md text-xl  hover:bg-emerald-500 hover:text-white duration-500 dark:hover:text-black"
              onClick={() => setEnVistaTabla(false)}
              disabled={!enVistaTabla}
            >
              <LineChart />
            </Button>
          </div>
        </div>
        <Button
          onClick={() => router.push('/pesos/new')}
          className="
          shadow-emerald-500
           flex 
           items-center
           text-emerald-500
           shadow-md
           rounded-xl
           hover:bg-emerald-500
           hover:text-white
           dark:hover:text-black
           duration-500
           text-base 
           md:text-xl 
           lg:text-2xl"
        >
          <Plus />
          <p className="hidden sm:flex">Añadir</p>
        </Button>
      </div>
      {enVistaTabla ? (
        <DataTable columns={columns} data={pesos} />
      ) : (
        <PesosGraficos pesos={pesos} />
      )}
    </div>
  );
};

export default PesoClient;
