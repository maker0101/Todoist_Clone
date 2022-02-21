import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('SignOut', () => {
  it('signs out user', () => {
    cy.signin(email, password);
    cy.getByTestId('header__accountIcon').click();
    cy.getByTestId('logout').click();
    cy.location('pathname').should('eq', '/signin');
  });
});
