// TODO: Currently test project needs to be cleaned and user to be logged out manually before running the tests
describe('Edit tasks', () => {
  beforeEach(() => {
    cy.signin('cypressTester@gmail.com', '111111');
  });

  it('edits task by clicking task name', () => {
    cy.navigateToInbox();
    cy.quickAddTask('cypressTestTitleEdit1', 'cypressTestDescEdit1');
    cy.getByTestId('task__name')
      .should('contain', 'cypressTestTitleEdit1')
      .click();
    cy.getByTestId('taskForm').within(() => {
      cy.getByTestId('taskForm__name')
        .click()
        .clear()
        .type('cypressTestTitleEdit1-edited')
        .should('have.value', 'cypressTestTitleEdit1-edited');
      cy.getByTestId('taskForm__desc')
        .click()
        .clear()
        .type('cypressTestDescEdit1-edited')
        .should('have.value', 'cypressTestDescEdit1-edited');
      cy.get('button').contains('Save').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.getByTestId('task')
      .should('contain', 'cypressTestTitleEdit1-edited')
      .and('contain', 'cypressTestDescEdit1-edited');
  });
});
