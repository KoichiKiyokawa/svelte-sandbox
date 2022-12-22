import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	return {
		users: event.locals.userRepository.findAll()
	};
};
