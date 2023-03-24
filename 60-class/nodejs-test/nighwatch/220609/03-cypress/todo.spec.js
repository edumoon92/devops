describe('Todo MVC', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888');
  });
  
  it('Todo �Է��ϱ�', () => {
    // Ŭ������ new-todo�� ������Ʈ�� "Cypress �ǽ�"�� �Է��� �� ����Ű �Է�
    cy.get('.new-todo').type('Cypress �ǽ�{enter}'); 

    // Ŭ������ new-todo�� ������Ʈ�� value�� �� ���ڿ��̾�� �Ѵ�.
    cy.get('.new-todo').should('have.value', '');
    
    // Ŭ������ todo-list�� ������Ʈ�� ù��° �ڽ� li�� "Cypress �ǽ�" �̶�� �ؽ�Ʈ�� �����Ѵ�.
    cy.get('.todo-list li').eq(0).should('contain', 'Cypress �ǽ�');
    
    // Ŭ������ todo-count�� ������Ʈ�� "1 item left" ��� �ؽ�Ʈ�� �����Ѵ�.
    cy.get('.todo-count').should('contain', '1 item left');
  });
});
