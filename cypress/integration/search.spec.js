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

  it("should show search results when user initiates a search with button", () => {
    cy.get("#results").should("not.exist");
    cy.get("#searchInput").type("futurama");
    cy.get("#searchButton").click();
    cy.get("#results").should("exist");
  });

  it("should show search results when user initiates a search using Enter key", () => {
    cy.get("#results").should("not.exist");
    cy.get("#searchInput").type("futurama");
    cy.get("#searchInput").type("{enter}");
    cy.get("#results").should("exist");
  });

  it("should show search suggestions when user initiates a search with 5 or more characters", () => {
    cy.get("#searchSuggestions").should("not.exist");
    cy.get("#searchInput").type("futurama");
    cy.get("#searchSuggestions").should("exist");
    cy.get("#suggestionid615").contains("Futurama");
    cy.get("#suggestionid13253").should("exist");
  });

  it("should filter search suggestions when user initiates a search with 5 or more characters and a TV filter", () => {
    cy.get("#searchSuggestions").should("not.exist");

    cy.get(".dropbtn").click();
    cy.get("#filterTv").click();

    cy.get("#searchInput").type("futurama");
    cy.get("#searchSuggestions").should("exist");
    cy.get("#suggestionid13253").should("not.exist");
    cy.get("#suggestionid615").should("exist");
  });

  it("should filter search suggestions when user initiates a search with 5 or more characters and a TV filter", () => {
    cy.get(".dropbtn").click();
    cy.get("#filterActors").click();

    cy.get("#searchInput").type("daniel");
    cy.get("#searchSuggestions").should("exist");
    cy.get("#suggestionid11053").should("not.exist");
    cy.get("#suggestionid10980").should("exist");
  });

  it("should close search suggestions when clicking on a search suggestion", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchSuggestions").should("exist");
    cy.get("#suggestionid615").click();
    cy.get("#searchSuggestions").should("not.exist");
  });

  it("should close search suggestions when clicking outside the input box", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("body").click(0, 0);
    cy.get("#searchSuggestions").should("not.exist");
  });

  it("should keep showing search suggestions when clicking inside the input box", () => {
    cy.get("#searchInput").type("futurama");
    cy.get("#searchInput").click();
    cy.get("#searchSuggestions").should("exist");
  });
});
