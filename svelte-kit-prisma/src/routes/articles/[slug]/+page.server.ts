import { db } from '$lib/utils/db.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const article = await db.article.findUnique({ where: { slug: params.slug } });
	return { article };
};
