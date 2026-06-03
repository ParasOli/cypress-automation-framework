

import './commands'
import '@shelex/cypress-allure-plugin'

// saucedemo uses a service worker that serves cached HTML and bypasses the
// Cypress proxy, causing 404s on navigation. Unregister it before each test.
Cypress.on('window:before:load', (win) => {
  if (win.navigator.serviceWorker) {
    win.navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((r) => r.unregister())
    })
  }
})
