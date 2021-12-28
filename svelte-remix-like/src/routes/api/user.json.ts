import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (req) => {
	console.log(req.body);
	return {
		status: 201,
		headers: {
			location: '/'
		}
	};
};
