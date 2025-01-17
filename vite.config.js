import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    resolve() // Register the rollup plugin for module resolution
  ],
  resolve: {
    alias: {
      '@': '/src',  // Setting up the alias for '@' to map to the 'src' folder
    }
  },
  optimizeDeps: {
    nodePolyfills: true,  // Polyfills for Node.js modules
  },
  base: '/', // Set base to '/' for Vercel deployment
});
