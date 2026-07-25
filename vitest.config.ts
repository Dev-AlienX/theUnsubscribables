import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default', 'json'],
    outputFile: 'test-results.json',
    exclude: ['e2e/**', '**/node_modules/**'],
    deps: {
      inline: ['@angular/platform-browser-dynamic/testing'],
    },
  },
  resolve: {
    alias: {
      'zone.js': path.resolve(__dirname, 'node_modules/zone.js'),
      'zone.js/testing': path.resolve(__dirname, 'node_modules/zone.js/dist/zone-testing.js'),
      '@angular/platform-browser-dynamic/testing': path.resolve(__dirname, 'node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic-testing.mjs'),
    },
  },
  optimizeDeps: {
    include: ['@angular/platform-browser-dynamic/testing'],
  },
});
