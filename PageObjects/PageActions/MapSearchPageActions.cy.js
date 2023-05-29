const mapSearchLocators = require("../PageElements/MapSearchPageElements");

export class MapSearchPageActions {
  searchInput(searchItem) {
    cy.get(mapSearchLocators.SEARCH_INPUT)
      .should("be.enabled")
      .type(searchItem);
  }

  searchButton() {
    cy.intercept("https://www.google.com/search*").as("getSearch");
    cy.get(mapSearchLocators.SEARCH_BUTTON).click();
    cy.wait("@getSearch", { timeout: 20000 })
      .its("response.statusCode")
      .should("eq", 200);
  }

  h1Text() {
    return cy.get(mapSearchLocators.H1_TEXT, { timeout: 20000 }).invoke("text");
  }

  directionsButton() {
    cy.get(mapSearchLocators.DIRECTIONS_BUTTON).click({ force: true });
  }

  destinationInputText() {
    return cy
      .get(mapSearchLocators.DESTINATION_INPUT_LIST)
      .last()
      .invoke("attr", "aria-label");
  }

  unsuccessfulSearchMessage() {
    return cy
      .get(mapSearchLocators.UNSUCCESFUL_SEARCH_MESSAGE, { timeout: 20000 })
      .invoke("text");
  }
}
