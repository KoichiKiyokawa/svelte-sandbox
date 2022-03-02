import { assertIfNotLoggedIn } from '$lib/server/auth';
import { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ locals }) => {
	try {
		assertIfNotLoggedIn(locals);
	} catch (e) {
		return e as Body;
	}

	return {};
};
