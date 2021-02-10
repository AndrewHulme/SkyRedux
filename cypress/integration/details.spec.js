describe("Details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show details when user clicks on a result", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#id615").click();
    cy.get("#details").should("exist");
    cy.get("#details").contains(
      "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry"
    );
  });

  it("should show credits when viewing a TV show", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#id615").click();
    cy.get("#credits").contains(
      "Real Name: Billy West - Character Name: Fry / Professor Farnsworth / Zoidberg / Zapp Brannigan"
    );
  });
});
