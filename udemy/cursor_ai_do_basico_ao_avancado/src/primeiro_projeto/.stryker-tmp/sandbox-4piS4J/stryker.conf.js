/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
// @ts-nocheck

export default {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  vitest: {
    configFile: 'vite.config.js'
  },
  mutate: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/*.spec.{js,jsx}',
    '!src/**/__tests__/**',
    '!src/test/**',
    '!src/**/*.config.{js,jsx}',
    '!src/**/*.setup.{js,jsx}'
  ],
  htmlReporter: {
    baseDir: 'reports/mutation/html'
  },
  thresholds: {
    high: 80,
    low: 60,
    break: 70
  },
  timeoutMS: 10000,
  maxConcurrentTestRunners: 2,
  logLevel: 'info'
}; 