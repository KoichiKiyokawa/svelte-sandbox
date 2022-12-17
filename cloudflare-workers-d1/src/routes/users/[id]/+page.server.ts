import { UserService } from '~/services/user.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ platform, params }) => {
	const userService = new UserService(platform.env.DB);
	return {
		user: userService.findOne(Number(params.id))
	};
};
