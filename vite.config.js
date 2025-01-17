import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src',
        '@rollup/plugin-node-resolve': resolve()}
    ]
  },
  optimizeDeps: {
    // 특정 Node.js API를 polyfill로 대체하도록 설정
    nodePolyfills: true,
  },
  base: '/frontend-1st-woori-real-account-book-react/', // GitHub Pages에서 사용할 기본 경로
  
});
