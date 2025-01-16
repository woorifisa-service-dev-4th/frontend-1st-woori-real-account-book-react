import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  base: '/frontend-1st-woori-real-account-book-react/', // GitHub Pages에서 사용할 기본 경로
});
