const preprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src'],
	addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		// !!! 関数呼び出しにすることに注意(1敗)
		preprocess: preprocess()
	},
	features: {
		storyStoreV7: true,
		previewCsfV3: true
	}
};
