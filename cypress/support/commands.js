Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-cy=${testId}]`);
});
