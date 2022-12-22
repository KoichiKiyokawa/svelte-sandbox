import type { Handle } from '@sveltejs/kit';
import { UserRepository } from './features/user/repository.server';

export const handle: Handle = ({ event, resolve }) => {
	event.locals.userRepository = new UserRepository(event.platform.env.DB);
	return resolve(event);
};
