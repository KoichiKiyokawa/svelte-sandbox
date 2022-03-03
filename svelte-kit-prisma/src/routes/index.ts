import { useAuthorizedHandler } from '$lib/utils/request.server';
import { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = useAuthorizedHandler(() => {
	return {};
});
