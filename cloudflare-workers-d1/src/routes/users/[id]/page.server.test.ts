import { describe, expect, it, vi } from 'vitest';
import type { User } from '~/features/user/model';
import { UserRepository } from '~/features/user/repository.server';
import { PromiseObjectAll } from '~/test-utils/promise';
import type { PageServerLoad } from './$types';
import { load } from './+page.server';

describe('load', () => {
	class UserRepositoryMock extends UserRepository {
		constructor() {
			super(null as unknown as D1Database);
		}

		async findOne(id: number): Promise<User> {
			return {
				id,
				name: 'Alice',
				email: 'alice@example.com'
			};
		}
	}

	const userRepositoryFindSpy = vi.spyOn(UserRepositoryMock.prototype, 'findOne');
	const dummyEvent = {
		locals: { userRepository: new UserRepositoryMock() },
		params: { id: 1 }
	} as unknown as Parameters<PageServerLoad>[0];

	it('should return user', async () => {
		expect(await PromiseObjectAll(load(dummyEvent))).toMatchInlineSnapshot(`
			{
			  "user": {
			    "email": "alice@example.com",
			    "id": 1,
			    "name": "Alice",
			  },
			}
		`);
		expect(userRepositoryFindSpy).toHaveBeenCalledWith(1);
	});
});
