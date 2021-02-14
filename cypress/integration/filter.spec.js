describe("Filter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show filtered results when user chooses filter", () => {
    cy.get("#filterSelect").select("filterMovies");

    cy.get("#searchInput").type("Judy");
    cy.get("#searchButton").click();

    cy.get("#results").should("contain", "movie");
    cy.get("#results").should("not.contain", "tv");
    cy.get("#results").should("not.contain", "person");
  });

  it("should show all filtered results when user chooses All", () => {
    cy.get("#filterSelect").select("filterAll");

    cy.get("#searchInput").type("Judy");
    cy.get("#searchButton").click();

    cy.get("#results").should("contain", "movie");
    cy.get("#results").should("contain", "tv");
    cy.get("#results").should("contain", "person");
  });
});
