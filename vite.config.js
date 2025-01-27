import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fimographie_project/', // Remplacez NOM_DU_REPO par le nom de votre dépôt GitHub
});
