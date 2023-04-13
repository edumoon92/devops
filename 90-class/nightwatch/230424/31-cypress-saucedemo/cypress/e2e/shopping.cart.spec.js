describe('Sauce Labs Demo App', () => {
  beforeEach(() => {
    cy.visit('http://192.168.56.101:3000/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('should add item to cart and see the cart badge', () => {
    cy.get('.inventory_item')
      .first()
      .find('.btn_primary.btn_inventory')
      .click();

    cy.get('.shopping_cart_badge')
      .should('have.text', '1');
  });

  it('should remove item from cart and see the cart badge disappear', () => {
    cy.get('.inventory_item')
      .first()
      .find('.btn_primary.btn_inventory')
      .click();

    cy.get('.shopping_cart_badge')
      .should('have.text', '1');

    cy.get('.shopping_cart_link')
      .click();

    cy.get('.cart_item')
      .first()
      .find('.btn_secondary.cart_button')
      .click();

    cy.get('.cart_item')
      .should('have.length', 0);

    cy.get('.shopping_cart_badge')
      .should('not.exist');
  });
});