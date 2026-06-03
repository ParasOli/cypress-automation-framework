class CartPage {
  cartBadge = '[data-test="shopping-cart-badge"]'
  cartLink = '[data-test="shopping-cart-link"]'
  cartItem = '.cart_item'
  cartItemName = '[data-test="inventory-item-name"]'
  cartItemPrice = '[data-test="inventory-item-price"]'
  continueShoppingBtn = '[data-test="continue-shopping"]'
  checkoutBtn = '[data-test="checkout"]'

  addToCart(productSlug: string) {
    cy.get(`[data-test="add-to-cart-${productSlug}"]`).click()
    return this
  }

  removeFromInventory(productSlug: string) {
    cy.get(`[data-test="remove-${productSlug}"]`).click()
    return this
  }

  goToCart() {
    cy.get(this.cartLink).click()
    return this
  }

  validateBadgeCount(count: number) {
    cy.get(this.cartBadge).should('have.text', String(count))
    return this
  }

  validateBadgeNotExist() {
    cy.get(this.cartBadge).should('not.exist')
    return this
  }

  validateCartItemCount(count: number) {
    cy.get(this.cartItem).should('have.length', count)
    return this
  }

  removeFromCart(productSlug: string) {
    cy.get(`[data-test="remove-${productSlug}"]`).click()
    return this
  }

  getCartItemNames() {
    return cy.get(this.cartItemName).then(($els) =>
      [...$els].map((el) => el.innerText)
    )
  }

  continueShopping() {
    cy.get(this.continueShoppingBtn).click()
    return this
  }

  proceedToCheckout() {
    cy.get(this.checkoutBtn).click()
    return this
  }

  clearCart() {
    cy.get(this.cartLink).click()
    cy.get('body').then(($body) => {
      if ($body.find('[data-test^="remove-"]').length > 0) {
        cy.get('[data-test^="remove-"]').each(($btn) => {
          cy.wrap($btn).click()
        })
      }
    })
  }
}

export default new CartPage()
