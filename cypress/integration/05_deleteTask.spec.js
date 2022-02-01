describe('Delete tasks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.location('pathname').should('eq', '/today');
  });

  it('Edit task in Inbox by clicking task name', () => {
    cy.get('.sidebar').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.get('.task').contains('YYYYY');
  });
});
