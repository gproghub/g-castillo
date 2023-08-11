import PesoForm from './components/peso-form';
import prismadb from '@/lib/prismadb';

const PesoPage = async ({ params }: { params: { pesoId: string } }) => {
  const peso = await prismadb.peso.findUnique({
    where: {
      id: params.pesoId,
    },
  });
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <PesoForm initialData={peso} />
    </div>
  );
};

export default PesoPage;
