import cartPage from '../pages/cartPage'

describe('Saucedemo - Cart', () => {

  before(() => {
    cy.loginSession(Cypress.env('USERNAME') as string, Cypress.env('PASSWORD') as string)
  })

  beforeEach(() => {
    cy.visitInventory()
  })

  it('should update cart badge when an item is added', () => {
    cy.get('[data-test="inventory-item"]').first().within(() => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  })



  it('should update cart badge when an item is removed', () => {
    cy.get('[data-test="inventory-item"]').first().within(() => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })

})
