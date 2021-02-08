describe("Search", () => {
  it("should show a search input field and a search button", () => {
    cy.visit("http://localhost:3000");
    cy.get("#searchInput").should("be.visible");
    cy.get("#searchButton").should("be.visible");
  });
});
