class LoginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  validateErrorMessage(expectedMessage: string) {
    cy.get(this.errorMessage).should('be.visible').and('have.text', expectedMessage);
    return this;
  }
}

export default new LoginPage();
