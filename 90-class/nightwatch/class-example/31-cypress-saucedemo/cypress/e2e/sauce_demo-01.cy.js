describe('Sauce Labs Demo App', () => {
  it('should log in and see products', () => {
    cy.visit('http://192.168.56.101:3000/');

    // Log in with standard user credentials
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // Verify that products are displayed on the page
    cy.get('.inventory_item').should('have.length.gte', 1);
  });
});