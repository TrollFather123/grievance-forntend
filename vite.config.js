import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src'
    },
  },
  esbuild: {
    logLevel: 'silent' // Suppresses build errors
  },
  build: {
    minify: false, // Disable minification if needed
    ignoreWarning: true, // Ignores warnings during build
  }
})
