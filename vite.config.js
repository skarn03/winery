import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, // Default port (you can change it if needed)
  },
  plugins: [react()],
});
