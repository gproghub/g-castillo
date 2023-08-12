import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Copy, Edit, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import { PesoColumn } from './columns';

interface CellActionProps {
  peso: PesoColumn;
}

const onCopy = (id: string) => {
  navigator.clipboard.writeText(id);
  toast.success('Size Id copied to the clipboard.');
};

const CellAction: React.FC<CellActionProps> = ({ peso }) => {
  const router = useRouter();

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
            onClick={() => router.push(`pesos/${peso.id}`)}
            className="cursor-pointer hover:text-emerald-500"
          >
            <Edit className="h-4 w-4 mr-2" />
            Actualizar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;
