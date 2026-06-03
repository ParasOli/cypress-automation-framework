import cartPage from '../pages/cartPage'

const PRODUCTS = {
  backpack: 'sauce-labs-backpack',
  bikeLight: 'sauce-labs-bike-light',
  boltTShirt: 'sauce-labs-bolt-t-shirt',
}

describe('Saucedemo - Cart', () => {

  before(() => {
    cy.loginSession(Cypress.env('USERNAME') as string, Cypress.env('PASSWORD') as string)
  })

  beforeEach(() => {
    cy.visitInventory()
  })

  afterEach(() => {
    cartPage.clearCart()
  })

  it('should update badge to 1 when an item is added', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.validateBadgeCount(1)
  })

  it('should increment badge count as multiple items are added', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.validateBadgeCount(1)

    cartPage.addToCart(PRODUCTS.bikeLight)
    cartPage.validateBadgeCount(2)

    cartPage.addToCart(PRODUCTS.boltTShirt)
    cartPage.validateBadgeCount(3)
  })

  it('should remove badge when the only item is removed', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.validateBadgeCount(1)

    cartPage.removeFromInventory(PRODUCTS.backpack)
    cartPage.validateBadgeNotExist()
  })

})
