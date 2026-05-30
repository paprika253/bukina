import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Базовый путь оставлен '/' — при деплое на GitHub Pages в подкаталог
// замените на '/<имя-репозитория>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
