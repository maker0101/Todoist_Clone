import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('Navigate app', () => {
  it('Today protected before signin', () => {
    cy.visit('/today');
    cy.location('pathname').should('eq', '/signin');
  });

  it('Inbox protected before signin', () => {
    cy.visit('/inbox');
    cy.location('pathname').should('eq', '/signin');
  });

  it('Upcoming protected before signin', () => {
    cy.visit('/upcoming');
    cy.location('pathname').should('eq', '/signin');
  });

  it('Project protected before signin', () => {
    cy.visit('/project/99999999999999999999');
    cy.location('pathname').should('eq', '/signin');
  });

  it('Today open after signin', () => {
    cy.signin(email, password);
    cy.visit('/today');
    cy.wait(3000);
    cy.location('pathname').should('eq', '/today');
    cy.signout();
  });

  it('Inbox open after signin', () => {
    cy.signin(email, password);
    cy.getByTestId('sidebar').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.signout();
  });

  it('Upcoming open after signin', () => {
    cy.signin(email, password);
    cy.getByTestId('sidebar').contains('Upcoming').click();
    cy.location('pathname').should('eq', '/upcoming');
    cy.signout();
  });

  it('Project open after signin', () => {
    cy.signin(email, password);
    cy.getByTestId('sidebar__project').click();
    cy.location('pathname').should('eq', '/project/99999999999999999999');
    cy.signout();
  });
});
