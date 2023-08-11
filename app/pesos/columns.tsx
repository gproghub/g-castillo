'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Copy, Edit, MoreHorizontal } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PesoColumn = {
  id: string;
  masa: number;
  grasaCorporal: number;
  agua: number;
  grasaVisceral: number;
  musculo: number;
  nivelFisico: number;
  hueso: number;
  energia: number;
  edadMetabolica: number;
  imc: number;
};

const onCopy = (id: string) => {
  navigator.clipboard.writeText(id);
  toast.success('Size Id copied to the clipboard.');
};

export const columns: ColumnDef<PesoColumn>[] = [
  {
    accessorKey: 'masa',
    header: 'Masa (kg)',
  },
  {
    accessorKey: 'grasaCorporal',
    header: 'Grasa Corp. (%)',
  },
  {
    accessorKey: 'agua',
    header: 'Agua (%)',
  },
  {
    accessorKey: 'grasaVisceral',
    header: 'Grasa Visc. (%)',
  },
  {
    accessorKey: 'musculo',
    header: 'Músculo (kg)',
  },
  {
    accessorKey: 'nivelFisico',
    header: 'Nivel Fisico',
  },
  {
    accessorKey: 'hueso',
    header: 'Hueso (kg)',
  },
  {
    accessorKey: 'energia',
    header: 'Energía (kCal)',
  },
  {
    accessorKey: 'edadMetabolica',
    header: 'Edad Metabólica',
  },
  {
    accessorKey: 'imc',
    header: 'IMC',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const router = useRouter();
      const peso = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              {/* sr-only means it will only be visible to screen readers */}
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-black border-none rounded-xl shadow-md shadow-emerald-500"
          >
            <DropdownMenuItem
              onClick={() => onCopy(peso.id)}
              className="cursor-pointer hover:text-emerald-500"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy id
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/pesos/${peso.id}`)}
              className="cursor-pointer hover:text-emerald-500"
            >
              <Edit className="h-4 w-4 mr-2" />
              Update
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
