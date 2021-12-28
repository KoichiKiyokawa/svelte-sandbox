import { db } from '$lib/utils/db.server';
import type { User } from '@prisma/client';
import { useHandler } from '$lib/utils/handler.server';

export const get = useHandler(async () => {
	const users = await db.user.findMany();
	return { users };
});

export const post = useHandler<{ Body: User }>(
	async ({ body }) => {
		await db.user.create({ data: body });
	},
	{ status: 201, headers: { location: '/' } }
);
