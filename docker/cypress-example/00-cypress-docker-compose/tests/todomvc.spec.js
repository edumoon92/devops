describe('TodoMVC', () => {
    beforeEach(() => {
      cy.visit('/todomvc/')
    })
  
    it('should add a todo item', () => {
      cy.get('.new-todo')
        .type('Buy milk{enter}')
      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', 'Buy milk')
    })
  
    it('should mark a todo item as completed', () => {
      cy.get('.new-todo')
        .type('Buy milk{enter}')
      cy.get('.todo-list li')
        .click()
        .should('have.class', 'completed')
    })
  
    it('should clear completed todo items', () => {
      cy.get('.new-todo')
        .type('Buy milk{enter}')
        .type('Buy bread{enter}')
      cy.get('.todo-list li:first-child')
        .click()
      cy.get('.todo-list li:last-child')
        .click()
      cy.get('.clear-completed')
        .click()
      cy.get('.todo-list li')
        .should('have.length', 0)
    })
  })