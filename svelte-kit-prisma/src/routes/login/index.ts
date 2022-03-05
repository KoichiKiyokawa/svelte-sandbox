import { db } from '$lib/utils/db.server';
import { jsonifyRequest } from '$lib/utils/request.server';
import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const post: RequestHandler = async ({ request, locals }) => {
	const { email, password } = await jsonifyRequest<{ email: string; password: string }>(request);
	const targetUser = await db.user.findUnique({ where: { email } });
	const noUserResponse = { status: 404, body: { error: 'No user found' } };

	if (targetUser === null) return noUserResponse;
	if (!bcrypt.compareSync(password, targetUser.passwordHash)) return noUserResponse;

	locals.session.data = { userId: targetUser.id };

	return {
		status: 302,
		headers: {
			location: '/'
		}
	};
};

export const del: RequestHandler = async ({ locals }) => {
	locals.session.data = {};

	return {
		status: 302,
		headers: {
			location: '/login'
		}
	};
};
