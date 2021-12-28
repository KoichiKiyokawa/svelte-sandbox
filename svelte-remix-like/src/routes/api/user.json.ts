import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (req) => {
	console.log(req.body);
	return {
		status: 302,
		headers: {
			Location: '/',
			'Content-Type': 'text/html'
		}
	};
};
