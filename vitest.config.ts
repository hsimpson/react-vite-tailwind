import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      exclude: ['./tailwind.config.js', './src/index.tsx', ...coverageConfigDefaults.exclude],
    },
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      screenshotDirectory: 'screenshots',
      viewport: {
        width: 1280,
        height: 720,
      },
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
});
