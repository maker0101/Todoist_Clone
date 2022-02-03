describe('Navigate app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('shows Inbox page (from Today)', () => {
    cy.getByTestId('sidebar').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.getByTestId('content__title').contains('Inbox').and('be.visible');
    cy.getByTestId('addTask').contains('Add Task').and('be.visible');
  });

  it('shows Upcoming page (from Today)', () => {
    cy.getByTestId('sidebar').contains('Upcoming').click();
    cy.location('pathname').should('eq', '/upcoming');
    cy.getByTestId('content__title').contains('Upcoming').and('be.visible');
    cy.getByTestId('addTask').contains('Add Task').and('be.visible');
  });

  it('shows Project page (from Today)', () => {
    cy.getByTestId('sidebar__project').first().click();
    cy.location('pathname').should('include', '/project');
    cy.getByTestId('content__title').should('be.visible');
    cy.getByTestId('addTask').contains('Add Task').and('be.visible');
  });
});
