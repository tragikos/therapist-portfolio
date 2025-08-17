import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Force relative asset URLs so GitHub Pages subpaths work
  base: './',
})
