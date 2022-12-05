import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteCompression from 'vite-plugin-compression';


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
    reactRefresh(),
    viteCompression({ verbose: true, algorithm: 'gzip', ext: '.gz',deleteOriginFile: true })
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000, // you can replace this port with any port
  }
})
