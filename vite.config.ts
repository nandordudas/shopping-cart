import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': root,
    },
  },
})
