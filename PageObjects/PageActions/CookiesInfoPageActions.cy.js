const cookiesInfoPageLocators = require("../PageElements/CookiesInfoPageElements.js");

export class CookiesInfoPageActions {
  denyButton() {
    cy.get(cookiesInfoPageLocators.DENY_BUTTON).click();
  }
}
