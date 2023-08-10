import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// CREATE POST

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    if (!userId) return null;

    // Check body params
    const {
      peso,
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
      !peso ||
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

    const newPeso = await prismadb.peso.create({
      data: {
        peso,
        grasaCorporal,
        agua,
        grasaVisceral,
        musculo,
        nivelFisico,
        hueso,
        energia,
        edadMetabolica,
        imc,
        userId,
      },
    });

    return NextResponse.json(newPeso);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
  // Check user exists
};
