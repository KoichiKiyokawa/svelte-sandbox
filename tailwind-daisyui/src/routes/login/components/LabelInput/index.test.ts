import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import LabelInput from './index.svelte';
import type { ComponentProps } from 'svelte';

describe('LabelInput', () => {
	const testProps: ComponentProps<LabelInput> = {
		id: 'test',
		label: 'test',
		type: 'text',
		placeholder: 'This is the test input.'
	};

	it('to match snapshot', () => {
		const { container } = render(LabelInput, testProps);
		expect(container).toMatchInlineSnapshot(`
			<body>
			  <div>
			    <div
			      class="form-control w-full "
			    >
			      <label
			        class="label"
			        for="test"
			      >
			        <span
			          class="label-text"
			        >
			          test
			        </span>
			      </label>
			       
			      <input
			        class="input input-bordered w-full"
			        id="test"
			        placeholder="This is the test input."
			        type="text"
			      />
			    </div>
			    <!--&lt;Index&gt;-->
			  </div>
			</body>
		`);
	});

	it('can type text', () => {
		const { container } = render(LabelInput, testProps);
		const input = container.querySelector('input');
		assertToBeDefined(input);
		fireEvent.input(input, { target: { value: 'This is test input' } });
		expect(input.value).toBe('This is test input');
	});
});

function assertToBeDefined<T>(value: T): asserts value is NonNullable<T> {
	expect(value).toBeDefined();
}
