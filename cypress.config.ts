import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  allowCypressEnv: true,
  env: {
    allure: true,
    USERNAME: process.env.CYPRESS_USERNAME,
    PASSWORD: process.env.CYPRESS_PASSWORD,
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
