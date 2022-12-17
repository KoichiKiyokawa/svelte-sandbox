import { getCurrentUserByCookie } from '$lib/utils/request.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies, depends }) => {
	// to revalidate every time the page is changed
	depends(url.pathname);
	const currentUser = await getCurrentUserByCookie(cookies);
	return { currentUser };
};
