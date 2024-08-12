import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_API_URL,
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/storage': {
          target: env.VITE_APP_BASE_STORAGE_URL,
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/storage/, ''),
        },
      },
    },
  });
};
