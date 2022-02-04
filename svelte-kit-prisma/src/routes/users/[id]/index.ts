import { db } from '$lib/server/db';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<{ user: User }> = async ({ params }) => {
	const user = await db.user.findUnique({ where: { id: params.id } });
	if (user === null) return { status: 404 };

	return { body: { user } };
};
