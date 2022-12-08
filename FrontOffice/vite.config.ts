import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@services': path.resolve(__dirname, './src/services'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [
		react(),
		viteCompression({
			verbose: true,
			algorithm: 'gzip',
			ext: '.gz',
			deleteOriginFile: true,
		}),
	],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: false,
		port: 4000, // you can replace this port with any port
	},
});
