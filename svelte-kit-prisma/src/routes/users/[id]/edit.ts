import { db } from '$lib/server/db';
import { arrayify } from '$lib/utils/array';
import { requestToJson } from '$lib/utils/request';
import type { Tag, User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export type UserWithTag = User & { tags: Tag[] };

export const get: RequestHandler<{ user: UserWithTag; allTags: Tag[] }> = async ({ params }) => {
	const [user, allTags] = await Promise.all([
		db.user.findUnique({ where: { id: params.id }, include: { tags: true } }),
		db.tag.findMany()
	]);

	if (user === null) return { status: 404 };

	return { body: { user, allTags } };
};

export const put: RequestHandler<{
	errors?: { [K in keyof User]: string };
	errorMessage: string;
}> = async ({ request, params }) => {
	const { tagIds, ...data } = await requestToJson<User & { tagIds: string | string[] }>(request);

	await db.user.update({
		data: {
			...data,
			...(tagIds?.length && { tags: { set: arrayify(tagIds).map((id) => ({ id })) } })
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
