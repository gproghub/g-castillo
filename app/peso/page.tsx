'use client';

import PesoForm from './components/peso-form';

const PesoPage = () => {
  return (
    <div className="px-7 flex flex-col gap-4 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl mt-8 w-full text-emerald-500 my-3">
        Registra tu peso
      </h2>
      <div className="">
        <PesoForm />
      </div>
    </div>
  );
};

export default PesoPage;
