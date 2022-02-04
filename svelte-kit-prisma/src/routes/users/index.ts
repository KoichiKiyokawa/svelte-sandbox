import type { RequestHandler } from '@sveltejs/kit';
import type { User } from '@prisma/client';
import { db } from '$lib/server/db';

export const get: RequestHandler<{
	users: User[];
	errors: { [K in keyof User]?: string };
}> = async () => {
	const users = await db.user.findMany();

	return {
		body: {
			users
		}
	};
};
