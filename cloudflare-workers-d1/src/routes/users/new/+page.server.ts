import { fail, redirect } from '@sveltejs/kit';
import { UserService } from '~/services/user.server';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const userService = new UserService(event.platform.env.DB);
		const formData = await event.request.formData();

		const name = formData.get('name') as string;
		if (!name) return fail(400, { error: 'Missing name' });
		const email = formData.get('email') as string;
		if (!email) return fail(400, { error: 'Missing email' });

		await userService.create({ name, email });
		throw redirect(302, '/');
	}
};
