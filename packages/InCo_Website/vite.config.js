import { defineConfig } from 'vite';
import commonjs from "vite-plugin-commonjs";
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react(), commonjs()],
  };
});