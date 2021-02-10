describe("Details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show details when user clicks on a result", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#id615").click();
    cy.get("#details").should("exist");
  });
});
