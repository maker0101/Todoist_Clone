describe('Launch app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('shows header', () => {
    cy.getByTestId('header').and('be.visible');
    cy.getByTestId('header__item').should('have.length', 5).and('be.visible');
    cy.getByTestId('search_bar').and('be.visible');
  });

  it('shows sidebar', () => {
    cy.getByTestId('sidebar').and('be.visible');
    cy.getByTestId('sidebar').contains('Inbox').and('be.visible');
    cy.getByTestId('sidebar').contains('Today').and('be.visible');
    cy.getByTestId('sidebar').contains('Upcoming').and('be.visible');
    cy.getByTestId('sidebar').contains('Projects').and('be.visible');
  });

  it('shows Today page', () => {
    cy.getByTestId('main').contains('Today').and('be.visible');
    cy.getByTestId('content__subtitle')
      .first()
      .contains('Overdue')
      .and('be.visible');
    cy.getByTestId('content__subtitle')
      .last()
      .should('contain', /[0-31]/)
      .and('be.visible');
    cy.getByTestId('content__subtitle')
      .last()
      .contains('Today')
      .and('be.visible');
    cy.getByTestId('main').contains('Add Task').and('be.visible');
  });

  /*
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
  */
});
