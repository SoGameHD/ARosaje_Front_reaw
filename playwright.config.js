// @ts-check
const { devices } = require('@playwright/test')

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config()

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */

const config = {
  testDir: './tests',
  outputDir: '/test-results',
  timeout: 10 * 1000,
  expect: {
    timeout: 5 * 1000
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0, // Default Config
  retries: 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 20,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  // reporter: [
  //   [
  //     'html',
  //     {
  //       open: 'always',
  //       host: '0.0.0.0',
  //       port: 8080
  //     }
  //   ]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    trace: 'retain-on-failure', // 'on' / 'off' / 'retain-on-failure' / 'on-first-retry'
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        viewport: { width: 1920, height: 1080 }
      }
    }

    // {
    //     name: 'firefox',
    //     use: {
    //         ...devices['Desktop Firefox'],
    //         // headless: false,
    //         contextOptions: {
    //             ignoreHTTPSErrors: true
    //         }
    //     }
    // },

    // {
    //     name: 'webkit',
    //     use: {
    //         ...devices['Desktop Safari'],
    //         // headless: false,
    //         contextOptions: {
    //             ignoreHTTPSErrors: true
    //         }
    //     }
    // }

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ]
}

module.exports = config
