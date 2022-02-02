describe('Add task', () => {
  it('Add task on Inbox page via inline', () => {
    cy.visit('/inbox');
    cy.get('[data-cy=addTask]').click();
    cy.get('[data-cy=taskForm]').within(() => {
      cy.get('button').contains('Add Task').should('be.disabled');
      cy.get('[data-cy=taskForm__name]')
        .type('XXXXX')
        .should('have.value', 'XXXXX');
      cy.get('[data-cy=taskForm__desc]')
        .click()
        .type('xxxxx')
        .should('have.value', 'xxxxx');
      cy.get('button').contains('Add Task').should('not.be.disabled');
      cy.get('button').contains('Add Task').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.get('[data-cy=addTask]').should('be.visible');
    cy.get('[data-cy=taskForm]').should('not.exist');
    cy.get('[data-cy=task]').should('contain', 'XXXXX').and('contain', 'xxxxx');
  });

  it('Add task on Inbox page via Header', () => {
    cy.visit('/inbox');
    cy.get('[data-cy=header__item][id=header__addTask]').click();
    cy.get('[data-cy=taskForm]')
      .should('be.visible')
      .within(() => {
        cy.get('button').contains('Add Task').should('be.disabled');
        cy.get('[data-cy=taskForm__name]')
          .click()
          .type('XXXXX2')
          .should('have.value', 'XXXXX2');

        cy.get('[data-cy=taskForm__desc]')
          .click()
          .type('xxxxx2')
          .should('have.value', 'xxxxx2');
        cy.get('button').contains('Add Task').should('not.be.disabled');
        cy.get('button').contains('Add Task').click();
        cy.get('button').contains('Cancel').click();
      });
    cy.get('[data-cy=addTask]').should('be.visible');
    cy.get('[data-cy=taskForm]').should('not.exist');
    cy.get('[data-cy=task]')
      .should('contain', 'XXXXX2')
      .and('contain', 'xxxxx2');
  });
});
