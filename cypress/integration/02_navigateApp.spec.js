describe('Navigate app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Navigate from Today to Inbox', () => {
    cy.get('[data-cy=sidebar]').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.get('[data-cy=content__title]').contains('Inbox').and('be.visible');
    cy.get('[data-cy=addTask]').contains('Add Task').and('be.visible');
  });

  it('Navigate from Today to Upcoming', () => {
    cy.get('[data-cy=sidebar]').contains('Upcoming').click();
    cy.location('pathname').should('eq', '/upcoming');
    cy.get('[data-cy=content__title]').contains('Upcoming').and('be.visible');
    cy.get('[data-cy=addTask]').contains('Add Task').and('be.visible');
  });

  it('Navigate from Today to (first) Project', () => {
    cy.get('[data-cy=sidebar__project]').first().click();
    cy.location('pathname').should('include', '/project');
    cy.get('[data-cy=content__title]').should('be.visible');
    cy.get('[data-cy=addTask]').contains('Add Task').and('be.visible');
  });
});
