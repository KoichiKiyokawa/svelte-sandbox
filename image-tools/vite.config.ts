import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import tsconfigPaths from 'vite-tsconfig-paths';
import { presets } from '~/constants/preset';

const config: UserConfig = {
	plugins: [
		tsconfigPaths(),
		sveltekit(),
		imagetools({
			defaultDirectives(url) {
				return new URLSearchParams(presets[url.searchParams.get('preset')] || {});
			}
		})
	]
};

export default config;
