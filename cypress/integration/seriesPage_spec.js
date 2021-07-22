describe('Series Page Test', () => {
  beforeEach(() => {
    cy.visit('/series');
    cy.waitForReact();
  });

  it('Series page does not have series component', () => {
    cy.getReact("Movies").should('not.exist');
  });

  it('Series page does not have series listing', () => {
    cy.getReact("MovieCard", { props: {title: "The Hunger Games"}}).should('not.exist');
  });

  it('Movie card opens modal showing trivia', () => {
    cy.getReact("MovieModal").nthNode(1).getCurrentState().should("have.a.property", "trivia", "");

    cy.intercept({
      method: 'GET',
      url: 'http://numbersapi.com/**'
    }).as('getTrivia');

    cy.contains("No Activity").click().wait('@getTrivia').its('response.body').should('not.be.empty');

    //trivia should be displayed in the UI
    cy.contains('is the year that').should('not.be.empty');
  })
})