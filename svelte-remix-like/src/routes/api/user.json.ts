import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/utils/db.server';
import type { User } from '@prisma/client';

export const get: RequestHandler<null, null, User | { message?: string }> = async (req) => {
	try {
		const users = await db.user.findMany();
		console.log(users);
		return { status: 200, body: { users } };
	} catch (err) {
		console.error(err);
		return { status: 500, body: { message: 'Internal Server Error' } };
	}
};

export const post: RequestHandler<null, User> = async (req) => {
	try {
		await db.user.create({ data: req.body });
		return { status: 201, headers: { location: '/' } };
	} catch (err) {
		console.error(err);
		return { status: 500, body: { message: 'Internal Server Error' } };
	}
};
