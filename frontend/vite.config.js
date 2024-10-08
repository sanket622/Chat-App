import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-chat-engine-pretty': 'react-chat-engine-pretty/dist/index.js', // Point to the distribution file
    },
  },
  optimizeDeps: {
    include: ['react-chat-engine-pretty'],  // Pre-bundle for development
  },
  build: {
    target: 'esnext',  // Ensure the build is targeting modern browsers
    commonjsOptions: {
      transformMixedEsModules: true,  // Handle mixed ES and CJS modules
    },
  },
});
