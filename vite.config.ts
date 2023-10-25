import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({

	plugins: [
		vue(),
		checker({
			typescript: true,
			vueTsc: true,
			eslint: {
				lintCommand: 'eslint "src/**/*.{ts,tsx,vue}"',
			},
		}),
	],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		}
	},

});
