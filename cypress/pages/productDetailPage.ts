class ProductDetailPage {
  inventoryItem = '[data-test="inventory-item"]'
  itemImage = 'img'
  itemDescription = '[data-test="inventory-item-desc"]'
  backToProductsBtn = '[data-test="back-to-products"]'
  addToCartBtn = '[data-test="add-to-cart"]'
  cartBadge = '.shopping_cart_badge'

  openFirstProductDetail() {
    cy.get(this.inventoryItem).first().as('selectedProduct')
    cy.get('@selectedProduct').find(this.itemImage).click()
    return this
  }

  getFirstProductDescription() {
    cy.get(this.inventoryItem).first().as('selectedProduct')
    return cy.get('@selectedProduct').find(this.itemDescription).invoke('text')
  }

  validateSingleProductShown() {
    cy.get(this.itemDescription).should('have.length', 1)
    return this
  }

  validateDescriptionMatches(expectedDescription: string) {
    cy.get(this.itemDescription).should('have.text', expectedDescription)
    return this
  }

  goBackToProducts() {
    cy.get(this.backToProductsBtn).click()
    return this
  }

  validateOnInventoryPage() {
    cy.url().should('include', 'inventory.html')
    cy.get(this.itemDescription).its('length').should('be.above', 1)
    return this
  }

  addToCart() {
    cy.get(this.addToCartBtn).click()
    return this
  }

  validateCartBadgeCount(count: number) {
    cy.get(this.cartBadge).should('have.text', String(count))
    return this
  }
}

export default new ProductDetailPage()
