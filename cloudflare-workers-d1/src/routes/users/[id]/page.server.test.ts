import { describe, expect, it, vi } from 'vitest';
import { UserRepository } from '~/features/user/repository.server';
import { PromiseObjectAll } from '~/test-utils/promise';
import type { PageServerLoad } from './$types';
import { load } from './+page.server';

describe('load', () => {
	const dummyEvent = {
		platform: { env: { DB: null } },
		params: { id: 1 }
	} as unknown as Parameters<PageServerLoad>[0];
	const userRepositoryFindSpy = vi.spyOn(UserRepository.prototype, 'findOne');
	it('should return user', async () => {
		userRepositoryFindSpy.mockResolvedValue({
			id: 1,
			name: 'Alice',
			email: 'alice@example.com'
		});

		const res = load(dummyEvent);
		expect(await PromiseObjectAll(res)).toMatchInlineSnapshot(`
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
