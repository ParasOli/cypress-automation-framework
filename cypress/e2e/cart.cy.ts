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

  it('should navigate to cart page when cart icon is clicked', () => {
    cartPage.goToCart()
    cy.url().should('include', '/cart.html')
  })

  it('should show added item with correct name in the cart', () => {
    cy.get('[data-test="inventory-item-name"]').first().invoke('text').then((itemName) => {
      cartPage.addToCart(PRODUCTS.backpack)
      cartPage.goToCart()
      cartPage.getCartItemNames().then((names) => {
        expect(names).to.include(itemName)
      })
    })
  })

  it('should show correct item count in cart page after adding multiple items', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.addToCart(PRODUCTS.bikeLight)
    cartPage.addToCart(PRODUCTS.boltTShirt)

    cartPage.goToCart()
    cartPage.validateCartItemCount(3)
  })

  it('should remove item from inside the cart page', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.goToCart()
    cartPage.validateCartItemCount(1)

    cartPage.removeFromCart(PRODUCTS.backpack)
    cartPage.validateCartItemCount(0)
    cartPage.validateBadgeNotExist()
  })

  it('should return to inventory when continue shopping is clicked', () => {
    cartPage.goToCart()
    cartPage.continueShopping()
    cy.url().should('include', '/inventory.html')
  })

  it('should navigate to checkout when checkout button is clicked', () => {
    cartPage.addToCart(PRODUCTS.backpack)
    cartPage.goToCart()
    cartPage.proceedToCheckout()
    cy.url().should('include', '/checkout-step-one.html')
  })

})
