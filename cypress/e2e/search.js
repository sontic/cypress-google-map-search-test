import { CookiesInfoPageActions } from "../../PageObjects/PageActions/CookiesInfoPageActions.cy";
import { MapSearchPageActions } from "../../PageObjects/PageActions/MapSearchPageActions.cy";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const mapSearchPage = new MapSearchPageActions();
const cookiesPage = new CookiesInfoPageActions();

Given("a user is on the Google Maps page", () => {
  cy.visit("https://www.google.com/maps?hl=en");
  cookiesPage.denyButton();
});

When("the user enters {string} in the search box", (searchPhrase) => {
  mapSearchPage.searchInput(searchPhrase);
});

When("clicks “Search”", () => {
  mapSearchPage.searchButton();
});

Then(
  `the left panel should have {string} as the headline text`,
  (searchPhrase) => {
    mapSearchPage.h1Text().should("contain", searchPhrase);
  }
);

When("the user clicks the “Directions” button", () => {
  mapSearchPage.directionsButton();
});

Then(`the destination field should contain {string}`, (searchPhrase) => {
  mapSearchPage.destinationInputText().should("contain", searchPhrase);
});

Then(`the left panel should contain {string} text`, (searchPhrase) => {
  mapSearchPage.unsuccessfulSearchMessage().should("contain", searchPhrase);
});
