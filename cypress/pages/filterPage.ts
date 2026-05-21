class FilterPage {
  sortContainer = '[data-test="product-sort-container"]';
  itemPrice = '[data-test="inventory-item-price"]';
  itemName = '[data-test="inventory-item-name"]';

  selectSort(option: string) {
    cy.get(this.sortContainer).select(option)
    return this;
  }

  validateSelectedOption(option: string) {
    cy.get(this.sortContainer).find('option:selected').should('have.text', option)
    return this;
  }

  validateOptions(options: string[]) {
    cy.get(this.sortContainer).should('be.visible')
    options.forEach(option => {
      cy.get(this.sortContainer).find('option').contains(option).should('exist')
    })
    return this;
  }

  getPrices() {
    return cy.get(this.itemPrice).then(($els) =>
      [...$els].map(el => parseFloat(el.innerText.replace('$', '')))
    )
  }

  getNames() {
    return cy.get(this.itemName).then(($els) =>
      [...$els].map(el => el.innerText)
    )
  }
}

export default new FilterPage();
