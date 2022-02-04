import { db } from '$lib/server/db';
import { requestToJson } from '$lib/utils/request';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<{ user: User }> = async ({ params }) => {
	const user = await db.user.findUnique({ where: { id: params.id } });
	if (user === null) return { status: 404 };

	return { body: { user } };
};

export const put: RequestHandler = async ({ request, params }) => {
	const data = await requestToJson<User>(request);

	await db.user.update({ data, where: { id: params.id } });
	return {
		status: 302,
		headers: {
			location: `/users/${params.id}`
		}
	};
};
