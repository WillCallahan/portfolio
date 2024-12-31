import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import jquery from 'jquery'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
    inject({
      jQuery: 'jquery'
    }),
  ],
  define: {
    API_URL: JSON.stringify('https://alc7jm51ph.execute-api.us-east-1.amazonaws.com/Prod'),
    // 'window.jQuery': 'jquery',
    // 'window.$': 'jquery',
    // '$': 'jquery'
  },
  optimizeDeps: {
    include: ['jquery']
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }
  }
})
