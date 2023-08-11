'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import axios from 'axios';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Peso } from '@prisma/client';

const formSchema = z.object({
  fecha: z.date(),
  masa: z.coerce.number().min(1),
  grasaCorporal: z.coerce.number().min(1),
  agua: z.coerce.number().min(1),
  grasaVisceral: z.coerce.number().min(1),
  musculo: z.coerce.number().min(1),
  nivelFisico: z.coerce.number().min(1),
  hueso: z.coerce.number().min(1),
  energia: z.coerce.number().min(1),
  edadMetabolica: z.coerce.number().min(1),
  imc: z.coerce.number().min(1),
});

interface PesoFormProps {
  initialData?: Peso | null;
}

const PesoForm: React.FC<PesoFormProps> = ({ initialData }) => {
  const router = useRouter();
  const params = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      masa: 0,
      grasaCorporal: 0,
      agua: 0,
      grasaVisceral: 0,
      musculo: 0,
      nivelFisico: 0,
      hueso: 0,
      energia: 0,
      edadMetabolica: 0,
      imc: 0,
    },
  });

  const onSubmit = async (peso: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        await axios.patch(`/api/pesos/${params.pesoId}`, peso);
      } else {
        await axios.post('/api/pesos', peso);
      }
      router.refresh();
      toast.success(initialData ? 'Peso Actualizado' : 'Peso Registrado');
      router.push('/pesos');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center gap-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl w-full text-emerald-500 ">
          {initialData ? 'Actualiza tu peso' : 'Registra tu peso'}
        </h2>
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? format(field.value, 'PPP') : <span>Elige una fecha</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Separator className="border-emerald-500 border" /> */}
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FormField
            control={form.control}
            name="masa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso(kg)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grasaCorporal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>G. Corp.(%)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agua"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agua (%)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grasaVisceral"
            render={({ field }) => (
              <FormItem>
                <FormLabel>G. Visc.</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="musculo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Músculo (kg)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nivelFisico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N. Físico</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hueso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hueso (kg)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="energia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Energía (kCal)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="edadMetabolica"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad Met.</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IMC</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="shadow-emerald-500 text-emerald-500 shadow-md text-xl rounded-xl w-5/6 max-w-[200px] mx-auto my-8 hover:bg-emerald-500 hover:text-white duration-500"
          type="submit"
        >
          {initialData ? 'Actualizar peso' : 'Registrar peso'}
        </Button>
      </form>
    </Form>
  );
};

export default PesoForm;
