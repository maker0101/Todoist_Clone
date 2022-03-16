// TODO: Currently test project needs to be cleaned and user to be logged out manually before running the tests
import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('Edit tasks', () => {
  beforeEach(() => {
    cy.signin(email, password);
    cy.navigateToInbox();
  });
  afterEach(() => {
    cy.signout();
  });

  it('edits task title and description', () => {
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

  /*
  it('check task as complete', () => {
    cy.quickAddTask('cypressTestCheckTask1', 'cypressTestCheckTaskDesc1');
    cy.getByTestId('task')
      // How do I select the checkbox within a specific task that contains a defined text?
      .should('contain', 'cypressTestCheckTask1')
      .within(() => {
        cy.get('.checkbox').click();
      });
    cy.getByTestId('page')
      .contains('cypressTestCheckTask1')
      .should('not.exist');
  });
  */
});
