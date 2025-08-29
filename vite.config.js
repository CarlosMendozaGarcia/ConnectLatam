import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',  // Asegúrate de que la salida de los archivos sea en la carpeta 'build'
  },
  server:{
    host: '192.168.101.70'
  }
})
