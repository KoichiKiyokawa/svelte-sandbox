import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';

describe('login page', () => {
	it('to match snapshot', () => {
		const { container } = render(Page);
		expect(container).toMatchSnapshot();
	});
});
