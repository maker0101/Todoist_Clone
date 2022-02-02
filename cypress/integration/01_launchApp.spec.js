describe('Launch app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Redirects / to /today', () => {
    cy.location('pathname').should('eq', '/today');
  });

  it('Header elements visible', () => {
    cy.getByTestId('header').and('be.visible');
    cy.getByTestId('header__item').should('have.length', 5).and('be.visible');
    cy.getByTestId('search_bar').and('be.visible');
  });

  it('Sidebar elements visible', () => {
    cy.getByTestId('sidebar').and('be.visible');
    cy.getByTestId('sidebar').contains('Inbox').and('be.visible');
    cy.getByTestId('sidebar').contains('Today').and('be.visible');
    cy.getByTestId('sidebar').contains('Upcoming').and('be.visible');
    cy.getByTestId('sidebar').contains('Projects').and('be.visible');
  });

  it('Today page elements visible', () => {
    cy.getByTestId('main').contains('Today').and('be.visible');
    cy.getByTestId('content__subtitle')
      .first()
      .contains('Overdue')
      .and('be.visible');
    cy.getByTestId('content__subtitle')
      .last()
      .contains(/[0-31]/)
      .and('be.visible');
    cy.getByTestId('content__subtitle')
      .last()
      .contains('Today')
      .and('be.visible');
    cy.getByTestId('main').contains('Add Task').and('be.visible');
  });
});
