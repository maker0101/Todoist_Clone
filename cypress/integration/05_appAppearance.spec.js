import authUser from '../fixtures/auth-user.json';
const { email, password } = authUser;

describe('Launch app', () => {
  beforeEach(() => {
    cy.signin(email, password);
  });
  afterEach(() => {
    cy.signout();
  });

  it('shows header', () => {
    cy.getByTestId('header').and('be.visible');
    cy.getByTestId('search_bar').and('be.visible');
  });

  it('shows sidebar', () => {
    cy.getByTestId('sidebar').and('be.visible');
    cy.getByTestId('sidebar').contains('Inbox').and('be.visible');
    cy.getByTestId('sidebar').contains('Today').and('be.visible');
    cy.getByTestId('sidebar').contains('Upcoming').and('be.visible');
    cy.getByTestId('sidebar').contains('Projects').and('be.visible');
  });

  it('shows Today page', () => {
    cy.location('pathname').should('eq', '/today');
    cy.getByTestId('page').contains('Today').and('be.visible');
    cy.getByTestId('page').contains('Add Task').and('be.visible');
    cy.getByTestId('page')
      .contains('Get a clear view of the day ahead.')
      .and('be.visible');
    cy.getByTestId('page')
      .contains('All your tasks that are due today will show up here.')
      .and('be.visible');
    cy.getByTestId('page').contains('Add a task').and('be.visible');
  });

  it('shows Inbox page', () => {
    cy.getByTestId('sidebar').contains('Inbox').click();
    cy.location('pathname').should('eq', '/inbox');
    cy.getByTestId('page').contains('Inbox').and('be.visible');
    cy.getByTestId('page').contains('Add Task').and('be.visible');
    cy.getByTestId('page').contains('All clear').and('be.visible');
    cy.getByTestId('page')
      .contains('Looks like everything is organized in the right place.')
      .and('be.visible');
    cy.getByTestId('page').contains('Add a task').and('be.visible');
  });

  it('shows Upcoming page', () => {
    cy.getByTestId('sidebar').contains('Upcoming').click();
    cy.location('pathname').should('eq', '/upcoming');
    cy.getByTestId('content__title').contains('Upcoming').and('be.visible');
    cy.getByTestId('addTask').contains('Add Task').and('be.visible');
  });

  it('shows Project page', () => {
    cy.getByTestId('sidebar__project').contains('Welcome').click();
    cy.location('pathname').should('include', '/project');
    cy.getByTestId('page').contains('Welcome').and('be.visible');
    cy.getByTestId('page')
      .contains('Select this task to see more details')
      .and('be.visible');
    cy.getByTestId('page')
      .contains('Quick notes and links can go here.')
      .and('be.visible');
    cy.getByTestId('addTask').contains('Add Task');
  });
});
