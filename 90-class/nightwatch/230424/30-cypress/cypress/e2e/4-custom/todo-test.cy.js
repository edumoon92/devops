describe('Todo MVC', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });
  
  it('Todo 입력하기', () => {
    // 클래스가 new-todo인 엘리먼트에 "Cypress 실습"을 입력한 후 엔터키 입력
    cy.get('.new-todo').type('Cypress 실습{enter}'); 

    // 클래스가 new-todo인 엘리먼트의 value가 빈 문자열이어야 한다.
    cy.get('.new-todo').should('have.value', '');
    
    // 클래스가 todo-list인 엘리먼트의 첫번째 자식 li는 "Cypress 실습" 이라는 텍스트를 포함한다.
    cy.get('.todo-list li').eq(0).should('contain', 'Cypress 실습');
    
    // 클래스가 todo-count인 엘리먼트는 "1 item left" 라는 텍스트를 포함한다.
    cy.get('.todo-count').should('contain', '1 item left');
  });
});
