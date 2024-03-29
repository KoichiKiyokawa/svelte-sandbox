import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
	theme: {
		extend: {
			colors: {
				black: {
					extraLight: 'rgba(0, 0, 0, 0.3)',
					light: 'rgba(0, 0, 0, 0.6)',
					DEFAULT: '#373a3c'
				},
				primary: {
					DEFAULT: '#5CB85C'
				},
				link: {
					DEFAULT: colors.blue['500']
				}
			},
			fontFamily: {
				title: ['Titillium Web', 'sans-serif']
			}
		}
	}
});
