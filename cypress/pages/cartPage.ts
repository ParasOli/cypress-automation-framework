class CartPage {
  addToCartBtn = (index: number) => `[data-test="add-to-cart"]:eq(${index})`
  removeBtn = (index: number) => `[data-test="remove"]:eq(${index})`
  cartBadge = '[data-test="shopping-cart-badge"]'
  cartLink = '[data-test="shopping-cart-link"]'
  cartItem = '.cart_item'
  cartItemName = '[data-test="inventory-item-name"]'
  cartItemPrice = '[data-test="inventory-item-price"]'
  continueShoppingBtn = '[data-test="continue-shopping"]'
  checkoutBtn = '[data-test="checkout"]'

  addItemToCart(index: number) {
    cy.get(this.addToCartBtn(index)).click()
    return this
  }

  removeItemFromCart(index: number) {
    cy.get(this.removeBtn(index)).click()
    return this
  }

  goToCart() {
    cy.get(this.cartLink).click()
    return this
  }

  validateCartBadge(count: number) {
    cy.get(this.cartBadge).should('have.text', String(count))
    return this
  }

  validateCartIsEmpty() {
    cy.get(this.cartBadge).should('not.exist')
    cy.get(this.cartItem).should('not.exist')
    return this
  }

  validateCartItemCount(count: number) {
    cy.get(this.cartItem).should('have.length', count)
    return this
  }

  getCartItemNames() {
    return cy.get(this.cartItemName).then(($els) =>
      [...$els].map(el => el.innerText)
    )
  }
}

export default new CartPage()
