import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const name = formData.get('name') as string;
		if (!name) return fail(400, { error: 'Missing name' });
		const email = formData.get('email') as string;
		if (!email) return fail(400, { error: 'Missing email' });

		await locals.userRepository.create({ name, email });
		throw redirect(302, '/');
	}
};
