import { CookieKeys } from '$lib/constants/cookie';
import { db } from '$lib/utils/db.server';
import { jsonifyRequest } from '$lib/utils/request.server';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Actions } from './$types';

export const actions: Actions = {
	async login({ request, cookies }) {
		const { email, password } = await jsonifyRequest<{ email: string; password: string }>(request);
		const targetUser = await db.user.findUnique({ where: { email } });
		const noUserResponse = { status: 404, body: { error: 'No user found' } };

		if (targetUser === null) return noUserResponse;
		if (!bcrypt.compareSync(password, targetUser.passwordHash)) return noUserResponse;

		// TODO: encrypt the value
		cookies.set(CookieKeys.CurrentUser, targetUser.id);

		throw redirect(303, '/');
	},
	async logout({ cookies }) {
		cookies.delete(CookieKeys.CurrentUser);
		throw redirect(303, '/login');
	}
};
