import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'named',
        svgo: true,
        svgoConfig: {
          multipass: true,
          plugins: [
            'preset-default',
            { name: 'removeViewBox', active: false },
            { name: 'cleanupIDs', active: true },
            { name: 'removeDimensions', active: true },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@entities': path.resolve(__dirname, 'src/entities'),
    },
  },
})