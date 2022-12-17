import { UserService } from '~/services/user.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ platform }) => {
	const userService = new UserService(platform.env.DB);
	return {
		users: userService.findAll()
	};
};
