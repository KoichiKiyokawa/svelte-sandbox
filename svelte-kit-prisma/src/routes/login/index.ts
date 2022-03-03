import { db } from '$lib/utils/db.server';
import { jsonifyRequest } from '$lib/utils/request.server';
import { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const post: RequestHandler = async ({ request, locals }) => {
	const { email, password } = await jsonifyRequest<{ email: string; password: string }>(request);
	const targetUser = await db.user.findUnique({ where: { email } });
	if (targetUser === null) return { status: 404 };

	if (!bcrypt.compareSync(password, targetUser.passwordHash)) return { status: 404 };

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
