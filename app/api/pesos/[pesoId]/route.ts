import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// UPDATE PESO
export const PATCH = async (req: Request, { params }: { params: { pesoId: string } }) => {
  try {
    //Check params exists
    if (!params.pesoId) return new NextResponse('pesoId requerido');

    // Check user exists
    const { userId } = auth();
    if (!userId) return new NextResponse('Unautenticated', { status: 401 });

    // Check body params exist
    const {
      fecha,
      masa,
      grasaCorporal,
      agua,
      grasaVisceral,
      musculo,
      nivelFisico,
      hueso,
      energia,
      edadMetabolica,
      imc,
    } = await req.json();
    if (
      !fecha ||
      !masa ||
      !grasaCorporal ||
      !agua ||
      !grasaVisceral ||
      !musculo ||
      !nivelFisico ||
      !hueso ||
      !energia ||
      !edadMetabolica ||
      !imc
    ) {
      return new NextResponse('All the fields are required', { status: 400 });
    }

    // Update peso
    const updatedPeso = await prismadb.peso.update({
      where: {
        id: params.pesoId,
      },
      data: {
        fecha,
        masa,
        grasaCorporal,
        agua,
        grasaVisceral,
        musculo,
        nivelFisico,
        hueso,
        energia,
        edadMetabolica,
        imc,
      },
    });
    return NextResponse.json(updatedPeso);
  } catch (error) {
    console.log('[PESO_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
};
