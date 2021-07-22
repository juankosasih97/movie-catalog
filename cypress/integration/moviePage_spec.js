describe('Movie Page Test', () => {
  beforeEach(() => {
    cy.visit('/movies');
    cy.waitForReact();
  });

  it('Movie page does not have series component', () => {
    cy.getReact("Series").should('not.exist');
  });

  it('Movie page does not have series listing', () => {
    cy.getReact("MovieCard", { props: {title: "Wolf Creek"}}).should('not.exist');
  });

  it('Movie card opens modal showing trivia', () => {
    cy.getReact("MovieModal").nthNode(1).getCurrentState().should("have.a.property", "trivia", "");

    cy.intercept({
      method: 'GET',
      url: 'http://numbersapi.com/**'
    }).as('getTrivia');
    
    cy.contains("San Andreas").click().wait('@getTrivia').its('response.body').should('not.be.empty');

    cy.contains('is the year that').should('not.be.empty');
  })
})