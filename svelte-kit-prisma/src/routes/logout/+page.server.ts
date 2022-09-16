import { CookieKeys } from '$lib/constants/cookie';
import { db } from '$lib/utils/db.server';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	async default({ cookies }) {
		const sessionId = cookies.get(CookieKeys.CurrentUser);
		await db.session.delete({ where: { id: sessionId } });
		cookies.delete(CookieKeys.CurrentUser);
		throw redirect(303, '/login');
	}
};
