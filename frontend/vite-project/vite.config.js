import { defineConfig } from 'vite'     // 👈 THIS was missing
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'  // 👈 needed for alias

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),  // 👈 magic line to use @ for src/
    },
  },
})
