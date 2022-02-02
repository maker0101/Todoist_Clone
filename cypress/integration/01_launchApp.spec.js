describe('Launch app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Redirects / to /today', () => {
    cy.location('pathname').should('eq', '/today');
  });

  it('Header elements visible', () => {
    cy.get('[data-cy=header]').and('be.visible');
    cy.get('[data-cy=header__item]').should('have.length', 5).and('be.visible');
    cy.get('[data-cy=search_bar]').and('be.visible');
  });

  it('Sidebar elements visible', () => {
    cy.get('[data-cy=sidebar]').and('be.visible');
    cy.get('[data-cy=sidebar]').contains('Inbox').and('be.visible');
    cy.get('[data-cy=sidebar]').contains('Today').and('be.visible');
    cy.get('[data-cy=sidebar]').contains('Upcoming').and('be.visible');
    cy.get('[data-cy=sidebar]').contains('Projects').and('be.visible');
  });

  it('Today page elements visible', () => {
    cy.get('[data-cy=main]').contains('Today').and('be.visible');
    cy.get('[data-cy=content__subtitle]')
      .first()
      .contains('Overdue')
      .and('be.visible');
    cy.get('[data-cy=content__subtitle]')
      .last()
      .contains(/[0-31]/)
      .and('be.visible');
    cy.get('[data-cy=content__subtitle]')
      .last()
      .contains('Today')
      .and('be.visible');
    cy.get('[data-cy=main]').contains('Add Task').and('be.visible');
  });
});
