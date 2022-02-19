Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-cy=${testId}]`);
});

Cypress.Commands.add('signin', (username, password) => {
  cy.visit('/signin');
  cy.getByTestId('signIn__email').type(username);
  cy.getByTestId('signIn__password').type(password);
  cy.getByTestId('signIn__submitBtn').click();
  cy.location('pathname').should('eq', '/today');
});
