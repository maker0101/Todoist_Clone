import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('Add task', () => {
  beforeEach(() => {
    cy.signin(email, password);
  });
  afterEach(() => {
    cy.signout();
  });

  it('adds task via placeholder', () => {
    cy.navigateToInbox();
    cy.getByTestId('addTaskButton').click();
    cy.getByTestId('taskForm').within(() => {
      cy.get('button').contains('Add Task').should('be.disabled');
      cy.getByTestId('taskForm__name')
        .type('cypressTestTitle')
        .should('have.value', 'cypressTestTitle');
      cy.getByTestId('taskForm__desc')
        .type('cypressTestDescription')
        .should('have.value', 'cypressTestDescription');
      cy.get('button').contains('Add Task').should('not.be.disabled');
      cy.get('button').contains('Add Task').click();
      cy.get('button').contains('Cancel').click();
    });
    cy.wait(1000);
    cy.getByTestId('addTask').should('be.visible');
    cy.getByTestId('taskForm').should('not.exist');
    cy.getByTestId('task')
      .should('contain', 'cypressTestTitle')
      .and('contain', 'cypressTestDescription');
  });

  it('adds task via inline form', () => {
    cy.navigateToInbox();
    cy.getByTestId('addTask').click();
    cy.getByTestId('taskForm').within(() => {
      cy.get('button').contains('Add Task').should('be.disabled');
      cy.getByTestId('taskForm__name')
        .type('cypressTestTitle2')
        .should('have.value', 'cypressTestTitle2');
      cy.getByTestId('taskForm__desc')
        .type('cypressTestDescription2')
        .should('have.value', 'cypressTestDescription2');
      cy.get('button').contains('Add Task').should('not.be.disabled');
      cy.get('button').contains('Add Task').click();
    });
    cy.wait(1000);
    cy.getByTestId('task')
      .should('contain', 'cypressTestTitle2')
      .and('contain', 'cypressTestDescription2');
  });

  it('adds task via Quick add', () => {
    cy.navigateToInbox();
    cy.get('[data-cy=header__item][id=header__addTask]').click();
    cy.getByTestId('taskForm')
      .should('be.visible')
      .within(() => {
        cy.get('button').contains('Add Task').should('be.disabled');
        cy.getByTestId('taskForm__name')
          .type('cypressTestTitle3')
          .should('have.value', 'cypressTestTitle3');

        cy.getByTestId('taskForm__desc')
          .type('cypressTestDescription3')
          .should('have.value', 'cypressTestDescription3');
        cy.get('button').contains('Add Task').should('not.be.disabled');
        cy.get('button').contains('Add Task').click();
        cy.get('button').contains('Cancel').click();
      });
    cy.wait(1000);
    cy.getByTestId('addTask').should('be.visible');
    cy.getByTestId('taskForm').should('not.exist');
    cy.getByTestId('task')
      .should('contain', 'cypressTestTitle3')
      .and('contain', 'cypressTestDescription3');
  });
});
