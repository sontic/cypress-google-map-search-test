Feature: Google Map Search

Using this feature user should be able to search the map

Scenario: Acceptance Criteria 1:
    Given a user is on the Google Maps page
    When the user enters “Paris” in the search box
    When clicks “Search”
    Then the left panel should have "Paris" as the headline text

Scenario: Acceptance Criteria 2:
    Given a user is on the Google Maps page
    When the user enters “London” in the search box
    When clicks “Search”
    Then the left panel should have "London" as the headline text
    When the user clicks the “Directions” button
    Then the destination field should contain "London"