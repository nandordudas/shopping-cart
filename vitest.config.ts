import { defineConfig } from 'vitest/config'

import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '~': root,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: 'verbose',
    setupFiles: './src/test/setup.ts',
  },
})
