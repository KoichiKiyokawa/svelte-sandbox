/**
 * [SyntaxError: Named export 'PrismaClient' not found. The requested module '@prisma/client' is a CommonJS module, which may not support all module.exports as named exports.
 * CommonJS modules can always be imported via the default export, for example using:
 */
import pkg from '@prisma/client';
import type { PrismaClient as TPrismaClient } from '@prisma/client';
const { PrismaClient } = pkg;

declare global {
	// eslint-disable-next-line no-var
	var prisma: TPrismaClient;
}

let prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!globalThis.prisma) {
		globalThis.prisma = new PrismaClient();
	}
	prisma = globalThis.prisma;
}

export const db = prisma;
