import { db } from '$lib/utils/db.server';
import { arraify } from '$lib/utils/array';
import { jsonifyRequest } from '$lib/utils/request.server';
import type { Tag, User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export type UserWithTag = User & { tags: Tag[] };

export const get: RequestHandler<{ id: string }, { user: UserWithTag; allTags: Tag[] }> = async ({
	params
}) => {
	const [user, allTags] = await Promise.all([
		db.user.findUnique({ where: { id: params.id }, include: { tags: true } }),
		db.tag.findMany()
	]);

	if (user === null) return { status: 404 };

	return { body: { user, allTags } };
};

export const put: RequestHandler<
	{ id: string },
	{
		errors?: { [K in keyof User]: string };
		errorMessage: string;
	}
> = async ({ request, params }) => {
	const { tagIds, ...data } = await jsonifyRequest<User & { tagIds: string | string[] }>(request);

	await db.user.update({
		data: {
			...data,
			...(tagIds?.length && { tags: { set: arraify(tagIds).map((id) => ({ id })) } })
		},
		where: { id: params.id }
	});
	return {
		status: 302,
		headers: {
			location: `/users/${params.id}`
		}
	};
};
