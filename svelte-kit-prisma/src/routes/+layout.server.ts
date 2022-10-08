import { getCurrentUserByCookie } from '$lib/utils/request.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies, depends }) => {
	// to revalidate every time the page is changed
	depends(url.pathname);
	console.log('layout server load');
	try {
		await getCurrentUserByCookie(cookies);
		return { isLoggedIn: true };
	} catch {
		return { isLoggedIn: false };
	}
};
