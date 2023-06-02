import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSassPlugin()],
})
