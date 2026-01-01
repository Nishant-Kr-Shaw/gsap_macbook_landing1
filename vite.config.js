import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
  build: {
    // increase the limit (default is 500 KB)
    chunkSizeWarningLimit: 2000, // set to 2 MB
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})


