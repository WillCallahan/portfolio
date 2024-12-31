import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    API_URL: JSON.stringify('https://alc7jm51ph.execute-api.us-east-1.amazonaws.com/Prod')
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }
  }
})
