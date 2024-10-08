import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-chat-engine-pretty': 'react-chat-engine-pretty/dist/index.js', // Ensure the proper path
    },
  },
  optimizeDeps: {
    include: ['react-chat-engine-pretty'],  // Pre-bundle for development
  },
});
