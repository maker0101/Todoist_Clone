// TODO: Currently, user needs to be logged out manually before running the tests
describe('SignOut', () => {
  it('signs out user', () => {
    cy.signin('cypressTester@gmail.com', '111111');
    cy.getByTestId('header__accountIcon').click();
    cy.getByTestId('logout').click();
    cy.location('pathname').should('eq', '/signin');
  });
});
