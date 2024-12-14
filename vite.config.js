import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Simplify imports
    },
  },
  build: {
    rollupOptions: {
      // Do not exclude framer-motion; this ensures it's bundled
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
