import { redirect } from '@sveltejs/kit';
import { UserRepository } from '~/features/user/repository.server';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = ({ platform, params }) => {
	const userRepository = new UserRepository(platform.env.DB);
	return {
		initialState: userRepository.findOne(Number(params.id))
	};
};

export const actions: Actions = {
	default: async ({ platform, request, params }) => {
		const userRepository = new UserRepository(platform.env.DB);
		const id = Number(params.id);
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		await userRepository.update({ id, name, email });
		throw redirect(302, `/users/${id}`);
	}
};
