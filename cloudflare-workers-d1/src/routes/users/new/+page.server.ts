import { fail, redirect } from '@sveltejs/kit';
import { UserRepository } from '~/features/user/repository.server';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const userRepository = new UserRepository(event.platform.env.DB);
		const formData = await event.request.formData();

		const name = formData.get('name') as string;
		if (!name) return fail(400, { error: 'Missing name' });
		const email = formData.get('email') as string;
		if (!email) return fail(400, { error: 'Missing email' });

		await userRepository.create({ name, email });
		throw redirect(302, '/');
	}
};
