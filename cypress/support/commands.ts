import loginPage from '../pages/loginPage';

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/')
  if (username) cy.get(loginPage.username).type(username)
  if (password) cy.get(loginPage.password).type(password)
  cy.get(loginPage.loginButton).click()
})

Cypress.Commands.add('visitInventory', ()=>{
           cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
})

Cypress.Commands.add('loginSession', (username, password) => {

  cy.session([username, password], () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')

  }, {
    validate() {
      cy.getCookie('session-username').should('exist')
    },
    cacheAcrossSpecs: true
  })

})

export {}
