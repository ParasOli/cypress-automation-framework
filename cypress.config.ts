import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  allowCypressEnv: true,
  env: {
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    allure: true,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotOnRunFailure: true,

  e2e: {
    experimentalMemoryManagement: true,
    baseUrl: "https://www.saucedemo.com",
    testIsolation: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
