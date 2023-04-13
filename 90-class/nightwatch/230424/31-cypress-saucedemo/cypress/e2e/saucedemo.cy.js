describe('Sauce Labs Demo', () => {
  it('should add the two cheapest products to the cart', () => {
    cy.visit('http://192.168.56.101:3000/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Sort products by price
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

    // Add the two cheapest products to the cart
    cy.get('.inventory_item_price')
      .then($prices => {
        const prices = $prices.map((_, el) => parseFloat(el.innerText.slice(1)))
        const cheapestIndices = [0, 1]
        const cheapestPrices = cheapestIndices.map(i => prices[i])
        cy.get('.btn_primary.btn_inventory')
          .each(($btn, i) => {
            if (cheapestIndices.includes(i)) {
              cy.wrap($btn).click()
            }
          })
        cy.get('.shopping_cart_badge').should('contain', cheapestIndices.length)
        cy.get('.inventory_item_price')
          .then($prices => {
            const prices = $prices.map((_, el) => parseFloat(el.innerText.slice(1)))
            const selectedPrices = cheapestPrices.map(p => `$${p.toFixed(2)}`)
            expect(prices).to.deep.equal(selectedPrices)
          })
      })
  })
})