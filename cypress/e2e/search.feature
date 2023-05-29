Feature: Google Map Search

    Using this feature user should be able to search the map

    Background: Precondition:
        Given a user is on the Google Maps page

    Scenario: Acceptance Criteria 1:
        When the user enters "<searchPhrase>" in the search box
        And clicks “Search”
        Then the left panel should have "<searchPhrase>" as the headline text

        Examples:
            | searchPhrase |
            | Paris        |

    Scenario: Acceptance Criteria 2:
        When the user enters "<searchPhrase>" in the search box
        And clicks “Search”
        Then the left panel should have "<searchPhrase>" as the headline text
        When the user clicks the “Directions” button
        Then the destination field should contain "<searchPhrase>"

        Examples:
            | searchPhrase |
            | London       |