import loginPage from "../pages/loginPage"

describe('Login', () => {
  it('should redirect to inventory page on successful login', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', 'inventory.html')

  })

  it('should show error message when locked out user attempts to login', () => {
    cy.login('locked_out_user', 'secret_sauce');
    loginPage.validateErrorMessage('Epic sadface: Sorry, this user has been locked out.')

  })

  it('should show error message when wrong password is entered', () => {
    cy.login('problem_user', 'false_password');
    loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

  it('should show error message when password field is empty', () => {
    cy.login('performance_glitch_user', '');
    loginPage.validateErrorMessage('Epic sadface: Password is required')

  })

  it('should show error message when username field is empty', () => {
    cy.login('', 'secret_sauce');
    loginPage.validateErrorMessage('Epic sadface: Username is required')
  })

})
