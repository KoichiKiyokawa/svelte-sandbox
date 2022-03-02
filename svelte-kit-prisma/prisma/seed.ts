import bcrypt from 'bcryptjs';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const db = new PrismaClient();

async function seed() {
	await db.user.deleteMany();
	await db.tag.deleteMany();

	for (let i = 1; i <= 10; i++) {
		await db.user.create({
			data: {
				name: `user${i}`,
				email: `user${i}@example.com`,
				passwordHash: bcrypt.hashSync('hogehoge')
			}
		});
	}

	for (let i = 1; i <= 10; i++) {
		await db.tag.create({ data: { name: `tag${i}` } });
	}
}

seed();
