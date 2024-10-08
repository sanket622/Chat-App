import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-chat-engine-pretty': 'react-chat-engine-pretty/dist/index.js', 
    },
  },
  optimizeDeps: {
    include: ['react-chat-engine-pretty'],  
  },
  build: {
    target: 'esnext',  
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
