describe('Add task', () => {
  it('Add task on Inbox page via inline', () => {
    cy.visit('/inbox');
    cy.getByTestId('addTask').click();
    cy.getByTestId('taskForm').within(() => {
      cy.get('button').contains('Add Task').should('be.disabled');
      cy.getByTestId('taskForm__name')
        .type('XXXXX')
        .should('have.value', 'XXXXX');
      cy.getByTestId('taskForm__desc')
        .type('xxxxx')
        .should('have.value', 'xxxxx');
      cy.get('button').contains('Add Task').should('not.be.disabled');
      cy.get('button').contains('Add Task').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.getByTestId('addTask').should('be.visible');
    cy.getByTestId('taskForm').should('not.exist');
    cy.getByTestId('task').should('contain', 'XXXXX').and('contain', 'xxxxx');
  });

  it('Add task on Inbox page via Header', () => {
    cy.visit('/inbox');
    cy.get('[data-cy=header__item][id=header__addTask]').click();
    cy.getByTestId('taskForm')
      .should('be.visible')
      .within(() => {
        cy.get('button').contains('Add Task').should('be.disabled');
        cy.getByTestId('taskForm__name')
          .type('XXXXX2')
          .should('have.value', 'XXXXX2');

        cy.getByTestId('taskForm__desc')
          .type('xxxxx2')
          .should('have.value', 'xxxxx2');
        cy.get('button').contains('Add Task').should('not.be.disabled');
        cy.get('button').contains('Add Task').click();
        cy.get('button').contains('Cancel').click();
      });
    cy.getByTestId('addTask').should('be.visible');
    cy.getByTestId('taskForm').should('not.exist');
    cy.getByTestId('task').should('contain', 'XXXXX2').and('contain', 'xxxxx2');
  });
});
