import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Counter from './index.svelte';

describe('Counter', () => {
	const getCurrentCount = () => screen.getByTestId('counter-state').textContent;
	render(Counter, { props: { name: 'foo' } });

	it('can increment', async () => {
		const incrementButton = screen.getByRole('button', { name: '+1' });
		await fireEvent.click(incrementButton);

		const currentCountElement = screen.getByTestId('counter-state');
		expect(currentCountElement.textContent).toBe('1');

		await fireEvent.click(incrementButton);
		expect(currentCountElement.textContent).toBe('2');
	});

	const decrementButton = screen.getByRole('button', { name: '-1' });
	it('can decrement', async () => {
		await fireEvent.click(decrementButton);

		expect(getCurrentCount()).toBe('1');

		await fireEvent.click(decrementButton);
		expect(getCurrentCount()).toBe('0');
	});

	it('should not became smaller than 0', async () => {
		await fireEvent.click(decrementButton);
		expect(getCurrentCount()).toBe('0');

		await fireEvent.click(decrementButton);
		expect(getCurrentCount()).toBe('0');
	});
});
