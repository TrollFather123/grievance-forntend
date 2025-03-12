import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src'
    },
  },
  server: {
    port: 3000, // Ensures local testing before deployment
  },
  build: {
    outDir: 'dist', // Vercel expects this by default
  }
})
