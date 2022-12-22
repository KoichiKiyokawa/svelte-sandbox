import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { readable } from 'svelte/store';
import { describe, expect, it, vi } from 'vitest';
import UserShowPage from './+page.svelte';

describe('user show page', () => {
	it('should render', () => {
		vi.mock('$app/stores', () => ({
			page: readable({ params: { id: 1 } })
		}));

		const args: ComponentProps<UserShowPage> = {
			data: {
				user: { id: 1, name: 'Alice', email: 'alice@example.com' }
			}
		};
		const { container } = render(UserShowPage, args);
		expect(container).toMatchInlineSnapshot(`
			<body>
			  <div>
			    <a
			      href="/"
			    >
			      back
			    </a>
			     
			    <h1>
			      user show
			    </h1>
			     
			    <div>
			      {
			  "id": 1,
			  "name": "Alice",
			  "email": "alice@example.com"
			}
			    </div>
			     
			    <a
			      href="/users/1/edit"
			    >
			      edit
			    </a>
			    <!--&lt;+page&gt;-->
			  </div>
			</body>
		`);
	});

	it('should render with no user', () => {
		vi.mock('$app/stores', () => ({
			page: readable({ params: { id: 1 } })
		}));

		const args: ComponentProps<UserShowPage> = {
			data: {
				user: undefined
			}
		};
		const { container } = render(UserShowPage, args);
		expect(container).toMatchInlineSnapshot(`
			<body>
			  <div>
			    <a
			      href="/"
			    >
			      back
			    </a>
			     
			    <h1>
			      user show
			    </h1>
			     
			    <div>
			      {
			  "id": 1,
			  "name": "Alice",
			  "email": "alice@example.com"
			}
			    </div>
			     
			    <a
			      href="/users/1/edit"
			    >
			      edit
			    </a>
			    <!--&lt;+page&gt;-->
			  </div>
			  <div>
			    <a
			      href="/"
			    >
			      back
			    </a>
			     
			    <h1>
			      user show
			    </h1>
			     
			    <div>
			      undefined
			    </div>
			     
			    <a
			      href="/users/1/edit"
			    >
			      edit
			    </a>
			    <!--&lt;+page&gt;-->
			  </div>
			</body>
		`);
	});
});
