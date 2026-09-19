import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE lets a subpath host (GitHub Pages project site) override the root base.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? process.env.VITE_BASE || '/' : '/',
  server: { host: '127.0.0.1', port: 5173 },
}))
