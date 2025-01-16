
// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  base: '/frontend-1st-woori-real-account-book-react/', // GitHub Pages에서 사용할 기본 경로
});
