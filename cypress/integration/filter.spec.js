describe("Filter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show filtered results when user chooses filter", () => {
    cy.get(".dropbtn").click();
    cy.get("#filterMovies").click();

    cy.get("#searchInput").type("Judy");
    cy.get("#searchButton").click();

    cy.get("#results").should("contain", "movie");
    cy.get("#results").should("not.contain", "tv");
    cy.get("#results").should("not.contain", "person");
  });
});
