import { db } from '$lib/utils/db.server';
import {
	getCurrentUserByCookie as getCurrentUserByCookies,
	jsonifyRequest
} from '$lib/utils/request.server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const currentUser = await getCurrentUserByCookies(cookies);

	const data = await db.article.findMany({
		include: {
			author: { select: { id: true, name: true } },
			tags: true,
			likes: { where: { userId: currentUser.id } },
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
		const user = await getCurrentUserByCookies(cookies);
		const data = await jsonifyRequest<PostParams>(request);

		const existingLike = await db.like.findFirst({
			where: { articleSlug: data.articleSlug, userId: user.id }
		});
		if (existingLike) {
			await db.like.delete({ where: { id: existingLike.id } });
		} else {
			await db.like.create({
				data: { articleSlug: data.articleSlug, userId: user.id }
			});
		}
		return {};
	}
};
