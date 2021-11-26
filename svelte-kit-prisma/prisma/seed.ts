import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const db = new PrismaClient();

async function seed() {
	await Promise.all(
		Array.from(Array(10).keys()).map((i) =>
			db.user.create({ data: { name: `user${i}`, email: `user${i}@example.com` } })
		)
	);
}

seed();
