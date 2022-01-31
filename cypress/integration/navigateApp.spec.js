describe('Navigate app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Navigate from Today to Inbox', () => {
    cy.get('.sidebar').contains('Inbox').click();
    cy.url().should('be.equal', 'http://localhost:3000/inbox');
    cy.get('.content__title').contains('Inbox').and('be.visible');
    cy.get('.addTask__text').contains('Add Task').and('be.visible');
  });

  it('Navigate from Today to Upcoming', () => {
    cy.get('.sidebar').contains('Upcoming').click();
    cy.url().should('be.equal', 'http://localhost:3000/upcoming');
    cy.get('.content__title').contains('Upcoming').and('be.visible');
    cy.get('.addTask__text').contains('Add Task').and('be.visible');
  });

  it('Navigate from Today to (first) Project', () => {
    cy.wait(1000);
    cy.get('.sidebar').find('.sidebar__item').eq(4).click();
    cy.url().should('include', '/project');
    cy.get('.content__title')
      .contains(/[a-zA-Z0-9_.-]*$/)
      .and('be.visible');
    cy.get('.addTask__text').contains('Add Task').and('be.visible');
  });
});
