import { db } from '$lib/server/db';
import { jsonifyRequest } from '$lib/utils/request';
import { Todo } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<{ todos: Todo[] }> = async () => {
	const todos = await db.todo.findMany();

	return {
		body: { todos }
	};
};

export const post: RequestHandler = async ({ request }) => {
	const data = await jsonifyRequest<Todo>(request);
	await db.todo.create({ data });
	return { status: 200 };
	// return {
	// 	status: 302,
	// 	headers: { location: '/todos' }
	// };
};
