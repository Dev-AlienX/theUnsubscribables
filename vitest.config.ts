import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    reporters: ['default', 'json'],
    outputFile: 'test-results.json',
    exclude: ['e2e/**', '**/node_modules/**'],
  },
});
