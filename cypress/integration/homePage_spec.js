describe('Home Page Link Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForReact();
  });

  it('Clicking "Popular Series" should navigate to series page', () => {
    cy.contains('Popular Series').click();
    cy.url().should('include', '/series');
  });

  it('Clicking "Popular Movies" should navigate to movies page', () => {
    cy.contains('Popular Movies').click();
    cy.url().should('include', '/movies');
  })
})