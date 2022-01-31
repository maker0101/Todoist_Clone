describe('Launch app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Redirects / to /today', () => {
    cy.url().should('be.equal', 'http://localhost:3000/today');
  });

  it('Header correctly displayed', () => {
    cy.get('header').and('be.visible');
    cy.get('header').find('svg').should('have.length', 6);
    cy.get('input').and('be.visible');
  });

  it('Sidebar correctly displayed', () => {
    cy.get('.sidebar').and('be.visible');
    cy.get('.sidebar').contains('Inbox').and('be.visible');
    cy.get('.sidebar').contains('Today').and('be.visible');
    cy.get('.sidebar').contains('Upcoming').and('be.visible');
    cy.get('.sidebar').contains('Projects').and('be.visible');
  });

  it('Today page correctly displayed', () => {
    cy.get('.content__title').contains('Today').and('be.visible');
    cy.get('.content__subTitle').first().contains('Overdue').and('be.visible');
    cy.get('.content__subTitle')
      .last()
      .contains(/[0-31]/)
      .and('be.visible');
    cy.get('.content__subTitle').last().contains('Today').and('be.visible');
    cy.get('.addTask__text').contains('Add Task').and('be.visible');
  });
});
