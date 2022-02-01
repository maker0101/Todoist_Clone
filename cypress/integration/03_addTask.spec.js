describe('Add task', () => {
  it('Add task on Inbox page via inline', () => {
    cy.visit('/inbox');
    cy.get('.content').contains('Add Task').click();
    cy.get('.taskForm').within(() => {
      cy.get('.taskForm__name').type('XXXXX').should('have.value', 'XXXXX');
      cy.get('.taskForm__description')
        .click()
        .type('xxxxx')
        .should('have.value', 'xxxxx');
      cy.get('button').contains('Add Task').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.get('.task').should('contain', 'XXXXX').and('contain', 'xxxxx');
  });

  it('Add task on Inbox page via Header', () => {
    cy.visit('/inbox');
    cy.get('.header__right').within(() => {
      cy.get('.header__item').first().click();
    });
    cy.get('.taskForm--inModal').within(() => {
      cy.get('input')
        .first()
        .click()
        .type('XXXXX2')
        .should('have.value', 'XXXXX2');
      cy.get('textarea').click().type('xxxxx2').should('have.value', 'xxxxx2');
      cy.get('button').contains('Save').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.get('.task').should('contain', 'XXXXX2').and('contain', 'xxxxx2');
  });
});
