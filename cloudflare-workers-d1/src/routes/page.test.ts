import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, it } from 'vitest';
import IndexPage from './+page.svelte';

describe('index page', () => {
	it('should render', () => {
		const args: ComponentProps<IndexPage> = {
			data: {
				users: [
					{ id: 1, name: 'Alice', email: 'alice@example.com' },
					{ id: 2, name: 'Bob', email: 'bob@example.com' }
				]
			}
		};
		const { container } = render(IndexPage, args);
		expect(container).toMatchInlineSnapshot(`
			<body>
			  <div>
			    <h1>
			      user index
			    </h1>
			     
			    <a
			      href="/users/new"
			    >
			      create
			    </a>
			     
			    <div>
			      <a
			        href="/users/1"
			      >
			        {
			  "id": 1,
			  "name": "Alice",
			  "email": "alice@example.com"
			}
			      </a>
			       
			    </div>
			    <div>
			      <a
			        href="/users/2"
			      >
			        {
			  "id": 2,
			  "name": "Bob",
			  "email": "bob@example.com"
			}
			      </a>
			       
			    </div>
			    
			    <!--&lt;+page&gt;-->
			  </div>
			</body>
		`);
	});
});
