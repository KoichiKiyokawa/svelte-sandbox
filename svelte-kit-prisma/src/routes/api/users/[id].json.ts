import { userSchema } from '$lib/common/domains/user';
import { db } from '$lib/server/db';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<unknown, unknown, User> = async ({ params }) => {
	const user = await db.user.findUnique({ where: { id: params.id } });
	return { body: user ?? undefined };
};

export const put: RequestHandler<unknown, User, User> = async ({ body, params }) => {
	const user = await db.user.update({ where: { id: params.id }, data: userSchema.parse(body) });
	return { body: user };
};
