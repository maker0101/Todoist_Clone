describe('Launching web app', () => {
  it('Redirects / to /today', () => {
    cy.visit('http://localhost:3000');
    cy.url().should('be.equal', 'http://localhost:3000/today');
  });

  it('Main: H1 is displayed with text: Today', () => {
    cy.visit('http://localhost:3000');
    cy.get('.content__title').contains('Today');
  });
});
