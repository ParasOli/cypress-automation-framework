// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/')
  if (username) cy.get('#user-name').type(username)
  if (password) cy.get('#password').type(password)
  cy.get('#login-button').click()
})

export {}
