import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import PesoClient from './pesos-client';
import { useEffect, useState } from 'react';

const PesosPage = async () => {
  const { userId } = auth();
  if (!userId) return null;

  const pesos = await prismadb.peso.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="max-w-7xl mx-auto p-10">
      <PesoClient pesos={pesos} />
    </div>
  );
};

export default PesosPage;
