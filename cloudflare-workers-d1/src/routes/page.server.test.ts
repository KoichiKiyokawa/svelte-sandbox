import { describe, expect, it, vi } from 'vitest';
import { UserRepository } from '~/features/user/repository.server';
import { PromiseObjectAll } from '~/test-utils/promise';
import type { PageServerLoad } from './$types';
import { load } from './+page.server';

describe('load', () => {
	const dummyEvent = {
		platform: { env: { DB: null } }
	} as unknown as Parameters<PageServerLoad>[0];
	const userRepositoryFindAllSpy = vi.spyOn(UserRepository.prototype, 'findAll');
	it('should return users', async () => {
		userRepositoryFindAllSpy.mockResolvedValue([
			{ id: 1, name: 'Alice', email: 'alice@example.com' },
			{ id: 2, name: 'Bob', email: 'bob@example.com' }
		]);

		const res = load(dummyEvent);
		expect(await PromiseObjectAll(res)).toMatchInlineSnapshot(`
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
