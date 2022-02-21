// TODO: Currently, user needs to be logged out manually before running the tests
describe('SignIn page', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('validates email empty is invalid', () => {
    cy.getByTestId('signIn__email')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates invalid email is invalid', () => {
    cy.getByTestId('signIn__email')
      .type('cypressTester')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates valid email is valid', () => {
    cy.getByTestId('signIn__email')
      .type('cypressTester@gmail.com')
      .then(($el) => $el[0].checkValidity())
      .should('be.true');
  });

  it('validates password empty is invalid', () => {
    cy.getByTestId('signIn__password')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates valid password is valid', () => {
    cy.getByTestId('signIn__password')
      .type('111111')
      .then(($el) => $el[0].checkValidity())
      .should('be.true');
  });

  it('signs in users with Email/ Password', () => {
    cy.getByTestId('signIn__email')
      .and('be.visible')
      .click()
      .type('cypressTester@gmail.com');
    cy.getByTestId('signIn__password').and('be.visible').click().type('111111');
    cy.getByTestId('signIn__submitBtn').and('be.visible').click();
    cy.location('pathname').should('eq', '/today');
    cy.signout();
  });

  it('signs in users as guest', () => {
    cy.getByTestId('signIn__guest').and('be.visible').click();
    cy.location('pathname').should('eq', '/today');
    cy.signout();
  });

  it('shows Google SignIn option', () => {
    cy.getByTestId('signIn__google').and('be.visible');
  });
});
