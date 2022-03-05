import bcrypt from 'bcryptjs';
import pkg from '@prisma/client';
import dayjs from 'dayjs';
const { PrismaClient } = pkg;

const db = new PrismaClient();

async function seed() {
	await db.like.deleteMany();
	await db.tag.deleteMany();
	await db.article.deleteMany();
	await db.user.deleteMany();

	await seedPosts();
	await seedArticles();
	await seedTags();
}

async function seedPosts() {
	for (let i = 1; i <= 10; i++) {
		await db.user.create({
			data: {
				name: `User ${i}`,
				email: `user${i}@example.com`,
				passwordHash: bcrypt.hashSync('password'),
				birthday: dayjs().subtract(i, 'day').toDate()
			}
		});
	}
}

async function seedArticles() {
	const [user1, user2] = await db.user.findMany({ take: 2 });
	await db.article.create({
		data: { authorId: user1.id, title: 'user1-title1', body: 'user1-body1' }
	});
	await db.article.create({
		data: { authorId: user2.id, title: 'user2-title1', body: 'user2-body1' }
	});
}

async function seedTags() {
	const [article1, article2] = await db.article.findMany({ take: 2 });
	await db.tag.create({
		data: { name: 'food', articleSlug: article1.slug }
	});
	await db.tag.create({
		data: { name: 'tech', articleSlug: article2.slug }
	});
}

seed();
