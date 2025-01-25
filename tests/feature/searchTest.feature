Feature: Udacity Catalog Search Functionality
  As a user of the Udacity platform
  I want to search for courses using different criteria
  So that I can find relevant learning content

  Background: 
    Given the application is loaded successfully

  Scenario: Validate Search Functionality
    And user search for "Testing"
    And user clicks on "Skill" Dropdown
    When user search for "Automation testing" in Skill Dropdown
    Then user sees results matching the search term in the UI
    And user fetch search results from the API
    Then the UI results should match the API results

  Scenario: Invalid Search with No Results
    When user search for "NonExistentTerm"
    Then user should see a "No Results Found" message

#   # Additional scenarios for edge cases
#   Scenario: Search with Special Characters
#     When user search for "Test@#$%"
#     Then user should see a "No results found" message

#   Scenario: Search with Multiple Keywords
#     When user search for "automation testing javascript"
#     Then user sees results matching the search term in the UI
#     And user fetch search results from the API
#     Then the UI results should match the API results

#   Scenario: Search with Empty String
#     When user search for ""
#     Then user should see all available courses

#   Scenario: Filter Search Results by Multiple Skills
#     And user search for "Development"
#     And user clicks on "Skill" Dropdown
#     When user search for "JavaScript" in Skill Dropdown
#     And user search for "Python" in Skill Dropdown
#     Then user sees results containing selected skills
#     And user fetch search results from the API
#     Then the UI results should match the API results