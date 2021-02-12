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

  it("should allow the user to click through detail from tv to actors to movies to actors to tv", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#id615").click();
    cy.get("#id23679").click();
    cy.get("#personDetails").contains("West (born April 16, 1950)");
    cy.get("#id13151").click();
    cy.get("#showDetails").contains(
      "The Mystery Gang reunite and visit Moonscar Island"
    );
    cy.get("#id58272").click();
    cy.get("#personDetails").contains("Scott Innes (born October 30, 1966)");

    cy.get("#id416").click();
    cy.get("#showDetails").contains("Harvey Birdman, Attorney at Law");

    cy.get("#id21163").click();
    cy.get("#personDetails").contains(
      "Gary Cole is an American stage and screen actor"
    );
  });

  it("should show details when clicking on a search suggestion", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#suggestionid615").click();
    cy.get("#details").should("exist");
    cy.get("#details").contains(
      "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry"
    );
    cy.get("#credits").contains("Billy West");
    cy.get("#credits").contains(
      "Fry / Professor Farnsworth / Zoidberg / Zapp Brannigan"
    );
  });
});
