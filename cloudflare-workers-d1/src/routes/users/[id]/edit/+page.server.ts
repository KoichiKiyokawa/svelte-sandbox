import { redirect } from '@sveltejs/kit';
import { UserService } from '~/services/user.server';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = (event) => {
	const userService = new UserService(event.platform.env.DB);
	return {
		initialState: userService.findOne(Number(event.params.id))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const userService = new UserService(event.platform.env.DB);
		const id = Number(event.params.id);
		const formData = await event.request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		await userService.update({ id, name, email });
		throw redirect(302, `/users/${id}`);
	}
};
