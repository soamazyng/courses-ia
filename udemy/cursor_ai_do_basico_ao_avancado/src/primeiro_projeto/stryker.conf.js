/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
export default {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "vitest",
  coverageAnalysis: "perTest",
  vitest: {
    configFile: "vite.config.js",
  },
  mutate: [
    "src/components/**/*.{js,jsx}",
    "src/pages/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/**/*.spec.{js,jsx}",
    "!src/**/__tests__/**",
    "!src/test/**",
    "!src/**/*.config.{js,jsx}",
    "!src/**/*.setup.{js,jsx}",
  ],
  htmlReporter: {
    fileName: "reports/mutation/html/index.html",
  },
  thresholds: {
    high: 80,
    low: 60,
    break: 70,
  },
  timeoutMS: 15000,
  concurrency: 2,
  logLevel: "info",
  ignoreStatic: true,
};
