// TODO: Unable to select/click delete icon (only appears on hover over task)
// TODO: Currently test project needs to be cleaned and user to be logged out manually before running the tests
import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

/*
describe('Delete tasks', () => {
  beforeEach(() => {
    cy.signin(email, password);
  });

  it('deletes task by clicking delete icon', () => {
    cy.navigateToInbox();
    cy.quickAddTask('cypressTestTitleDelete1', 'cypressTestDescDelete1');
    // TODO: Delete task missing
    cy.getByTestId('page')
      .contains('cypressTestTitleDelete1')
      .should('not.exist');
  });
});
*/
