Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-cy=${testId}]`);
});

Cypress.Commands.add('createNewEmail', () => {
  return `cypressTester+${Date.now()}@gmail.com`;
});

Cypress.Commands.add('signin', (username, password) => {
  cy.visit('/signin');
  cy.getByTestId('signIn__email').type(username);
  cy.getByTestId('signIn__password').type(password);
  cy.getByTestId('signIn__submitBtn').click();
  cy.location('pathname').should('eq', '/today');
});

Cypress.Commands.add('signout', () => {
  cy.getByTestId('header__accountIcon').click();
  cy.getByTestId('logout').click();
  cy.location('pathname').should('eq', '/signin');
});

Cypress.Commands.add('navigateToInbox', () => {
  cy.getByTestId('sidebar').contains('Inbox').click();
  cy.wait(2000);
  cy.location('pathname').should('eq', '/inbox');
});

Cypress.Commands.add('quickAddTask', (title, desc) => {
  cy.get('[data-cy=header__item][id=header__addTask]').click();
  cy.getByTestId('taskForm').within(() => {
    cy.getByTestId('taskForm__name').type(title);
    cy.getByTestId('taskForm__desc').type(desc);
    cy.get('button').contains('Add Task').click();
    cy.get('button').contains('Cancel').click();
  });
  cy.wait(1000);
  cy.getByTestId('task').should('contain', title).and('contain', desc);
});
