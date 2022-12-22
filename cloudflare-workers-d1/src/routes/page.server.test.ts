import { describe, expect, it } from 'vitest';
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

		async findAll(): Promise<User[]> {
			return [
				{ id: 1, name: 'Alice', email: 'alice@example.com' },
				{ id: 2, name: 'Bob', email: 'bob@example.com' }
			];
		}
	}

	const dummyEvent = {
		locals: {
			userRepository: new UserRepositoryMock()
		}
	} as Parameters<PageServerLoad>[0];
	it('should return users', async () => {
		expect(await PromiseObjectAll(load(dummyEvent))).toMatchInlineSnapshot(`
			{
			  "users": [
			    {
			      "email": "alice@example.com",
			      "id": 1,
			      "name": "Alice",
			    },
			    {
			      "email": "bob@example.com",
			      "id": 2,
			      "name": "Bob",
			    },
			  ],
			}
		`);
	});
});
