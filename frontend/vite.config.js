import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-chat-engine-pretty'], // Include the package for optimization
  },
  build: {
    rollupOptions: {
      external: ['react-chat-engine-pretty'],  // Mark it as external to prevent bundling
    },
  },
});
