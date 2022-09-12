import { getCurrentUserByCookie } from '$lib/utils/request.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	try {
		await getCurrentUserByCookie(cookies);
		return { isLoggedIn: true };
	} catch {
		return { isLoggedIn: false };
	}
};
