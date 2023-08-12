'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Copy, Edit, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { es } from 'date-fns/locale';
import { setDefaultOptions, format } from 'date-fns';
import { toast } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CellAction from './cell-action';

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
    cell: ({ row }) => <CellAction peso={row.original} />,
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
    cell: ({ row }) => {
      const masa = row.getValue('masa');
      const formatted = String(masa).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const grasaCorporal = row.getValue('grasaCorporal');
      const formatted = String(grasaCorporal).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const agua = row.getValue('agua');
      const formatted = String(agua).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const grasaVisceral = row.getValue('grasaVisceral');
      const formatted = String(grasaVisceral).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const musculo = row.getValue('musculo');
      const formatted = String(musculo).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const hueso = row.getValue('hueso');
      const formatted = String(hueso).replace('.', ',');
      return formatted;
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
    cell: ({ row }) => {
      const imc = row.getValue('imc');
      const formatted = String(imc).replace('.', ',');
      return formatted;
    },
  },
];
