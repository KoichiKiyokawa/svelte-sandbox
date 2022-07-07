import WindiCSS from 'vite-plugin-windicss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), WindiCSS()]
});
