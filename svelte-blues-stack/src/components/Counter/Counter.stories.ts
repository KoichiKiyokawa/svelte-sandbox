import Counter from './index.svelte';
import type { ComponentProps } from 'svelte';

export default { component: Counter };

const args: ComponentProps<Counter> = {
	name: 'foo'
};

export const Default = {
	args
};
