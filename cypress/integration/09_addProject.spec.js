// TODO: Currently test project needs to be cleaned and user to be logged out manually before running the tests
import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('Add project', () => {
  beforeEach(() => {
    cy.signin(email, password);
  });
  afterEach(() => {
    cy.signout();
  });

  // TODO: How to select '+' icon when hovering over 'Projects' in sidebar
  it('adds project with project name', () => {
    cy.getByTestId('sidebar').contains('Projects'); // How to select '+' (only appears on hover)?
  });
});
