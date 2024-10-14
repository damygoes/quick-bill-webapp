import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/shared/components'),
      '@features': path.resolve(__dirname, '/src/features'),
      '@lib': path.resolve(__dirname, '/src/shared/lib'),
      '@locales': path.resolve(__dirname, '/src/locales'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@shared': path.resolve(__dirname, '/src/shared'),
      '@styles': path.resolve(__dirname, '/src/styles'),
    },
  },
});
