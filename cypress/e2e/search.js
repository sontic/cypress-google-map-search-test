import { CookiesInfoPageActions } from "../../PageObjects/PageActions/CookiesInfoPageActions.cy";
import { MapSearchPageActions } from "../../PageObjects/PageActions/MapSearchPageActions.cy";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const mapSearchPage = new MapSearchPageActions();
const cookiesPage = new CookiesInfoPageActions();

Given("a user is on the Google Maps page", () => {
  cy.visit("https://www.google.com/maps?hl=en");
  cookiesPage.denyButton();
});

When("the user enters “Paris” in the search box", () => {
  mapSearchPage.searchInput("Paris");
});

When("clicks “Search”", () => {
  mapSearchPage.searchButton();
});

Then(`the left panel should have "Paris" as the headline text`, () => {
  mapSearchPage.h1Text().should("contain", "Paris");
});

When("the user enters “London” in the search box", () => {
  mapSearchPage.searchInput("London");
});

Then(`the left panel should have "London" as the headline text`, () => {
  mapSearchPage.h1Text().should("contain", "London");
});

When("the user clicks the “Directions” button", () => {
  mapSearchPage.directionsButton();
});

Then(`the destination field should contain "London"`, () => {
  mapSearchPage.destinationInputText().should("contain", ["London"]);
});
