import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base for GitHub Pages:
// - If deploying to <user>.github.io repo => base = '/'
// - Else for project pages => base = '/<repo>/'
// - Allow manual override via VITE_BASE
const repoFull = process.env.GITHUB_REPOSITORY || ''
const repoName = repoFull.split('/')[1] || ''
const isUserSite = repoName.toLowerCase().endsWith('.github.io')
const baseFromEnv = process.env.VITE_BASE

export default defineConfig({
  plugins: [react()],
  base: baseFromEnv ?? (isUserSite ? '/' : repoName ? `/${repoName}/` : '/'),
})
