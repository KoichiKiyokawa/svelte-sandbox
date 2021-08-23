const preprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	svelteOptions: {
		preprocess: preprocess() // ここをrequire(...)とかimport(...)とかにすると、preprocessが正しく発動しなくてバグる
	}
};
