import { defineConfig } from 'vite';
import react from '@vitejs/puglin-react'

export default defineConfig({
  puglins:[react()],
  server:{
    port: 6000,
    host: true,
    open: true
  }
})