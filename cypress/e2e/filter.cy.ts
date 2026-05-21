import filterPage from '../pages/filterPage'

describe('Saucedemo - Filter', () => {


  before(() => {
    cy.loginSession(Cypress.env('USERNAME') as string, Cypress.env('PASSWORD') as string)
  })

  beforeEach(()=>{
cy.visitInventory()

  })


  it('Validate UI module of the filter', () => {
    filterPage.validateOptions([
      'Name (A to Z)',
      'Name (Z to A)',
      'Price (low to high)',
      'Price (high to low)',
    ])
  })

  it('should sort products by price low to high', () => {
    filterPage.selectSort('Price (low to high)')
    filterPage.validateSelectedOption('Price (low to high)')

    filterPage.getPrices().then(prices => {
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b))
    })
  })

  it('should sort products by price high to low', () => {
    filterPage.selectSort('Price (high to low)')
    filterPage.validateSelectedOption('Price (high to low)')

    filterPage.getPrices().then(prices => {
      expect(prices).to.deep.equal([...prices].sort((a, b) => b - a))
    })
  })

  it('should sort products by name A to Z', () => {
    filterPage.selectSort('Name (A to Z)')
    filterPage.validateSelectedOption('Name (A to Z)')

    filterPage.getNames().then(names => {
      expect(names).to.deep.equal([...names].sort())
    })
  })

  it('should sort products by name Z to A', () => {
    filterPage.selectSort('Name (Z to A)')
    filterPage.validateSelectedOption('Name (Z to A)')

    filterPage.getNames().then(names => {
      expect(names).to.deep.equal([...names].sort().reverse())
    })
  })
})