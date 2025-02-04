import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/filmographie_projet/', // Mets ici le nom exact de ton repo GitHub
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html' // Ajoute cette ligne pour préciser le chemin de index.html
    }
  }
});
