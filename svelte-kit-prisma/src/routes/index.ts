import { db } from '$lib/utils/db.server';
import { jsonifyRequest, useAuthorizedHandler } from '$lib/utils/request.server';
import type { Article, Tag, User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export type ArticleWithAuthorAndTag = Article & {
	author: Pick<User, 'id' | 'name'>;
	tags: Tag[];
	likeCount: number;
	hasLiked: boolean;
};

export const get: RequestHandler<unknown, { articles: ArticleWithAuthorAndTag[] }> =
	useAuthorizedHandler(async ({ locals }) => {
		const currentUserId = locals.session.data.userId;

		const data = await db.article.findMany({
			include: {
				author: { select: { id: true, name: true } },
				tags: true,
				likes: { where: { userId: currentUserId } },
				_count: { select: { likes: true } }
			}
		});

		return {
			status: 200,
			body: {
				articles: data.map((d) => ({
					...d,
					likeCount: d._count.likes,
					hasLiked: d.likes.length > 0
				}))
			}
		};
	});

export type PostParams = { articleSlug: string };
export const post: RequestHandler<PostParams> = useAuthorizedHandler(
	async ({ request, locals }) => {
		const data = await jsonifyRequest<PostParams>(request);
		const { userId } = locals.session.data;
		if (userId === undefined) return {};

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
);
