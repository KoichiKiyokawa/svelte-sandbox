import { CookieKeys } from '$lib/constants/cookie';
import { db } from '$lib/utils/db.server';
import { jsonifyRequest } from '$lib/utils/request.server';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import type { Actions } from './$types';

export const actions: Actions = {
	async default({ request, cookies }) {
		const { email, password } = await jsonifyRequest<{ email: string; password: string }>(request);
		const targetUser = await db.user.findUnique({ where: { email } });
		const noUserResponse = { error: 'No user found' };

		if (targetUser === null) return noUserResponse;
		if (!bcrypt.compareSync(password, targetUser.passwordHash)) return noUserResponse;

		const data = { userId: targetUser.id, expireAt: dayjs().add(7, 'day').toDate() };
		const session = await db.session.upsert({
			create: data,
			update: data,
			where: { userId: targetUser.id }
		});
		cookies.set(CookieKeys.CurrentUser, session.id);

		throw redirect(302, '/');
	}
};
