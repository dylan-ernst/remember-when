import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the apex domain rememberwhenpb.com, so the base is the root.
export default defineConfig(() => ({
  plugins: [react()],
  base: '/',
  server: { host: '127.0.0.1', port: 5173 },
}))
