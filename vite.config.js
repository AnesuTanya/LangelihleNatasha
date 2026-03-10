import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { BASE_PATH } = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    base: BASE_PATH || '/',
  };
});
