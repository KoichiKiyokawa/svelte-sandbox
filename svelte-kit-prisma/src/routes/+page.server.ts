import { CookieKeys } from '$lib/constants/cookie';
import { db } from '$lib/utils/db.server';
import { jsonifyRequest } from '$lib/utils/request.server';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const currentUserId = cookies.get(CookieKeys.CurrentUser);
	if (currentUserId === undefined) throw redirect(302, '/login');

	const data = await db.article.findMany({
		include: {
			author: { select: { id: true, name: true } },
			tags: true,
			likes: { where: { userId: currentUserId } },
			_count: { select: { likes: true } }
		}
	});

	return {
		articles: data.map((d) => ({
			...d,
			likeCount: d._count.likes,
			hasLiked: d.likes.length > 0
		}))
	};
};

export type PostParams = { articleSlug: string };

export const actions: Actions = {
	async default({ request, cookies }) {
		const userId = cookies.get(CookieKeys.CurrentUser);
		if (userId === undefined) throw redirect(302, '/login');

		const data = await jsonifyRequest<PostParams>(request);

		const existingLike = await db.like.findFirst({
			where: { articleSlug: data.articleSlug, userId }
		});
		if (existingLike) {
			await db.like.delete({ where: { id: existingLike.id } });
		} else {
			await db.like.create({
				data: { articleSlug: data.articleSlug, userId }
			});
		}
		return {};
	}
};
