describe('demo', () => {
  it('test', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', 'inventory.html')

  })

  it('test2', () => {
    cy.login('locked_out_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.') 

  })

  it('test3', () => {
    cy.login('problem_user', 'false_password');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })
  it('test4', () => {
    cy.login('performance_glitch_user', '');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Password is required')

  })

  it('test5', () => {
    cy.login('', 'secret_sauce');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username is required')
  })

})
