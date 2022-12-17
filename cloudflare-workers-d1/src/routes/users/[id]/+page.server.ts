import { UserRepository } from '~/features/user/repository.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ platform, params }) => {
	const userRepository = new UserRepository(platform.env.DB);
	return {
		user: userRepository.findOne(Number(params.id))
	};
};
