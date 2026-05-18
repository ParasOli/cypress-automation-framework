describe('Saucedemo - Filter', () => {

    before(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    beforeEach(() => {
        cy.visit('/inventory.html')
    })

    it('should sort products by price low to high', () => {
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const prices = [...$prices].map((el) => parseFloat(el.innerText.replace('$', '')))
            expect(prices).to.deep.equal([...prices].sort((a, b) => a - b))
        })
    })

    it('should sort products by price high to low', () => {
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const prices = [...$prices].map((el) => parseFloat(el.innerText.replace('$', '')))
            expect(prices).to.deep.equal([...prices].sort((a, b) => b - a))
        })
    })

    it('should sort products by name A to Z', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
        cy.get('[data-test="inventory-item-name"]').then(($names) => {
            const names = [...$names].map((el) => el.innerText)
            expect(names).to.deep.equal([...names].sort())
        })
    })

    it('should sort products by name Z to A', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
        cy.get('[data-test="inventory-item-name"]').then(($names) => {
            const names = [...$names].map((el) => el.innerText)
            expect(names).to.deep.equal([...names].sort().reverse())
        })
    })
})