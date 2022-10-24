import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
	plugins: [tsconfigPaths(), sveltekit(), imagetools({})]
};

export default config;
