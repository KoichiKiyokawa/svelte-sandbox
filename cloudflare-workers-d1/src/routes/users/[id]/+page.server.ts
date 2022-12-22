import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		user: locals.userRepository.findOne(Number(params.id))
	};
};
