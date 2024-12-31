import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import $ from 'jquery'
import jQuery from "jquery";
import inject from '@rollup/plugin-inject'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
    inject({
      jQuery: 'jquery',
      // $: 'jquery',
    }),
  ],
  define: {
    API_URL: JSON.stringify('https://alc7jm51ph.execute-api.us-east-1.amazonaws.com/Prod'),
    'window.jQuery': $,
    'window.$': $,
    '$': $
  },
  optimizeDeps: {
    include: ['jquery']
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }
  }
})
