describe('Cypress Heroes App', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should display the welcome message', () => {
      cy.get('h1')
        .should('contain', 'Welcome to Cypress Heroes!')
    })
  
    it('should add a new hero', () => {
      cy.get('.add-hero input')
        .type('Batman{enter}')
      cy.get('.hero-list li')
        .should('contain', 'Batman')
    })
})