import productDetailPage from '../pages/productDetailPage'

describe('Saucedemo - Product Detail View', () => {

  before(() => {
    cy.loginSession(Cypress.env('USERNAME') as string, Cypress.env('PASSWORD') as string)
  })

  beforeEach(() => {
    cy.visitInventory()
  })

  it('should open the product detail and show the matching description', () => {
    productDetailPage.getFirstProductDescription().then((description) => {
      cy.log('Description:', description)
      productDetailPage.openFirstProductDetail()
      productDetailPage.validateSingleProductShown()
      productDetailPage.validateDescriptionMatches(description)
    })
  })

  it('should return to the inventory list when "Back to products" is clicked', () => {
    productDetailPage.openFirstProductDetail()
    productDetailPage.validateSingleProductShown()
    productDetailPage.goBackToProducts()
    productDetailPage.validateOnInventoryPage()
  })

  it('should add the product to the cart from the detail view', () => {
    productDetailPage.openFirstProductDetail()
    productDetailPage.validateSingleProductShown()
    productDetailPage.addToCart()
    productDetailPage.validateCartBadgeCount(1)
  })

})
