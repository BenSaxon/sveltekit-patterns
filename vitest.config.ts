import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'vitest-setup.ts',
		// alias: [
		// 	{
		// 		find: "$app\/forms/,
		// 		replacement: resolve(fileURLToPath(dirname(import.meta.url)), '/.empty.js')
		// 	},
		// 	{ find: '@app', replacement: resolve(__dirname, './src/routes') },
		// 	{ find: '@mocks', replacement: resolve(__dirname, './src/__mocks__') },
		// 	{ find: '$lib', replacement: resolve(__dirname, './src/lib') }
		// ]
		alias: [
			{
				find: '$app/forms',
				replacement: resolve(
					fileURLToPath(dirname(import.meta.url)),
					'./src/__mocks__/$app/forms.ts'
				)
			},
			{
				find: '$app/environment',
				replacement: resolve(
					fileURLToPath(dirname(import.meta.url)),
					'./src/__mocks__/$app/environment.ts'
				)
			},
			{
				find: '$lib',
				replacement: resolve(fileURLToPath(dirname(import.meta.url)), './src/lib')
			}
		]
	}
	// resolve: {
	// 	alias: {
	// 		$lib: './src/lib',
	// 		'$app/forms': resolve(fileURLToPath(dirname(import.meta.url)), '/__mocks__/app/forms.js')
	// 	}
	// }
});
