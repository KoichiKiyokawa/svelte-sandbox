import { db } from '$lib/db';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<unknown, unknown, User[]> = async () => {
	const users = await db.user.findMany();

	return { body: users };
};

export const post: RequestHandler<unknown, User, User> = async ({ body }) => {
	const user = await db.user.create({ data: body });
	return { body: user };
};
