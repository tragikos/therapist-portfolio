import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative paths for all built asset URLs to work on GitHub Pages subpaths
  base: './',
})
