describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show a search input field and a search button", () => {
    cy.get("#searchInput").should("be.visible");
    cy.get("#searchButton").should("be.visible");
  });

  it("should immediately focus on search input field when user lands on page", () => {
    cy.focused().should("have.id", "searchInput");
  });

  it("should show search results when user initiates a search", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#results").should("exist");
  });
});
