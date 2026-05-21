declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>
    loginSession(username: string, password: string): Chainable<void>
  }
}
declare namespace Cypress {
  interface Chainable {
    visitInventory(): Chainable<void>
  }
}