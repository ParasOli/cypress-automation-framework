import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotOnRunFailure: true,

  e2e: {
    experimentalMemoryManagement: true,
    baseUrl: "https://www.saucedemo.com",
    testIsolation: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(_on, _config) {

    },
  },
});
