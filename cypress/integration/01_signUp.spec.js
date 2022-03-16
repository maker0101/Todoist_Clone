import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

const createNewEmail = () => `cypressTester+${Date.now()}@gmail.com`;

describe('SignUp page', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('validates email empty is invalid', () => {
    cy.getByTestId('signUp__email')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates invalid email is invalid', () => {
    cy.getByTestId('signUp__email')
      .type('cypressTester')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates valid email is valid', () => {
    cy.getByTestId('signUp__email')
      .type(email)
      .then(($el) => $el[0].checkValidity())
      .should('be.true');
  });

  it('validates password empty is invalid', () => {
    cy.getByTestId('signUp__password')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });

  it('validates valid password is valid', () => {
    cy.getByTestId('signUp__password')
      .type(password)
      .then(($el) => $el[0].checkValidity())
      .should('be.true');
  });

  it('signs up users with Email/ Password', () => {
    cy.getByTestId('signUp__email')
      .and('be.visible')
      .click()
      .type(createNewEmail());
    cy.getByTestId('signUp__password').and('be.visible').click().type(password);
    cy.getByTestId('signUp__submitBtn').and('be.visible').click();
    cy.location('pathname').should('eq', '/today');
    cy.signout();
  });

  it('signs up users as guest', () => {
    cy.getByTestId('signUp__guest').and('be.visible').click();
    cy.location('pathname').should('eq', '/today');
    cy.signout();
  });

  it('shows Google SignIn option', () => {
    cy.getByTestId('signUp__google').and('be.visible');
  });
});
