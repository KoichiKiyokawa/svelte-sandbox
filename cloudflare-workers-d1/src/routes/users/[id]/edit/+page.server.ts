import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		initialState: locals.userRepository.findOne(Number(params.id))
	};
};

export const actions: Actions = {
	default: async ({ locals, request, params }) => {
		const id = Number(params.id);
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		await locals.userRepository.update({ id, name, email });
		throw redirect(302, `/users/${id}`);
	}
};
