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
import { Copy, Edit, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { DatePickerDemo } from '@/components/ui/date-picker';
import { es } from 'date-fns/locale';
import { setDefaultOptions, format } from 'date-fns';

setDefaultOptions({ locale: es });

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PesoColumn = {
  id: string;
  fecha: Date;
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
    accessorKey: 'fecha',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Fecha</p>
        </Button>
      );
    },
    cell: ({ row }) => {
      const fecha: Date = row.getValue('fecha');
      const formattedDate = format(fecha, "dd'/'MM'/'y");
      return formattedDate;
    },
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
            align="start"
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
  {
    accessorKey: 'masa',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Masa (kg)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'grasaCorporal',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">G.Corp (%)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'agua',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Agua (%)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'grasaVisceral',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">G.Vis (%)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'musculo',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Músc (kg)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'nivelFisico',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Nivel Físico</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'hueso',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Hueso (kg)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'energia',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">Energía (kCal)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'edadMetabolica',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">E.Met (años)</p>
        </Button>
      );
    },
  },
  {
    accessorKey: 'imc',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex items-center justify-center w-16 p-0 my-2"
        >
          <ArrowUpDown className="text-center text-2xl  w-3 h-3 text-emerald-500" />
          <p className=" w-12">IMC</p>
        </Button>
      );
    },
  },
];
