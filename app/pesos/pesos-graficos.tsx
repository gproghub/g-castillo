import { Peso } from '@prisma/client';
import { format } from 'date-fns';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PesosGraficosProps {
  pesos: Peso[];
}

const PesosGraficos: React.FC<PesosGraficosProps> = ({ pesos }) => {
  console.log('pesos', pesos);
  const formattedPesos = pesos.map((peso) => ({
    ...peso,
    fecha: format(peso.fecha, 'dd/MM'),
  }));
  console.log(formattedPesos);

  return (
    <div className="flex flex-col  gap-10">
      {/*  */}
      {/* MASA */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Masa (kg)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="masa" tickSize={10} domain={[74, 82]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="masa"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* GRASA CORPORAL */}

      <div className="h-96 w-5/6 mx-auto my-3 ">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Grasa Corporal (%)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="grasaCorporal" tickSize={10} domain={[5, 15]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="grasaCorporal"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* AGUA */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Agua (%)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="agua" tickSize={10} domain={[58, 70]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="agua"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* GRASA VISCERAL */}

      <div className="h-96 w-5/6 mx-auto my-3 ">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Grasa Visceral </h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="grasaVisceral" tickSize={10} domain={[0, 5]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="grasaVisceral"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* MÚSCULO */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Músculo (kg)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="musculo" tickSize={10} domain={[62, 76]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="musculo"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* NIVEL FÍSICO */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Nivel Físico</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="nivelFisico" tickSize={10} domain={[2, 10]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="nivelFisico"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* HUESO */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Hueso (kg)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="hueso" tickSize={10} domain={[2, 5]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="hueso"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* ENERGÍA */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Energía (kCal)</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="energia" tickSize={10} domain={[1900, 2200]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="energia"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/*EDAD METABÓLICA */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">Edad Metabólica</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="edadMetabolica" tickSize={10} domain={[15, 30]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="edadMetabolica"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      {/* IMC */}

      <div className="h-96 w-5/6 mx-auto my-3">
        <h1 className="text-base md:text-xl lg:text-2xl mb-2">IMC</h1>
        <ResponsiveContainer>
          <LineChart
            data={formattedPesos}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 15,
            }}
            className="text-sm shadow-md shadow-emerald-500 rounded-xl bg-white dark:bg-black"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tickSize={10} reversed />
            <YAxis dataKey="imc" tickSize={10} domain={[20, 25]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="imc"
              stroke="#10b981"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PesosGraficos;
