import { Table } from '@tanstack/react-table';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="hidden sm:flex items-center space-x-2">
          <p className="text-sm font-medium">Filas por página</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] border-none text-emerald-500 rounded-xl shadow-md shadow-emerald-500  bg-white dark:bg-black">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent
              side="top"
              className="border-none rounded-xl shadow-md shadow-emerald-500 bg-white dark:bg-black"
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`} className="cursor-pointer">
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            className="hidden h-8 w-8 p-0 lg:flex shadow-emerald-500 items-center text-emerald-500 shadow-md text-xl rounded-xl hover:bg-emerald-500 hover:text-white duration-500 "
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            className="h-8 w-8 p-0 flex shadow-emerald-500 items-center text-emerald-500 shadow-md text-xl rounded-xl hover:bg-emerald-500 hover:text-white duration-500 "
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            className="h-8 w-8 p-0 flex shadow-emerald-500 items-center text-emerald-500 shadow-md text-xl rounded-xl hover:bg-emerald-500 hover:text-white duration-500 dark:hover:text-black"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            className="hidden h-8 w-8 p-0 lg:flex shadow-emerald-500 items-center text-emerald-500 shadow-md text-xl rounded-xl hover:bg-emerald-500 hover:text-white duration-500 dark:hover:text-black"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
