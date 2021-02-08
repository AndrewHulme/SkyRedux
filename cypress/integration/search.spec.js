describe("Search", () => {
  it("should show a search input field and a search button", () => {
    cy.visit("http://localhost:3000");
    cy.get("#searchInput").should("be.visible");
    cy.get("#searchButton").should("be.visible");
  });

  it("should immediately focus on search input field when user lands on page", () => {
    cy.visit("http://localhost:3000");

    cy.focused().should("have.id", "searchInput");
  });
});
