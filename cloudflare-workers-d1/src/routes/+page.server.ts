import { UserRepository } from '~/features/user/repository.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	const userRepository = new UserRepository(event.platform.env.DB);
	return {
		users: userRepository.findAll()
	};
};
