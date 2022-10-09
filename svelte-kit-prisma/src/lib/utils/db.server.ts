import { PrismaClient } from '@prisma/client';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

let prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!globalThis.prisma) {
		globalThis.prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
	}
	prisma = globalThis.prisma;
}

export const db = prisma;
