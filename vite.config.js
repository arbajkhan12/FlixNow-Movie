import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/FlixNow-Movie/", 
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  
  server: {
    historyApiFallback: true
  }
})
