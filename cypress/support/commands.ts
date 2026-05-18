import loginPage from '../pages/loginPage';

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/')
  if (username) cy.get(loginPage.username).type(username)
  if (password) cy.get(loginPage.password).type(password)
  cy.get(loginPage.loginButton).click()
})

Cypress.Commands.add('loginSession', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get(loginPage.username).type(username)
    cy.get(loginPage.password).type(password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('include', 'inventory.html')
    cy.get('.inventory_container').should('be.visible')
  })
})




export {}
