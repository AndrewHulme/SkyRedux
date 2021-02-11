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
      "Fry / Professor Farnsworth / Zoidberg / Zapp Brannigan"
    );
    cy.get("#credits").contains("Billy West");
  });

  it("should show credits when viewing a movie", () => {
    cy.get("#searchInput").type("skyfall");
    cy.get("#searchButton").click();
    cy.get("#id37724").click();
    cy.get("#credits").contains("Daniel Craig");
    cy.get("#credits").contains("James Bond");
  });

  it("should allow the user to click through from movie credits to an actors details", () => {
    cy.get("#searchInput").type("skyfall");
    cy.get("#searchButton").click();
    cy.get("#id37724").click();
    cy.get("#id8784").click();
    cy.get("#personDetails").contains(
      "Daniel Wroughton Craig is an English actor"
    );
  });
});
