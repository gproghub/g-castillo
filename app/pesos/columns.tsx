'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Copy, Edit, MoreHorizontal, ArrowUpDown, Trash } from 'lucide-react';
import { es } from 'date-fns/locale';
import axios from 'axios';
import { setDefaultOptions, format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8 p-0" variant="ghost">
                {/* sr-only means it will only be visible to screen readers */}
                <span className="sr-only">Open menu</span>
                <MoreHorizontal
                  className="
                text-emerald-500
                shadow-md
                shadow-emerald-500
                rounded-xl
                hover:bg-emerald-500
                hover:text-white
                dark:hover:text-black
                duration-500
                text-base
                p-1 
                "
                />
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
                Copiar id
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push(`/pesos/${peso.id}`)}
                className="cursor-pointer hover:text-emerald-500"
              >
                <Edit className="h-4 w-4 mr-2" />
                Actualizar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
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
