import { db } from '$lib/server/db';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<User> = async ({ params }) => {
	const user = await db.user.findUnique({ where: { id: params.id } });
	return { body: { user } };
};
