import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/colormind-api': {
        target: 'http://colormind.io', // Base URL only
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/colormind-api/, '/api/')
      }
    }
  }
})
