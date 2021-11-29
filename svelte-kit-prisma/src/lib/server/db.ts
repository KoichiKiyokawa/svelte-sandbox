import Prisma, * as PrismaAll from '@prisma/client';

// cf) https://github.com/mikenikles/sveltekit-prisma/blob/main/src/lib/prisma.ts
const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient;

export const db = new PrismaClient();
