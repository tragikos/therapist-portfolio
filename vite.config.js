import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Actions, this picks "owner/repo", uses "/repo/" as base.
// Locally, base is "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = !!process.env.GITHUB_ACTIONS

export default defineConfig({
  plugins: [react()],
  base: isCI && repoName ? `/${repoName}/` : '/',
})
