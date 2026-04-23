import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/NXlive_20260423/',
  plugins: [react(), tailwindcss()],
})
