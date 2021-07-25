import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: 'app/main.tsx',
      output: {
        sourcemap: true,
        format: 'umd',
        dir: 'out',
        entryFileNames: 'index.js',
      },
    },
  },
});