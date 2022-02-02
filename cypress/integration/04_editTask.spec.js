/*
describe('Edit tasks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.location('pathname').should('eq', '/today');
  });

  //TODO: Tests should run in isolation -> this and the following ones depend on previous
  it('Edit task in Inbox by clicking task name', () => {
    cy.get('.sidebar').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.get('.content').should('contain', 'XXXXX2').click();
    cy.get('.taskForm').within(() => {
      cy.get('.taskForm__name')
        .click()
        .clear()
        .type('YYYYY')
        .should('have.value', 'YYYYY');
      cy.get('.taskForm__description')
        .click()
        .clear()
        .type('yyyyy')
        .should('have.value', 'yyyyy');
      cy.get('button').contains('Save').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.get('.task').should('contain', 'YYYYY').and('contain', 'yyyyy');
  });
});
*/
