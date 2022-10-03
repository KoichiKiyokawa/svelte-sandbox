import {} from '@storybook/svelte';
import Counter from './index.svelte';

export default {
	component: Counter
};

export const Default = {
	args: {
		name: 'foo'
	}
};
